---
format: open-rules
title: "Equality Cages 112: Entropic modularity"
setter: gUBBLOR and Schwupel
source: https://sudokupad.app/a5d6oe6b0g
case: https://sudoku-sleuth.com/cases/equality-cages-112
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r3c8-r3c9
equality-cage-2: equality-cage r8c9-r9c9
equality-cage-3: equality-cage r7c1-r7c2-r8c1-r8c2
equality-cage-4: equality-cage r4c2-r5c2-r6c1-r6c2
equality-cage-5: equality-cage r6c5-r7c4-r7c5-r8c5
equality-cage-6: equality-cage r2c5-r3c5
kropki-1: kropki r3c8-r3c9 colour "black"
kropki-2: kropki r5c2-r6c2 colour "white"
kropki-3: kropki r1c1-r1c2 colour "white"
entropic-1: entropic r3c9-r3c8-r3c7
entropic-2: entropic r8c1-r8c2-r7c3
entropic-3: entropic r2c3-r2c2-r2c1-r1c2
entropic-4: entropic r4c3-r5c3-r6c3-r5c4
entropic-5: entropic r2c5-r3c6
modular-1: modular r1c7-r1c8-r1c9-r2c9-r2c8
modular-2: modular r4c7-r4c8-r5c8-r6c8-r7c8-r7c7-r6c7
modular-3: modular r2c3-r1c2-r2c2-r3c2
modular-4: modular r5c2-r5c3-r5c4
modular-5: modular r1c4-r2c5
pair-1: pair r1c8-r2c8 sum 10
pair-2: pair r7c7-r8c7 sum 10
pair-3: pair r8c1-r8c2 sum 10
pair-4: pair r2c1-r2c2 sum 10
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Entropy: The orange lines are entropic lines. Each set of three consecutive digits on a line must be one each from (1,2,3), (4,5,6), and (7,8,9). Digits may repeat on a line.

Modularity: The green lines are modular lines. Each set of three consecutive digits on a line must be one each from (1,4,7), (2,5,8), and (3,6,9). Digits may repeat on a line.
