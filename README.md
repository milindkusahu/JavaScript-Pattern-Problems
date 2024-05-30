<div align="center">
  <img height="60" src="https://img.icons8.com/color/344/javascript.png">
  <h1>JavaScript Questions</h1>
</div>

# JavaScript Pattern Questions

These are the must-do pattern questions before starting DSA (Data Structures and Algorithms). Solving these pattern questions will help you develop problem-solving skills and prepare you for more advanced algorithmic problems.

## 4 Step Strategy for Solving Any Pattern Problems (Trick)

1. **For the Outer Loop, count the No. of Lines**
2. **For the Inner Loop, focus on the Columns & Connect them somehow to the Rows**
3. **Print them '\*' inside the Inner for-loop**
4. **Observe symmetry [optional]**

---

###### 1. Pattern:
```
* * * *
* * * *
* * * *
* * * *
```

<details><summary><b>Solution</b></summary>

```javascript
function patternQue1(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pattern = pattern + '* ';
    }
    pattern = pattern + '\n';
  }
  return pattern;
}
console.log(patternQue1(4));
```

</details>

###### 2. Pattern:
```
* 
* *
* * *
* * * *
* * * * *
```

<details><summary><b>Solution</b></summary>

```javascript
function patternQue2(n) {
  let pattern = '';
  for (let i = 1; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
      pattern = pattern + '* ';
    }
    pattern = pattern + '\n';
  }
  return pattern;
}
console.log(patternQue2(5));
```

</details>

###### 3. Pattern: 
```
1 
1 2
1 2 3
1 2 3 4
1 2 3 4 5
```

<details><summary><b>Solution</b></summary>

```javascript
let pattern = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern = pattern + j;
  }
  pattern = pattern + '\n';
}
console.log(pattern);
```

</details>

###### 4. Pattern:
```
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
```

<details><summary><b>Solution</b></summary>

```javascript
let pattern = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    pattern = pattern + i;
  }
  pattern = pattern + '\n';
}
console.log(pattern);
```

</details>

###### 5. Pattern:
```
* * * * *
* * * *
* * *
* *
*
```

<details><summary><b>Solution</b></summary>

```javascript
let n = 5;
let pattern = '';
for (let i = 1; i <= n; i++) {
  for (let j = 0; j <= n - i; j++) {
    pattern = pattern + '* ';
  }
  pattern = pattern + '\n';
}
console.log(pattern);
```

</details>

###### 6. Pattern:
```
1
2 1
3 2 1
4 3 2 1
5 4 3 2 1
```

<details><summary><b>Solution</b></summary>

```javascript
let n = 5;
let pattern = '';
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i + 1; j++) {
    pattern = pattern + ` ${j}`;
  }
  pattern = pattern + '\n';
}
console.log(pattern);
```

</details>

###### 7. Pattern:
```
    *
   * *
  * * *
 * * * *
* * * * *
```

<details><summary><b>Solution</b></summary>

```javascript
let n = 5;
let pattern = '';
for (let i = 0; i < n; i++) {
  // Space
  for (let j = 0; j < n - i - 1; j++) {
    pattern = pattern + ' ';
  }
  // Star
  for (let j = 0; j < 2 * i + 1; j++) {
    pattern = pattern + '* ';
  }
  // Space
  for (let j = 0; j < n - i - 1; j++) {
    pattern = pattern + ' ';
  }
  pattern = pattern + '\n';
}
console.log(pattern);
```

</details>
