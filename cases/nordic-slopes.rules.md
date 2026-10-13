---
format: open-rules
title: Nordic Slopes
setter: Katie Splendor
source: https://sudokupad.app/8hf319zz5v
case: https://sudoku-sleuth.com/cases/nordic-slopes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r4c5 colour "black"
kropki-2: kropki r3c6-r3c7 colour "black"
kropki-3: kropki r2c2-r3c2 colour "black"
kropki-4: kropki r6c6-r6c7 colour "black"
kropki-5: kropki r8c8-r9c8 colour "black"
kropki-6: kropki r8c2-r8c3 colour "black"
kropki-7: kropki r7c3-r7c4 colour "black"
pair-1: pair r7c2-r8c2 sum 10
pair-2: pair r8c3-r8c4 sum 10
pair-3: pair r1c6-r2c6 sum 10
pair-4: pair r4c7-r4c8 sum 10
window-classes classes "entropy"
index-line r2c8-r2c7-r3c6-r4c7
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#40bce1ff","thickness":0,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[4.5,3.5],[3.5,3.5],[3.5,2.5],[2.5,1.5],[1.5,1.5],[1.5,2.5]],"color":"#40bce1ff","thickness":9.6,"rounded":true}}
```

- Normal sudoku rules apply.
- Global Entropy - every 2 by 2 box of cells has at least one low digit (1,2,3), one medium digit (4,5,6), and one high digit (7,8,9).
- Indexing - on a blue index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears. Eg: 3214 would be a valid line; the 1st digit, 3, indicates that the 3rd digit is a 1, and so on.
- Ratio Kropki - digits separated by a black Kropki dot have a ratio of 2:1. No negative constraint.
- X pairs - digits separated by X sum to 10. No negative constraint.
