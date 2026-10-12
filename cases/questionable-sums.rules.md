---
format: open-rules
title: Questionable sums
setter: Dr Logic
source: https://sudokupad.app/2l6tawe20d
case: https://sudoku-sleuth.com/cases/questionable-sums
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r3c1-r3c2-r3c3-r4c3-r5c2-r5c3-r6c2-r7c2 connected true
cage-2: cage r3c4-r3c5-r3c6-r4c6-r5c5-r5c6-r6c5-r7c5 connected true
cage-3: cage r3c7-r3c8-r3c9-r4c9-r5c8-r5c9-r6c8-r7c8 connected true
whispers-1: whispers r3c1-r3c2-r3c3-r4c3-r5c3-r5c2-r6c2-r7c2 gap 5
whispers-2: whispers r3c7-r3c8-r3c9-r4c9-r5c9-r5c8-r6c8-r7c8 gap 5
renban r3c4-r3c5-r3c6-r4c6-r5c6-r5c5-r6c5-r7c5
parity-cells r1c1-r1c9-r9c9-r9c1 parity "even"
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"p","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,-0.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":">1","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"p","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[3,4],"label":"p"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[5,14],"label":"p"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[74,75],"label":"p"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[77,78],"label":"p"}}
```

Normal Sudoku rules apply.

Digits in a marked killer cage cannot repeat and sum to the marked total (if given).

Digits along a green 'German Whispers' line differ by at least 5.

Digits on a purple 'Renban' line do not repeat and form a set of consecutive digits, in any order.

Clues outside the grid give the sum of the first X cells, where X is the cell closest to the clue. 

Digits on a grey square are even.

In this puzzle, some totals have been obscured. Some have been replaced with a 'p'. 'p' is not necessarily the same for all sums, and 'p' stands for 'prime number'. A prime number is any number that only has 2 divisors, itself and 1. Some totals have been replaced with inequalities.
