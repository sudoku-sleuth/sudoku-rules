---
fog:
  initiallyLit:
    - r1c3
    - r2c1
    - r2c3
    - r3c1
    - r8c2
format: open-rules
title: Sparrow Bathing Spot
setter: Sandra & Nala
source: https://sudokupad.app/c6o100u1ym
case: https://sudoku-sleuth.com/cases/sparrow-bathing-spot
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e83b45eee4c928f859d8f417420d075e
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r3c1 black
kropki-2: kropki r1c3-r2c3 black
kropki-3: kropki r8c1-r8c2 black
kropki-4: kropki r8c2-r8c3 black
kropki-5: kropki r4c1-r5c1 black
kropki-6: kropki r5c7-r5c8 black
kropki-7: kropki r2c5-r2c6 white
kropki-8: kropki r9c7-r9c8 white
kropki-9: kropki r6c2-r7c2 white
arrow-1: arrow r3c2-r2c3 bulb ["r3c1"]
arrow-2: arrow r1c2-r2c1 bulb ["r1c3"]
arrow-3: arrow r2c7-r1c6-r1c5 bulb ["r3c6"]
arrow-4: arrow r8c3-r9c2-r8c2 bulb ["r7c3"]
arrow-5: arrow r5c3-r4c3 bulb ["r6c2"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#ffcba1","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#ffcba1","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.55,8.65],[4.75,8.85],[4.85,8.85],[5,8.8],[5.1,8.7],[5,8.7],[4.85,8.55],[4.8,8.6],[4.9,8.6]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.9,8.6],[4.85,8.65],[4.8,8.6],[4.7,8.6],[4.5,8.4],[4.55,8.35],[4.85,8.65]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.6,8.4],[4.5,8.5],[4.6,8.5]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.65,8.45],[4.8,8.3],[4.7,8.3],[4.65,8.35],[4.5,8.4],[4.3,8.2],[4.4,8.2],[4.45,8.25],[4.55,8.25]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.7,8.3],[4.65,8.25],[4.7,8.2],[4.8,8.2],[4.85,8.15],[4.85,8.05],[4.8,8.1],[4.85,8.15]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.65,8.55],[4.75,8.55]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.3,8.2],[4.3,8.1],[4.25,8.05],[4.25,7.95],[4.2,7.9],[4.2,8],[4.15,8.05],[4.15,8.15],[4.1,8.2],[4.2,8.3],[4.35,8.35]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.4,8.5],[4.3,8.6],[4.4,8.7],[4.5,8.6]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.65,6.55],[6.65,6.65],[6.4,6.9],[6.5,6.8],[6.5,6.7],[6.55,6.65],[6.6,6.5],[6.8,6.5],[6.8,6.4],[6.7,6.5]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.4,6.9],[6.35,6.95]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.75,6.45],[6.75,6.35],[6.8,6.4],[6.85,6.35],[6.8,6.3],[6.75,6.35]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.8,6.3],[6.75,6.25],[6.6,6.3],[6.65,6.35],[6.75,6.35],[6.7,6.3],[6.6,6.3]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.75,6.35],[6.6,6.5],[6.6,6.4],[6.7,6.3],[6.65,6.35],[6.7,6.4]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.6,6.5],[6.55,6.45],[6.65,6.35],[6.6,6.4],[6.7,6.5],[6.7,6.3],[6.65,6.25],[6.75,6.25]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.7,6.4],[6.6,6.4],[6.55,6.35],[6.6,6.3]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[6.65,6.35],[6.55,6.35]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[6.25,6.45],[6.3,6.5],[6.3,6.4],[6.35,6.35],[6.45,6.45],[6.45,6.35],[6.55,6.25],[6.65,6.25],[6.5,6.1],[6.5,6.2]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.75,6.05],[3.65,6.05],[3.6,6],[3.5,6],[3.3,5.8],[3.3,5.6],[3.25,5.55],[3.3,5.5],[3.35,5.55],[3.45,5.55],[3.5,5.5],[3.65,5.55],[3.75,5.55],[3.75,5.65],[3.95,5.85],[3.95,5.65],[3.9,5.6],[3.85,5.65]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3.6,6],[3.5,5.9],[3.5,5.7],[3.45,5.65],[3.45,5.55]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3.75,5.55],[3.7,5.5],[3.5,5.5],[3.45,5.45],[3.55,5.35],[3.7,5.5]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.45,5.45],[3.3,5.3],[3.4,5.3]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[3.3,5.3],[3.2,5.2],[3.15,5.25],[3.15,5.35],[3.1,5.3],[3.15,5.25]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3.25,5.25],[3.15,5.25]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[4.7,8.6],[4.8,8.7],[4.6,8.6],[4.7,8.6]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[6.5,6.1],[6.4,6.1],[6.25,5.95],[6.35,5.95],[6.5,6.1]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[3.45,5.65],[3.45,5.75],[3.5,5.8],[3.45,5.85],[3.4,5.8],[3.4,5.6],[3.45,5.65]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[6.85,6.15],[6.9,6],[6.9,6.1],[6.85,6.15]],"color":"#c8b49eff","thickness":12,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[6.85,6.55],[6.95,6.55],[6.9,6.6]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[6.95,6.35],[7,6.4],[6.95,6.45]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[3.8,5.4],[3.75,5.35],[3.7,5.4],[3.6,5.3],[3.6,5.4],[3.65,5.45],[3.7,5.4]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3.7,5.4],[3.6,5.4],[3.65,5.35],[3.55,5.35],[3.6,5.3]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[3.6,5.4],[3.55,5.35]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[6.75,6.55],[6.7,6.5],[6.75,6.45],[6.8,6.5],[6.7,6.5]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[6.7,6.5],[6.65,6.45],[6.85,6.45],[6.8,6.5]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[6.75,6.45],[6.7,6.4],[6.65,6.45],[6.6,6.4],[6.65,6.35],[6.75,6.35],[6.7,6.4]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[6.85,6.45],[6.75,6.35]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[6.7,6.4],[6.6,6.4]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[4.35,7.95],[4.35,8.05],[4.45,8.15],[4.35,8.15],[4.35,8.05]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[4.35,7.95],[4.3,8],[4.4,8.1]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[4.35,8.05],[4.3,8],[4.3,8.1],[4.35,8.05]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[4.35,8.15],[4.5,8.2],[4.45,8.15],[4.3,8.1],[4.35,8.15]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[4.35,8.15],[4.4,8.2],[4.5,8.2]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[4.3,8],[4.25,7.95],[4.3,8.1],[4.25,8.05],[4.25,7.95]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[4.3,8],[4.3,7.9],[4.25,7.95],[4.25,7.85],[4.3,7.9]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[4.95,8.55],[5.05,8.65],[5.15,8.65],[5.1,8.7],[5.05,8.65]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[5.15,8.65],[5,8.7],[5.05,8.65],[4.95,8.65],[5,8.7]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[5.1,8.7],[4.9,8.7],[4.85,8.65],[4.95,8.65],[5,8.6],[4.9,8.6],[4.95,8.65]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[5,8.6],[4.85,8.55],[4.9,8.6],[4.85,8.45],[4.85,8.55]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[4.95,8.65],[4.8,8.6],[4.85,8.65]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[4.95,8.55],[4.85,8.55],[4.8,8.6],[4.9,8.6],[4.9,8.5],[4.85,8.45],[4.8,8.5],[4.85,8.55]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[4.95,8.55],[4.9,8.5]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[4.85,8.55],[4.75,8.55],[4.8,8.5]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[4.8,8.6],[4.75,8.55]],"color":"#d3bfa3ff","thickness":3,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[4.25,8.75],[4.3,8.7]],"color":"#ebcf8bff","thickness":5,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[6.2,6.6],[6.25,6.55]],"color":"#ebcf8bff","thickness":5,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[3.45,5.15],[3.45,5.25]],"color":"#ebcf8bff","thickness":5,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[5.6,7.7],[5.7,7.8],[5.75,7.65],[5.8,7.7],[5.8,7.9],[5.7,8],[5.65,7.95],[5.65,7.85],[5.7,7.8]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[5.8,7.8],[5.85,7.85],[5.85,8.35],[5.95,8.25],[5.9,8.2],[5.9,7.9],[5.75,8.05],[5.7,7.9],[5.7,7.7],[5.75,7.85],[5.75,7.95]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[5.75,8.05],[5.75,8.15],[5.8,8.3],[5.8,8.6],[5.75,8.55],[5.75,8.35],[5.8,8.3]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[5.65,7.95],[5.6,8],[5.6,7.9],[5.65,7.85],[5.65,7.75],[5.7,7.7],[5.65,7.65],[5.65,7.75]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[5.9,7.9],[5.9,7.8],[5.85,7.75],[5.85,7.55],[5.8,7.6],[5.8,7.7],[5.75,7.85]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[5.75,8.15],[5.75,8.25],[5.8,8.3]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[5.7,7.7],[5.7,7.6],[5.65,7.65],[5.65,6.85],[5.75,6.85],[5.75,7.25],[5.8,7.3],[5.8,7.4],[5.75,7.45],[5.75,7.25]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[5.9,7.8],[5.9,7.5],[5.85,7.45],[5.8,7.6]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[5.85,7.55],[5.85,7.45],[5.9,7.4],[5.9,7.5]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[5.9,7.4],[5.9,7.3],[5.95,7.25],[5.95,7.65]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[5.75,7.05],[5.8,7],[5.85,7.05],[5.85,7.15],[5.8,7.3],[5.85,7.25],[5.85,7.15]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[5.75,7.35],[5.8,7.3],[5.8,6.8]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[5.75,7.45],[5.8,7.5],[5.85,7.45],[5.85,7.25],[5.85,7.45]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[5.85,7.25],[5.8,7.2]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[5.9,7.3],[5.9,7.1],[5.85,7.15],[5.9,7],[5.9,7.1]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[5.9,7],[5.9,6.9],[5.9,7.2],[5.95,7.25]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[5.95,7.35],[6,7.3],[6,7.2],[6.05,7.15],[6.05,7.05],[6,7],[6,6.9]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[5.95,7.45],[6,7.6],[6,7.9],[5.95,7.85],[5.95,7.55]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[5.95,8.05],[5.95,7.85],[6,7.8],[6,7.7],[5.95,7.85]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[5.65,6.85],[5.7,6.8],[5.7,6.7],[5.65,6.75],[5.65,6.85]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[5.9,6.9],[5.9,6.4],[5.85,6.45],[5.9,6.5]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[5.9,6.9],[5.85,6.95],[5.85,6.55],[5.9,6.6]],"color":"#b6d0e8ff","thickness":10,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[5.9,7.6],[5.9,7.5],[5.95,7.45],[6,7.5],[6,7.8],[6.05,7.75],[6.05,7.85],[6,7.8]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[5.9,7.5],[5.9,7.2],[5.95,7.25],[5.95,7.45]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[6,7.8],[5.95,7.85],[5.95,8.15],[6,8.2],[6,8.4],[6.05,8.25],[6,8.3]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[6.05,7.85],[6.05,8.05],[5.8,8.3],[5.8,8.4],[5.85,8.45],[5.85,8.55],[5.95,8.55],[5.95,8.65],[6.15,8.45],[6.15,8.05],[6.1,7.9],[6.1,7.8],[6.05,7.75],[6.1,7.6]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[6.05,7.75],[6.05,7.65],[6.1,7.7],[6.1,7.8]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[6.1,7.9],[6.05,8.05],[6.05,8.15],[6,8.2],[6,8.1],[6.05,8.15]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[5.9,7.3],[5.85,7.45],[5.85,7.25],[5.9,7.2],[5.9,7.1],[5.95,6.95],[5.95,7.05],[6.05,7.35],[6.05,7.65]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[5.95,7.25],[5.95,7.05]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[5.95,7.35],[6,7.3],[6,7.2],[5.95,7.15]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[6,8.1],[6,8]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[5.8,8.4],[5.8,8.6],[5.85,8.65],[5.85,8.55],[5.9,8.6],[5.95,8.55],[6,8.4],[6,8.5],[5.95,8.55]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[6,8.4],[5.95,8.45],[5.95,8.55]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[6.05,8.55],[6.05,8.65],[6,8.7],[5.95,8.65],[5.9,8.7],[5.85,8.65],[5.85,8.75],[5.9,8.7]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[5.9,7.1],[5.9,6.9],[5.95,6.95],[5.95,6.85],[6,6.8],[6.05,6.95],[6.05,7.35]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[5.95,6.85],[5.95,6.75],[6,6.7],[6,6.8]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[5.95,6.75],[5.95,6.55],[5.9,6.5],[5.9,6.3],[5.8,6.3],[5.75,6.35],[5.75,6.45],[5.8,6.6],[5.8,6.7],[5.85,6.75],[5.85,6.65],[5.8,6.7]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[6,6.7],[6,6.6]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[5.8,6.7],[5.75,6.75],[5.75,6.65],[5.85,6.65]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[5.75,6.65],[5.7,6.7],[5.75,6.75],[5.75,6.95],[5.7,7],[5.7,7.5],[5.65,7.55],[5.65,7.95],[5.7,7.9],[5.7,7.8],[5.75,7.85],[5.75,7.95],[5.7,8],[5.7,8.2],[5.8,8.3],[5.8,8.2]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[5.7,6.6],[5.8,6.6],[5.85,6.55],[5.85,6.45]],"color":"#c1dceeff","thickness":10,"rounded":true}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.35,5.35],"width":0.06,"height":0.06,"rounded":true,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,6.4],"width":0.06,"height":0.06,"rounded":true,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.3,8.6],"width":0.06,"height":0.06,"rounded":true,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.4,8.7],"width":0.06,"height":0.06,"rounded":true,"fill":"#000000","thickness":0,"angle":45}}
```

When Nala spots a group of sparrows bathing in a puddle, she slows her pace, lowers her head and approaches them with careful and considered steps. Once she is close enough she will make a jump at them and enjoy how all the sparrows scatter and fly off in every direction until she can’t see them anymore. What a blast! Today, though, it’s foggy and Nala can’t make out where the sparrows sit exactly. Can you help her spot them?

Normal sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

Digits separated by a white dot are consecutive. Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are given. (There is no negative constraint.)

Digits along an arrow must sum to the digit in the corresponding circle. Each circle contains a single digit number. Each arrow has its own color and arrows of the same color are connected.

One cell in the grid is the „Sparrow Bathing Spot“: Numbers increase or stay the same as they move away from the Sparrow Bathing Spot“ (Slow Nadir) in any direction (orthogonally and diagonally). Some cells in the grid are colored. A colored cell is either the Sparrow Bathing Spot or on its path, BUT! one colored cell is a „Liar“. Despite being colored it is neither the bathing spot, nor is it on its path. Which colored cell is the liar needs to be determined by the solver.

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
