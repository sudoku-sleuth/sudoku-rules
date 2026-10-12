---
fog:
  initiallyLit:
    - 30
    - 31
    - 32
    - 39
    - 40
    - 41
    - 48
    - 49
    - 50
format: open-rules
title: Lighthouse 639
setter: BremSter, FullDeck and Missing a Few Cards, Virtual
source: https://sudokupad.app/2wdns1xorg
case: https://sudoku-sleuth.com/cases/lighthouse-639
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r4c6-r4c5-r4c4 bulb ["r5c5"]
arrow-2: arrow r3c6-r3c7-r3c8 bulb ["r3c5"]
arrow-3: arrow r3c3-r2c3 bulb ["r4c3"]
arrow-4: arrow r5c3-r6c2 bulb ["r4c3"]
arrow-5: arrow r7c2-r7c3 bulb ["r7c1"]
arrow-6: arrow r1c5-r1c6-r2c5 bulb ["r1c4"]
arrow-7: arrow r2c1-r3c1 bulb ["r1c1"]
arrow-8: arrow r5c7-r4c8 bulb ["r6c8"]
whispers-1: whispers r4c5-r4c4-r3c4-r2c4 gap 5
whispers-2: whispers r4c3-r4c2 gap 5
whispers-3: whispers r4c2-r5c3 gap 5
whispers-4: whispers r6c2-r7c2-r8c2 gap 5
whispers-5: whispers r7c4-r8c4-r9c4 gap 5
whispers-6: whispers r3c8-r2c7-r1c7-r1c8 gap 5
whispers-7: whispers r3c3-r2c3 gap 5
whispers-8: whispers r1c1-r1c2 gap 5
whispers-9: whispers r7c7-r6c8 gap 5
whispers-10: whispers r9c7-r8c8 gap 5
```

- Normal Sudoku rules apply.
- The grid is covered with fog. There is an initial light source that clears the fog. Placing correct digits into cells clears the fog from all adjacent cells.
- Digits placed on an arrow must sum to the digit placed in that arrow's circle.
- On green German Whisper Lines adjacent digits must have a difference of at least 5.
- Arrows and German Whisper clues may overlap; however, arrow clues will never overlap with other arrow clues, and German whisper clues will never overlap with other German whisper clues.
