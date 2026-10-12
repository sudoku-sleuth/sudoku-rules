---
fog:
  initiallyLit: []
  links:
    - trigger:
        - 63
        - 64
        - 9
        - 10
        - 11
        - 27
      lights:
        - 52
        - 61
    - trigger:
        - 61
        - 52
      lights:
        - 23
        - 24
        - 22
    - trigger:
        - 16
      lights:
        - 48
        - 57
    - trigger:
        - 14
      lights:
        - 2
        - 3
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
        - 10
      lights:
        - 10
    - trigger:
        - 11
      lights:
        - 11
    - trigger:
        - 12
      lights:
        - 12
    - trigger:
        - 13
      lights:
        - 13
    - trigger:
        - 14
      lights:
        - 14
    - trigger:
        - 15
      lights:
        - 15
    - trigger:
        - 16
      lights:
        - 16
    - trigger:
        - 17
      lights:
        - 17
    - trigger:
        - 18
      lights:
        - 18
    - trigger:
        - 19
      lights:
        - 19
    - trigger:
        - 20
      lights:
        - 20
    - trigger:
        - 21
      lights:
        - 21
    - trigger:
        - 22
      lights:
        - 22
    - trigger:
        - 23
      lights:
        - 23
    - trigger:
        - 24
      lights:
        - 24
    - trigger:
        - 25
      lights:
        - 25
    - trigger:
        - 26
      lights:
        - 26
    - trigger:
        - 27
      lights:
        - 27
    - trigger:
        - 28
      lights:
        - 28
    - trigger:
        - 29
      lights:
        - 29
    - trigger:
        - 30
      lights:
        - 30
    - trigger:
        - 31
      lights:
        - 31
    - trigger:
        - 32
      lights:
        - 32
    - trigger:
        - 33
      lights:
        - 33
    - trigger:
        - 34
      lights:
        - 34
    - trigger:
        - 35
      lights:
        - 35
    - trigger:
        - 36
      lights:
        - 36
    - trigger:
        - 37
      lights:
        - 37
    - trigger:
        - 38
      lights:
        - 38
    - trigger:
        - 39
      lights:
        - 39
    - trigger:
        - 40
      lights:
        - 40
    - trigger:
        - 41
      lights:
        - 41
    - trigger:
        - 42
      lights:
        - 42
    - trigger:
        - 43
      lights:
        - 43
    - trigger:
        - 44
      lights:
        - 44
    - trigger:
        - 45
      lights:
        - 45
    - trigger:
        - 46
      lights:
        - 46
    - trigger:
        - 47
      lights:
        - 47
    - trigger:
        - 48
      lights:
        - 48
    - trigger:
        - 49
      lights:
        - 49
    - trigger:
        - 50
      lights:
        - 50
    - trigger:
        - 51
      lights:
        - 51
    - trigger:
        - 52
      lights:
        - 52
    - trigger:
        - 53
      lights:
        - 53
    - trigger:
        - 54
      lights:
        - 54
    - trigger:
        - 55
      lights:
        - 55
    - trigger:
        - 56
      lights:
        - 56
    - trigger:
        - 57
      lights:
        - 57
    - trigger:
        - 58
      lights:
        - 58
    - trigger:
        - 59
      lights:
        - 59
    - trigger:
        - 60
      lights:
        - 60
    - trigger:
        - 61
      lights:
        - 61
    - trigger:
        - 62
      lights:
        - 62
    - trigger:
        - 63
      lights:
        - 63
    - trigger:
        - 64
      lights:
        - 64
    - trigger:
        - 65
      lights:
        - 65
    - trigger:
        - 66
      lights:
        - 66
    - trigger:
        - 67
      lights:
        - 67
    - trigger:
        - 68
      lights:
        - 68
    - trigger:
        - 69
      lights:
        - 69
    - trigger:
        - 70
      lights:
        - 70
    - trigger:
        - 71
      lights:
        - 71
    - trigger:
        - 72
      lights:
        - 72
    - trigger:
        - 73
      lights:
        - 73
    - trigger:
        - 74
      lights:
        - 74
    - trigger:
        - 75
      lights:
        - 75
    - trigger:
        - 76
      lights:
        - 76
    - trigger:
        - 77
      lights:
        - 77
    - trigger:
        - 78
      lights:
        - 78
    - trigger:
        - 79
      lights:
        - 79
    - trigger:
        - 80
      lights:
        - 80
format: open-rules
title: Up to Something
setter: sujoyku
source: https://sudokupad.app/zbgub1jtmx
case: https://sudoku-sleuth.com/cases/up-to-something
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
givens: r1c7=1 r2c4=6 r3c1=7 r4c2=2 r5c8=3 r6c5=8 r7c6=5 r8c3=9 r9c9=4
---

```rules
sudoku 9x9
kropki-1: kropki r6c8-r7c8 colour "black"
kropki-2: kropki r1c3-r1c4 colour "black"
kropki-3: kropki r6c4-r7c4 colour "white"
arrow r3c6-r3c7-r3c8 bulb ["r3c5"]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,1.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,4.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,7.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"30","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"30","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[9.5,5.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Dynamic Fog: The grid is covered in fog. Correctly placing a digit will clear any fog in its own cell, and potentially clear fog in other cells too. No guessing is required.

- Up to Given-sums: Each row, column, and 3x3 region contains exactly one given digit whose exact location is to be deduced. No two givens are identical digits, i.e. each of the digits 1 to 9 is given exactly once.
A clue outside a row or column indicates the sum of all digits up to the given digit. (The given digit itself is not included in the sum.)

- Arrows: Digits on an arrow sum to the digit in the circle from which the arrow emerges.

- Kropki: Digits joined by a black dot have a 1:2 ratio. Digits joined by a white dot are consecutive. (Not all dots are given.)
