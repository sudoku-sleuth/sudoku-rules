---
format: open-rules
title: Radical Rainbow
setter: Jobo
source: https://tinyurl.com/3hrby8y5
case: https://sudoku-sleuth.com/cases/radical-rainbow
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
entropic r3c4-r4c5-r3c5-r2c5-r2c6
parity r2c1-r3c2-r2c2-r1c2-r1c3
whispers r4c7-r5c8-r4c8-r3c8-r3c9 gap 5
renban r6c1-r7c2-r6c2-r5c2-r5c3
region-sum r7c4-r8c5-r7c5-r6c5-r6c6 segments [["r7c4","r8c5","r7c5"],["r6c5","r6c6"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.75,"height":0.75,"rounded":false,"fill":"#FFFFFF","stroke":"#333","thickness":3,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.75,"height":0.75,"rounded":false,"fill":"#FFFFFF","stroke":"#333","thickness":3,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.75,"height":0.75,"rounded":false,"fill":"#FFFFFF","stroke":"#333","thickness":3,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0.75,"height":0.75,"rounded":false,"fill":"#FFFFFF","stroke":"#333","thickness":3,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":0.75,"height":0.75,"rounded":false,"fill":"#FFFFFF","stroke":"#333","thickness":3,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.75,"height":0.75,"rounded":false,"fill":"#FFFFFF","stroke":"#333","thickness":3,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,7.5],[6.5,7.5],[6.5,8.5]],"color":"#ccccccff","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[11,20]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[23,32]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[35,44]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[71,80]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[59,68]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[47,56]}}
```

Normal sudoku rules apply.

Digits in thick bordered squares must be equal to the square root of the 2-digit number read from top to bottom in the corresponding cage. All squares must contain a different digit.

Every square root sign also represents a different constraint.

Parity line (red): Adjacent digits along the red line must alternate in parity (odd/even).
Entropic line (peach): A set of three sequential cells along the peach line must contain a low [123], middle [456], and high [789] digit.
German Whisper line (green): Adjacent digits along the green line must differ by at least 5.
Renban (purple): Digits along the purple line are a set of consecutive, non-repeating digits in any order.
Region Sum line (blue): Digits along the blue line sum to the same value in each 3x3 box the line passes through.
Thermometer (grey): Digits along the thermometer must increase from the bulb to the tip, which are to be deduced.
