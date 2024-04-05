try {
    (() => {
        var e = __$$hmAppManager$$__.currentApp;
        var t = e.current;
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
                    onInit() {
                        const img = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                            x: 0,
                            y: 0,
                            w: 192,
                            h: 490,
                            color: 0xFF0000
                          });
                          var num = 0;
                          var colors = [0xffffff, 0x0000FF, 0x808080, 0x00FFFF, 0xffffff, 0xFFFF00];
                          img.addEventListener(hmUI.event.CLICK_DOWN, (a) => {
                                  if (num < colors.length) {
                                      img.setProperty(hmUI.prop.MORE, {
                                          x: 0,
                                          y: 0,
                                          w: 192,
                                          h: 490,
                                          color: colors[num]
                                      })
                                  } 
                                  else hmApp.goBack();
                                  num++;
                              })
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