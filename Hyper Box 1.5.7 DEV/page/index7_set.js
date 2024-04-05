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
    var t = e.current;
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
        data = localStorage.get()
if (Object.keys(data)
							.length == 0) {
							var data = { 
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
  hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 0,
    y: 0,
    w: 192,
    h: 780,
    color: 0x000000
  })
  hmUI.createWidget(hmUI.widget.TEXT, {
    x: 67,
    y: 20,
    text: '震动器',
    w: 192,
    h: 70,
    color: 0xffffff,
});
const baseVocabulary = {
  "几乎无感": ['Almost Imperceptible', '幾乎無感'],
  "轻微(时间很短)": ['Mild (Very Short Duration)', '輕微（時間很短）'],
  "中等(时间很短)": ['Moderate (Very Short Duration)', '中等（時間很短）'],
  "强烈(时间很短)": ['Intense (Very Short Duration)', '強烈（時間很短）'],
  "强烈(时间短)": ['Intense (Short Duration)', '強烈（時間短）'],
  "强烈(时间较短)": ['Intense (Moderate Duration)', '強烈（時間較短）'],
  "强烈(规律两次)": ['Intense (Pattern: Twice)', '強烈（規律兩次）'],
  "强烈(规律四次)": ['Intense (Pattern: Four Times)', '強烈（規律四次）'],
  "强烈(持续震动)": ['Intense (Constant Vibration)', '強烈（持續震動）'],
  '震动器': ['Vibrator', '震動器']
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
const vibrateOptions = [
  { text: getText('几乎无感'), value: 0 },
  { text: getText('轻微(时间很短)'), value: 23 },
  { text: getText('中等(时间很短)'), value: 24 },
  { text: getText('强烈(时间很短)'), value: 25 },
  { text: getText('强烈(时间短)'), value: 28 },
  { text: getText('强烈(时间较短)'), value: 27 },
  { text: getText('强烈(规律两次)'), value: 1 },
  { text: getText('强烈(规律四次)'), value: 9 },
  { text: getText('强烈(持续震动)'), value: 5 },
];

vibrateOptions.forEach((option, index) => {
  hmUI.createWidget(hmUI.widget.BUTTON, {
    x: 10,
    y: 50 + (75 * index),
    text: option.text,
    w: 170,
    h: 70,
    color: 0xffffff,
    normal_color: 0x101010,
    press_color: 0x262626,
    radius: 20,
    text_size: 22,
    click_func: () => {
      save("vibrate", option.value);
    },
  });
});
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