---
layout: post
title: "Atproto Trust Explorer"
date: 2026-03-18
---

I've been using BlueSky for a while now, and I've always considered hosting my own PDS, but before I'm able to
do that, I want to understand the ins and outs of the whole protocol behind BlueSky and its variants.

Why is ATProtocol data verifiable / self-certified? How is Atproto better than a centralized platform? What makes things portable? Who do we still need to trust?

The seed for this idea has been sitting around quietly in my brain for a while, but recently I
met [@holke.xyz](https://bsky.app/profile/holke.xyz) from [Hypercerts](https://www.hypercerts.org/), and he told me
that they are treating ATprotocol data as verifiable streams right now.

The seed had to sprout.

Since the kids are sick this week and I have to entertain them, this seemed like the perfect opportunity to find spare
minutes here and there to dictate questions and plans to a machine.
So, I decided to build a static web application that allows you to paste a bsky post link and watch how that link
is transformed into cryptographic proofs and identify along the way where trust assumptions remain.

Try it out at [/atproto-trust-explorer](/atproto-trust-explorer/).

I didn't build this as much as I prompted it into being.
This is the first time I'm attempting to build anything front-end with an AI agent 🤖😎. 
It's entirely vibe-coded, not even "AI engineered". I haven't really looked through the source code it produced, but if you're interested, I can also
publish that. It's full of bugs, you'll have fun.

---

P.S. While trying to publish this, I got introduced to [pdsls.dev](https://pdsls.dev/). Holy cow, very clean and nice,
seems like a very useful tool. Check it out if you're exploring ATprotocol stuff.