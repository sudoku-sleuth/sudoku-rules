---
format: open-rules
title: Build a Hamburger
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/build-a-hamburger
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c3-r8c4-r8c5-r8c6-r8c7-r8c8 total 21 repeats true connected true
cage-2: cage r9c3-r9c4-r9c5-r9c6-r9c7-r9c8 total 34 repeats true connected true
cage-3: cage r3c4-r3c5-r3c6-r3c7-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8 total 49 repeats true connected true
anti-knight
whispers r5c3-r5c4-r5c5-r5c6-r5c7-r5c8 gap 5
renban r6c3-r6c4-r6c5-r6c6-r6c7-r6c8
pair-1: pair r4c4-r5c4 sum 10
pair-2: pair r4c5-r5c5 sum 10
pair-3: pair r2c5-r3c5 sum 10
pair-4: pair r3c8-r4c8 sum 10
pair-5: pair r2c4-r3c4 sum 10
pair-6: pair r6c5-r7c5 sum 10
pair-7: pair r6c6-r7c6 sum 10
pair-8: pair r6c4-r7c4 sum 10
pair-9: pair r7c6-r8c6 sum 5
pair-10: pair r7c4-r8c4 sum 5
parity-cells r7c4-r7c5-r7c6-r7c7 parity "even"
```

```drawing
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#B58D62","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#B58D62","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#B58D62","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#B58D62","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. Ground Beef: Brown cells are even. Tomato: Renban- Numbers on the red line are a set of non-repeating consecutive numbers, in any order. Pickle: German Whispers- Numbers on the green line are at least 5 apart from their neighbors on the line. Kaiser Roll: Numbers inside cages sum to the number in the top left corner of the cage. Numbers may repeat in cages, if other rules allow. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all X and V are given. Anti-Knight- Numbers that are a chess knight's move apart cannot have the same number.
