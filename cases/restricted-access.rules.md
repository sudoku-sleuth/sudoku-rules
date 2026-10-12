---
fog:
  initiallyLit:
    - 0
    - 2
    - 4
    - 7
    - 15
    - 16
    - 23
    - 24
    - 31
    - 32
    - 33
    - 37
    - 40
    - 43
    - 47
    - 48
    - 49
    - 56
    - 57
    - 64
    - 65
    - 73
    - 76
    - 78
    - 80
format: open-rules
title: Restricted Access
setter: Kennet's Dad
source: https://sudokupad.app/2iaiw4r5o5
case: https://sudoku-sleuth.com/cases/restricted-access
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
givens: r1c3=5 r9c7=5
---

```rules
sudoku 9x9
kropki-1: kropki r6c1-r7c1 colour "black"
kropki-2: kropki r3c9-r4c9 colour "black"
pair-1: pair r7c7-r8c7 relation {"op":"sum","value":10}
pair-2: pair r8c6-r8c7 relation {"op":"sum","value":10}
pair-3: pair r8c2-r9c2 relation {"op":"sum","value":5}
pair-4: pair r7c3-r8c3 relation {"op":"sum","value":5}
pair-5: pair r7c3-r7c4 relation {"op":"sum","value":5}
pair-6: pair r6c4-r7c4 relation {"op":"sum","value":5}
pair-7: pair r6c4-r6c5 relation {"op":"sum","value":5}
pair-8: pair r4c5-r4c6 relation {"op":"sum","value":5}
pair-9: pair r3c6-r4c6 relation {"op":"sum","value":5}
pair-10: pair r3c6-r3c7 relation {"op":"sum","value":5}
pair-11: pair r2c7-r3c7 relation {"op":"sum","value":5}
pair-12: pair r1c8-r2c8 relation {"op":"sum","value":5}
negative relations [{"op":"sum","value":5}] except [["r8c2","r9c2"],["r7c3","r8c3"],["r7c3","r7c4"],["r6c4","r7c4"],["r6c4","r6c5"],["r4c5","r4c6"],["r3c6","r4c6"],["r3c6","r3c7"],["r2c7","r3c7"],["r1c8","r2c8"],["r7c7","r8c7"],["r8c6","r8c7"],["r6c1","r7c1"],["r3c9","r4c9"]] stated true
diagonal direction "main"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.67,"height":0.67,"rounded":false,"fill":"#25eaf6d1","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.67,"height":0.67,"rounded":false,"fill":"#25eaf6d1","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.67,"height":0.67,"rounded":false,"fill":"#25eaf6d1","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.67,"height":0.67,"rounded":false,"fill":"#25eaf6d1","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.67,"height":0.67,"rounded":false,"fill":"#25eaf6d1","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.67,"height":0.67,"rounded":false,"fill":"#25eaf6d1","thickness":0}}
```

Negative Diagonal, Fog of War, Odd/Even, X/V Pairs (neg. V), Kropki Pairs

Normal sudoku rules apply. Digits along the blue 'negative' diagonal may not repeat; this diagonal begins in row 1 column 1 and crosses the grid to row 9 column 9. Some of the grid is covered in fog; placing a correct digit will remove the fog surrounding that digit. A cell filled with a blue square contains an even digit. Digits in cells joined by an X sum to 10; NOT all X clues are given. Digits in cells joined by a V sum to 5; ALL V clues are given and visible from the outset of the puzzle. One digit is double the other in cells joined by a black dot. Not all black dots are given.
