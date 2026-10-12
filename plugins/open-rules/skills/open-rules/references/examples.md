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

## Two whisper lines

````markdown
---
format: open-rules
title: Two green lines
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
```

## Setter wording

Normal Sudoku rules apply. Adjacent digits on each green line differ by at least 5. The lines are r2c1-r2c2 and r4c1-r4c2.
````

Satisfies: 1, 6 on the first line and 2, 8 on the second. Breaks: 2, 6 on either line differs by only 4. Numbered IDs keep the two instances separate.

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
weighted-1: https://setter.example/rules/weighted-triple.md r1c1-r1c2-r1c3
```

```custom-rules
- url: https://setter.example/rules/weighted-triple.md
  name: Weighted triple
  parameters:
    cells:
      description: Exactly three cells in order, from the marked start.
      default: Required.
  definition: The third face digit equals the first face digit plus twice the second face digit.
  maths: "line = cells; |line| = 3 ∧ D(line[2]) = D(line[0]) + 2 × D(line[1])"
  example: "Satisfies: r1c1=1, r1c2=2, r1c3=5 because 5=1+2×2. Breaks: r1c1=1, r1c2=2, r1c3=6 because 6≠1+2×2."
```

## Setter wording

Normal Sudoku rules apply. Starting at r1c1, follow r1c1-r1c2-r1c3. The third digit is the first digit plus twice the second digit.
````

The custom reference and embedded definition use the same URL. The formula uses D because the setter specified face digits. It defines the three positions explicitly rather than assigning a nearby library kind.
