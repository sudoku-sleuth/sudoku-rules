---
fog:
  initiallyLit:
    - 18
    - 19
    - 20
    - 21
    - 27
    - 28
format: open-rules
title: Another Lost Toy!
setter: Sandra & Nala
source: ""
case: https://sudoku-sleuth.com/cases/another-lost-toy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
quadruple-1: quadruple r3c1-r3c2-r4c1-r4c2 digits [1,2,3,4]
quadruple-2: quadruple r1c5-r1c6-r2c5-r2c6 digits [6,2,7,4]
quadruple-3: quadruple r2c8-r2c9-r3c8-r3c9 digits [3,8,6,7]
quadruple-4: quadruple r7c1-r7c2-r8c1-r8c2 digits [6,7]
quadruple-5: quadruple r8c5-r8c6-r9c5-r9c6 digits [4,9]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.65,7.65],"width":0.22,"height":0.22,"rounded":true,"fill":"#62c2eb","stroke":"#0083d7","thickness":1,"opacity":0.5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.45,3.35],[2.55,3.25],[2.65,3.35]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.45,2.35],[2.55,2.25],[2.65,2.35]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.35,3.55],[1.25,3.45],[1.35,3.35]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.65,3.65],[0.55,3.75],[0.45,3.65]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.05,7.55],[1.45,7.55],[1.45,7.25]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.95,6.55],[0.55,6.55],[0.55,6.25]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.45,1.95],[0.45,1.55],[0.75,1.55]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.55,0.95],[8.55,0.55],[8.25,0.55]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.05,1.45],[7.45,1.45],[7.45,1.75]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.95,6.55],[7.55,6.55],[7.55,6.25]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.95,6.55],[6.55,6.55],[6.55,6.25]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.55,4.95],[6.55,4.55],[6.25,4.55]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.55,2.95],[8.55,2.55],[8.25,2.55]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.95,2.55],[2.55,2.55],[2.55,2.25]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.95,3.55],[2.55,3.55],[2.55,3.25]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1.55,3.05],[1.55,3.45],[1.25,3.45]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0.95,3.45],[0.55,3.45],[0.55,3.75]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.55,7.35],[1.45,7.25],[1.35,7.35]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.45,6.35],[0.55,6.25],[0.65,6.35]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[0.65,1.65],[0.75,1.55],[0.65,1.45]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[8.35,0.45],[8.25,0.55],[8.35,0.65]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[7.35,1.65],[7.45,1.75],[7.55,1.65]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[7.45,6.35],[7.55,6.25],[7.65,6.35]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[6.45,6.35],[6.55,6.25],[6.65,6.35]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6.35,4.45],[6.25,4.55],[6.35,4.65]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[8.35,2.45],[8.25,2.55],[8.35,2.65]],"color":"#a59e9eff","thickness":3,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[6.55,7.45],[6.55,7.95],[6.65,8.15],[6.75,8.25],[6.85,8.25],[6.85,7.75],[6.95,8.05],[6.95,8.25],[7.05,8.35],[7.05,7.65],[6.95,7.35],[6.95,6.15],[7.05,6.05],[7.05,6.35],[7.15,6.75],[7.25,6.95],[7.25,7.15],[7.35,7.25],[7.35,7.35],[7.45,7.45],[7.45,7.35],[7.55,7.45],[7.55,6.95],[7.55,7.15],[7.65,7.75],[7.65,7.85],[7.65,6.85],[7.55,6.75],[7.55,6.95]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[6.85,7.75],[6.85,7.45],[6.85,7.65]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[7.55,6.95],[7.45,6.15],[7.55,6.25],[7.55,6.45],[7.55,6.25]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[7.55,6.25],[7.55,4.75],[7.65,4.75],[7.65,4.25],[7.75,4.35],[7.75,4.45],[7.85,3.95],[7.85,2.95],[7.75,2.35],[7.75,1.95]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[7.55,4.75],[7.55,4.15],[7.55,4.55]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[7.65,4.25],[7.65,3.35],[7.65,3.95]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[7.55,4.15],[7.55,3.75],[7.45,4.35],[7.45,5.65],[7.45,5.45]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[7.55,3.95],[7.55,3.45],[7.45,3.55],[7.45,5.25]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[7.65,1.95],[7.65,2.55],[7.65,2.25]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[7.65,2.55],[7.65,3.15],[7.65,2.85]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[7.45,6.05],[7.45,5.65],[7.45,5.85]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[7.45,5.85],[7.45,7.35],[7.35,6.95],[7.35,6.75],[7.25,6.45],[7.25,5.45],[7.25,5.55],[7.25,5.35],[7.25,5.45]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[7.45,6.15],[7.45,5.95],[7.35,5.85],[7.35,5.55],[7.25,5.25],[7.25,5.35],[7.35,4.95],[7.35,4.85],[7.45,4.55],[7.45,4.25],[7.45,4.35],[7.25,4.55],[7.25,5.25]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[7.25,5.45],[7.25,5.05]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[7.85,2.75],[7.85,1.85]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[7.05,5.75],[6.95,5.65],[7.05,5.05],[7.05,4.95]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[7.55,6.75],[7.55,6.45],[7.55,6.75]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[6.85,7.45],[6.85,7.15],[6.85,7.45]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[7.65,3.35],[7.65,3.15],[7.65,3.35]],"color":"#dae9daff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[4.05,5.55],[3.85,5.65],[3.55,5.25],[3.65,5.15],[3.75,5.35],[3.75,5.45],[3.65,5.15]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[3.65,5.15],[3.65,4.55]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[4.15,5.35],[4.15,4.95],[4.25,4.95],[4.25,5.75],[4.05,5.95],[4.05,5.85],[4.35,5.25],[4.35,5.15],[4.15,4.75],[4.15,4.95]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[4.15,4.95],[3.95,4.75]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[4.15,4.75],[4.15,4.65]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[3.75,7.55],[3.25,8.05],[3.25,8.65],[3.45,8.65],[3.55,8.35],[3.65,7.95],[3.65,7.85],[3.65,8.55],[3.85,8.55],[3.95,8.45],[3.95,8.25]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[3.95,8.35],[3.95,8.05],[3.85,7.85],[3.95,7.85]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[2.15,6.55],[2.15,6.65],[2.25,7.15],[2.45,7.35],[2.55,7.15],[2.55,7.05],[2.55,7.35],[2.65,7.65],[2.75,7.55],[2.95,6.95],[2.95,7.55],[2.95,7.45],[3.05,7.15],[3.15,7.05],[3.15,6.95],[3.25,6.75],[3.35,6.65],[3.35,6.25],[3.25,6.15],[2.85,5.65],[2.65,5.65],[2.45,5.75],[2.65,5.95],[2.65,6.45]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[2.15,6.65],[2.15,6.75],[2.25,6.75],[2.25,6.35],[2.25,6.55]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[2.85,5.65],[2.85,5.55],[2.95,5.55],[2.95,5.45],[2.75,5.35],[2.65,5.35],[2.85,5.55]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[2.25,6.35],[2.15,6.15],[1.85,5.65],[1.75,5.35],[1.85,5.45],[2.35,6.15],[2.55,6.55],[2.55,6.65],[3.05,6.65],[3.05,6.55],[2.95,6.35],[2.95,6.85],[3.05,7.05],[3.15,6.85]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[2.85,5.55],[2.95,5.85],[2.95,6.35],[2.35,5.55],[2.35,5.75],[2.45,5.75],[2.25,5.85],[2.25,5.95],[2.35,6.05],[2.35,5.75]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[2.95,5.85],[3.05,6.05]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[2.15,6.15],[2.15,6.05],[2.05,5.95],[2.15,5.55],[2.15,5.25],[2.35,5.25],[2.35,5.55],[2.25,5.45],[2.25,5.25],[2.65,5.35],[2.45,5.35],[2.45,5.45],[2.75,5.75]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[1.75,5.35],[1.75,5.25]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[2.05,6.85],[2.45,6.85],[2.55,6.75],[2.65,6.75],[2.65,6.85],[2.55,7.05],[2.55,6.85],[2.45,6.95],[2.25,6.85]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[2.25,6.85],[2.25,5.95],[2.05,5.75],[1.85,5.75],[1.95,5.75],[1.95,5.85],[2.55,6.65],[2.35,6.55],[2.65,6.65],[2.65,6.75],[2.55,6.85]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[1.75,7.45],[1.75,7.75],[1.85,8.15],[1.95,8.25],[2.05,8.25],[2.05,8.05],[2.15,7.85],[2.15,7.65],[2.25,7.15],[2.15,6.75],[2.15,6.85],[1.85,7.45],[1.85,7.65],[1.75,7.65],[1.35,7.55],[1.35,7.05],[1.35,7.15],[1.55,7.25],[1.65,7.35],[1.65,7.85],[1.95,7.85],[1.95,7.35],[1.85,7.15],[1.55,6.65],[1.25,6.25],[1.25,6.15],[1.65,6.15],[1.75,6.05],[1.45,5.75],[1.25,5.65],[1.25,5.85],[1.55,6.15]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[1.85,7.45],[1.85,6.45],[1.45,5.85],[1.45,5.95],[1.55,5.95],[1.55,6.05],[2.15,6.75],[2.05,6.65],[1.95,6.45],[2.15,6.45],[2.35,6.55],[1.85,6.35],[1.65,6.25],[1.55,6.15]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[1.65,6.25],[1.55,6.05],[1.45,6.05],[1.15,5.85],[0.95,5.65],[1.05,5.35],[1.15,4.95],[1.05,4.95],[0.95,5.05],[0.95,5.25],[1.25,5.65],[1.25,5.05],[1.95,5.85],[2.05,5.95],[1.85,5.35],[1.85,4.85],[1.75,4.65],[1.65,4.65],[1.65,5.55],[1.55,5.55],[1.55,5.45],[1.45,4.65],[1.55,4.75]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[0.95,5.65],[0.85,6.15],[1.15,6.35],[1.25,6.45],[1.25,6.55],[1.35,6.85],[1.35,7.05],[1.15,7.05],[0.95,7.15],[0.65,7.45],[0.65,6.75],[0.85,6.15]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[0.85,6.15],[0.55,6.15],[0.55,7.05],[0.75,7.15],[0.85,7.05],[0.85,6.95],[0.95,6.55],[0.95,6.35],[0.95,6.65],[1.05,7.25],[1.25,6.05],[1.25,5.85],[1.05,5.45],[1.05,5.05],[0.95,5.05],[0.85,5.15],[0.75,5.15],[0.65,5.25],[0.65,5.35],[0.75,5.35],[0.75,5.45],[0.65,6.25],[0.65,6.35],[0.55,6.55]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[1.05,5.15],[0.95,6.05],[0.95,6.35]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[0.55,6.55],[0.55,7.35],[0.65,7.35],[0.65,6.75],[0.75,6.75],[0.85,6.85],[1.25,6.95],[2.15,6.95],[2.25,7.05],[2.35,7.05],[1.65,6.45],[1.55,5.85],[1.55,5.75],[1.85,5.75],[1.65,5.65],[0.55,5.65],[0.65,6.05],[0.85,6.25]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[0.85,6.95],[0.55,6.95],[0.45,6.85],[0.45,6.55]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[0.75,5.45],[0.65,5.45],[0.55,5.55],[0.55,6.15],[0.65,6.75],[0.55,6.65],[0.45,6.35],[0.45,5.65],[0.55,5.25],[0.75,5.05],[0.55,5.15],[0.45,5.15]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[0.45,6.65],[0.35,6.65],[0.25,6.45],[0.25,5.75],[0.35,5.65],[0.55,5.55],[0.55,5.35],[0.65,5.25],[0.65,4.65],[1.45,4.65],[1.45,4.45],[1.35,4.25],[1.25,4.15],[1.25,4.05],[0.95,4.05],[0.85,4.15],[0.85,4.25],[0.95,4.65]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[3.95,4.65],[3.95,5.15]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[3.95,4.45],[3.95,4.35],[4.05,4.15]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[4.25,4.55],[4.35,4.75]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[1.15,4.25],[1.15,4.65],[1.25,4.75]],"color":"#f6e5c9ff","thickness":26,"rounded":true,"layer":"under"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[4.75,6.85],[4.45,6.75],[4.25,6.75],[4.65,6.95]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[3.85,6.65],[3.95,6.65],[4.25,6.75],[5.85,6.75],[6.25,6.85],[6.35,6.95],[6.45,6.95],[6.75,6.85],[6.85,6.75],[6.85,7.15],[7.05,7.35],[7.15,7.35],[7.25,7.45],[7.25,7.55],[7.35,7.65],[7.35,7.75],[7.55,7.95]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[3.95,6.65],[4.05,6.65],[4.25,6.75],[3.85,6.75],[4.25,6.75]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[6.85,6.75],[6.35,6.75],[6.55,6.65],[6.65,6.65],[6.85,6.55]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[7.35,6.75],[6.75,6.85],[6.75,7.35],[6.85,7.75],[6.85,7.85],[6.95,7.95],[6.95,8.05],[7.05,8.05],[6.95,7.85],[6.95,7.75],[6.85,7.35],[6.95,7.05],[6.95,6.75],[6.85,6.45],[6.75,6.45],[6.65,6.65]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[6.85,6.95],[6.75,6.75],[6.75,6.85],[6.65,6.75],[6.55,6.75]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[7.55,7.45],[7.15,7.35],[7.05,7.25],[6.45,6.95],[6.65,7.15],[6.65,7.05]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[6.45,6.95],[5.85,7.05]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[6.65,7.05],[6.55,6.95],[6.75,6.95],[6.45,6.85],[6.55,6.95]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[6.55,6.65],[6.45,6.65],[6.35,6.75],[5.85,6.75],[6.05,6.75],[5.95,6.75]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[6.45,6.65],[6.05,6.65],[5.65,6.75],[5.85,6.75],[5.15,6.75],[5.25,6.75],[5.35,6.85],[5.85,6.85],[6.55,6.95]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[6.75,7.25],[6.55,7.25]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[6.95,6.75],[6.95,6.65],[7.15,6.45],[6.85,6.45],[6.85,6.25],[6.75,6.45],[6.95,6.35],[7.05,6.45]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[7.25,6.25],[6.95,6.35],[6.95,6.45],[6.65,6.45],[6.75,6.45],[6.75,6.15],[6.95,5.95],[6.95,5.45],[6.95,5.55]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[6.75,6.45],[6.65,6.55],[6.55,6.55],[6.25,6.65],[6.65,6.45],[6.35,6.55],[6.15,6.55],[6.25,6.55],[6.45,6.45],[6.65,6.25],[6.75,6.05],[6.85,6.05],[6.85,6.25],[6.75,6.15],[6.75,5.95],[6.85,5.75],[6.85,5.65],[6.95,5.45],[7.05,5.35],[7.15,5.35],[7.35,5.15],[7.45,5.15],[7.65,4.95]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[6.75,6.75],[6.75,6.55]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[7.15,6.45],[7.15,6.35],[7.05,6.25]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[6.95,5.45],[6.95,5.35]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[6.15,6.55],[6.05,6.65],[5.45,6.75],[5.55,6.75],[6.15,6.85],[6.45,6.85],[6.35,6.65]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[6.55,6.35],[6.25,6.35],[6.35,6.25],[6.45,6.25],[6.55,6.15],[6.65,6.15],[6.85,5.95],[7.05,5.85],[7.15,5.85]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[6.35,6.45],[5.65,6.75],[5.55,6.75]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[5.45,6.75],[5.35,6.75]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[4.75,6.75],[4.35,6.95],[5.45,6.95],[6.05,7.05],[6.25,7.05],[6.35,7.15],[6.55,7.15],[7.05,7.25],[6.85,7.05],[6.65,6.95],[6.15,6.75],[6.05,6.75],[6.25,6.75],[6.15,6.75]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[3.95,6.75],[4.85,6.75],[5.45,6.55],[6.25,6.35],[6.15,6.45],[5.95,6.55],[5.85,6.65],[5.15,6.65]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"line","points":[[3.45,6.75],[3.35,6.75],[3.85,6.75],[3.65,6.75],[2.85,7.05],[2.55,7.25]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"line","points":[[4.45,6.45],[3.65,6.65],[3.35,6.75],[0.95,6.75]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"line","points":[[3.45,6.85],[3.55,6.95],[4.35,6.95],[4.15,7.15],[4.25,7.05],[4.25,6.95]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"line","points":[[4.25,8.05],[4.25,7.85],[4.15,7.75],[4.15,7.15],[3.75,7.55],[3.45,8.05],[3.45,8.35]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"line","points":[[3.25,6.45],[4.25,6.55],[4.85,6.65],[5.15,6.65],[4.55,6.45],[4.15,5.95],[4.05,5.45],[4.05,5.15]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"line","points":[[6.45,6.35],[6.65,6.15],[6.65,5.35],[7.05,4.95],[7.05,4.85],[6.95,5.25],[6.85,5.45],[6.85,5.55]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"line","points":[[6.75,5.25],[6.75,5.85]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"line","points":[[3.05,6.65],[2.85,6.65],[2.25,6.45]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"line","points":[[3.95,6.55],[3.55,6.55],[3.65,6.55]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"line","points":[[3.55,6.55],[3.35,6.55],[2.75,6.45]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"line","points":[[3.35,6.55],[2.85,6.55],[2.45,6.45],[2.25,6.35],[1.55,5.95],[1.15,5.75],[1.25,5.85]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"line","points":[[6.65,7.15],[6.65,7.75],[6.85,7.95],[6.85,7.85],[6.75,7.85]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"line","points":[[6.65,7.15],[6.75,7.35],[6.75,7.85]],"color":"#e8e1d6ff","thickness":12,"rounded":true,"layer":"under"}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"line","points":[[4.05,7.65],[4.15,7.55],[4.35,7.55],[4.45,7.65],[4.65,7.65]],"color":"#5bc1ebff","thickness":4,"rounded":true,"layer":"under"}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"line","points":[[4.55,7.85],[4.35,7.85]],"color":"#5bc1ebff","thickness":4,"rounded":true,"layer":"under"}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"line","points":[[2.75,6.25],[2.55,6.15],[2.25,6.15],[2.15,6.05],[1.85,5.85],[1.75,5.65],[1.45,5.35],[1.85,5.75],[2.05,5.85],[2.15,5.85],[2.55,5.95],[2.65,5.95],[2.65,6.05],[2.55,5.95]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"line","points":[[1.45,5.35],[1.15,5.05]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"line","points":[[2.55,5.95],[2.45,5.85],[2.25,5.75],[2.15,5.75],[1.95,5.55],[1.85,5.55],[1.75,5.35],[1.75,5.25],[1.65,5.15],[1.65,5.05],[1.55,4.95],[1.45,5.05],[1.35,4.95],[1.35,4.65],[1.25,4.55],[1.25,4.75],[1.15,4.85],[1.05,4.75],[1.05,4.35],[0.95,4.35],[0.95,4.65],[0.85,4.75],[0.85,4.95]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"line","points":[[1.25,4.55],[1.25,4.45]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"line","points":[[0.65,5.85],[0.65,6.25],[0.95,6.25],[1.15,6.45],[1.15,6.35],[1.35,6.35],[1.45,6.45]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"line","points":[[1.65,7.55],[1.65,7.05],[1.85,7.25],[2.05,7.05],[2.15,7.05],[2.35,7.25],[2.35,7.05],[2.45,6.95]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"line","points":[[3.75,7.85],[3.65,8.05],[3.65,8.15],[3.75,8.25],[3.55,8.25],[3.55,8.65]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"line","points":[[3.95,5.55],[3.85,5.55],[3.85,5.45],[3.75,5.45],[3.75,4.85]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"line","points":[[4.25,5.25],[4.25,5.15],[4.35,5.05],[4.35,4.95],[4.25,4.85],[4.25,4.65],[4.15,4.55],[4.25,4.45],[4.15,4.35]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"line","points":[[1.05,6.65],[0.95,6.65],[1.05,6.75],[1.25,6.75],[1.25,6.95]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"line","points":[[1.75,6.95],[1.75,6.85],[1.85,6.85],[1.85,6.75]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"line","points":[[1.65,6.05],[1.75,5.95],[1.75,5.75]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"line","points":[[0.95,5.65],[0.95,5.45],[1.15,5.25],[1.25,5.25]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"line","points":[[1.05,5.35],[1.05,5.25]],"color":"#f8e0ceff","thickness":24,"rounded":true,"layer":"under"}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"line","points":[[6.85,8.15],[6.95,8.25],[6.95,8.45],[7.05,8.35],[6.85,8.35],[6.95,8.45]],"color":"#f7c0acff","thickness":5,"rounded":true,"layer":"under"}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"line","points":[[6.95,8.25],[6.85,8.25],[6.85,8.35],[6.95,8.35],[6.85,8.25]],"color":"#f7c0acff","thickness":5,"rounded":true,"layer":"under"}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"line","points":[[7.55,4.25],[7.65,4.25],[7.85,4.05],[7.85,4.15],[7.75,4.25],[7.65,4.15],[7.75,4.05],[7.75,4.15]],"color":"#f7c0acff","thickness":5,"rounded":true,"layer":"under"}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"line","points":[[7.85,4.05],[7.75,4.05]],"color":"#f7c0acff","thickness":5,"rounded":true,"layer":"under"}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"line","points":[[5.05,4.85],[5.15,4.85],[5.15,5.05],[5.25,5.05],[5.25,4.95],[5.15,4.85]],"color":"#f9d9c1ff","thickness":6,"rounded":true,"layer":"under"}}
```

Oh no! Where is it? 
After a loooooooong throw and some weird rustling noises, Nala went for a long search, but came back without her toy and a sad look on her face. Where could it be? Could you help her find it?

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

Every digit that appears in a circle must also appear in at least one of its 4 surrounding cells. 

If an arrow is present in a cell, the digit in the cell the arrow comes from appears in the grid in the direction of the arrow at a distance of N cells, where N is the digit in the arrow's cell. (Not all arrows are necessarily given - there is not negative constraint.)

Example: If R3C4 had an arrow pointing to the left and was a 3, and the digit below that arrow in R4C4 was a 5, then another 5 would be placed in R3C1. 

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
