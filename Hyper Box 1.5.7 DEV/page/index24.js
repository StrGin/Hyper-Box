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
         function str2ab(str) {
          const buf = new ArrayBuffer(str.length * 2)
          const bufView = new Uint16Array(buf)
          for (var i = 0, strLen = str.length; i < strLen; i++) {
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
           const[fsStat, err] = hmFS.stat(this.fileName)
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
         const baseVocabulary = {
          "请用手指涂满屏幕": ['Please fill the screen with your fingers', '請用手指塗滿荧幕'],
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
         const localStorage = new LocalStorage('readme.txt')
         hmUI.setLayerScrolling(false);
         var data = localStorage.get()
         if (Object.keys(data)
          .length == 0) {
          data = {}
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
          const { width: $w , height: $h } = hmSetting.getDeviceInfo()
          let fill_rect = new Array(($w * $h));
          let pen_color = 0x000000;
          let un_pen_color = 0xffffff;
          let pen_size = 10;
          let rectCache = {};
          hmUI.setLayerScrolling(false);
          let bg = hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 0,
            y: 0,
            w: $w,
            h: $h,
            color: 0xffffff
          });
          let i = 0
          bg.addEventListener(hmUI.event.MOVE, (info) => {
            i++
            console.log(i);
            const { x, y } = info;
            const index = y * $w + x;
            if (!fill_rect[index]) {
              const rectWidget = rectCache[index] || hmUI.createWidget(hmUI.widget.FILL_RECT, {
                x: x,
                y: y,
                w: pen_size,
                h: pen_size,
                color: pen_color,
                radius: 255
              });
              rectWidget.setEnable(false);
              fill_rect[index] = rectWidget;
              rectCache[index] = rectWidget;
            } else {
              const rectWidget = fill_rect[index];
              rectWidget.setProperty(hmUI.prop.MORE, {
                x: x,
                y: y,
                w: pen_size,
                h: pen_size,
                color: un_pen_color,
                radius: 255
              });
            }
          });
          
          
          hmUI.showToast({text: getText('请用手指涂满屏幕')})
   
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