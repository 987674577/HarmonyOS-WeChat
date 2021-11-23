let videoId = 0

const VideoData: any[] = [
  { 'src': "/play/video/video_1.mp4" },
  { 'src': "/play/video/video_2.mp4" },
  { 'src': "/play/video/video_3.mp4" },
  { 'src': "/play/video/video_4.mp4" },
  { 'src': "/play/video/video_5.mp4" },
  { 'src': "/play/video/video_6.mp4" },
  { 'src': "/play/video/video_7.mp4" }
]


export class VideoInfo {
  id: string;
  src: Resource;

  constructor(src: Resource) {
    this.id = `${videoId++}`
    this.src = src;
  }
}

export function getVideos(): Array<VideoInfo> {
  let Videos: Array<VideoInfo> = []
  VideoData.forEach(item => {
    Videos.push(new VideoInfo(item.src));
  })
  return Videos;
}