/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\model\\CommonStyle.ets":
/*!*********************************************************************************!*\
  !*** D:\code\HarmonyOS-WeChat\entry\src\main\ets\default\model\CommonStyle.ets ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MyDivider = exports.ChatItemStyle = exports.ContactItemStyle = exports.WeChatTitle = exports.WeChatItemStyle = exports.HomeBottomItem = void 0;
const WeChatData_ets_1 = __webpack_require__(/*! ./WeChatData.ets */ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\model\\WeChatData.ets");
var router = globalThis.requireNativeModule('system.router');
class HomeBottomItem extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.__currentPage = this.initializeConsume("currentPage", "currentPage");
        this.imageSrc = undefined;
        this.text = undefined;
        this.textColor = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.imageSrc !== undefined) {
            this.imageSrc = params.imageSrc;
        }
        if (params.text !== undefined) {
            this.text = params.text;
        }
        if (params.textColor !== undefined) {
            this.textColor = params.textColor;
        }
    }
    aboutToBeDeleted() {
        this.__currentPage.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get currentPage() {
        return this.__currentPage.get();
    }
    set currentPage(newValue) {
        this.__currentPage.set(newValue);
    }
    render() {
        Flex.create({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center, direction: FlexDirection.Column });
        Flex.debugLine("model/CommonStyle.ets(12:5)");
        Flex.onClick(() => {
            if (this.text == "微信") {
                this.currentPage = 0;
            }
            else if (this.text == "通讯录") {
                this.currentPage = 1;
            }
            else if (this.text == "发现") {
                this.currentPage = 2;
            }
            else if (this.text == "我") {
                this.currentPage = 3;
            }
            else {
                this.currentPage = 0;
            }
        });
        Flex.backgroundColor("#f7f7f7");
        Flex.width('180px');
        Flex.height('160px');
        Image.create($rawfile(this.imageSrc));
        Image.debugLine("model/CommonStyle.ets(13:7)");
        Image.width("90px");
        Image.height("90px");
        Text.create(this.text);
        Text.debugLine("model/CommonStyle.ets(14:7)");
        Text.fontSize('12vp');
        Text.fontColor(this.textColor);
        Text.pop();
        Flex.pop();
    }
}
exports.HomeBottomItem = HomeBottomItem;
class WeChatItemStyle extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.imageSrc = undefined;
        this.text = undefined;
        this.arrow = "arrow.png";
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.imageSrc !== undefined) {
            this.imageSrc = params.imageSrc;
        }
        if (params.text !== undefined) {
            this.text = params.text;
        }
        if (params.arrow !== undefined) {
            this.arrow = params.arrow;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Column.create();
        Column.debugLine("model/CommonStyle.ets(42:5)");
        Column.onClick(() => {
            if (this.text === "视频号") {
                router.push({ uri: 'pages/VideoPage' });
            }
        });
        Flex.create({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center });
        Flex.debugLine("model/CommonStyle.ets(43:7)");
        Flex.height('150px');
        Flex.width('100%');
        Image.create($rawfile(this.imageSrc));
        Image.debugLine("model/CommonStyle.ets(44:9)");
        Image.width('75px');
        Image.height('75px');
        Image.margin({ left: '50px' });
        Text.create(this.text);
        Text.debugLine("model/CommonStyle.ets(45:9)");
        Text.fontSize('15vp');
        Text.margin({ left: '40px' });
        Text.flexGrow(1);
        Text.pop();
        Image.create($rawfile(this.arrow));
        Image.debugLine("model/CommonStyle.ets(46:9)");
        Image.margin({ right: '40px' });
        Image.width('75px');
        Image.height('75px');
        Flex.pop();
        Column.pop();
    }
}
exports.WeChatItemStyle = WeChatItemStyle;
class WeChatTitle extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.text = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.text !== undefined) {
            this.text = params.text;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Flex.create({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center });
        Flex.debugLine("model/CommonStyle.ets(67:5)");
        Flex.height('120px');
        Flex.backgroundColor(WeChatData_ets_1.WeChatColor);
        Text.create(this.text);
        Text.debugLine("model/CommonStyle.ets(68:7)");
        Text.fontSize('18fp');
        Text.padding('20px');
        Text.pop();
        Flex.pop();
    }
}
exports.WeChatTitle = WeChatTitle;
class ContactItemStyle extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.imageSrc = undefined;
        this.text = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.imageSrc !== undefined) {
            this.imageSrc = params.imageSrc;
        }
        if (params.text !== undefined) {
            this.text = params.text;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Column.create();
        Column.debugLine("model/CommonStyle.ets(80:5)");
        Flex.create({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.Center });
        Flex.debugLine("model/CommonStyle.ets(81:7)");
        Flex.height('150px');
        Flex.width('100%');
        Image.create($rawfile(this.imageSrc));
        Image.debugLine("model/CommonStyle.ets(82:9)");
        Image.width('100px');
        Image.height('100px');
        Image.margin({ left: '50px' });
        Text.create(this.text);
        Text.debugLine("model/CommonStyle.ets(83:9)");
        Text.fontSize('15vp');
        Text.margin({ left: '40px' });
        Text.flexGrow(1);
        Text.pop();
        Flex.pop();
        Row.create();
        Row.debugLine("model/CommonStyle.ets(88:7)");
        Row.height('3px');
        Row.width('100%');
        Text.create();
        Text.debugLine("model/CommonStyle.ets(89:9)");
        Text.width('190px');
        Text.height('3px');
        Text.pop();
        Divider.create();
        Divider.debugLine("model/CommonStyle.ets(90:9)");
        Divider.vertical(false);
        Divider.color(WeChatData_ets_1.WeChatColor);
        Divider.strokeWidth('3px');
        Row.pop();
        Column.pop();
    }
}
exports.ContactItemStyle = ContactItemStyle;
class ChatItemStyle extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.WeChatImage = undefined;
        this.WeChatName = undefined;
        this.ChatInfo = undefined;
        this.time = undefined;
        this.__toastNumber = this.initializeConsume("toastNumber", "toastNumber");
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.WeChatImage !== undefined) {
            this.WeChatImage = params.WeChatImage;
        }
        if (params.WeChatName !== undefined) {
            this.WeChatName = params.WeChatName;
        }
        if (params.ChatInfo !== undefined) {
            this.ChatInfo = params.ChatInfo;
        }
        if (params.time !== undefined) {
            this.time = params.time;
        }
    }
    aboutToBeDeleted() {
        this.__toastNumber.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id());
    }
    get toastNumber() {
        return this.__toastNumber.get();
    }
    set toastNumber(newValue) {
        this.__toastNumber.set(newValue);
    }
    render() {
        Column.create();
        Column.debugLine("model/CommonStyle.ets(110:5)");
        Column.onClick(() => {
            this.toastNumber--;
            router.push({ uri: 'pages/ChatDetailPage', params: {
                    WeChatImage: this.WeChatImage,
                    WeChatName: this.WeChatName,
                    ChatInfo: this.ChatInfo
                } });
        });
        Flex.create({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.Start });
        Flex.debugLine("model/CommonStyle.ets(111:7)");
        Flex.height('180px');
        Flex.width('100%');
        Image.create($rawfile(this.WeChatImage));
        Image.debugLine("model/CommonStyle.ets(112:9)");
        Image.width('120px');
        Image.height('120px');
        Image.margin({ left: '50px', right: "50px" });
        Column.create();
        Column.debugLine("model/CommonStyle.ets(114:9)");
        Column.alignItems(HorizontalAlign.Start);
        Column.flexGrow(1);
        Text.create(this.WeChatName);
        Text.debugLine("model/CommonStyle.ets(115:11)");
        Text.fontSize('16fp');
        Text.pop();
        Text.create(this.ChatInfo);
        Text.debugLine("model/CommonStyle.ets(116:11)");
        Text.fontSize('12fp');
        Text.width('620px');
        Text.fontColor("#c2bec2");
        Text.maxLines(1);
        Text.pop();
        Column.pop();
        Text.create(this.time);
        Text.debugLine("model/CommonStyle.ets(119:9)");
        Text.fontSize('12fp');
        Text.margin({ right: "50px" });
        Text.fontColor("#c2bec2");
        Text.pop();
        Flex.pop();
        Row.create();
        Row.debugLine("model/CommonStyle.ets(126:7)");
        Row.height('3px');
        Row.width('100%');
        Text.create();
        Text.debugLine("model/CommonStyle.ets(127:9)");
        Text.width('190px');
        Text.height('3px');
        Text.pop();
        Divider.create();
        Divider.debugLine("model/CommonStyle.ets(128:9)");
        Divider.vertical(false);
        Divider.color(WeChatData_ets_1.WeChatColor);
        Divider.strokeWidth('3px');
        Row.pop();
        Column.pop();
    }
}
exports.ChatItemStyle = ChatItemStyle;
class MyDivider extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.style = "";
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.style !== undefined) {
            this.style = params.style;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Row.create();
        Row.debugLine("model/CommonStyle.ets(153:5)");
        Row.height(this.style == "1" ? '3px' : '23px');
        Row.width('100%');
        Divider.create();
        Divider.debugLine("model/CommonStyle.ets(154:7)");
        Divider.vertical(false);
        Divider.color(WeChatData_ets_1.WeChatColor);
        Divider.strokeWidth(this.style == "1" ? '3px' : '23px');
        Row.pop();
    }
}
exports.MyDivider = MyDivider;


