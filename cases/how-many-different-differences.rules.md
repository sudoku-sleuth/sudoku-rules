---
format: open-rules
title: How Many Different Differences?
setter: Marty Sears
source: https://sudokupad.app/56k76te2z5
case: https://sudoku-sleuth.com/cases/how-many-different-differences
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
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
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[0.5,0.5],[0.5,2.5],[1.5,3.5],[1.5,4.5],[1,5],[1.5,5.5],[2.5,5.5],[2.5,4.5],[4.5,4.5],[4.5,2.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,3.5],[2.5,2.5],[1.5,2.5],[1.5,1.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1,5],[0.5,4.5],[0.5,3.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[5.5,5.5],[5.5,2.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,1.5],[3.5,2.5],[2.5,1.5],[3.5,0.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,0.5],[5.5,1.5],[4.5,0.5]],"color":"#FFFFFF","thickness":16,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[0.5,0.5],[0.5,2.5],[1.5,3.5],[1.5,4.5],[0.5,5.5]],"color":"#fbe689ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,2.5],[2.5,2.5],[2.5,3.5],[3.5,3.5]],"color":"#abfb7dff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,5.5],[3.5,5.5]],"color":"#75c3f1ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,4.5],[1.5,5.5],[2.5,5.5],[2.5,4.5],[4.5,4.5],[4.5,2.5]],"color":"#cea1faff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[4.5,1.5],[3.5,0.5],[2.5,1.5],[3.5,2.5]],"color":"#52ebe6ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[5.5,1.5],[4.5,0.5],[5.5,0.5]],"color":"#f69dd5ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.167,5.5],[6.167,6.167],[-0.167,6.167],[-0.167,-0.167],[6.167,-0.167],[6.167,5.5]],"color":"#73599bff","thickness":19.84,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.167,5.5],[6.167,6.167],[-0.167,6.167],[-0.167,-0.167],[6.167,-0.167],[6.167,5.5]],"color":"#8467a8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.083,-0.25],[5.083,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.25,-0.25],[5.25,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.417,-0.25],[5.417,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.583,-0.25],[5.583,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.75,-0.25],[5.75,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[5.917,-0.25],[5.917,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[6.083,0.083],[6.25,0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[6.083,-0.25],[6.083,-0.083],[6.25,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[4.917,-0.25],[4.917,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[4.75,-0.25],[4.75,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[4.583,-0.25],[4.583,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[4.417,-0.25],[4.417,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[4.25,-0.25],[4.25,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.083,-0.25],[4.083,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[3.917,-0.25],[3.917,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[3.75,-0.25],[3.75,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[3.583,-0.25],[3.583,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[3.417,-0.25],[3.417,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3.25,-0.25],[3.25,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[3.083,-0.25],[3.083,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[2.917,-0.25],[2.917,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[2.75,-0.25],[2.75,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[2.583,-0.25],[2.583,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[2.417,-0.25],[2.417,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[2.25,-0.25],[2.25,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[2.083,-0.25],[2.083,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[1.917,-0.25],[1.917,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[1.75,-0.25],[1.75,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[1.583,-0.25],[1.583,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[-0.083,-0.25],[-0.083,-0.083],[-0.25,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[0.083,-0.25],[0.083,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[0.25,-0.25],[0.25,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[0.417,-0.25],[0.417,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[0.583,-0.25],[0.583,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[0.75,-0.25],[0.75,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[0.917,-0.25],[0.917,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[1.083,-0.25],[1.083,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[1.25,-0.25],[1.25,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[1.417,-0.25],[1.417,-0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[-0.25,0.083],[-0.083,0.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[-0.25,0.25],[-0.083,0.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[-0.25,0.417],[-0.083,0.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[-0.25,0.583],[-0.083,0.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[-0.25,0.75],[-0.083,0.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[-0.25,0.917],[-0.083,0.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[-0.25,1.083],[-0.083,1.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[-0.25,1.25],[-0.083,1.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[-0.25,1.417],[-0.083,1.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[-0.25,1.583],[-0.083,1.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[-0.25,1.75],[-0.083,1.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[-0.25,1.917],[-0.083,1.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[-0.25,2.083],[-0.083,2.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[-0.25,2.25],[-0.083,2.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[-0.25,2.417],[-0.083,2.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[-0.25,2.583],[-0.083,2.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[-0.25,2.75],[-0.083,2.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[-0.25,2.917],[-0.083,2.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[-0.25,3.083],[-0.083,3.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[-0.25,3.25],[-0.083,3.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[-0.25,3.417],[-0.083,3.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[-0.25,3.583],[-0.083,3.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[-0.25,3.75],[-0.083,3.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[-0.25,3.917],[-0.083,3.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[-0.25,4.083],[-0.083,4.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[-0.25,4.25],[-0.083,4.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[-0.25,4.417],[-0.083,4.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[-0.25,4.583],[-0.083,4.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[-0.25,4.75],[-0.083,4.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[-0.25,4.917],[-0.083,4.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[-0.25,5.083],[-0.083,5.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[-0.25,5.25],[-0.083,5.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[-0.25,5.417],[-0.083,5.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[-0.25,5.583],[-0.083,5.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[-0.25,5.75],[-0.083,5.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[-0.25,5.917],[-0.083,5.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[-0.25,6.083],[-0.083,6.083],[-0.083,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[0.083,6.083],[0.083,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[0.25,6.083],[0.25,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[0.417,6.083],[0.417,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[0.583,6.083],[0.583,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[0.75,6.083],[0.75,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[0.917,6.083],[0.917,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[1.083,6.083],[1.083,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[1.25,6.083],[1.25,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[1.417,6.083],[1.417,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[1.583,6.083],[1.583,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[1.75,6.083],[1.75,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[1.917,6.083],[1.917,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[2.083,6.083],[2.083,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[2.25,6.083],[2.25,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[2.417,6.083],[2.417,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[2.583,6.083],[2.583,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[2.75,6.083],[2.75,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[2.917,6.083],[2.917,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"line","points":[[3.083,6.083],[3.083,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"line","points":[[3.25,6.083],[3.25,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"line","points":[[3.417,6.083],[3.417,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"line","points":[[3.583,6.083],[3.583,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"line","points":[[3.75,6.083],[3.75,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"line","points":[[3.917,6.083],[3.917,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"line","points":[[4.083,6.083],[4.083,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"line","points":[[4.25,6.083],[4.25,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"line","points":[[4.417,6.083],[4.417,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"line","points":[[4.583,6.083],[4.583,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"line","points":[[4.75,6.083],[4.75,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"line","points":[[4.917,6.083],[4.917,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"line","points":[[5.083,6.083],[5.083,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"line","points":[[5.25,6.083],[5.25,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"line","points":[[5.417,6.083],[5.417,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"line","points":[[5.583,6.083],[5.583,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"line","points":[[5.75,6.083],[5.75,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"line","points":[[5.917,6.083],[5.917,6.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"line","points":[[6.083,6.25],[6.083,6.083],[6.25,6.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"line","points":[[6.083,5.917],[6.25,5.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"line","points":[[6.083,5.75],[6.25,5.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"line","points":[[6.083,5.583],[6.25,5.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"line","points":[[6.083,5.417],[6.25,5.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"line","points":[[6.083,5.25],[6.25,5.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"line","points":[[6.083,5.083],[6.25,5.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"line","points":[[6.083,4.917],[6.25,4.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"line","points":[[6.083,4.75],[6.25,4.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"line","points":[[6.083,4.583],[6.25,4.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"line","points":[[6.083,4.417],[6.25,4.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"line","points":[[6.083,4.25],[6.25,4.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"line","points":[[6.083,4.083],[6.25,4.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"line","points":[[6.083,3.917],[6.25,3.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"line","points":[[6.083,3.75],[6.25,3.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"line","points":[[6.083,3.583],[6.25,3.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"line","points":[[6.083,3.417],[6.25,3.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"line","points":[[6.083,3.25],[6.25,3.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"line","points":[[6.083,3.083],[6.25,3.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"line","points":[[6.083,2.917],[6.25,2.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"line","points":[[6.083,0.25],[6.25,0.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-148","rules":[],"visual":{"kind":"line","points":[[6.083,0.417],[6.25,0.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"line","points":[[6.083,0.583],[6.25,0.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-150","rules":[],"visual":{"kind":"line","points":[[6.083,0.75],[6.25,0.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-151","rules":[],"visual":{"kind":"line","points":[[6.083,0.917],[6.25,0.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-152","rules":[],"visual":{"kind":"line","points":[[6.083,1.083],[6.25,1.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-153","rules":[],"visual":{"kind":"line","points":[[6.083,1.25],[6.25,1.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-154","rules":[],"visual":{"kind":"line","points":[[6.083,1.417],[6.25,1.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-155","rules":[],"visual":{"kind":"line","points":[[6.083,1.583],[6.25,1.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-156","rules":[],"visual":{"kind":"line","points":[[6.083,1.75],[6.25,1.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-157","rules":[],"visual":{"kind":"line","points":[[6.083,1.917],[6.25,1.917]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-158","rules":[],"visual":{"kind":"line","points":[[6.083,2.083],[6.25,2.083]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-159","rules":[],"visual":{"kind":"line","points":[[6.083,2.25],[6.25,2.25]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-160","rules":[],"visual":{"kind":"line","points":[[6.083,2.417],[6.25,2.417]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-161","rules":[],"visual":{"kind":"line","points":[[6.083,2.583],[6.25,2.583]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-162","rules":[],"visual":{"kind":"line","points":[[6.083,2.75],[6.25,2.75]],"color":"#73599bff","thickness":4.48,"rounded":true}}
- {"id":"drawing-163","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.87,"height":0.87,"rounded":true,"fill":"#ffffffa3","stroke":"#a1acd6ff","thickness":4.48,"angle":0}}
- {"id":"drawing-164","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.87,"height":0.87,"rounded":true,"fill":"#ffffffa3","stroke":"#a1acd6ff","thickness":4.48,"angle":0}}
- {"id":"drawing-165","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.87,"height":0.87,"rounded":true,"fill":"#ffffffa3","stroke":"#a1acd6ff","thickness":4.48,"angle":0}}
- {"id":"drawing-166","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.87,"height":0.87,"rounded":true,"fill":"#ffffffa3","stroke":"#a1acd6ff","thickness":4.48,"angle":0}}
- {"id":"drawing-167","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.87,"height":0.87,"rounded":true,"fill":"#ffffffa3","stroke":"#a1acd6ff","thickness":4.48,"angle":0}}
- {"id":"drawing-168","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.87,"height":0.87,"rounded":true,"fill":"#ffffffa3","stroke":"#a1acd6ff","thickness":4.48,"angle":0}}
```

Normal 6x6 sudoku rules apply.

The circled digit on a line indicates how many DISTINCT differences exist between pairs of adjacent digits along that line. Eg: A line that reads 6425136 has adjacent pairs whose differences are 2,2,3,4,2,3 respectively. Therefore, the digit 3 on the line would be circled, because there are 3 distinct differences (2, 3 and 4).

No two circles contain the same digit.
