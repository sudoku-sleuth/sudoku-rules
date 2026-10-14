---
format: open-rules
title: That's 3 in the Christmas Tree
setter: Santa (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/djj80dz1t5
case: https://sudoku-sleuth.com/cases/that-s-3-in-the-christmas-tree
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c9=3
exported: 2015d91e1bf962b42c751ea4c5a6caf3
---

```rules
sudoku 9x9
thermo-1: thermo r7c4-r7c3-r7c2-r6c3-r5c4
thermo-2: thermo r4c4-r4c3-r4c2-r3c3-r2c4-r1c5
thermo-3: thermo r7c6-r7c7-r7c8-r6c7-r5c6
thermo-4: thermo r4c6-r4c7-r4c8-r3c7-r2c6-r1c5
thermo-5: thermo r9c5-r8c5-r7c5-r6c5
kropki-1: kropki r4c3-r5c3 white
kropki-2: kropki r4c7-r5c7 white
kropki-3: kropki r7c2-r8c2 white
kropki-4: kropki r7c8-r8c8 white
kropki-5: kropki r4c2-r4c3 white
kropki-6: kropki r4c6-r4c7 white
kropki-7: kropki r6c4-r7c4 white
kropki-8: kropki r3c4-r4c4 white
kropki-9: kropki r5c7-r6c7 white
kropki-10: kropki r8c5-r9c5 black
kropki-11: kropki r4c7-r4c8 black
kropki-12: kropki r5c6-r6c6 black
kropki-13: kropki r5c7-r5c8 black
kropki-14: kropki r6c3-r6c4 black
modular-1: modular r4c2-r5c2-r6c2
modular-2: modular r4c8-r5c8-r6c8
```

```drawing
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#F5FA5F","stroke":"#F5FA5F","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal sudoku rules apply.  Every row, column and box must have a complete set of the digits 1-9.

Thermometers: the digits must increase from the bulb to the tip.  The two thermometers meeting in box 2 meet at the star at the top of the Christmas tree, at r1c5. (The star is otherwise cosmetic).

Kropki dots: cells separated by a white dot contain consecutive digits.  Cells separated by a black dot contain digits in a 1:2 ratio. Not all possible dots are given.

Modular lines: any three consecutive cells on a teal modular line must have one digit from each of {1,4,7}, {2,5,8}, {3,6,9}
