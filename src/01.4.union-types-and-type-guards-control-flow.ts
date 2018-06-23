import { IFacebookCreativeData, IYoutubeCreativeData } from "./interfaces";
// http://www.typescriptlang.org/docs/handbook/advanced-types.html#union-types

// So do how we use a variable with multiple types?
// Using built-in typeguard and control flow analysis,
// typescript allows us to do that safely
export function foo(p: string | number) {
  // toString is avaible on string and number type, so we can use it
  // without a typeguard
  p.toString();

  // replace only availbe on string, so error
  p.replace("a", "b");

  // typeof is a built-in typeguard
  if (typeof p === "string") {
    p.replace("a", "b");
  } else {
    p.toExponential();
  }
}

// instanceof is also a built-in typeguard
export function foo2(e: HTMLFormElement | HTMLLIElement) {
  if (e instanceof HTMLFormElement) {
    e.checkValidity();
  } else if (e instanceof HTMLLIElement) {
    e.checkValidity();
  } else {
    // never type!
    e.toString();
  }
}

// typeguard can also be used to upgrade instance to a sub class instance
// HTMLFormElement extends Element, so e might be a HTMLFormElement
export function foo3(e: Element) {
  if (e instanceof HTMLFormElement) {
    e.checkValidity();
  }
}

// custom typeguards, using the `is` keyword
export function validateFacebookCreative(
  userInput: any
): userInput is IFacebookCreativeData {
  // some validation logic
  return true;
}

// is can be for multiple types
export function validateFacebookOrYoutubeCreative(
  userInput: any
): userInput is IFacebookCreativeData | IYoutubeCreativeData {
  // some validation logic
  return true;
}

// custom typeguard in action
const maybeFacebookCreative = {};
maybeFacebookCreative.fb_post_img_url.slice();

if (validateFacebookCreative(maybeFacebookCreative)) {
  maybeFacebookCreative.fb_post_img_url.slice();
}
