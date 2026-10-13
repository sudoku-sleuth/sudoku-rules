---
format: open-rules
title: Vicky
setter: gUBBLOR
source: https://sudokupad.app/1fbogisas3
case: https://sudoku-sleuth.com/cases/vicky
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r9c4-r9c5-r9c6 total 6 connected true
cage-2: cage r8c1-r9c1 total 16 connected true
cage-3: cage r8c9-r9c8-r9c9 total 12 connected true
cage-4: cage r2c5-r3c5-r4c5 total 10 connected true
thermo-1: thermo r2c1-r3c1-r4c2-r3c3-r2c3
thermo-2: thermo r4c5-r3c5-r2c5
thermo-3: thermo r2c9-r2c8-r2c7-r3c7-r4c7-r4c8-r4c9
thermo-4: thermo r8c7-r7c7-r6c8
thermo-5: thermo r8c7-r7c7-r6c6
thermo-6: thermo r7c3-r6c4
thermo-7: thermo r7c3-r8c4
thermo-8: thermo r7c3-r6c3
thermo-9: thermo r7c3-r8c3
kropki-1: kropki r8c3-r9c3 colour "white"
kropki-2: kropki r7c3-r8c3 colour "white"
kropki-3: kropki r8c3-r8c4 colour "white"
kropki-4: kropki r6c7-r6c8 colour "white"
kropki-5: kropki r5c5-r6c5 colour "white"
renban-1: renban r8c1-r9c1-r9c2
renban-2: renban r9c4-r9c5-r9c6
renban-3: renban r9c8-r9c9-r8c9
renban-4: renban r2c8-r2c9
renban-5: renban r3c7-r4c7-r4c8-r4c9
renban-6: renban r3c5-r4c5
renban-7: renban r3c1-r4c2
renban-8: renban r2c3-r3c3
renban-9: renban r6c3-r7c3-r8c3-r8c4-r6c4
renban-10: renban r8c7-r7c7-r6c8-r6c6
pair-1: pair r2c7-r3c7 sum 10
pair-2: pair r3c5-r4c5 sum 5
pair-3: pair r2c1-r3c1 sum 5
pair-4: pair r2c8-r2c9 sum 5
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Thermometers: Digits along each thermometer must increase starting from the bulb end.

Renban: Digits along each renban line must be a set of consecutive digits in any order, and must not repeat.

Killer cages: The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.

Kropki dots: A white dot between cells indicates cells with consecutive values. Not all dots are shown.
