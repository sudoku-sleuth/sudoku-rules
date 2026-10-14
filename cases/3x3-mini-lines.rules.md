---
format: open-rules
title: 3x3 Mini Lines
setter: Sir Moose
source: https://sudokupad.app/e93zc2ekay
case: https://sudoku-sleuth.com/cases/3x3-mini-lines
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
exported: 6c4fd7f36b07edf449e50821172eb33e
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
thermo r8c5-r9c4-r8c3-r9c2
modular-1: modular r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9
modular-2: modular r6c4-r7c3
whispers-1: whispers r6c7-r5c8-r4c9 gap 5
whispers-2: whispers r6c4-r6c3-r7c3 gap 5
entropic-1: entropic r2c6-r1c7-r2c8
entropic-2: entropic r1c3-r2c4
entropic-3: entropic r4c3-r5c4
renban-1: renban r3c4-r2c5-r1c6
renban-2: renban r5c6-r5c7
renban-3: renban r3c1-r4c1
region-sum r3c5-r3c6-r3c7-r4c7-r4c8 segments [["r3c5","r3c6"],["r3c7"],["r4c7","r4c8"]]
```

Normal Sudoku rules do not apply.

Place the digits from 1-9 in the grid so that they do not repeat in any row or column. Digits can (and will) repeat in each 3x3 box. Each box will use exactly 3 of the digits from 1-9.

Digits cannot repeat on any lines

German Whisper Lines: Consecutive digits along the green German whispers line must differ by at least 5.

Renban: Digits along the purple renban lines must be a set of consecutive, non-repeating digits (in any order). 

Modular Lines: Every 3 consecutive cells along a teal modular line must contain a complete set of residuals modulo 3. i.e: one from (3,6,9), one from (1,4,7) and one from (2,5,8).

Region Sum Lines: Box borders divide each blue line into segments with the same sum. Different lines may have different sums.

Entropic Lines:  Every 3 consecutive cells along each tan line must contain a low digit (1,2,3), middle digit (4,5,6) and high digit (7,8,9).

Thermometer: Digits must increase along a thermometer starting at the bulb end.
