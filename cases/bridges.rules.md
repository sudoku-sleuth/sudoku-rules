---
format: open-rules
title: Bridges
setter: Timotab
source: https://sudokupad.app/omny2p6zdd
case: https://sudoku-sleuth.com/cases/bridges
library: https://rules.sudoku-sleuth.com/
status: read
exported: c10c05ee65042497808843f9d7b4a845
---

```rules
sudoku 9x9
kropki-1: kropki r6c2-r6c3 white
kropki-2: kropki r9c1-r9c2 white
kropki-3: kropki r9c6-r9c7 white
kropki-4: kropki r6c6-r6c7 white
kropki-5: kropki r8c7-r8c8 black
kropki-6: kropki r7c7-r7c8 black
kropki-7: kropki r9c2-r9c3 black
kropki-8: kropki r1c7-r1c8 black
kropki-9: kropki r5c5-r5c6 black
whispers-1: whispers r9c1-r8c2-r8c3-r9c4 gap 4
whispers-2: whispers r2c6-r1c7-r1c8-r2c9 gap 4
whispers-3: whispers r8c6-r9c6 gap 4
whispers-4: whispers r8c8-r9c8 gap 4
whispers-5: whispers r4c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r4c9 gap 5
whispers-6: whispers r3c5-r4c5 gap 5
whispers-7: whispers r6c3-r7c3 gap 5
whispers-8: whispers r6c5-r7c5 gap 5
whispers-9: whispers r6c7-r7c7 gap 5
whispers-10: whispers r9c8-r9c9 gap 5
whispers-11: whispers r5c6-r5c7-r5c8-r6c9 gap 5
whispers-12: whispers r8c2-r9c2 gap 5
region-sum-1: region-sum r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 segments [["r7c1","r7c2","r7c3"],["r7c4","r7c5","r7c6"],["r7c7","r7c8","r7c9"]]
region-sum-2: region-sum r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 segments [["r4c1","r4c2","r4c3"],["r4c4","r4c5","r4c6"],["r4c7","r4c8","r4c9"]]
region-sum-3: region-sum r9c1-r9c2-r9c3-r9c4 segments [["r9c1","r9c2","r9c3"],["r9c4"]]
region-sum-4: region-sum r2c6-r2c7-r2c8-r2c9 segments [["r2c6"],["r2c7","r2c8","r2c9"]]
region-sum-5: region-sum r9c5-r8c6-r8c7-r8c8-r9c9 segments [["r9c5","r8c6"],["r8c7","r8c8","r9c9"]]
region-sum-6: region-sum r5c5-r5c4-r5c3-r5c2-r5c1 segments [["r5c5","r5c4"],["r5c3","r5c2","r5c1"]]
renban-1: renban r7c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r7c9
renban-2: renban r3c3-r4c4
renban-3: renban r3c4-r4c3
renban-4: renban r3c6-r4c7
renban-5: renban r3c7-r4c6
renban-6: renban r9c5-r9c6-r9c7-r9c8
renban-7: renban r8c3-r9c3
renban-8: renban r2c5-r3c5
```

• Normal sudoku rules apply.
• Renban: Digits may not repeat on a purple line, and the line must contain an unordered set of consecutive digits. (The renban lines in rows 3 and 4 are 2-cell renbans that cross)
• Region Sum: Box borders divide a blue line into segments of the same sum.
• German Whispers: Along a green line, adjacent digits must differ by at least 5.
• Dutch Whispers: Along an orange line, adjacent digits must differ by at least 4.
• Kropki: Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio. Not all dots are given.
