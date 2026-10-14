---
fog:
  initiallyLit:
    - r1c1
    - r1c2
    - r1c3
    - r1c4
    - r2c1
    - r2c2
    - r2c3
    - r2c4
    - r3c1
    - r3c2
    - r3c3
    - r3c4
    - r4c1
    - r4c2
    - r4c3
    - r4c4
  links:
    - trigger:
        - r4c4
        - r2c1
      lights:
        - r5c1
        - r5c2
        - r5c3
        - r6c1
        - r6c2
        - r6c3
    - trigger:
        - r1c2
        - r2c2
        - r3c2
        - r3c1
        - r3c3
        - r3c4
        - r5c3
        - r4c2
      lights:
        - r1c5
        - r1c6
        - r2c5
        - r2c6
    - trigger:
        - r1c1
        - r1c3
        - r2c3
        - r2c4
        - r1c4
        - r1c5
        - r1c6
        - r2c6
        - r3c6
        - r3c5
        - r2c5
        - r6c6
      lights:
        - r4c5
        - r4c6
        - r5c4
        - r5c5
        - r5c6
        - r6c4
        - r6c5
    - trigger:
        - r1c5
      lights:
        - r1c5
    - trigger:
        - r1c6
      lights:
        - r1c6
    - trigger:
        - r2c5
      lights:
        - r2c5
    - trigger:
        - r2c6
      lights:
        - r2c6
    - trigger:
        - r3c5
      lights:
        - r3c5
    - trigger:
        - r3c6
      lights:
        - r3c6
    - trigger:
        - r4c5
      lights:
        - r4c5
    - trigger:
        - r4c6
      lights:
        - r4c6
    - trigger:
        - r5c1
      lights:
        - r5c1
    - trigger:
        - r5c2
      lights:
        - r5c2
    - trigger:
        - r5c3
      lights:
        - r5c3
    - trigger:
        - r5c4
      lights:
        - r5c4
    - trigger:
        - r5c5
      lights:
        - r5c5
    - trigger:
        - r5c6
      lights:
        - r5c6
    - trigger:
        - r6c1
      lights:
        - r6c1
    - trigger:
        - r6c2
      lights:
        - r6c2
    - trigger:
        - r6c3
      lights:
        - r6c3
    - trigger:
        - r6c4
      lights:
        - r6c4
    - trigger:
        - r6c5
      lights:
        - r6c5
    - trigger:
        - r6c6
      lights:
        - r6c6
