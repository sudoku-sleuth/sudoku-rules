---
fog:
  initiallyLit:
    - 23
    - 32
    - 40
    - 49
  links:
    - trigger:
        - 12
      lights:
        - 60
    - trigger:
        - 42
      lights:
        - 46
        - 55
    - trigger:
        - 55
      lights:
        - 19
    - trigger:
        - 57
      lights:
        - 76
    - trigger:
        - 31
      lights:
        - 78
    - trigger:
        - 5
      lights:
        - 44
    - trigger:
        - 50
      lights:
        - 10
    - trigger:
        - 77
      lights:
        - 2
    - trigger:
        - 64
      lights:
        - 27
    - trigger:
        - 79
      lights:
        - 62
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
title: Heavy Lifting
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5f5uin2uhu
case: https://sudoku-sleuth.com/cases/heavy-lifting
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c6-r4c6 colour "black"
kropki-2: kropki r5c5-r6c5 colour "black"
kropki-3: kropki r7c6-r7c7 colour "black"
kropki-4: kropki r6c2-r7c2 colour "black"
kropki-5: kropki r3c2-r3c3 colour "black"
kropki-6: kropki r9c4-r9c5 colour "black"
kropki-7: kropki r1c3-r2c3 colour "black"
kropki-8: kropki r7c9-r8c9 colour "black"
whispers-1: whispers r7c4-r6c5-r7c6 gap 5
whispers-2: whispers r5c7-r4c6-r5c5-r4c4-r3c3-r2c4-r1c5-r2c6-r3c6-r3c7 gap 5
whispers-3: whispers r8c1-r7c2-r8c3 gap 5
whispers-4: whispers r5c1-r6c2-r5c3 gap 5
whispers-5: whispers r8c4-r9c5-r8c6-r9c7-r8c8 gap 5
whispers-6: whispers r4c8-r5c9-r6c8 gap 5
whispers-7: whispers r1c1-r2c2-r3c1-r4c1 gap 5
```

**Sudoku, Dynamic Fog, Whispers-5, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dynamic fog: correctly placed digits clear fog from their own cell and possibly other cells.
- Whispers-5: Adjacent digits along a Whispers-5 line must differ by at least five.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
