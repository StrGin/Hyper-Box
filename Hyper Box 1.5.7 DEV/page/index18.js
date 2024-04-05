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
                        "随机数": ['Random Number', '亂數'],
                        "最大值": ['Max value', '最大值'],
                        "最小值": ['Min value', '最小值'],
                        "设置最大值": ['Set max value', '設定最大值'],
                        "设置最小值": ['Set min value', '設定最小值'],
                        "生成": ['Generate', '生成'],
                        "二值不可皆为0": ['Binary cannot all be 0', '二值不可皆為0'],
                        "二值之一不能为0": ['One of the binary values cannot be 0', '二值之一不能為0'],
                        "二值不可相同": ['Binary cannot be the same', '二值不可相同'],
                        "小值不可大于大值": ['The Min value cannot be greater than the large value', '小值不可大於大值'],
                        "重置": ['Resetting', '重置'],
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
                      function random(minNum,maxNum){ 
                        switch(arguments.length){ 
                            case 1: 
                                return parseInt(Math.random()*minNum+1,10); 
                            break; 
                            case 2: 
                                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
                            break; 
                                default: 
                                    return 0; 
                                break;
                        } 
                      }
                      
                      let num = 0
                      let num_big = 0
                      let num_small = 0
                      hmUI.createWidget(hmUI.widget.TEXT, {
                        x: 67,
                        y: 30,
                        text: getText('随机数'),
                        w: 192,
                        h: 70,
                        color: 0xffffff,
                      })
                      const text = hmUI.createWidget(hmUI.widget.TEXT, {
                        x: 68,
                        y: 55,
                        w: 64,
                        h: 50,
                        color: 0xffffff,
                        text_size: 30,
                        text_style: hmUI.text_style.WRAP,
                        text: num
                    })
                    const big_1 = hmUI.createWidget(hmUI.widget.TEXT, {
                      x: 28,
                      y: 95,
                      w: 192,
                      h: 192,
                      color: 0xffffff,
                      text_size: 20,
                      text_style: hmUI.text_style.WRAP,
                      text: getText("最大值") +num_big
                  })
                  const small_1 = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 28,
                    y: 125,
                    w: 192,
                    h: 192,
                    color: 0xffffff,
                    text_size: 20,
                    text_style: hmUI.text_style.WRAP,
                    text: getText("最小值") +num_small
                })
                
                    const big = hmUI.createWidget(hmUI.widget.BUTTON, {
                      x: 6,
                      y: 345,
                      text: getText('设置最大值'),
                      w: 180,
                      h: 45,
                      color: 0xffffff,
                      normal_color: 0x101010,
                    press_color: 0x262626,
                    text_size: 22,
                    radius: 20,
                      click_func: () => {
                        num_big++
                        big_1.setProperty(hmUI.prop.MORE, {
                          text: getText("最大值") + num_big
                        })
                      }
                    })
                    const small = hmUI.createWidget(hmUI.widget.BUTTON, {
                      x: 6,
                      y: 395,
                      text: getText('设置最小值'),
                      w: 180,
                      h: 45,
                      color: 0xffffff,
                      normal_color: 0x101010,
                    press_color: 0x262626,
                    text_size: 22,
                    radius: 20,
                      click_func: () => {
                        num_small++
                        small_1.setProperty(hmUI.prop.MORE, {
                          text: getText("最小值") + num_small
                        })
                      }
                    })
                    hmUI.createWidget(hmUI.widget.BUTTON, {
                      x: 6,
                      y: 295,
                      text: getText('生成'),
                      w: 180,
                      h: 45,
                      color: 0xffffff,
                      normal_color: 0x101010,
                    press_color: 0x262626,
                    text_size: 22,
                    radius: 20,
                      click_func: () => {
                        if (num_small == 0 && num_big == 0) {
                          hmUI.showToast({
                            text: getText('二值不可皆为0')
                          })
                        }
                        else if (num_small == 0 || num_big == 0) {
                          hmUI.showToast({
                            text: getText('二值之一不能为0')
                          })
                        }
                        else if (num_small == num_big) {
                          hmUI.showToast({
                            text: getText('二值不可相同')
                          })
                        }
                        else if (num_small > num_big) {
                          hmUI.showToast({
                            text: getText('小值不可大于大值')
                          })
                        }
                        else{
                          num = random(num_small,num_big)
                          text.setProperty(hmUI.prop.TEXT,num)
                          hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 6,
                            y: 245,
                            text: getText('重置'),
                            w: 180,
                            h: 45,
                            color: 0xffffff,
                            normal_color: 0x101010,
                          press_color: 0x262626,
                          text_size: 22,
                          radius: 20,
                            click_func: () => {
                              num_big,num_small = 0
                              hmApp.gotoPage({ url: 'page/index18' })
                              hmApp.goBack()
                            }
                          })
                        }                  }
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
                    onDestroy() {
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