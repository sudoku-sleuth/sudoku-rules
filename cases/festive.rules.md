---
format: open-rules
title: Festive
setter: Blobz
source: https://sudokupad.app/7w35fx6tz7
case: https://sudoku-sleuth.com/cases/festive
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c2-r6c3 colour "white"
kropki-2: kropki r5c5-r5c6 colour "white"
kropki-3: kropki r2c5-r2c6 colour "white"
kropki-4: kropki r7c4-r7c5 colour "white"
kropki-5: kropki r3c4-r3c5 colour "black"
kropki-6: kropki r6c6-r6c7 colour "black"
kropki-7: kropki r4c7-r5c7 colour "black"
whispers-1: whispers r1c5-r2c4-r3c3-r3c4-r4c3-r5c2-r5c3-r6c2-r7c1-r7c2 gap 5
whispers-2: whispers r1c5-r2c6-r3c7-r3c6-r4c7-r5c8-r5c7-r6c8-r7c9-r7c8 gap 5
whispers-3: whispers r7c3-r7c2 gap 5
whispers-4: whispers r7c7-r7c8 gap 5
whispers-5: whispers r7c5-r8c5-r9c4 gap 5
whispers-6: whispers r8c5-r9c6 gap 5
parity-cells r9c7 parity "even"
```

Normal sudoku rules apply. 

Adjacent digits along a green line differ by at least 5.

Digits separated by a white dot are consecutive. Digits separated by a black dot have a 2:1 ratio. Not all such dots are shown.

Grey squares contain an even digit.