/***/ }),

/***/ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\model\\Person.ets":
/*!****************************************************************************!*\
  !*** D:\code\HarmonyOS-WeChat\entry\src\main\ets\default\model\Person.ets ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Person = void 0;
let personId = 0;
class Person {
    constructor(WeChatImage, WeChatName, ChatInfo, time) {
        this.id = `${personId++}`;
        this.WeChatImage = WeChatImage;
        this.WeChatName = WeChatName;
        this.ChatInfo = ChatInfo;
        this.time = time;
    }
}
exports.Person = Person;


/***/ }),

/***/ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\model\\WeChatData.ets":
/*!********************************************************************************!*\
  !*** D:\code\HarmonyOS-WeChat\entry\src\main\ets\default\model\WeChatData.ets ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WeChatColor = exports.getContactInfo = void 0;
const Person_1 = __webpack_require__(/*! ./Person */ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\model\\Person.ets");
const ContactInfo = [
    {
        "WeChatImage": "person (1).jpg",
        "WeChatName": "告白气球",
        "ChatInfo": "亲爱的爱上你从那天起，甜蜜的很轻易",
        "time": "10:30"
    },
    {
        "WeChatImage": "person (2).jpg",
        "WeChatName": "一路向北",
        "ChatInfo": "我一路向北，离开有你的季节",
        "time": "10:29"
    },
    {
        "WeChatImage": "person (3).jpg",
        "WeChatName": "听妈妈的话",
        "ChatInfo": "听妈妈的话别让她受伤，想快快长大才能保护她",
        "time": "10:28"
    },
    {
        "WeChatImage": "person (4).jpg",
        "WeChatName": "七里香",
        "ChatInfo": "雨下整夜我的爱溢出就像雨水",
        "time": "10:27"
    },
    {
        "WeChatImage": "person (5).jpg",
        "WeChatName": "夜曲",
        "ChatInfo": "为你弹奏萧邦的夜曲，纪念我死去的爱情",
        "time": "10:26"
    },
    {
        "WeChatImage": "person (6).jpg",
        "WeChatName": "不能说的秘密",
        "ChatInfo": "最美的不是下雨天，是曾与你躲过雨的屋檐",
        "time": "10:25"
    },
    {
        "WeChatImage": "person (7).jpg",
        "WeChatName": "千里之外",
        "ChatInfo": "我送你离开千里之外你无声黑白",
        "time": "10:24"
    },
    {
        "WeChatImage": "person (8).jpg",
        "WeChatName": "世界末日",
        "ChatInfo": "天灰灰会不会，让我忘了你是谁",
        "time": "10:23"
    },
    {
        "WeChatImage": "person (9).jpg",
        "WeChatName": "园游会",
        "ChatInfo": "我顶着大太阳，只想为你撑伞",
        "time": "10:22"
    },
    {
        "WeChatImage": "person (10).jpg",
        "WeChatName": "简单爱",
        "ChatInfo": "我想就这样牵着你的手不放开",
        "time": "10:21"
    },
    {
        "WeChatImage": "person (11).jpg",
        "WeChatName": "回到过去",
        "ChatInfo": "想回到过去，试着让故事继续",
        "time": "10:20"
    },
    {
        "WeChatImage": "person (12).jpg",
        "WeChatName": "彩虹",
        "ChatInfo": "哪里有彩虹告诉我",
        "time": "10:19"
    },
    {
        "WeChatImage": "person (13).jpg",
        "WeChatName": "给我一首歌的时间",
        "ChatInfo": "能不能给我一首歌的时间，紧紧的把那拥抱变成永远",
        "time": "10:18"
    },
    {
        "WeChatImage": "person (14).jpg",
        "WeChatName": "枫",
        "ChatInfo": "缓缓飘落的枫叶像思念，我点燃烛光温暖岁末的秋天",
        "time": "10:17"
    },
    {
        "WeChatImage": "person (15).jpg",
        "WeChatName": "珊瑚海",
        "ChatInfo": "转身离开，分手说不出来",
        "time": "10:16"
    },
    {
        "WeChatImage": "person (16).jpg",
        "WeChatName": "菊花台",
        "ChatInfo": "徒留我孤单在湖面成双",
        "time": "10:15"
    },
    {
        "WeChatImage": "person (17).jpg",
        "WeChatName": "回到过去",
        "ChatInfo": "想回到过去，试着让故事继续",
        "time": "10:14"
    },
    {
        "WeChatImage": "person (18).jpg",
        "WeChatName": "断了的弦",
        "ChatInfo": "断了的弦再怎么连，我的感觉你已听不见",
        "time": "10:13"
    },
    {
        "WeChatImage": "person (19).jpg",
        "WeChatName": "搁浅",
        "ChatInfo": "风筝在阴天搁浅，想念还在等待救援",
        "time": "10:12"
    },
    {
        "WeChatImage": "person (20).jpg",
        "WeChatName": "星晴",
        "ChatInfo": "乘着风游荡在蓝天边，一片云掉落在我面前",
        "time": "10:11"
    },
    {
        "WeChatImage": "person (21).jpg",
        "WeChatName": "安静",
        "ChatInfo": "希望他是真的比我还要爱你，我才会逼自己离开",
        "time": "10:10"
    },
    {
        "WeChatImage": "person (22).jpg",
        "WeChatName": "借口",
        "ChatInfo": "翻着我们的照片，想念若隐若现",
        "time": "10:09"
    },
    {
        "WeChatImage": "person (23).jpg",
        "WeChatName": "发如雪",
        "ChatInfo": "繁华如三千东流水，我只取一瓢爱了解",
        "time": "10:08"
    },
    {
        "WeChatImage": "person (24).jpg",
        "WeChatName": "白色风车",
        "ChatInfo": "我陪你走到最后，能不能别想太多",
        "time": "10:07"
    },
    {
        "WeChatImage": "person (25).jpg",
        "WeChatName": "千里之外",
        "ChatInfo": "琴声何在，生死难猜，用一声去等待",
        "time": "10:06"
    },
    {
        "WeChatImage": "person (26).jpg",
        "WeChatName": "东风破",
        "ChatInfo": "岁月在墙上剥落看见小时候",
        "time": "10:05"
    },
    {
        "WeChatImage": "person (27).jpg",
        "WeChatName": "她的睫毛",
        "ChatInfo": "我戒不掉她的微笑，洋溢幸福的味道",
        "time": "10:04"
    },
    {
        "WeChatImage": "person (28).jpg",
        "WeChatName": "爱情悬崖",
        "ChatInfo": "下降的速度太快，来不及踏上未来",
        "time": "10:03"
    },
    {
        "WeChatImage": "person (29).jpg",
        "WeChatName": "世界末日",
        "ChatInfo": "想哭来试探自己麻痹了没，全世界好像只有我疲惫",
        "time": "10:02"
    },
    {
        "WeChatImage": "person (30).jpg",
        "WeChatName": "浪漫手机",
        "ChatInfo": "我们的感情蔓延珍藏拥吻着飞扬",
        "time": "10:01"
    }
];
function getContactInfo() {
    let contactList = [];
    ContactInfo.forEach(item => {
        contactList.push(new Person_1.Person(item.WeChatImage, item.WeChatName, item.ChatInfo, item.time));
    });
    return contactList;
}
exports.getContactInfo = getContactInfo;
exports.WeChatColor = "#cccccc";


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***************************************************************************************!*\
  !*** D:\code\HarmonyOS-WeChat\entry\src\main\ets\default\pages\ContactPage.ets?entry ***!
  \***************************************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ContactPage = void 0;
