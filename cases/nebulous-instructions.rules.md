---
fog:
  initiallyLit:
    - 10
    - 12
    - 13
    - 14
    - 15
    - 16
    - 17
    - 18
    - 19
    - 20
    - 23
    - 24
    - 25
    - 26
    - 27
    - 28
    - 29
    - 30
    - 31
    - 34
    - 35
    - 36
    - 37
    - 38
    - 39
    - 40
    - 41
    - 42
    - 44
    - 45
    - 46
    - 47
    - 48
    - 49
    - 50
    - 51
    - 52
    - 53
    - 56
    - 57
    - 58
    - 59
    - 60
    - 61
    - 62
    - 63
    - 64
    - 67
    - 68
    - 69
    - 70
    - 71
    - 72
    - 73
    - 74
    - 75
    - 76
    - 78
    - 79
    - 80
    - 81
    - 82
    - 83
    - 84
    - 85
    - 86
    - 89
    - 90
    - 91
    - 92
    - 93
    - 94
    - 95
    - 96
    - 97
    - 100
    - 101
    - 102
    - 103
    - 104
    - 105
    - 106
    - 107
    - 108
    - 110
  links:
    - trigger:
        - 60
      lights:
        - 112
        - 8
        - 5
        - 9
        - 7
        - 6
        - 111
        - 113
        - 114
        - 115
    - trigger:
        - 72
        - 82
        - 92
        - 102
      lights:
        - 3
        - 43
        - 65
        - 54
        - 32
        - 21
        - 99
        - 88
        - 77
        - 66
        - 55
        - 33
        - 117
        - 87
        - 4
        - 116
    - trigger:
        - 84
        - 25
      lights:
        - 22
        - 11
        - 0
        - 1
        - 2
        - 118
        - 119
        - 120
        - 109
        - 98
    - trigger:
        - 0
      lights:
        - 0
    - trigger:
        - 1
      lights:
        - 1
    - trigger:
        - 2
      lights:
        - 2
    - trigger:
        - 3
      lights:
        - 3
    - trigger:
        - 4
      lights:
        - 4
    - trigger:
        - 5
      lights:
        - 5
    - trigger:
        - 6
      lights:
        - 6
    - trigger:
        - 7
      lights:
        - 7
    - trigger:
        - 8
      lights:
        - 8
    - trigger:
        - 9
      lights:
        - 9
    - trigger:
        - 11
      lights:
        - 11
    - trigger:
        - 21
      lights:
        - 21
    - trigger:
        - 22
      lights:
        - 22
    - trigger:
        - 32
      lights:
        - 32
    - trigger:
        - 33
      lights:
        - 33
    - trigger:
        - 43
      lights:
        - 43
    - trigger:
        - 54
      lights:
        - 54
    - trigger:
        - 55
      lights:
        - 55
    - trigger:
        - 65
      lights:
        - 65
    - trigger:
        - 66
      lights:
        - 66
    - trigger:
        - 77
      lights:
        - 77
    - trigger:
        - 87
      lights:
        - 87
    - trigger:
        - 88
      lights:
        - 88
    - trigger:
        - 98
      lights:
        - 98
    - trigger:
        - 99
      lights:
        - 99
    - trigger:
        - 109
      lights:
        - 109
    - trigger:
        - 111
      lights:
        - 111
    - trigger:
        - 112
      lights:
        - 112
    - trigger:
        - 113
      lights:
        - 113
    - trigger:
        - 114
      lights:
        - 114
    - trigger:
        - 115
      lights:
        - 115
    - trigger:
        - 116
      lights:
        - 116
    - trigger:
        - 117
      lights:
        - 117
    - trigger:
        - 118
      lights:
        - 118
    - trigger:
        - 119
      lights:
        - 119
    - trigger:
        - 120
      lights:
        - 120
format: open-rules
title: Nebulous Instructions
setter: sujoyku
source: https://sudokupad.app/9h3bjuji0s
case: https://sudoku-sleuth.com/cases/nebulous-instructions
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - A source line layer still needs to be included in our reading.
  - We have only read part of the published answer so far.
