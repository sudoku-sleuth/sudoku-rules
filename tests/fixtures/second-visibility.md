---
document: feature
domain: play-state
defines: visible
header: haze
name: Haze
url: https://fixtures.example/rules/haze.md
parameters:
  clear:
    description: The cells that stay visible.
    default: "[] (none)."
    type: set<cell>
---

# Haze

A second feature that decides what is visible. Fixtures only.

## Maths

Class: **first-order**.

```text
∀c∈C: visible(c) ↔ c∈clear
```
