try {
  (()=>{
    function str2ab(str) {
      const buf = new ArrayBuffer(str.length * 2) // 2 bytes for each char
      const bufView = new Uint16Array(buf)
      for (let i = 0, strLen = str.length; i < strLen; i++) {
        bufView[i] = str.charCodeAt(i)
      }
      return buf
    }
    class LocalStorage {
      constructor(fileName = '') {
        this.fileName = fileName
        this.contentObj = {}
      }
      set(obj) {
        const file = hmFS.open(this.fileName, hmFS.O_RDWR | hmFS.O_TRUNC)
        const contentBuffer = str2ab(JSON.stringify(obj))
        hmFS.write(file, contentBuffer, 0, contentBuffer.byteLength)
        hmFS.close(file)
      }
      get() {
        const [fsStat, err] = hmFS.stat(this.fileName)
        if (err === 0) {
          const {
            size
          } = fsStat
          const fileContentUnit = new Uint16Array(new ArrayBuffer(size))
          const file = hmFS.open(this.fileName, hmFS.O_RDONLY | hmFS.O_CREAT)
          hmFS.seek(file, 0, hmFS.SEEK_SET)
          hmFS.read(file, fileContentUnit.buffer, 0, size)
          hmFS.close(file)
          try {
            const val = String.fromCharCode.apply(null, fileContentUnit)
            this.contentObj = val ? JSON.parse(val) : {}
          } catch (error) {
            this.contentObj = {}
          }
        }
        return this.contentObj
      }
    }

    const localStorage = new LocalStorage('Hyper.json')
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
        data = localStorage.get()
if (Object.keys(data)
							.length == 0) {
							data = { 
										}
						}
function save(text, parse) {
    try {
        data[text] = parse
        localStorage.set(data)
        return 0
    } catch (error) {
        return 1
    }
}
function load(parse) {
    try {
        return data[parse]
    } catch (error) {
        return undefined
    }
}
const baseVocabulary = {
  "电子木鱼": ['Wooden Fish', '電子木魚'],
  '震动调节': ['Vibration regulation','震動調節'],
  '重置功德': ['Recharge merit','重置功德'],
  '功德增速': ['Merit growth rate','功德增速'],
  '功德增数': ['Merit increase','功德增數']
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

        hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 0,
          y: 0,
          w: 192,
          h: 600,
          color: 0x000000
        }) 
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 57,
          y: 20,
          text: getText('电子木鱼'),
          w: 192,
          h: 70,
          color: 0xffffff,
        })
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 10,
          y: 50,
          text: getText('震动调节'),
          w: 170,
          h: 70,
          color: 0xffffff,
          normal_color: 0x101010,
        press_color: 0x262626,
        radius: 20,
        text_size: 22,
          click_func: () => {
            hmApp.gotoPage({ url: 'page/index11_set_2' })
          }
        })
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 10,
          y: 125,
          text: getText('重置功德'),
          w: 170,
          h: 70,
          color: 0xffffff,
          normal_color: 0x101010,
        press_color: 0x262626,
        radius: 20,
        text_size: 22,
          click_func: () => {
            save("mav",0)
            hmUI.showToast({
              text: '佛祖:6',
          })
          }
        })
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 10,
          y: 200,
          text: getText('功德增速'),
          w: 170,
          h: 70,
          color: 0xffffff,
          normal_color: 0x101010,
        press_color: 0x262626,
        radius: 20,
        text_size: 22,
          click_func: () => {
            hmApp.gotoPage({ url: 'page/index11_set_3' })
          }
        })
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 10,
          y: 275,
          text: getText('功德增数'),
          w: 170,
          h: 70,
          color: 0xffffff,
          normal_color: 0x101010,
        press_color: 0x262626,
        radius: 20,
        text_size: 22,
          click_func: () => {
            hmApp.gotoPage({ url: 'page/index11_set_4' })
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
       onDestory() {
        console.log("index page.js on destory invoke");
        localStorage.set(data)
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