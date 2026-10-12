---
fog:
  initiallyLit:
    - 1
    - 5
    - 9
    - 11
    - 14
    - 19
    - 23
    - 32
    - 45
    - 46
    - 47
    - 48
    - 50
    - 52
    - 68
  links:
    - trigger:
        - 50
      lights:
        - 79
        - 33
        - 57
    - trigger:
        - 77
      lights:
        - 37
    - trigger:
        - 39
      lights:
        - 16
        - 8
        - 6
        - 26
    - trigger:
        - 64
      lights:
        - 70
    - trigger:
        - 0
      lights:
        - 0
    - trigger:
        - 2
      lights:
        - 2
    - trigger:
        - 3
      lights:
        - 3
    - trigger:
        - 4
      lights:
        - 4
    - trigger:
        - 6
      lights:
        - 6
    - trigger:
        - 7
      lights:
        - 7
    - trigger:
        - 8
      lights:
        - 8
    - trigger:
        - 10
      lights:
        - 10
    - trigger:
        - 12
      lights:
        - 12
    - trigger:
        - 13
      lights:
        - 13
    - trigger:
        - 15
      lights:
        - 15
    - trigger:
        - 16
      lights:
        - 16
    - trigger:
        - 17
      lights:
        - 17
    - trigger:
        - 18
      lights:
        - 18
    - trigger:
        - 20
      lights:
        - 20
    - trigger:
        - 21
      lights:
        - 21
    - trigger:
        - 22
      lights:
        - 22
    - trigger:
        - 24
      lights:
        - 24
    - trigger:
        - 25
      lights:
        - 25
    - trigger:
        - 26
      lights:
        - 26
    - trigger:
        - 27
      lights:
        - 27
    - trigger:
        - 28
      lights:
        - 28
    - trigger:
        - 29
      lights:
        - 29
    - trigger:
        - 30
      lights:
        - 30
    - trigger:
        - 31
      lights:
        - 31
    - trigger:
        - 33
      lights:
        - 33
    - trigger:
        - 34
      lights:
        - 34
    - trigger:
        - 35
      lights:
        - 35
    - trigger:
        - 36
      lights:
        - 36
    - trigger:
        - 37
      lights:
        - 37
    - trigger:
        - 38
      lights:
        - 38
    - trigger:
        - 39
      lights:
        - 39
    - trigger:
        - 40
      lights:
        - 40
    - trigger:
        - 41
      lights:
        - 41
    - trigger:
        - 42
      lights:
        - 42
    - trigger:
        - 43
      lights:
        - 43
    - trigger:
        - 44
      lights:
        - 44
    - trigger:
        - 49
      lights:
        - 49
    - trigger:
        - 51
      lights:
        - 51
    - trigger:
        - 53
      lights:
        - 53
    - trigger:
        - 54
      lights:
        - 54
    - trigger:
        - 55
      lights:
        - 55
    - trigger:
        - 56
      lights:
        - 56
    - trigger:
        - 57
      lights:
        - 57
    - trigger:
        - 58
      lights:
        - 58
    - trigger:
        - 59
      lights:
        - 59
    - trigger:
        - 60
      lights:
        - 60
    - trigger:
        - 61
      lights:
        - 61
    - trigger:
        - 62
      lights:
        - 62
    - trigger:
        - 63
      lights:
        - 63
    - trigger:
        - 64
      lights:
        - 64
    - trigger:
        - 65
      lights:
        - 65
    - trigger:
        - 66
      lights:
        - 66
    - trigger:
        - 67
      lights:
        - 67
    - trigger:
        - 69
      lights:
        - 69
    - trigger:
        - 70
      lights:
        - 70
    - trigger:
        - 71
      lights:
        - 71
    - trigger:
        - 72
      lights:
        - 72
    - trigger:
        - 73
      lights:
        - 73
    - trigger:
        - 74
      lights:
        - 74
    - trigger:
        - 75
      lights:
        - 75
    - trigger:
        - 76
      lights:
        - 76
    - trigger:
        - 77
      lights:
        - 77
    - trigger:
        - 78
      lights:
        - 78
    - trigger:
        - 79
      lights:
        - 79
    - trigger:
        - 80
      lights:
        - 80
format: open-rules
title: Lost in the Modhouse
setter: Kennet's Dad
source: https://sudokupad.app/mg02j4jdey
case: https://sudoku-sleuth.com/cases/lost-in-the-modhouse
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - Some source features still need to be checked against our reading.
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
parity-1: parity r6c5-r6c6-r5c6
entropic-1: entropic r3c7-r4c7-r4c8
entropic-2: entropic r7c7-r8c8-r8c9
parity-2: parity r1c8-r1c9-r2c9
nabner r5c1-r5c2-r5c3
pair-1: pair r2c1-r3c1 relation {"op":"sum","value":10}
pair-2: pair r1c2-r1c3 relation {"op":"sum","value":10}
pair-3: pair r7c2-r8c2 relation {"op":"sum","value":10}
unique-1: unique r1c8-r1c9-r2c9-r5c6-r6c5-r6c6 stated true
unique-2: unique r3c7-r4c7-r4c8-r7c7-r8c8-r8c9 stated true
unique-3: unique r5c1-r5c2-r5c3 stated true
unique-4: unique r1c2-r1c3-r2c1-r3c1-r7c2-r8c2 stated true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.25,1.25],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"NB","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.25,1.25],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"MOD","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.25,7.25],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"MOD","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.25],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"MOD","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.25,5.25],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"PR","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.75,6.25],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.25,6.25],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"ENT","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#f593ff9e","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[3.5,5.5]],"color":"#b41bb4ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,3.5]],"color":"#b41bb4ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,8.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[8.5,5.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,2.5],[2.5,1.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,6.5],[1.5,7.5],[2.5,7.5],[2.5,8.5]],"color":"#f593ff9e","thickness":9.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[56,57,66]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[78,79,80]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[24,33,34]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.8,3.2],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.2,7.2],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"ZIP","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.2,8.2],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"PR","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.2,7.6],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"ENT","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.1,0.2],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"RB","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.2,5.2],"width":0,"height":0.348,"rounded":true,"thickness":0,"angle":0,"text":"RB","textColor":"#000000","fontSize":13,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Limited (1-9) Constraints; Dynamic Fog; Killer Cages; X/V; Parity, Renban, Nabner, Entropic, Modular, and Zipper lines

-Normal sudoku rules apply. 
-The grid is partially covered in fog; placing a correct digit will clear the fog in that cell and possibly elsewhere in the grid.
-Each of the following constraint types may contain no repeated digits anywhere in the puzzle. E.g., if a parity line contains a 5, then no other parity line in the puzzle  may contain a 5:
1) Digits in a cage must sum to the total given.
2) Digits joined by an X sum to 10. 
3) Adjacent digits along a red parity line (PR) must alternate between odd and even digits. 
4) A purple renban line (RB) must contain a set of consecutive digits in any order. 
5) A yellow nabner line (NB) must contain a set of nonconsecutive digits in any order. 
6) Any set of three digits along an orange entropic line (ENT) line must contain at least one digit from each of the following sets: 123; 456; 789.
7) Any set of three digits along a teal modular line (MOD) must contain at least one digit from each of the following sets: 147; 258; 369.
8) Pairs of digits equidistant from the center of a pink zipper line (ZIP) must sum to the digit in the center of that line, notated by a small circle. 
NOTE: Lines in the puzzle never intersect or share cells.
