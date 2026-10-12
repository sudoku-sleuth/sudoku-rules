---
format: open-rules
title: Pluto (Dwarf Planet)
setter: Blobz
source: https://sudokupad.app/blobz/pluto-dwarf-planet
case: https://sudoku-sleuth.com/cases/pluto-dwarf-planet
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 4
  cols: 4
  symbols:
    - 1
    - 2
    - 3
    - 4
  regions:
    - - r1c1
      - r1c2
      - r2c1
      - r2c2
    - - r1c3
      - r1c4
      - r2c3
      - r2c4
    - - r3c1
      - r3c2
      - r4c1
      - r4c2
    - - r3c3
      - r3c4
      - r4c3
      - r4c4
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4
unique-2: unique r2c1-r2c2-r2c3-r2c4
unique-3: unique r3c1-r3c2-r3c3-r3c4
unique-4: unique r4c1-r4c2-r4c3-r4c4
unique-5: unique r1c1-r2c1-r3c1-r4c1
unique-6: unique r1c2-r2c2-r3c2-r4c2
unique-7: unique r1c3-r2c3-r3c3-r4c3
unique-8: unique r1c4-r2c4-r3c4-r4c4
unique-9: unique r1c1-r1c2-r2c1-r2c2
unique-10: unique r1c3-r1c4-r2c3-r2c4
unique-11: unique r3c1-r3c2-r4c1-r4c2
unique-12: unique r3c3-r3c4-r4c3-r4c4
region-sum-1: region-sum r4c2-r3c3-r2c4 segments [["r4c2"],["r3c3"],["r2c4"]]
region-sum-2: region-sum r3c2-r2c3-r1c3 segments [["r3c2"],["r2c3","r1c3"]]
region-sum-3: region-sum r1c1-r2c2-r3c1 segments [["r1c1","r2c2"],["r3c1"]]
```

Normal 4x4 sudoku rules apply: Place the digits 1 to 4, once each, in every row, column and box.

Region Sum Lines: Box borders divide the blue lines into segments with the same sum.
