export type ICreativeData =
  | IYoutubeCreativeData
  | IInstagramCreativeData
  | IFacebookCreativeData;

// the interfaces have 2 common props,
// creative_network, and date.
// the type of creative_network is diffrent, so it was serve as a discriminator

export interface IYoutubeCreativeData {
  creative_network: "youtube";
  yt_last_seen: Date;
  date: Date;
  yt_video_description: string;
  yt_video_id: string;
  yt_video_title: string;
  yt_video_thumbnail_img_url: string;
  yt_video_duration: number;
}

export interface IInstagramCreativeData {
  ig_upload_time: Date;
  creative_network: "instagram";
  date: Date;
  ig_media_text: string;
  ig_media_image_url: string;
  ig_media_id: string;
  ig_media_type: "video" | "image" | "carousel";
}

export interface IFacebookCreativeData {
  creative_network: "facebook";
  fb_post_scheduled_time: Date;
  date: Date;
  first_seen: Date;
  last_seen: Date;
  fb_post_entity_id: string;
  fb_post_advertiser_page_pretty_name: string;
  fb_post_img_url: string;
  fb_post_caption: string;
}

export interface networkToInterfaceMap {
  facebook: IFacebookCreativeData;
  youtube: IYoutubeCreativeData;
  instagram: IInstagramCreativeData;
}
