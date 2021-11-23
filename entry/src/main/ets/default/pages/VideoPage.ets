import {VideoInfo, getVideos} from '../play/Video'
import {VideoPlayer} from '../play/VideoPlayer'

@Entry
@Component
export struct VideoPage {
  videoArray: Array<VideoInfo> = getVideos()

  build() {
    Column() {
      Swiper() {
        ForEach(this.videoArray, item => {
          VideoPlayer({ item: item })
        }, item => item.id.toString())
      }
      .indicator(false)
      .loop(false)
      .vertical(true)
    }
  }
}