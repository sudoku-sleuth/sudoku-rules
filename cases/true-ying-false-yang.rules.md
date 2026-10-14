---
format: open-rules
title: True Ying, False Yang
setter: The Bard
source: https://sudokupad.app/m3wffk8mf2
case: https://sudoku-sleuth.com/cases/true-ying-false-yang
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
exported: 27d8723cd60ed51c0a6e34fbb02ed214
---

```rules
sudoku 9x9
kropki-1: kropki r8c9-r9c9 black
kropki-2: kropki r7c6-r7c7 black
kropki-3: kropki r5c3-r5c4 black
kropki-4: kropki r3c6-r4c6 black
kropki-5: kropki r4c7-r4c8 black
kropki-6: kropki r3c4-r3c5 black
kropki-7: kropki r7c5-r8c5 black
kropki-8: kropki r1c6-r1c7 black
kropki-9: kropki r6c6-r7c6 black
kropki-10: kropki r8c3-r8c4 white
kropki-11: kropki r5c5-r6c5 white
kropki-12: kropki r1c4-r1c5 white
kropki-13: kropki r1c8-r2c8 white
kropki-14: kropki r6c2-r6c3 white
arrow-1: arrow r7c1-r6c1-r5c1 bulb ["r7c2"]
arrow-2: arrow r1c2-r1c1 bulb ["r1c3"]
arrow-3: arrow r5c2-r4c2-r4c3 bulb ["r6c2"]
arrow-4: arrow r1c4-r1c5 bulb ["r2c4"]
pair-1: pair r9c1-r9c2 sum 10
pair-2: pair r9c4-r9c5 sum 10
pair-3: pair r6c7-r6c8 sum 10
pair-4: pair r2c3-r3c3 sum 10
pair-5: pair r2c5-r2c6 sum 10
pair-6: pair r7c1-r8c1 sum 10
pair-7: pair r6c3-r7c3 sum 10
pair-8: pair r5c9-r6c9 sum 5
pair-9: pair r7c9-r8c9 sum 5
pair-10: pair r9c7-r9c8 sum 5
pair-11: pair r1c7-r1c8 sum 5
pair-12: pair r3c1-r3c2 sum 5
pair-13: pair r2c9-r3c9 sum 5
pair-14: pair r3c7-r3c8 sum 5
pair-15: pair r4c4-r4c5 sum 5
pair-16: pair r7c8-r8c8 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#afafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#afafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#afafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#afafafff","stroke":"#000000","thickness":1.28,"angle":0}}
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
Ying Yang: shade some cells so that all shaded and unshaded cells form 2 form orthogonally connected areas such that no 2x2 area is entirely shaded or unshaded, and all the clues values in the unshaded area are liar clues and not true. Some cells are shaded and therefore true clues. Each clue is either fully shaded or unshaded. 
XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
Arrow: Digits on an arrow must sum to the digit placed in that arrow's circle. 
Kropki Pairs: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.
