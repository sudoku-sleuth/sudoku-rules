---
format: open-rules
title: Kropki Pop Popcorn
setter: Will Power
source: https://sudokupad.app/uj4wke6015
case: https://sudoku-sleuth.com/cases/kropki-pop-popcorn
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c7-r4c8 colour "white"
kropki-2: kropki r4c8-r4c9 colour "white"
kropki-3: kropki r2c4-r3c4 colour "white"
kropki-4: kropki r1c3-r2c3 colour "white"
kropki-5: kropki r3c5-r3c6 colour "white"
kropki-6: kropki r3c6-r4c6 colour "white"
kropki-7: kropki r1c4-r1c5 colour "white"
kropki-8: kropki r1c5-r2c5 colour "white"
kropki-9: kropki r3c8-r4c8 colour "white"
kropki-10: kropki r4c1-r4c2 colour "white"
kropki-11: kropki r3c2-r4c2 colour "white"
kropki-12: kropki r2c1-r3c1 colour "white"
kropki-13: kropki r1c2-r2c2 colour "white"
kropki-14: kropki r2c7-r2c8 colour "white"
kropki-15: kropki r1c7-r2c7 colour "white"
kropki-16: kropki r6c2-r7c2 colour "white"
kropki-17: kropki r8c2-r9c2 colour "white"
kropki-18: kropki r7c1-r7c2 colour "white"
kropki-19: kropki r7c2-r7c3 colour "white"
kropki-20: kropki r7c3-r7c4 colour "white"
kropki-21: kropki r8c3-r9c3 colour "white"
kropki-22: kropki r6c1-r6c2 colour "white"
kropki-23: kropki r5c1-r6c1 colour "white"
kropki-24: kropki r5c3-r6c3 colour "white"
kropki-25: kropki r6c3-r6c4 colour "white"
kropki-26: kropki r5c4-r6c4 colour "white"
kropki-27: kropki r5c4-r5c5 colour "white"
kropki-28: kropki r6c5-r6c6 colour "white"
kropki-29: kropki r5c6-r6c6 colour "white"
kropki-30: kropki r6c8-r6c9 colour "white"
kropki-31: kropki r5c9-r6c9 colour "white"
kropki-32: kropki r8c9-r9c9 colour "white"
kropki-33: kropki r8c8-r8c9 colour "white"
kropki-34: kropki r7c8-r7c9 colour "white"
kropki-35: kropki r7c6-r7c7 colour "white"
kropki-36: kropki r7c6-r8c6 colour "white"
kropki-37: kropki r8c3-r8c4 colour "white"
kropki-38: kropki r2c3-r2c4 colour "white"
kropki-39: kropki r6c1-r7c1 colour "white"
kropki-40: kropki r2c5-r2c6 colour "white"
kropki-41: kropki r4c8-r5c8 colour "black"
kropki-42: kropki r4c6-r4c7 colour "black"
kropki-43: kropki r3c4-r3c5 colour "black"
kropki-44: kropki r1c3-r1c4 colour "black"
kropki-45: kropki r1c4-r2c4 colour "black"
kropki-46: kropki r2c5-r3c5 colour "black"
kropki-47: kropki r3c5-r4c5 colour "black"
kropki-48: kropki r2c8-r3c8 colour "black"
kropki-49: kropki r2c2-r2c3 colour "black"
kropki-50: kropki r1c7-r1c8 colour "black"
kropki-51: kropki r7c2-r8c2 colour "black"
kropki-52: kropki r7c3-r8c3 colour "black"
kropki-53: kropki r4c1-r5c1 colour "black"
kropki-54: kropki r4c7-r5c7 colour "black"
kropki-55: kropki r5c6-r5c7 colour "black"
kropki-56: kropki r6c6-r7c6 colour "black"
kropki-57: kropki r8c5-r9c5 colour "black"
kropki-58: kropki r2c3-r3c3 colour "black"
kropki-59: kropki r3c3-r3c4 colour "black"
kropki-60: kropki r3c4-r4c4 colour "black"
kropki-61: kropki r4c4-r4c5 colour "black"
kropki-62: kropki r1c9-r2c9 colour "black"
kropki-63: kropki r5c2-r6c2 colour "black"
kropki-64: kropki r7c1-r8c1 colour "black"
kropki-65: kropki r2c2-r3c2 colour "black"
kropki-66: kropki r4c6-r5c6 colour "black"
negative relations [{"op":"difference","value":1},{"op":"ratio","value":2}] except [["r4c7","r4c8"],["r4c8","r4c9"],["r2c4","r3c4"],["r1c3","r2c3"],["r3c5","r3c6"],["r3c6","r4c6"],["r1c4","r1c5"],["r1c5","r2c5"],["r3c8","r4c8"],["r4c1","r4c2"],["r3c2","r4c2"],["r2c1","r3c1"],["r1c2","r2c2"],["r2c7","r2c8"],["r1c7","r2c7"],["r6c2","r7c2"],["r8c2","r9c2"],["r7c1","r7c2"],["r7c2","r7c3"],["r7c3","r7c4"],["r8c3","r9c3"],["r6c1","r6c2"],["r5c1","r6c1"],["r5c3","r6c3"],["r6c3","r6c4"],["r5c4","r6c4"],["r5c4","r5c5"],["r6c5","r6c6"],["r5c6","r6c6"],["r6c8","r6c9"],["r5c9","r6c9"],["r8c9","r9c9"],["r8c8","r8c9"],["r7c8","r7c9"],["r7c6","r7c7"],["r7c6","r8c6"],["r8c3","r8c4"],["r2c3","r2c4"],["r6c1","r7c1"],["r2c5","r2c6"],["r4c8","r5c8"],["r4c6","r4c7"],["r3c4","r3c5"],["r1c3","r1c4"],["r1c4","r2c4"],["r2c5","r3c5"],["r3c5","r4c5"],["r2c8","r3c8"],["r2c2","r2c3"],["r1c7","r1c8"],["r7c2","r8c2"],["r7c3","r8c3"],["r4c1","r5c1"],["r4c7","r5c7"],["r5c6","r5c7"],["r6c6","r7c6"],["r8c5","r9c5"],["r2c3","r3c3"],["r3c3","r3c4"],["r3c4","r4c4"],["r4c4","r4c5"],["r1c9","r2c9"],["r5c2","r6c2"],["r7c1","r8c1"],["r2c2","r3c2"],["r4c6","r5c6"]]
```

Speed Run: Don't take too long, or the popcorn will burn! Bonus for less than 10 minutes to solve. Double bonus for less than 8 minutes to solve. Normal Sudoku rules apply. KROPKI DOTS- Numbers with white dots between them are consecutive. Numbers with black dots between them are in a ratio of 2:1. ALL POSSIBLE DOTS ARE GIVEN, however, the negative constraint is not needed to  solve. Enjoy. Post a comment on Logic Masters with your time.
