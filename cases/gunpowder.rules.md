---
format: open-rules
title: Gunpowder
setter: Blobz
source: https://sudokupad.app/blobz/gunpowder
case: https://sudoku-sleuth.com/cases/gunpowder
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2f46c42f27dc019e7449d049b24573b7
---

```rules
sudoku 9x9
thermo-1: thermo r9c7-r8c8-r7c9-r6c9
thermo-2: thermo r7c1-r8c2-r9c3-r9c4
thermo-3: thermo r1c3-r2c2-r3c1-r4c1
thermo-4: thermo r3c9-r2c8-r1c7-r1c6
kropki-1: kropki r6c6-r7c6 black
kropki-2: kropki r6c6-r6c7 black
kropki-3: kropki r5c7-r6c7 black
kropki-4: kropki r7c5-r8c5 black
kropki-5: kropki r7c5-r7c6 black
kropki-6: kropki r5c7-r5c8 black
kropki-7: kropki r4c8-r5c8 black
kropki-8: kropki r8c4-r8c5 black
kropki-9: kropki r3c3-r3c4 black
kropki-10: kropki r3c3-r4c3 black
kropki-11: kropki r3c5-r3c6 black
kropki-12: kropki r5c3-r6c3 black
kropki-13: kropki r1c1-r1c2 black
kropki-14: kropki r1c1-r2c1 black
kropki-15: kropki r2c4-r3c4 black
kropki-16: kropki r4c2-r4c3 black
kropki-17: kropki r1c3-r2c3 black
kropki-18: kropki r6c4-r7c4 black
kropki-19: kropki r7c1-r7c2 black
negative relations [{"op":"ratio","value":2}] except [["r6c6","r7c6"],["r6c6","r6c7"],["r5c7","r6c7"],["r7c5","r8c5"],["r7c5","r7c6"],["r5c7","r5c8"],["r4c8","r5c8"],["r8c4","r8c5"],["r3c3","r3c4"],["r3c3","r4c3"],["r3c5","r3c6"],["r5c3","r6c3"],["r1c1","r1c2"],["r1c1","r2c1"],["r2c4","r3c4"],["r4c2","r4c3"],["r1c3","r2c3"],["r6c4","r7c4"],["r7c1","r7c2"]]
```

Normal sudoku rules apply. 

Digits along thermometers increase from the bulb end. 

Black dots separate two digits where one is double the other. ALL such dots are shown.