board:
  rows: 11
  cols: 11
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r2c2
      - r2c3
      - r2c4
      - r3c2
      - r3c3
      - r3c4
      - r4c2
      - r4c3
      - r4c4
    - - r2c5
      - r2c6
      - r2c7
      - r3c5
      - r3c6
      - r3c7
      - r4c5
      - r4c6
      - r4c7
    - - r2c8
      - r2c9
      - r2c10
      - r3c8
      - r3c9
      - r3c10
      - r4c8
      - r4c9
      - r4c10
    - - r5c2
      - r5c3
      - r5c4
      - r6c2
      - r6c3
      - r6c4
      - r7c2
      - r7c3
      - r7c4
    - - r5c5
      - r5c6
      - r5c7
      - r6c5
      - r6c6
      - r6c7
      - r7c5
      - r7c6
      - r7c7
    - - r5c8
      - r5c9
      - r5c10
      - r6c8
      - r6c9
      - r6c10
      - r7c8
      - r7c9
      - r7c10
    - - r8c2
      - r8c3
      - r8c4
      - r9c2
      - r9c3
      - r9c4
      - r10c2
      - r10c3
      - r10c4
    - - r8c5
      - r8c6
      - r8c7
      - r9c5
      - r9c6
      - r9c7
      - r10c5
      - r10c6
      - r10c7
    - - r8c8
      - r8c9
      - r8c10
      - r9c8
      - r9c9
      - r9c10
      - r10c8
      - r10c9
      - r10c10
---

