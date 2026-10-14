---
format: open-rules
title: The Power Of The White Knight
setter: Tingo
source: https://tinyurl.com/4xphk5p5
case: https://sudoku-sleuth.com/cases/the-power-of-the-white-knight
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: d2c809b135610aaf204efd491b01cd7f
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r8c1-r8c2-r9c2-r9c3
thermo-2: thermo r8c2-r7c2-r6c1
thermo-3: thermo r4c4-r5c4-r6c5-r6c6
thermo-4: thermo r4c4-r4c5
thermo-5: thermo r4c4-r3c4-r2c4
thermo-6: thermo r4c4-r4c3-r3c3-r2c4
thermo-7: thermo r2c3-r3c3-r4c2
kropki-1: kropki r7c2-r8c2 white
kropki-2: kropki r9c2-r9c3 white
kropki-3: kropki r8c3-r9c3 white
kropki-4: kropki r1c3-r2c3 white
kropki-5: kropki r4c5-r4c6 white
kropki-6: kropki r6c5-r6c6 white
```

```drawing
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,2.5],[3.5,1.5]],"color":"#A4A4C4","thickness":16,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[7.5,1.5],[8.5,1.5],[8.5,2.5]],"color":"#A4A4C4","thickness":16,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,2.5],[2.5,2.5],[1.5,3.5]],"color":"#88AA88","thickness":16,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#A4A4C4","stroke":"#A4A4C4","thickness":1,"textColor":"#969696","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#A4A4C4","stroke":"#A4A4C4","thickness":1,"textColor":"#969696","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.55,"height":0.55,"rounded":true,"fill":"#88AA88","stroke":"#88AA88","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply
Any two cells separated by a knight's move (in chess) cannot contain the same digit.
All digits on a thermometer must increase from the bulb end.
Even length thermometers sum to 2^n where n is equal to the length of the thermometer. E.g. A thermometer is a length of 4, the sum of the digits on the therm must equal 2^4 or 16.
Odd length thermometers sum to prime numbers.
White dots indicate consecutive digits. Not all white dots are given.
