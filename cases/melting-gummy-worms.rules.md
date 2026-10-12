---
format: open-rules
title: Melting Gummy Worms
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/melting-gummy-worms
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r6c6-r5c6-r4c6-r4c5-r4c4-r5c4-r6c4-r6c5
thermo-2: thermo r6c7-r7c7-r8c7-r9c7-r9c8-r9c9
thermo-3: thermo r9c2-r9c3-r8c3-r7c3-r6c3
thermo-4: thermo r3c5-r2c5-r1c5
thermo-5: thermo r3c5-r3c6-r3c7
thermo-6: thermo r1c1-r2c1-r3c1-r3c2
thermo-7: thermo r3c9-r2c9-r1c9-r1c8
thermo-8: thermo r4c9-r5c9-r5c8-r4c8
thermo-9: thermo r6c2-r5c2-r5c1-r6c1
thermo-10: thermo r8c1-r7c1-r7c2
thermo-11: thermo r8c8-r7c8-r7c9-r6c9-r6c8
thermo-12: thermo r2c4-r3c4-r3c3-r2c3-r1c3
thermo-13: thermo r3c8-r2c8-r2c7-r1c7
kropki-1: kropki r5c6-r6c6 colour "white"
kropki-2: kropki r4c6-r5c6 colour "white"
kropki-3: kropki r4c5-r4c6 colour "white"
kropki-4: kropki r4c4-r4c5 colour "white"
kropki-5: kropki r4c4-r5c4 colour "white"
kropki-6: kropki r5c4-r6c4 colour "white"
kropki-7: kropki r6c4-r6c5 colour "white"
kropki-8: kropki r5c5-r6c5 colour "white"
kropki-9: kropki r6c6-r6c7 colour "white"
kropki-10: kropki r7c7-r8c7 colour "white"
kropki-11: kropki r8c7-r9c7 colour "white"
kropki-12: kropki r9c7-r9c8 colour "white"
kropki-13: kropki r6c3-r6c4 colour "white"
kropki-14: kropki r3c5-r4c5 colour "white"
kropki-15: kropki r7c5-r8c5 colour "white"
kropki-16: kropki r8c5-r9c5 colour "white"
kropki-17: kropki r1c1-r1c2 colour "white"
kropki-18: kropki r2c8-r3c8 colour "white"
kropki-19: kropki r7c4-r8c4 colour "white"
kropki-20: kropki r7c6-r8c6 colour "white"
kropki-21: kropki r8c3-r9c3 colour "white"
kropki-22: kropki r3c6-r3c7 colour "white"
kropki-23: kropki r3c1-r3c2 colour "white"
```

Normal sudoku rules apply. White dots mark pairs of consecutive digits. Not every pair of consecutive digits is marked with a white dot. 

Now, what about those gummy worms? Those are actually thermometers, and as with any thermometer, the further you go from bulb to tip the higher the digit. Digits on thermometers do not have to be consecutive but could be.
