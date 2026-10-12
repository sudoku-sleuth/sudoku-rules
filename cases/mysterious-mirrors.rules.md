---
fog:
  initiallyLit:
    - 0
    - 8
    - 10
    - 16
    - 20
    - 21
    - 22
    - 23
    - 24
    - 29
    - 30
    - 31
    - 32
    - 33
    - 38
    - 39
    - 40
    - 41
    - 42
    - 47
    - 48
    - 49
    - 50
    - 51
    - 56
    - 57
    - 58
    - 59
    - 60
    - 64
    - 70
    - 72
    - 80
  links:
    - trigger:
        - 38
        - 58
      lights:
        - 17
        - 25
        - 26
        - 34
        - 35
    - trigger:
        - 25
        - 21
        - 22
        - 29
        - 42
      lights:
        - 54
        - 55
        - 63
        - 65
        - 73
        - 74
    - trigger:
        - 63
        - 54
        - 55
        - 65
        - 74
        - 59
        - 51
        - 15
      lights:
        - 66
        - 67
        - 68
        - 69
        - 75
        - 76
        - 77
        - 78
        - 79
    - trigger:
        - 60
        - 61
        - 23
        - 33
        - 20
        - 11
        - 8
      lights:
        - 43
        - 44
        - 52
        - 53
        - 61
        - 62
        - 71
    - trigger:
        - 43
        - 44
      lights:
        - 1
        - 2
        - 9
        - 11
        - 18
        - 19
        - 27
        - 28
        - 36
        - 37
        - 45
        - 46
    - trigger:
        - 47
        - 57
      lights:
        - 3
        - 4
        - 5
        - 6
        - 7
        - 12
        - 13
        - 14
        - 15
    - trigger:
        - 1
      lights:
        - 1
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
        - 5
      lights:
        - 5
    - trigger:
        - 6
      lights:
        - 6
    - trigger:
        - 7
      lights:
        - 7
    - trigger:
        - 9
      lights:
        - 9
    - trigger:
        - 11
      lights:
        - 11
    - trigger:
        - 12
      lights:
        - 12
    - trigger:
        - 13
      lights:
        - 13
    - trigger:
        - 14
      lights:
        - 14
    - trigger:
        - 15
      lights:
        - 15
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
        - 43
      lights:
        - 43
    - trigger:
        - 44
      lights:
        - 44
    - trigger:
        - 45
      lights:
        - 45
    - trigger:
        - 46
      lights:
        - 46
    - trigger:
        - 52
      lights:
        - 52
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
        - 68
      lights:
        - 68
    - trigger:
        - 69
      lights:
        - 69
    - trigger:
        - 71
      lights:
        - 71
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
format: open-rules
title: Mysterious Mirrors
setter: Marty Sears
source: https://sudokupad.app/azfedfdbvc
case: https://sudoku-sleuth.com/cases/mysterious-mirrors
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
---

