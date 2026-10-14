---
format: open-rules
title: Lake-Town
setter: Blobz
source: https://sudokupad.app/blobz/lake-town
case: https://sudoku-sleuth.com/cases/lake-town
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 5b8a560789280a643bd7991fb7b604c8
---

```rules
sudoku 9x9
whispers-1: whispers r6c7-r7c7-r7c6 gap 5
whispers-2: whispers r4c3-r3c3-r3c4 gap 5
whispers-3: whispers r7c4-r7c3-r6c3 gap 5
whispers-4: whispers r4c7-r3c7-r3c6 gap 5
whispers-5: whispers r7c2-r8c1 gap 5
whispers-6: whispers r8c3-r9c2 gap 5
whispers-7: whispers r2c4-r2c3-r2c2-r3c2-r4c2 gap 5
whispers-8: whispers r2c6-r2c7-r2c8-r3c8 gap 5
extremum r3c3-r4c3-r5c3-r7c5-r7c6-r7c7-r6c7-r5c7-r4c7-r3c7-r3c6-r3c5-r3c4-r4c4-r4c6-r6c6-r6c4-r6c3-r7c3-r7c4-r5c5 type "max" exhaustive false
```

```drawing
- {"id":"drawing-126","rules":[],"visual":{"kind":"line","points":[[1.3,3.4],[1.7,3.4]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"line","points":[[1.3,3.5],[1.8,3.5]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"line","points":[[1.3,3.6],[1.7,3.6]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"line","points":[[1.4,4.3],[1.4,4.7]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"line","points":[[1.5,4.2],[1.5,4.7]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"line","points":[[1.6,4.3],[1.6,4.7]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"line","points":[[1.3,2.4],[1.7,2.4]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"line","points":[[1.2,2.5],[1.7,2.5]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"line","points":[[1.3,2.6],[1.7,2.6]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"line","points":[[1.7,4.6],[1.7,4.8],[1.3,4.8],[1.3,4.3],[1.5,4.1],[1.7,4.3],[1.7,4.6]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"line","points":[[1.6,3.7],[1.7,3.7],[1.9,3.5],[1.7,3.3],[1.2,3.3],[1.2,3.7],[1.6,3.7]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"line","points":[[1.2,3.3],[1.2,3.6]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"line","points":[[1.8,2.6],[1.8,2.7],[1.3,2.7],[1.1,2.5],[1.3,2.3],[1.8,2.3],[1.8,2.6]],"color":"#f3962e53","thickness":3,"rounded":true,"layer":"over"}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"cage","cells":[63,64,72,73],"label":"Raft Area","color":"#e03ff297","labelColor":"#e03ff297"}}
```

Not far from the mouth of the Forest River was the strange town he heard the elves speak of in the king's cellars. It was not built on the shore, though there were a few huts and buildings there, but right out on the surface of the lake, protected from the swirl of the entering river by a promontory of rock which formed a calm bay.

Normal sudoku rules apply.

Begin by filling in the "Raft Area" digits from the previous puzzle.

Digits in "town" (grey) cells are LARGER than digits in all orthogonally adjacent "lake" (blue) cells.

Along green lines, adjacent digits differ by at least 5.
