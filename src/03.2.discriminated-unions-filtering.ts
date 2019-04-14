import { Observable } from "rxjs";
import { filter } from "rxjs/operators";

import {
  ICreativeData,
  IFacebookCreativeData,
  networkToInterfaceMap
} from "./interfaces";
// http://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions

// With combination of a typeguard and the discriminator,
// we can turn the array into single-type array

export function facebookOnlyCreatives(creatives: ICreativeData[]) {
  return creatives.filter(
    // c => c.creative_network === "facebook"
    (c): c is IFacebookCreativeData => c.creative_network === "facebook"
  );
}

declare const arrayOfAllCreatives: ICreativeData[];

const arrayOfOnlyFacebookCreatives = facebookOnlyCreatives(arrayOfAllCreatives);

declare const stream: Observable<ICreativeData>;

// same for rxjs
export const onlyFacebook = stream.pipe(
  filter((c): c is IFacebookCreativeData => c.creative_network === "facebook")
);

// But i'm lazy! i don't want to write a function for each possible network
function creativesOfNetwork<T extends ICreativeData["creative_network"]>(
  wishedNetwork: T,
  creatives: ICreativeData[]
) {
  // jump to decleration of filter
  return creatives.filter(
    (creative): creative is networkToInterfaceMap[T] => {
      return creative.creative_network === wishedNetwork;
    }
  );
}
export const taaaDaaaaa = creativesOfNetwork("facebook", []);
// more about that in the "metaprogramming" section
