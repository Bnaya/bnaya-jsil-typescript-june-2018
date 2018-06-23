import { IFacebookCreativeData, IYoutubeCreativeData } from "./interfaces";
// rxjs 6. migrate today!
// https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md#why
import { of, concat } from "rxjs";
import { filter } from "rxjs/operators";

// arrays and rxjs are very similar
declare const facebookCreatives: IFacebookCreativeData[];
declare const youtubeCreatives: IYoutubeCreativeData[];

const facebookStream = of(...facebookCreatives);
const youtubeStream = of(...youtubeCreatives);

const allTogether = concat(facebookStream, youtubeStream);

const againFacebookOnly = allTogether.pipe(
  filter((c): c is IFacebookCreativeData => c.creative_network === "facebook"),
  // again contextual type infer
  filter(c => c.date.getTime() > 0)
);