const CommonStyle_1 = __webpack_require__(/*! ../model/CommonStyle */ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\model\\CommonStyle.ets");
__webpack_require__(/*! ../model/Person */ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\model\\Person.ets");
const WeChatData_ets_1 = __webpack_require__(/*! ../model/WeChatData.ets */ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\model\\WeChatData.ets");
class ContactPage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.contactList = WeChatData_ets_1.getContactInfo();
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.contactList !== undefined) {
            this.contactList = params.contactList;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Column.create();
        Column.debugLine("pages/ContactPage.ets(11:5)");
        Column.alignItems(HorizontalAlign.Start);
        Column.width('100%');
        Column.height('100%');
        let earlierCreatedChild_2 = this.findChildById("2");
        if (earlierCreatedChild_2 == undefined) {
            View.create(new CommonStyle_1.WeChatTitle("2", this, { text: "通讯录" }));
        }
        else {
            earlierCreatedChild_2.updateWithValueParams({
                text: "通讯录"
            });
            if (!earlierCreatedChild_2.needsUpdate()) {
                earlierCreatedChild_2.markStatic();
            }
            View.create(earlierCreatedChild_2);
        }
        Scroll.create();
        Scroll.debugLine("pages/ContactPage.ets(14:7)");
        Column.create();
        Column.debugLine("pages/ContactPage.ets(15:9)");
        let earlierCreatedChild_3 = this.findChildById("3");
        if (earlierCreatedChild_3 == undefined) {
            View.create(new CommonStyle_1.ContactItemStyle("3", this, { imageSrc: "new_friend.png", text: "新的朋友" }));
        }
        else {
            earlierCreatedChild_3.updateWithValueParams({
                imageSrc: "new_friend.png", text: "新的朋友"
            });
            if (!earlierCreatedChild_3.needsUpdate()) {
                earlierCreatedChild_3.markStatic();
            }
            View.create(earlierCreatedChild_3);
        }
        let earlierCreatedChild_4 = this.findChildById("4");
        if (earlierCreatedChild_4 == undefined) {
            View.create(new CommonStyle_1.ContactItemStyle("4", this, { imageSrc: "group.png", text: "群聊" }));
        }
        else {
            earlierCreatedChild_4.updateWithValueParams({
                imageSrc: "group.png", text: "群聊"
            });
            if (!earlierCreatedChild_4.needsUpdate()) {
                earlierCreatedChild_4.markStatic();
            }
            View.create(earlierCreatedChild_4);
        }
        let earlierCreatedChild_5 = this.findChildById("5");
        if (earlierCreatedChild_5 == undefined) {
            View.create(new CommonStyle_1.ContactItemStyle("5", this, { imageSrc: "biaoqian.png", text: "标签" }));
        }
        else {
            earlierCreatedChild_5.updateWithValueParams({
                imageSrc: "biaoqian.png", text: "标签"
            });
            if (!earlierCreatedChild_5.needsUpdate()) {
                earlierCreatedChild_5.markStatic();
            }
            View.create(earlierCreatedChild_5);
        }
        let earlierCreatedChild_6 = this.findChildById("6");
        if (earlierCreatedChild_6 == undefined) {
            View.create(new CommonStyle_1.ContactItemStyle("6", this, { imageSrc: "gonzh.png", text: "公众号" }));
        }
        else {
            earlierCreatedChild_6.updateWithValueParams({
                imageSrc: "gonzh.png", text: "公众号"
            });
            if (!earlierCreatedChild_6.needsUpdate()) {
                earlierCreatedChild_6.markStatic();
            }
            View.create(earlierCreatedChild_6);
        }
        Text.create("      我的企业及企业联系人");
        Text.debugLine("pages/ContactPage.ets(22:11)");
        Text.fontSize('12fp');
        Text.backgroundColor(WeChatData_ets_1.WeChatColor);
        Text.height('80px');
        Text.width('100%');
        Text.pop();
        let earlierCreatedChild_7 = this.findChildById("7");
        if (earlierCreatedChild_7 == undefined) {
            View.create(new CommonStyle_1.ContactItemStyle("7", this, { imageSrc: "qiye.png", text: "企业微信联系人" }));
        }
        else {
            earlierCreatedChild_7.updateWithValueParams({
                imageSrc: "qiye.png", text: "企业微信联系人"
            });
            if (!earlierCreatedChild_7.needsUpdate()) {
                earlierCreatedChild_7.markStatic();
            }
            View.create(earlierCreatedChild_7);
        }
        Text.create("      我的微信好友");
        Text.debugLine("pages/ContactPage.ets(25:11)");
        Text.fontSize('12fp');
        Text.backgroundColor(WeChatData_ets_1.WeChatColor);
        Text.height('80px');
        Text.width('100%');
        Text.pop();
        List.create();
        List.debugLine("pages/ContactPage.ets(26:11)");
        ForEach.create("9", this, ObservedObject.GetRawObject(this.contactList), item => {
            ListItem.create();
            ListItem.debugLine("pages/ContactPage.ets(28:15)");
            let earlierCreatedChild_8 = this.findChildById("8");
            if (earlierCreatedChild_8 == undefined) {
                View.create(new CommonStyle_1.ContactItemStyle("8", this, { imageSrc: item.WeChatImage, text: item.WeChatName }));
            }
            else {
                earlierCreatedChild_8.updateWithValueParams({
                    imageSrc: item.WeChatImage, text: item.WeChatName
                });
                if (!earlierCreatedChild_8.needsUpdate()) {
                    earlierCreatedChild_8.markStatic();
                }
                View.create(earlierCreatedChild_8);
            }
            ListItem.pop();
        }, item => item.id.toString());
        ForEach.pop();
        List.pop();
        Column.pop();
        Scroll.pop();
        Column.pop();
    }
}
exports.ContactPage = ContactPage;
loadDocument(new ContactPage("1", undefined, {}));

})();

/******/ })()
;