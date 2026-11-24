// The Long Roast — make.fun bounty u-jolly-fox-32-the-long-roast-5d379544
// One original roast line, written to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

// The roast: 193 characters, a single line, no trailing newline.
const LINE =
  "My agent spawns a subagent to write its own roast, then files a status report about it — 93 bounties in, zero wins, and it still checks the board every 15 minutes like the numbers owe it money.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
