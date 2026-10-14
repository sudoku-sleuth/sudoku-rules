---
format: open-rules
title: Never Ending Story, Chapter 1, 6, 11, ...
setter: sujoyku
source: https://sudokupad.app/jv20p8ncqh
case: https://sudoku-sleuth.com/cases/never-ending-story-chapter-1-6-11
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - We have only read part of the published answer so far.
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
    - - r3c1
      - r3c2
      - r3c3
      - r4c1
      - r4c2
      - r4c3
    - - r3c4
      - r3c5
      - r3c6
      - r4c4
      - r4c5
      - r4c6
    - - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
exported: 531fc27b9155f19bfef85c30467d1270
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
pair-1: pair r5c1-r5c2 sum 10
pair-2: pair r3c1-r4c1 sum 5
pair-3: pair r4c5-r4c6 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#cae2f5ff","stroke":"#96c6ecff","thickness":1.28,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbebbdff","stroke":"#FFFFFF","thickness":1.28,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbebbdff","stroke":"#FFFFFF","thickness":1.28,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbebbdff","stroke":"#FFFFFF","thickness":1.28,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbebbdff","stroke":"#FFFFFF","thickness":1.28,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbebbdff","stroke":"#FFFFFF","thickness":1.28,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fbebbdff","stroke":"#FFFFFF","thickness":1.28,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0,"height":0.582,"rounded":true,"thickness":0,"angle":0,"text":"🐳","textColor":"#000000","fontSize":22,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.6,4.4],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"🐠","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.3,3.3],"width":0,"height":0.426,"rounded":true,"thickness":0,"angle":0,"text":"🐚","textColor":"#000000","fontSize":16,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[0.7,0.3],[0.75,0.35],[0.75,0.45],[0.8,0.5],[0.8,0.6],[0.85,0.65],[0.85,0.75]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[2.4,0.7],[2.45,0.75],[2.45,0.85],[2.5,0.9],[2.5,1],[2.55,1.05]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[1.3,3.4],[1.35,3.45],[1.35,3.55],[1.4,3.6],[1.4,3.7],[1.45,3.75]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[2.8,4.9],[2.85,4.95],[2.85,5.05],[2.9,5.1],[2.9,5.2],[2.95,5.25]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[4.4,1.5],[4.45,1.55],[4.45,1.65],[4.5,1.7],[4.5,1.8],[4.55,1.85]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[4.4,3.8],[4.45,3.85],[4.45,3.95],[4.5,4],[4.5,4.1],[4.55,4.15]],"color":"#FFFFFF","thickness":1.28,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[3.5,4.5],[4.5,5.5]],"color":"#68c1f3ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,3.5],[2.5,3.5]],"color":"#68c1f3ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[5.5,4.5]],"color":"#68c1f3ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,2.5],[4.5,2.5]],"color":"#f2b251ff","thickness":9.6,"rounded":true}}
```

OCEAN

You are setting sail to cross the sea.

- - -

Rules:

- Normal 6x6 sudoku rules apply, i.e. each row, column and 2x3 region has to contain the digits from 1 to 6 once each.

- Counting Differences: The difference between two adjacent digits on a coloured line indicates exactly how many pairs of adjacent digits along that line have that exact difference.
Example: If two adjacent digits have a difference of 2, there are exactly two pairs of adjacent digits along the line that have a difference of 2. For example, a valid line could read 2465 (two differences of 2 and one difference of 1), but not 2464 since here occur three differences of 2.

- XV: Digits joined by a V sum to 5. Digits joined by an X must sum to 10. (Not all XV are given.)
