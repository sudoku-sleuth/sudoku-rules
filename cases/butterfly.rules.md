---
format: open-rules
title: Butterfly
setter: Jobo
source: https://tinyurl.com/mr5w94xp
case: https://sudoku-sleuth.com/cases/butterfly
library: https://rules.sudoku-sleuth.com/
status: read
exported: 57d730df16cbeaac4fedf79dbdb90907
---

```rules
sudoku 9x9
thermo-1: thermo r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
thermo-2: thermo r3c5-r2c4-r1c3
thermo-3: thermo r3c5-r2c6-r1c7
kropki-1: kropki r1c3-r1c4 white
kropki-2: kropki r1c6-r1c7 white
kropki-3: kropki r5c3-r6c3 white
kropki-4: kropki r5c7-r6c7 white
kropki-5: kropki r8c3-r9c3 white
kropki-6: kropki r8c7-r9c7 white
kropki-7: kropki r8c9-r9c9 white
whispers-1: whispers r4c5-r3c4-r2c3-r1c2-r1c1-r2c1-r3c1-r4c2-r5c3-r6c2-r7c2-r8c3-r8c4-r7c5-r8c6-r8c7-r7c8-r6c8-r5c7-r4c8-r3c9-r2c9-r1c9-r1c8-r2c7-r3c6 gap 5 loop true
whispers-2: whispers r3c6-r2c6 gap 5
whispers-3: whispers r3c4-r2c4 gap 5
whispers-4: whispers r5c3-r5c4-r5c5-r5c6-r5c7 gap 5
whispers-5: whispers r4c4-r3c5 gap 5
whispers-6: whispers r4c6-r3c5 gap 5
palindrome-1: palindrome r2c2-r3c3-r4c4
palindrome-2: palindrome r2c8-r3c7-r4c6
renban-1: renban r6c3-r7c4
renban-2: renban r6c7-r7c6
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Digits separated by a white dot must be consecutive. Not all dots are given.

Purple lines are Renban lines. Digits along a purple line are a set of consecutive, non-repeating digits in any order.

Green lines are German Whisper lines. Adjacent digits along a green line must differ by at least 5.

Yellow lines are palindromes and and must read the same in both directions.
