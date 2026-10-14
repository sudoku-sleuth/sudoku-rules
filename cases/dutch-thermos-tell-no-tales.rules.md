---
format: open-rules
title: Dutch Thermos Tell No Tales
setter: The Bard
source: https://sudokupad.app/casiq3outn
case: https://sudoku-sleuth.com/cases/dutch-thermos-tell-no-tales
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 4fd843fadea7413d415a5953dcdc4e81
---

```rules
sudoku 9x9
kropki-1: kropki r3c5-r3c6 white
kropki-2: kropki r6c8-r6c9 white
kropki-3: kropki r4c3-r5c3 white
kropki-4: kropki r6c4-r7c4 white
kropki-5: kropki r6c9-r7c9 white
kropki-6: kropki r1c8-r2c8 white
pair-1: pair r1c1-r1c2 sum 5
pair-2: pair r3c8-r3c9 sum 5
pair-3: pair r3c2-r4c2 sum 5
pair-4: pair r7c7-r7c8 sum 5
pair-5: pair r8c5-r9c5 sum 5
pair-6: pair r8c1-r9c1 sum 5
pair-7: pair r7c3-r8c3 sum 5
pair-8: pair r6c5-r7c5 sum 5
pair-9: pair r1c9-r2c9 sum 5
pair-10: pair r4c6-r4c7 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#ffb858ff","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#ffb858ff","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#ffb858ff","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#ffb858ff","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#ffb858ff","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[4.5,8.5]],"color":"#ffb858ff","thickness":19.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[8.5,4.5]],"color":"#ffb858ff","thickness":19.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[4.5,0.5]],"color":"#ffb858ff","thickness":19.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,7.5]],"color":"#ffb858ff","thickness":19.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[0.5,4.5]],"color":"#ffb858ff","thickness":19.2,"rounded":true}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Dutch Thermos: Digits along the orange thermos exist in two distinct sets which alternate positions along the line, both sets increase in value from the bulb end but are independent from each other regarding their increasing values, also all digits on the line must have a difference of at least four between each adjacent digit regardless of which set they belong to.
V Pairs: Digits separated by a V sum to 5.
Consecutive Pairs: Digits separated by a white dot must be consecutive.
