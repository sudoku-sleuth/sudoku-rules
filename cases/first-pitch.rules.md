---
format: open-rules
title: First Pitch
setter: Tingo
source: https://sudokupad.app/t1g001ep9u
case: https://sudoku-sleuth.com/cases/first-pitch
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo-1: thermo r5c1-r4c2-r3c3-r2c4-r1c5
thermo-2: thermo r5c1-r6c2-r7c3-r8c4-r9c5
kropki-1: kropki r7c3-r8c3 colour "white"
kropki-2: kropki r2c3-r3c3 colour "white"
whispers r1c6-r1c7-r2c8-r3c9-r4c9-r5c9-r6c9-r7c9-r8c8-r9c7-r9c6 gap 5
renban r4c4-r5c5-r6c4
pair-1: pair r9c5-r9c6 relation {"op":"sum","value":10}
pair-2: pair r1c5-r1c6 relation {"op":"sum","value":10}
pair-3: pair r3c9-r4c9 relation {"op":"sum","value":10}
pair-4: pair r6c9-r7c9 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

This sudoku is an homage to my favorite sport - baseball. The rules are as follows:
Normal Sudoku Rules Apply
Digits along thermometers must strictly increase from the bulb. Note: R5C1 is a bulb/home plate, the thermos are the foul lines.
Green lines are German Whispers lines. Adjacent digits along the line must differ in value by at least 5. (Outfield wall).
Pink lines are Renban lines. Digits along the line are consecutive in any order. (Base path from first to third).
Cells joined by white dots have consecutive values. Cells joined by Xs sum to 10. Not all dots (balls) or Xs (strikes) are given.
Digits in cells containing large circles may not be repeated. Also, these circles indicate the scoring number correlated to the position of the defensive player on the field. For those who don't follow baseball, or who have never kept score, search "baseball player positions by number". These 9 digits will act as "given" digits, and is where I intend for everyone to "break in" to the puzzle. 
Have fun everyone. Play Ball!
