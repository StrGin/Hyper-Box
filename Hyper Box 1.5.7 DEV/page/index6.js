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
          "未知": ['Unknown', '未知'],
          "偏瘦": ['Thin', '偏瘦'],
          "正常": ['Normal', '正常'],
          '肥胖': ['Obesity', '肥胖'],
          '轻度肥胖': ['Mild Obesity', '輕度肥胖'],
          '中度肥胖': ['Moderate Obesity', '中度肥胖'],
          "重度肥胖": ['Severe Obesity', '重度肥胖'],
          "您的身体偏瘦，建议增加高蛋白食品摄入并关注肠胃功能的健康与调养": ["You have a thin body,it's recommended to increase high protein food intake and focus on maintaining a healthy gastrointestinal function",'您的身體偏瘦，建議新增高蛋白食品攝入並關注腸胃功能的健康與調養'],
          "您的体重很正常，请继续保持！": ['Your weight is normal, please continue to maintain it!', '您的體重很正常，請繼續保持！'],
          "很遗憾，您已经达到了肥胖水平，为了您的健康，请减少脂肪及糖分的摄入并在每天进行运动": ['Unfortunately, you have reached the level of obesity. For the sake of your health, please reduce your intake of fat and sugar and exercise every day', '很遺憾，您已經達到了肥胖水准，為了您的健康，請减少脂肪及糖分的攝入並在每天進行運動'],
          '您的BMI指数为': ['Your BMI index is', '您的BMI指數為']
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
        const weight = hmSetting.getUserData().weight;
        const height = hmSetting.getUserData().height / 100;
        const height2 = hmSetting.getUserData().height;
        const heightSquared = height * height;
        const bmi = Math.floor(weight / heightSquared * 100) / 100;
        
        let bmiCategory = getText("未知");
        let bmiDescription = getText("未知");
        
        if (bmi < 18.5) {
          bmiCategory = getText("偏瘦");
          bmiDescription = getText("您的身体偏瘦，建议增加高蛋白食品摄入并关注肠胃功能的健康与调养");
        } else if (bmi >= 18.5 && bmi <= 25) {
          bmiCategory = getText("正常");
          bmiDescription = getText("您的体重很正常，请继续保持！");
        } else if (bmi > 25 && bmi <= 30) {
          bmiCategory = getText("肥胖");
          bmiDescription = getText("很遗憾，您已经达到了肥胖水平，为了您的健康，请减少脂肪及糖分的摄入并在每天进行运动");
        } else if (bmi > 30 && bmi <= 35) {
          bmiCategory = getText("轻度肥胖");
          bmiDescription = getText("很遗憾，您已经达到了肥胖水平，为了您的健康，请减少脂肪及糖分的摄入并在每天进行运动");
        } else if (bmi > 35 && bmi <= 40) {
          bmiCategory = getText("中度肥胖");
          bmiDescription = getText("很遗憾，您已经达到了肥胖水平，为了您的健康，请减少脂肪及糖分的摄入并在每天进行运动");
        } else if (bmi > 40) {
          bmiCategory = getText("重度肥胖");
          bmiDescription = getText("很遗憾，您已经达到了肥胖水平，为了您的健康，请减少脂肪及糖分的摄入并在每天进行运动");
        }
        
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 0,
          y: 40,
          w: 192,
          h: 300,
          color: 0xffffff,
          text_size: 20,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.WRAP,
          text: `${getText("您的BMI指数为")} ${bmi.toFixed(2)} ${weight}KG\n${height2}CM\n`
        });
        
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 0,
          y: 180,
          w: 192,
          h: 320,
          color: 0xffffff,
          text_size: 16,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.WRAP,
          text: `${bmiCategory}\n${bmiDescription}`
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