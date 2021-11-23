/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!********************************************************************************************************************!*\
  !*** ../../../../../../../../DevEcoStudioProjects/WeChart/entry/src/main/ets/default/common/CommonStyle.ets?entry ***!
  \********************************************************************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatItemStyle = exports.WeChatTitle = void 0;
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
        Flex.debugLine("common/CommonStyle.ets(6:5)");
        Flex.height('120px');
        Flex.backgroundColor("#e2dede");
        Text.create(this.text);
        Text.debugLine("common/CommonStyle.ets(7:7)");
        Text.fontSize('18fp');
        Text.padding('20px');
        Text.pop();
        Flex.pop();
    }
}
exports.WeChatTitle = WeChatTitle;
class ChatItemStyle extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.weChartImage = undefined;
        this.weChartName = undefined;
        this.chartInfo = undefined;
        this.time = undefined;
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.weChartImage !== undefined) {
            this.weChartImage = params.weChartImage;
        }
        if (params.weChartName !== undefined) {
            this.weChartName = params.weChartName;
        }
        if (params.chartInfo !== undefined) {
            this.chartInfo = params.chartInfo;
        }
        if (params.time !== undefined) {
            this.time = params.time;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Column.create();
        Column.debugLine("common/CommonStyle.ets(20:5)");
        Flex.create({ alignItems: ItemAlign.Center, justifyContent: FlexAlign.Start });
        Flex.debugLine("common/CommonStyle.ets(21:7)");
        Flex.height('180px');
        Flex.width('100%');
        Image.create("$rawfile(this.weChartImage)");
        Image.debugLine("common/CommonStyle.ets(22:9)");
        Image.width('120px');
        Image.height('120px');
        Image.margin({ left: '50px', right: '50px' });
        Column.create();
        Column.debugLine("common/CommonStyle.ets(24:9)");
        Column.alignItems(HorizontalAlign.Start);
        Column.flexGrow(1);
        Text.create(this.weChartName);
        Text.debugLine("common/CommonStyle.ets(25:11)");
        Text.fontSize('16fp');
        Text.pop();
        Text.create(this.chartInfo);
        Text.debugLine("common/CommonStyle.ets(26:11)");
        Text.fontSize('12fp');
        Text.width('620px');
        Text.fontColor("#847f7f");
        Text.maxLines(1);
        Text.pop();
        Column.pop();
        Text.create(this.time);
        Text.debugLine("common/CommonStyle.ets(29:9)");
        Text.fontSize('12fp');
        Text.margin({ right: '50px' });
        Text.fontColor("#847f7f");
        Text.pop();
        Flex.pop();
        Row.create();
        Row.debugLine("common/CommonStyle.ets(33:7)");
        Row.height('3px');
        Row.width('100%');
        Text.create();
        Text.debugLine("common/CommonStyle.ets(34:9)");
        Text.width('190px');
        Text.height('3px');
        Text.pop();
        Divider.create();
        Divider.debugLine("common/CommonStyle.ets(35:9)");
        Divider.vertical(false);
        Divider.color("#e2dede");
        Divider.strokeWidth('3px');
        Row.pop();
        Column.pop();
    }
}
exports.ChatItemStyle = ChatItemStyle;

})();

/******/ })()
;