---
format: open-rules
title: Vaults of the Heavens
setter: Blobz
source: https://sudokupad.app/blobz/vaults-of-the-heavens
case: https://sudoku-sleuth.com/cases/vaults-of-the-heavens
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: ffed0bbf3003f390a52ba9746bb0f643
---

```rules
sudoku 9x9
vault-1: vault r3c1-r4c1-r4c2-r5c1 neighbours ["r2c1","r3c2","r4c3","r5c2","r6c1"]
vault-2: vault r2c2-r3c2-r3c3-r3c4-r4c4-r5c3-r5c4-r5c5 neighbours ["r1c2","r2c1","r2c3","r2c4","r3c1","r3c5","r4c2","r4c3","r4c5","r5c2","r5c6","r6c3","r6c4","r6c5"]
vault-3: vault r1c8-r2c7-r2c8-r3c6-r3c7-r4c6 neighbours ["r1c7","r1c9","r2c6","r2c9","r3c5","r3c8","r4c5","r4c7","r5c6"]
vault-4: vault r4c8-r5c7-r5c8-r6c5-r6c6-r6c7-r6c8-r7c2-r7c3-r7c4-r7c5-r8c4-r8c5 neighbours ["r3c8","r4c7","r4c9","r5c5","r5c6","r5c9","r6c2","r6c3","r6c4","r6c9","r7c1","r7c6","r7c7","r7c8","r8c2","r8c3","r8c6","r9c4","r9c5"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":0.47,"height":0.47,"rounded":false,"stroke":"#000000","thickness":1.28,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#a5a5a5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#a5a5a5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.66,"height":0.66,"rounded":true,"stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.66,"height":0.66,"rounded":true,"stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.66,"height":0.66,"rounded":true,"stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.66,"height":0.66,"rounded":true,"stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.66,"height":0.66,"rounded":true,"stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.66,"height":0.66,"rounded":true,"stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.66,"height":0.66,"rounded":true,"stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,2.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8],"width":0.26,"height":0.26,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#a5a5a5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8],"width":0.26,"height":0.26,"rounded":true,"fill":"#a5a5a5ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#a5a5a5ff","stroke":"#000000","thickness":1.28,"angle":0}}
```

Normal sudoku rules apply.

Divide the grid into galaxies: orthogonally connected groups of cells that have 180 degree rotational symmetry about their centers (marked with a small dot). All cells must be part of a galaxy; no galaxies overlap.

Grey dots mark "renban" galaxies: those with two or more cells, whose digits form an unbroken consecutive sequence in any order. White dots mark galaxies whose digits do NOT form a consecutive sequence. Digits may not repeat within a galaxy.

As per Galactic Map Standards: All galaxies with at least TWO cells indicate their SMALLEST digit with a diamond icon. All galaxies with at least SIX cells indicate their LARGEST digit with a circle icon.

The cages mark "Vaults of the Heavens". Digits within a Vault MAY repeat. Digits orthogonally adjacent to a Vault may NOT be included within that Vault.
