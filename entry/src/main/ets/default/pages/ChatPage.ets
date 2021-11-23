import {ChatItemStyle, WeChatTitle} from '../model/CommonStyle'
import {getContactInfo} from '../model/WeChatData'
import {Person} from '../model/Person'

@Entry
@Component
export struct ChatPage {
  private contactList: Person[] = getContactInfo()

  build() {
    Column() {
      WeChatTitle({ text: "微信(eTS)" })
      List() {
        ForEach(this.contactList, item => {
          ListItem() {
            ChatItemStyle({
              WeChatImage: item.WeChatImage,
              WeChatName: item.WeChatName,
              ChatInfo: item.ChatInfo,
              time: item.time
            })
          }
        }, item => item.id.toString())
      }
      .height('100%')
      .width('100%')
    }
  }
}