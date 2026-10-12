---
format: open-rules
title: Operation Station
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/operation-station
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c3-r6c4 colour "white"
kropki-2: kropki r6c4-r7c4 colour "white"
kropki-3: kropki r6c6-r7c6 colour "white"
kropki-4: kropki r6c6-r6c7 colour "white"
kropki-5: kropki r5c3-r5c4 colour "black"
kropki-6: kropki r5c6-r5c7 colour "black"
kropki-7: kropki r4c6-r4c7 colour "black"
kropki-8: kropki r3c6-r4c6 colour "black"
kropki-9: kropki r3c4-r4c4 colour "black"
kropki-10: kropki r4c3-r4c4 colour "black"
whispers-1: whispers r1c1-r2c2-r3c3 gap 5
whispers-2: whispers r3c7-r2c8-r1c9 gap 5
whispers-3: whispers r7c7-r8c8-r9c9 gap 5
whispers-4: whispers r7c3-r8c2-r9c1 gap 5
whispers-5: whispers r5c1-r5c2-r5c3 gap 5
whispers-6: whispers r5c7-r5c8-r5c9 gap 5
palindrome-1: palindrome r6c3-r7c4
palindrome-2: palindrome r4c3-r3c4
palindrome-3: palindrome r3c6-r4c7
palindrome-4: palindrome r6c7-r7c6
renban-1: renban r1c5-r2c5-r3c5-r2c6-r2c4
renban-2: renban r7c5-r8c5-r9c5-r8c4-r8c6
nabner-1: nabner r1c3-r2c2-r3c1
nabner-2: nabner r1c7-r2c8-r3c9
nabner-3: nabner r7c9-r8c8-r9c7
nabner-4: nabner r7c1-r8c2-r9c3
nabner-5: nabner r5c4-r5c5-r5c6
parity-cells-1: parity-cells r4c5-r6c5-r2c3-r2c7-r2c8 parity "odd"
parity-cells-2: parity-cells r2c2-r8c2-r8c8 parity "even"
```

Normal Sudoku Rules Apply:
Nabner (gold): No digits along a nabner line can be consecutive. E.g 135 is accepted but 172 is not as 1 and 2 are consecutive.
German Whisper (green): Adjacent digits along a german whispers line must differ by at least 5.
Renban (purple): Form a set of consecutive digits in any order. In this puzzle each renban line is 3 cells long and are straight lines. (No turns or branches)
Palindromes (grey): Palidrome lines must read the same forwards as backwards.
Ratio (black dot): Digits separated by a black dot must be in a 1:2 ratio.
Difference (white dot): Digits separated by a white dot must be consecutive.
Odd (grey circle): Digits on a grey circle must be odd.
Even (grey square): Digits on a grey square must be even.
