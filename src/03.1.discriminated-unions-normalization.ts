import {
  ICreativeData,
  IFacebookCreativeData,
  IInstagramCreativeData,
  IYoutubeCreativeData
} from "./interfaces";
// http://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions

// TypeScript control flow analysis can "narrow down" not only with typeguards,
// But also with discrimination

export function getIdForCreative(creative: ICreativeData): string {
  // using the creative_network literal string as discriminator
  switch (creative.creative_network) {
    case "facebook":
      return creative.fb_post_entity_id;

    case "instagram":
      return creative.ig_media_id;

    // commnet this out!
    // typescript helps me to make sure i've coverd all of the possible cases
    case "youtube":
      return creative.yt_video_id;
  }
}

export function getIdForCreativeUsingInOperator(
  creative: ICreativeData
): string {
  // using in operator as descriminator
  if ("fb_post_entity_id" in creative) {
    return creative.fb_post_entity_id;
  } else if ("ig_media_id" in creative) {
    return creative.ig_media_id;
  } else {
    return creative.yt_video_id;
  }
}

interface INormelizedCreative {
  network: string;
  id: string;
  image: string;
  caption: string;
}

export function normelizeCreative(
  creative: ICreativeData
): INormelizedCreative {
  switch (creative.creative_network) {
    // commnet this out!
    case "youtube":
      return {
        network: creative.creative_network,
        id: creative.yt_video_id,
        image: creative.yt_video_thumbnail_img_url,
        caption: creative.yt_video_title
      };

    case "facebook":
      return {
        network: creative.creative_network,
        id: creative.fb_post_entity_id,
        image: creative.fb_post_img_url,
        caption: creative.fb_post_caption
      };

    case "instagram":
      return {
        network: creative.creative_network,
        id: creative.ig_media_id,
        image: creative.ig_media_image_url,
        caption: creative.ig_media_text
      };
  }
}
