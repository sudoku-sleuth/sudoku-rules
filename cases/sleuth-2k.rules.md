---
format: open-rules
title: Sleuth 2K
setter: Jobo
source: https://sudokupad.app/8yn5h38d13
case: https://sudoku-sleuth.com/cases/sleuth-2k
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: b44d841e797d34c85028feb915a2e316
---

```rules
sudoku 9x9
anti-king
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#f6b0ccff","thickness":0,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,1.5],[5.5,1.5],[5.5,0.5],[7.5,0.5],[7.5,1.5]],"color":"#f6b0ccff","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[6.5,8.5]],"color":"#f6b0ccff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[6.5,6.5],[6.5,7.5],[2.5,7.5],[2.5,6.5]],"color":"#f6b0ccff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[5.5,4.5],[5.5,5.5],[1.5,5.5],[1.5,4.5]],"color":"#f6b0ccff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[6.5,2.5],[6.5,3.5],[2.5,3.5],[2.5,2.5]],"color":"#f6b0ccff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"7","textColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"7","textColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"4","textColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"4","textColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"8","textColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"4","textColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"3","textColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"2","textColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"text":"4","textColor":"#000000"}}
```

Normal sudoku rules apply.

Cells separated by a king's move cannot contain the same digit.
Digit separated by a white dot must differ by the indicated amount.

Every line is a different constraint out of the following.

Thermometer: Digits along the thermometer must increase from the bulb to the tip, which can be on either end and are to be deduced.
Renban: The renban contains a non-repeating set of consecutive digits in any order.
Parity line: Digits along the parity line all have the same parity (odd or even).
German whisper: Adjacent digits along the German whisper must differ by at least 5.
Region sum line: Box borders divide the region sum line into segments with the same sum.

The line in column 9, styled as an exclamation mark, counts as a single line of length 5.
