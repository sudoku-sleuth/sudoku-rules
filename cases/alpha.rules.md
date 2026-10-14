---
format: open-rules
title: Alpha
setter: B.PEN
source: ""
case: https://sudoku-sleuth.com/cases/alpha
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4a6ba4007cc0e2569f86a9aa04b695ae
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r4c5-r5c2-r5c3-r5c4-r5c5-r5c6-r6c3 connected true
cage-2: cage r6c4-r7c2-r7c3-r7c4-r7c5-r7c6-r8c3-r8c4-r8c5 connected true
thermo-1: thermo r6c6-r7c7-r7c8
thermo-2: thermo r4c6-r3c7-r3c8
thermo-3: thermo r3c6-r2c5-r2c4-r2c3
thermo-4: thermo r4c4-r3c3-r3c2-r3c1
thermo-5: thermo r6c4-r7c4-r8c5
thermo-6: thermo r6c6-r6c7-r6c8
thermo-7: thermo r4c7-r5c7
thermo-8: thermo r5c6-r4c5
thermo-9: thermo r5c3-r4c2-r4c1
thermo-10: thermo r7c5-r6c5-r5c4-r4c3
thermo-11: thermo r6c2-r7c1-r8c1
thermo-12: thermo r7c3-r6c3-r5c2-r5c1
kropki-1: kropki r2c5-r3c5 white
kropki-2: kropki r5c7-r5c8 white
kropki-3: kropki r6c2-r6c3 white
kropki-4: kropki r6c7-r7c7 white
kropki-5: kropki r5c5-r6c5 white
kropki-6: kropki r9c3-r9c4 white
kropki-7: kropki r3c9-r4c9 white
kropki-8: kropki r4c1-r5c1 white
kropki-9: kropki r3c1-r4c1 white
kropki-10: kropki r1c1-r2c1 white
kropki-11: kropki r1c2-r1c3 white
kropki-12: kropki r1c4-r1c5 white
kropki-13: kropki r2c6-r2c7 white
kropki-14: kropki r3c3-r3c4 white
kropki-15: kropki r6c8-r6c9 white
kropki-16: kropki r1c1-r1c2 white
kropki-17: kropki r2c2-r3c2 white
kropki-18: kropki r3c5-r3c6 white
kropki-19: kropki r6c8-r7c8 white
kropki-20: kropki r8c3-r9c3 white
kropki-21: kropki r1c9-r2c9 white
kropki-22: kropki r8c8-r8c9 black
```

Normal sudoku rules apply. Digits cannot repeat within a cage.

Normal thermo sudoku rules apply.

Normal kropki dots sudoku rules apply. Not all dots are given.

"The Alpha Metroid has gained immunity to cold temperatures. The loss of several nuclei within its green membrane has left it vulnerable to concussive weaponry. A plated exoskeleton partially covers it."
