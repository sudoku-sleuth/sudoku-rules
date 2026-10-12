---
format: open-rules
title: Spider Lilies
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1z4hcr1vqg
case: https://sudoku-sleuth.com/cases/spider-lilies
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5
thermo-2: thermo r9c8-r8c8-r7c8
thermo-3: thermo r9c2-r8c2-r7c2-r6c2-r5c2
kropki-1: kropki r6c5-r7c5 colour "white"
kropki-2: kropki r2c6-r2c7 colour "white"
kropki-3: kropki r3c8-r4c8 colour "white"
kropki-4: kropki r4c9-r5c9 colour "white"
kropki-5: kropki r1c2-r2c2 colour "white"
kropki-6: kropki r7c1-r7c2 colour "white"
kropki-7: kropki r8c5-r9c5 colour "black"
kropki-8: kropki r1c8-r1c9 colour "black"
kropki-9: kropki r1c7-r1c8 colour "black"
kropki-10: kropki r3c2-r3c3 colour "black"
kropki-11: kropki r2c2-r3c2 colour "black"
kropki-12: kropki r1c4-r2c4 colour "black"
kropki-13: kropki r6c4-r7c4 colour "black"
kropki-14: kropki r3c4-r4c4 colour "black"
whispers-1: whispers r3c5-r2c5-r1c5 gap 4
whispers-2: whispers r1c3-r2c4-r3c5 gap 4
whispers-3: whispers r1c7-r2c6-r3c5 gap 4
whispers-4: whispers r3c3-r3c4-r3c5 gap 4
whispers-5: whispers r3c7-r3c6-r3c5 gap 4
whispers-6: whispers r6c7-r7c8 gap 4
whispers-7: whispers r6c8-r7c8 gap 4
whispers-8: whispers r6c9-r7c8 gap 4
whispers-9: whispers r7c7-r7c8 gap 4
whispers-10: whispers r7c9-r7c8 gap 4
whispers-11: whispers r5c2-r5c1 gap 4
whispers-12: whispers r4c1-r5c2 gap 4
whispers-13: whispers r4c2-r5c2 gap 4
whispers-14: whispers r4c3-r5c2 gap 4
whispers-15: whispers r5c3-r5c2 gap 4
```

**Sudoku, Thermometers, Whisper-4, Kropki pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Whisper-4 Lines: Adjacent digits along an orange (thicker) Whisper-4 Line must differ by at least four. 
- Whisper-5 Lines: Adjacent digits along a green (thinner) Whisper-5 Line must differ by at least five. 
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