```rules
unique-1: unique r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9-r2c10 stated true
unique-2: unique r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9-r3c10 stated true
unique-3: unique r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9-r4c10 stated true
unique-4: unique r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9-r5c10 stated true
unique-5: unique r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9-r6c10 stated true
unique-6: unique r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r7c10 stated true
unique-7: unique r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9-r8c10 stated true
unique-8: unique r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9-r9c10 stated true
unique-9: unique r10c2-r10c3-r10c4-r10c5-r10c6-r10c7-r10c8-r10c9-r10c10 stated true
unique-10: unique r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r10c2 stated true
unique-11: unique r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3-r10c3 stated true
unique-12: unique r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r10c4 stated true
unique-13: unique r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5-r10c5 stated true
unique-14: unique r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6-r10c6 stated true
unique-15: unique r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7-r10c7 stated true
unique-16: unique r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8-r10c8 stated true
unique-17: unique r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9-r10c9 stated true
unique-18: unique r2c10-r3c10-r4c10-r5c10-r6c10-r7c10-r8c10-r9c10-r10c10 stated true
unique-19: unique r2c2-r2c3-r2c4-r3c2-r3c3-r3c4-r4c2-r4c3-r4c4 stated true
unique-20: unique r2c5-r2c6-r2c7-r3c5-r3c6-r3c7-r4c5-r4c6-r4c7 stated true
unique-21: unique r2c8-r2c9-r2c10-r3c8-r3c9-r3c10-r4c8-r4c9-r4c10 stated true
unique-22: unique r5c2-r5c3-r5c4-r6c2-r6c3-r6c4-r7c2-r7c3-r7c4 stated true
unique-23: unique r5c5-r5c6-r5c7-r6c5-r6c6-r6c7-r7c5-r7c6-r7c7 stated true
unique-24: unique r5c8-r5c9-r5c10-r6c8-r6c9-r6c10-r7c8-r7c9-r7c10 stated true
unique-25: unique r8c2-r8c3-r8c4-r9c2-r9c3-r9c4-r10c2-r10c3-r10c4 stated true
unique-26: unique r8c5-r8c6-r8c7-r9c5-r9c6-r9c7-r10c5-r10c6-r10c7 stated true
unique-27: unique r8c8-r8c9-r8c10-r9c8-r9c9-r9c10-r10c8-r10c9-r10c10 stated true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,10.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,10.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,10.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[10.5,2.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"7","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"?","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2,1],[2,0],[11,0],[11,1],[10,1],[10,0]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2,0],[1,0],[1,1],[0,1],[0,11],[1,11],[1,10],[0,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[3,0],[3,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4,0],[4,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5,0],[5,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6,0],[6,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7,0],[7,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[8,0],[8,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[9,0],[9,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[11,1],[11,11],[1,11]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[11,2],[10,2]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[11,3],[10,3]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[1,0],[0,0],[0,1]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[0,2],[1,2]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[0,3],[1,3]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0,4],[1,4]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[0,5],[1,5]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[0,6],[1,6]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0,7],[1,7]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[0,8],[1,8]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[0,9],[1,9]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[2,11],[2,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[3,11],[3,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4,11],[4,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[5,11],[5,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[6,11],[6,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[7,11],[7,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[8,11],[8,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[9,11],[9,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[10,11],[10,10],[11,10]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[11,9],[10,9]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[11,8],[10,8]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[11,7],[10,7]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[11,6],[10,6]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[11,5],[10,5]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[11,4],[10,4]],"color":"#FFFFFF","thickness":2.56,"rounded":true,"layer":"over"}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[5,7],[7,7],[7,10],[10,10],[10,7],[7,7]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[5,7],[4,7],[4,10],[7,10]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[7,7],[7,4],[10,4],[10,7]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[10,4],[10,1],[7,1],[7,4],[4,4],[4,7],[1,7],[1,10],[4,10]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"line","points":[[7,1],[4,1],[4,4],[1,4],[1,7]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"line","points":[[4,1],[1,1],[1,4]],"color":"#000000","thickness":3.84,"rounded":true,"layer":"over"}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"line","points":[[0,0],[0,1],[1,1]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"line","points":[[0,1],[0,2],[1,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"line","points":[[0,2],[0,3],[1,3]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"line","points":[[0,3],[0,4],[1,4]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"line","points":[[0,4],[0,5],[1,5]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"line","points":[[0,5],[0,6],[1,6]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"line","points":[[0,6],[0,7],[1,7]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"line","points":[[0,7],[0,8],[1,8]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"line","points":[[0,8],[0,9],[1,9]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"line","points":[[0,9],[0,10],[1,10]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"line","points":[[0,0],[0,1],[1,1]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"line","points":[[10,0],[10,1],[11,1]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"line","points":[[10,1],[10,2],[11,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"line","points":[[10,2],[10,3],[11,3]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"line","points":[[10,3],[10,4],[11,4]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"line","points":[[10,4],[10,5],[11,5]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"line","points":[[10,5],[10,6],[11,6]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"line","points":[[10,6],[10,7],[11,7]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"line","points":[[10,7],[10,8],[11,8]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"line","points":[[10,8],[10,9],[11,9]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"line","points":[[10,9],[10,10],[11,10]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[1,0],[1,1],[1,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[2,0],[2,1],[2,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[3,0],[3,1],[3,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[4,0],[4,1],[4,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"line","points":[[5,0],[5,1],[5,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"line","points":[[6,0],[6,1],[6,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"line","points":[[7,0],[7,1],[7,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"line","points":[[8,0],[8,1],[8,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"line","points":[[9,0],[9,1],[9,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"line","points":[[10,0],[10,1],[10,2]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"line","points":[[1,10],[1,11],[2,11]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"line","points":[[2,10],[2,11],[3,11]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"line","points":[[3,10],[3,11],[4,11]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"line","points":[[4,10],[4,11],[5,11]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"line","points":[[5,10],[5,11],[6,11]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"line","points":[[6,10],[6,11],[7,11]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"line","points":[[7,10],[7,11],[8,11]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"line","points":[[8,10],[8,11],[9,11]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"line","points":[[9,10],[9,11],[10,11]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"line","points":[[10,10],[10,11],[11,11]],"color":"#afafafff","thickness":2.56,"rounded":true,"layer":"grid"}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"line","points":[[10.306,2.694],[10.094,2.906]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"line","points":[[10.306,0.694],[10.094,0.906]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"line","points":[[4.694,0.694],[4.906,0.906]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"line","points":[[6.306,10.306],[6.094,10.094]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"line","points":[[3.694,10.306],[3.906,10.094]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"line","points":[[0.694,10.306],[0.906,10.094]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"line","points":[[0.694,8.306],[0.906,8.094]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"line","points":[[0.694,3.694],[0.906,3.906]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"line","points":[[0.694,0.694],[0.906,0.906]],"color":"#0169cdff","thickness":2.56,"headLength":0.15,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 regions has to contain the digits from 1 to 9 once each.

- Dynamic Fog: Some of the clues are covered in fog. Correctly placing a digit may reveal additional clues. No guessing is required. 

- Diagonal Target Sums: A clue X outside the grid indicates that the digit X appears on the marked diagonal and all the digits that (seen from the clue) appear on the diagonal before reaching the first instance of the digit X must sum to X. A ? clue represents a value that must be determined by the solver.
