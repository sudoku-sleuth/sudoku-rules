---
format: open-rules
title: Spaceballs the Sudoku
setter: The Bard
source: https://sudokupad.app/km3fznkhpq
case: https://sudoku-sleuth.com/cases/spaceballs-the-sudoku
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r6c8=5
---

```rules
sudoku 9x9
parity-cells-1: parity-cells r2c2-r1c1-r1c9-r2c9-r8c9-r9c2-r1c8-r9c1 parity "odd"
parity-cells-2: parity-cells r3c7-r4c7-r6c7-r3c3-r4c3-r6c3-r3c2-r4c2 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,8.5],[4.5,7.5],[4.5,8.5],[5.5,7.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[6.5,5.5],[6.5,4.5],[7.5,3.5],[7.5,4.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,7.5],[8.5,8.5],[8.5,7.5],[8.5,6.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5],[2.5,6.5],[3.5,6.5],[4.5,6.5],[5.5,6.5]],"color":"#FF0066","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,8.5],[2.5,8.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,8.5],[7.5,8.5],[8.5,8.5]],"color":"#FF0066","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5],[2.5,1.5],[3.5,1.5],[4.5,1.5],[5.5,1.5],[6.5,1.5],[7.5,1.5]],"color":"#FF0066","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5],[2.5,4.5],[3.5,4.5],[4.5,4.5],[5.5,4.5],[6.5,4.5]],"color":"#FF0066","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5],[2.5,3.5],[3.5,3.5],[4.5,3.5]],"color":"#FF0066","thickness":8,"rounded":true}}
```

“Sir, the radar sir, it appears to be jammed.”
“Raspberries.”
“There is only one man who would dare give be the raspberry, Lonestar!”
Normal sudoku rules apply. Place the digits 1-9 in each row, column, and box.
Adjacent digits on the raspberry colored lines that are jamming the radar alternate between the sets (1,4,7), (2,5,8), and (3,6,9), and all three sets are present in any group of three consecutive cells. 
Odd and even: Digits in squares must be even just like capturing the stunt doubles, Digits in circles must be odd just like the Spaceballs. 
Thermometers: Digits must strictly increase from bulb end, and all thermometers repeat the exact same digits to open the air shield.
