---
format: open-rules
title: Quadrangularly Sparse
setter: Kennet's Dad
source: https://sudokupad.app/fhr7gQfm9G
case: https://sudoku-sleuth.com/cases/quadrangularly-sparse
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c8-r2c8 total 12 connected true
cage-2: cage r4c9-r5c9-r6c9 total 7 connected true
cage-3: cage r8c8-r9c8 total 12 connected true
cage-4: cage r8c1-r8c2-r9c1-r9c2 total 27 connected true
cage-5: cage r3c3-r3c4-r4c3 total 9 connected true
cage-6: cage r6c3-r7c3-r7c4 total 9 connected true
cage-7: cage r1c1-r1c2-r2c1-r2c2 total 18 connected true
cage-8: cage r8c6-r9c6 total 11 connected true
cage-9: cage r1c6-r2c6 total 8 connected true
cage-10: cage r8c4-r9c4 total 9 connected true
kropki-1: kropki r1c2-r1c3 colour "white"
kropki-2: kropki r9c2-r9c3 colour "white"
arrow-1: arrow r4c4-r4c5 bulb ["r5c3"]
arrow-2: arrow r6c4-r6c5 bulb ["r5c3"]
arrow-3: arrow r4c2-r4c1 bulb ["r5c3"]
arrow-4: arrow r6c2-r6c1 bulb ["r5c3"]
```

```drawing
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#FFFFFF","stroke":"#CFCFCF","thickness":2,"text":"","fontSize":16}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#FFFFFF","stroke":"#CFCFCF","thickness":2,"text":"","fontSize":16}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#FFFFFF","stroke":"#CFCFCF","thickness":2,"text":"","fontSize":16}}
```

Normal sudoku rules apply. Digits may not repeat within a cage, and sum to the number shown. The digits along each arrow must sum to the digit in the circled cell. Digits separated by a white dot must be consecutive.
