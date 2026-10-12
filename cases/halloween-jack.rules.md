---
format: open-rules
title: Halloween Jack
setter: Tingo
source: https://tinyurl.com/bdfver7b
case: https://sudoku-sleuth.com/cases/halloween-jack
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo-1: thermo r3c3-r3c4-r2c3-r3c2
thermo-2: thermo r3c7-r3c6-r2c7-r3c8
thermo-3: thermo r5c1-r5c2-r6c3-r7c4-r6c5-r7c6-r6c7-r5c8-r5c9
thermo-4: thermo r6c9-r7c9-r8c8-r9c7-r8c6
thermo-5: thermo r6c1-r7c1-r8c2-r9c3-r8c4-r9c5
thermo-6: thermo r5c6-r4c5-r5c4
kropki-1: kropki r2c5-r3c5 colour "white"
kropki-2: kropki r3c2-r4c2 colour "white"
kropki-3: kropki r2c7-r3c7 colour "black"
kropki-4: kropki r2c3-r3c3 colour "black"
parity-cells r7c2 parity "odd"
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5],[1.5,2.5],[2.5,1.5]],"color":"#FF7E00","thickness":16,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,5.5],[1.5,6.5],[2.5,7.5]],"color":"#FF7E00","thickness":16,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5],[7.5,7.5],[8.5,6.5],[7.5,5.5]],"color":"#FF7E00","thickness":16,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,0.5],[7.5,1.5],[8.5,2.5],[7.5,3.5],[8.5,4.5]],"color":"#FF7E00","thickness":16,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,4.5],[4.5,3.5]],"color":"#FF7E00","thickness":16,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,1.5],[5.5,2.5],[6.5,3.5],[5.5,4.5],[6.5,5.5],[5.5,6.5],[4.5,7.5],[4.5,8.5]],"color":"#FF7E00","thickness":16,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FF7E00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FF7E00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FF7E00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FF7E00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FF7E00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FF7E00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply
All digits in a thermometer must increase from the bulb
Black dots between two cells indicate a relationship of 2:1. Not all black dots are given.
White dots between two cells indicate consecutive digits. Not all white dots are given.
The cell with the grey circle is an odd digit.
