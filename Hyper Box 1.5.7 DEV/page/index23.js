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
                            "像素鸟地狱模式：": ['Fly Bird Hell Mode:', '點數鳥地獄模式：'],
                            "像素鸟普通模式：": ['Fly Bird Normal Mode:','點數鳥普通模式：'],
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
                        const fly_bird_hard = hmUI.createWidget(hmUI.widget.TEXT,{
                            x: 0,
                            y: 80,
                            w: 192,
                            h: 40,
                            color: 0xffffff,
                            text: `${getText('像素鸟地狱模式：')}${hmFS.SysProGetInt64("HARD_BIRD_SCORE")}`
                        })
                        fly_bird_hard.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
                            let temp = hmFS.SysProGetInt64("HARD_BIRD_SCORE")
                            hmFS.SysProSetInt64("HARD_BIRD_SCORE",temp += 1)
                            fly_bird_hard.setProperty(hmUI.prop.TEXT,`${getText('像素鸟地狱模式：')}${hmFS.SysProGetInt64("HARD_BIRD_SCORE")}`)
                          });
                        const fly_bird = hmUI.createWidget(hmUI.widget.TEXT,{
                            x: 0,
                            y: 120,
                            w: 192,
                            h: 40,
                            color: 0xffffff,
                            text: `${getText('像素鸟普通模式：')}${hmFS.SysProGetInt64("BIRD_SCORE")}`
                        })
                        fly_bird.addEventListener(hmUI.event.CLICK_DOWN, function (info) {
                            let temp = hmFS.SysProGetInt64("BIRD_SCORE")
                            hmFS.SysProSetInt64("BIRD_SCORE",temp += 1)
                            fly_bird.setProperty(hmUI.prop.TEXT,`${getText('像素鸟普通模式：')}${hmFS.SysProGetInt64("BIRD_SCORE")}`)
                          });
                        
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