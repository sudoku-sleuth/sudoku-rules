---
format: open-rules
title: Menorah
setter: Jobo
source: https://sudokupad.app/25doiit4rm
case: https://sudoku-sleuth.com/cases/menorah
library: https://rules.sudoku-sleuth.com/
status: read
givens: r7c9=6
exported: 429e8b7d60d03c396a68664a580a031d
---

```rules
sudoku 9x9
between-1: between r4c5-r5c5-r6c5-r7c5-r8c5 ends ["r3c5","r9c5"]
between-2: between r4c3-r5c4-r5c5-r5c6-r4c7 ends ["r3c3","r3c7"]
between-3: between r4c2-r5c2-r6c3-r6c4-r6c5-r6c6-r6c7-r5c8-r4c8 ends ["r3c2","r3c8"]
between-4: between r4c1-r5c1-r6c2-r7c3-r7c4-r7c5-r7c6-r7c7-r6c8-r5c9-r4c9 ends ["r3c1","r3c9"]
parity-1: parity r2c2-r3c2
parity-2: parity r1c3-r2c3-r3c3
parity-3: parity r1c7-r2c7-r3c7
parity-4: parity r2c8-r3c8
renban r9c3-r9c4-r8c5-r9c6-r9c7
pair-1: pair r9c3-r9c4 sum 5
pair-2: pair r9c6-r9c7 sum 5
```

Normal sudoku rules apply.

Digits on between lines must be between the digits in the attached circles. Lines go straight where they cross.

Digits along the purple line are a set of consecutive, non-repeating digits in any order.

Adjacent digits along a red line must alternate in parity (odd/even).

Digits separated by a V must sum to 5. Not all V are given.
