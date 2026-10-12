---
format: open-rules
title: "Lots in Space: Deconstructica"
setter: Marty Sears
source: https://sudokupad.app/bf390c4bck
case: https://sudoku-sleuth.com/cases/lots-in-space-deconstructica
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
board:
  rows: 13
  cols: 13
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9-r1c10-r1c11-r1c12-r1c13
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10-r2c11-r2c12-r2c13
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10-r3c11-r3c12-r3c13
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10-r4c11-r4c12-r4c13
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10-r5c11-r5c12-r5c13
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10-r6c11-r6c12-r6c13
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10-r7c11-r7c12-r7c13
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10-r8c11-r8c12-r8c13
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10-r9c11-r9c12-r9c13
unique-10: unique r10c1-r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10-r10c11-r10c12-r10c13
unique-11: unique r11c1-r11c2-r11c3-r11c4-r11c5-r11c6-r11c7-r11c8-r11c9-r11c10-r11c11-r11c12-r11c13
unique-12: unique r12c1-r12c2-r12c3-r12c4-r12c5-r12c6-r12c7-r12c8-r12c9-r12c10-r12c11-r12c12-r12c13
unique-13: unique r13c1-r13c2-r13c3-r13c4-r13c5-r13c6-r13c7-r13c8-r13c9-r13c10-r13c11-r13c12-r13c13
unique-14: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r10c1-r11c1-r12c1-r13c1
unique-15: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2-r11c2-r12c2-r13c2
unique-16: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3-r11c3-r12c3-r13c3
unique-17: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4-r11c4-r12c4-r13c4
unique-18: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5-r11c5-r12c5-r13c5
unique-19: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6-r11c6-r12c6-r13c6
unique-20: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7-r11c7-r12c7-r13c7
unique-21: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8-r11c8-r12c8-r13c8
unique-22: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9-r11c9-r12c9-r13c9
unique-23: unique r1c10-r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10-r11c10-r12c10-r13c10
unique-24: unique r1c11-r2c11-r3c11-r4c11-r5c11-r6c11-r7c11-r8c11-r9c11-r10c11-r11c11-r12c11-r13c11
unique-25: unique r1c12-r2c12-r3c12-r4c12-r5c12-r6c12-r7c12-r8c12-r9c12-r10c12-r11c12-r12c12-r13c12
unique-26: unique r1c13-r2c13-r3c13-r4c13-r5c13-r6c13-r7c13-r8c13-r9c13-r10c13-r11c13-r12c13-r13c13
modular-1: modular r6c6-r5c7-r5c6-r4c7-r3c6-r2c6-r2c5-r2c4-r2c3-r3c3 loop false modulus 3
modular-2: modular r5c8-r4c9-r3c10-r3c11 loop false modulus 3
modular-3: modular r8c4-r7c3-r8c3-r9c3-r10c3-r10c4-r10c5 loop false modulus 3
modular-4: modular r11c3-r11c4-r12c5-r11c6-r11c7-r10c7-r9c7 loop false modulus 3
modular-5: modular r7c8-r6c8-r6c7-r7c6-r7c5-r7c4-r6c3-r5c3-r4c3-r4c2-r3c2 loop false modulus 3
modular-6: modular r2c8-r3c7-r3c8-r2c9-r1c10-r2c11-r1c12 loop false modulus 3
modular-7: modular r10c9-r10c8-r9c9-r8c10-r7c11-r8c12-r7c12 loop false modulus 3
modular-8: modular r7c13-r8c13-r9c13-r10c13-r11c12-r12c12-r12c13-r11c13 loop false modulus 3
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#ffa3a3b5","stroke":"#f77f","thickness":2,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.83,"height":0.83,"rounded":true,"fill":"#ffa3a3b5","stroke":"#f77f","thickness":2,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#1dff0082","stroke":"#1ee900ff","thickness":2,"angle":45}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#1dff0082","stroke":"#1ee900ff","thickness":2,"angle":45}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,10.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#1dff0082","stroke":"#1ee900ff","thickness":2,"angle":45}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,11.5],"width":0.63,"height":0.63,"rounded":false,"fill":"#1dff0082","stroke":"#1ee900ff","thickness":2,"angle":45}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.73,"height":0.73,"rounded":false,"fill":"#23e3ff8d","stroke":"#00ddfdff","thickness":2,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,12.5],"width":0.73,"height":0.73,"rounded":false,"fill":"#23e3ff8d","stroke":"#00ddfdff","thickness":2,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.73,"height":0.73,"rounded":false,"fill":"#23e3ff8d","stroke":"#00ddfdff","thickness":2,"angle":0}}
```

The space station Deconstructica is formed of nine separate 3x3 modules, connected to each other with teal modular tether lines. Their locations are to be deduced.

Each 3x3 module must contain the digits 1-9 once each. If a cell on a modular tether lies in the vacuum of space (between modules), it contains a zero. All other space cells should be left empty. The digits 1-9 may not repeat in a row or column (but zeros can repeat).

Modular tethers: Each tether's endpoints are located somewhere within two different 3x3 modules. Any group of 3 adjacent cells along a tether must contain one digit from each of the modular groups [147], [258], and [0369].

Parity Change Lots: A digit in a red circle indicates the number of parity changes [i.e. from odd to even or vice versa] between adjacent digits along the attached tether.

German Whisper Lots: A digit in a green diamond indicates how many pairs of adjacent digits along the attached tether have a difference of 5 or more.

Adjacent Sum Lots: A digit in a blue square looks at the sums of each pair of adjacent digits along the attached tether, and indicates how many distinct sums there are.
