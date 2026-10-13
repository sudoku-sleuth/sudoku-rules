---
format: open-rules
title: Curse of the Dutch Thermo!
setter: The Bard
source: https://sudokupad.app/20swil9swn
case: https://sudoku-sleuth.com/cases/curse-of-the-dutch-thermo
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
pair-1: pair r1c1-r2c1 sum 10
pair-2: pair r5c3-r5c4 sum 10
pair-3: pair r7c5-r8c5 sum 10
pair-4: pair r5c4-r6c4 sum 10
pair-5: pair r2c6-r3c6 sum 10
pair-6: pair r4c3-r5c3 sum 10
pair-7: pair r2c2-r2c3 sum 10
pair-8: pair r5c6-r5c7 sum 5
pair-9: pair r2c5-r3c5 sum 5
pair-10: pair r4c6-r5c6 sum 5
pair-11: pair r7c4-r8c4 sum 5
pair-12: pair r9c8-r9c9 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,3.5],[6.5,4.5],[6.5,5.5]],"color":"#FF9500","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,2.5],[5.5,2.5],[6.5,2.5]],"color":"#FF9500","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5]],"color":"#FF9500","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[4.5,6.5],[3.5,6.5],[2.5,6.5]],"color":"#FF9500","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[5.5,6.5]],"color":"#FF9500","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5]],"color":"#FF9500","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FF9500","stroke":"#FFFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FF9500","stroke":"#FFFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[-0.5,1.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"KM","textColor":"#000000","fontSize":14}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Dutch Thermos: Digits along the orange thermos exist in two distinct sets which alternate positions along the line, both sets increase in value from the bulb end but are independent from each other regarding their increasing values, also all digits on the line must have a difference of at least four between each adjacent digit regardless of which set they belong to.
XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5.
Anti-Knight: Cells that are a Knight's move apart (in chess) may not contain the same digit.
