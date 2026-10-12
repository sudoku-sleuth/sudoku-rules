---
format: open-rules
title: Fool of a clue!
setter: Dr Logic
source: https://sudokupad.app/301425l36a
case: https://sudoku-sleuth.com/cases/fool-of-a-clue
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r9c9=1
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[42,50,51]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[20,29,38,47,56,65,74,75],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[0.5,7.5],[0.5,6.5],[0.5,5.5],[0.5,4.5],[0.5,3.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,0.5],[6.5,0.5],[5.5,0.5],[4.5,0.5],[3.5,0.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5],[6.5,5.5],[6.5,4.5],[6.5,3.5],[5.5,3.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,0.5],[0.5,0.5],[0.5,1.5],[0.5,2.5]],"color":"#C9C883","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,4.5],[5.5,5.5],[4.5,5.5],[3.5,4.5]],"color":"#C9C883","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,8.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","3","4","5"],"textColor":"#000000","fontSize":18}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4],"width":0.7,"height":0.7,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2,"textGrid":["2","3","4","5"],"textColor":"#000000","fontSize":18}}
```

Normal Sudoku Rules Apply.
Standard variant rules CANNOT apply. 
Each variant is tricking you, The opposite is actually true. Each variant is negated as follows:
<li>Normal Sudoku Rules Apply.<br /></li>
<li>Nabner (gold line): Digits form a set of consecutive digits, in any order <br /></li>
<li>Killer Cage: There must be at least 1 repeated digit within the cage<br /></li>
<li>Thermometer: Digits along the thermometer must strictly DECREASE from the bulb end.<br /></li>
<li>Quadrouple: Digits contained in the white circles CANNOT appear in the surrounding 4 cells.<br /></li>
<li>White Dot: Cells separated by a white dot must be in a 1:2 ratio<br /></li>
<li>V: Cells separated by a V sum to 10<br /></li>
