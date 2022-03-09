# easy-primitives.js
Library which helps manages primitives in easy way!


Get rid of primitives boilerplate code.


## Boolean

Change this:
```javascript
const val: boolean = this.boolFun();
if (val === true) {
    ...
} 
```

Into:
```javascript
const val: EasyBoolean = EasyBoolean.of(this.boolFun());
val.ifTrue(() -> ... )

Or even

EasyBoolean.of(this.boolFun()).ifTrue(() -> ... )
```


## Number
Change:
```javascript
const val: number = ...
if (val > 0) {
    this.selected = val; 
}
```

Into:
```javascript
const val: EasyNumber = ...
val.ifPositive(it => this.selected = it);
```

## String

Change:
```javascript
const text: string = ...
if (text !== undefined && text !== null && text.length > 1) {
    this.selected = text;
}
```

Into:
```javascript
const text: EasyString = ...
text.ifNotEmpty(it = > this.selected = it);
```

## Arrays
Change:
```javascript
const array: string[] = ...
if (array !== undefined && array !== null && array.length === 1) {
    this.selected = array[0];
}


if (array !== undefined && array !== null && array.length > 0) {
    this.selected = array;
}

```

Into:
```javascript
const array: EasyArray<string> = ...
array.ifHasOneElement((elem) => this.selected = elem);
array.ifNotEmpty((arr) => this.selected = arr);
```


## Check out much more handy functions.
