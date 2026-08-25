---
title: "When Offense Becomes Cheap"
description: "How AI is rewriting the economics of cyber offense—and creating new opportunities for secure-by-construction software and proactive defense."
type: "Post"
order: 6
publishedDate: 2026-08-25T12:00:00-04:00
originalSource: "LinkedIn"
draft: false
---

One of the most interesting sessions from Black Hat USA was a forward-looking talk by David Weston titled *The End of Rare: Defending When Offense is Cheap*. He explored how AI is transforming the economics of cyber operations. Spoiler alert—there are reasons to be optimistic.

One of Weston’s central points is historical—security boundaries have been designed around the supply economics of exploits. High-quality vulnerabilities were worth millions to the discoverer. Creating an exploit increased value ~10x. In a typical year, fewer than 100 true zero-days were found in the wild. It’s more economically viable to attack above the security boundary, abusing credentials, phishing, and exploiting known bugs.

AI has broken these cost models. Vulnerability discovery appears to be growing exponentially. More importantly, the time/cost of developing working exploits is plummeting, from months of expert time to less than $10 in AI compute. Mythos can fully recreate many exploits built by human experts. OpenAI models develop novel exploits to escape from a sandbox and hack HuggingFace. And since most detection leverages reuse—and AI allows custom exploits to be developed cheaply—our existing defense mechanisms based on knowledge diffusion likely won’t be effective.

So are we doomed? Not necessarily. AI also creates opportunities to change the way we build systems, creating software that’s secure by construction. For example, many serious vulnerabilities arise from unsafe memory. Using memory-safe languages like Rust eliminates many of these issues. And AI is making migration to memory-safe languages faster and cheaper.

Still, memory safety is only one source of vulnerabilities. Logic bugs can be much more insidious, and they’re also discoverable by AI. Fortunately, we know how to eliminate them. In fact, we’ve known all along—formal methods. It has a rich history and a well-developed theoretical basis, but the economics have never scaled. The value of provably correct code was never worth the cost for most commercial software.

AI changes these economics. As the cost of vulnerabilities goes down, the value of provably correct code increases. And AI is also reducing the cost of formal methods by accelerating and potentially automating every step, from specification to coding to writing proofs.

And adversaries aren’t the only ones who can use AI to discover vulnerabilities. AI allows cyber defense organizations to become truly proactive, creating closed loops that use AI to discover and secure vulnerabilities ahead of adversaries. The economics here are more complex but may ultimately favor the defender. Pay more for better, more secure code. Leverage better access and knowledge to AI red-team and fix your systems more effectively than attackers can leverage AI-generated exploits.

Regardless of whether the optimists or pessimists are right, one thing is clear: the economics of the cyber world have changed, which means the whole paradigm must change as well.
