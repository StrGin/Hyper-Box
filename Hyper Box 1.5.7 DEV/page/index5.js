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
    this.fileName = fileName;
    this.contentObj = {};
  }
  
  set(obj) {
    try {
      const contentBuffer = str2ab(JSON.stringify(obj));
      const file = hmFS.open(this.fileName, hmFS.O_RDWR | hmFS.O_CREAT | hmFS.O_TRUNC);
      if (file < 0) {
        throw new Error('Failed to open file for writing');
      }
      hmFS.write(file, contentBuffer, 0, contentBuffer.byteLength);
      hmFS.close(file);
    } catch (error) {
      console.error('LocalStorage set error:', error);
    }
  }

  get() {
    try {
      const [fsStat, err] = hmFS.stat(this.fileName);
      if (err !== 0) {
        throw new Error(`File stat error with code ${err}`);
      }
      const { size } = fsStat;
      if (size <= 0) {
        return {}; // File is empty or does not exist, return an empty object
      }
      const fileContentUnit = new Uint16Array(new ArrayBuffer(size));
      const file = hmFS.open(this.fileName, hmFS.O_RDONLY);
      if (file < 0) {
        throw new Error('Failed to open file for reading');
      }
      hmFS.read(file, fileContentUnit.buffer, 0, size);
      hmFS.close(file);

      const val = String.fromCharCode.apply(null, fileContentUnit);
      this.contentObj = JSON.parse(val); // Assuming the stored data is always correctly formatted
    } catch (error) {
      console.error('LocalStorage get error:', error);
      this.contentObj = {}; // Resetting contentObj to prevent using corrupted or unexpected data
    }
    return this.contentObj;
  }
}

const localStorage = new LocalStorage('Hyper.json')
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
      let data = localStorage.get();
      if (!data || typeof data !== 'object' || !Array.isArray(data.word)) {
        data = { word: [] }; // 提供默认值，确保后续操作不会因为缺少这个字段而出错
      }
      let length = 1;
      const randomWord = (num) => {
        let code = ''
        for (var i = 0; i < num; i++) {
          var type = getRandom(1, 3)
          switch (type) {
            case 1:
              code += String.fromCharCode(getRandom(48, 57))// 数字
              break
            case 2:
              code += String.fromCharCode(getRandom(65, 90))// 大写字母
              break
            case 3:
              code += String.fromCharCode(getRandom(97, 122))// 小写字母
              break
          }
        }
        return code
      }
      function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min)
      }
      hmUI.createWidget(hmUI.widget.TEXT, {
        x: 19,
        y: 66,
        w: 288,
        h: 46,
        color: 0xD8D8D8,
        text_size: 26.67,
        text: "密码生成"
      })  
      const view = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 30,
        y: 122,
        w: 136,
        h: 86,
        color: 0xB0B8C5,
        text_size: 26.67,
        text_style: hmUI.text_style.WRAP,
        text: ''
      })  
      const length_view = hmUI.createWidget(hmUI.widget.TEXT, {
        x: 66,
        y: 197,
        w: 288,
        h: 46,
        color: 0xB0B8C5,
        text_size: 19.67,
        text_style: hmUI.text_style.WRAP,
        text: `长度：${length}`
      })  
      const line = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 36,
        y: 231,
        w: 130,
        h: 10,
        radius: 100,
        color: 0x6092FA
      })
      const circle = hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 24,
        y: 222,
        w: 25,
        h: 25,
        radius: 100,
        color: 0xFFFFFF
      })
      circle.addEventListener(hmUI.event.MOVE, function (info) {
        length = (info.x / 10).toFixed(0)
        length_view.setProperty(hmUI.prop.TEXT,`长度：${length}`)
        circle.setProperty(hmUI.prop.X,(24 + Number(length) * 10))
      })
      line.addEventListener(hmUI.event.MOVE, function (info) {
        length = (info.x / 10).toFixed(0)
        length_view.setProperty(hmUI.prop.TEXT,`长度：${length}`)
        circle.setProperty(hmUI.prop.X,(24 + Number(length) * 10))
      })
      hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 30,
        y: 277,
        w: 126,
        h: 65,
        text: '生成',
        color: 0xd8d8d8,
        normal_color: 0x222222,
        press_color: 0x101010,
        text_size: 24.67,
        radius: 100,
        click_func: () => {
          view.setProperty(hmUI.prop.TEXT,randomWord(length))
        }
      })
      hmUI.createWidget(hmUI.widget.BUTTON, {
        x: 30,
        y: 351,
        w: 126,
        h: 65,
        text: '收藏',
        color: 0xd8d8d8,
        normal_color: 0x729BF1,
        press_color: 0x4F85F7,
        text_size: 24.67,
        radius: 100,
        click_func: () => {
          hmUI.showToast({text: '已成功收藏'})
          data.word.push(view.getProperty(hmUI.prop.TEXT))
          console.log(data.word);
          localStorage.set(data)
        }
      })
      for (let i = 0; i < data.word.length; i++) {
        hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 16,
          y: 532 + i * 124,
          w: 163,
          h: 114,
          radius: 25,
          color: 0x222222
        })
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 26,
          y: 542 + i * 124,
          w: 288,
          h: 46,
          color: 0xffffff,
          text_size: 22.67,
          text: `密码${i + 1}`
        })
        hmUI.createWidget(hmUI.widget.TEXT, {
          x: 26,
          y: 579 + i * 124,
          w: 288,
          h: 46,
          color: 0xffffff,
          text_size: 19.67,
          text: data.word[i]
        })
      }
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