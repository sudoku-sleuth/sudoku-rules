---
format: open-rules
title: It's Orla 'Bout You
setter: Marty Sears
source: https://sudokupad.app/om5dku4nzu
case: https://sudoku-sleuth.com/cases/it-s-orla-bout-you
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
board:
  rows: 6
  cols: 4
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
      - r3c1
      - r3c2
    - - r1c3
      - r1c4
      - r2c3
      - r2c4
      - r3c3
      - r3c4
    - - r4c1
      - r4c2
      - r5c1
      - r5c2
      - r6c1
      - r6c2
    - - r4c3
      - r4c4
      - r5c3
      - r5c4
      - r6c3
      - r6c4
exported: 5b8bb631679324c325e53bef26e33704
---

```rules
unique-1: unique r1c1-r1c2-r2c1-r2c2-r3c1-r3c2
unique-2: unique r1c3-r1c4-r2c3-r2c4-r3c3-r3c4
unique-3: unique r4c1-r4c2-r5c1-r5c2-r6c1-r6c2
unique-4: unique r4c3-r4c4-r5c3-r5c4-r6c3-r6c4
parity-1: parity r3c3-r2c3-r2c4-r1c4-r1c3-r2c3 loop false
parity-2: parity r2c3-r3c4 loop false
whispers-1: whispers r6c3-r5c3-r5c4-r4c4-r4c3-r5c3 loop false gap 5
whispers-2: whispers r5c4-r6c4 loop false gap 5
entropic r4c1-r5c1-r6c1-r6c2 loop false
modular r1c1-r2c1-r3c1-r3c2-r2c2-r1c2 loop true modulus 3
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.25,3],"width":0,"height":0.66,"rounded":true,"thickness":0,"angle":333,"text":"🎈","textColor":"#000000","fontSize":25,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Deduce which six digits from 1-9 are used in this puzzle, and fill the grid with them so that no digit repeats in any row, column or box. 

The teal O is modular. Any 3 adjacent digits along this line must contain one digit from each of these sets: [147][258][369]

The red R is a parity line. Any 2 adjacent digits on this line have different parity.

The yellow L is entropic. Any 3 adjacent digits along this line must contain one digit from each of these sets: [123][456][789]

The green A is a German Whisper. Any 2 adjacent digits on this line must have a difference of at least 5.

A balloon sits on a domino between two consecutive digits, and the string points towards the smaller digit. All possible balloons are given!
