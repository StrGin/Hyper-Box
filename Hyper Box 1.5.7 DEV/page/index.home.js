try {
  (()=>{
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
            const baseVocabulary = {
              "计算器": ['Calculator', '計算器'],
              "荧光棒": ['Fluorescent', '螢光棒'],
              "每日一言": ['Sentence', '每日一言'],
              '答案之书': ['Book Of Answer', '答案之書'],
              '密码生成': ['Password', '密碼生成'],
              '身体质量': ['Body Mass', '身體質量'],
              '震动器': ['Vibrator', '震動器'],
              '备忘录': ['Notepad', '備忘錄'],
              '存储空间': ['Storage', '存儲空間'],
              '剩余时间': ['Remainder', '剩餘時間'],
              '电子木鱼': ['Wooden Fish', '電子木魚'],
              '电池管家': ['Battery', '電池管家'],
              '电子佛珠': ['Buddha Beads', '電子佛珠'],
              '苹果手电': ['Apple Flashlight', '蘋果手電'],
              '屏幕检测': ['Screen Detection', '荧幕檢測'],
              '今日饮食': ['Diet today', '今日飲食'],
              '手速测试': ['Hand Speed', '手速測試'],
              '随机数': ['Random Number', '亂數'],
              '超级设置': ['Super Setting', '超級設定'],
              '性能测试': ['Run Score ',  '跑分測試'],
              '系统信息': ['System Information', '系統資訊'],
              '绿光手电': ['Green Flashlight', '綠光手電'],
              '金手指': ['GoldFinger', '金手指'],
              '触控检测': ['Touch Detection', '觸控檢測'],
              '史载今日': ['History Today', '史載今天'],
            }
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
            if (!hmApp.getLayerY) hmApp.getLayerY = () => {};
          
            if (hmFS.SysProGetInt('current_Y')) hmApp.setLayerY(hmFS.SysProGetInt('current_Y'))
            hmUI.createWidget(hmUI.widget.FILL_RECT, {
              x: 0,
              y: 0,
              w: 192,
              h: 1600,
              color: 0x000000
            })
            hmUI.createWidget(hmUI.widget.IMG, {
              x: 60,
              y: 5,
              w: 60,
                h: 60,
              src: 'set.png'
                }).addEventListener(hmUI.event.CLICK_DOWN, function (info) {
                  hmApp.gotoPage({ url: 'page/set'})
                })
                const buttons = Object.keys(baseVocabulary);
                buttons.forEach((button, index) => {
                  hmUI.createWidget(hmUI.widget.BUTTON, {
                    w: 170,
                    h: 70,
                    text_size: 22,
                    color: 0xffffff,
                    normal_color: 0x101010,
                    press_color: 0x262626,
                    radius: 20,
                    x: 10,
                    y: 70 + (75 * index),
                    text: getText(button),
                    click_func: () => {
                        hmFS.SysProSetInt('current_Y', hmApp.getLayerY())
                        hmApp.gotoPage({ url: `page/index${index + 1}`})
                    },
                  });
                });
                hmApp.registerGestureEvent((event) => {
                  if (event == hmApp.gesture.LEFT) hmApp.gotoPage({ url: 'page/About' })
              });
              
          },
          onDestory() {
           hmApp.unregisterGestureEvent()
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