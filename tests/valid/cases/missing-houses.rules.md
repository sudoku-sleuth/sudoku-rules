---
format: open-rules
title: Six-symbol thermometer
setter: Example Setter
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 6
  cols: 6
  symbols: [1, 2, 3, 4, 5, 6]
  regions:
    - [r1c1, r1c2, r1c3, r2c1, r2c2, r2c3]
    - [r1c4, r1c5, r1c6, r2c4, r2c5, r2c6]
    - [r3c1, r3c2, r3c3, r4c1, r4c2, r4c3]
    - [r3c4, r3c5, r3c6, r4c4, r4c5, r4c6]
    - [r5c1, r5c2, r5c3, r6c1, r6c2, r6c3]
    - [r5c4, r5c5, r5c6, r6c4, r6c5, r6c6]
---

```rules
row_1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
row_2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
row_3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
row_4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
row_5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
row_6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
col_1: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
col_2: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
col_3: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
col_4: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
col_5: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
col_6: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
region_1: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
region_2: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
region_3: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
region_4: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
region_5: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
region_6: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
thermo r1c1-r1c2-r1c3
```

## Setter wording

Normal 6×6 Sudoku rules apply with digits 1–6 and the six listed 2×3 regions. Digits on the thermometer strictly increase from the bulb at r1c1 to the tip at r1c3.
