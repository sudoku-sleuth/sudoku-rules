---
format: open-rules
title: X-Galaxies
setter: Blobz
source: https://sudokupad.app/blobz/x-galaxies
case: https://sudoku-sleuth.com/cases/x-galaxies
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
---

```rules
sudoku 9x9
pair-1: pair r3c5-r3c6 relation {"op":"sum","value":10}
pair-2: pair r9c8-r9c9 relation {"op":"sum","value":10}
pair-3: pair r7c2-r7c3 relation {"op":"sum","value":10}
pair-4: pair r6c3-r6c4 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.47,"height":0.47,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#c5c5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#bcc6ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0,"height":0.395,"rounded":true,"thickness":0,"angle":0,"text":"X","textColor":"#000000","fontSize":14.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2],"width":0.26,"height":0.26,"rounded":true,"fill":"#c5c5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8],"width":0.26,"height":0.26,"rounded":true,"fill":"#c5c5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#c5c5c5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.26,"height":0.26,"rounded":true,"fill":"#bcc6ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8],"width":0.26,"height":0.26,"rounded":true,"fill":"#bcc6ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2],"width":0.26,"height":0.26,"rounded":true,"fill":"#bcc6ffff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":0.26,"height":0.26,"rounded":true,"fill":"#bcc6ffff","stroke":"#000000","thickness":1.28,"angle":0}}
```

Normal sudoku rules apply.

Divide the grid into galaxies: orthogonally connected groups of cells that have 180 degree rotational symmetry about their centers (marked with a small dot). All cells must be part of a galaxy; no galaxies overlap.

Grey dots mark "renban" galaxies: those with two or more cells, whose digits form an unbroken consecutive sequence in any order. White dots mark galaxies whose digits do NOT form a sequence. Blue dots containing an X indicate "X-Galaxies" where rotationally symmetric pairs of digits sum to 10. Digits may not repeat within a galaxy.

Four single-cell galaxies -- "Dark Stars" -- are NOT marked: their locations must be deduced by the solver. ALL cells (max 8) around a Dark Star belong to regular galaxies. Digits do not repeat amongst the Dark Stars.

As per Galactic Map Standards: All galaxies with at least TWO cells indicate their SMALLEST digit with a diamond icon. All galaxies with at least SIX cells indicate their LARGEST digit with a circle icon.
