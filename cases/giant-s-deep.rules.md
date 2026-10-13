---
format: open-rules
title: Giant's Deep
setter: gUBBLOR
source: https://sudokupad.app/rl5hw33ukz
case: https://sudoku-sleuth.com/cases/giant-s-deep
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c6-r4c6 colour "black"
kropki-2: kropki r5c7-r6c7 colour "black"
kropki-3: kropki r8c5-r9c5 colour "black"
kropki-4: kropki r6c4-r6c5 colour "black"
kropki-5: kropki r5c3-r5c4 colour "black"
kropki-6: kropki r1c1-r1c2 colour "black"
kropki-7: kropki r9c8-r9c9 colour "black"
whispers-1: whispers r6c4-r5c5-r4c5 gap 4
whispers-2: whispers r6c5-r6c6-r6c7 gap 4
whispers-3: whispers r6c6-r5c7-r6c8 gap 4
whispers-4: whispers r5c2-r6c2-r6c3-r5c3 gap 4 loop true
whispers-5: whispers r5c3-r4c4-r3c5 gap 5
renban r9c4-r8c5-r9c6
region-sum r4c6-r3c7-r3c6-r2c5-r2c6-r2c7-r1c8-r1c7-r1c6-r1c5 segments [["r4c6"],["r3c7"],["r3c6","r2c5","r2c6"],["r2c7","r1c8","r1c7"],["r1c6","r1c5"]]
slow-thermo r6c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r6c9
pair-1: pair r4c7-r4c8 sum 10
pair-2: pair r3c1-r4c1 sum 10
pair-3: pair r7c9-r8c9 sum 10
pair-4: pair r8c2-r9c2 sum 10
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Dutch Whispers (Gabbro/orange lines): Adjacent digits along each Dutch Whisper line must have a difference of at least 4. Digits may repeat on the line.

German Whisper (Flute/green line): Adjacent digits along the German Whisper line must have a difference of at least 5. Digits may repeat on the line.

Slow Thermometer (Hammock): Digits along the thermometer must not decrease starting from the bulb end.

Region Sum Line (Tornado/blue line): Digits along the region sum line have the same sum within each box the line passes through. Digits may repeat on the line.

Renban (Quantum crystal/pink line): Digits along each renban line must be a set of consecutive digits in any order, and must not repeat.
