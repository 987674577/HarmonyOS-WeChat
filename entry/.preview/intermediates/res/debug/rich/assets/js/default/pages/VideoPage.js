/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\play\\Video.ets":
/*!**************************************************************************!*\
  !*** D:\code\HarmonyOS-WeChat\entry\src\main\ets\default\play\Video.ets ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getVideos = exports.VideoInfo = void 0;
let videoId = 0;
const VideoData = [
    { 'src': "/play/video/video_1.mp4" },
    { 'src': "/play/video/video_2.mp4" },
    { 'src': "/play/video/video_3.mp4" },
    { 'src': "/play/video/video_4.mp4" },
    { 'src': "/play/video/video_5.mp4" },
    { 'src': "/play/video/video_6.mp4" },
    { 'src': "/play/video/video_7.mp4" }
];
class VideoInfo {
    constructor(src) {
        this.id = `${videoId++}`;
        this.src = src;
    }
}
exports.VideoInfo = VideoInfo;
function getVideos() {
    let Videos = [];
    VideoData.forEach(item => {
        Videos.push(new VideoInfo(item.src));
    });
    return Videos;
}
exports.getVideos = getVideos;


/***/ }),

/***/ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\play\\VideoPlayer.ets":
/*!********************************************************************************!*\
  !*** D:\code\HarmonyOS-WeChat\entry\src\main\ets\default\play\VideoPlayer.ets ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoPlayer = void 0;
__webpack_require__(/*! ../play/Video */ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\play\\Video.ets");
class VideoPlayer extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.item = undefined;
        this.videoController = new VideoController();
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.item !== undefined) {
            this.item = params.item;
        }
        if (params.videoController !== undefined) {
            this.videoController = params.videoController;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Stack.create({ alignContent: Alignment.Center | Alignment.End });
        Stack.debugLine("play/VideoPlayer.ets(11:5)");
        Stack.width('100%');
        Stack.height('100%');
        Video.create({
            src: this.item.src,
            controller: this.videoController
        });
        Video.debugLine("play/VideoPlayer.ets(12:7)");
        Video.controls(false);
        Video.autoPlay(true);
        Video.objectFit(ImageFit.Contain);
        Video.loop(true);
        Stack.pop();
    }
}
exports.VideoPlayer = VideoPlayer;


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
/*!*************************************************************************************!*\
  !*** D:\code\HarmonyOS-WeChat\entry\src\main\ets\default\pages\VideoPage.ets?entry ***!
  \*************************************************************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoPage = void 0;
const Video_1 = __webpack_require__(/*! ../play/Video */ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\play\\Video.ets");
const VideoPlayer_1 = __webpack_require__(/*! ../play/VideoPlayer */ "D:\\code\\HarmonyOS-WeChat\\entry\\src\\main\\ets\\default\\play\\VideoPlayer.ets");
class VideoPage extends View {
    constructor(compilerAssignedUniqueChildId, parent, params) {
        super(compilerAssignedUniqueChildId, parent);
        this.videoArray = Video_1.getVideos();
        this.updateWithValueParams(params);
    }
    updateWithValueParams(params) {
        if (params.videoArray !== undefined) {
            this.videoArray = params.videoArray;
        }
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id());
    }
    render() {
        Column.create();
        Column.debugLine("pages/VideoPage.ets(10:5)");
        Swiper.create();
        Swiper.debugLine("pages/VideoPage.ets(11:7)");
        Swiper.indicator(false);
        Swiper.loop(false);
        Swiper.vertical(true);
        ForEach.create("3", this, ObservedObject.GetRawObject(this.videoArray), item => {
            let earlierCreatedChild_2 = this.findChildById("2");
            if (earlierCreatedChild_2 == undefined) {
                View.create(new VideoPlayer_1.VideoPlayer("2", this, { item: item }));
            }
            else {
                earlierCreatedChild_2.updateWithValueParams({
                    item: item
                });
                if (!earlierCreatedChild_2.needsUpdate()) {
                    earlierCreatedChild_2.markStatic();
                }
                View.create(earlierCreatedChild_2);
            }
        }, item => item.id.toString());
        ForEach.pop();
        Swiper.pop();
        Column.pop();
    }
}
exports.VideoPage = VideoPage;
loadDocument(new VideoPage("1", undefined, {}));

})();

/******/ })()
;