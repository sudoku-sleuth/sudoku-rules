---
format: open-rules
title: Double Dot Fun
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7k3twyak1d
case: https://sudoku-sleuth.com/cases/double-dot-fun
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c8-r4c9 colour "white"
kropki-2: kropki r9c6-r9c7 colour "white"
kropki-3: kropki r3c5-r4c5 colour "white"
kropki-4: kropki r8c7-r9c7 colour "white"
kropki-5: kropki r5c3-r5c4 colour "white"
kropki-6: kropki r8c4-r9c4 colour "white"
kropki-7: kropki r7c3-r8c3 colour "white"
kropki-8: kropki r2c2-r2c3 colour "white"
kropki-9: kropki r4c1-r4c2 colour "black"
kropki-10: kropki r1c4-r2c4 colour "black"
kropki-11: kropki r9c4-r9c5 colour "black"
kropki-12: kropki r6c9-r7c9 colour "black"
kropki-13: kropki r5c3-r6c3 colour "black"
kropki-14: kropki r4c7-r5c7 colour "black"
kropki-15: kropki r7c7-r7c8 colour "black"
double-arrow-1: double-arrow r3c1-r2c1-r1c1-r1c2-r1c3 ends ["r4c1","r1c4"]
double-arrow-2: double-arrow r1c7-r1c8-r1c9-r2c9-r3c9 ends ["r1c6","r4c9"]
double-arrow-3: double-arrow r7c1-r8c1-r9c1-r9c2-r9c3 ends ["r6c1","r9c4"]
double-arrow-4: double-arrow r9c8-r9c9-r8c9 ends ["r9c7","r7c9"]
double-arrow-5: double-arrow r4c3-r3c3-r3c4 ends ["r5c3","r3c5"]
double-arrow-6: double-arrow r7c6-r7c7-r6c7 ends ["r7c5","r5c7"]
```

- Normal sudoku rules apply.
- Double arrows: Digits along a line sum to same total as the digits in the circles connected to the line.
- Kropki pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive.
