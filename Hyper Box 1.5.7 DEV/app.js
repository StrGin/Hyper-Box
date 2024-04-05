try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp;
    try {
      __$$hmAppManager$$__.currentApp.app = DeviceRuntimeCore.App({
        globalData: {},
        onCreate(e) {},
        onShow(e) {},
        onHide(e) {},
        onDestory(e) {},
        onError(e) {},
        onPageNotFound(e) {},
        onUnhandledRejection(e) {},
        showInfo(tag) {
          var obj = eval(tag);
          console.log(tag + "=", JSON.stringify(obj));
          for (let o in obj) try {
              this.showInfo(tag + "." + o)
          } catch (o) {}
      }
      });
    } catch (e) {
      console.log(e);
    }
    e.app.__globals__ = {
      lang: new DeviceRuntimeCore.HmUtils.Lang(
        DeviceRuntimeCore.HmUtils.getLanguage()
      ),
      px: DeviceRuntimeCore.HmUtils.getPx(192)
    };
  })();
} catch (e) {
  console.log(e);
}
