---
format: open-rules
title: Run it Up the Flagpole
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/run-it-up-the-flagpole
library: https://rules.sudoku-sleuth.com/
status: read
exported: d3a78f36d2578c3783d2a0aa3b8a9570
---

```rules
sudoku 9x9
whispers-1: whispers r6c1-r6c2-r5c3-r5c4-r4c5-r4c6-r3c7-r3c8-r2c9 gap 5
whispers-2: whispers r4c1-r4c2-r3c3-r3c4-r2c5-r2c6-r1c7 gap 5
whispers-3: whispers r8c1-r8c2-r7c3-r7c4-r6c5-r6c6-r5c7-r5c8-r4c9 gap 5
modular-1: modular r7c1-r7c2-r6c3-r6c4-r5c5-r5c6-r4c7-r4c8-r3c9
modular-2: modular r5c1-r5c2-r4c3-r4c4-r3c5-r3c6-r2c7-r2c8-r1c9
modular-3: modular r9c1-r9c2-r8c3-r8c4-r7c5-r7c6-r6c7-r6c8-r5c9
modular-4: modular r9c1-r8c1-r7c1-r6c1-r5c1-r4c1
pair-1: pair r2c5-r2c6 sum 10
pair-2: pair r8c3-r8c4 sum 5
pair-3: pair r4c4-r4c5 sum 5
pair-4: pair r4c8-r5c8 sum 5
pair-5: pair r6c8-r6c9 sum 5
pair-6: pair r8c6-r9c6 sum 5
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

XV: Digits separate by a V sum to 5. Digits separated by an X sum to 10. Not all possible  or Vs are given (no negative constraint).

German whispers: The green flag stripes starting in rows 4, 6, and 8 of the flagpole in column 1 are German whispers lines. Adjacent digits along these lines must differ by at least 5.

Modular lines: The teal flag stripes starting in rows 5, 7, and 9 of the flagpole in column 1 are modular lines. Each set of three adjacent digits along these lines must contain one digit from each of the residues classes mod 3; that is, one digit from {147}, one digit from {258}, and one digit from {369}.

The flagpole is a separate modular line.
