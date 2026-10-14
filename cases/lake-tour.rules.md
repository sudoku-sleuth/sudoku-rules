---
format: open-rules
title: Lake Tour
setter: Sandra & Nala
source: https://sudokupad.app/zwcwvfe010
case: https://sudoku-sleuth.com/cases/lake-tour
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
exported: 027f43007a7292106887f4eb22dd30c3
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3-r2c3 total 5 connected true
cage-2: cage r2c1-r2c2 total 10 connected true
cage-3: cage r3c1-r3c2-r3c3-r4c1 total 8 connected true
cage-4: cage r4c2-r4c3-r5c2-r5c3 total 21 connected true
cage-5: cage r5c1-r6c1-r6c2 total 13 connected true
cage-6: cage r8c1-r9c1-r9c2 total 6 connected true
cage-7: cage r1c4-r1c5-r2c4 total 15 connected true
cage-8: cage r2c5-r3c4-r3c5-r4c5 total 22 connected true
cage-9: cage r2c6-r2c7-r3c6-r3c7 total 6 connected true
cage-10: cage r1c7-r1c8-r2c8 total 7 connected true
cage-11: cage r1c9-r2c9 total 4 connected true
cage-12: cage r3c8-r4c8-r4c9-r5c9 total 5 connected true
cage-13: cage r4c7-r5c7-r5c8 total 7 connected true
cage-14: cage r6c7-r6c8-r6c9 total 15 connected true
cage-15: cage r5c5-r5c6-r6c4-r6c5-r7c4 total 27 connected true
cage-16: cage r6c6-r7c5-r7c6-r8c4-r8c5 total 17 connected true
cage-17: cage r8c6-r9c5-r9c6 total 13 connected true
cage-18: cage r7c8-r8c7-r8c8 total 11 connected true
cage-19: cage r9c8-r9c9 total 11 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.45,4.85],[5.15,5.25],[5.05,5.45],[4.95,5.95],[4.95,6.15],[4.75,6.25],[4.25,6.25],[3.95,6.35],[3.45,6.35],[3.35,6.25],[3.35,5.25],[3.45,4.95],[3.15,4.65],[3.15,4.15],[3.25,3.85],[3.35,3.75],[3.75,3.75],[4.35,3.55],[4.85,3.35],[5.15,3.05],[5.15,2.95],[5.85,2.95],[5.95,3.05],[5.95,3.75],[5.85,4.05],[5.85,4.75],[5.75,4.85],[5.05,4.85],[4.95,5.15],[4.85,5.55],[4.85,5.65],[4.65,5.85],[4.45,5.85],[4.35,5.75],[4.55,5.45],[4.75,5.25],[4.55,5.35],[4.45,5.35],[4.35,5.45],[4.05,5.45],[3.85,5.15],[3.75,4.95],[3.65,4.25],[3.75,4.15],[3.85,4.15],[4.05,4.05],[4.15,4.05],[4.95,3.65],[5.15,3.65],[5.15,3.75],[5.05,3.85],[5.15,3.65]],"color":"#e2f3f8ff","thickness":32,"rounded":true,"layer":"under"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.55,3.35],[5.55,3.55],[5.45,3.65],[5.25,3.75],[4.75,4.25],[4.45,4.65],[4.05,4.75],[3.85,4.75],[3.65,4.85],[3.65,4.95],[3.75,5.05],[4.15,5.05],[4.35,4.75],[4.65,4.45],[5.05,3.85],[5.05,3.95],[4.75,4.75],[4.55,5.15],[4.45,5.25],[3.95,5.25],[4.15,5.05]],"color":"#e2f3f8ff","thickness":32,"rounded":true,"layer":"under"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.85,4.75],[3.75,4.65],[3.75,4.45],[4.25,4.45],[5.25,4.35],[5.45,4.25],[5.65,4.05],[5.65,4.15],[5.55,4.35],[5.45,4.35],[5.25,4.45],[4.55,4.75],[3.95,5.25],[3.95,5.45],[4.05,5.55],[4.05,5.65],[3.75,5.65],[3.75,5.45],[3.95,5.25]],"color":"#e2f3f8ff","thickness":32,"rounded":true,"layer":"under"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.15,5.05],[4.25,5.05],[4.25,5.55],[4.35,5.75],[3.85,6.15],[3.55,6.15],[3.55,4.15],[3.35,4.15]],"color":"#e2f3f8ff","thickness":32,"rounded":true,"layer":"under"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.95,5.25],[3.85,5.25],[3.95,4.95],[4.35,4.45],[5.25,3.65],[5.15,3.65],[5.25,3.45],[5.15,3.55],[5.15,3.65]],"color":"#e2f3f8ff","thickness":32,"rounded":true,"layer":"under"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.85,7.15],[0.95,7.25],[0.95,7.85],[1.15,7.95],[1.75,7.95]],"color":"#e2f3f8ff","thickness":32,"rounded":true,"layer":"under"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.65,7.95],[1.45,7.75],[1.35,7.75],[1.25,7.55],[1.15,7.45],[1.05,7.25]],"color":"#e2f3f8ff","thickness":32,"rounded":true,"layer":"under"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.95,5.95],[2.95,6.35],[3.05,6.45],[3.05,6.35],[2.95,6.25]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.05,6.45],[3.35,6.75],[4.15,6.75],[4.25,6.65],[4.95,6.65],[4.95,6.55],[5.05,6.55],[5.15,6.45],[5.15,6.35],[4.95,6.55]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.95,6.55],[4.35,6.55],[4.15,6.65],[3.35,6.65],[3.05,6.35],[3.05,4.85]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.05,6.35],[2.75,5.95],[2.65,5.85],[2.65,5.55],[2.55,5.25],[2.55,4.95],[2.65,4.85],[2.65,5.35],[2.75,5.55],[2.75,5.65],[2.65,5.35]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.15,6.35],[5.35,6.15],[5.25,6.15],[5.25,6.25]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.35,6.15],[5.35,6.05],[5.25,6.15],[5.25,5.95],[5.35,5.85],[5.35,6.05]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.65,4.85],[2.65,4.45],[2.75,4.25],[2.75,5.45],[2.85,5.55],[2.85,5.85],[2.75,5.65],[2.75,5.85],[2.85,5.85]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.65,4.95],[2.65,5.15]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.75,5.55],[2.75,5.45],[2.75,5.65]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.75,5.75],[2.85,5.95],[2.85,6.05],[2.85,5.85],[2.95,6.15],[2.85,6.05]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.35,6.05],[5.45,6.05],[5.45,5.95],[6.05,5.35],[6.05,5.25],[6.15,5.15],[6.15,4.95],[6.25,4.75],[6.35,4.65],[6.35,4.15],[6.55,3.95],[6.55,3.85],[6.65,3.75],[6.65,3.35],[6.55,3.55],[6.55,3.25],[6.25,2.65],[6.35,2.75]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[5.35,5.85],[5.35,5.75],[5.45,5.65],[5.45,5.55],[5.65,5.45],[5.75,5.45],[5.85,5.35],[6.05,5.35]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[2.75,5.35],[2.75,3.95],[2.95,3.75],[2.95,3.85],[2.85,4.65],[2.75,4.55],[2.75,4.75]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[2.75,4.75],[2.75,5.45],[2.85,5.35],[2.95,5.15],[2.95,4.75],[2.85,4.65],[2.85,5.05],[2.75,4.55],[2.85,4.55],[2.85,4.65]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[2.85,5.05],[2.85,5.55],[2.95,5.75],[2.95,5.85]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[2.85,4.55],[2.85,3.75],[2.95,3.65],[2.95,3.75],[3.15,3.55],[3.35,3.45],[3.85,3.45],[3.95,3.35],[4.25,3.25],[4.35,3.15],[4.45,3.15],[4.55,3.05],[4.65,3.05],[4.95,2.75],[5.65,2.75],[5.75,2.65],[5.85,2.65],[6.05,2.55],[6.25,2.65],[6.45,3.05],[6.55,3.35]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.95,5.75],[2.95,4.95]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[6.15,5.25],[6.05,5.25],[5.75,5.55],[6.15,5.35],[6.25,5.25],[6.25,4.75],[6.25,4.95]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6.05,5.25],[5.95,5.25],[5.85,5.35]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[6.65,3.35],[6.65,3.25],[6.65,3.45],[6.65,3.05],[6.65,3.25]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[6.55,3.55],[6.45,3.75],[6.45,4.05],[6.35,4.05],[6.35,4.15],[6.25,4.25],[6.25,4.75],[6.25,4.65]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[6.55,3.25],[6.55,3.15],[6.15,2.55]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[5.35,5.75],[5.35,5.65],[5.65,5.35],[5.75,5.35]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[5.45,5.55],[5.45,5.45],[5.55,5.25],[5.65,5.15],[5.75,5.15],[5.95,5.05],[6.15,4.85],[6.15,4.95],[6.05,5.05],[6.05,4.95]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[5.75,5.45],[5.65,5.55],[5.75,5.55],[5.55,5.75],[5.55,5.65],[5.65,5.55]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[5.65,5.35],[5.85,5.25],[5.95,5.25],[6.05,5.15]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4.25,3.25],[4.05,3.25],[3.95,3.35],[4.05,3.35],[4.15,3.25]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3.95,3.35],[3.75,3.35]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[4.15,3.25],[4.55,3.15],[4.65,3.15],[4.95,2.85],[5.05,2.65],[5.15,2.65],[5.25,2.55],[5.65,2.55],[5.75,2.65]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[4.55,3.05],[4.55,2.95],[4.85,2.65],[4.95,2.65],[4.95,2.75]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[6.05,2.75],[5.95,2.75],[5.85,2.65],[5.55,2.65],[5.65,2.75],[5.95,2.75]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[5.95,2.75],[6.05,2.85],[6.05,2.95],[6.15,3.05],[6.15,3.15],[6.25,3.25],[6.25,3.85],[6.35,3.65],[6.35,3.75]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[6.65,3.25],[6.55,2.95],[6.55,2.85],[6.65,3.05],[6.65,2.95],[6.55,2.85]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[6.65,3.05],[6.45,2.65],[6.55,2.85]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[6.45,3.85],[6.35,3.95],[6.35,4.05],[6.25,4.15],[6.25,4.45]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[6.25,4.25],[6.15,4.35],[6.15,4.85]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[5.75,5.15],[5.35,5.55],[5.35,5.65],[5.25,5.75],[5.25,5.95],[5.25,5.55],[5.45,5.35],[5.55,5.35]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[5.65,5.25],[5.75,5.25],[5.85,5.15]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[6.05,4.95],[6.05,4.75],[6.15,4.45]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[6.05,5.05],[5.95,5.15]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[5.55,5.75],[5.45,5.85],[5.45,5.75],[5.55,5.65]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[5.25,2.55],[5.35,2.45],[6.15,2.45],[6.45,2.65],[6.35,2.55],[6.25,2.55],[6.15,2.45]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[5.35,2.55],[6.05,2.55],[6.05,2.65],[6.15,2.75],[6.15,2.65],[6.05,2.55]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[6.05,2.55],[5.85,2.45],[6.05,2.45],[6.25,2.55],[6.35,2.65],[6.45,2.85],[6.45,3.75],[6.35,3.85],[6.35,3.95],[6.05,4.25],[6.15,4.35],[6.15,4.15]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[6.45,3.75],[6.35,3.45],[6.35,3.65]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[5.35,2.45],[5.25,2.45],[5.05,2.55],[4.95,2.65],[5.05,2.65],[5.05,2.55]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[4.55,2.95],[4.45,2.95],[4.55,2.85],[4.75,2.75],[4.85,2.75],[4.85,2.65],[4.95,2.55],[5.05,2.55],[5.35,2.65]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[4.85,2.65],[4.65,2.75],[4.55,2.85],[4.35,2.95],[4.55,2.75],[4.65,2.75]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[5.05,2.55],[5.15,2.55],[5.25,2.45],[5.55,2.45],[5.75,2.55]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[5.25,2.45],[5.05,2.45]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[5.55,2.65],[5.45,2.65]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[6.25,3.85],[6.15,3.95],[6.15,4.05],[6.05,4.15],[6.05,4.55]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[6.25,2.55],[6.25,2.85],[6.15,2.75],[6.15,2.85],[6.25,2.95],[6.25,2.85]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[6.25,2.65],[6.15,2.65],[6.25,2.75]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[6.25,2.85],[6.35,3.05],[6.35,3.45],[6.35,3.25]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[6.05,2.45],[5.95,2.35],[5.85,2.35],[5.75,2.45],[5.45,2.45],[5.55,2.35],[5.75,2.35],[5.85,2.45]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[5.55,2.45],[5.65,2.45],[5.85,2.55],[5.95,2.65],[6.05,2.65],[5.95,2.55],[5.85,2.55]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[6.45,3.65],[6.45,3.45]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[6.25,4.05],[6.25,4.15]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[4.45,2.85],[4.35,2.85],[4.25,2.95],[4.35,2.95],[4.15,3.05],[4.25,2.95]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[4.35,2.95],[4.05,3.25],[3.85,3.25],[3.65,3.35],[3.35,3.35],[3.75,3.15],[3.95,3.15],[4.05,3.05],[4.25,2.95]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[6.15,4.65],[6.25,4.55],[6.15,4.75]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[3.85,3.25],[3.45,3.25],[3.35,3.35],[3.25,3.35],[3.35,3.25],[3.25,3.25],[3.15,3.35],[3.25,3.35]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[3.45,3.25],[3.55,3.15],[3.65,3.15],[3.75,3.05],[4.25,3.05],[4.45,2.95],[4.35,3.05],[4.25,3.05]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[4.25,3.05],[4.05,3.15],[3.95,3.15],[3.75,3.25]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[4.45,2.95],[4.05,3.15],[4.15,3.05]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[3.75,3.15],[3.65,3.25]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[3.25,3.35],[2.95,3.65],[3.05,3.65],[3.05,3.55]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[2.95,3.65],[2.95,3.55],[2.85,3.75],[2.85,3.65],[2.95,3.55]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[2.95,3.55],[3.15,3.35]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[3.15,5.25],[3.15,4.85]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[4.75,2.75],[4.65,2.75],[4.75,2.65],[4.75,2.75]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[6.25,2.95],[6.35,3.15],[6.25,3.05],[6.25,2.95]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[1.35,8.25],[1.85,8.25],[1.65,8.25]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[1.35,8.25],[0.85,8.25],[1.25,8.45],[1.65,8.25]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[1.85,8.25],[1.95,8.25],[1.75,8.45],[1.95,8.25]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[1.95,8.25],[1.95,8.15],[1.45,8.15],[1.65,8.05],[2.05,8.05],[2.05,8.25],[1.85,8.45],[1.65,8.55],[1.75,8.45],[0.95,8.45],[0.75,8.35],[0.65,8.15],[0.75,8.25],[0.85,8.25]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[0.75,8.25],[0.55,8.15],[0.55,8.05],[0.65,8.15],[0.65,8.25],[0.75,8.45],[0.85,8.55],[1.65,8.55],[0.95,8.55],[0.75,8.45]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[0.75,8.45],[0.55,8.35],[0.55,8.25],[0.45,8.15],[0.45,7.85],[0.55,7.75],[0.55,7.95],[0.65,8.15],[0.65,8.05],[0.55,7.65],[0.55,7.75]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[0.55,7.65],[0.55,7.05],[0.45,7.35],[0.45,7.75],[0.55,8.05],[0.75,8.15],[1.45,8.15],[1.25,8.15]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[0.75,8.15],[0.75,7.45],[0.65,7.05],[0.65,6.95],[0.55,6.95],[0.55,7.05]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[0.85,8.15],[1.25,8.15]],"color":"#faf8e4ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[0.35,6.65],[0.25,6.65],[0.25,6.55]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[0.35,8.65],[0.35,8.75],[0.45,8.75],[0.45,8.85],[0.55,8.85]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[1.95,8.75],[1.95,8.85],[2.05,8.85],[2.05,8.75],[2.15,8.65],[2.25,8.65],[2.35,8.75],[2.35,8.65],[2.45,8.65],[2.45,8.55],[2.55,8.55]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[2.55,6.45],[2.65,6.55],[2.65,6.85],[2.75,6.85],[2.85,6.95],[2.85,7.05],[2.95,7.05]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[4.85,2.55],[4.85,2.45],[4.95,2.35],[5.35,2.35],[5.55,2.15],[5.65,2.15],[5.65,2.05],[5.55,2.05],[5.45,2.15],[5.25,2.15],[5.35,2.25],[5.45,2.25]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[4.85,2.45],[4.85,2.35],[5.05,2.15],[5.15,2.25],[5.25,2.25],[5.25,2.15],[5.05,2.15]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[5.45,2.15],[5.15,2.15],[5.25,2.25]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[5.05,2.15],[4.95,2.15]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[5.15,2.25],[4.85,2.25]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[6.75,3.45],[6.75,3.35],[6.85,3.35],[6.85,3.15],[6.75,3.15],[6.75,3.35]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[6.85,3.05],[6.75,3.15],[6.75,3.05]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[6.95,3.15],[6.95,3.85],[6.85,3.85],[6.85,3.95],[6.75,3.95],[6.75,3.75],[6.85,3.75],[6.85,3.65],[6.75,3.55],[6.85,3.45],[6.95,3.45]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[6.95,3.35],[6.85,3.55],[6.75,3.55],[6.65,3.65],[6.65,4.05],[6.75,3.95]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[2.65,3.85],[2.65,3.55],[2.75,3.45],[3.05,3.45],[2.85,3.55],[2.85,3.45]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[2.95,3.45],[2.85,3.55],[2.85,3.75],[2.75,3.85],[2.75,3.75],[2.85,3.65]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[2.85,3.55],[2.75,3.65],[3.05,3.45]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[2.85,3.65],[2.95,3.55],[3.05,3.35],[3.15,3.25],[3.15,3.35]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[7.35,8.75],[7.25,8.75],[7.25,8.65],[7.55,8.65],[7.55,8.55],[7.65,8.55],[7.75,8.65],[7.85,8.65],[7.85,8.75],[7.75,8.75],[7.75,8.65]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[7.25,8.75],[7.15,8.65],[7.15,8.55],[7.45,8.55],[7.45,8.65]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"line","points":[[7.75,8.65],[7.75,8.55],[7.65,8.45],[7.55,8.45],[7.55,8.55],[7.45,8.55]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"line","points":[[7.15,8.55],[7.15,8.45],[7.55,8.45]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"line","points":[[7.35,8.55],[7.35,8.45]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"line","points":[[7.65,8.45],[7.65,8.35],[7.75,8.45],[7.85,8.65],[7.85,8.45],[7.65,8.25],[7.65,8.35]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"line","points":[[8.65,7.85],[8.55,7.85],[8.55,7.65],[8.65,7.45],[8.65,7.75]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"line","points":[[8.75,7.45],[8.75,7.65]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"line","points":[[7.15,0.75],[7.25,0.75]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"line","points":[[8.25,0.45],[8.15,0.45],[8.15,0.35],[8.05,0.35],[7.95,0.45],[8.05,0.55],[8.15,0.45]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"line","points":[[7.95,0.45],[7.85,0.45]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"line","points":[[8.35,1.65],[8.35,1.75],[8.55,1.75],[8.45,1.65],[8.45,1.55],[8.55,1.55],[8.65,1.45],[8.65,1.35],[8.55,1.45],[8.55,1.55]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"line","points":[[8.55,1.55],[8.55,1.85]],"color":"#eafcedff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"line","points":[[3.85,5.25],[3.75,5.35],[3.75,5.45],[3.85,5.55],[3.85,5.65],[3.95,5.65],[4.05,5.75],[4.55,5.65],[4.55,5.45],[4.35,5.35],[4.45,5.35],[4.85,4.95],[4.95,4.65],[4.95,4.55],[5.25,3.95],[5.35,3.95],[5.35,4.05],[5.25,4.15],[5.25,3.95]],"color":"#e0ebfaff","thickness":21,"rounded":true,"layer":"under"}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"line","points":[[5.25,3.95],[5.25,3.75],[5.35,3.85],[5.35,3.95],[5.25,4.15],[5.25,4.25],[5.15,4.35],[5.25,4.15]],"color":"#e0ebfaff","thickness":21,"rounded":true,"layer":"under"}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"line","points":[[5.25,4.15],[4.85,4.55],[4.55,4.95],[4.35,5.15],[4.15,4.95],[4.25,4.85],[4.95,4.85],[5.05,4.65],[5.15,4.35],[5.05,4.45],[4.65,4.55],[4.45,4.65],[4.25,4.85]],"color":"#e0ebfaff","thickness":21,"rounded":true,"layer":"under"}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"line","points":[[4.45,4.65],[4.65,4.45],[4.95,4.05],[5.15,3.95],[5.25,3.85],[4.85,4.05],[5.05,3.85],[4.85,3.85],[4.55,4.15],[4.05,4.15],[4.05,4.35],[4.15,4.45],[4.15,4.75],[4.05,4.85],[4.25,4.85],[4.15,5.05],[4.15,5.25],[4.35,5.35],[4.25,5.35],[4.15,5.25]],"color":"#e0ebfaff","thickness":21,"rounded":true,"layer":"under"}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"line","points":[[5.05,3.85],[5.15,3.75],[5.25,3.75],[5.25,3.55],[5.05,3.55],[4.65,3.75],[4.55,3.85],[4.35,3.95],[4.25,3.95],[4.25,4.05],[4.15,4.05],[4.05,4.15]],"color":"#e0ebfaff","thickness":21,"rounded":true,"layer":"under"}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"line","points":[[4.05,4.35],[4.05,4.75],[3.95,4.95],[3.95,5.35],[3.95,5.25],[4.05,5.05],[5.15,3.95],[5.15,4.05],[4.75,4.15],[4.85,4.05],[4.75,4.25],[4.55,4.45],[4.15,5.35],[4.15,5.25],[4.05,5.25],[3.95,5.05]],"color":"#e0ebfaff","thickness":21,"rounded":true,"layer":"under"}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"line","points":[[4.15,5.25],[3.95,5.05],[4.05,4.85],[3.95,4.85],[3.95,4.95]],"color":"#e0ebfaff","thickness":21,"rounded":true,"layer":"under"}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"line","points":[[4.75,4.15],[4.65,4.25],[4.35,4.35],[4.15,4.45],[4.35,4.45],[4.45,4.35],[4.55,4.35],[4.65,4.25]],"color":"#e0ebfaff","thickness":21,"rounded":true,"layer":"under"}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"line","points":[[3.95,5.35],[4.05,5.35],[4.25,5.45],[4.35,5.45],[4.55,5.35],[4.45,5.35],[4.35,5.45]],"color":"#e0ebfaff","thickness":21,"rounded":true,"layer":"under"}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"line","points":[[4.05,5.35],[4.15,5.45],[4.25,5.45]],"color":"#e0ebfaff","thickness":21,"rounded":true,"layer":"under"}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"line","points":[[2.85,4.95],[2.95,4.95],[2.95,5.25],[2.95,4.95]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"line","points":[[2.85,4.35],[2.85,4.45],[2.95,4.65],[2.95,4.95],[2.85,5.05],[2.85,5.45],[2.95,5.65],[2.95,5.25],[2.95,5.65]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"line","points":[[2.95,4.95],[2.95,4.55]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"line","points":[[2.95,4.75],[3.05,4.85],[3.05,4.95],[3.15,5.05],[3.15,5.45],[3.05,5.45],[3.05,5.55],[2.95,5.65],[2.95,5.75],[3.05,5.95],[3.05,5.85],[2.95,5.65]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"line","points":[[5.25,5.85],[5.25,5.55],[5.45,5.35],[5.55,5.35],[5.65,5.25],[5.75,5.25],[5.85,5.15],[5.85,5.25],[5.55,5.55],[5.65,5.35],[5.75,5.25]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"line","points":[[5.85,5.15],[5.95,5.05],[5.95,4.95],[6.05,4.85]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"line","points":[[5.55,5.55],[5.45,5.65],[5.45,5.75],[5.35,5.75],[5.45,5.65]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"line","points":[[4.35,3.15],[4.65,3.05],[4.85,2.95],[4.95,2.85],[5.05,2.65],[5.15,2.55],[5.25,2.55],[5.55,2.45],[5.85,2.45],[5.95,2.55],[5.95,2.65],[6.05,2.75],[6.05,2.85],[5.95,2.65]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"line","points":[[6.05,2.85],[6.15,2.95]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"line","points":[[5.25,2.65],[5.45,2.65],[5.65,2.55],[5.85,2.55],[5.95,2.65],[6.05,2.65],[6.25,2.85],[6.25,3.05],[6.15,2.75]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"line","points":[[5.95,2.65],[5.35,2.65]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"line","points":[[5.55,2.65],[5.35,2.55]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"line","points":[[0.65,7.65],[0.65,7.75],[0.85,8.15],[0.85,8.25],[1.15,8.25],[1.35,8.15],[1.75,8.15],[1.85,8.25],[1.75,8.25],[1.75,8.15]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"line","points":[[1.75,8.15],[1.85,8.05],[1.95,8.05]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"line","points":[[1.05,8.15],[1.15,8.25],[1.75,8.25],[1.55,8.25]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"line","points":[[1.15,8.25],[1.25,8.35],[1.35,8.35],[1.35,8.25]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"line","points":[[6.25,3.05],[6.25,3.35],[6.25,3.05]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"line","points":[[6.25,3.35],[6.25,3.55],[6.35,3.65],[6.35,3.55],[6.25,3.35]],"color":"#fbf4ebff","thickness":15,"rounded":true,"layer":"under"}}
- {"id":"drawing-148","rules":[],"visual":{"kind":"line","points":[[7.45,8.65],[7.65,8.65],[7.65,8.75],[7.75,8.75],[7.55,8.85],[7.25,8.85],[7.25,8.75],[7.65,8.75]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"line","points":[[7.65,8.75],[7.25,8.75]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-150","rules":[],"visual":{"kind":"line","points":[[7.45,8.75],[7.15,8.75],[7.15,8.55]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-151","rules":[],"visual":{"kind":"line","points":[[8.75,7.45],[8.75,7.55],[8.85,7.75],[8.75,7.85],[8.65,7.85],[8.65,7.95],[8.45,7.95],[8.45,7.75],[8.35,7.75],[8.45,7.65],[8.45,7.75]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-152","rules":[],"visual":{"kind":"line","points":[[2.25,8.55],[2.15,8.55],[2.05,8.65],[2.05,8.75],[2.15,8.55]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-153","rules":[],"visual":{"kind":"line","points":[[2.05,8.75],[2.05,8.85],[2.55,8.75],[2.55,8.65]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-154","rules":[],"visual":{"kind":"line","points":[[0.65,6.95],[0.55,6.95],[0.45,7.05],[0.35,7.25],[0.35,7.55],[0.45,7.25],[0.45,7.15],[0.55,6.95]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-155","rules":[],"visual":{"kind":"line","points":[[0.45,7.05],[0.35,7.15],[0.35,7.25]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-156","rules":[],"visual":{"kind":"line","points":[[2.05,7.85],[2.05,8.25]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-157","rules":[],"visual":{"kind":"line","points":[[2.05,8.05],[1.95,7.95]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-158","rules":[],"visual":{"kind":"line","points":[[5.15,6.45],[5.35,6.45],[5.45,6.35],[5.55,6.15],[5.65,6.05],[5.65,5.95],[5.85,5.75],[5.75,5.75],[5.65,5.85],[5.65,5.95]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-159","rules":[],"visual":{"kind":"line","points":[[5.25,6.45],[5.25,6.35],[5.35,6.25],[5.45,6.25],[5.55,6.15]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-160","rules":[],"visual":{"kind":"line","points":[[5.75,5.85],[5.55,5.85],[5.55,5.95],[5.35,6.15],[5.35,6.25]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-161","rules":[],"visual":{"kind":"line","points":[[2.65,6.25],[2.75,6.25],[2.75,6.35],[2.85,6.45],[2.85,6.55],[2.95,6.55],[3.25,6.85],[3.35,6.85],[3.55,6.95],[3.65,6.95],[3.75,6.85],[3.65,6.85],[3.55,6.95]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-162","rules":[],"visual":{"kind":"line","points":[[2.85,6.55],[2.85,6.65],[2.95,6.75],[2.95,6.45],[3.05,6.55],[3.05,6.65],[2.95,6.45]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-163","rules":[],"visual":{"kind":"line","points":[[2.95,6.65],[2.95,6.85],[3.05,6.95],[3.15,6.95],[2.95,6.75],[3.15,6.85],[3.15,6.95]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-164","rules":[],"visual":{"kind":"line","points":[[3.25,6.85],[3.35,6.95],[3.45,6.95],[3.35,6.85]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-165","rules":[],"visual":{"kind":"line","points":[[3.55,6.95],[3.45,6.95]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-166","rules":[],"visual":{"kind":"line","points":[[3.65,6.95],[3.65,6.85],[3.45,6.85],[3.35,6.95],[3.15,6.95]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-167","rules":[],"visual":{"kind":"line","points":[[2.95,6.45],[2.95,6.35],[2.85,6.25],[2.85,6.15],[2.75,6.15],[2.85,6.25]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-168","rules":[],"visual":{"kind":"line","points":[[7.35,0.65],[7.45,0.65]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-169","rules":[],"visual":{"kind":"line","points":[[8.15,0.65],[8.15,0.55],[8.25,0.55],[8.25,0.35],[8.05,0.35]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
- {"id":"drawing-170","rules":[],"visual":{"kind":"line","points":[[8.75,1.35],[8.55,1.55],[8.55,1.65],[8.65,1.65],[8.65,1.85]],"color":"#e4f8e2ff","thickness":10,"rounded":true,"layer":"under"}}
```

Walking around the lake is something Nala deeply enjoys. Would you like to accompany her and help her to find the best path around the lake? If you want to throw things in the water for her to retrieve, know that she prefers logs over sticks!

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

Killer Cage Loop: Connect some cells in the grid to form an orthogonally connected, non-intersecting loop. It is okay for the loop to touch diagonally, but not orthogonally. The cage totals are the sum of the digits that are not on the loop in each cage. The Loop does not need to visit every cage. If the loop visits a cage, it can only enter and exit it exactly once. Digits may not repeat in cages.

Lake and Trees that are visible in the background are cosmetic details.
