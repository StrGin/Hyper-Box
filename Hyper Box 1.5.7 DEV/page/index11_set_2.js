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
const baseVocabulary = {
  '震动调节': ['Vibration regulation','震動調節'],
  '几乎无感': ['Almost imperceptible','幾乎無感'],
  '轻微': ['Slight','輕微'],
  '中等': ['Medium','中等'],
  '强烈': ['Strong','强烈'],
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
          h: 650,
          color: 0x000000
        })
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 57,
          y: 20,
          text: getText('震动调节'),
          w: 192,
          h: 70,
          color: 0xffffff,
          text_size: 22,
        })
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 10,
          y: 50,
          text: getText('几乎无感'),
          w: 170,
          h: 70,
          color: 0xffffff,
          normal_color: 0x101010,
        press_color: 0x262626,
        radius: 20,
        text_size: 22,
          click_func: () => {
            save("vibrate_2",0)
          }
        })
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 10,
          y: 125,
          text: getText('轻微'),
          w: 170,
          h: 70,
          color: 0xffffff,
          normal_color: 0x101010,
        press_color: 0x262626,
        radius:20,
        text_size: 22,
          click_func: () => {
            save("vibrate_2",23)
          }
        })
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 10,
          y: 200,
          text: getText('中等'),
          w: 170,
          h: 70,
          color: 0xffffff,
          normal_color: 0x101010,
        press_color: 0x262626,
        radius:20,
        text_size: 22,
          click_func: () => {
            save("vibrate_2",24)
          }
        })
        hmUI.createWidget(hmUI.widget.BUTTON, {
          x: 10,
          y: 275,
          text: getText('强烈'),
          w: 170,
          h: 70,
          color: 0xffffff,
          normal_color: 0x101010,
        press_color: 0x262626,
        radius:20,
        text_size: 22,
          click_func: () => {
            save("vibrate_2",25)
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