---
format: open-rules
title: Everything in its Right Place
setter: Marty Sears
source: https://tinyurl.com/329wybe5
case: https://sudoku-sleuth.com/cases/everything-in-its-right-place
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c5 total 15 connected true
cage-2: cage r8c7-r9c7-r9c8 total 9 connected true
cage-3: cage r2c1-r3c1 total 9 connected true
pair-1: pair r2c8-r3c8 sum 5
pair-2: pair r1c9-r2c9 sum 5
pair-3: pair r4c3-r4c4 sum 5
pair-4: pair r8c5-r9c5 sum 5
pair-5: pair r7c4-r8c4 sum 5
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#B3B3B3","stroke":"#B3B3B3","thickness":1,"textColor":"#A6A6A6","opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#B3B3B3","stroke":"#B3B3B3","thickness":1,"textColor":"#A6A6A6","opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#B3B3B3","stroke":"#B3B3B3","thickness":1,"textColor":"#A6A6A6","opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#B3B3B3","stroke":"#B3B3B3","thickness":1,"textColor":"#A6A6A6","opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#B3B3B3","stroke":"#B3B3B3","thickness":1,"textColor":"#A6A6A6","opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#B3B3B3","stroke":"#B3B3B3","thickness":1,"textColor":"#A6A6A6","opacity":0.5}}
```

• Normal sudoku rules apply.

• Draw 3 snakes which must each begin and end at a different grey spot. Snakes are lines which may move orthogonally and diagonally between cells. They may touch each other (or themselves), and can even cross eachother, but they must not branch, share cells with each other, or enter cages.

• A digit on a snake indicates exactly how many times that digit appears on that snake. Eg: If there is a 5 on a snake, there are five 5s on that snake.

• One snake is a German Whisper line; along it, adjacent digits must differ by at least 5.

• One snake is a slow thermometer; along this line, reading from one end to the other, digits must always increase or stay the same.

• One snake is entropic; along it, any group of 3 adjacent cells must contain one low digit (1, 2 or 3), one medium digit (4, 5 or 6) and one high digit (7, 8 or 9.)

• Digits in a cage must sum to the small clue given in that cage.

• Digits separated by a V sum to 5.
