---
fog:
  initiallyLit:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 9
    - 17
    - 18
    - 26
    - 27
    - 35
    - 36
    - 40
    - 41
    - 44
    - 45
    - 53
    - 54
    - 62
    - 63
    - 71
    - 73
    - 74
    - 75
    - 76
    - 77
    - 78
    - 79
  links:
    - trigger:
        - 44
      lights:
        - 60
    - trigger:
        - 80
        - 72
        - 8
      lights:
        - 66
    - trigger:
        - 68
      lights:
        - 64
        - 65
    - trigger:
        - 67
        - 66
      lights:
        - 30
        - 31
        - 39
    - trigger:
        - 49
      lights:
        - 20
    - trigger:
        - 21
      lights:
        - 50
    - trigger:
        - 32
      lights:
        - 33
    - trigger:
        - 43
      lights:
        - 52
    - trigger:
        - 51
        - 40
      lights:
        - 25
    - trigger:
        - 0
      lights:
        - 16
    - trigger:
        - 52
        - 42
        - 41
        - 50
        - 30
      lights:
        - 61
        - 70
        - 59
    - trigger:
        - 57
        - 79
        - 63
        - 55
        - 38
        - 37
      lights:
        - 13
    - trigger:
        - 22
        - 14
        - 65
        - 73
        - 75
        - 76
        - 77
        - 71
        - 62
        - 26
        - 17
        - 3
      lights:
        - 28
    - trigger:
        - 58
        - 23
        - 2
        - 4
        - 35
        - 53
        - 27
        - 45
        - 64
        - 74
        - 78
        - 70
        - 28
        - 16
      lights:
        - 24
    - trigger:
        - 0
      lights:
        - 0
    - trigger:
        - 8
      lights:
        - 8
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
        - 42
      lights:
        - 42
    - trigger:
        - 43
      lights:
        - 43
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
        - 72
      lights:
        - 72
    - trigger:
        - 80
      lights:
        - 80
format: open-rules
title: Given But Hidden
setter: Marty Sears
source: https://sudokupad.app/ctv0ndcyu8
case: https://sudoku-sleuth.com/cases/given-but-hidden
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: 6.......9.938.51...8.962.3...9.58.6.8.6...59..35.9.8...6852.9......896..9.......8
---

```rules
sudoku 9x9
kropki-1: kropki r4c9-r5c9 colour "black"
kropki-2: kropki r5c9-r6c9 colour "black"
kropki-3: kropki r8c4-r8c5 colour "black"
kropki-4: kropki r5c4-r6c4 colour "black"
kropki-5: kropki r3c2-r3c3 colour "black"
kropki-6: kropki r4c7-r4c8 colour "black"
kropki-7: kropki r2c4-r2c5 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[-0.125,8.625],[-0.125,9.125],[9.125,9.125],[9.125,-0.125],[-0.125,-0.125],[-0.125,8.625]],"color":"#b0a9e5ff","thickness":12.16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[9.25,8.75],[9.25,9.25],[-0.25,9.25],[-0.25,-0.25],[9.25,-0.25],[9.25,8.75]],"color":"#dedbf5ff","thickness":16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5],"width":1.91,"height":0.91,"rounded":false,"stroke":"#57d0ffff","thickness":7.04,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#ddffceff","stroke":"#acec53ff","thickness":5.12,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#e6befdff","stroke":"#a55be5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fdb9b9ff","stroke":"#f97575ff","thickness":5.12,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fff5c0ff","stroke":"#f7e803ff","thickness":5.12,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#e6befdff","stroke":"#a55be5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fff5c0ff","stroke":"#f7e803ff","thickness":5.12,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#e6befdff","stroke":"#a55be5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#ddffceff","stroke":"#acec53ff","thickness":5.12,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#ddffceff","stroke":"#acec53ff","thickness":5.12,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#e6befdff","stroke":"#a55be5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,0.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fff5c0ff","stroke":"#f7e803ff","thickness":5.12,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#ddffceff","stroke":"#acec53ff","thickness":5.12,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#e6befdff","stroke":"#a55be5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fff5c0ff","stroke":"#f7e803ff","thickness":5.12,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#e6befdff","stroke":"#a55be5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#ddffceff","stroke":"#acec53ff","thickness":5.12,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fff5c0ff","stroke":"#f7e803ff","thickness":5.12,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#e6befdff","stroke":"#a55be5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fff5c0ff","stroke":"#f7e803ff","thickness":5.12,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,6.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#ddffceff","stroke":"#acec53ff","thickness":5.12,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#e6befdff","stroke":"#a55be5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fff5c0ff","stroke":"#f7e803ff","thickness":5.12,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#e6befdff","stroke":"#a55be5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fff5c0ff","stroke":"#f7e803ff","thickness":5.12,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fedcfbff","stroke":"#fdbae5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,7.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fedcfbff","stroke":"#fdbae5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fedcfbff","stroke":"#fdbae5ff","thickness":5.12,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fae8b2ff","stroke":"#f5b200ff","thickness":5.12,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#fae8b2ff","stroke":"#f5b200ff","thickness":5.12,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#c0e3feff","stroke":"#75befeff","thickness":5.12,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,3.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#c0e3feff","stroke":"#75befeff","thickness":5.12,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#c0e3feff","stroke":"#75befeff","thickness":5.12,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#c0e3feff","stroke":"#75befeff","thickness":5.12,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5.5],"width":0.88,"height":0.88,"rounded":true,"fill":"#c0e3feff","stroke":"#75befeff","thickness":5.12,"angle":0}}
```

Normal sudoku rules apply.

Some cells in the grid contain a given digit, and these have all been circled. A circled given digit indicates how many times that digit appears as a circled given digit in the grid.

Unfortunately, most of these given digits are obscured by fog. Entering a correct digit will clear the fog in that cell, and maybe other cells too. No guessing is necessary.

If a black dot connects two digits, then one is double the other.

The two digit number to be discovered in the blue frame (reading left to right) will indicate the total number of circled given digits that exist in the grid.
