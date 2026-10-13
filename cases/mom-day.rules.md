---
format: open-rules
title: MOM DAY
setter: Kennet's Dad
source: https://sudokupad.app/3blhorinlx
case: https://sudoku-sleuth.com/cases/mom-day
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
kropki-1: kropki r5c1-r5c2 colour "black"
kropki-2: kropki r6c5-r6c6 colour "black"
kropki-3: kropki r2c1-r3c1 colour "white"
kropki-4: kropki r6c7-r7c7 colour "white"
arrow-1: arrow r2c1-r3c1-r4c1 bulb ["r3c2"]
arrow-2: arrow r2c3-r3c3-r4c3 bulb ["r3c2"]
whispers r4c7-r3c7-r2c7-r3c8-r2c9-r3c9-r4c9 gap 5
renban r3c4-r4c4-r4c5-r4c6-r3c6-r2c6-r2c5-r2c4
region-sum r7c8-r6c8-r5c7-r5c9 segments [["r7c8"],["r6c8","r5c7","r5c9"]]
pair-1: pair r8c2-r9c2 sum 10
pair-2: pair r8c6-r8c7 sum 10
pair-3: pair r9c3-r9c4 sum 10
pair-4: pair r8c8-r9c8 sum 5
pair-5: pair r1c5-r2c5 sum 5
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,3.5],[5.5,4.5],[6.5,5.5],[5.5,5.5],[4.5,4.5],[5.5,3.5]],"color":"#fc4242ff","thickness":6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[6.5,0.5],[6.5,1.5],[5.5,2.5],[4.5,1.5],[4.5,0.5]],"color":"#ff8336ff","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff80","stroke":"#aaaf","thickness":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff80","stroke":"#aaaf","thickness":1}}
```

For all the Moms...

Normal sudoku rules apply. Digits along an arrow sum to the digit in that arrow's circle. On the pink line there must be a set of non-repeating consecutive digits in any order. Adjacent digits on a green line must have a difference of at least five. Any set of three adjacent digits on an orange line must have one digit from each of the following sets: 123, 456, 789. Digits on a red line must have a value between the values of the digits in that line's circles. Box borders divide a blue line into segments with equal sums. Digits joined by an X sum to 10; digits joined by a V sum to 5. Digits joined by a white dot must be consecutive; digits joined by a black dot must be in a 2:1 ratio. Not all Xs, Vs, or dots are necessarily given.
