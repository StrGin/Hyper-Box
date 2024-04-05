try {
    (() => {
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
                        let data = localStorage.get()
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

                        hmUI.setLayerScrolling(false);
                        const baseVocabulary = {
                            "未知": ['Unknown', '未知'],
                            "功德": ['Merit', '功德'],
                            "总功德": ['Merit', '功德'],
                            "敲电子木鱼，取赛博真经": ['Knock wooden fish to get scriptures', '敲電子木魚，取賽博真經'],
                            "挂机模式": ['On Hook', '掛機模式'],
                            "功德商城": ['Merit Mall', '功德商城'],
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
// 加载变量
let muyuNumber = load("muyu_number");
let speed = load("muyu");
let mav = load("mav");
let lv = '未知';

// 设置默认值
if (speed === undefined || speed === null) {
  speed = 1000;
}
if (mav === undefined || mav === null) {
  mav = 0;
}
if (muyuNumber === undefined || muyuNumber === null) {
  muyuNumber = 1;
}

// 根据条件设置等级
if (mav <= 99) {
  lv = 1;
} else {
  lv = Math.round(mav / 100) + 1;
}

// 加载振动参数并设置默认值
let vibrate2 = load("vibrate_2");
if (vibrate2 === undefined) {
  vibrate2 = 23;
}

// 创建计数控件
let count = hmUI.createWidget(hmUI.widget.TEXT, {
    x: 10,
    y: 20,
    w: 160,
    h: 100,
    color: 0xffffff,
    text_size: 20,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.WRAP,
    text: 'Lv' + lv + getText('总功德') + ':' + mav,
  });

// 创建图片控件
hmUI.createWidget(hmUI.widget.IMG, {
  x: 0,
  y: 150,
  w: 192,
  h: 192,
  src: "muyu/muyu.png",
}).addEventListener(hmUI.event.CLICK_DOWN, function(a) {
  vibrate.stop();
  vibrate.scene = vibrate2;
  vibrate.start();
  hmUI.showToast({
    text: getText('功德') + '+' + muyuNumber,
  });
  mav += muyuNumber;
  save("mav", mav);
  count.setProperty(hmUI.prop.MORE, {
    text: 'Lv' + lv + getText('总功德') + ':' + mav,
  });
});



// 创建说明文本控件
hmUI.createWidget(hmUI.widget.TEXT, {
  x: 0,
  y: 80,
  w: 192,
  h: 100,
  color: 0xffffff,
  text_size: 16,
  align_h: hmUI.align.CENTER_H,
  align_v: hmUI.align.CENTER_V,
  text_style: hmUI.text_style.WRAP,
  text: getText('敲电子木鱼，取赛博真经'),
});

// 创建挂机模式按钮
hmUI.createWidget(hmUI.widget.BUTTON, {
  x: 10,
  y: 390,
  text: getText('挂机模式'),
  w: 170,
  h: 50,
  color: 0xffffff,
  normal_color: 0x101010,
  press_color: 0x262626,
  radius: 12,
  click_func: () => {
    const timer1 = timer.createTimer(speed, speed, () => {
      mav += muyuNumber;
      save("mav", mav);
      count.setProperty(hmUI.prop.TEXT, getText('总功德') + ':' + mav);
    });
    hmUI.showToast({
      text: getText('功德') + '+' + muyuNumber,
    });
  },
});

                    },
                    onInit() {
                        console.log("index page.js on init invoke"), this.init_view();
                    },
                    onDestroy() {
                        vibrate && vibrate.stop();       
                        if (timer1)timer.stopTimer(timer1)
                        localStorage.set(data)
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