```rules
sudoku 9x9
kropki-1: kropki r7c4-r7c5 colour "black"
kropki-2: kropki r5c3-r6c3 colour "black"
kropki-3: kropki r5c8-r5c9 colour "black"
arrow-1: arrow r4c3-r5c3 bulb ["r3c4"]
arrow-2: arrow r7c6-r7c5 bulb ["r6c7"]
arrow-3: arrow r4c7-r3c8 bulb ["r3c6"]
arrow-4: arrow r1c7-r1c8 bulb ["r2c7"]
arrow-5: arrow r8c3-r7c2 bulb ["r9c3"]
arrow-6: arrow r9c6-r8c7 bulb ["r8c5"]
arrow-7: arrow r4c2-r3c2 bulb ["r5c1"]
same-class-1: same-class r1c1-r9c9 classes "entropy"
same-class-2: same-class r1c2-r8c9 classes "entropy"
same-class-3: same-class r1c3-r7c9 classes "entropy"
same-class-4: same-class r1c4-r6c9 classes "entropy"
same-class-5: same-class r1c5-r5c9 classes "entropy"
same-class-6: same-class r1c6-r4c9 classes "entropy"
same-class-7: same-class r1c7-r3c9 classes "entropy"
same-class-8: same-class r1c8-r2c9 classes "entropy"
same-class-9: same-class r2c1-r9c8 classes "entropy"
same-class-10: same-class r2c2-r8c8 classes "entropy"
same-class-11: same-class r2c3-r7c8 classes "entropy"
same-class-12: same-class r2c4-r6c8 classes "entropy"
same-class-13: same-class r2c5-r5c8 classes "entropy"
same-class-14: same-class r2c6-r4c8 classes "entropy"
same-class-15: same-class r2c7-r3c8 classes "entropy"
same-class-16: same-class r3c1-r9c7 classes "entropy"
same-class-17: same-class r3c2-r8c7 classes "entropy"
same-class-18: same-class r3c3-r7c7 classes "entropy"
same-class-19: same-class r3c4-r6c7 classes "entropy"
same-class-20: same-class r3c5-r5c7 classes "entropy"
same-class-21: same-class r3c6-r4c7 classes "entropy"
same-class-22: same-class r4c1-r9c6 classes "entropy"
same-class-23: same-class r4c2-r8c6 classes "entropy"
same-class-24: same-class r4c3-r7c6 classes "entropy"
same-class-25: same-class r4c4-r6c6 classes "entropy"
same-class-26: same-class r4c5-r5c6 classes "entropy"
same-class-27: same-class r5c1-r9c5 classes "entropy"
same-class-28: same-class r5c2-r8c5 classes "entropy"
same-class-29: same-class r5c3-r7c5 classes "entropy"
same-class-30: same-class r5c4-r6c5 classes "entropy"
same-class-31: same-class r6c1-r9c4 classes "entropy"
same-class-32: same-class r6c2-r8c4 classes "entropy"
same-class-33: same-class r6c3-r7c4 classes "entropy"
same-class-34: same-class r7c1-r9c3 classes "entropy"
same-class-35: same-class r7c2-r8c3 classes "entropy"
same-class-36: same-class r8c1-r9c2 classes "entropy"
same-class-37: same-class r1c2-r2c1 classes "entropy"
same-class-38: same-class r1c3-r3c1 classes "entropy"
same-class-39: same-class r1c4-r4c1 classes "entropy"
same-class-40: same-class r1c5-r5c1 classes "entropy"
same-class-41: same-class r1c6-r6c1 classes "entropy"
same-class-42: same-class r1c7-r7c1 classes "entropy"
same-class-43: same-class r1c8-r8c1 classes "entropy"
same-class-44: same-class r1c9-r9c1 classes "entropy"
same-class-45: same-class r2c3-r3c2 classes "entropy"
same-class-46: same-class r2c4-r4c2 classes "entropy"
same-class-47: same-class r2c5-r5c2 classes "entropy"
same-class-48: same-class r2c6-r6c2 classes "entropy"
same-class-49: same-class r2c7-r7c2 classes "entropy"
same-class-50: same-class r2c8-r8c2 classes "entropy"
same-class-51: same-class r2c9-r9c2 classes "entropy"
same-class-52: same-class r3c4-r4c3 classes "entropy"
same-class-53: same-class r3c5-r5c3 classes "entropy"
same-class-54: same-class r3c6-r6c3 classes "entropy"
same-class-55: same-class r3c7-r7c3 classes "entropy"
same-class-56: same-class r3c8-r8c3 classes "entropy"
same-class-57: same-class r3c9-r9c3 classes "entropy"
same-class-58: same-class r4c5-r5c4 classes "entropy"
same-class-59: same-class r4c6-r6c4 classes "entropy"
same-class-60: same-class r4c7-r7c4 classes "entropy"
same-class-61: same-class r4c8-r8c4 classes "entropy"
same-class-62: same-class r4c9-r9c4 classes "entropy"
same-class-63: same-class r5c6-r6c5 classes "entropy"
same-class-64: same-class r5c7-r7c5 classes "entropy"
same-class-65: same-class r5c8-r8c5 classes "entropy"
same-class-66: same-class r5c9-r9c5 classes "entropy"
same-class-67: same-class r6c7-r7c6 classes "entropy"
same-class-68: same-class r6c8-r8c6 classes "entropy"
same-class-69: same-class r6c9-r9c6 classes "entropy"
same-class-70: same-class r7c8-r8c7 classes "entropy"
same-class-71: same-class r7c9-r9c7 classes "entropy"
same-class-72: same-class r8c9-r9c8 classes "entropy"
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[-0.167,8.5],[-0.167,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,8.5]],"color":"#c7b1e6ff","thickness":17.92,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[-0.333,8.667],[-0.333,9.333],[9.333,9.333],[9.333,-0.333],[-0.333,-0.333],[-0.333,8.667]],"color":"#c7b1e62e","thickness":17.92,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[-0.333,8.667],[-0.333,9.333],[9.333,9.333],[9.333,-0.333],[-0.333,-0.333],[-0.333,8.667]],"color":"#c7b1e65e","thickness":7.68,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[-0.625,4.125],[-0.625,4.875]],"color":"#FFFFFF","thickness":4.48,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.125,-0.625],[4.875,-0.625]],"color":"#FFFFFF","thickness":4.48,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[9.625,4.125],[9.625,4.875]],"color":"#FFFFFF","thickness":4.48,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.125,9.625],[4.875,9.625]],"color":"#FFFFFF","thickness":4.48,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3.25,2.75],[2.875,3.125]],"color":"#987cc5ff","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.875,5.875],[3.125,6.125]],"color":"#987cc5ff","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.125,5.875],[5.875,6.125]],"color":"#987cc5ff","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.875,1.875],[7.125,2.125]],"color":"#987cc5ff","thickness":5.76,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3,5.75],[3,6.25]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.25,6],[2.75,6]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3,2.75],[3,3.25]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3.25,3],[2.75,3]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.75,6],[6.25,6]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[6,6.25],[6,5.75]],"color":"#000000","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7,1.75],[7,2.25]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[7.25,2],[6.75,2]],"color":"#000000","thickness":0.64,"rounded":true,"layer":"over"}}
```

Normal sudoku rules apply.

FOG: Entering correct digits may clear fog somewhere in the grid. No guessing is necessary.

BLACK DOTS: If two digits are joined by a black dot, then one is double the other.

ARROWS: Digits along an arrow sum to the digit in the attached circle.

MIRRORS: One of the marked diagonals is an 'entropy mirror' and the other is a 'modular mirror'. It is to be determined which is which.

ENTROPY MIRROR: Any pair of cells which are reflected symmetrically across the entropy mirror both contain digits from the same entropic group, ie; they are both low (1, 2 or 3), or both medium (4, 5 or 6), or both high (7, 8 or 9). 

MODULAR MIRROR: Any pair of cells which are reflected symmetrically across the modular mirror both contain digits from the same modulo 3 group; (1, 4, 7), (2, 5, 8) or (3, 6, 9) ie; they both have the same remainder when divided by 3.
