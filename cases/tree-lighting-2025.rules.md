---
format: open-rules
title: Tree Lighting 2025
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0668tfh3fm
case: https://sudoku-sleuth.com/cases/tree-lighting-2025
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c2-r6c2 colour "white"
kropki-2: kropki r6c8-r7c8 colour "white"
kropki-3: kropki r3c4-r4c4 colour "white"
kropki-4: kropki r7c6-r8c6 colour "white"
kropki-5: kropki r5c7-r5c8 colour "white"
kropki-6: kropki r3c6-r3c7 colour "white"
kropki-7: kropki r3c3-r3c4 colour "white"
kropki-8: kropki r3c2-r3c3 colour "white"
kropki-9: kropki r5c2-r5c3 colour "white"
kropki-10: kropki r5c6-r6c6 colour "white"
kropki-11: kropki r7c4-r8c4 colour "white"
kropki-12: kropki r7c5-r8c5 colour "white"
kropki-13: kropki r1c5-r2c5 colour "black"
whispers-1: whispers r8c2-r7c2-r6c3-r5c3-r4c3-r3c4-r2c4-r1c5-r2c6-r3c6-r4c7-r5c7-r6c7-r7c8-r8c8 gap 5
whispers-2: whispers r3c5-r4c4 gap 5
whispers-3: whispers r4c6-r3c5 gap 5
whispers-4: whispers r5c4-r4c5-r5c6 gap 5
whispers-5: whispers r6c4-r7c3 gap 5
whispers-6: whispers r6c6-r7c7 gap 5
whispers-7: whispers r7c4-r8c3 gap 5
whispers-8: whispers r7c6-r8c7 gap 5
whispers-9: whispers r5c2-r4c3 gap 5
whispers-10: whispers r5c8-r4c7 gap 5
whispers-11: whispers r3c3-r2c4 gap 5
whispers-12: whispers r3c7-r2c6 gap 5
entropic r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
```

**Sudoku, Whisper-5, Kropki, Entropic Line**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five. In this puzzle, all lines except the tree trunk are Whisper-5 Lines.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
- Entropic Line: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789). In this puzzle, the trunk of the tree (vertical line in column 5) is the only entropic line.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
