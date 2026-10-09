import { destination, extractions, normalizeAnswer, reports } from "../src/data/police-puzzle.js";

const target = normalizeAnswer(destination.phrase);
const reportById = new Map(reports.map((report) => [report.id, report]));
const failures = [];

const maximumDistinctMappings = (quotas) => {
  const source = 0;
  const reportOffset = 1;
  let nextNode = reportOffset + reports.length;
  const sourceNodes = reports.map((report) =>
    [...normalizeAnswer(report.answer)].map((letter, sourcePosition) => ({
      node: nextNode++,
      letter,
      sourcePosition,
    })),
  );
  const destinationOffset = nextNode;
  nextNode += target.length;
  const sink = nextNode++;
  const graph = Array.from({ length: nextNode }, () => []);

  const addEdge = (from, to, capacity) => {
    graph[from].push({ to, capacity, reverse: graph[to].length });
    graph[to].push({ to: from, capacity: 0, reverse: graph[from].length - 1 });
  };

  reports.forEach((report, reportIndex) => {
    const reportNode = reportOffset + reportIndex;
    addEdge(source, reportNode, quotas[reportIndex]);
    for (const sourceEntry of sourceNodes[reportIndex]) {
      addEdge(reportNode, sourceEntry.node, 1);
      [...target].forEach((letter, destinationPosition) => {
        if (sourceEntry.letter === letter) addEdge(sourceEntry.node, destinationOffset + destinationPosition, 1);
      });
    }
  });
  for (let index = 0; index < target.length; index += 1) addEdge(destinationOffset + index, sink, 1);

  let flow = 0;
  while (true) {
    const parent = Array(nextNode).fill(null);
    const queue = [source];
    parent[source] = { node: -1, edge: -1 };
    for (let cursor = 0; cursor < queue.length && parent[sink] === null; cursor += 1) {
      const node = queue[cursor];
      graph[node].forEach((edge, edgeIndex) => {
        if (edge.capacity > 0 && parent[edge.to] === null) {
          parent[edge.to] = { node, edge: edgeIndex };
          queue.push(edge.to);
        }
      });
    }
    if (parent[sink] === null) break;
    for (let node = sink; node !== source;) {
      const step = parent[node];
      const edge = graph[step.node][step.edge];
      edge.capacity -= 1;
      graph[node][edge.reverse].capacity += 1;
      node = step.node;
    }
    flow += 1;
  }
  return flow;
};

if (target.length !== 38) failures.push(`Destination has ${target.length} letters, expected 38.`);
if (extractions.length !== target.length) failures.push(`Found ${extractions.length} mappings, expected ${target.length}.`);

const destinationPositions = new Set();
const sourceUses = new Map();
const contributionCounts = Object.fromEntries(reports.map((report) => [report.id, 0]));
const extracted = Array(target.length).fill("");

for (const entry of extractions) {
  if (destinationPositions.has(entry.destinationPosition)) failures.push(`Destination position ${entry.destinationPosition} is mapped more than once.`);
  destinationPositions.add(entry.destinationPosition);

  const report = reportById.get(entry.reportId);
  if (!report) {
    failures.push(`Unknown report ID: ${entry.reportId}.`);
    continue;
  }

  const source = normalizeAnswer(report.answer);
  const sourceLetter = source[entry.sourcePosition];
  const targetLetter = target[entry.destinationPosition];
  if (sourceLetter !== targetLetter || entry.letter !== targetLetter) {
    failures.push(`Bad mapping at destination ${entry.destinationPosition}: source=${sourceLetter}, mapping=${entry.letter}, target=${targetLetter}.`);
  }

  extracted[entry.destinationPosition] = sourceLetter;
  contributionCounts[entry.reportId] += 1;
  const sourceKey = `${entry.reportId}:${entry.sourcePosition}`;
  sourceUses.set(sourceKey, (sourceUses.get(sourceKey) ?? 0) + 1);
}

for (let index = 0; index < target.length; index += 1) {
  if (!destinationPositions.has(index)) failures.push(`Destination position ${index} is unmapped.`);
}

const counts = Object.values(contributionCounts);
if (Math.min(...counts) < 6 || Math.max(...counts) > 7) failures.push(`Unbalanced contributions: ${counts.join(", ")}.`);
if (extracted.join("") !== target) failures.push(`Extraction produced ${extracted.join("")}, expected ${target}.`);

const reusedPositions = [...sourceUses.values()].filter((uses) => uses > 1);
const extraUses = reusedPositions.reduce((total, uses) => total + uses - 1, 0);
const quotas = reports.map((report) => contributionCounts[report.id]);
const maximumDistinct = maximumDistinctMappings(quotas);
const minimumExtraUses = target.length - maximumDistinct;
if (extraUses !== minimumExtraUses) failures.push(`Mapping uses ${extraUses} extra source uses; the computed minimum is ${minimumExtraUses}.`);

console.log("Police puzzle mapping validation");
for (const report of reports) console.log(`- ${report.id}: ${contributionCounts[report.id]} destination letters`);
console.log(`- reused source positions: ${reusedPositions.length}`);
console.log(`- extra uses: ${extraUses}`);
console.log(`- maximum distinct positions under this balance: ${maximumDistinct}`);
console.log(`- minimum extra uses under this balance: ${minimumExtraUses}`);
console.log(`- extraction: ${destination.phrase}`);

if (failures.length > 0) {
  for (const failure of failures) console.error(`ERROR: ${failure}`);
  process.exitCode = 1;
} else {
  console.log("Mapping is valid.");
}
