---
format: open-rules
title: Marching Orders
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bb8oh2fr75
case: https://sudoku-sleuth.com/cases/marching-orders
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c7=5 r4c5=8 r6c5=4 r7c3=6
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r1c5 colour "white"
kropki-2: kropki r9c7-r9c8 colour "white"
kropki-3: kropki r4c1-r5c1 colour "white"
kropki-4: kropki r7c9-r8c9 colour "white"
kropki-5: kropki r9c2-r9c3 colour "white"
kropki-6: kropki r2c3-r3c3 colour "white"
kropki-7: kropki r1c2-r1c3 colour "black"
kropki-8: kropki r9c5-r9c6 colour "black"
kropki-9: kropki r2c1-r3c1 colour "black"
kropki-10: kropki r5c9-r6c9 colour "black"
kropki-11: kropki r1c7-r1c8 colour "black"
kropki-12: kropki r4c3-r5c3 colour "black"
kropki-13: kropki r5c7-r6c7 colour "black"
pair-1: pair r6c9-r7c9 relation {"op":"sum","value":10}
pair-2: pair r3c1-r4c1 relation {"op":"sum","value":10}
pair-3: pair r1c9-r2c9 relation {"op":"sum","value":10}
pair-4: pair r3c3-r3c4 relation {"op":"sum","value":10}
pair-5: pair r7c6-r7c7 relation {"op":"sum","value":10}
pair-6: pair r1c3-r1c4 relation {"op":"sum","value":5}
pair-7: pair r9c6-r9c7 relation {"op":"sum","value":5}
pair-8: pair r8c1-r9c1 relation {"op":"sum","value":5}
pair-9: pair r6c7-r7c7 relation {"op":"sum","value":5}
pair-10: pair r3c3-r4c3 relation {"op":"sum","value":5}
```

**Sudoku, XV, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. 
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
