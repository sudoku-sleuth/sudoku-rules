---
fog:
  initiallyLit:
    - 24
    - 32
    - 40
    - 48
    - 56
  links:
    - trigger:
        - 48
      lights:
        - 29
        - 38
    - trigger:
        - 32
      lights:
        - 50
        - 58
    - trigger:
        - 58
      lights:
        - 77
        - 59
        - 73
    - trigger:
        - 29
      lights:
        - 8
        - 72
    - trigger:
        - 72
      lights:
        - 74
        - 75
    - trigger:
        - 8
      lights:
        - 35
    - trigger:
        - 36
      lights:
        - 21
    - trigger:
        - 76
      lights:
        - 7
    - trigger:
        - 60
      lights:
        - 53
    - trigger:
        - 57
      lights:
        - 4
    - trigger:
        - 50
      lights:
        - 45
    - trigger:
        - 34
      lights:
        - 71
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
        - 21
      lights:
        - 21
    - trigger:
        - 22
      lights:
        - 22
    - trigger:
        - 23
      lights:
        - 23
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
        - 45
      lights:
        - 45
    - trigger:
        - 46
      lights:
        - 46
    - trigger:
        - 47
      lights:
        - 47
    - trigger:
        - 49
      lights:
        - 49
    - trigger:
        - 50
      lights:
        - 50
    - trigger:
        - 51
      lights:
        - 51
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
        - 68
      lights:
        - 68
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
title: Diagonal Discovery
setter: Blobz
source: https://sudokupad.app/blobz/diagonal-discovery
case: https://sudoku-sleuth.com/cases/diagonal-discovery
library: https://rules.sudoku-sleuth.com/
status: read
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
cage-1: cage r3c6-r3c7-r4c5-r4c6-r5c5-r6c4-r6c5-r7c3-r7c4 connected true
cage-2: cage r8c2-r9c2-r9c3-r9c4 connected true
cage-3: cage r9c8-r9c9 connected true
cage-4: cage r1c7-r1c8 connected true
cage-5: cage r4c3-r5c3-r5c4 connected true
cage-6: cage r3c3-r3c4-r3c5 connected true
cage-7: cage r6c6-r7c5-r7c6-r7c7 connected true
cage-8: cage r1c5-r1c6 connected true
layered-cage-1: layered-cage r3c6-r3c7-r4c5-r4c6-r5c5-r6c4-r6c5-r7c3-r7c4 upper [2,4,6,8]
layered-cage-2: layered-cage r8c2-r9c2-r9c3-r9c4 upper [2,4,6,8]
layered-cage-3: layered-cage r9c8-r9c9 upper [2,4,6,8]
layered-cage-4: layered-cage r1c7-r1c8 upper [2,4,6,8]
layered-cage-5: layered-cage r4c3-r5c3-r5c4 upper [2,4,6,8]
layered-cage-6: layered-cage r3c3-r3c4-r3c5 upper [2,4,6,8]
layered-cage-7: layered-cage r6c6-r7c5-r7c6-r7c7 upper [2,4,6,8]
layered-cage-8: layered-cage r1c5-r1c6 upper [2,4,6,8]
kropki-1: kropki r1c9-r2c9 colour "black"
kropki-2: kropki r9c1-r9c2 colour "black"
kropki-3: kropki r8c4-r9c4 colour "black"
kropki-4: kropki r6c8-r6c9 colour "black"
kropki-5: kropki r3c6-r4c6 colour "black"
kropki-6: kropki r5c5-r5c6 colour "black"
kropki-7: kropki r5c4-r6c4 colour "black"
kropki-8: kropki r5c2-r5c3 colour "white"
kropki-9: kropki r2c4-r3c4 colour "white"
kropki-10: kropki r4c8-r4c9 colour "white"
kropki-11: kropki r8c9-r9c9 colour "white"
kropki-12: kropki r6c1-r7c1 colour "white"
kropki-13: kropki r8c6-r9c6 colour "white"
kropki-14: kropki r1c2-r2c2 colour "white"
diagonal direction "anti"
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Digits do not repeat along the marked diagonal.

White dots separate consecutive digits. Black dots separate digits where one is double the other.

The grid is covered in fog; placing a correct digit MAY (or may not) clear fog somewhere in the grid, revealing more clues.
