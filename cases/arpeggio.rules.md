---
format: open-rules
title: Arpeggio
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/j96by6nx8s
case: https://sudoku-sleuth.com/cases/arpeggio
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c1-r3c1-r4c1
thermo-2: thermo r2c2-r3c2-r4c2-r5c2
thermo-3: thermo r3c3-r4c3-r5c3-r6c3
thermo-4: thermo r4c4-r5c4-r6c4-r7c4
thermo-5: thermo r5c5-r6c5-r7c5-r8c5
thermo-6: thermo r6c6-r7c6-r8c6-r9c6
thermo-7: thermo r1c9-r1c8-r1c7-r1c6
thermo-8: thermo r2c9-r2c8-r2c7
thermo-9: thermo r3c9-r3c8
thermo-10: thermo r7c7-r8c7-r9c7
thermo-11: thermo r6c8-r7c8-r8c8-r9c8
whispers-1: whispers r1c1-r2c2-r3c3-r4c4-r5c5-r6c6 gap 4
whispers-2: whispers r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 gap 4
```

**Sudoku, Thermometers, Whisper-4**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Thermometers: Digits on grey thermometers are strictly increasing from bulb to tip.
- Whisper-4: Adjacent digits along an orange Whisper-4 line must differ by at least four.


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
