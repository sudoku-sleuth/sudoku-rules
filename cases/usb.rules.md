---
format: open-rules
title: USB
setter: Jobo
source: https://tinyurl.com/2eje3ary
case: https://sudoku-sleuth.com/cases/usb
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-king
thermo-1: thermo r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8
thermo-2: thermo r9c8-r8c8-r7c8-r6c8-r5c9-r4c9
thermo-3: thermo r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5
thermo-4: thermo r8c5-r7c5-r6c5-r5c5-r4c6-r3c6
thermo-5: thermo r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2
thermo-6: thermo r7c2-r6c2-r5c2-r4c2-r3c3-r2c3
kropki-1: kropki r1c1-r2c1 colour "black"
kropki-2: kropki r8c9-r9c9 colour "black"
parity-cells-1: parity-cells r4c1-r5c4-r6c7 parity "odd"
parity-cells-2: parity-cells r4c9-r3c6-r2c3 parity "even"
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[7.5,7.5],[6.5,6.5],[5.5,6.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[6.5,4.5],[5.5,3.5],[4.5,3.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[5.5,1.5],[4.5,0.5],[3.5,0.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"o","textColor":"#000000","fontSize":23}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"o","textColor":"#000000","fontSize":23}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"o","textColor":"#000000","fontSize":23}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Digits separated by a black dot must be in a 1:2 ratio.

Grey squares must contain an even digit.

Grey circles must contain an odd digit (also marked with an "o" for clarification).

Cells separated by a king's move cannot contain the same digit.
