// 스토어 링크 한 곳. Play 정식 출시되는 날 PLAY_LIVE 를 true 로 바꾸면 홈페이지 버튼과 /get/ 링크가 함께 열려요.
var GE = {
  PLAY_LIVE: false,
  appStore: function (ct) { return "https://apps.apple.com/app/apple-store/id6826226980?pt=127760692&ct=" + ct + "&mt=8"; },
  play: function (src) { return "https://play.google.com/store/apps/details?id=com.kangcoding.gravityescape&utm_source=" + src; },
  device: function () {
    var ua = navigator.userAgent || "";
    if (/android/i.test(ua)) return "android";
    if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) return "ios";
    return "other";
  }
};
