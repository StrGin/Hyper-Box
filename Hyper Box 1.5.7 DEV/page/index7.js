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
       onInit() {
        var data = localStorage.get()
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
                const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);
                const scene = load('vibrate')
                if(scene == undefined) save('vibrate',5)
                const baseVocabulary = {
                  "启动": ['Firing', '啟動'],
                  "停止": ['Cease', '停止']
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
                  click_func: () => {
                    vibrate.stop()
                    vibrate.scene = scene;
                    vibrate.start();
                  }
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
                  click_func: () => {
                    vibrate.stop();
                  }
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