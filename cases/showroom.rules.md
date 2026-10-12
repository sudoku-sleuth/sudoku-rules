---
format: open-rules
title: Showroom
setter: Jobo
source: https://sudokupad.app/f7atjvf0jb
case: https://sudoku-sleuth.com/cases/showroom
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[4.75,4.75]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[3.7,4.3]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[3.7,4.7]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[2.7,4.3]],"color":"#2ecbffff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[2.7,4.7]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[1.7,4.3]],"color":"#f88f","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[0.7,4.3]],"color":"#c9c883ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.7,4.7],[4.5,8.5]],"color":"#3baf","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.7,4.7],[5.5,8.5]],"color":"#ffec4cff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.218,0.782],[4.65,4.35]],"color":"#aaaf","thickness":3.2,"headLength":0.25,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#aaaf","thickness":1.28,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.833,0.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"E","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.833,0.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"S","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.833,0.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"P","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.833,0.167],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"N","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.833,8.833],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"W","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.833,8.833],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"R","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.833,8.833],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"A","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.833,8.833],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"M","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Normal sudoku rules apply.

Arrow: Digits along the arrow must sum to the digit in that arrow's circle.

Thermometer: Along the thermometer, digits must increase from the bulb end.

Entropic line (E): A set of three sequential cells along the peach line must contain a low [123], middle [456], and high [789] digit.

German whisper (W): Adjacent digits along the green line must differ by at least 5.

Region sum line (S): Box borders divide the blue line into segments with the same sum.

Renban (R): The purple line contains a non-repeating set of consecutive digits in any order.

Parity line (P): Adjacent digits along the red line must alternate in parity (odd/even).

Anti whisper (A): Adjacent digits along the yellow line must differ by at most 5.

Nabner (N): No two digits on the golden line can be consecutive or the same, regardless of their order along the line.

Modular line (M): A set of three sequential cells along the teal line must contain one digit from [147], one from [258], and one from [369].
