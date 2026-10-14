---
format: open-rules
title: Happy New Year 2024
setter: Jobo
source: https://sudokupad.app/76hthsxtdb
case: https://sudoku-sleuth.com/cases/happy-new-year-2024
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
givens: r1c8=2 r1c9=4
exported: 0c48c39e979139991d31636208c542c2
---

```rules
sudoku 9x9
cage-1: cage r2c7-r2c8-r3c8 total 24 connected true
cage-2: cage r1c7-r1c8-r1c9-r2c9-r3c9 total 20 connected true
thermo-1: thermo r7c6-r8c6-r9c6
thermo-2: thermo r2c2-r3c2-r4c2
whispers-1: whispers r7c5-r7c6-r7c7 gap 5
whispers-2: whispers r6c6-r7c6-r8c6 gap 5
whispers-3: whispers r7c1-r8c2-r7c2 gap 4 loop true
whispers-4: whispers r7c2-r6c3 gap 4
whispers-5: whispers r6c3-r5c3-r4c4 gap 4
whispers-6: whispers r6c3-r6c4-r5c5 gap 4
whispers-7: whispers r4c4-r5c5 gap 4
whispers-8: whispers r5c8-r6c8-r5c9 gap 4 loop true
whispers-9: whispers r5c8-r4c7 gap 4
whispers-10: whispers r4c7-r4c6-r3c5 gap 4
whispers-11: whispers r4c7-r3c7-r2c6 gap 4
whispers-12: whispers r3c5-r2c6 gap 4
renban r1c1-r2c2-r3c3-r1c3-r3c1
region-sum-1: region-sum r6c5-r7c6-r8c7 segments [["r6c5"],["r7c6"],["r8c7"]]
region-sum-2: region-sum r6c7-r7c6-r8c5 segments [["r6c7"],["r7c6","r8c5"]]
nabner r2c1-r2c2-r2c3-r1c2-r3c2
quadruple-1: quadruple r8c2-r8c3-r9c2-r9c3 digits [2,4]
quadruple-2: quadruple r8c7-r8c8-r9c7-r9c8 digits [2,4]
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.
Digits in cages must sum to the small clue in the top left corner.
Adjacent digits along an orange line must differ by at least 4.
Digits in a quadruple clue must appear at least once in the four surrounding cells.

The following lines all go straight where they cross.

Digits along a blue line sum to the same value in each 3x3 box the line passes through.
Adjacent digits along a green line must differ by at least 5.
Digits along a purple line are a set of consecutive, non-repeating digits in any order.
No two digits on a golden line can be consecutive, regardless of their order along the line.
