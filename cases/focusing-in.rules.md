---
format: open-rules
title: Focusing in
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/k0v25sgs4r
case: https://sudoku-sleuth.com/cases/focusing-in
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=6 r2c8=9 r3c4=3 r4c1=8 r6c9=4 r7c6=2 r8c2=1 r9c4=7
exported: 391954cdd76ec9acdd2db1adb635394b
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c1-r1c1-r1c2-r1c3
thermo-2: thermo r1c7-r1c8-r1c9-r2c9-r3c9
thermo-3: thermo r7c9-r8c9-r9c9-r9c8-r9c7
thermo-4: thermo r9c3-r9c2-r9c1-r8c1-r7c1
thermo-5: thermo r9c5-r8c5-r7c5
thermo-6: thermo r5c1-r5c2-r5c3
thermo-7: thermo r1c5-r2c5-r3c5
thermo-8: thermo r5c9-r5c8-r5c7
whispers-1: whispers r7c2-r8c2-r8c3 gap 5
whispers-2: whispers r2c7-r2c8-r3c8 gap 5
whispers-3: whispers r4c3-r3c3-r3c4 gap 5
whispers-4: whispers r6c7-r7c7-r7c6 gap 5
whispers-5: whispers r5c4-r5c5-r5c6 gap 5
renban-1: renban r3c2-r2c2-r2c3
renban-2: renban r7c8-r8c8-r8c7
renban-3: renban r3c6-r3c7-r4c7
renban-4: renban r6c3-r7c3-r7c4
renban-5: renban r4c5-r5c5-r6c5
```

- Normal sudoku rules apply.
- Digits along thermometers must strictly increase from bulb to tip.
- Digits on purple Renban lines digit form a set of non-repeating consecutive digits in any order.
- Adjacent digits along green German Whispers lines must differ by at least 5. Digits may repeat on whispers lines if allowed by other rules.
