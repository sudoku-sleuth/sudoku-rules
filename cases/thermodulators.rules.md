---
format: open-rules
title: Thermodulators
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2912l17xrp
case: https://sudoku-sleuth.com/cases/thermodulators
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=3 r5c5=9 r9c1=2
---

```rules
sudoku 9x9
thermo-1: thermo r1c5-r2c4-r3c3-r4c2
thermo-2: thermo r1c5-r2c6-r3c7-r4c8
thermo-3: thermo r5c9-r5c8-r5c7-r5c6
thermo-4: thermo r3c1-r2c1-r1c1
thermo-5: thermo r4c6-r4c5-r4c4
thermo-6: thermo r5c1-r5c2-r5c3-r5c4
thermo-7: thermo r9c5-r8c4-r7c3-r6c2
thermo-8: thermo r9c5-r8c6-r7c7-r6c8
kropki-1: kropki r5c8-r5c9 colour "black"
kropki-2: kropki r2c4-r2c5 colour "black"
kropki-3: kropki r5c2-r6c2 colour "black"
modular-1: modular r3c1-r2c1-r1c1
modular-2: modular r4c2-r3c3-r2c4-r2c5-r2c6-r3c7-r4c8
modular-3: modular r4c4-r4c5-r4c6
modular-4: modular r6c4-r6c5-r6c6
modular-5: modular r5c6-r5c7-r5c8-r5c9
modular-6: modular r7c9-r8c9-r9c9
modular-7: modular r6c2-r7c3-r8c4-r8c5-r8c6-r7c7-r6c8
modular-8: modular r5c1-r5c2-r5c3-r5c4
```

**Standard Sudoku, Modular Lines, Thermometers, Ratio Pairs**

Normal sudoku rules apply.

Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.

Thermometers: Digits along a thermometer must strictly increase from bulb to tip. Digits along the thermometer do not have to be consecutive.

Kropki pairs: Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are shown.
