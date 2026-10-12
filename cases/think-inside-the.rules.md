---
fog:
  initiallyLit:
    - 3
    - 4
    - 5
    - 12
    - 13
    - 14
    - 21
    - 22
    - 23
    - 27
    - 28
    - 29
    - 30
    - 31
    - 32
    - 33
    - 34
    - 35
    - 36
    - 37
    - 38
    - 39
    - 40
    - 41
    - 42
    - 43
    - 44
    - 45
    - 46
    - 47
    - 48
    - 49
    - 50
    - 51
    - 52
    - 53
    - 57
    - 58
    - 59
    - 66
    - 67
    - 68
    - 75
    - 76
    - 77
  links:
    - trigger:
        - 57
      lights:
        - 60
        - 61
        - 62
        - 69
        - 70
        - 71
        - 78
        - 79
        - 80
        - 54
        - 55
        - 56
        - 63
        - 64
        - 65
        - 72
        - 73
        - 74
    - trigger:
        - 79
      lights:
        - 6
        - 7
        - 8
        - 15
        - 16
        - 17
        - 24
        - 25
        - 26
        - 0
        - 1
        - 2
        - 9
        - 10
        - 11
        - 18
        - 19
        - 20
    - trigger:
        - 0
      lights:
        - 0
    - trigger:
        - 1
      lights:
        - 1
    - trigger:
        - 2
      lights:
        - 2
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
        - 9
      lights:
        - 9
    - trigger:
        - 10
      lights:
        - 10
    - trigger:
        - 11
      lights:
        - 11
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
        - 19
      lights:
        - 19
    - trigger:
        - 20
      lights:
        - 20
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
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
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
