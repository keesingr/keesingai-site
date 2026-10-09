export const destination = {
  phrase: "MCLEAN COMMUNITY CENTER RAMP TO SECOND FLOOR",
  words: ["MCLEAN", "COMMUNITY", "CENTER", "RAMP", "TO", "SECOND", "FLOOR"],
};

export const reports = [
  {
    id: "muffet",
    reportNumber: "2026-0417",
    date: "April 17, 2026",
    time: "12:42 PM",
    location: "Public park, McLean, VA",
    officer: "Charlotte Webb",
    incidentType: "Disturbance / Suspicious Arachnid",
    answer: "LITTLE MISS MUFFET",
    answerPlacement: { type: "field", label: "VICTIM" },
    narrative: [
      "Officers responded to a disturbance involving an individual seated on a small upholstered stool, consuming soggy cottage cheese. The victim reported that an unidentified eight-legged suspect approached and sat beside her without invitation, causing her to flee the scene.",
    ],
    disposition: "No injuries reported. Suspect remains at large.",
  },
  {
    id: "macdonald",
    reportNumber: "2026-0612",
    date: "June 12, 2026",
    time: "5:47 AM",
    location: "Rural property, McLean, VA",
    officer: "Anna Matapeia",
    incidentType: "Noise Complaint",
    answer: "OLD MACDONALD HAD A FARM",
    answerPlacement: { type: "narrative" },
    narrative: [
      "Officers responded to repeated complaints of excessive noise originating from a nearby agricultural property. Witnesses described a continuing disturbance involving cows, pigs, ducks, and other livestock, each producing distinctive vocalizations. The property owner reportedly encouraged the activity.",
      {
        before: "A next-door neighbor acknowledged the ongoing disturbance but declined to file a formal complaint. He explained that he'd long since made peace with the situation, having accepted years ago that ",
        after: ".",
      },
    ],
    disposition: "Verbal warning issued. Noise resumed shortly after officers departed.",
  },
  {
    id: "pigs",
    reportNumber: "2026-0521",
    date: "May 21, 2026",
    time: "3:17 PM",
    location: "McLean Hamlet, McLean, VA",
    officer: "Kevin Bacon",
    incidentType: "Assault / Destruction of Property / Attempted Breaking and Entering",
    answer: "THE THREE LITTLE PIGS",
    answerPlacement: { type: "field", label: "CASE FILE NAME" },
    extraFields: [{ label: "Complainants", value: "Hamm, Wilbur, and Babe (brothers)" }],
    narrative: [
      "Three brothers reported a series of attacks at their respective residences. The first two homes sustained extensive structural damage after the assailant repeatedly inhaled deeply and exhaled with extraordinary force against their exterior walls.",
      "The brothers fled to the third sibling's brick mansion in McLean Hamlet, where they have barricaded themselves. They report that the suspect has followed them and fear another attack.",
    ],
    disposition: "Suspect at large. Residents advised to keep fireplace flue closed.",
  },
  {
    id: "riding-hood",
    reportNumber: "2026-0619",
    date: "June 19, 2026",
    time: "4:35 PM",
    location: "Scott's Run Nature Preserve, McLean, VA",
    officer: "Jacob Grimm",
    incidentType: "Suspicious Person / Possible Impersonation",
    answer: "LITTLE RED RIDING HOOD",
    answerPlacement: { type: "field", label: "COMPLAINANT" },
    narrative: [
      "Complainant reported being approached by an unknown male while walking a trail in Scott's Run Nature Preserve, carrying a basket of baked goods to her grandmother's residence. The individual was described as unusually hairy, with a long, pointed nose, prominent ears, and an apparent interest in the grandmother's address.",
      "After the stranger departed, complainant continued to her grandmother's home. Upon arrival, she found the same individual inside, apparently impersonating her grandmother. Alarmed by his appearance and unusually large teeth, complainant fled the premises.",
    ],
    disposition: "Suspect at large. Grandmother's whereabouts unknown.",
  },
  {
    id: "mary",
    reportNumber: "2026-0922",
    date: "September 22, 2026",
    time: "10:15 AM",
    location: "St. Luke's Elementary School, McLean, VA",
    officer: "Samuel Shepard",
    incidentType: "Animal Complaint / Classroom Disturbance",
    answer: "MARY HAD A LITTLE LAMB",
    answerPlacement: { type: "narrative" },
    narrative: [
      "Officers responded to a complaint from a parent concerned that her child, who suffers from severe animal allergies, had been exposed to livestock in a kindergarten classroom.",
      "Upon arrival, the responding officer observed a small, white, woolly animal wandering between desks, while several students laughed and shouted excitedly. Attempts to remove the animal resulted in further disruption when it escaped the officer's grasp, ran through the classroom, and returned to the side of the young girl who had brought it.",
      {
        before: "When asked why a student had brought a farm animal to school, the kindergarten teacher explained that it was Bring Your Favorite Pet Day, and that ",
        after: ".",
      },
    ],
    disposition: "Animal removed from classroom. Officer treated for minor abrasions. Instruction resumed after a 20-minute delay.",
  },
  {
    id: "chicken",
    reportNumber: "2026-1003",
    date: "October 3, 2026",
    time: "11:24 AM",
    location: "McLean Farmers Market, McLean, VA",
    officer: "H. Penny",
    incidentType: "Public Disturbance / False Emergency Report",
    answer: "CHICKEN LITTLE",
    answerPlacement: { type: "disposition" },
    narrative: [
      "Officers responded to multiple reports of a disturbance at the McLean Farmers Market, where an agitated individual was running between vendor stalls, warning shoppers of an imminent catastrophe. Several patrons fled the area, and one vendor abandoned his merchandise.",
      "The individual stated that the incident began when an acorn fell from a tree and struck the top of their head. Based on this event, the individual had concluded that a much larger disaster was underway and repeatedly urged bystanders to seek immediate shelter.",
      "Responding officers found no evidence of structural damage, unusual weather activity, or any other imminent threat. The individual nevertheless continued to insist that the danger was real.",
    ],
    disposition: {
      before: "The individual, referred to here by the pseudonym ",
      after: " to preserve privacy, was transported to a local hospital for psychiatric evaluation. No further public safety threat was identified.",
    },
  },
];

