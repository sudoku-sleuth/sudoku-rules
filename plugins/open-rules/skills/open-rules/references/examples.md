# Worked case files

Copy a complete outer `markdown` block into a `.rules.md` file. The setter names and wording below are sample inputs. Empty source and case URLs are deliberate. All three use a standard board; the assignments below demonstrate individual rules, not full Sudoku solutions.

## A thermometer

````markdown
---
format: open-rules
title: A small thermometer
setter: Example Setter
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo r1c1-r1c2-r1c3
```

## Setter wording

Normal Sudoku rules apply. Digits on the thermometer strictly increase from the bulb at r1c1 to the tip at r1c3.
````

Satisfies: r1c1=1, r1c2=3, r1c3=6 increases at both steps. Breaks: 1, 4, 3 decreases at the last step.

## Two whisper lines and marked pairs

````markdown
---
format: open-rules
title: Green lines and marked pairs
setter: Example Setter
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r2c1-r2c2 gap 5
whispers-2: whispers r4c1-r4c2 gap 5
pair-1: pair r6c1-r6c2 ratio 3
pair-2: pair r7c1-r7c2 difference 2
pair-3: pair r8c1-r8c2 sum 10
kropki r9c1-r9c2 white
```

## Setter wording

Normal Sudoku rules apply. Adjacent digits on each green line differ by at least 5. The lines are r2c1-r2c2 and r4c1-r4c2. The brown dot at r6c1-r6c2 means one value is three times the other. The grey dot at r7c1-r7c2 means the values differ by 2. The marked pair at r8c1-r8c2 totals 10. The white Kropki dot at r9c1-r9c2 means the values differ by 1.
````

Satisfies: 1, 6 on the first line and 2, 8 on the second. Breaks: 2, 6 on either line differs by only 4. Numbered IDs keep repeated kinds separate. For the pairs, 2/6, 3/5 and 3/7 satisfy their relations; 2/5, 3/6 and 3/8 respectively break them. The white Kropki shorthand is pair difference 1: 3/4 satisfies it and 3/5 breaks it. Brown and grey describe the drawing; the pair lines carry their meanings.

## A custom weighted triple

````markdown
---
format: open-rules
title: Weighted triple
setter: Example Setter
source: ""
case: ""
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
weighted-1: #weighted-triple r1c1-r1c2-r1c3
```

## Definitions

### Weighted triple

```custom-rules
- url: "#weighted-triple"
  name: Weighted triple
  parameters:
    cells:
      type: path<cell>
      description: Exactly three cells in order, from the marked start.
      default: Required.
  definition: The third face digit equals the first face digit plus twice the second face digit.
  maths: "line = cells; |line| = 3 ∧ D(line[2]) = D(line[0]) + 2 × D(line[1])"
  example: "Satisfies: r1c1=1, r1c2=2, r1c3=5 because 5=1+2×2. Breaks: r1c1=1, r1c2=2, r1c3=6 because 6≠1+2×2."
```

## Setter wording

Normal Sudoku rules apply. Starting at r1c1, follow r1c1-r1c2-r1c3. The third digit is the first digit plus twice the second digit.
````

The declaration references the Weighted triple section inside this file. Its complete definition uses the same fragment; no external URL is needed. The formula uses D because the setter specified face digits. It defines the three positions explicitly rather than assigning a nearby library kind.
