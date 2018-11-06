import {
  ICreativeData,
  IFacebookCreativeData,
  IInstagramCreativeData,
  IYoutubeCreativeData
} from "./interfaces";
import { getIdForCreative } from "./02.2.discriminated-unions-normalization";
// import { getIdForCreative } from "./03.1.discriminated-unions-normalization";

function FbCreative({ c }: { c: IFacebookCreativeData }) {
  return (
    <>
      <span>{c.date.toLocaleString()}</span>
      <img alt={c.fb_post_caption} src={c.fb_post_img_url} />
    </>
  );
}

function IgCreative({ c }: { c: IInstagramCreativeData }) {
  return (
    <>
      <span>{c.date.toLocaleString()}</span>
      <img alt={c.ig_media_text} src={c.ig_media_image_url} />
    </>
  );
}

function YtCreative({ c }: { c: IYoutubeCreativeData }) {
  return (
    <>
      <span>{c.date.toLocaleString()}</span>
      <img alt={c.yt_video_description} src={c.yt_video_thumbnail_img_url} />
    </>
  );
}

export function renderCreatives(creative: ICreativeData[]) {
  return (
    <>
      {creative.map(c => {
        switch (c.creative_network) {
          case "facebook":
            return <FbCreative c={c} key={getIdForCreative(c)} />;

          case "youtube":
            return <YtCreative c={c} key={getIdForCreative(c)} />;

          case "instagram":
            return <IgCreative c={c} key={getIdForCreative(c)} />;
        }
      })}
    </>
  );
}
