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
       onInit() {
        const baseVocabulary = {
          "帧": ['Frame Rate', '幀'],
          "亮": ['Brightness', '亮'],
          "色": ['Color', '色'],
          '启动': ['Firing', '啟動'],
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
        
        hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 0,
          y: 0,
          w: 192,
          h: 700,
          color: 0x000000
        })
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 68,
          y: 20,
          w: 192 - 16,
          h: 80,
          text: `Back`,
          color: 0xdddddd,
          text_size: 26,
        }).addEventListener(hmUI.event.CLICK_DOWN, function (info) {
          hmApp.goBack()
        });
        var x = 176
        var x2 = x
        var color = {
              '0xffffff': true,
              '0x000000': true,
              '0xff0000': true,
              '0x008000': true,
              '0x0000ff': true,
              '0x00ffff': true,
              '0xffff00': true,
              '0xffc0cb': true,
              '0x800080': true
        }
        var text = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 8,
          y: 66,
          w: 192 - 16,
          h: 80,
          text: `${getText('帧')}      ${x}`,
          color: 0xdddddd,
          text_size: 40,
        });
        
        var temm = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 8,
          y: 125,
          w: 192 - 16,
          h: 80,
          radius: 20,
          color: 0x202124
        })
        var tem = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 8,
          y: 125,
          w: 192 - 16,
          h: 80,
          radius: 20,
          color: 0xffffff
      })
        tem.addEventListener(hmUI.event.MOVE, function (info) {
          if (info.x < 177) {
            tem.setProperty(hmUI.prop.W, info.x)
            text.setProperty(hmUI.prop.TEXT, `${getText('帧')}      ${x}`)
            x = info.x
          }
        })
        temm.addEventListener(hmUI.event.MOVE, function (info) {
          if (info.x < 177) {
            tem.setProperty(hmUI.prop.W, info.x)
            text.setProperty(hmUI.prop.TEXT, `${getText('帧')}      ${x}`)
            x = info.x
          }
        })
        var text2 = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 8,
          y: 220,
          w: 192 - 16,
          h: 80,
          text: `${getText('亮')}     ${hmSetting.getBrightness()}`,
          color: 0xdddddd,
          text_size: 40,
        });
        
        var temm2 = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 8,
          y: 280,
          w: 192 - 16,
          h: 80,
          radius: 20,
          color: 0x202124
        })
        var tem2 = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 8,
          y: 280,
          w: hmSetting.getBrightness()*1.76,
          h: 80,
          radius: 20,
          color: 0xffffff
      })
        tem2.addEventListener(hmUI.event.MOVE, function (info) {
          x2 = info.x
          console.log(info.x)
          if (info.x/1.76<101) {
            tem2.setProperty(hmUI.prop.W, info.x)
            text2.setProperty(hmUI.prop.TEXT, `${getText('亮')}      ${hmSetting.getBrightness()}`)
            hmSetting.setBrightness(Math.round(x2/1.76))
          }
        })
        temm2.addEventListener(hmUI.event.MOVE, function (info) {
          x2 = info.x
          console.log(info.x)
          if (info.x/1.76<101) {
            tem2.setProperty(hmUI.prop.W, info.x)
            text2.setProperty(hmUI.prop.TEXT, `${getText('亮')}      ${hmSetting.getBrightness()}`)
            hmSetting.setBrightness(Math.round(x2/1.76))
          }
        })
        var text1 = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 8,
          y: 377,
          w: 192 - 16,
          h: 80,
          text: getText('色'),
          color: 0xdddddd,
          text_size: 40,
        });
        function isTrue(tem){
          if (tem) return '√'
          return
        }
        function isFalse(tem) {
          if (tem == '√') return ''
          else return '√'
        }
        function False(tem) {
          if (tem == '√') return false
          else return true
        }
        function isWhite(tem){
          if (tem == 0xffffff || tem == 0xffff00) return 0x000000
          else return 0xffffff
        }
      let counter = 0;
      let yValue = 435;
      console.log(Object.keys(color));
      for(let i = 0; i < Object.keys(color).length; i++){
          hmUI.createWidget(hmUI.widget.BUTTON, {
              x: (counter % 3) * 65 + 8,
              y: yValue,
              w: 60,
              h: 60,
              radius: 12,
              normal_color: Object.keys(color)[i],
              press_color: Object.keys(color)[i],
              color: isWhite(Object.keys(color)[i]),
              text: isTrue(color[Object.keys(color)[i]]),
              click_func: (button) => {
                color[Object.keys(color)[i]] = False(button.getProperty(hmUI.prop.TEXT))
                button.setProperty(hmUI.prop.TEXT, isFalse(button.getProperty(hmUI.prop.TEXT)))
              }
          });
          counter++;
          if(counter % 3 === 0)yValue += 70;  
      }
      hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 8,
        y: 650,
        w: 176,
        h: 60,
        radius: 12,
        normal_color: 0x000000,
        press_color: 0x000000,
        color: 0xffffff,
        text: getText('启动'),
        click_func: () => {
          hmApp.gotoPage({ url: 'page/index2_view', param: JSON.stringify({
            fps: x,
            color: color
          }) })
        }
    });
    hmApp.registerGestureEvent(function (event) {return 1})
       },
       onDestory() {
        hmApp.unregisterGestureEvent();
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
