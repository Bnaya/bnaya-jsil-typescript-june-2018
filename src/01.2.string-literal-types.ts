// https://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types

// TypeScript have string type, but also string literal type!
// means that a spesific string, is also a type,
//  that only that string is assignable to it
let a: "banana" = "banana";
// this will error
a = "apple";

// ---------

// Works also with union types
let a1: "banana" | "apple" = "banana";
// no error!
a1 = "apple";
// we will cover union types later.

// ---------

// Some use cases
// React style declarations types
import * as React from "react";

// also auto-complete!
const textAlign: React.CSSProperties["textAlign"] =
const textAlignBad: React.CSSProperties["textAlign"] = "not-a-valid-value";

// You can use them instead of enums/string enums. more human readable,
// and no need runtime code
enum CREATIVES_TYPES {
  FACEBOOK = "facebook",
  YOUTUBE = "youtube"
}

const foo: { type: CREATIVES_TYPES } = {
  type: CREATIVES_TYPES.FACEBOOK
};

// VS

type CREATIVES_TYPES_AS_STRING_LITERAL = "facebook" | "youtube";

const foo2: { type: CREATIVES_TYPES_AS_STRING_LITERAL } = {
  type: "facebook"
};
