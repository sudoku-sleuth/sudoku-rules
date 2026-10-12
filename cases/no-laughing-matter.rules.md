---
format: open-rules
title: No Laughing Matter
setter: Blobz
source: https://sudokupad.app/blobz/no-laughing-matter
case: https://sudoku-sleuth.com/cases/no-laughing-matter
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c4=7 r5c5=8
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3 total 9 connected true
cage-2: cage r4c3-r5c3 total 14 connected true
cage-3: cage r7c4-r7c5-r7c6 total 12 connected true
cage-4: cage r8c5-r9c5 total 13 connected true
cage-5: cage r4c9-r5c9 total 11 connected true
cage-6: cage r4c4-r4c5 total 7 connected true
arrow-1: arrow r4c2-r5c2-r6c1 bulb ["r3c1"]
arrow-2: arrow r8c2-r7c2-r7c3 bulb ["r9c1"]
arrow-3: arrow r9c8-r8c7-r7c7 bulb ["r8c9"]
arrow-4: arrow r6c9-r5c8-r5c7 bulb ["r7c8"]
arrow-5: arrow r6c5-r5c6-r4c6 bulb ["r6c4"]
arrow-6: arrow r2c4-r3c5-r3c4 bulb ["r2c5"]
arrow-7: arrow r2c8-r3c9-r3c8 bulb ["r1c7"]
```

Normal sudoku rules apply. Digits on arrows sum to the digit in the connected circle. Digits in cages sum to the small clue in the top left corner.

Nitrous Oxide (N2O) -- commonly known as Laughing Gas -- is composed of Nitrogen (atomic number 7) and Oxygen (atomic number 8).

There is one 7-8 domino (a Nitrous Oxide molecule?) in the central box; no other molecules exist. That is to say, no other domino or diagonal pair contain a 7-8 combination (but, 7-7 or 8-8 diagonals are allowed).

Of the remaining 7’s and 8’s (“free atoms”), none of them are adjacent to the central molecule (orthogonally or diagonally) and none of them are in cages or on circles/arrows.
