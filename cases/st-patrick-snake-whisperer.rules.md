---
format: open-rules
title: St Patrick, Snake Whisperer
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/43yck0doy5
case: https://sudoku-sleuth.com/cases/st-patrick-snake-whisperer
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=3 r9c8=1 r9c9=7
exported: de3ebd43d12c4b674980301d5e81af32
---

```rules
sudoku 9x9
whispers-1: whispers r9c7-r8c8-r7c7-r6c8-r5c7-r4c8-r3c7-r2c8 gap 5
whispers-2: whispers r8c5-r7c6-r6c5-r5c6-r4c5-r3c6-r2c5-r1c6 gap 5
whispers-3: whispers r9c5-r9c4-r8c4-r8c3-r7c3-r7c2-r6c2-r6c1 gap 5
whispers-4: whispers r6c4-r6c3-r5c3-r5c2-r4c2-r4c1-r3c1 gap 5
whispers-5: whispers r2c2-r3c3-r3c4 gap 5
```

Normal Sudoku rules apply.

Along green German whisper lines, adjacent digits must differ by at least 5.
