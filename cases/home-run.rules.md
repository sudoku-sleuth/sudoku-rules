---
format: open-rules
title: Home Run
setter: Jobo
source: https://sudokupad.app/oazj5bxcrw
case: https://sudoku-sleuth.com/cases/home-run
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: ead5594afeb23df2e0ebb9f673f9f9c1
---

```rules
sudoku 9x9
arrow r7c5-r8c5 bulb ["r6c5"]
parity-cells r6c3-r4c5-r6c7-r8c5 parity "even"
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[8.5,4.5],[4.5,8.5]],"color":"#67f067ff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[5.5,2.5],[7.5,4.5],[5.5,6.5],[3.5,4.5]],"color":"#f067f0ff","thickness":6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,3.5],[8.5,5.5],[7.5,5.5]],"color":"#e5c2adff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[2.5,0.5],[0.5,2.5],[0.5,6.5],[2.5,8.5],[4.5,8.5]],"color":"#e5c2adff","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.75,0.75],[3.85,0.85],[4.15,0.85],[4.25,0.75]],"color":"#e6261fff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.75,1.25],[3.85,1.15],[4.15,1.15],[4.25,1.25]],"color":"#e6261fff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.75,4.75],[1.85,4.85],[2.15,4.85],[2.25,4.75]],"color":"#e6261fff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.75,5.25],[1.85,5.15],[2.15,5.15],[2.25,5.25]],"color":"#e6261fff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.75,6.25],[2.85,6.35],[3.15,6.35],[3.25,6.25]],"color":"#e6261fff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.75,6.75],[2.85,6.65],[3.15,6.65],[3.25,6.75]],"color":"#e6261fff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[3.75,7.75],[3.85,7.85],[4.15,7.85],[4.25,7.75]],"color":"#e6261fff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.75,8.25],[3.85,8.15],[4.15,8.15],[4.25,8.25]],"color":"#e6261fff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[0.75,3.75],[0.85,3.85],[1.15,3.85],[1.25,3.75]],"color":"#1f2de6ff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0.75,4.25],[0.85,4.15],[1.15,4.15],[1.25,4.25]],"color":"#1f2de6ff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.75,5.75],[0.85,5.85],[1.15,5.85],[1.25,5.75]],"color":"#1f2de6ff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.75,6.25],[0.85,6.15],[1.15,6.15],[1.25,6.25]],"color":"#1f2de6ff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.75,1.75],[1.85,1.85],[2.15,1.85],[2.25,1.75]],"color":"#1f2de6ff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[1.75,2.25],[1.85,2.15],[2.15,2.15],[2.25,2.25]],"color":"#1f2de6ff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[2.75,2.75],[2.85,2.85],[3.15,2.85],[3.25,2.75]],"color":"#1f2de6ff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.75,3.25],[2.85,3.15],[3.15,3.15],[3.25,3.25]],"color":"#1f2de6ff","thickness":5,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8],"width":0.79,"height":0.79,"rounded":true,"fill":"#f4edce9b","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,1],"width":0.79,"height":0.79,"rounded":true,"fill":"#f4edce9b","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":0.79,"height":0.79,"rounded":true,"fill":"#f4edce9b","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2],"width":0.79,"height":0.79,"rounded":true,"fill":"#f4edce9b","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,4],"width":0.79,"height":0.79,"rounded":true,"fill":"#f4edce9b","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6],"width":0.79,"height":0.79,"rounded":true,"fill":"#f4edce9b","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0.79,"height":0.79,"rounded":true,"fill":"#f4edce9b","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6.5],"width":0.79,"height":0.79,"rounded":true,"fill":"#f4edce9b","stroke":"#000000","thickness":1,"angle":0}}
```

Normal sudoku rules apply.

Adjacent digits along the green (German whisper) line must differ by at least 5.
The purple (renban) line contains a non-repeating set of consecutive digits in any order.
A set of three sequential cells along a brown (entropic) line must contain a low [123], middle [456], and high [789] digit.
Digits along an arrow must sum to the digit in that arrow's circle.
Digits in a grey square must be even.

There are some baseballs in the grid. Cells touched by a baseball either act as a renban (described above), or a nabner (digits on a nabner cannot repeat, and no two digits can be consecutive, regardless of their position on the ball).
Equal baseball colors are equal types, which is which must be determined by the solver.
