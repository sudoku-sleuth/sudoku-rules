---
fog:
  initiallyLit:
    - r1c4
    - r1c5
    - r1c6
    - r2c4
    - r2c5
    - r2c6
    - r3c4
    - r3c5
    - r3c6
    - r4c1
    - r4c2
    - r4c3
    - r4c4
    - r4c5
    - r4c6
    - r4c7
    - r4c8
    - r4c9
    - r5c1
    - r5c2
    - r5c3
    - r5c4
    - r5c5
    - r5c6
    - r5c7
    - r5c8
    - r5c9
    - r6c1
    - r6c2
    - r6c3
    - r6c4
    - r6c5
    - r6c6
    - r6c7
    - r6c8
    - r6c9
    - r7c4
    - r7c5
    - r7c6
    - r8c4
    - r8c5
    - r8c6
    - r9c4
    - r9c5
    - r9c6
  links:
    - trigger:
        - r7c4
      lights:
        - r7c7
        - r7c8
        - r7c9
        - r8c7
        - r8c8
        - r8c9
        - r9c7
        - r9c8
        - r9c9
        - r7c1
        - r7c2
        - r7c3
        - r8c1
        - r8c2
        - r8c3
        - r9c1
        - r9c2
        - r9c3
    - trigger:
        - r9c8
      lights:
        - r1c7
        - r1c8
        - r1c9
        - r2c7
        - r2c8
        - r2c9
        - r3c7
        - r3c8
        - r3c9
        - r1c1
        - r1c2
        - r1c3
        - r2c1
        - r2c2
        - r2c3
        - r3c1
        - r3c2
        - r3c3
    - trigger:
        - r1c1
      lights:
        - r1c1
    - trigger:
        - r1c2
      lights:
        - r1c2
    - trigger:
        - r1c3
      lights:
        - r1c3
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
        - r2c1
      lights:
        - r2c1
    - trigger:
        - r2c2
      lights:
        - r2c2
    - trigger:
        - r2c3
      lights:
        - r2c3
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
        - r3c2
      lights:
        - r3c2
    - trigger:
        - r3c3
      lights:
        - r3c3
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
title: Think inside the...
setter: Kennet's Dad
source: https://sudokupad.app/0zafc3e2xm
case: https://sudoku-sleuth.com/cases/think-inside-the
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - Some source features still need to be checked against our reading.
  - The source describes Renban lines that are not yet included in our reading.
exported: f5dbdeffedbb78244d92f272b5d8c2ab
---

