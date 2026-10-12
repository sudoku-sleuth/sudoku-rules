---
format: open-rules
title: Parity 4x4s
setter: Sir Moose
source: https://sudokupad.app/cxjlz1xr4d
case: https://sudoku-sleuth.com/cases/parity-4x4s
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 8
  cols: 8
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
      - r2c1
      - r2c2
    - - r1c3
      - r1c4
      - r2c3
      - r2c4
    - - r1c5
      - r1c6
      - r2c5
      - r2c6
    - - r1c7
      - r1c8
      - r2c7
      - r2c8
    - - r3c1
      - r3c2
      - r4c1
      - r4c2
    - - r3c3
      - r3c4
      - r4c3
      - r4c4
    - - r3c5
      - r3c6
      - r4c5
      - r4c6
    - - r3c7
      - r3c8
      - r4c7
      - r4c8
    - - r5c1
      - r5c2
      - r6c1
      - r6c2
    - - r5c3
      - r5c4
      - r6c3
      - r6c4
    - - r5c5
      - r5c6
      - r6c5
      - r6c6
    - - r5c7
      - r5c8
      - r6c7
      - r6c8
    - - r7c1
      - r7c2
      - r8c1
      - r8c2
    - - r7c3
      - r7c4
      - r8c3
      - r8c4
    - - r7c5
      - r7c6
      - r8c5
      - r8c6
    - - r7c7
      - r7c8
      - r8c7
      - r8c8
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
unique-9: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
unique-10: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
unique-11: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3
unique-12: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4
unique-13: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
unique-14: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6
unique-15: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7
unique-16: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
unique-17: unique r1c1-r1c2-r2c1-r2c2
unique-18: unique r1c3-r1c4-r2c3-r2c4
unique-19: unique r1c5-r1c6-r2c5-r2c6
unique-20: unique r1c7-r1c8-r2c7-r2c8
unique-21: unique r3c1-r3c2-r4c1-r4c2
unique-22: unique r3c3-r3c4-r4c3-r4c4
unique-23: unique r3c5-r3c6-r4c5-r4c6
unique-24: unique r3c7-r3c8-r4c7-r4c8
unique-25: unique r5c1-r5c2-r6c1-r6c2
unique-26: unique r5c3-r5c4-r6c3-r6c4
unique-27: unique r5c5-r5c6-r6c5-r6c6
unique-28: unique r5c7-r5c8-r6c7-r6c8
unique-29: unique r7c1-r7c2-r8c1-r8c2
unique-30: unique r7c3-r7c4-r8c3-r8c4
unique-31: unique r7c5-r7c6-r8c5-r8c6
unique-32: unique r7c7-r7c8-r8c7-r8c8
cage-1: cage r4c3-r4c4 repeats false total 12 connected true
cage-2: cage r1c4-r2c4 repeats false total 10 connected true
cage-3: cage r3c1-r4c1 repeats false total 6 connected true
cage-4: cage r5c1-r6c1 repeats false total 6 connected true
cage-5: cage r5c2-r5c3 repeats false total 12 connected true
cage-6: cage r8c5-r8c6 repeats false total 12 connected true
cage-7: cage r6c5-r7c5 repeats false total 6 connected true
cage-8: cage r6c8-r7c8 repeats false total 6 connected true
cage-9: cage r2c5-r3c5 repeats false total 10 connected true
cage-10: cage r1c8-r2c8 repeats false total 12 connected true
cage-11: cage r2c7-r3c7 repeats false total 14 connected true
negative relations [{"op":"difference","value":1}] except []
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6,4],[8,4],[8,8],[4,8],[4,4],[6,4]],"color":"#190000ff","thickness":7,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8,4],[8,0],[4,0],[4,4],[0,4],[0,8],[4,8]],"color":"#190000ff","thickness":7,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4,0],[0,0],[0,4]],"color":"#190000ff","thickness":7,"rounded":true}}
```

This sudoku grid is made up of four 4x4 sudokus, each made up from exactly four of the digits 1-9.

Digits cannot repeat in any row, column, or 2x2 box. 

Each 4x4 sudoku is made up entirely of odd or even digits.

Digits in a cage sum to the given number.

Orthogonally adjacent digits cannot be consecutive.
