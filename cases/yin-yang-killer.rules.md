---
format: open-rules
title: Yin-Yang Killer
setter: Sir Moose
source: https://sudokupad.app/wyo6nwhf3y
case: https://sudoku-sleuth.com/cases/yin-yang-killer
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
parity-cells r7c1 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[27,28,29,36,37,38],"label":"23"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[30,39,48,57,66]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[0,9,18,19,20,21],"label":"8"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[70,78,79,80],"label":"2"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[22,23],"label":"6"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[15,16,25,34],"label":"1"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[7,8,17,26,35,44],"label":"15"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[45,54,56,63,65,72,73,74],"label":"44"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[31,32,33],"label":"10"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[60,61,69],"label":"7"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[41,49,50,59],"label":"6"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[67,68,75,76,77],"label":"1"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[46,47,55,64],"label":"1"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[1,2,10,11],"label":"7"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[3,4,5,6,12,13,14],"label":"2"}}
```

Normal sudoku rules apply. 

Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area may be fully shaded or unshaded.

Digits in cages may not repeat and sum to the given number.  In these cages, shaded digits count as positive numbers, and unshaded digits count as negative numbers.  Cages with no total sum to 0.

All unshaded digits in each cage are orthogonally connected.

The digit in the gray square is even.
