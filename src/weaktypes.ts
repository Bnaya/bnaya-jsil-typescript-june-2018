// https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-4.html#weak-type-detection
// Helped us with a big bug with highcharts
interface A {
  a?: string;
}

interface B {
  b?: number;
}

function foo(param1: A) {}

declare const fooObject: B;

// no error
foo({});

// check the error!
foo(fooObject);

export {};
