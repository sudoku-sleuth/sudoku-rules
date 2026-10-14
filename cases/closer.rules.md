---
format: open-rules
title: Closer!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ir3txgirdg
case: https://sudoku-sleuth.com/cases/closer
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=2 r1c7=3 r3c1=6 r3c9=5 r7c1=7 r7c9=8 r9c3=1 r9c7=4
exported: 071baee80d30cf5f0b84a667d212e9e4
---

```rules
sudoku 9x9
kropki-1: kropki r7c5-r8c5 white
kropki-2: kropki r4c4-r5c4 white
thermo-1: thermo r4c5-r3c5-r2c5
close-whispers-1: close-whispers r4c5-r3c5-r2c5 gap 2
thermo-2: thermo r5c4-r5c3-r5c2-r5c1
close-whispers-2: close-whispers r5c4-r5c3-r5c2-r5c1 gap 2
thermo-3: thermo r5c6-r5c7-r5c8-r5c9
close-whispers-3: close-whispers r5c6-r5c7-r5c8-r5c9 gap 2
thermo-4: thermo r4c6-r3c7
close-whispers-4: close-whispers r4c6-r3c7 gap 2
thermo-5: thermo r4c4-r3c3
close-whispers-5: close-whispers r4c4-r3c3 gap 2
thermo-6: thermo r6c4-r7c3
close-whispers-6: close-whispers r6c4-r7c3 gap 2
thermo-7: thermo r6c6-r7c7
close-whispers-7: close-whispers r6c6-r7c7 gap 2
thermo-8: thermo r6c5-r7c5-r8c5-r9c5
close-whispers-8: close-whispers r6c5-r7c5-r8c5-r9c5 gap 2
thermo-9: thermo r2c1-r1c2
close-whispers-9: close-whispers r2c1-r1c2 gap 2
thermo-10: thermo r2c9-r1c8
close-whispers-10: close-whispers r2c9-r1c8 gap 2
thermo-11: thermo r1c3-r2c3
close-whispers-11: close-whispers r1c3-r2c3 gap 2
thermo-12: thermo r4c3-r4c2
close-whispers-12: close-whispers r4c3-r4c2 gap 2
thermo-13: thermo r4c8-r4c9
close-whispers-13: close-whispers r4c8-r4c9 gap 2
thermo-14: thermo r6c8-r6c7
close-whispers-14: close-whispers r6c8-r6c7 gap 2
thermo-15: thermo r8c9-r9c8
close-whispers-15: close-whispers r8c9-r9c8 gap 2
thermo-16: thermo r8c1-r9c2
close-whispers-16: close-whispers r8c1-r9c2 gap 2
thermo-17: thermo r8c6-r9c6
close-whispers-17: close-whispers r8c6-r9c6 gap 2
```

- Normal sudoku rules apply.
- Thermos: Along thermos, digits must strictly increase from bulb to tip.
- Chinese Whispers: Adjacent digits along a Chinese Whispers line differ by at most 2.
- Difference dots: Digits separated by a white dot are consecutive.
All thermos in this puzzle are ALSO Chinese Whispers lines.
