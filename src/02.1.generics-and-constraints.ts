import { ICreativeData } from "./interfaces";

// https://www.typescriptlang.org/docs/handbook/generics.html
// let us to decuple logic from concrete types as much as possible
// Similar to java, c# and others

// Arrays are generics
const creativesArray: Array<ICreativeData> = [];

// generic sort helper
export function createComparator<T>(
  valueGetter: (v: T) => number,
  direction: "asc" | "desc"
) {
  const factor = direction === "asc" ? -1 : 1;
  return function(a: T, b: T) {
    if (valueGetter(a) > valueGetter(b)) {
      return -1 * factor;
    }

    if (valueGetter(a) < valueGetter(b)) {
      return 1 * factor;
    }

    return 0;
  };
}

// I need to specify the generic
// https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-type
const comparator = createComparator<ICreativeData>(creative => {
  switch (creative.creative_network) {
    case "facebook":
      return creative.fb_post_scheduled_time.getTime();

    case "instagram":
      return creative.ig_upload_time.getTime();

    // commnet this out!
    // typescript helps me to make sure i've coverd all of the possible cases
    case "youtube":
      return creative.yt_last_seen.getTime();
  }
}, "desc");

// Or... checkout the contextual types!
// we don't have to spesify the type when its on the call site.
// typescript infer figures its out
creativesArray.sort(
  createComparator(creative => {
    switch (creative.creative_network) {
      case "facebook":
        return creative.fb_post_scheduled_time.getTime();

      case "instagram":
        return creative.ig_upload_time.getTime();

      // commnet this out!
      // typescript helps me to make sure i've coverd all of the possible cases
      case "youtube":
        return creative.yt_last_seen.getTime();
    }
  }, "desc")
);

// ------

// generics constrains
// Sort any array with a time: Date on the entries
function sortByTime<T extends { time: Date }>(a: T, b: T) {
  return a.time.getTime() - b.time.getTime();
}

[{ a: 1 }].sort(sortByTime);
[{ a: 1, time: new Date() }, { bla: 2, time: new Date() }].sort(sortByTime);
