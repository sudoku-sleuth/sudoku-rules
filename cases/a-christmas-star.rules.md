---
format: open-rules
title: A Christmas Star
setter: The Bard
source: https://sudokupad.app/scpfw08ipb
case: https://sudoku-sleuth.com/cases/a-christmas-star
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r4c5-r3c4-r2c3
thermo-2: thermo r4c5-r5c6-r6c7
thermo-3: thermo r4c5-r3c6-r2c7
thermo-4: thermo r4c5-r5c4-r6c3
kropki-1: kropki r9c2-r9c3 colour "black"
kropki-2: kropki r1c3-r2c3 colour "black"
kropki-3: kropki r2c6-r3c6 colour "black"
kropki-4: kropki r2c8-r3c8 colour "black"
kropki-5: kropki r5c8-r6c8 colour "black"
whispers r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5 gap 5
renban r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
```

```drawing
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"KM","textColor":"#000000","fontSize":14}}
```

A Christmas Star
Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
German Whispers: Adjacent digits on a green line must have a difference of at least 5.
Ratio Pairs: Digits separated by a black dot must be in a 2:1 ratio.
Thermo: Digits on grey thermos must increase from the bulb to the tip.
Renban: Digits placed on purple lines must be a non-repeating set of consecutive digits, in any order.
Anti-Knight: Cells that are a Knight's move apart (in chess) may not contain the same digit.
