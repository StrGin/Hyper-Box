try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp;
    var t = e.current;
try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp,
    t = e.current;
  new DeviceRuntimeCore.WidgetFactory(
    new DeviceRuntimeCore.HmDomApi(e, t),
    "drink"
  );
DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
t.module = DeviceRuntimeCore.Page({
    onInit() {
      const baseVocabulary = {
        "作者": ['Author', '作者'],
        "特别鸣谢": ['Special Thanks', '特別鳴謝'],
        "代码修复": ['Code repair', '程式碼修復'],
        '图标提供': ['Icon provided', '圖標提供'],
        '图标更改': ['Icon Change', '圖標更改'],
        '图像来源': ['Image Source', '影像來源'],
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
      hmUI.setScrollView(!1, 490, 4, !1);
      hmUI.createWidget(hmUI.widget.IMG, {
        x: 45,
        y: 90,
        src: "icon.png"
    })
  
    hmUI.createWidget(hmUI.widget.TEXT,{
      x:0,
      y:205,
      w:192,
      h:750,
      color: 0xffffff,
      text_size:30,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.WRAP,
      text: "Hyper Box"
    })
    hmUI.createWidget(hmUI.widget.TEXT,{
      x:0,
      y:295,
      w:192,
      h:750,
      color: 0xffffff,
      text_size:27,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.WRAP,
      text: "Version 1.5.5 DEV"
    })
    hmUI.createWidget(hmUI.widget.TEXT,{
      x:0,
      y:260,
      w:192,
      h:760,
      color: 0xffffff,
      text_size:20,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.WRAP,
      text: `${getText('作者')} Struggle`
    })
    hmUI.createWidget(hmUI.widget.TEXT,{
      x:0,
      y:600,
      w:192,
      h:750,
      color:0xffc451,
      text_size:33,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.WRAP,
      text: getText("特别鸣谢")
    })
    hmUI.createWidget(hmUI.widget.TEXT,{
      x:0,
      y:650,
      w:192,
      h:750,
      color: 0xC0C0C0,
      text_size:20,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.WRAP,
      text: `淘汰郎-${getText('代码修复')} \n 敲木鱼的三文鱼-${getText('图标提供')} \n wuhaiqi-${getText('图标更改')}`
    })
    hmUI.createWidget(hmUI.widget.TEXT,{
      x:0,
      y:1070,
      w:192,
      h:750,
      color: 0xffc451,
      text_size:33,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.WRAP,
      text: getText("图像来源")
    })
    hmUI.createWidget(hmUI.widget.TEXT,{
      x:0,
      y:1120,
      w:192,
      h:750,
      color: 0xC0C0C0,
      text_size:20,
      align_h: hmUI.align.LEFT,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.WRAP,
      text: "Apple-SF Symbols 5"
    })
    hmUI.createWidget(hmUI.widget.TEXT,{
      x:0,
      y:1400,
      w:192,
      h:750,
      color: 0xffffff,
      text_size:15,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.WRAP,
      text: "AND..."
    })
    hmUI.createWidget(hmUI.widget.TEXT,{
      x:0,
      y:1620,
      w:192,
      h:150,
      color: 0xffffff,
      text_size:90,
      align_h: hmUI.align.CENTER_H,
      align_v: hmUI.align.TOP,
      text_style: hmUI.text_style.WRAP,
      text: "YOU"
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