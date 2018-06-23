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

// this is how you declare an array
const arr: string[] = [];
const arrAsGeneric: Array<string> = [];
