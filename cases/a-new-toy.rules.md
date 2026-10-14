---
fog:
  initiallyLit:
    - r2c1
    - r2c3
    - r3c1
    - r3c3
    - r4c4
    - r4c5
    - r4c6
    - r5c4
    - r5c5
    - r5c6
    - r6c4
    - r6c5
    - r6c6
format: open-rules
title: A New Toy
setter: Sandra & Nala
source: https://sudokupad.app/tn803fvj3m
case: https://sudoku-sleuth.com/cases/a-new-toy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c6=9 r2c1=3 r3c3=7 r4c2=2 r6c2=9 r6c7=3 r8c8=1
exported: 57a1c23492bc38b56d50e031e053b5e3
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r2c4 black
kropki-2: kropki r5c8-r6c8 black
kropki-3: kropki r9c6-r9c7 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.72,"height":0.72,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.72,"height":0.72,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.72,"height":0.72,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0.72,"height":0.72,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":0.72,"height":0.72,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0.72,"height":0.72,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,1.5],"width":0.72,"height":0.72,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":3.84,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.2,0.3],[2.15,0.25],[2.3,0.2],[2.35,0.15],[2.45,0.15],[2.5,0.1],[2.6,0.1]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.2,5.3],[1.15,5.25],[1.25,5.25],[1.35,5.15],[1.2,5.2],[1.15,5.25]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.15,5.25],[1.15,5.15],[1.2,5.1],[1.4,5.1],[1.35,5.15],[1.15,5.15]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.15,5.15],[1.15,5.05]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.2,6.7],[4.15,6.75],[4.15,6.85],[4.2,6.9],[4.4,6.9],[4.45,6.95],[4.55,6.95],[4.5,6.9],[4.4,6.9]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.15,6.75],[4.25,6.75],[4.4,6.9]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.2,6.9],[4.15,6.95]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.3,6.8],[4.2,6.8],[4.25,6.85],[4.35,6.85]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.25,6.25],[4.2,6.3],[4.15,6.25],[4.15,6.15],[4.25,6.05],[4.3,6.1],[4.6,6.1]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[4.4,6.1],[4.35,6.15],[4.2,6.2],[4.25,6.15],[4.35,6.15]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.55,0.95],[2.5,0.9],[2.4,0.9],[2.35,0.95],[2.3,0.9],[2.2,0.9],[2.15,0.85],[2.15,0.65],[2.4,0.9]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.5,0.9],[2.45,0.85],[2.25,0.85],[2.2,0.8],[2.2,0.7]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[2.35,0.05],[2.45,0.05],[2.5,0.1],[2.3,0.1],[2.15,0.25],[2.15,0.15],[2.2,0.1],[2.3,0.1]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[2.55,0.05],[2.65,0.05]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0.2,2.7],[0.15,2.75],[0.15,2.95],[0.25,2.85],[0.3,2.9],[0.4,2.9],[0.45,2.85],[0.55,2.95],[0.6,2.9],[0.5,2.9]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[0.15,2.75],[0.25,2.75],[0.3,2.8],[0.4,2.8],[0.45,2.85]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[0.15,2.85],[0.25,2.75]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0.2,2.3],[0.15,2.25],[0.2,2.2],[0.35,2.15],[0.4,2.1],[0.6,2.1]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[0.35,2.15],[0.25,2.25],[0.15,2.25],[0.15,2.05],[0.25,2.15],[0.3,2.1],[0.4,2.1],[0.45,2.15],[0.5,2.1]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[1.6,5.9],[1.55,5.85],[1.5,5.9],[1.4,5.9],[1.35,5.85],[1.45,5.85],[1.5,5.9]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[6.25,2.05],[6.2,2.1],[6.4,2.1],[6.45,2.05]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[6.5,2.1],[6.55,2.15]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[6.35,2.85],[6.45,2.95],[6.55,2.85]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[1.15,5.95],[1.2,5.9],[1.3,5.9],[1.35,5.85],[1.15,5.85],[1.2,5.9]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[1.15,5.85],[1.15,5.75],[1.2,5.7],[1.35,5.85],[1.25,5.75]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[1.25,5.75],[1.2,5.8],[1.3,5.8]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[1.4,5.1],[1.45,5.05],[1.55,5.05],[1.5,5.1],[1.4,5.1]],"color":"#f9b340ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3.2,4.2],[3.2,3.6],[3.25,3.45]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[3.3,3.8],[3.35,3.75],[3.45,3.55],[3.5,3.5],[4.1,3.5]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[4.05,3.45],[4,3.5],[3.5,3.5],[3.35,3.45],[3.35,3.55],[3.3,3.6],[3.3,3.4],[3.35,3.45]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[3.9,3.5],[3.85,3.55],[3.7,3.6],[3.35,3.95],[3.35,4.05],[3.3,4.1],[3.3,4.2],[3.4,4.3],[3.45,4.25],[3.55,4.25],[3.5,4.2],[3.45,4.25]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[3.35,3.45],[3.35,3.35],[3.3,3.4],[3.4,3.4],[3.75,3.35],[4.4,3.3],[4.35,3.35],[3.85,3.35],[3.6,3.3],[3.4,3.3],[3.35,3.35]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[3.4,4.3],[3.3,4.4],[3.25,4.55],[3.25,4.85],[3.3,4.9],[3.5,4.8],[3.25,5.05],[3.25,5.25],[3.45,5.05],[3.45,5.15],[3.4,5.2],[3.4,5.3],[3.35,5.35],[3.25,5.35],[3.25,5.25]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[3.25,5.35],[3.25,5.45],[3.3,5.5],[4.1,5.5],[4.15,5.55],[4.25,5.55],[4.4,5.4],[4.7,5.7],[5.2,5.7],[5.45,5.65],[5.75,5.65],[5.65,5.55],[5.45,5.55],[5.45,5.45],[5.6,5.4],[5.7,5.3],[5.7,5.4],[5.45,5.65]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[5.45,5.65],[5.35,5.65],[5.4,5.6],[5.6,5.6],[5.65,5.55]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[5.6,5.6],[5.45,5.75],[5.15,5.75],[5.1,5.7],[4.8,5.6],[4.5,5.6]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[4.8,5.6],[4.9,5.6],[4.95,5.55],[5.35,5.45],[5.45,5.45],[5.45,5.25],[5.55,5.15],[5.65,4.95],[5.75,4.85],[5.75,4.65],[5.7,4.6],[5.7,4.3],[5.75,4.15],[5.75,3.65],[5.75,3.75],[5.7,4.1],[5.55,4.05],[4.9,3.4],[4.75,3.35],[4.7,3.3],[4.6,3.3],[4.55,3.25],[4.25,3.15],[3.95,3.15],[3.8,3.2],[3.55,3.25],[3.5,3.3]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[5.7,5.3],[5.7,5.2]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[5.75,3.65],[5.75,3.55]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[5.7,4.2],[5.7,4.1],[5.4,3.8],[4.95,3.45],[5,3.4],[5.7,3.4],[5.7,4.1]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[5.2,3.4],[5.15,3.45],[5.3,3.5],[5.45,3.65],[5.65,3.75],[5.3,3.4]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[5.35,5.65],[5.05,5.65],[5.25,5.65]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[3.4,5.6],[3.5,5.6],[3.65,5.55],[4.15,5.55],[3.95,5.55]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[3.5,5.6],[3.8,5.6],[3.95,5.55]],"color":"#fff7e4ff","thickness":16,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[4.5,4.7],[4.2,4.4],[4.05,4.35],[4.05,4.45],[4.95,4.95],[4.3,4.3],[4.1,4.2],[4.2,4.3],[4.4,4.4],[4.65,4.55],[4.8,4.7],[4.2,4.3]],"color":"#b1e7ffff","thickness":23.04,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[4.2,4.3],[4.1,4.3],[5.1,4.9],[5.2,4.9],[5.05,4.85],[4.8,4.7],[5.1,4.8],[5.1,4.7],[4.7,4.5],[4.4,4.4],[3.9,4.1],[3.9,4],[4,4],[4.7,4.2],[4.95,4.35],[5.1,4.5],[4.5,3.9],[4.35,3.85],[4.15,3.75],[3.85,3.75],[3.7,3.8],[3.55,3.95],[3.4,4.2],[3.4,4.5],[3.45,4.75],[3.4,4.3],[3.4,4.2]],"color":"#b1e7ffff","thickness":23.04,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[5.05,4.85],[5.05,4.75],[5,4.6],[4.85,4.45],[3.85,4.05],[3.8,4.4],[3.95,4.55],[4.7,5],[4.9,5.2],[4.8,5.2],[4.85,5.15],[4.7,5.2],[4.5,5.3],[4.4,5.3],[4.55,5.25],[4.8,5.3],[5.5,5.1],[5.45,4.65],[5.4,4.5],[5.2,4.1],[4.95,3.85],[4.75,3.75],[4.3,3.6],[3.8,3.6],[3.65,3.65],[3.6,3.7],[3.45,3.95],[3.45,4.85],[3.5,4.9],[3.5,5.1],[3.6,5.2],[3.75,5.25],[4.55,5.25]],"color":"#b1e7ffff","thickness":23.04,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[5.2,4.9],[4.9,5.1],[4.7,5.1],[4.45,5.05],[4.05,5.05],[3.65,4.75],[3.75,3.95],[3.85,3.95],[4.2,4],[4.75,4.35],[4.8,4.9],[4.75,4.95],[4.65,4.95],[4.4,4.9],[4.2,4.9],[4.65,5.15],[4.8,5.2],[4.75,5.25],[4.55,5.25],[4.15,5.05],[4,5],[3.85,4.75],[3.7,4.6],[3.7,4.4],[3.8,4.3],[3.95,4.25],[4.35,4.25],[4.45,4.15],[4.45,4.05],[4.05,3.65],[3.95,3.65],[4.15,3.55],[4.75,3.55],[4.85,3.65],[5.05,3.75],[5.15,3.85],[5.4,4.2],[5.5,4.3],[5.55,4.45],[5.65,4.55],[5.75,4.85],[5.75,4.95],[5.6,5.3],[5.5,5.3],[5.05,5.45],[4.55,5.45],[3.9,5.3],[3.8,5.3],[3.6,5.2],[3.4,5.2],[3.55,5.25],[3.5,5.3],[3.45,5.25],[3.4,5],[3.4,4.3]],"color":"#b1e7ffff","thickness":23.04,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[3.5,4.9],[3.8,5.2],[3.45,4.85],[3.5,4.8],[3.55,4.85],[3.55,4.95],[3.5,5],[3.6,5.1],[3.85,5.25],[4.15,5.35],[3.8,5.2]],"color":"#b1e7ffff","thickness":23.04,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[3.45,4.85],[3.45,5.15],[3.55,5.25],[3.9,5.3],[4.05,5.35],[4.35,5.35],[4.4,5.3],[4.55,5.35],[4.75,5.35],[4.6,5.4],[4.5,5.4],[4.15,5.35],[4.4,5.4],[4.55,5.45],[4.85,5.45],[4.7,5.5],[4.5,5.5],[3.75,5.45],[3.65,5.45],[3.4,5.2],[3.4,5.1],[3.35,5.05],[3.35,4.25],[3.4,4.2],[3.45,4.25],[3.45,4.35],[3.5,4.7],[3.55,4.95],[3.65,5.15],[3.95,5.25],[3.8,5.2]],"color":"#b1e7ffff","thickness":23.04,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[4.55,5.25],[4.3,5.1],[4.1,5],[3.6,4.5],[3.6,4.6],[3.85,4.85],[3.95,4.85],[3.8,4.7],[3.6,4.4],[3.55,4.35],[3.6,4.5]],"color":"#b1e7ffff","thickness":23.04,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[3.6,4.5],[3.7,4.4],[3.65,4.25],[3.65,3.95],[3.95,3.65],[3.9,3.7],[3.7,4.2],[3.7,4.4]],"color":"#b1e7ffff","thickness":23.04,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[3.5,4.2],[3.55,4.35],[4.25,4.85],[4.6,5],[4.7,5],[4.7,4.9],[4.55,4.85],[4.3,4.7],[3.9,4.5],[3.8,4.5],[3.8,4.6],[3.85,4.65],[4.2,4.9],[4.05,4.85],[3.95,4.85],[4.1,5],[4.4,5.1],[5.1,5.1],[4.9,4.4],[4.4,4.1],[4.1,4.1],[3.95,4.15],[3.75,4.25],[4,4.7]],"color":"#b1e7ffff","thickness":23.04,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[4.4,5.3],[3.95,5.25],[4.1,5.3],[4.4,5.3]],"color":"#b1e7ffff","thickness":23.04,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[3.5,4.7],[3.5,4.9],[3.75,5.15],[3.9,5.2],[3.95,5.25],[4.15,5.25],[4.3,5.2],[4.4,5.2]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[4.3,5.2],[4.15,5.15]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[3.55,4.65],[3.6,4.7],[3.7,4.7],[4.25,4.95],[4.4,5],[4.5,5],[4.55,5.05],[4.75,5.05],[4.9,5],[5.3,4.9],[4.8,5],[4.5,5]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[4.4,5],[4.3,5],[4.65,4.95],[5.15,4.95],[5.3,4.9],[5.4,4.8],[5.25,4.65],[5.25,4.75],[5.3,4.8],[5.3,4.9]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[4.5,5],[4.45,4.95],[4.3,4.7],[4,4.5],[3.75,4.45],[4.1,4.9],[4.3,5],[4,5],[3.7,4.8],[3.7,4.7],[4.2,4.5],[4.5,4.6],[4.65,4.85],[4.65,4.95],[4.35,4.95],[4.3,4.9],[4.35,4.85],[5.35,4.85]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[5.3,4.9],[4.4,4.6],[4.65,4.55],[5.25,4.65],[5.3,4.7],[5.4,4.7],[5.45,4.75]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[4.3,5],[4.2,5],[4.15,4.95],[3.95,4.95],[4,5],[4.15,5.05],[4.55,5.05],[4.5,5.1],[4,5]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[4,5],[3.8,4.9],[3.7,4.8],[3.65,4.65],[3.65,4.35],[3.7,4.2],[3.75,4.15],[3.9,4.1],[4,4],[4.15,3.95],[4.65,3.95],[4.75,4.05],[4.55,3.95]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[5.15,4.95],[5.1,5],[5,5],[4.6,5.1],[4.1,5.1],[3.55,4.55],[3.65,4.45],[3.75,4.45],[3.75,4.35],[3.9,4.2],[4.2,4.1],[4.6,4.2],[4.8,4.4],[4.75,4.45],[4.55,4.45],[4.4,4.4],[4.15,4.15],[4.1,4],[4.15,3.95],[4.3,3.9],[4.6,3.9],[4.65,3.95],[4.8,4],[5.1,4.5],[5.1,4.6],[5.05,4.65],[4.6,4.3],[4.55,4.25],[4.75,4.25],[5.1,4.4],[5.4,4.7]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[4.45,3.95],[4.3,4],[4.3,4.2],[4.4,4.3],[4.9,4.4],[4.9,4.2],[4.9,4.2]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[4.9,4.2],[5.25,4.55],[5.25,4.65],[5.2,4.6],[5.15,4.45]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[3.6,4.6],[3.6,4.3],[3.65,4.25],[3.65,4.15],[3.95,3.85],[4.05,3.85],[4.2,3.8],[4.4,3.8],[4.45,3.85],[4.55,3.85],[4.7,3.9],[5,4.2],[5.1,4.4]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[3.85,4.25],[4.15,4.25],[4.7,4.6],[4.7,4.7],[4.4,4.7],[4.05,4.65],[3.85,4.55],[3.8,4.5],[3.8,4.3],[3.85,4.25]],"color":"#9ee1fbff","thickness":23.04,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[3.6,3.7],[3.75,3.65],[3.85,3.65],[4,3.6],[4.5,3.6],[4.55,3.65],[4.65,3.65],[4.7,3.7],[4.6,3.7],[4.45,3.65],[4.55,3.65]],"color":"#bcebfdff","thickness":11.52,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[4.65,3.65],[5,3.8],[5.15,3.95],[5.1,4],[4.9,3.9],[4.85,3.85],[4.7,3.8],[4.65,3.75],[4.85,3.75]],"color":"#bcebfdff","thickness":11.52,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[4.15,3.65],[4.45,3.65],[4.25,3.65]],"color":"#bcebfdff","thickness":11.52,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[4.15,5.45],[3.95,5.45],[3.8,5.4],[3.85,5.45],[3.95,5.45]],"color":"#bcebfdff","thickness":11.52,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[3.35,4.75],[3.35,4.85],[3.4,4.9],[3.45,5.05],[3.45,5.15],[3.7,5.4],[3.8,5.4],[3.45,5.05]],"color":"#bcebfdff","thickness":11.52,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[5.35,5.25],[5.25,5.25],[4.9,5.3],[5,5.3],[5.15,5.25],[5.25,5.25]],"color":"#bcebfdff","thickness":11.52,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[4.9,5.3],[4.8,5.3],[4.75,5.35],[4.8,5.4],[5.2,5.4],[5.25,5.35],[5.35,5.35],[5.4,5.3],[5.3,5.3],[5.25,5.35]],"color":"#bcebfdff","thickness":11.52,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[5.1,5.4],[5.05,5.45],[4.75,5.45],[4.7,5.4],[4.85,5.35],[5.25,5.35],[5.5,5.2],[5.4,5.3]],"color":"#bcebfdff","thickness":11.52,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[5.45,5.25],[5.55,5.25],[5.75,5.05],[5.75,4.85],[5.4,5.2],[5.3,5.2],[5.45,5.15]],"color":"#bcebfdff","thickness":11.52,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[4.7,5.4],[4.6,5.4]],"color":"#bcebfdff","thickness":11.52,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[5.7,4.9],[5.65,4.85],[5.4,5.1],[5.2,5.2]],"color":"#bcebfdff","thickness":11.52,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[3.95,5.75],[3.9,5.7],[3.9,5.8],[3.85,5.75],[3.9,5.7]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[3.9,5.7],[3.95,5.65],[4.05,5.75],[4.1,5.7],[4.05,5.65]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[4.5,5.7],[4.35,5.65],[4.55,5.85],[4.55,5.75],[4.45,5.75]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[4.45,5.75],[4.4,5.8],[4.45,5.85],[4.5,5.8]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[4.6,5.8],[4.7,5.8],[4.75,5.85],[4.8,5.8],[4.85,5.85],[4.9,5.8]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[5.45,5.85],[5.55,5.85],[5.6,5.8],[5.65,5.85],[5.65,5.75],[5.75,5.85],[5.8,5.8],[5.85,5.85],[5.85,5.75],[5.8,5.7]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[5.9,5.4],[5.8,5.5]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[5.85,5.45],[5.85,5.35]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[5.9,5.2],[5.85,5.15],[5.8,5.2],[5.8,5.3]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[5.85,4.45],[5.85,4.65]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[5.75,4.25],[5.85,4.35],[5.9,4.3],[5.9,4.2],[5.85,4.25],[5.85,4.35]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[5.85,4.35],[5.9,4.4],[5.9,4.5],[5.8,4.5],[5.7,4.4],[5.65,4.25],[5.75,4.35]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[5.85,3.65],[5.85,3.55],[5.7,3.4],[5.7,3.5],[5.75,3.45]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[5.75,3.45],[5.7,3.4],[5.7,3.3],[5.75,3.25],[5.85,3.35],[5.85,3.45]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[5.65,3.35],[5.55,3.35],[5.6,3.3],[5.7,3.3]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[5.85,3.35],[5.85,3.25],[5.8,3.2],[5.75,3.25],[5.7,3.2],[5.8,3.2]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[5.85,3.25],[5.85,3.15],[5.8,3.2],[5.75,3.15],[5.65,3.15],[5.7,3.2]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[5.55,3.35],[5.4,3.2],[5.4,3.4],[5.3,3.2],[5.35,3.25],[5.25,3.25],[5.2,3.2],[5.3,3.2]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[5.65,3.25],[5.65,3.15],[5.45,3.15],[5.4,3.2],[5.55,3.25],[5.6,3.2],[5.55,3.15]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[5.4,3.2],[5.3,3.2],[5.25,3.15],[5.45,3.15]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[4.85,3.25],[4.7,3.1],[4.65,3.15],[4.75,3.25]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[4.7,3.2],[4.6,3.2],[4.55,3.15],[4.6,3.1],[4.65,3.15],[4.55,3.15]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[4.55,3.15],[4.5,3.2],[4.5,3.1],[4.45,3.05],[4.4,3.1]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"line","points":[[3.6,3.1],[3.35,3.15],[3.35,3.25],[3.25,3.25],[3.3,3.3],[3.2,3.3],[3.25,3.35]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"line","points":[[3.4,3.2],[3.3,3.2],[3.35,3.15],[3.25,3.15],[3.3,3.2]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"line","points":[[3.1,4.3],[3.1,4.7],[3.15,4.85],[3.15,4.95]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"line","points":[[3.1,5],[3.05,5.15],[3.1,5.3],[3.2,5.4],[3.1,5.5],[3.15,5.55],[3.25,5.55],[3.25,5.75],[3.3,5.8],[3.4,5.7],[3.55,5.75],[3.45,5.75],[3.4,5.7]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"line","points":[[3.4,5.7],[3.3,5.6],[3.3,5.5]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"line","points":[[3.85,5.75],[3.8,5.8],[3.7,5.7],[3.7,5.8],[3.8,5.7],[3.85,5.75]],"color":"#d3ffe2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,3.5],[1.5,4.5],[1.5,4.3]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.3,4.5]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[1.5,6.5],[2.5,7.5],[2.5,7.3]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[2.3,7.5]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,7.5],[6.5,7.5],[6.4,7.4]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.4,7.6]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,1.5],[1.5,2.5],[1.6,2.4]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[1.4,2.4]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"line","points":[[0.3,2.2],[0.35,2.15],[0.45,2.15]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"line","points":[[1.35,5.15],[1.45,5.15],[1.35,5.25]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"line","points":[[4.35,6.75],[4.5,6.9]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"line","points":[[4.25,6.25],[4.35,6.25],[4.45,6.15],[4.55,6.15],[4.6,6.1]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"line","points":[[4.15,6.95],[4.2,6.9]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"line","points":[[2.2,0.2],[2.25,0.25],[2.35,0.15]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"line","points":[[6.5,2.7],[6.5,4.5],[6.6,4.4]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"line","points":[[6.5,2.8],[6.6,2.9],[6.3,2.9],[6.35,2.85],[6.45,2.85],[6.5,2.9]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"line","points":[[6.6,2.9],[6.65,2.85],[6.6,2.8]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.4,4.4]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"line","points":[[6.45,2.85],[6.4,2.8],[6.3,2.8],[6.35,2.85],[6.3,2.8]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"line","points":[[6.35,2.85],[6.25,2.85],[6.2,2.8],[6.35,2.65]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"line","points":[[6.3,2.8],[6.2,2.8],[6.2,2.9],[6.25,2.95],[6.3,2.9],[6.2,2.9]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"line","points":[[6.3,2.3],[6.25,2.25],[6.35,2.25],[6.25,2.15],[6.25,2.25]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"line","points":[[6.25,2.25],[6.2,2.2],[6.25,2.15],[6.3,2.2],[6.45,2.15],[6.65,2.15],[6.6,2.1],[6.5,2.1]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"line","points":[[6.45,2.15],[6.4,2.1],[6.35,2.15],[6.3,2.1],[6.2,2.1],[6.2,2.2],[6.5,2.2],[6.55,2.15]],"color":"#f5b541ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"line","points":[[5.7,0.1],[5.6,0.1],[5.65,0.15],[5.55,0.15],[5.5,0.2],[5.6,0.2],[5.55,0.25],[5.6,0.3],[5.7,0.3],[5.6,0.4],[5.6,0.3]],"color":"#c4f2b5ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"line","points":[[5.6,0.1],[5.5,0.1],[5.45,0.15],[5.5,0.2],[5.4,0.1],[5.35,0.15],[5.45,0.25],[5.4,0.2],[5.35,0.25],[5.4,0.3],[5.3,0.4],[5.35,0.45],[5.45,0.45],[5.5,0.4],[5.55,0.25],[5.5,0.3],[5.6,0.3]],"color":"#c4f2b5ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"line","points":[[5.9,0.3],[5.95,0.25],[5.95,0.35],[5.85,0.45],[5.75,0.35],[5.65,0.35],[5.65,0.45],[5.75,0.45],[5.8,0.4]],"color":"#c4f2b5ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"line","points":[[5.85,0.45],[5.8,0.5],[5.8,0.4],[5.5,0.4],[5.5,0.5],[5.6,0.5],[5.65,0.45],[5.65,0.55],[5.75,0.55],[5.8,0.5]],"color":"#c4f2b5ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"line","points":[[5.75,0.05],[5.8,0.1],[5.85,0.05],[5.75,0.05]],"color":"#f0840aff","thickness":4.48,"rounded":true}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"line","points":[[5.75,0.05],[5.65,0.15],[5.65,0.25],[5.75,0.35],[5.85,0.35],[5.95,0.25],[5.95,0.15],[5.85,0.05]],"color":"#f0840aff","thickness":4.48,"rounded":true}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"line","points":[[5.85,0.35],[5.8,0.3],[5.75,0.35]],"color":"#f0840aff","thickness":4.48,"rounded":true}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"line","points":[[5.8,0.2],[5.9,0.2],[5.85,0.25],[5.8,0.2]],"color":"#e97b3dff","thickness":1.92,"rounded":true}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"line","points":[[5.9,0.2],[5.85,0.15],[5.8,0.2],[5.8,0.3],[5.85,0.25],[5.9,0.3],[5.95,0.25],[5.95,0.15],[5.9,0.1],[5.85,0.15]],"color":"#e97b3dff","thickness":1.92,"rounded":true}}
- {"id":"drawing-148","rules":[],"visual":{"kind":"line","points":[[5.85,0.15],[5.8,0.1],[5.7,0.2],[5.8,0.2],[5.75,0.25],[5.8,0.3]],"color":"#e97b3dff","thickness":1.92,"rounded":true}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"line","points":[[5.9,0.3],[5.85,0.35],[5.75,0.35],[5.7,0.3],[5.75,0.25],[5.7,0.2]],"color":"#e97b3dff","thickness":1.92,"rounded":true}}
- {"id":"drawing-150","rules":[],"visual":{"kind":"line","points":[[5.9,0.1],[5.85,0.05],[5.75,0.05],[5.7,0.1],[5.8,0.2],[5.8,0.1]],"color":"#e97b3dff","thickness":1.92,"rounded":true}}
- {"id":"drawing-151","rules":[],"visual":{"kind":"line","points":[[5.7,0.3],[5.65,0.25],[5.65,0.15],[5.7,0.1]],"color":"#e97b3dff","thickness":1.92,"rounded":true}}
- {"id":"drawing-152","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#FFFFFF","stroke":"#f5b541ff","thickness":3.84,"angle":0}}
- {"id":"drawing-153","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#FFFFFF","stroke":"#f5b541ff","thickness":3.84,"angle":0}}
- {"id":"drawing-154","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#FFFFFF","stroke":"#f5b541ff","thickness":3.84,"angle":0}}
- {"id":"drawing-155","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#FFFFFF","stroke":"#f5b541ff","thickness":3.84,"angle":0}}
- {"id":"drawing-156","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#FFFFFF","stroke":"#f5b541ff","thickness":3.84,"angle":0}}
- {"id":"drawing-160","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.4,0.4],"width":0.04,"height":0.04,"rounded":true,"fill":"#e49108ff","stroke":"#95582eff","thickness":1.28,"angle":0}}
- {"id":"drawing-161","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.4,0.6],"width":0.04,"height":0.04,"rounded":true,"fill":"#e49108ff","stroke":"#95582eff","thickness":1.28,"angle":0}}
- {"id":"drawing-162","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.4,2.4],"width":0.04,"height":0.04,"rounded":true,"fill":"#e49108ff","stroke":"#95582eff","thickness":1.28,"angle":0}}
- {"id":"drawing-163","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.4,2.6],"width":0.04,"height":0.04,"rounded":true,"fill":"#e49108ff","stroke":"#95582eff","thickness":1.28,"angle":0}}
- {"id":"drawing-164","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.4,5.4],"width":0.04,"height":0.04,"rounded":true,"fill":"#e49108ff","stroke":"#95582eff","thickness":1.28,"angle":0}}
- {"id":"drawing-165","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.4,5.6],"width":0.04,"height":0.04,"rounded":true,"fill":"#e49108ff","stroke":"#95582eff","thickness":1.28,"angle":0}}
- {"id":"drawing-166","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.4,6.4],"width":0.04,"height":0.04,"rounded":true,"fill":"#e49108ff","stroke":"#95582eff","thickness":1.28,"angle":0}}
- {"id":"drawing-167","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.4,6.6],"width":0.04,"height":0.04,"rounded":true,"fill":"#e49108ff","stroke":"#95582eff","thickness":1.28,"angle":0}}
- {"id":"drawing-168","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.4,2.4],"width":0.04,"height":0.04,"rounded":true,"fill":"#e49108ff","stroke":"#95582eff","thickness":1.28,"angle":0}}
- {"id":"drawing-169","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.4,2.6],"width":0.04,"height":0.04,"rounded":true,"fill":"#e49108ff","stroke":"#95582eff","thickness":1.28,"angle":0}}
```

Nala is at the lake looking for a new toy. Sometimes she gets lucky and other dogs or dog owners leave their toys somewhere. Whenever she finds one of those it’s like birthday and Christmas combined! Will she get lucky today?

The grid is partially covered in fog. Entering correct digits will clear the fog from surrounding cells, possibly revealing more clues.

Normal Nurikabe rules apply for every box except box 5, which is neither "ice", nor "safe path"

Shade some cells (safe path) such that all shaded cells are orthogonally connected and no 2x2 is entirely shaded.

Every contiguous set of unshaded cells is ice. Each ice area has to contain exactly one circled cell. The circled digit indicates the size of that ice area. Iced areas cannot touch each other orthogonally, but may do so diagonally. Additionally, every iced area contains each number from 1 to its size (the circled digit) exactly once.

Normal sudoku rules apply. Place the digits 1-9 in every row, column and 3x3 box exactly once each.

Nala is curiously searching the safe path for exciting things. Digits on an arrow sum to the digit in that arrows circle. No 2 arrows overlap. *All cells containing an arrow are always on the safe path and never on ice* 

Digits in cells that are connected by a white dot are consecutive. Digits in cells that are connected by a black dot are in a 1:2 ratio. Not all possible dots are given. (There is no negative constraint.)
