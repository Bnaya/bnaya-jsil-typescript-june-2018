// https://www.typescriptlang.org/docs/handbook/basic-types.html
// Basic types - TypeScript have the primitive types of javascript as types

/**
 *  We aren't gonna go over all of them, check the link about for that,
 *  just want to show you can have
 *  completely unrelated types for one variable
 */

const a1: string = "a";
const a2: number = 1;

// basic union types
let a3: string | number | { lastSeen: Date } = 1;
a3 = "a";

const imAny: any = undefined;
let imANumber: number = imAny;
imAny.toString();

// good for user input and such
const imUnknown: unknown = "";
imANumber = imUnknown;

// typeguard. we will see more!
if (typeof imUnknown === "number") {
  imANumber = imUnknown;
}

// this is how you declare an array
const arr: string[] = [];
const arrAsGeneric: Array<string> = [];

// Tuple - array in a specific length and value types
type MyTupe = [string, string, number];

// this is new!
type MyOpenEndTuple = [string, ...number[]];

function foo(param1: MyTupe) {
  const [name, lastName, age, wat] = param1;
  return {
    name,
    lastName,
    age
  };
}

function foo2(param1: MyOpenEndTuple) {
  const [, ...rest] = param1;
  return {
    rest
  };
}

// checkout also promise all!
Promise.all([1, "1", new Date()]).then(([a, b, c]) => {
  // error!
  b * 1;
});
