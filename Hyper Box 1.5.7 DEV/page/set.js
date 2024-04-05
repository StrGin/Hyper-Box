try {
  (()=>{
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
          "设置": ['Set up', '設定'],
          '震动器': ['Vibrator', '震動器'],
          '电子木鱼': ['Wooden Fish', '電子木魚']
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
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 77,
          y: 20,
          text: getText('设置'),
          w: 192,
          h: 50,
          color: 0xffffff,
        })
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 10,
          y: 70,
          text: getText('震动器'),
          w: 170,
          h: 70,
          color: 0xffffff,
          normal_color: 0x101010,
        press_color: 0x262626,
        radius: 20,
        text_size: 22,
          click_func: () => {
            hmApp.gotoPage({ url: 'page/index7_set' })
          }
        })
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 10,
          y: 145,
          text: getText('电子木鱼'),
          w: 170,
          h: 70,
          color: 0xffffff,
          normal_color: 0x101010,
        press_color: 0x262626,
        radius: 20,
        text_size: 22,
          click_func: () => {
            hmApp.gotoPage({ url: 'page/index11_set' })
          }
        })
       },
       onInit() {
        console.log("index page.js on init invoke"), this.init_view();
       },
        
      });
     })();
    } catch (e) {
     console.log(e);
    }
   })();
  } catch (e) {
   console.log(e);
  }