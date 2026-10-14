---
format: open-rules
title: "Shifter Lines 107: Shifty little arrows"
setter: gUBBLOR
source: https://sudokupad.app/0e9ir10fb3
case: https://sudoku-sleuth.com/cases/shifter-lines-107
library: https://rules.sudoku-sleuth.com/
status: read
exported: 38a951ef27764e0b5eee159853aa961d
---

```rules
sudoku 9x9
kropki-1: kropki r8c4-r9c4 black
kropki-2: kropki r1c7-r1c8 black
arrow-1: arrow r8c3-r8c2 bulb ["r9c4"]
arrow-2: arrow r8c5-r7c4 bulb ["r8c6"]
arrow-3: arrow r3c6-r4c7 bulb ["r4c5"]
arrow-4: arrow r3c2-r4c1 bulb ["r2c3"]
arrow-5: arrow r4c9-r4c8-r4c7 bulb ["r3c8"]
arrow-6: arrow r6c9-r5c9 bulb ["r6c8"]
arrow-7: arrow r6c5 bulb ["r7c6"]
arrow-8: arrow r5c1-r5c2 bulb ["r6c1"]
arrow-9: arrow r2c9-r2c8 bulb ["r1c9"]
arrow-10: arrow r9c9-r9c8 bulb ["r8c9"]
shifter-line-1: shifter-line r8c2-r8c3-r9c4-r9c5
shifter-line-2: shifter-line r8c3-r8c4-r8c5
shifter-line-3: shifter-line r4c6-r4c5-r3c4-r2c4
shifter-line-4: shifter-line r1c4-r2c3-r3c2
shifter-line-5: shifter-line r2c6-r1c7-r1c8
shifter-line-6: shifter-line r5c4-r6c3-r5c2
shifter-line-7: shifter-line r6c7-r6c6-r5c7
shifter-line-8: shifter-line r6c9-r7c9-r8c8
shifter-line-9: shifter-line r4c9-r3c9-r2c8
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

Arrows: The digits along each arrow must sum to the digit in the circled cell. Digits may repeat on arrows.

There is a setting (under Visual) called 'Draw Arrows Above Lines', and I'd recommend you set that to 'On'.
