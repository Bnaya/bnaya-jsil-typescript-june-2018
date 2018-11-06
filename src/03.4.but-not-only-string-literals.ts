import { ICreativeData } from "./interfaces";
// http://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions

export function foo(creative: ICreativeData) {
  // in can also be discriminator
  if ("fb_post_entity_id" in creative) {
    // can't be youtube, thus, error
    creative.creative_network === "youtube";

    // correct!
    creative.creative_network === "facebook";
  }
}

// boolean literal type. will work also with numbers
export function foo2(
  v:
    | { flag: true; banana: "yellow" }
    | { flag: false; notABanana: "notABanana" }
) {
  if (v.flag) {
    v.banana === "yellow";
  } else {
    v.notABanana === "notABanana";
  }
}
