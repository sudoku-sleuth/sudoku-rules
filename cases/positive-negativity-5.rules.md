---
format: open-rules
title: Positive Negativity 5
setter: The Bard
source: https://sudokupad.app/whqb69y95k
case: https://sudoku-sleuth.com/cases/positive-negativity-5
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[70,79],"label":"3"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[71,80],"label":"1"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[0,1,9,10],"label":"23"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[47,48,56,57],"label":"23"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[7,8,16,17],"label":"-3"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[43,44,52,53],"label":"-23"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[5,6],"label":"14"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[69,78],"label":"8"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[61,62],"label":"-3"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[76,77],"label":"13"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[25,26],"label":"-2"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[63,64,72,73],"label":"1"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[34,35],"label":"1"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[18,19],"label":"-2"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[27,28],"label":"-3"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[36,37],"label":"3"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[45,46],"label":"-1"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[54,55],"label":"13"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[67,68],"label":"-13"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[65,74],"label":"-6"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[66,75],"label":"1"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[2,3,11,12],"label":"1"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[4,13],"label":"10"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[14,15],"label":"-9"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[20,21,29,30],"label":"-12"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[23,24,32,33],"label":"-1"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[50,51,59,60],"label":"6"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[41,42],"label":"-1"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[49,58],"label":"-2"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[38,39],"label":"-1"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[22,31],"label":"9"}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Yin Yang: shade some cells so that all shaded and unshaded cells form 2 orthogonally connected areas such that no 2x2 area is entirely shaded or unshaded, and all the digits values in the shaded area are negative values for all clues.

Killer Cages: VALUES in cages add up to the total in the corner, and DIGITS may not repeat in a cage.
