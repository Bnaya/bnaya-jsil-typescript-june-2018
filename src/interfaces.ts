export interface IYoutubeCreativeData {
  creative_network: "youtube";
  date: Date;
  yt_video_description: string;
  yt_video_id: string;
  yt_video_title: string;
  yt_video_thumbnail_img_url: string;
  yt_video_duration: number;
}

export interface IInstagramCreativeData {
  creative_network: "instagram";
  date: Date;
  ig_media_text: string;
  ig_media_image_url: string;
  ig_media_user_id: string;
  ig_created_time: Date;
  ig_media_shortcode: string;
  ig_media_id: string;
  ig_media_type: "video" | "image" | "carousel";
  ig_user_username: string;
  ig_user_full_name: string;
  ig_profile_img_url: string;
}
