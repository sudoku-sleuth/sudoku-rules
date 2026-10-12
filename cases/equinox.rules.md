---
format: open-rules
title: Equinox
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/equinox
case: https://sudoku-sleuth.com/cases/equinox
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c8=3 r2c3=1 r3c2=9 r9c2=7
---

```rules
sudoku 9x9
kropki-1: kropki r8c3-r8c4 colour "black"
kropki-2: kropki r3c8-r4c8 colour "white"
whispers-1: whispers r1c3-r1c4-r1c5 gap 4
whispers-2: whispers r4c6-r3c6-r2c6 gap 4
whispers-3: whispers r6c7-r5c8-r4c8 gap 4
whispers-4: whispers r7c9-r6c9-r5c9 gap 4
whispers-5: whispers r2c8-r3c9 gap 4
renban-1: renban r3c1-r4c1-r5c1
renban-2: renban r6c2-r6c3-r6c4
renban-3: renban r8c4-r8c5-r7c6
renban-4: renban r9c7-r9c6-r9c5
renban-5: renban r8c2-r9c3
region-sum-1: region-sum r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5 segments [["r5c1","r4c1"],["r3c1","r2c2","r1c3"],["r1c4","r1c5"]]
region-sum-2: region-sum r6c2-r6c3-r6c4-r5c5-r4c6-r3c6-r2c6 segments [["r6c2","r6c3"],["r6c4","r5c5","r4c6"],["r3c6","r2c6"]]
region-sum-3: region-sum r8c4-r8c5-r7c6-r6c6-r6c7-r5c8-r4c8 segments [["r8c4","r8c5","r7c6"],["r6c6"],["r6c7","r5c8","r4c8"]]
region-sum-4: region-sum r9c5-r9c6-r9c7-r8c8-r7c9-r6c9-r5c9 segments [["r9c5","r9c6"],["r9c7","r8c8","r7c9"],["r6c9","r5c9"]]
region-sum-5: region-sum r3c4-r4c3 segments [["r3c4"],["r4c3"]]
diagonal direction "main"
```

**Sudoku, Diagonal, Kropki, Region Sum, Renban, Whisper-4**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Diagonal: Digits along the marked diagonal cannot repeat.
- Kropki: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those sections must sum to the same value. All lines that cross the marked diagonal are region sum lines.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in some order. All lines below the marked diagonal are renban lines.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four. All digits below the marked diagonal are Whisper-4 Lines.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
