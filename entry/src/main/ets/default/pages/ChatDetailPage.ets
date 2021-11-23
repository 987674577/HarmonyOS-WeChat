import {WeChatTitle} from '../model/CommonStyle'
import router from '@system.router'

@Entry
@Component
export struct ChatDetailPage {
  private WeChatImage: string = router.getParams().WeChatImage
  private WeChatName: string = router.getParams().WeChatName
  private ChatInfo: string = router.getParams().ChatInfo

  build() {
    Column() {
      WeChatTitle({ text: this.WeChatName })
      LeftDialogBox({ imageSrc: this.WeChatImage, text: "我们来玩听歌词，猜歌名的游戏吧！" })
      RigthDialogBox({ imageSrc: "person (1).jpg", text: "好呀，你唱我来猜吧~" })
      LeftDialogBox({ imageSrc: this.WeChatImage, text: this.ChatInfo })
      RigthDialogBox({ imageSrc: "person (1).jpg", text: "哈哈哈，这不是我偶像的歌曲吗，哈哈哈~" })
      RigthDialogBox({ imageSrc: "person (1).jpg", text: "周杰伦  " + this.WeChatName })
      LeftDialogBox({ imageSrc: this.WeChatImage, text: "哈哈哈，你好聪明，猜对了！" })
    }.height("100%")
  }
}

@Component
struct LeftDialogBox {
  private imageSrc: string
  private text: string

  build() {
    Row() {
      Image($rawfile(this.imageSrc)).width('120px').height('120px').margin({ left: '10px', right: '10px' })
      Text(this.text)
        .fontSize('14fp')
        .backgroundColor("#cccccc")
        .padding(10)
        .borderRadius(10)
        .margin({ right: '280px' })
    }
    .width('100%')
    .margin({ top: '20px', bottom: '20px' })
    .alignItems(VerticalAlign.Top)
  }
}


@Component
struct RigthDialogBox {
  private imageSrc: string
  private text: string

  build() {
    Flex({ direction: FlexDirection.RowReverse }) {
      Image($rawfile(this.imageSrc))
        .width('120px')
        .height('120px')
        .margin({ left: '10px', right: '10px' })
        .objectFit(ImageFit.Contain)

      Flex({ direction: FlexDirection.RowReverse, justifyContent: FlexAlign.Start }) {
        Text(this.text)
          .fontSize('14fp')
          .backgroundColor("#1dde40")
          .padding(10)
          .borderRadius(10)
          .margin({ left: '140px' })
      }
    }.margin({ top: '20px', bottom: '20px' })
  }
}