format: open-rules
title: Cheese Greater
setter: Marty Sears
source: https://sudokupad.app/b8lpeurpdf
case: https://sudoku-sleuth.com/cases/cheese-greater
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
exported: d5183a5609bd24d16aa78cb98b2d37e9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6 stated true
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6 stated true
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6 stated true
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6 stated true
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6 stated true
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6 stated true
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1 stated true
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2 stated true
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3 stated true
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4 stated true
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5 stated true
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6 stated true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.167,5.5],[6.167,6.167],[-0.167,6.167],[-0.167,-0.167],[6.167,-0.167],[6.167,5.5]],"color":"#81d8f5ff","thickness":11.52,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1,5],[6,5],[6,6],[5,6],[5,5]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5,5],[5,4],[4,4],[4,6],[3,6],[3,4],[4,4]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3,6],[2,6],[2,4],[3,4],[3,3],[2,3],[2,4]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2,6],[1,6],[1,4],[2,4]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1,5],[0,5],[0,6],[1,6]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4,6],[5,6]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6,5],[6,4],[5,4],[5,3],[6,3],[6,4]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4,4],[4,3],[5,3],[5,2],[6,2],[6,3]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0,5],[0,4],[1,4],[1,3],[2,3],[2,2],[3,2],[3,3],[4,3],[4,2],[5,2],[5,1],[6,1],[6,2]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6,1],[6,0],[5,0],[5,1],[4,1],[4,2],[3,2],[3,1],[4,1]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4,1],[4,0],[5,0]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0,4],[0,3],[1,3],[1,2],[2,2],[2,1],[3,1],[3,0],[4,0]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[0,3],[0,2],[1,2],[1,1],[2,1],[2,0],[3,0]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0,2],[0,1],[1,1],[1,0],[2,0]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[0,1],[0,0],[1,0]],"color":"#e7e7e7ff","thickness":1.92,"rounded":true,"layer":"over"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.9,1.15],"width":0.07,"height":0.07,"rounded":false,"fill":"#b1ab76ff","thickness":0,"angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,2.9],"width":0.07,"height":0.07,"rounded":false,"fill":"#b1ab76ff","thickness":0,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.9,2.15],"width":0.07,"height":0.07,"rounded":false,"fill":"#b1ab76ff","thickness":0,"angle":45}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,3.9],"width":0.07,"height":0.07,"rounded":false,"fill":"#b1ab76ff","thickness":0,"angle":45}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.9,0.15],"width":0.07,"height":0.07,"rounded":false,"fill":"#b1ab76ff","thickness":0,"angle":45}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,1.9],"width":0.07,"height":0.07,"rounded":false,"fill":"#b1ab76ff","thickness":0,"angle":45}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.15,5.9],"width":0.07,"height":0.07,"rounded":false,"fill":"#b1ab76ff","thickness":0,"angle":45}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.9,4.15],"width":0.07,"height":0.07,"rounded":false,"fill":"#b1ab76ff","thickness":0,"angle":45}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,4.9],"width":0.07,"height":0.07,"rounded":false,"fill":"#b1ab76ff","thickness":0,"angle":45}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.9,3.15],"width":0.07,"height":0.07,"rounded":false,"fill":"#b1ab76ff","thickness":0,"angle":45}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.286,3],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.786,3],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.286,3],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.786,3],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.357,5],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.857,5],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.357,5],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.357,4],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.857,4],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.357,4],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.429,2],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.571,2],"width":1.8,"height":0.1,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.214,1],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.714,1],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.714,1],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.214,1],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.429,3],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.143,3],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.643,3],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.786,2],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.286,2],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.786,2],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.643,4],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.714,4],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.214,5],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.714,5],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.214,5],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.714,5],"width":1.8,"height":0.06,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.857,1],"width":1.8,"height":0.14,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.357,1],"width":1.8,"height":0.14,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.643,2],"width":1.8,"height":0.14,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.143,2],"width":1.8,"height":0.14,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.071,4],"width":1.8,"height":0.14,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.571,4],"width":1.8,"height":0.14,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.571,5],"width":1.8,"height":0.14,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.571,5],"width":1.8,"height":0.14,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.571,3],"width":1.8,"height":0.14,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3],"width":1.8,"height":0.14,"rounded":false,"fill":"#b2873c1a","thickness":0,"angle":0}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.35,0.55],"width":0.71,"height":0.11,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":152}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,0.5],"width":0.71,"height":0.11,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":152}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.35,3.55],"width":0.71,"height":0.11,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":152}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.55,3.5],"width":0.71,"height":0.11,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":152}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.35,2.55],"width":0.71,"height":0.11,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":152}}
- {"id":"drawing-89","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.55,2.5],"width":0.71,"height":0.11,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":152}}
- {"id":"drawing-90","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.35,3.55],"width":0.71,"height":0.11,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":152}}
- {"id":"drawing-91","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.55,3.5],"width":0.71,"height":0.11,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":152}}
- {"id":"drawing-92","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.35,4.55],"width":0.71,"height":0.11,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":152}}
- {"id":"drawing-93","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,4.5],"width":0.71,"height":0.11,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":152}}
- {"id":"drawing-94","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,0.6],"width":0.66,"height":0.65,"rounded":false,"fill":"#00000015","thickness":0,"angle":11}}
- {"id":"drawing-95","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.55,3.6],"width":0.66,"height":0.65,"rounded":false,"fill":"#00000015","thickness":0,"angle":11}}
- {"id":"drawing-96","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,4.6],"width":0.66,"height":0.65,"rounded":false,"fill":"#00000015","thickness":0,"angle":11}}
- {"id":"drawing-97","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.55,2.6],"width":0.66,"height":0.65,"rounded":false,"fill":"#00000015","thickness":0,"angle":11}}
- {"id":"drawing-98","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.55,3.6],"width":0.66,"height":0.65,"rounded":false,"fill":"#00000015","thickness":0,"angle":11}}
- {"id":"drawing-99","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.55],"width":0.56,"height":0.66,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":11}}
- {"id":"drawing-100","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.55],"width":0.56,"height":0.66,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":11}}
- {"id":"drawing-101","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.55],"width":0.56,"height":0.66,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":11}}
- {"id":"drawing-102","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.55],"width":0.56,"height":0.66,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":11}}
- {"id":"drawing-103","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.55],"width":0.56,"height":0.66,"rounded":false,"fill":"#f0e313ff","thickness":0,"angle":11}}
- {"id":"drawing-104","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.4,2.5],"width":0.56,"height":0.66,"rounded":false,"fill":"#f6f35dff","thickness":0,"angle":11}}
- {"id":"drawing-105","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.4,3.5],"width":0.56,"height":0.66,"rounded":false,"fill":"#f6f35dff","thickness":0,"angle":11}}
- {"id":"drawing-106","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.4,3.5],"width":0.56,"height":0.66,"rounded":false,"fill":"#f6f35dff","thickness":0,"angle":11}}
- {"id":"drawing-107","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.4,4.5],"width":0.56,"height":0.66,"rounded":false,"fill":"#f6f35dff","thickness":0,"angle":11}}
- {"id":"drawing-108","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.4,0.5],"width":0.56,"height":0.66,"rounded":false,"fill":"#f6f35dff","thickness":0,"angle":11}}
- {"id":"drawing-109","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.6,0.35],"width":0.12,"height":0.12,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-110","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.4,0.65],"width":0.12,"height":0.12,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-111","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.3,0.4],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-112","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.7,0.65],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-113","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,0.55],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-114","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.45,0.4],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-115","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.75,0.5],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-116","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.25,0.6],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-117","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,0.7],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-118","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.7,0.25],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-119","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,0.4],"width":0.12,"height":0.12,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-120","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.3,0.8],"width":0.12,"height":0.12,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-121","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.4,0.3],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-122","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.55,3.3],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-123","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.25,3.5],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-124","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.4,3.75],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-125","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.75,3.55],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-126","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.25,2.45],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-127","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.4],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-128","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.6,2.25],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-129","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.3,2.75],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-130","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.65,2.6],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-131","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.65,4.6],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-132","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.55,4.3],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-133","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.25,4.4],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-134","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.25,4.65],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-135","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.45,4.75],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-136","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.7,3.3],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-137","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.65],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-138","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.35,3.35],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-139","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,3.4],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-140","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.25,3.6],"width":0.06,"height":0.06,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-141","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.7,3.4],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-142","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.2,3.7],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-143","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.3,2.3],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-144","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,2.65],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-145","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.75,3.6],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-146","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.3,3.7],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-147","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.4,4.3],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-148","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,4.55],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-149","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.7,4.4],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-150","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.4,4.65],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-151","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.25,3.3],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-152","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.45,3.4],"width":0.12,"height":0.12,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-153","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.55,3.65],"width":0.12,"height":0.12,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-154","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.45,2.65],"width":0.12,"height":0.12,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-155","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,2.35],"width":0.12,"height":0.12,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-156","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.3],"width":0.12,"height":0.12,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-157","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.6,3.75],"width":0.12,"height":0.12,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-158","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.4,4.5],"width":0.12,"height":0.12,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-159","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.25,4.8],"width":0.1,"height":0.1,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-160","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.4,3.6],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-161","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.1,3.4],"width":0.08,"height":0.08,"rounded":true,"fill":"#f0e313ff","thickness":0,"angle":0}}
- {"id":"drawing-162","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.1,3.7],"width":0.08,"height":0.08,"rounded":true,"fill":"#d0c284ff","thickness":0,"angle":0}}
- {"id":"drawing-163","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.45,3.2],"width":0.08,"height":0.08,"rounded":true,"fill":"#d0c284ff","thickness":0,"angle":0}}
- {"id":"drawing-164","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.45,2.2],"width":0.08,"height":0.08,"rounded":true,"fill":"#d0c284ff","thickness":0,"angle":0}}
- {"id":"drawing-165","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.1,3.65],"width":0.06,"height":0.06,"rounded":true,"fill":"#d0c284ff","thickness":0,"angle":0}}
- {"id":"drawing-166","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,3.25],"width":0.08,"height":0.08,"rounded":true,"fill":"#d0c284ff","thickness":0,"angle":0}}
- {"id":"drawing-167","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.45,3.2],"width":0.06,"height":0.06,"rounded":true,"fill":"#d0c284ff","thickness":0,"angle":0}}
- {"id":"drawing-168","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.2],"width":0.06,"height":0.06,"rounded":true,"fill":"#d0c284ff","thickness":0,"angle":0}}
- {"id":"drawing-169","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.2,0.25],"width":0.06,"height":0.06,"rounded":true,"fill":"#d0c284ff","thickness":0,"angle":0}}
- {"id":"drawing-170","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.1,4.75],"width":0.08,"height":0.08,"rounded":true,"fill":"#d0c284ff","thickness":0,"angle":0}}
- {"id":"drawing-171","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.2,4.25],"width":0.08,"height":0.08,"rounded":true,"fill":"#d0c284ff","thickness":0,"angle":0}}
- {"id":"drawing-172","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.2],"width":0.08,"height":0.08,"rounded":true,"fill":"#d0c284ff","thickness":0,"angle":0}}
- {"id":"drawing-173","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1],"width":1.8,"height":0.03,"rounded":false,"fill":"#0000001a","thickness":0,"angle":0}}
- {"id":"drawing-174","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":1.8,"height":0.03,"rounded":false,"fill":"#0000001a","thickness":0,"angle":0}}
- {"id":"drawing-175","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,5],"width":1.8,"height":0.03,"rounded":false,"fill":"#0000001a","thickness":0,"angle":0}}
- {"id":"drawing-176","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4],"width":1.8,"height":0.03,"rounded":false,"fill":"#0000001a","thickness":0,"angle":0}}
- {"id":"drawing-177","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2],"width":1.8,"height":0.03,"rounded":false,"fill":"#0000001a","thickness":0,"angle":0}}
- {"id":"drawing-178","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1],"width":1.8,"height":0.03,"rounded":false,"fill":"#0000001a","thickness":0,"angle":90}}
- {"id":"drawing-179","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":1.8,"height":0.03,"rounded":false,"fill":"#0000001a","thickness":0,"angle":90}}
- {"id":"drawing-180","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,5],"width":1.8,"height":0.03,"rounded":false,"fill":"#0000001a","thickness":0,"angle":90}}
- {"id":"drawing-181","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4],"width":1.8,"height":0.03,"rounded":false,"fill":"#0000001a","thickness":0,"angle":90}}
- {"id":"drawing-182","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2],"width":1.8,"height":0.03,"rounded":false,"fill":"#0000001a","thickness":0,"angle":90}}
```

Fill the grid with the digits 1-6 so that digits don't repeat in a row or column.

The digit on a piece of cheese is greater than the sum of any two other digits on its cheeseboard. (Digits may repeat on a cheeseboard.)

Entering correct digits may clear fog to reveal more cheese.
