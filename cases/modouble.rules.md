---
format: open-rules
title: Modouble
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ph93q6dana
case: https://sudoku-sleuth.com/cases/modouble
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c2=8 r3c3=4 r4c4=3 r6c6=7 r7c7=5 r7c8=7
exported: cfae49266269e677c0427d35606eaf58
---

```rules
sudoku 9x9
double-arrow-1: double-arrow r3c1-r2c1-r1c1-r1c2-r1c3 ends ["r4c1","r1c4"]
double-arrow-2: double-arrow r8c1-r9c1-r9c2 ends ["r7c1","r9c3"]
double-arrow-3: double-arrow r9c7-r9c8-r9c9-r8c9-r7c9 ends ["r9c6","r6c9"]
double-arrow-4: double-arrow r1c9 ends ["r1c8","r2c9"]
double-arrow-5: double-arrow r4c8-r3c8-r2c8-r2c7-r2c6 ends ["r5c8","r2c5"]
double-arrow-6: double-arrow r6c2-r7c2-r8c2-r8c3-r8c4 ends ["r5c2","r8c5"]
double-arrow-7: double-arrow r7c3 ends ["r6c3","r7c4"]
double-arrow-8: double-arrow r3c7 ends ["r3c6","r4c7"]
double-arrow-9: double-arrow r8c1-r9c1-r9c2 ends ["r7c1","r9c3"]
double-arrow-10: double-arrow r9c7-r9c8-r9c9-r8c9-r7c9 ends ["r9c6","r6c9"]
double-arrow-11: double-arrow r6c2-r7c2-r8c2-r8c3-r8c4 ends ["r5c2","r8c5"]
double-arrow-12: double-arrow r3c1-r2c1-r1c1-r1c2-r1c3 ends ["r4c1","r1c4"]
double-arrow-13: double-arrow r2c6-r2c7-r2c8-r3c8-r4c8 ends ["r2c5","r5c8"]
double-arrow-14: double-arrow r3c7 ends ["r3c6","r4c7"]
double-arrow-15: double-arrow r1c9 ends ["r1c8","r2c9"]
double-arrow-16: double-arrow r7c3 ends ["r6c3","r7c4"]
modular-1: modular r4c1-r3c1-r2c1-r1c1-r1c2-r1c3-r1c4
modular-2: modular r7c1-r8c1-r9c1-r9c2-r9c3
modular-3: modular r9c6-r9c7-r9c8-r9c9-r8c9-r7c9-r6c9
modular-4: modular r1c8-r1c9-r2c9
modular-5: modular r5c8-r4c8-r3c8-r2c8-r2c7-r2c6-r2c5
modular-6: modular r5c2-r6c2-r7c2-r8c2-r8c3-r8c4-r8c5
modular-7: modular r6c3-r7c3-r7c4
modular-8: modular r3c6-r3c7-r4c7
modular-9: modular r7c1-r8c1-r9c1-r9c2-r9c3
modular-10: modular r9c6-r9c7-r9c8-r9c9-r8c9-r7c9-r6c9
modular-11: modular r5c2-r6c2-r7c2-r8c2-r8c3-r8c4-r8c5
modular-12: modular r4c1-r3c1-r2c1-r1c1-r1c2-r1c3-r1c4
modular-13: modular r2c5-r2c6-r2c7-r2c8-r3c8-r4c8-r5c8
modular-14: modular r3c6-r3c7-r4c7
modular-15: modular r1c8-r1c9-r2c9
modular-16: modular r6c3-r7c3-r7c4
```

- Normal sudoku rules apply.
- Double arrows: Digits along a line sum to same total as the digits in the circles connected to the line.
- Modular lines: Every set of three adjacent cells along a modular line contains digits with three different remainders when divided by 3. 
In this puzzle, every double arrow ALSO forms a modular line, including the attached circles.
