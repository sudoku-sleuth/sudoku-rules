---
format: open-rules
title: "Equality Cages 124 x Shifter Lines 110: ᚱúᚾᚨᚱ (Runes)"
setter: gUBBLOR
source: https://sudokupad.app/1q2d3ri0hf
case: https://sudoku-sleuth.com/cases/runes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 66b845ed58bfdcb4cfea015c1ca792dc
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r3c8-r3c9
equality-cage-2: equality-cage r3c4-r3c5
equality-cage-3: equality-cage r5c1-r5c2-r6c1-r6c2
equality-cage-4: equality-cage r7c6-r7c7
equality-cage-5: equality-cage r9c6-r9c7
equality-cage-6: equality-cage r9c3-r9c4
equality-cage-7: equality-cage r1c1-r1c2
equality-cage-8: equality-cage r1c8-r1c9
equality-cage-9: equality-cage r5c4-r5c5
kropki-1: kropki r3c3-r3c4 black
kropki-2: kropki r3c6-r3c7 black
kropki-3: kropki r5c7-r6c7 black
kropki-4: kropki r6c6-r7c6 black
kropki-5: kropki r7c2-r8c2 black
kropki-6: kropki r3c9-r4c9 white
kropki-7: kropki r6c2-r6c3 white
shifter-line-1: shifter-line r2c3-r3c3-r4c3-r5c3
shifter-line-2: shifter-line r3c3-r2c4
shifter-line-3: shifter-line r4c3-r3c4
shifter-line-4: shifter-line r5c7-r4c7-r3c7
shifter-line-5: shifter-line r4c7-r3c6-r2c7
shifter-line-6: shifter-line r5c2-r6c1-r7c2
shifter-line-7: shifter-line r6c2-r7c3-r8c2
shifter-line-8: shifter-line r6c8-r5c8
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[6.5,8.5],[5.5,7.5],[6.5,7.5],[5.5,8.5],[6.5,8.5]],"color":"#d8ee25","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
