---
format: open-rules
title: L7 Weenie
setter: Kennet's Dad
source: https://sudokupad.app/od25zrdvv2
case: https://sudoku-sleuth.com/cases/l7-weenie
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
  - Some source features still need to be checked against our reading.
exported: 97b5f678558c7c6ff3434de4b2144d26
---

```rules
sudoku 9x9
kropki-1: kropki r6c2-r6c3 black
kropki-2: kropki r3c5-r3c6 black
kropki-3: kropki r2c5-r2c6 white
kropki-4: kropki r5c9-r6c9 white
kropki-5: kropki r5c6-r6c6 white
kropki-6: kropki r5c5-r6c5 white
entropic-1: entropic r2c3-r2c2-r3c2-r3c3
entropic-2: entropic r5c2-r6c2-r6c3-r5c3
entropic-3: entropic r2c9-r2c8-r3c8-r3c9
entropic-4: entropic r5c6-r5c5-r6c5-r6c6
entropic-5: entropic r8c5-r9c5-r9c6-r8c6
entropic-6: entropic r8c8-r8c9-r9c9-r9c8
modular-1: modular r8c2-r8c3-r9c3-r9c2
modular-2: modular r3c5-r2c5-r2c6-r3c6
modular-3: modular r5c8-r6c8-r6c9-r5c9
pair-1: pair r2c2-r3c2 sum 10
pair-2: pair r2c3-r3c3 sum 10
pair-3: pair r8c2-r9c2 sum 10
pair-4: pair r8c3-r9c3 sum 10
pair-5: pair r3c8-r3c9 sum 10
pair-6: pair r5c8-r6c8 sum 10
pair-7: pair r8c9-r9c9 sum 10
pair-8: pair r5c2-r5c3 sum 5
pair-9: pair r2c8-r2c9 sum 5
pair-10: pair r8c5-r8c6 sum 5
```

Modular Lines, Entropic Lines, X/V Pairs, Kropki Pairs

Normal sudoku rules apply. Every string of three adjacent digits on a teal line must contain one digit from each modulo 3 set: 147, 258, 369. Every string of three adjacent digits on a tan line must contain one digit from each entropic set: 123, 456, 789. Digits joined by an X sum to 10. Digits joined by a V sum to 5. Digits joined by a white dot are consecutive. Digits joined by a black dot are in a 2:1 ratio. Not all Xs, Vs, or dots are necessarily given.
