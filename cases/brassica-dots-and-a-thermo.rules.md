---
format: open-rules
title: Brassica Dots and a Thermo
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/brassica-dots-and-a-thermo
library: https://rules.sudoku-sleuth.com/
status: read
givens: ........6...462...6...........7.6....6....7...7....6.3..6.............6.9..6.....
exported: ee2158fcd96b698bedfae0739f0a9b1a
---

```rules
sudoku 9x9
thermo r1c1-r1c2-r1c3-r1c4
kropki-1: kropki r5c2-r6c2 white
kropki-2: kropki r5c7-r6c7 white
kropki-3: kropki r6c7-r6c8 white
kropki-4: kropki r4c2-r5c2 white
kropki-5: kropki r2c6-r3c6 white
kropki-6: kropki r6c7-r7c7 white
kropki-7: kropki r4c6-r5c6 white
kropki-8: kropki r5c9-r6c9 white
kropki-9: kropki r4c8-r4c9 white
kropki-10: kropki r6c9-r7c9 white
kropki-11: kropki r7c5-r7c6 white
kropki-12: kropki r6c1-r7c1 white
kropki-13: kropki r6c1-r6c2 white
kropki-14: kropki r2c1-r3c1 white
kropki-15: kropki r3c2-r3c3 white
kropki-16: kropki r2c3-r3c3 white
kropki-17: kropki r2c5-r3c5 white
kropki-18: kropki r1c5-r2c5 white
kropki-19: kropki r1c8-r2c8 white
kropki-20: kropki r1c8-r1c9 white
kropki-21: kropki r2c8-r2c9 white
kropki-22: kropki r3c8-r3c9 white
kropki-23: kropki r6c4-r7c4 white
kropki-24: kropki r8c4-r8c5 white
kropki-25: kropki r8c4-r9c4 white
kropki-26: kropki r5c4-r5c5 white
kropki-27: kropki r8c8-r8c9 white
kropki-28: kropki r9c3-r9c4 white
kropki-29: kropki r9c6-r9c7 white
kropki-30: kropki r8c7-r9c7 white
kropki-31: kropki r5c6-r6c6 white
kropki-32: kropki r1c2-r2c2 white
kropki-33: kropki r9c2-r9c3 white
kropki-34: kropki r5c2-r5c3 black
kropki-35: kropki r4c5-r4c6 black
kropki-36: kropki r3c6-r4c6 black
kropki-37: kropki r1c1-r1c2 black
kropki-38: kropki r1c2-r1c3 black
kropki-39: kropki r1c3-r1c4 black
kropki-40: kropki r1c4-r2c4 black
kropki-41: kropki r8c5-r9c5 black
kropki-42: kropki r8c2-r9c2 black
kropki-43: kropki r7c8-r7c9 black
kropki-44: kropki r5c8-r5c9 black
kropki-45: kropki r3c7-r4c7 black
kropki-46: kropki r3c7-r3c8 black
kropki-47: kropki r2c7-r3c7 black
kropki-48: kropki r2c6-r2c7 black
kropki-49: kropki r6c4-r6c5 black
kropki-50: kropki r4c1-r5c1 black
kropki-51: kropki r5c1-r6c1 black
kropki-52: kropki r8c8-r9c8 black
```

Normal sudoku rules apply.

Cells separated by a white dot contain consecutive digits. If two cells are separated by a black dot, one is double the other. Some possible dots may not be shown.

Digits on the thermometer increase from the bulb to the tip but do not have to be consecutive.
