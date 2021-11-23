import {VideoInfo} from '../play/Video'

@Component
export struct VideoPlayer {
  private item: VideoInfo

  // @ts-ignore
  private videoController: VideoController = new VideoController()

  build() {
    Stack({ alignContent: Alignment.Center | Alignment.End }) {
      Video({
        src: this.item.src,
        controller: this.videoController
      })
        .controls(false)
        .autoPlay(true)
        .objectFit(ImageFit.Contain)
        .loop(true)
    }
    .width('100%')
    .height('100%')
  }
}
