import {ChatPage} from './ChatPage.ets'
import {ContactPage} from './ContactPage.ets'
import {DiscoveryPage} from './DiscoveryPage.ets'
import {MyPage} from './MyPage.ets'
import {HomeBottomItem} from '../model/CommonStyle'

@Entry
@Component
struct HomePage {
  @Provide currentPage: number = 0
  @Provide toastNumber: number = 93

  build() {
    Column() {
      Column() {
        HomeTopPage()
      }.width('100%')
      .flexGrow(1)

      HomeBottomPage()
    }
  }
}

@Component
struct HomeTopPage {
  @Consume currentPage: number

  build() {
    Swiper() {
      ChatPage()
      ContactPage()
      DiscoveryPage()
      MyPage()
    }
    .onChange((index: number) => {
      this.currentPage = index
    })
    .index(this.currentPage)
    .loop(false)
    .indicator(false)
    .width('100%')
    .height('100%')
  }
}

@Component
struct HomeBottomPage {
  @Consume currentPage: number
  @Consume toastNumber: number

  build() {
    Flex({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center }) {
      HomeBottomItem({
        imageSrc: this.currentPage == 0 ? "wechat2.png" : "wechat1.png",
        text: "微信",
        textColor: this.currentPage == 0 ? "#2fff00" : Color.Black
      })

      Text(this.toastNumber.toString())
        .fontSize(10)
        .fontColor(0xffffff)
        .borderRadius(10)
        .backgroundColor(0xff0000)
        .padding({ left: 4, right: 4, top: 2, bottom: 2 })
        .offset({ x: 60, y: 5 })

      Text().margin({ left: 30 })

      HomeBottomItem({
        imageSrc: this.currentPage == 1 ? "contacts2.png" : "contacts1.png",
        text: "通讯录",
        textColor: this.currentPage == 1 ? "#2fff00" : Color.Black
      })

      Text().margin({ left: 30 })

      HomeBottomItem({
        imageSrc: this.currentPage == 2 ? "find2.png" : "find1.png",
        text: "发现",
        textColor: this.currentPage == 2 ? "#2fff00" : Color.Black
      })

      Text().margin({ left: 30 })

      HomeBottomItem({
        imageSrc: this.currentPage == 3 ? "me2.png" : "me1.png",
        text: "我",
        textColor: this.currentPage == 3 ? "#2fff00" : Color.Black
      })
    }
    .backgroundColor("#f7f7f7")
    .width('100%')
    .height('160px')
  }
}