```rules
sudoku 9x9
negative relations [{"op":"sum","value":10}] except [["r5c4","r6c4"]] stated true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,0.875],[4.5,1.125],[4.875,1.125],[4.875,1.875],[4.5,1.875],[4.5,2.125],[4.875,2.125],[4.875,2.875],[4.125,2.875],[4.125,2.125],[4.5,2.125]],"color":"#f98cfeff","thickness":6.4,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,1.125],[4.125,1.125],[4.125,1.875],[4.5,1.875]],"color":"#f98cfeff","thickness":6.4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,0.875],[5.125,0.875],[5.125,2.875],[5.875,2.875],[5.875,0.125],[4.125,0.125],[4.125,0.875],[4.5,0.875]],"color":"#f98cfeff","thickness":6.4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,2.875],[5.5,3.125],[5.875,3.125],[5.875,3.875],[4.125,3.875],[4.125,3.125],[5.5,3.125]],"color":"#f98cfeff","thickness":6.4,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.875,3.5],[6.125,3.5],[6.125,3.875],[6.875,3.875],[6.875,3.5],[7.125,3.5],[7.125,3.875],[7.875,3.875],[7.875,3.5],[8.125,3.5],[8.125,3.875],[8.875,3.875],[8.875,3.125],[8.125,3.125],[8.125,3.5]],"color":"#f98cfeff","thickness":6.4,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.125,3.5],[6.125,3.125],[6.875,3.125],[6.875,3.5]],"color":"#f98cfeff","thickness":6.4,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.125,3.5],[7.125,3.125],[7.875,3.125],[7.875,3.5]],"color":"#f98cfeff","thickness":6.4,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.875,5.5],[2.125,5.5],[2.125,5.875],[2.875,5.875],[2.875,5.5],[3.125,5.5],[3.125,5.875],[3.875,5.875],[3.875,5.125],[3.125,5.125],[3.125,5.5]],"color":"#3baf","thickness":6.4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.125,5.5],[2.125,5.125],[2.875,5.125],[2.875,5.5]],"color":"#3baf","thickness":6.4,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,5.875],[3.5,6.125],[3.875,6.125],[3.875,8.875],[3.125,8.875],[3.125,6.125],[3.5,6.125]],"color":"#3baf","thickness":6.4,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.875,5.5],[1.875,5.875],[0.125,5.875],[0.125,4.125],[1.875,4.125],[1.875,5.5]],"color":"#3baf","thickness":6.4,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.875,4.5],[2.125,4.5],[2.125,4.875],[2.875,4.875],[2.875,4.5],[3.125,4.5],[3.125,4.875],[3.875,4.875],[3.875,4.125],[3.125,4.125],[3.125,4.5]],"color":"#3baf","thickness":6.4,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.125,4.5],[2.125,4.125],[2.875,4.125],[2.875,4.5]],"color":"#3baf","thickness":6.4,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.875,4.5],[6.125,4.5],[6.125,4.125],[7.875,4.125],[7.875,4.875],[6.875,4.875],[6.875,5.5],[7.125,5.5],[7.125,5.875],[8.875,5.875],[8.875,4.125],[8.125,4.125],[8.125,5.125],[7.125,5.125],[7.125,5.5]],"color":"#9e66ffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.125,4.5],[6.125,5.875],[6.875,5.875],[6.875,5.5]],"color":"#9e66ffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.125,5.75],[6.125,5.375]],"color":"#9e66ffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.875,4.5],[5.875,4.875],[4.5,4.875],[4.5,5.125],[5.875,5.125],[5.875,5.875],[5.375,5.875],[5.375,6.125],[5.875,6.125],[5.875,6.875],[4.875,6.875],[4.875,8.875],[4.125,8.875],[4.125,6.125],[5.375,6.125]],"color":"#9e66ffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.875,4.5],[5.875,4.125],[4.125,4.125],[4.125,4.875],[4.5,4.875]],"color":"#9e66ffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.5,5.125],[4.125,5.125],[4.125,5.875],[5.375,5.875]],"color":"#9e66ffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.875,7.5],[5.125,7.5],[5.125,8.875],[5.875,8.875],[5.875,7.125],[5.125,7.125],[5.125,7.5]],"color":"#9e66ffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.625,7.875],[1.875,7.875],[1.875,6.125],[0.125,6.125],[0.125,7.875],[1.625,7.875]],"color":"#9f9f9fff","thickness":6.4,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3.875,0.875],[3.875,3.875],[0.125,3.875],[0.125,3.125],[3.125,3.125],[3.125,0.125],[3.875,0.125],[3.875,0.875]],"color":"#9f9f9fff","thickness":6.4,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[8.5,1.875],[8.5,2.125],[8.875,2.125],[8.875,2.875],[8.125,2.875],[8.125,2.125],[8.5,2.125]],"color":"#2ecbffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[8.5,1.875],[8.875,1.875],[8.875,0.125],[8.125,0.125],[8.125,1.125],[7.125,1.125],[7.125,1.875],[8.5,1.875]],"color":"#2ecbffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[7.125,1.5],[6.875,1.5],[6.875,2.875],[6.125,2.875],[6.125,1.125],[6.875,1.125],[6.875,1.5]],"color":"#2ecbffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6.875,7.5],[7.125,7.5],[7.125,8.875],[7.875,8.875],[7.875,7.875],[8.875,7.875],[8.875,7.125],[8.5,7.125],[8.5,6.875],[8.875,6.875],[8.875,6.125],[8.125,6.125],[8.125,6.875],[8.5,6.875]],"color":"#2ecbffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[7.125,7.5],[7.125,7.125],[8.5,7.125]],"color":"#2ecbffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[6.875,7.5],[6.875,7.875],[6.125,7.875],[6.125,6.125],[6.875,6.125],[6.875,7.5]],"color":"#2ecbffff","thickness":6.4,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#f98cfe71","thickness":0,"angle":0}}
```

-Normal sudoku rules apply. 
-No two adjacent digits in the grid may sum to 10. 
-Dynamic Fog: there is some fog in the grid; placing a correct digit might remove it. No guessing is required.
-Killer Cage: digits in a gray box cannot repeat. 
-Box Value Lines: there are lines in the grid that connect boxes; the digits in a box are summed to arrive at a value. That value applies to the following rules:

1) Zipper: when box values equidistant from the center box on a pink line are summed together, they are equal to the center box's value on that line. The center box is notated by a pink circle.
2) Modular: every run of three boxes on a teal line must have one value from each; 0 mod(3), 1 mod(3), and 2 mod(3).
3) Renban: Box values on a purple line make up at a set of consecutive, non-repeating values.
4) Sum Lines: The box values connected by a blue line must be the same. 
5) Consecutive pairs: box values joined by a white dot have a difference of 1.
