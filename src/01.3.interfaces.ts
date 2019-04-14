// https://www.typescriptlang.org/docs/handbook/interfaces.html
// interfaces are the way to express how an object should look like

// this is a regular interface
export interface IFooRegularInterface {
  foo: string;
  bar: number;
}

// declare class that should implament the interface
class FooClass implements IFooRegularInterface {}

// anonymous interface
export const foo: {
  foo: string;
  bar: number;
} = {
  foo: "arbitrary string",
  bar: 1
};

// the typechecking is structural and not nominal, means,
// Seperate interface with the same structure are assignable to each other!
export const bar: IFooRegularInterface = foo;

//--

// you don't need to declare an interface every time you want to use an object
// object shape is inferred where's possibe
export const lookAtMee = {
  a: "1",
  b: 5,
  c: Symbol.for("lookAtMee")
};

type Foo1 = typeof lookAtMee;

// you can use the interface keyword to declare function type
// this one of the forms to declare a function type. (as type for callback etc)
export interface MyFunc {
  (title: string, when: number): Date;
}

// using the type keyword
export type MyFuncAsType = (title: string, when: number) => Date;
