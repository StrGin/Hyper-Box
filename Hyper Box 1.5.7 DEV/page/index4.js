try {
  (() => {
    var e = __$$hmAppManager$$__.currentApp;
    var t = e.current,
      { px: o } =
        (new DeviceRuntimeCore.WidgetFactory(
          new DeviceRuntimeCore.HmDomApi(e, t)
        ),
        e.app.__globals__);
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
      const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
      const answers = {
        'zh-CN': ["别不自量力", "与其奋力挣扎,不如闭眼享受", "别想了", "不", "不然呢？", "不要抱期望", "需找更多的选择", "跟着感觉走", "要求不要太高", "这是必然的,不要抗拒", "不要浪费精力", "车到山前必有路", "不用担心", "答案就在你身边", "换个角度想想", "大方一点", "放轻松点,慢慢来", "管它呢", "好运将会降临", "会付出代价", "会很不顺利", "会很顺利"],
        'en-US': ["Don't overestimate yourself", "Instead of struggling hard, it's better to close your eyes and enjoy yourself", "Don't think about it", "No", "Otherwise?", "Don't hold onto expectations", "Need to find more choices", "Follow your feelings", "Don't demand too much", "This is inevitable, don't resist", "Don't waste energy", "There must be a way to drive to the mountain", "Don't worry", "The answer is right beside you", "Think from a different perspective", "Be generous", "Relax, take your time", "What about it","Good luck will come", "there will be a price to pay", "it will be very difficult", "it will be very smooth"],
        'zh-TW': ["別不自量力","與其奮力掙扎,不如閉眼享受","別想了","不","不然呢？","不要抱期望","需找更多的選擇","跟著感覺走","要求不要太高","這是必然的,不要抗拒","不要浪費精力","車到山前必有路","不用擔心","答案就在你身邊","換個角度想想","大方一點","放輕鬆點,慢慢來","管它呢" ,"好運將會降臨","會付出代價","會很不順利","會很順利"]
      }
      let language = DeviceRuntimeCore.HmUtils.getLanguage()
      language = answers.hasOwnProperty(language) ? language : "en-US";
      const baseVocabulary = {
        "使用方法\n把手环放在桌上,闭上眼睛。用5至10秒的时间集中思考你的问题。例如：“TA喜欢我吗？” 或 “我需要换个工作吗？”。在想象或说出你问题的同时（每次只能有一个问题）,一个手指放在上面按钮的上方。\n在你感觉时间正确的时候,按下按钮,你要寻找的答案就在那里。\n遇到任何问题,你都可以打开它。": ['Instructions: Place the wristband on the table and close your eyes. Concentrate on your question for 5 to 10 seconds. Place a finger above the button above it while expressing your question (one at a time). Press the button when you feel ready, and the answer will be revealed. If you encounter any problems, you can open it.'
          , '使用方法\n把手環放在桌上，閉上眼睛。 用5至10秒的時間集中思考你的問題。 例如：“TA喜歡我嗎？”或“我需要換個工作嗎？”。 在想像或說出你問題的同時（每次只能有一個問題），一個手指放在上面按鈕的上方。 \n在你感覺時間正確的時候，按下按鈕，你要尋找的答案就在那裡。 \n遇到任何問題，你都可以打開它。'],
        "寻找答案": ['Find the answer', '尋找答案'],
      }
      
      const languages = ["zh-CN", "en-US", "zh-TW"];
      let i18nData = languages.reduce((acc, language, i) => ({
        ...acc,
        [language]: Object.keys(baseVocabulary).reduce((vocab, key) => {
          vocab[key] = !i ? key : baseVocabulary[key][i - 1]
          return vocab
        }, {})
      }), {}); 
      const getText = (key) => i18nData[language][key] || i18nData["en-US"][key];
      const randomAnswer = answers[language][getRandomNumber(0, answers[language].length - 1)];

  const hiddenTextWidget = hmUI.createWidget(hmUI.widget.TEXT, {
    x: 0,
    y: 120,
    w: 192,
    h: 100,
    color: 0xffffff,
    text_size: 20,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.WRAP,
    text: randomAnswer
  })
  hiddenTextWidget.setProperty(hmUI.prop.VISIBLE, false)
  const instructionTextWidget = hmUI.createWidget(hmUI.widget.TEXT, {
    x: 0,
    y: 90,
    w: 192,
    h: 400,
    color: 0xffffff,
    text_size: 15,
    align_h: hmUI.align.CENTER_H,
    align_v: hmUI.align.CENTER_V,
    text_style: hmUI.text_style.WRAP,
    text: getText('使用方法\n把手环放在桌上,闭上眼睛。用5至10秒的时间集中思考你的问题。例如：“TA喜欢我吗？” 或 “我需要换个工作吗？”。在想象或说出你问题的同时（每次只能有一个问题）,一个手指放在上面按钮的上方。\n在你感觉时间正确的时候,按下按钮,你要寻找的答案就在那里。\n遇到任何问题,你都可以打开它。')
  })
  hmUI.createWidget(hmUI.widget.BUTTON, {
    x: 10,
    y: 50,
    text: getText('寻找答案'),
    w: 170,
    h: 50,
    color: 0xffffff,
    normal_color: 0x101010,
  press_color: 0x262626,
  radius: 12,
    click_func: () => {
      instructionTextWidget.setProperty(hmUI.prop.VISIBLE, false)
      hiddenTextWidget.setProperty(hmUI.prop.VISIBLE, true)
    }
  })
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