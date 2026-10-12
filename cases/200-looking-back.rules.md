---
format: open-rules
title: 200 Looking Back
setter: sujoyku
source: https://sudokupad.app/36qsogj52m
case: https://sudoku-sleuth.com/cases/200-looking-back
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki r5c5-r6c5 colour "black"
whispers-1: whispers r4c1-r3c2-r3c3-r4c3-r5c2-r6c1-r7c1-r7c2-r6c3 gap 5
whispers-2: whispers r5c7-r6c7-r7c8-r6c9-r5c9-r4c9-r3c8-r4c7 gap 5 loop true
whispers-3: whispers r6c4-r7c4-r8c5-r7c6-r6c6-r5c6-r4c5-r5c4 gap 5 loop true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[7.5,2.5],[8.5,3.5],[8.5,4.5],[8.5,5.5],[7.5,6.5],[7.5,7.5]],"color":"#8dd9f2ff","thickness":9.6,"rounded":true,"path":"M96 480L128 480Q160 480 192 512Q224 544 256 544L320 544Q352 544 384 512Q416 480 448 480L480 480","bounds":[7.5,1.5,8.5,7.5]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,5.5],[1.5,6.5],[1.5,7.5],[0.5,8.5]],"color":"#8dd9f2ff","thickness":9.6,"rounded":true,"path":"M288 96L320 128Q350 183 384 128Q416 96 448 96Q480 96 512 64L544 32","bounds":[0.5,4.5,2.4296875,8.5]}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 box has to contain the digits from 1 to 9 once each.

- German Whispers: Adjacent digits on a green line must have a difference of at least 5.

- 200 Lines: Each blue line (top right and bottom line) is split by box borders into segments such that the product of its segment sums equals exactly 200. For example, a valid line could read 26-7891 since (2+6)x(7+8+9+1)=8x25=200.

- Kropki: Digits joined by a black dot have a 1:2 ratio. (Not all dots are given.)
