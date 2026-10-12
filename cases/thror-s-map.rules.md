---
format: open-rules
title: Thror's Map
setter: Blobz
source: https://sudokupad.app/blobz/thrors-map
case: https://sudoku-sleuth.com/cases/thror-s-map
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r7c8-r7c9-r8c7-r8c8-r9c7 connected true
cage-2: cage r3c5-r3c6-r3c7-r4c7-r4c8-r4c9 total 21 connected true
cage-3: cage r2c3-r3c2-r3c3-r3c4 total 30 connected true
cage-4: cage r9c2-r9c3-r9c4-r9c5 total 27 connected true
cage-5: cage r2c8-r3c8 total 9 connected true
cage-6: cage r8c3-r8c4 total 7 connected true
cage-7: cage r2c5-r2c6-r2c7 total 18 connected true
cage-8: cage r2c1-r3c1-r4c1-r5c1-r6c1-r7c1 total 35 connected true
```

```drawing
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[1.4,0.6],[1.2,0.4],[1.8,0.4]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[1.4,0.4],[1.6,0.6]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[0.4,7.6],[0.2,7.4],[0.8,7.4]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0.4,7.4],[0.6,7.6]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[2.2,0.4],[2.6,0.4],[2.4,0.6],[2.8,0.6]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[0.2,5.4],[0.6,5.4],[0.4,5.6],[0.8,5.6]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3.4,0.3],[3.2,0.5],[3.8,0.5]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[3.2,0.5],[3.4,0.7]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[1.4,7.3],[1.2,7.5],[1.8,7.5]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[1.2,7.5],[1.4,7.7]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[4.8,0.7],[4.6,0.5],[4.8,0.3]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[0.8,8.7],[0.6,8.5],[0.8,8.3]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[5.2,0.4],[5.8,0.4]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[5.3,0.4],[5.5,0.6],[5.7,0.4]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[6.2,0.4],[6.8,0.4]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[6.3,0.4],[6.5,0.6],[6.7,0.6],[6.5,0.4]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[6.5,0.6],[6.2,0.6]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[6.7,0.6],[6.8,0.6]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[0.2,4.4],[0.8,4.4]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[0.3,4.4],[0.5,4.6],[0.7,4.6],[0.5,4.4]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[0.5,4.6],[0.2,4.6]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[0.7,4.6],[0.8,4.6]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[4.6,0.5],[4.4,0.7],[4.2,0.5],[4.4,0.3],[4.6,0.5]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[0.6,8.5],[0.4,8.7],[0.2,8.5],[0.4,8.3],[0.6,8.5]],"color":"#c8c8c8ff","thickness":3.84,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[4.1,4.2],[4.2,4.3],[4.3,4.3],[4.3,4.6],[4.5,4.8]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[4.3,4.3],[4.3,3.7],[4.4,3.6],[4.5,3.6],[4.7,3.4],[4.9,3.4],[5,3.5],[5.1,3.5],[5.3,3.3],[5.3,3.2],[5.4,3.1],[5.4,2.9],[5.3,2.8],[5.3,2.7],[5.2,2.6],[5.2,2.5],[5.1,2.5],[5,2.4],[4.9,2.4],[4.7,2.2],[4.6,2.2],[4.5,2.1],[4.5,1.7],[4.9,1.3],[5.2,1.3],[5.3,1.4],[5.5,1.4],[5.5,1.5],[5.4,1.5],[5.4,1.4]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[4.3,4.1],[4.2,4]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[4.3,3.9],[4.2,3.8]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[4.3,3.7],[4.2,3.6]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[5,1.3],[4.6,1.7],[4.6,2],[4.7,2.1],[4.8,2.1],[4.9,2.2],[5,2.2],[5.1,2.3],[5.2,2.3],[5.3,2.4],[5.3,2.5],[5.6,2.8],[5.6,3.3],[5.5,3.3],[5.5,3.4],[5.4,3.5],[5.4,3.6],[5.5,3.7],[5.5,3.8]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[5.4,2.6],[5.5,2.5],[5.7,2.5],[5.7,2.6]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[5.5,2.7],[5.6,2.7],[5.7,2.8],[5.7,2.9]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[5.4,3.5],[5.3,3.6],[5.3,3.7],[5.4,3.8],[5.4,3.9]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[5.3,3.6],[5.2,3.7],[4.9,3.7],[4.9,3.6],[4.7,3.6],[4.5,3.8],[4.5,4.2],[4.6,4.3],[4.6,4.5],[4.5,4.6],[4.5,4.7]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[4.5,4.2],[4.4,4.2]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[4.4,4.3],[4.4,4.4]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[8.8,1.3],[8.65,1.45],[8.7,1.5],[8.6,1.6],[8.65,1.65],[8.75,1.65],[8.75,1.75],[8.7,1.8],[8.8,1.9]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[8.75,1.85],[8.6,1.9],[8.6,2.2],[8.75,2.35],[8.8,2.3]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[8.6,2.3],[8.55,2.35],[8.6,2.4],[8.6,2.6],[8.65,2.65],[8.75,2.65],[8.85,2.55]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[8.65,2.65],[8.55,2.75],[8.55,2.85],[8.65,2.95],[8.6,3],[8.7,3.1]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[8.75,2.65],[8.7,2.7],[8.7,2.8],[8.8,2.9]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[8.65,3.15],[8.6,3.2],[8.6,3.3],[8.65,3.35],[8.75,3.35]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[8.6,3.4],[8.55,3.45],[8.55,3.75],[8.7,3.9],[8.8,3.8]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[8.6,3.9],[8.65,3.95],[8.6,4],[8.7,4.2],[8.8,4.2]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[8.65,4.15],[8.6,4.3],[8.5,4.4],[8.5,4.5],[8.65,4.65],[8.7,4.6],[8.8,4.7],[8.8,4.8]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[8.7,4.6],[8.7,4.5],[8.75,4.45],[8.85,4.45]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[8.8,2],[8.75,2.05],[8.85,2.15]],"color":"#58d63281","thickness":4.48,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[8.8,1.3],[8.65,1.45],[8.7,1.5],[8.6,1.6],[8.65,1.65],[8.75,1.65],[8.75,1.75],[8.7,1.8],[8.8,1.9]],"color":"#41ea6a43","thickness":4.48,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[8.75,1.85],[8.6,1.9],[8.6,2.2],[8.75,2.35],[8.8,2.3]],"color":"#41ea6a43","thickness":4.48,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[8.6,2.3],[8.55,2.35],[8.6,2.4],[8.6,2.6],[8.65,2.65],[8.75,2.65],[8.85,2.55]],"color":"#41ea6a43","thickness":4.48,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[8.65,2.65],[8.55,2.75],[8.55,2.85],[8.65,2.95],[8.6,3],[8.7,3.1]],"color":"#41ea6a43","thickness":4.48,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[8.75,2.65],[8.7,2.7],[8.7,2.8],[8.8,2.9]],"color":"#41ea6a43","thickness":4.48,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[8.65,3.15],[8.6,3.2],[8.6,3.3],[8.65,3.35],[8.75,3.35]],"color":"#41ea6a43","thickness":4.48,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[8.6,3.4],[8.55,3.45],[8.55,3.75],[8.7,3.9],[8.8,3.8]],"color":"#41ea6a43","thickness":4.48,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[8.6,3.9],[8.65,3.95],[8.6,4],[8.7,4.2],[8.8,4.2]],"color":"#41ea6a43","thickness":4.48,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[8.65,4.15],[8.6,4.3],[8.5,4.4],[8.5,4.5],[8.65,4.65],[8.7,4.6],[8.8,4.7],[8.8,4.8]],"color":"#41ea6a43","thickness":4.48,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[8.7,4.6],[8.7,4.5],[8.75,4.45],[8.85,4.45]],"color":"#41ea6a43","thickness":4.48,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[8.8,2],[8.75,2.05],[8.85,2.15]],"color":"#41ea6a43","thickness":4.48,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[2.45,2.25],[2.35,2.35],[2.25,2.35],[2.05,2.55],[1.95,2.55],[1.9,2.6],[1.75,2.65],[1.7,2.7],[1.75,2.75],[1.85,2.75],[1.95,2.85],[2,2.8],[2.1,2.9],[2.2,2.9],[2.2,3],[2.35,3.15],[2.35,3.25],[2.55,3.45],[2.55,3.55],[2.6,3.6],[2.6,3.2],[2.55,3.15],[2.55,3.05],[2.45,2.95],[2.45,2.85],[2.5,2.7],[2.6,2.6],[2.6,2.5],[2.8,2.3],[2.75,2.25],[2.65,2.25],[2.6,2.3],[2.45,2.15],[2.5,2.1],[2.5,2],[2.55,1.95],[2.55,1.85],[2.6,1.8],[2.65,1.65],[2.65,1.35],[2.5,1.5],[2.5,1.6],[2.4,1.7],[2.4,1.8],[2.3,1.9],[2.3,2],[2.2,2.1],[2.15,2.25],[2.05,2.35],[1.95,2.35],[1.75,2.55],[1.65,2.55],[1.65,2.65],[1.7,2.7]],"color":"#e69e1f83","thickness":3.84,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[1.85,2.65],[2.05,2.65],[2.15,2.75],[2.25,2.75],[2.35,2.85]],"color":"#e69e1f83","thickness":3.84,"rounded":true}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[2.6,4.2],[2.65,4.25],[2.65,4.35],[2.55,4.45],[2.45,4.65],[2.3,4.8],[2.3,5],[2.4,5.1],[2.4,5.2],[2.6,5.4],[2.6,5.7],[2.65,5.75],[2.65,6.35],[2.7,6.4],[2.7,6.5],[2.8,6.6],[3,6.6],[3.05,6.55],[3.25,6.55],[3.45,6.75],[3.45,7.25],[3.4,7.4],[3.4,7.8],[3.45,7.85],[3.45,7.95],[3.5,8],[3.55,8.15],[3.55,8.55],[3.6,8.6],[3.6,8.8]],"color":"#265ae952","thickness":7.04,"rounded":true}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[8.75,6.25],[8.6,6.4],[8.5,6.4],[8.45,6.45],[8.4,6.4],[8.25,6.55],[8.25,6.65],[8.2,6.7],[8.1,6.7],[8,6.6],[7.9,6.6],[7.85,6.55],[7.75,6.55],[7.65,6.65],[7.65,6.75],[7.6,6.8],[7.6,7.1],[7.55,7.15],[7.55,7.25],[7.15,7.65],[7.05,7.65],[6.95,7.75],[6.85,7.75],[6.7,7.9],[6.7,8],[6.65,8.05],[6.6,8.2],[6.6,8.3],[6.55,8.35],[6.55,8.45],[6.5,8.5],[6.5,8.6],[6.45,8.65],[6.45,8.75],[6.4,8.8]],"color":"#265ae952","thickness":7.04,"rounded":true}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[3.8,3.7],[3.6,3.5],[3.8,3.3]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[3.4,4.6],[3.2,4.4],[3.8,4.4]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[3.4,4.4],[3.6,4.6]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[3.2,5.4],[3.8,5.4]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[3.3,5.4],[3.5,5.6],[3.7,5.6],[3.5,5.4]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[3.5,5.6],[3.2,5.6]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[3.7,5.6],[3.8,5.6]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[4.2,5.4],[4.8,5.4]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[4.3,5.4],[4.5,5.6],[4.7,5.4]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[5.2,4.4],[5.6,4.4],[5.4,4.6],[5.8,4.6]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[5.4,5.3],[5.2,5.5],[5.8,5.5]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[5.2,5.5],[5.4,5.7]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[3.6,3.5],[3.4,3.7],[3.2,3.5],[3.4,3.3],[3.6,3.5]],"color":"#b3fafaff","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.75,2.5],"width":0,"height":0.551,"rounded":true,"thickness":0,"angle":0,"text":"Lonely Mountain","textColor":"#d89110ff","fontSize":20.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.75,7.25],"width":0,"height":0.551,"rounded":true,"thickness":0,"angle":0,"text":"Running River","textColor":"#7f7ff4ff","fontSize":20.8,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.25,3],"width":0,"height":0.551,"rounded":true,"thickness":0,"angle":0,"text":"Mirkwood","textColor":"#16bb73ff","fontSize":20.8,"textStroke":"#ffffffff","textStrokeWidth":1}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.25,7],"width":0,"height":0.551,"rounded":true,"thickness":0,"angle":324,"text":"Forest River","textColor":"#7c94f3ff","fontSize":20.8,"textStroke":"#ffffff","textStrokeWidth":1}}
```

The moon was shining in a broad silver crescent. Elrond held up the map and the white light shone through it. "What is this?" he said. "There are moon-letters here, beside the plain runes... they can only be seen when the moon shines behind them..."

Normal sudoku rules apply.

Begin by transcribing (cloning) Bill's digits from the previous puzzle into the Forest River.

In cages, digits do not repeat, and must sum to the given total.

Adjacent digits along the dragon motif must differ by at least 5.

Cells containing the same Rune contain the same digit.

Note: Shading is cosmetic only.
