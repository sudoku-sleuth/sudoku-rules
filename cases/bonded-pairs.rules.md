---
format: open-rules
title: Bonded Pairs
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/g7jm95pee3
case: https://sudoku-sleuth.com/cases/bonded-pairs
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c4=7 r6c6=9
exported: 7c6e403722d4ce4fa075a3f7ab574a6a
---

```rules
sudoku 9x9
kropki-1: kropki r5c1-r6c1 white
kropki-2: kropki r1c5-r1c6 white
kropki-3: kropki r9c5-r9c6 white
kropki-4: kropki r8c5-r9c5 white
kropki-5: kropki r5c8-r5c9 white
kropki-6: kropki r5c9-r6c9 white
kropki-7: kropki r5c1-r5c2 white
kropki-8: kropki r1c5-r2c5 white
kropki-9: kropki r7c6-r7c7 white
kropki-10: kropki r9c3-r9c4 white
kropki-11: kropki r4c1-r5c1 black
kropki-12: kropki r1c4-r1c5 black
kropki-13: kropki r4c9-r5c9 black
kropki-14: kropki r9c4-r9c5 black
kropki-15: kropki r3c5-r3c6 black
kropki-16: kropki r7c5-r7c6 black
kropki-17: kropki r1c9-r2c9 black
kropki-18: kropki r6c5-r7c5 black
kropki-19: kropki r8c7-r9c7 black
kropki-20: kropki r7c8-r8c8 black
kropki-21: kropki r8c9-r9c9 black
kropki-22: kropki r4c7-r5c7 black
double-arrow-1: double-arrow r4c1-r3c2-r2c3-r1c4 ends ["r5c1","r1c5"]
double-arrow-2: double-arrow r4c9-r3c8-r2c7-r1c6 ends ["r5c9","r1c5"]
double-arrow-3: double-arrow r9c4-r8c3-r7c2-r6c1 ends ["r9c5","r5c1"]
double-arrow-4: double-arrow r4c3-r3c4 ends ["r5c3","r3c5"]
double-arrow-5: double-arrow r7c4-r6c3 ends ["r7c5","r5c3"]
double-arrow-6: double-arrow r4c7-r3c6 ends ["r5c7","r3c5"]
double-arrow-7: double-arrow r8c8 ends ["r9c9","r7c7"]
```

**Sudoku, Double Arrows, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Double Arrows: Digits along a line sum to same total as the digits in the circles connected to the line.
- Kropki pairs: Digits in cells separated by a white dot are consecutive. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