// Source and destination positions are zero-based and ignore spaces.
// This mapping uses 35 distinct source positions. A balanced 7/7/6/6/6/6
// mapping cannot exceed 35, so the three extra uses below are minimal.
export const extractions = [
  [0, "mary", 16, "M"], [1, "chicken", 0, "C"], [2, "riding-hood", 0, "L"],
  [3, "chicken", 5, "E"], [4, "mary", 1, "A"], [5, "macdonald", 8, "N"],
  [6, "chicken", 0, "C"], [7, "macdonald", 0, "O"], [8, "muffet", 10, "M"],
  [9, "muffet", 6, "M"], [10, "muffet", 11, "U"], [11, "riding-hood", 13, "N"],
  [12, "muffet", 1, "I"], [13, "muffet", 2, "T"], [14, "mary", 3, "Y"],
  [15, "chicken", 3, "C"], [16, "pigs", 2, "E"], [17, "chicken", 6, "N"],
  [18, "pigs", 0, "T"], [19, "pigs", 6, "E"], [20, "macdonald", 18, "R"],
  [21, "pigs", 5, "R"], [22, "macdonald", 9, "A"], [23, "mary", 0, "M"],
  [24, "pigs", 14, "P"], [25, "pigs", 3, "T"], [26, "riding-hood", 16, "O"],
  [27, "muffet", 8, "S"], [28, "riding-hood", 5, "E"], [29, "macdonald", 5, "C"],
  [30, "riding-hood", 17, "O"], [31, "chicken", 6, "N"], [32, "riding-hood", 8, "D"],
  [33, "muffet", 12, "F"], [34, "mary", 8, "L"], [35, "macdonald", 7, "O"],
  [36, "macdonald", 0, "O"], [37, "mary", 2, "R"],
].map(([destinationPosition, reportId, sourcePosition, letter]) => ({
  destinationPosition,
  reportId,
  sourcePosition,
  letter,
}));

export const normalizeAnswer = (value) => value.toUpperCase().replace(/[^A-Z]/g, "");
