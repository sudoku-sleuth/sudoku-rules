---
format: open-rules
title: "Shifter Lines 105: Phistomefel? Who's that?!"
setter: gUBBLOR
source: https://sudokupad.app/jqcgdgrdus
case: https://sudoku-sleuth.com/cases/shifter-lines-105
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 colour "black"
kropki-2: kropki r5c5-r5c6 colour "black"
kropki-3: kropki r5c1-r5c2 colour "white"
kropki-4: kropki r1c4-r2c4 colour "white"
kropki-5: kropki r3c8-r3c9 colour "white"
kropki-6: kropki r1c6-r2c6 colour "white"
kropki-7: kropki r9c7-r9c8 colour "white"
kropki-8: kropki r9c2-r9c3 colour "white"
shifter-line-1: shifter-line r3c4-r3c3-r4c3-r5c3
shifter-line-2: shifter-line r6c3-r7c3-r7c4-r7c5
shifter-line-3: shifter-line r7c6-r7c7-r6c7-r5c7
shifter-line-4: shifter-line r4c7-r3c7-r3c6-r3c5
pair-1: pair r7c5-r7c6 relation {"op":"sum","value":10}
pair-2: pair r4c7-r5c7 relation {"op":"sum","value":10}
pair-3: pair r3c4-r3c5 relation {"op":"sum","value":10}
pair-4: pair r5c3-r6c3 relation {"op":"sum","value":10}
pair-5: pair r8c4-r9c4 relation {"op":"sum","value":10}
pair-6: pair r3c1-r4c1 relation {"op":"sum","value":10}
pair-7: pair r6c7-r7c7 relation {"op":"sum","value":5}
pair-8: pair r7c6-r7c7 relation {"op":"sum","value":5}
pair-9: pair r3c3-r4c3 relation {"op":"sum","value":5}
pair-10: pair r3c3-r3c4 relation {"op":"sum","value":5}
parity-cells-1: parity-cells r8c1-r9c1-r9c2-r9c8-r9c9-r8c9-r2c9-r1c9-r1c8-r1c1-r1c2-r2c1 parity "odd"
parity-cells-2: parity-cells r8c8-r8c2-r2c2-r2c8 parity "even"
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.

Even/Odd: Cells with a filled square must be even. Cells with a filled circle must be odd.
