---
format: open-rules
title: Petri Dish
setter: Blobz
source: https://sudokupad.app/blobz/petri-dish
case: https://sudoku-sleuth.com/cases/petri-dish
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
givens: r1c1=1 r8c9=4
exported: 4357f9dad561ee9fabaf70d5b5c307f8
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 white
kropki-2: kropki r4c1-r5c1 white
kropki-3: kropki r8c2-r8c3 white
kropki-4: kropki r1c3-r1c4 white
kropki-5: kropki r1c5-r2c5 white
kropki-6: kropki r2c5-r2c6 white
kropki-7: kropki r4c9-r5c9 white
kropki-8: kropki r7c8-r8c8 white
kropki-9: kropki r8c8-r8c9 white
kropki-10: kropki r8c4-r8c5 white
kropki-11: kropki r7c5-r8c5 white
kropki-12: kropki r7c5-r7c6 white
kropki-13: kropki r9c8-r9c9 white
kropki-14: kropki r4c6-r5c6 white
kropki-15: kropki r9c2-r9c3 white
negative relations [{"op":"difference","value":1}] except [["r3c1","r4c1"],["r4c1","r5c1"],["r8c2","r8c3"],["r1c3","r1c4"],["r1c5","r2c5"],["r2c5","r2c6"],["r4c9","r5c9"],["r7c8","r8c8"],["r8c8","r8c9"],["r8c4","r8c5"],["r7c5","r8c5"],["r7c5","r7c6"],["r9c8","r9c9"],["r4c6","r5c6"],["r9c2","r9c3"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":0,"height":1.128,"rounded":true,"thickness":0,"angle":0,"text":"🦠","textColor":"#000000","fontSize":43,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffffff85","thickness":0,"angle":0}}
```

Normal sudoku rules apply.

A microbe has been placed in cell R1C1 of the petri dish (grid). It infects all adjacent cells (both orthogonally and diagonally) that are either the same digit, or consecutive to that digit. The infected cell(s) become a microbe and will in turn infect adjacent cells, if they contain the same or consecutive digits. The complete growth of the microorganism in this experiment has been shown. 

A negative constraint applies here; a white cell adjacent (orthogonally or diagonally) to a microbe cell cannot be consecutive or contain the same digit.

In the unaffected growth medium (the empty white cells), white dots separate consecutive digits. ALL such dots are shown. This constraint applies orthogonally only.
