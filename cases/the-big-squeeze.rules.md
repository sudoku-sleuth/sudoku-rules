---
format: open-rules
title: The Big Squeeze
setter: Blobz
source: https://sudokupad.app/fpuzzlesN4IgzglgXgpiBcBOANCALhNAbO8QBUALGAAgCEIBzEgZQEcBXGGWEVAQwbUIHsAnBCDJYeAIyhsQfBjjAw0ggHL8AtuywkwDACY8A1gxLTZJdgAczWAJ4A6EiQAiVTGBI8Adqb58eAd1daKiRoPMHEJNrOaCQQntykAMYe7jAJaDDaJAkQfAk4diQA4nwwViRYsTCu7CUkZuqx2j4qVSS%2BhBAJhEYw7JnxmuwtMZ6iPNwROakYHmAFRKRghH0ZJIAYBAAygJgEmstmrTWJIimuABRgQ6SRlC4jg8MlWOwYAG6kZjyQM%2B5gAJQFThuaFcsSy7EorRUDDA0UCwVCAzAaiwGjyTDuAxCZnKMAAZtEknwUnwAVEAjB6nxnqtRGV2CRRE8EnoIuMSMs3qYSABGeAAJiMzwgPAA3JMgeTKdTMrSue1MFc2YcsrNUlwIJzTu4lSjNAwuqzgV5FrxfO5%2FpJKHwINoEABtO2gG5vdwABRg7myWAAsjU9GAEO4ZFgAL7IJ0aj3uz0QH1%2BgPwIMosMRl3Rr2%2Bvj%2BwPBlMgZ1Rj0Z%2BM55Ph%2FORt1F2OZ7OJ3PlgtVmNxrMJpOhxuV9M1kv1supwst2vthuD5vFtul0MAXWQjoraerrbrHbzCUEAGIyAAGABie93lu7y5H09QCQAgt52FZ7SBt%2FvDzuQDO802eyvRwPF0PJ6ux1%2FCdeynftO3HT8zzA98T2HPs1y7Jc4NAhDQBedQmAQPlUCbBA0GkGAcNg%2F9v1nedQA3PBHwPI8iKQkjzxAK8bzveA7QfXcaJfN9y0ojin1ooDIPg4ML2vKlWPY6jn1fGD6JAgCfw%2FU8RKU4iFNIuS%2Fw06d1y3TiZLo7Sv0Y5iJPvaSjx4iCVJQwDlOQxSyIXByGOg8t0KwTD4AAZiM9w8II%2FzhLstT5JM9ybMczTEOMqDUKY%2FSBJfYLbKcsSWIsgyrL0qjspSoS0tIjLzLY%2FiuNk2LgIihLXJ06C5xc9Savs5r4ta8L2rCuLVPAkBPO8lAgMCphUui3SqpCpytOqrq%2Brqlrutm3qQ0aqK3NqtqVt4rcDwqsaNtEpjxNvCy9pk6zEqo87BIWuaStOsrNxu7iZqmmL1vqzbOu2tCMNwbDhvgfDRsK8bIrBw7kzW%2Fr%2FoQPygZBwjIa%2BjqetCvq%2BOevbbq2jGHskh8Xsqz7FvmvHpsmoqJtJubcqJnGCru3qCbOxmSauhn9pRsnWae4m3xh5mMbe6mIeFynad%2Bnm6ap8HvvRyXOex7mJeK47Mv59nLrV3ShYpj6Zel3XxYNmmjZFuWofJn7Lalu2Lemmc5xAeoKncJoeBae1QHdqp7XYgAlRAAGE%2BUkYOQ%2B5COAA4w9jkOfIjgB2EOABYU5DgBWBOADYE5z528z9hMHRAQO%2BWziPK4z1BA58qu64b%2FO68r5Pq5DmOI%2B5EPEG7zvX0F1A9FjHBcnBXAFwSGAUVL8ue%2Fb1uQ%2Fbl2BtwEA%2B%2FXGesDnwO46TuvQ6T1e4bwTeXciXFcRgEpPUnijt930PF%2FL0P88u6fZ%2FvQOe5zuue4zkPKQQoeA%2ByYo%2Fb%2BlcD7z0TrJF2eQPD33AV%2FMqFd45NyjhHBu4d4HHBgCHCBqCG4v0DmnEOLdy5kJXlvFBQdc6wLrvQ2u5dU7HwvHgghtCWEDzrqnPudc45dyATUHwvgwElwDuXLO6DKEMNkcw0hVdnYXkIUHaRODi6VFLmonh5d6EkPoRQwO9DC7wNUVIgeQDIgXEZBkEQNxKJ2hdkjBI7APY2mpGAHgZhvilxdl4ry3x7TcmQNhPyWdkC52QGnZAMdkDJ2QCgGJESokoASXEkJflsIJJQHEsJyAQkRJiVEuJfkQkxOyYkyJyAImVOKVUiJfkMk1OqbkgpyA%2FIVPiR09pESEldNSbE6pMSEkhLiSgbCjSql5J6Sk7p5S3xAA
case: https://sudoku-sleuth.com/cases/the-big-squeeze
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c9=2 r4c2=3 r5c5=9 r6c8=2 r7c1=3
---

```rules
sudoku 9x9
cage-1: cage r1c7-r2c7 total 9 connected true
cage-2: cage r8c3-r9c3 total 9 connected true
kropki-1: kropki r9c6-r9c7 colour "white"
kropki-2: kropki r1c4-r1c5 colour "white"
kropki-3: kropki r1c3-r2c3 colour "black"
arrow-1: arrow r4c3-r4c4-r4c5 bulb ["r5c2"]
arrow-2: arrow r6c7-r6c6-r6c5 bulb ["r5c8"]
palindrome-1: palindrome r9c2-r9c1-r8c2-r8c3-r7c4-r7c5-r8c6-r8c5
palindrome-2: palindrome r2c5-r2c4-r3c5-r3c6-r2c7-r2c8-r1c9-r1c8
clone-1: clone r2c2-r3c7
clone-2: clone r3c1-r4c6
clone-3: clone r3c2-r4c7
clone-4: clone r6c3-r7c8
clone-5: clone r6c4-r7c9
clone-6: clone r7c3-r8c8
```

Normal sudoku rules apply.  Digits on arrows sum to the digit in the connected circle.  Grey lines are palindromes which read the same in both directions.  The shaded ‘L’ shapes are clones (same digits in same relative positions).  Digits in cages must sum to the small clue in the top left corner.  Digits separated by a black dot have a 1:2 ratio; digits separated by a white dot are consecutive (not all such dots are shown).
