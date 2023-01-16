# TypeScript Discussion

- Strongly typed

## Primitive datatypes:

- number
- string
- boolean

## Composite Datatypes:

- array
- object
- tuple
  - record
- enum

## Collections:

- array

## Changing types

- type assertions
  ```
    let thisString:unknown = '20';
    const thisNumber = thisString as number;
  ```
    or
  ```
   const s1 = "hello" as unknown;
   const nums1 = as number;
  ```

## Iterators and generators:

### iterators:
- `for ... of` and `for ... in` statements
- https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html
### generators:
 - Cannot use iterators on non-array types
 - https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html

## Const and var language support:

  - var
  - let
  - const

## Immutable values:

  - You can set non-primitive types to read-only
  - const primitives are immutable

## Statements vs expression:
  - Statements:
    - if ... else
    - while
    - switch
  - Expression
    - functions
    - Setting a variable name
## Pattern matching
  ### No support need library

## Imperative and declarative summing, grouping, and filtering:
  - Imperative summing:
    ``` 
      a = b+c; 
      
    ```
  - Declarative summing:
  ```
    const arr: number[] = [10, 20, 50];

    const result = arr.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);
  ```
  - Imperative filter:
  ```
  const numbers = [1, 2, 3, 4];
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
          evenNumbers.push(numbers[i]);
      }
  }
  ```
  - Declarative filter:
   ```
    const numbers = [1, 2, 3, 4];
    const evenNumbers = numbers.filter((number) => number % 2 === 0);
    ```
  - Imperative grouping:
  ``` 
    const numbers = [1, 2, 3, 4];
    const numbersDoubled = [];
    for (let i = 0; i < numbers.length; i++) {
        numbersDoubled.push(numbers[i] * 2);
    }
  ```
  - Declarative grouping:
  ``` 
  const numbers = [1, 2, 3, 4];
  const numbersDoubled = numbers.map((number) => number * 2);
  ```

