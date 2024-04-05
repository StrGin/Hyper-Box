try {
    (() => {
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
                const [fsStat, err] = hmFS.stat(this.fileName)
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

        const localStorage = new LocalStorage('Hyper.json')
        var e = __$$hmAppManager$$__.currentApp;
        var t = e.current,
            {
                px: o
            } = (new DeviceRuntimeCore.WidgetFactory(
                    new DeviceRuntimeCore.HmDomApi(e, t)),
                e.app.__globals__);
        const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE);
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
                            "快点！": ['Hurry up!', '快點！'],
                            "开始": ['Start', '開始'],
                            "忒慢了": ['Too Slow', '還可以'],
                            "勉强罢": ['Just', '敲電子木魚，取賽博真經'],
                            "很不错": ['Great', '很不錯'],
                            "谁问你了": ['Excellent', '太棒了'],
                            "评价:": ['Evaluate:', '評價:'],
                            "秒": ['Second', '秒'],
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
                            let mav = 0
                            var mav1 = 10
                            const button2 = hmUI.createWidget(hmUI.widget.BUTTON, {
                                x: 0,
                                y: 0,
                                text: getText('快点！'),
                                w: 192,
                                h: 490,
                                radius: 0,
                                color: 0xffffff,
                                normal_color: 0x000000,
                                press_color: 0x000000,
                                click_func: () => {
                                    mav++
                                }
                            })
                            save('mav1', 10)
                            button2.setProperty(hmUI.prop.VISIBLE, false)
                            const button = hmUI.createWidget(hmUI.widget.BUTTON, {
                                x: 0,
                                y: 0,
                                text: getText('开始'),
                                w: 192,
                                h: 490,
                                radius: 0,
                                color: 0x000000,
                                normal_color: 0xffffff,
                                press_color: 0xffffff,
                                click_func: () => {
                                    button.setProperty(hmUI.prop.VISIBLE, false)
                                    button2.setProperty(hmUI.prop.VISIBLE, true)
                                    const timer1 = timer.createTimer(
                                        1,
                                        1,
                                        function() {

                                            mav1 = load('mav1')
                                            button2.setProperty(hmUI.prop.MORE, {
                                                text: mav1 + getText("秒") + '\n' + mav
                                            })


                                        }, {
                                            hour: 0,
                                            minute: 15,
                                            second: 30
                                        }
                                    )
                                    const timer2 = timer.createTimer(
                                        1,
                                        1000,
                                        function() {
                                            if (mav1 <= 0) {
                                                timer.stopTimer(timer2)
                                                timer.stopTimer(timer1)
                                                button2.setProperty(hmUI.prop.VISIBLE, false)
                                                let pj
                                                if (mav / 10 <= 5) {
                                                    pj = getText('忒慢了')
                                                } else if (mav / 10 >= 5 && mav / 10 <= 8) {
                                                    pj = getText('勉强罢')
                                                } else if (mav / 10 >= 8 && mav / 10 <= 10) {
                                                    pj = getText('很不错')
                                                } else if (mav / 10 >= 10) {
                                                    pj = getText('谁问你了')
                                                }
                                                hmUI.createWidget(hmUI.widget.BUTTON, {
                                                    x: 0,
                                                    y: 1,
                                                    text: "CPS:" + mav / 10 + '\n' + getText("评价:") + pj,
                                                    w: 192,
                                                    h: 490,
                                                    radius: 0,
                                                    color: 0xffffff,
                                                    normal_color: 0x000000,
                                                    press_color: 0x000000
                                                })
                                            } else {
                                                mav1--
                                                save('mav1', mav1)
                                            }

                                        }, {
                                            hour: 0,
                                            minute: 15,
                                            second: 30
                                        }
                                    )
                                }
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