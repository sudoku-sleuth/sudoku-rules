





















```openrules
input x:number; primitive bounded(z:number):boolean requires(z<=0); term
a():boolean=x<=0 implies bounded(x);
```
