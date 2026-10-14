---
format: open-rules
title: Snail
setter: Jobo
source: https://sudokupad.app/vg0yrh6u17
case: https://sudoku-sleuth.com/cases/snail
library: https://rules.sudoku-sleuth.com/
status: read
exported: d4ad408bb7b142318d89c260f58d6f2e
---

```rules
sudoku 9x9
thermo r5c3-r6c3-r7c3-r8c4-r8c5-r8c6-r8c7-r8c8
kropki-1: kropki r3c1-r3c2 white
kropki-2: kropki r3c4-r3c5 white
palindrome r5c6-r5c7-r6c7-r6c6-r5c5-r4c6-r4c7-r5c8-r6c8-r7c7-r7c6-r7c5-r7c4
renban r3c1-r4c2-r5c3-r4c4-r3c5
pair-1: pair r7c3-r7c4 sum 5
pair-2: pair r7c6-r7c7 sum 5
negative relations [{"op":"sum","value":10}] except [["r7c3","r7c4"],["r7c6","r7c7"],["r3c1","r3c2"],["r3c4","r3c5"]]
```

Normal sudoku rules apply.

Along the thermometer, digits must increase from the bulb end.

Digits along the purple line are a set of consecutive, non-repeating digits in any order.

The yellow line is a palindrome and must read the same in both directions.

Digits separated by a white dot must be consecutive. Not all dots are given.

Digits separated by a V must sum to 5. Digits separated by an X must sum to 10. All X are given. Not all V are given.
