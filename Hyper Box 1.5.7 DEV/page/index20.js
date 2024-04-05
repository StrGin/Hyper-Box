(() => {
  var info = hmSetting.getDeviceInfo();
  var deviceName = info.deviceName

  switch (info.deviceSource) {
    case 260:
    case 261:
    case 262:
    case 263:
    case 264:
    case 265:
      deviceName = "XiaomiBand7";
      break;
    case 252:
    case 253:
    case 254:
      deviceName = "Huami 手环7";
      break;
    case 224:
    case 225:
      deviceName = "Huami GTS 3";
      break;
    case 7995648:
    case 7995649:
      deviceName = "Huami GTS 4";
      break;
    case 246:
    case 247:
      deviceName = "Huami GTS 4 mini";
      break;
    case 250:
    case 251:
      deviceName = "Huami GTR mini";
      break;
    case 226:
    case 227:
      deviceName = "Huami GTR 3";
      break;
    case 229:
    case 230:
    case 6095106:
      deviceName = "Huami GTR 3 pro";
      break;
    case 7930113:
    case 7930112:
      deviceName = "Huami GTR 4";
      break;
    case 6553856:
    case 6553857:
      deviceName = "Huami T-Rex Ultra";
      break;
    case 8126720:
    case 8126721:
      deviceName = "Huami Cheetah Pro";
      break;
    case 8192256:
    case 8192257:
      deviceName = "Huami Cheetah";
      break;
    case 418:
    case 419:
      deviceName = "Huami T-Rex 2";
      break;
    case 414:
    case 415:
      deviceName = "Huami Falcon";
      break;
  }

    function init_view() {
      const baseVocabulary = {
        "寄吧": ['Lower', '較低'],
        "正常": ['Normal', '正常'],
        "较优": ['Better', '較優'],
        "逆天": ['Extraordinary', '非凡'],
        "跑分结果": ['Running score ', '跑分結果'],
        "设备": ['Device', '設備'],
        "评价": ['Evaluate', '評價'],
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
        let startTime = Date.now();        
        let file = hmFS.open('test_file', hmFS.O_RDWR | hmFS.O_CREAT);
        const test_buf = new Uint8Array(1000);
        let num = 0;
        for (let i = 0; i < 100000; i++) {
          num++;
          num = 9999 + 8888;
          num = 7777 * 6666;
          num = 5736 / 7913;
        }
        for (let i = 0; i < 1000; i++) {
          hmFS.write(file, test_buf.buffer, 0, test_buf.length);
          hmFS.read(file, test_buf.buffer, 0, test_buf.length);
        }
        hmFS.remove("test_file");
        let current = (20000 - (Date.now() - startTime)).toString()
        let pj;
        if (current <= 12000) pj = getText('寄吧')
        else if (current <= 14000) pj = getText('正常')
        else if (current <= 16000) pj = getText('较优')
        else pj = getText('逆天')
        hmUI.createWidget(hmUI.widget.TEXT, {
            x: 40,
            y: 70,
            w: 192,
            h: 300,
            color: "0xffffff",
            text_size: 25,
            text_style: hmUI.text_style.WRAP,
            text: getText('跑分结果') + '\n' + current + '\n' + getText('设备') + '\n' + deviceName + '\n' + '\n' +getText('评价') + '\n' +pj
        });
      }
      


    var __$$app$$__ = __$$hmAppManager$$__.currentApp;
    var __$$module$$__ = __$$app$$__.current;
    __$$module$$__.module = DeviceRuntimeCore.Page({
        onInit: () => init_view()
    });
})();
