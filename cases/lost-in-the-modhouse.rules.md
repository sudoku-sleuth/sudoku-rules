---
fog:
  initiallyLit:
    - r1c2
    - r1c6
    - r2c1
    - r2c3
    - r2c6
    - r3c2
    - r3c6
    - r4c6
    - r6c1
    - r6c2
    - r6c3
    - r6c4
    - r6c6
    - r6c8
    - r8c6
  links:
    - trigger:
        - r6c6
      lights:
        - r9c8
        - r4c7
        - r7c4
    - trigger:
        - r9c6
      lights:
        - r5c2
    - trigger:
        - r5c4
      lights:
        - r2c8
        - r1c9
        - r1c7
        - r3c9
    - trigger:
        - r8c2
      lights:
        - r8c8
    - trigger:
        - r1c1
      lights:
        - r1c1
    - trigger:
        - r1c3
      lights:
        - r1c3
    - trigger:
        - r1c4
      lights:
        - r1c4
    - trigger:
        - r1c5
      lights:
        - r1c5
    - trigger:
        - r1c7
      lights:
        - r1c7
    - trigger:
        - r1c8
      lights:
        - r1c8
    - trigger:
        - r1c9
      lights:
        - r1c9
    - trigger:
        - r2c2
      lights:
        - r2c2
    - trigger:
        - r2c4
      lights:
        - r2c4
    - trigger:
        - r2c5
      lights:
        - r2c5
    - trigger:
        - r2c7
      lights:
        - r2c7
    - trigger:
        - r2c8
      lights:
        - r2c8
    - trigger:
        - r2c9
      lights:
        - r2c9
    - trigger:
        - r3c1
      lights:
        - r3c1
    - trigger:
        - r3c3
      lights:
        - r3c3
    - trigger:
        - r3c4
      lights:
        - r3c4
    - trigger:
        - r3c5
      lights:
        - r3c5
    - trigger:
        - r3c7
      lights:
        - r3c7
    - trigger:
        - r3c8
      lights:
        - r3c8
    - trigger:
        - r3c9
      lights:
        - r3c9
    - trigger:
        - r4c1
      lights:
        - r4c1
    - trigger:
        - r4c2
      lights:
        - r4c2
    - trigger:
        - r4c3
      lights:
        - r4c3
    - trigger:
        - r4c4
      lights:
        - r4c4
    - trigger:
        - r4c5
      lights:
        - r4c5
    - trigger:
        - r4c7
      lights:
        - r4c7
    - trigger:
        - r4c8
      lights:
        - r4c8
    - trigger:
        - r4c9
      lights:
        - r4c9
    - trigger:
        - r5c1
      lights:
        - r5c1
    - trigger:
        - r5c2
      lights:
        - r5c2
    - trigger:
        - r5c3
      lights:
        - r5c3
    - trigger:
        - r5c4
      lights:
        - r5c4
    - trigger:
        - r5c5
      lights:
        - r5c5
    - trigger:
        - r5c6
      lights:
        - r5c6
    - trigger:
        - r5c7
      lights:
        - r5c7
    - trigger:
        - r5c8
      lights:
        - r5c8
    - trigger:
        - r5c9
      lights:
        - r5c9
    - trigger:
        - r6c5
      lights:
        - r6c5
    - trigger:
        - r6c7
      lights:
        - r6c7
    - trigger:
        - r6c9
      lights:
        - r6c9
    - trigger:
        - r7c1
      lights:
        - r7c1
    - trigger:
        - r7c2
      lights:
        - r7c2
    - trigger:
        - r7c3
      lights:
        - r7c3
    - trigger:
        - r7c4
      lights:
        - r7c4
    - trigger:
        - r7c5
      lights:
        - r7c5
    - trigger:
        - r7c6
      lights:
        - r7c6
    - trigger:
        - r7c7
      lights:
        - r7c7
    - trigger:
        - r7c8
      lights:
        - r7c8
    - trigger:
        - r7c9
      lights:
        - r7c9
    - trigger:
        - r8c1
      lights:
        - r8c1
    - trigger:
        - r8c2
      lights:
        - r8c2
    - trigger:
        - r8c3
      lights:
        - r8c3
    - trigger:
        - r8c4
      lights:
        - r8c4
    - trigger:
        - r8c5
      lights:
        - r8c5
    - trigger:
        - r8c7
      lights:
        - r8c7
    - trigger:
        - r8c8
      lights:
        - r8c8
    - trigger:
        - r8c9
      lights:
        - r8c9
    - trigger:
        - r9c1
      lights:
        - r9c1
    - trigger:
        - r9c2
      lights:
        - r9c2
    - trigger:
        - r9c3
      lights:
        - r9c3
    - trigger:
        - r9c4
      lights:
        - r9c4
    - trigger:
        - r9c5
      lights:
        - r9c5
    - trigger:
        - r9c6
      lights:
        - r9c6
    - trigger:
        - r9c7
      lights:
        - r9c7
    - trigger:
        - r9c8
      lights:
        - r9c8
    - trigger:
        - r9c9
      lights:
        - r9c9
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
  - The source describes Renban lines that are not yet included in our reading.
exported: c288c0b9fe3449ca869482d311a14e9a
---

```rules
sudoku 9x9
parity-1: parity r6c5-r6c6-r5c6
entropic-1: entropic r3c7-r4c7-r4c8
entropic-2: entropic r7c7-r8c8-r8c9
parity-2: parity r1c8-r1c9-r2c9
nabner r5c1-r5c2-r5c3
pair-1: pair r2c1-r3c1 sum 10
pair-2: pair r1c2-r1c3 sum 10
pair-3: pair r7c2-r8c2 sum 10
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
