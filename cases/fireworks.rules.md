---
format: open-rules
title: Fireworks
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/oza5o47z3b
case: https://sudoku-sleuth.com/cases/fireworks
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r9c5-r8c5-r7c5-r6c5-r5c5-r4c5
thermo-2: thermo r9c4-r8c3-r7c3-r6c2-r5c2-r4c2
thermo-3: thermo r9c6-r8c7-r7c7-r6c8-r5c8-r4c8
kropki-1: kropki r9c1-r9c2 colour "white"
kropki-2: kropki r1c4-r1c5 colour "black"
kropki-3: kropki r1c9-r2c9 colour "black"
kropki-4: kropki r2c1-r3c1 colour "black"
kropki-5: kropki r4c6-r4c7 colour "black"
kropki-6: kropki r8c4-r8c5 colour "black"
kropki-7: kropki r6c1-r6c2 colour "black"
kropki-8: kropki r3c8-r4c8 colour "black"
whispers-1: whispers r4c5-r3c5-r2c5-r1c5 gap 5
whispers-2: whispers r2c3-r3c4-r4c5-r3c6-r2c7 gap 4
entropic-1: entropic r4c2-r3c2-r2c2
entropic-2: entropic r4c8-r3c8-r2c8
modular-1: modular r3c1-r4c2-r3c3
modular-2: modular r3c7-r4c8-r3c9
```

**Sudoku, Thermometers, Kropki, Modular Lines, Entropic Lines, Whisper-5, Whisper-4**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.
- Modular lines: Any set of three adjacent digits along a teal modular line has three different remainders when divided by 3. These lines form small v's between boxes 1 and 4 and boxes 3 and 6.
- Entropic lines: Any set of three adjacent cells along an peach entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).  These lines are the vertical segments in columns 2 and 8.
- Whisper-5: Adjacent digits along a green Whisper-5 line must differ by at least five.  This line is a vertical segment in column 5.
- Whisper-4: Adjacent digits along a orange Whisper-4 line must differ by at least four.  The Whisper-4 is orange and forms a large v from box 1 through box 2, box5, back into box 2 and then to box 3.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
