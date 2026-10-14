---
format: open-rules
title: Vextropy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zfthh1ji6e
case: https://sudoku-sleuth.com/cases/vextropy
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=7
exported: f2fb6fe14ae2ce6f4c986c693198e51b
---

```rules
sudoku 9x9
entropic-1: entropic r4c1-r3c2-r2c3-r1c4-r2c5-r1c6-r2c7-r3c8-r4c9-r5c8-r6c9-r7c8-r8c7-r9c6-r8c5-r9c4-r8c3-r7c2-r6c1-r5c2
entropic-2: entropic r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r6c1-r7c2
pair-1: pair r5c5-r5c6 sum 10
pair-2: pair r2c7-r2c8 sum 10
pair-3: pair r5c9-r6c9 sum 10
pair-4: pair r8c2-r8c3 sum 10
pair-5: pair r7c9-r8c9 sum 10
pair-6: pair r1c3-r2c3 sum 10
pair-7: pair r1c6-r2c6 sum 10
pair-8: pair r2c4-r2c5 sum 10
pair-9: pair r1c9-r2c9 sum 10
pair-10: pair r7c5-r7c6 sum 10
pair-11: pair r1c6-r1c7 sum 10
pair-12: pair r5c6-r5c7 sum 5
pair-13: pair r5c3-r6c3 sum 5
pair-14: pair r4c9-r5c9 sum 5
pair-15: pair r7c8-r7c9 sum 5
pair-16: pair r4c1-r4c2 sum 5
pair-17: pair r9c1-r9c2 sum 5
pair-18: pair r2c1-r3c1 sum 5
```

**Sudoku, Entropic lines, XV pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.

- Entropic lines: Any set of three sequential cells along a peach entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).

- XV pairs: Digits in cells separated by an X sum to 10. Digits in cells separated by a V sum to 5.  

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
