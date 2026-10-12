---
format: open-rules
title: "Shifter Lines 106: Searching for 5s"
setter: gUBBLOR
source: https://sudokupad.app/0sna0ijxpx
case: https://sudoku-sleuth.com/cases/shifter-lines-106
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c6-r9c6 colour "black"
kropki-2: kropki r7c2-r8c2 colour "black"
kropki-3: kropki r8c3-r9c3 colour "black"
kropki-4: kropki r4c3-r4c4 colour "black"
kropki-5: kropki r3c6-r3c7 colour "black"
kropki-6: kropki r5c4-r6c4 colour "white"
shifter-line-1: shifter-line r5c6-r6c6-r7c7-r8c7-r9c6-r8c5
shifter-line-2: shifter-line r7c7-r6c8-r7c9
shifter-line-3: shifter-line r6c8-r5c8
shifter-line-4: shifter-line r6c5-r6c4-r7c3-r7c2-r6c1-r5c1
shifter-line-5: shifter-line r6c4-r5c3-r6c2
shifter-line-6: shifter-line r9c2-r9c3-r8c4-r9c5
shifter-line-7: shifter-line r2c1-r3c2-r4c3-r4c4-r5c5
shifter-line-8: shifter-line r3c4-r3c5-r4c6-r3c7-r2c7
shifter-line-9: shifter-line r1c7-r2c6-r3c6
shifter-line-10: shifter-line r4c7-r3c8-r4c9
shifter-line-11: shifter-line r1c2-r2c3-r2c4-r1c5
pair-1: pair r1c7-r1c8 relation {"op":"sum","value":10}
pair-2: pair r2c3-r3c3 relation {"op":"sum","value":10}
pointing-arrow-1: pointing-arrow target "first-five" cell "r7c2" ray ["r7c3","r7c4","r7c5","r7c6","r7c7","r7c8","r7c9"]
pointing-arrow-2: pointing-arrow target "first-five" cell "r5c1" ray ["r5c2","r5c3","r5c4","r5c5","r5c6","r5c7","r5c8","r5c9"]
pointing-arrow-3: pointing-arrow target "first-five" cell "r2c1" ray ["r2c2","r2c3","r2c4","r2c5","r2c6","r2c7","r2c8","r2c9"]
pointing-arrow-4: pointing-arrow target "first-five" cell "r6c8" ray ["r7c8","r8c8","r9c8"]
pointing-arrow-5: pointing-arrow target "first-five" cell "r7c7" ray ["r7c6","r7c5","r7c4","r7c3","r7c2","r7c1"]
pointing-arrow-6: pointing-arrow target "first-five" cell "r5c8" ray ["r5c7","r5c6","r5c5","r5c4","r5c3","r5c2","r5c1"]
pointing-arrow-7: pointing-arrow target "first-five" cell "r9c8" ray ["r9c7","r9c6","r9c5","r9c4","r9c3","r9c2","r9c1"]
pointing-arrow-8: pointing-arrow target "first-five" cell "r2c7" ray ["r2c6","r2c5","r2c4","r2c3","r2c2","r2c1"]
pointing-arrow-9: pointing-arrow target "first-five" cell "r9c6" ray ["r8c6","r7c6","r6c6","r5c6","r4c6","r3c6","r2c6","r1c6"]
pointing-arrow-10: pointing-arrow target "first-five" cell "r8c6" ray ["r7c6","r6c6","r5c6","r4c6","r3c6","r2c6","r1c6"]
pointing-arrow-11: pointing-arrow target "first-five" cell "r7c7" ray ["r6c7","r5c7","r4c7","r3c7","r2c7","r1c7"]
pointing-arrow-12: pointing-arrow target "first-five" cell "r3c2" ray ["r4c3","r5c4","r6c5","r7c6","r8c7","r9c8"]
pointing-arrow-13: pointing-arrow target "first-five" cell "r7c3" ray ["r8c2","r9c1"]
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Search 5: Each arrow points to the closest 5, where the digit on the arrow is how many cells away the 5 is. For example, lets say there's an arrow in R1C1 pointing to the right. If R1C1 was a 1, R1C2 would have to be 5. If R1C1 was 8, the 5 would have to be in R1C9. There may be multiple arrows pointing to the same 5, and it's not necessary for every 5 to have an arrow pointing to it. If R7C7 was a 6, there would have to be a 5 in both R1C7 and R7C1.

There is a setting (under Visual) called 'Draw Arrows Above Lines', and I'd recommend you set that to 'On'.
