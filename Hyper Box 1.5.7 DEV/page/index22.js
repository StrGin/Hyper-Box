try {
    (() => {
        var e = __$$hmAppManager$$__.currentApp;
        var t = e.current,
            {
                px: o
            } = (new DeviceRuntimeCore.WidgetFactory(
                new DeviceRuntimeCore.HmDomApi(e, t)),
                e.app.__globals__);
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
                        const baseVocabulary = {
                            "启动": ['Start', '啟動'],
                            "温馨提示：该功能仅是应各大网友需求而创作，但此功能只能在手环佩戴在手腕上时才可使用，即测量血氧时的动作，无法完成预期的脱离手腕当手电筒使用（": ['',''],
                            "停止": ['Stop','停止']
                          };
                          const languages = ["zh-CN", "en-US", "zh-TW"];
                          let i18nData = languages.reduce((acc, language, i) => ({
                              ...acc,
                              [language]: Object.keys(baseVocabulary).reduce((vocab, key) => {
                                vocab[key] = !i ? key : baseVocabulary[key][i - 1]
                                  return vocab
                                }, {})
                               }), {}); 
                              let language = DeviceRuntimeCore.HmUtils.getLanguage();
                                language = i18nData.hasOwnProperty(language) ? language : "en-US";
                              const getText = (key) => i18nData[language][key] || i18nData["en-US"][key];
                        const heart = hmSensor.createSensor(hmSensor.id.HEART)
                        hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 52,
                            y: 42,
                            w: 100,
                            h: 100,
                            radius: 50,
                            press_color: 0x1E90FF,
                            normal_color: 0x1E90FF,
                            color: 0xFFFFFF,
                            text_size: 20,
                            text: getText("启动"),
                            click_func: function () {
                                const timer1 = timer.createTimer(5000,5000,() => heart.addEventListener(heart.event.CURRENT, () => {}))
                            }
                          })
                          hmUI.createWidget(hmUI.widget.TEXT,{
                            x: 0,
                            y: 160,
                            w: 192,
                            h: 480,
                            color: 0xffffff,
                            text_style: hmUI.text_style.WRAP,
                            text: getText(`温馨提示：该功能仅是应各大网友需求而创作，但此功能只能在手环佩戴在手腕上时才可使用，即测量血氧时的动作，无法完成预期的脱离手腕当手电筒使用（`)
                        })
                          hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 52,
                            y: 372,
                            w: 100,
                            h: 100,
                            radius: 50,
                            press_color: 0x1E90FF,
                            normal_color: 0x1E90FF,
                            color: 0xFFFFFF,
                            text_size: 20,
                            text: getText("停止"),
                            click_func: function () {
                              if (timer1) timer.stopTimer(timer1); 
                              else hmUI.showToast({text: '操你妈没启动就停止，*****************************************************************************************************************'})
                            }
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
                        if (timer1) timer.stopTimer(timer1)
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