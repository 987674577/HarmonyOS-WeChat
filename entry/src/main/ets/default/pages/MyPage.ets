import {WeChatItemStyle, MyDivider} from '../model/CommonStyle'

@Entry
@Component
export struct MyPage {
  private imageTitle: string = "title.png"

  build() {
    Column() {
      Image($rawfile(this.imageTitle)).height(144).width('100%')

      WeChatItemStyle({ imageSrc: "pay.png", text: "支付" })
      MyDivider()

      WeChatItemStyle({ imageSrc: "favorites.png", text: "收藏" })
      MyDivider({ style: '1' })
      WeChatItemStyle({ imageSrc: "moments2.png", text: "朋友圈" })
      MyDivider({ style: '1' })
      WeChatItemStyle({ imageSrc: "video.png", text: "视频号" })
      MyDivider({ style: '1' })
      WeChatItemStyle({ imageSrc: "card.png", text: "卡包" })
      MyDivider({ style: '1' })
      WeChatItemStyle({ imageSrc: "emoticon.png", text: "表情" })
      MyDivider()

      WeChatItemStyle({ imageSrc: "setting.png", text: "设置" })
      MyDivider()
    }.alignItems(HorizontalAlign.Start)
    .width('100%')
    .height('100%')
  }
}
