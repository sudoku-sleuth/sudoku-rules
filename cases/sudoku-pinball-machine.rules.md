---
format: open-rules
title: Sudoku Pinball Machine
setter: Meggen033
source: https://sudokupad.app/o9tt4orf0a
case: https://sudoku-sleuth.com/cases/sudoku-pinball-machine
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo r9c8-r9c7-r8c8-r9c9-r8c9-r7c9
kropki-1: kropki r7c1-r8c1 colour "white"
kropki-2: kropki r5c7-r5c8 colour "white"
kropki-3: kropki r5c8-r5c9 colour "white"
kropki-4: kropki r4c5-r5c5 colour "white"
whispers-1: whispers r4c1-r4c2-r4c3-r5c3-r6c3-r6c2-r6c1-r5c1 gap 5
whispers-2: whispers r7c6-r8c6-r9c6 gap 5
whispers-3: whispers r2c7-r3c7-r3c8-r2c8 gap 5
whispers-4: whispers r3c4-r3c5-r2c4-r2c5-r1c4-r1c5 gap 5
renban-1: renban r1c1-r1c2-r1c3-r2c3-r3c3-r3c2-r3c1-r2c1
renban-2: renban r1c6-r2c6-r3c6
pair-1: pair r5c4-r5c5 sum 10
pair-2: pair r5c6-r6c6 sum 10
pair-3: pair r7c4-r7c5 sum 10
quadruple r2c7-r2c8-r3c7-r3c8 digits [2,4]
parity-cells r1c3 parity "odd"
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.9,1.5],[7.5,1.5],[8.5,1.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
```

Normal Sudoku rules apply.

Magenta Lines = Renbans (Set of Consecutive non-repeating digits in any order)
Green Lines = German Whispers (adjacent digits must differ by at least 5)
Grey Circles = Odd Digits
Kropki Dots (Cells separated by a white dot must be consecutive)
Cells separated by an X must sum to 10
Quadrupal (each digit in a circle must appear in one of the four surrounding cells)
Digits along a thermometer must increase from the bulb end
