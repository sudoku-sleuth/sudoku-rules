---
fog:
  initiallyLit:
    - 6
    - 8
    - 18
    - 19
    - 44
    - 50
    - 63
    - 64
    - 67
    - 72
    - 73
    - 80
format: open-rules
title: Peekaboo!
setter: Marty Sears
source: https://tinyurl.com/38pn3848
case: https://sudoku-sleuth.com/cases/peekaboo
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
cage-1: cage r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r2c4 total 44 connected true
cage-2: cage r3c1-r4c1 total 5 connected true
cage-3: cage r9c4-r9c5 total 8 connected true
cage-4: cage r2c1-r2c2 total 11 connected true
cage-5: cage r3c4-r3c5 total 14 connected true
cage-6: cage r4c7-r4c8-r5c7 total 13 connected true
whispers-1: whispers r1c9-r2c9-r2c8-r2c7-r3c7-r3c6-r4c6-r4c5-r4c4-r5c4-r5c3-r6c3-r6c2-r7c2-r8c2-r8c3-r9c3-r9c2 gap 5
palindrome-1: palindrome r3c2-r4c2-r4c1
parity-1: parity r3c8-r3c9
whispers-2: whispers r5c2-r5c1-r6c1 gap 5
parity-2: parity r5c8-r5c9
palindrome-2: palindrome r7c3-r7c4-r6c4-r6c5-r7c5-r7c6-r7c7-r6c7-r6c6
whispers-3: whispers r7c1-r8c1-r9c1 gap 5
palindrome-3: palindrome r8c5-r8c6-r8c7-r9c7-r9c8
whispers-4: whispers r8c9-r9c9 gap 5
renban r6c9-r7c9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0.606,"height":0.606,"rounded":false,"fill":"#C154FF","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0.606,"height":0.606,"rounded":false,"fill":"#C154FF","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.606,"height":0.606,"rounded":false,"fill":"#CCCCCC","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.606,"height":0.606,"rounded":false,"fill":"#CCCCCC","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.606,"height":0.606,"rounded":false,"fill":"#FF0000","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.606,"height":0.606,"rounded":false,"fill":"#FF0000","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.606,"height":0.606,"rounded":false,"fill":"#1DBC00","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.606,"height":0.606,"rounded":false,"fill":"#1DBC00","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.606,"height":0.606,"rounded":false,"fill":"#FFDE00","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.606,"height":0.606,"rounded":false,"fill":"#FFDE00","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[0,3],[9,3]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[0,6],[9,6]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3,0],[3,9]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6,0],[6,9]],"color":"#000000","thickness":4.3,"rounded":true,"layer":"over"}}
```

• Normal Sudoku rules apply.
• Enter correct digits to uncover the fog. No guessing is necessary (or allowed!)
• Digits in a cage don't repeat, and must sum to the small clue shown in the top left corner.
• Adjacent digits along a green line must have a difference of at least 5.
• Digits along a yellow line form a palindrome... ie; they read the same in both directions. 
• Digits along a red line alternate between odd and even.
• Purple lines contain a set of consecutive, non-repeating digits in any order.
• Lines never branch, cross or join to each other, or go diagonally. 
• The digit in a coloured diamond indicates how many lines of that colour are in the grid. 
• The digit in a grey diamond indicates how many cages are in the grid.
