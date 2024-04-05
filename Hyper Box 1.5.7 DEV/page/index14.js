try {
    (() => {
        var e = __$$hmAppManager$$__.currentApp;
        var t = e.current,
            {
                px: o
            } = (new DeviceRuntimeCore.WidgetFactory(
                new DeviceRuntimeCore.HmDomApi(e, t)),
                e.app.__globals__);
        const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);
        try {
            (() => {
                var e = __$$hmAppManager$$__.currentApp,
                    t = e.current;
                new DeviceRuntimeCore.WidgetFactory(
                    new DeviceRuntimeCore.HmDomApi(e, t),
                    "drink");
                DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
                t.module = DeviceRuntimeCore.Page({
                    init_view() {
                        const img = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                            x: 0,
                            y: 0,
                            w: 192,
                            h: 490,
                            color: 0xFF0000
                          });
                              var num = 0
                              img.addEventListener(hmUI.event.CLICK_DOWN, function (a) {
                                    num++
                                    if ((num%2)===0&&(num%1)===0 )img.setProperty(hmUI.prop.COLOR, 0xffffff)
                                    else img.setProperty(hmUI.prop.COLOR, 0xff0000)
                              })
                    },
                    onInit() {
                        console.log("index page.js on init invoke"), this.init_view();
                    },
                    onReady() {
                        console.log("index page.js on ready invoke");
                    },
                    onShow() {
                        console.log("index page.js on show invoke");
                    },
                    onHide() {
                        console.log("index page.js on hide invoke");
                    },
                    onDestroy() {
                        console.log("index page.js on destory invoke");
                    }
                });
            })();
        } catch (e) {
            console.log(e);
        }
    })();
} catch (e) {
    console.log(e);
}