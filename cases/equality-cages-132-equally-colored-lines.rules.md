---
format: open-rules
title: "Equality Cages 132: Equally colored lines"
setter: gUBBLOR
source: https://sudokupad.app/twosud0y5s
case: https://sudoku-sleuth.com/cases/equality-cages-132-equally-colored-lines
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r3c7-r3c8
equality-cage-2: equality-cage r2c3-r2c4-r3c3-r3c4
equality-cage-3: equality-cage r1c6-r2c6
equality-cage-4: equality-cage r4c7-r5c6-r5c7-r6c6
equality-cage-5: equality-cage r4c9-r5c9
equality-cage-6: equality-cage r4c1-r5c1
equality-cage-7: equality-cage r8c2-r8c3-r8c4-r9c3
equality-cage-8: equality-cage r8c9-r9c9
kropki-1: kropki r3c7-r3c8 colour "black"
kropki-2: kropki r2c3-r3c3 colour "black"
pair-1: pair r2c4-r3c4 sum 10
pair-2: pair r5c4-r6c4 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[2.5,6.5],[1.5,5.5]],"color":"#f4564fff","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,0.5],[3.5,0.5]],"color":"#f4564fff","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,1.5],[7.5,1.5]],"color":"#f4564fff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,2.5],[2.5,3.5]],"color":"#50de56ff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[4.5,5.5],[4.5,6.5],[3.5,6.5]],"color":"#50de56ff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5],[8.5,2.5]],"color":"#50de56ff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,2.5],[4.5,3.5]],"color":"#ddf338ff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[4.5,8.5]],"color":"#ddf338ff","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[8.5,6.5],[7.5,7.5]],"color":"#ddf338ff","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,7.5]],"color":"#586feaff","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,2.5],[4.5,1.5]],"color":"#586feaff","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[7.5,6.5]],"color":"#586feaff","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Ambigous lines: There are lines of four different colors in the puzzle, and four different line constraints. It's up to the solver to deduce which color is paired with which constraint. Each color has only one constraint it identifies as, but lines are allowed to act as more than one constraint. The lines could be any of these four;
1. Thermometers - Digits along each thermometer must increase starting from the bulb end. Bulbs are always at the end of the line, but which end must be deduced by the solver.
2. Arrows - The digits along each arrow must sum to the digit in the circled cell. Circled cells are always at the end of the line, but which end must be deduced by the solver. Digits may repeat on arrows.
3. Dutch Whispers - Adjacent digits along each Dutch Whisper line must have a difference of at least 4. Digits may repeat on the line.
4. Shifter Lines - Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.
