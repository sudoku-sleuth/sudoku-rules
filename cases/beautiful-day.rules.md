---
fog:
  initiallyLit:
    - 0
    - 1
    - 9
    - 10
    - 11
    - 19
    - 20
format: open-rules
title: Beautiful Day
setter: Sandra & Nala
source: https://sudokupad.app/1gu9f02ldl
case: https://sudoku-sleuth.com/cases/beautiful-day
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r3c2 colour "black"
kropki-2: kropki r1c2-r2c2 colour "black"
kropki-3: kropki r2c6-r2c7 colour "black"
kropki-4: kropki r5c2-r5c3 colour "black"
kropki-5: kropki r3c3-r3c4 colour "white"
kropki-6: kropki r2c6-r3c6 colour "white"
arrow-1: arrow r2c5-r1c4-r2c4 bulb ["r1c6"]
arrow-2: arrow r6c1-r5c1 bulb ["r7c2"]
arrow-3: arrow r6c3-r7c3 bulb ["r5c4"]
arrow-4: arrow r3c4-r4c4-r3c3-r3c2-r4c1 bulb ["r2c3"]
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.2,3.15],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"Little by little","textColor":"#bbafafa2","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.2,4.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"bit by bit","textColor":"#bbafafa2","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.85,2.45],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"wash it down and you'll be fine","textColor":"#bbafafa2","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.2,2.1],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"So take this one,","textColor":"#bbafafa2","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.2,1.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"Take it just in case","textColor":"#bbafafa2","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.2,5.6],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"It's such a perfect day","textColor":"#bbafafa2","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.2,6.8],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"A tribute to 'Chalk Outlines'","textColor":"#bbafafa2","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.75,7],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"by Ren X Chinchilla","textColor":"#bbafafa2","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
```

When a day - no matter how perfect it is - can only take you so far and the fear of hitting that wall where everything stops to flow grows big enough - it is understandable that you will start to look for another solution to your problems. Once found, everything will flow again in all the different directions that seemed blocked just a moment ago.

What kind of solution will you seek out when you don’t seem to be able to come any further?

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

Digits on an arrow must sum to the digit in that arrows circle. Each arrow has its own color. Arrows of the same color are connected. 

Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are given. (There is no negative constraint.)

One cell in the grid is your newly found motivation. Cells must increase in value as they move away from this point in every straight-line direction (i.e. vertically, horizontally and diagonally) until they reach the edge of the grid. Once found, everything will start to flow again. 

Additionally the grid is partially covered in fog just as your thinking might be impaired sometimes and not allow clear thoughts. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
