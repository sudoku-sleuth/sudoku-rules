---
fog:
  initiallyLit:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 9
    - 10
    - 11
    - 12
    - 13
    - 14
    - 18
    - 19
    - 20
    - 21
    - 22
    - 23
    - 24
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
    - 54
    - 55
    - 56
    - 57
    - 58
    - 59
    - 60
    - 61
    - 62
    - 63
    - 64
    - 65
    - 66
    - 67
    - 68
    - 69
    - 70
    - 71
    - 72
    - 73
    - 74
    - 75
    - 76
    - 77
    - 78
    - 79
    - 80
format: open-rules
title: Entropic Whispers
setter: Sir Moose
source: https://sudokupad.app/r4lnzsxtei
case: https://sudoku-sleuth.com/cases/entropic-whispers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki r2c8-r3c8 colour "black"
whispers-1: whispers r2c2-r3c2-r4c2 gap 5
whispers-2: whispers r2c3-r2c4-r3c3 gap 5
whispers-3: whispers r5c2-r6c1 gap 5
whispers-4: whispers r6c3-r7c2 gap 5
whispers-5: whispers r8c2-r9c1 gap 5
whispers-6: whispers r7c5-r8c5-r9c4 gap 5
whispers-7: whispers r9c6-r9c7-r8c7-r7c7 gap 5
whispers-8: whispers r6c6-r7c6 gap 5
whispers-9: whispers r3c5-r4c6 gap 5
renban-1: renban r1c3-r1c4
renban-2: renban r8c9-r9c8
entropic-1: entropic r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 stated true
entropic-2: entropic r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 stated true
entropic-3: entropic r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 stated true
entropic-4: entropic r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 stated true
entropic-5: entropic r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 stated true
entropic-6: entropic r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 stated true
entropic-7: entropic r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 stated true
entropic-8: entropic r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 stated true
entropic-9: entropic r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 stated true
```

Normal Sudoku rules apply.

Entropy Columns: Every 3 consecutive cells along each column must contain a low digit (1,2,3), middle digit (4,5,6) and high digit (7,8,9).

German Whisper - Digits along a german whisper must differ by at least 5.

Renban - Digits along a renban line form a consecutive set of digits with no repeats.

Cells separated by a black dot are in a 1:2 ratio.

Some of the sudoku grid covered by fog.  Placing correct digits will clear the fog around the correct digit.  Not guessing is required.
