





















```openrules
input x:number; primitive bounded(z:number):boolean requires(z<=0); term
a():boolean=x<1 implies bounded(x);
```
