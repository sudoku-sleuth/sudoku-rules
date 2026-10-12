---
format: open-rules
title: Gamma
setter: B.PEN
source: https://sudokupad.app/52ivm6jvwi
case: https://sudoku-sleuth.com/cases/gamma
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=8
---

```rules
sudoku 9x9
cage r4c4-r5c3-r5c4-r5c5-r5c6-r6c3 connected true
kropki-1: kropki r5c5-r5c6 colour "black"
kropki-2: kropki r5c7-r5c8 colour "white"
kropki-3: kropki r4c8-r5c8 colour "white"
kropki-4: kropki r3c9-r4c9 colour "white"
kropki-5: kropki r5c7-r6c7 colour "white"
kropki-6: kropki r5c2-r6c2 colour "white"
kropki-7: kropki r6c8-r6c9 colour "white"
kropki-8: kropki r3c7-r4c7 colour "white"
kropki-9: kropki r8c6-r8c7 colour "white"
kropki-10: kropki r8c6-r9c6 colour "white"
kropki-11: kropki r9c6-r9c7 colour "white"
kropki-12: kropki r8c7-r9c7 colour "white"
kropki-13: kropki r8c8-r8c9 colour "white"
kropki-14: kropki r7c8-r8c8 colour "white"
kropki-15: kropki r4c4-r5c4 colour "white"
kropki-16: kropki r1c5-r2c5 colour "white"
kropki-17: kropki r3c8-r3c9 colour "white"
slow-thermo-1: slow-thermo r4c6-r3c5-r2c4-r2c3
slow-thermo-2: slow-thermo r4c5-r3c4-r3c3-r3c2
slow-thermo-3: slow-thermo r4c3-r4c2-r5c1
slow-thermo-4: slow-thermo r5c2-r6c1-r7c1
slow-thermo-5: slow-thermo r6c5-r7c6-r6c7-r5c8
slow-thermo-6: slow-thermo r3c6-r3c7-r3c8
slow-thermo-7: slow-thermo r6c2-r7c2-r8c2-r8c3
slow-thermo-8: slow-thermo r6c4-r7c4-r8c5-r8c6
slow-thermo-9: slow-thermo r5c7-r4c8
```

Normal sudoku rules apply.

Along the slow thermos the digits must not decrease from the bulb to the tip.

Digits cannot repeat in cages.

One of the digits separated by an eye of the Gamma Metroid (black dot) must be the double of the other. Digits separated by a electric arc (white dot) must be consecutive. Not all dots are given.

"This stage of Metroid can now transfer negative charges from its nervous system into the horns, releasing electric arcs capable of disrupting weapon fire. The membrane containing its nucleus remains vulnerable, but the Gamma Metroid's exoskeleton has expanded for additional protection. Although its legs have reached their maximum length, they are unsuitable for locomotion. Instead, they can serve to capture prey and drain their energy."
