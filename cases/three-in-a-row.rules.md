---
format: open-rules
title: Three in a row
setter: sujoyku
source: https://tinyurl.com/49eydtk6
case: https://sudoku-sleuth.com/cases/three-in-a-row
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: ab2bd5f7aa5256b9604919a7de4f4736
---

```rules
sudoku 9x9
kropki-1: kropki r8c2-r9c2 white
kropki-2: kropki r8c2-r8c3 white
kropki-3: kropki r7c7-r7c8 white
kropki-4: kropki r7c8-r8c8 white
kropki-5: kropki r2c2-r3c2 black
kropki-6: kropki r2c2-r2c3 black
kropki-7: kropki r2c8-r2c9 black
kropki-8: kropki r1c9-r2c9 black
kropki-9: kropki r2c7-r3c7 black
whispers r5c4-r4c4-r3c4-r2c5-r1c6-r1c7-r2c8-r3c8-r4c8-r5c7-r6c7-r7c6-r8c6-r7c7 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[66,67]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[77,78]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[62]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[26]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[48,49]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[40,41]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[32,33]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[43,52]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[3,4]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[54,55,56]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[28,37,46]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[20,29,38]}}
```

Normal sudoku rules apply. Adjacent digits on the green line must have a difference of at least 5. Digits joined by a black dot have a 1:2 ratio. Digits joined by a white dot are consecutive. (Not all dots are given.) Counting cage totals: Digits in a cage sum to the total in the top left which has to be determined by the solver. A cage total indicates exactly how many cages have this exact total.
