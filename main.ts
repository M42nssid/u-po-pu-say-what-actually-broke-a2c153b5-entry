// Say What Actually Broke — entry program (Node 22, stdlib only).
//
// Writes one original line of software error copy to /output/entry.txt:
// a brutal, funny, shippable error message that names the real failure
// (the server ran out of disk space) and tells the user what to do next.
// No network, no clock, no randomness — the output is a fixed string,
// so every run produces byte-identical output.
//
// Outside the grader's sandbox, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Revised line: same failure, tighter voice — the team owns it in the
// first person ("We ran out..."), the joke lands on "error logs about
// running out of disk space", and the last two sentences tell the user
// what happened next and what to do. Still one line, still under 200
// characters, still shippable in a real error dialog.
const LINE =
  'We ran out of disk space, mostly on error logs about running out of disk space. We deleted a few. Try again.';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), LINE, 'utf8');
