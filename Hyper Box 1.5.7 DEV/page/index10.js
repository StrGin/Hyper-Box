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
        const time = hmSensor.createSensor(hmSensor.id.TIME)
        const residueSecond = 60 - time.second
        const residueHour = 60 - time.minute
        const residueDay = 24 - time.hour
        const residueWeek = 7 - time.week
        const residueYear = 12 - time.month
        const age = hmSetting.getUserData().age
        const thisLife = 80 - age
        let days = 31
        if (time.month === 2 && leapYear(time.year))days = 29
        else if (time.month === 2) days = 28
        else if (time.month == 4||time.month == 6||time.month == 9||time.month == 11) days = 30;
        const residueMonth = days - time.day
        const baseVocabulary = {
          "秒": ['second', '秒'],
          "分": ['minute', '分'],
          "时": ['hour', '时'],
          "日": ['day', '秒'],
          "月": ['month', '月'],
          "年": ['year', '年'],
          "此分还剩": ['This minute is still left', '此分還剩'],
          "此时还剩": ['This hour is still left', '此時還剩'],
          "此周还剩": ['This week is still left', '此周還剩'],
          "此月还剩": ['This month is still left', '此月還剩'],
          "今日还剩": ['Today is still left', '今日還剩'],    
          "今年还剩": ['There are still some left this year', '今年還剩'],    
          "今生还剩": ['There is still time left in this life', '今生還剩']
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
        const minute = hmUI.createWidget(hmUI.widget.TEXT, {
          x: 20,
          y: 50,
          color: "0xdddddd",
          text_size: 18,
          text_style: hmUI.text_style.WRAP,
          text: getText("此分还剩") + residueSecond + getText("秒")
      })      
      hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 20,
        y: 80,
        w: 102,
        h: 20,
        radius: 30,
        color: 0x696969,
      })
        const min_rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 20,
          y: 80,
          w: time.second * 17 / 10,
          h: 20,
          radius: 30,
          color: 0xF0444D,
          })
      const hour = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 20,
        y: 100,
        color: "0xdddddd",
        text_size: 18,
        text_style: hmUI.text_style.WRAP,
        text: getText("此时还剩") + residueHour + getText("分")
    })   
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 20,
      y: 130,
      w: 102,
      h: 20,
      radius: 30,
      color: 0x696969,
      })
      const hour_rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 20,
        y: 130,
        w: time.minute * 17 / 10,
        h: 20,
        radius: 30,
        color: 0xF0444D,
        })
    const day = hmUI.createWidget(hmUI.widget.TEXT, {
      x: 20,
      y: 150,
      color: "0xdddddd",
      text_size: 18,
      text_style: hmUI.text_style.WRAP,
      text: getText("今日还剩") + residueDay + getText("时")
  })  
  hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 20,
    y: 180,
    w: 102,
    h: 20,
                                              radius: 30,
    color: 0x696969,
    })
    const day_rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
      x: 20,
      y: 180,
      w: time.hour * 4.3,
      h: 20,
      radius: 30,
      color: 0xF0444D,
      })
  const week = hmUI.createWidget(hmUI.widget.TEXT, {
    x: 20,
    y: 200,
    color: "0xdddddd",
    text_size: 17,
    text_style: hmUI.text_style.WRAP,
    text: getText("此周还剩") + residueWeek + getText("日")
})  
hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 20,
  y: 230,
  w: 102,
  h: 20,
                                            radius: 30,
  color: 0x696969,
  })
  const week_rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 20,
    y: 230,
    w: time.week *13.1,
    h: 20,
                                              radius: 30,
    color: 0xF0444D,
    })
const month = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 20,
  y: 250,
  color: "0xdddddd",
  text_size: 18,
  text_style: hmUI.text_style.WRAP,
  text: getText("此月还剩") + residueMonth + getText("日")
})  
hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 20,
  y: 280,
  w: 102,
  h: 20,
                                            radius: 30,
  color: 0x696969,
  })
  const month_rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 20,
    y: 280,
    w: time.day * 3.4,
    h: 20,
                                              radius: 30,
    color: 0xF0444D,
    })
const year = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 20,
  y: 300,
  color: "0xdddddd",
  text_size: 18,
  text_style: hmUI.text_style.WRAP,
  text: `${getText("今年还剩")}residueYear${getText("月")}`
})  
hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 20,
  y: 330,
  w: 102,
  h: 20,
                                            radius: 30,
  color: 0x696969,
  })
  const year_rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 20,
    y: 330,
    w: time.month * 9,
    h: 20,
                                              radius: 30,
    color: 0xF0444D,
    })
const life = hmUI.createWidget(hmUI.widget.TEXT, {
  x: 20,
  y: 350,
  color: "0xdddddd",
  text_size: 18,
  text_style: hmUI.text_style.WRAP,
  text: getText("今生还剩") + thisLife + getText("年")
})  
hmUI.createWidget(hmUI.widget.FILL_RECT, {
  x: 20,
  y: 380,
  w: 102,
  h: 20,
  radius: 30,
  color: 0x696969,
  })
  const life_rect = hmUI.createWidget(hmUI.widget.FILL_RECT, {
    x: 20,
    y: 380,
    w: age * 1.5,
    h: 20,
    radius: 30,
    color: 0xF0444D,
    })
                    function leapYear(y){
                      if(y % 4 == 0 && y % 400 != 0 || y % 400 == 0) return true;
                      return false;
                  }
                  const timer1 = timer.createTimer(
                    1000,
                    1000,
                    function (option) {
                      minute.setProperty(hmUI.prop.TEXT,getText("此分还剩") + (60 - time.second) + getText("秒"))
                      min_rect.setProperty(hmUI.prop.W,(time.second * 17 / 10))
                      hour.setProperty(hmUI.prop.TEXT,getText("此时还剩") + (60 - time.minute) + getText("分"))
                      hour_rect.setProperty(hmUI.prop.W,(time.minute * 17 / 10))
                      day.setProperty(hmUI.prop.TEXT,getText("今日还剩") + (24 - time.hour) + getText("时"))
                      day_rect.setProperty(hmUI.prop.W,(time.hour * 4.3))
                      week.setProperty(hmUI.prop.TEXT,getText("此周还剩") + (7 - time.week) + getText("日"))
                      week_rect.setProperty(hmUI.prop.W,(time.week *13.1))
                      month.setProperty(hmUI.prop.TEXT,getText("此月还剩") + (days - time.day) + getText("日"))
                      month_rect.setProperty(hmUI.prop.W,(time.day * 3.4))
                      year.setProperty(hmUI.prop.TEXT,getText("今年还剩") + (12 - time.month) + getText("月"))
                      year_rect.setProperty(hmUI.prop.W,(time.month * 9))
                      life.setProperty(hmUI.prop.TEXT,getText("今生还剩") + (80 - age) + getText("年"))
                      life_rect.setProperty(hmUI.prop.W,(age * 1.5))
                    }
                  )
                  
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