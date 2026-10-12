---
format: open-rules
title: Whisper Sudoku Snack
setter: sujoyku
source: https://tinyurl.com/4eep5m3p
case: https://sudoku-sleuth.com/cases/whisper-sudoku-snack
library: https://rules.sudoku-sleuth.com/
status: read
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c5
      - r2c6
      - r3c6
    - - r3c1
      - r3c2
      - r4c2
      - r4c3
      - r5c3
      - r5c4
    - - r2c4
      - r3c3
      - r3c4
      - r3c5
      - r4c4
      - r4c5
    - - r4c1
      - r5c1
      - r5c2
      - r6c1
      - r6c2
      - r6c3
    - - r4c6
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c5-r2c6-r3c6
unique-15: unique r3c1-r3c2-r4c2-r4c3-r5c3-r5c4
unique-16: unique r2c4-r3c3-r3c4-r3c5-r4c4-r4c5
unique-17: unique r4c1-r5c1-r5c2-r6c1-r6c2-r6c3
unique-18: unique r4c6-r5c5-r5c6-r6c4-r6c5-r6c6
diagonal direction "main"
kropki r4c6-r5c6 colour "black"
arrow-1: arrow r1c3 bulb ["r2c4"]
arrow-2: arrow r6c5 bulb ["r5c4"]
whispers r3c2-r4c2-r3c1-r4c1-r5c2-r5c3-r6c4-r5c5-r4c5-r3c4-r3c5-r3c6 loop false gap 3
```

Normal (irregular) 6x6 Sudoku rules apply, i.e. each row, column and region has to contain the digits from 1 to 6. Adjacent digits on the green line have a difference of at least 3. Digits on the marked diagonal do not repeat. Digits on an arrow sum to the digit in the circle from which the arrow emerges. Digits joined by a black dot have a 1:2 ratio. (Not all dots are given.)
