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
                       const LOCALE_OPTIONS = [
                            ["简体中文", "zh-CN", 0],
                            ["繁體中文", "zh-TW", 1],
                            ["English", "en", 2],
                            ["Español", "es", 3],
                            ["Русский язык", "ru", 4],
                            ["한국어", "ko", 5],
                            ["Français", "fr", 6],
                            ["Deutsch", "de", 7],
                            ["IndonesiaName", "id", 8],
                            ["Polski", "pl", 9],
                            ["Italiano", "it", 10],
                            ["日本語", "ja", 11],
                            ["ภาษาไทย", "th", 12],
                            ["بالعربية", "ar", 13],
                            ["Tiếng Việt", "vi", 14],
                            ["Português", "pt", 15],
                            ["Nederlands", "nl", 16],
                            ["Türkçe", "tr", 17],
                            ["УкраїнськаName", "uk", 18],
                            ["היברית", "iw", 19],
                            ["Português", "pt", 20],
                            ["Română", "ro", 21],
                            ["Čeština", "cs", 22],
                            ["Ελληνικά", "el", 23],
                            ["Српски", "sr", 24],
                            ["Catalan", "ca", 25],
                            ["suomi", "fi", 26],
                            ["Norge", "nb", 27],
                            ["Dansk", "da", 28],
                            ["Svenska", "sv", 29],
                            ["Magyar", "hu", 30],
                            ["Malay", "ms", 31],
                            ["Slovenská", "sk", 32],
                            ["हिंदीName", "hi", 33]
                            ]
                            const baseVocabulary = {
                                "已成功将系统语言设置为": ['Successfully set system language to', '已成功將系統語言設定為'],
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
                          function setSystemLocale(str_val, code_val) {
                            hmFS.SysProSetInt("settings_language_follow_phone", 0)
                            hmFS.SysProSetChars("locale.name", str_val);
                            hmFS.SysProSetInt("settings_data_language", code_val);
                            hmApp.startApp({url: "Settings_systemScreen", native: true});
                          }
                          for (let i = 0;i<LOCALE_OPTIONS.length;i++){
                            hmUI.createWidget(hmUI.widget.BUTTON, {
                                x: 10,
                                y: i * 80 + 60,
                                w: 170,
                                h: 70,
                                color: 0xffffff,
                                normal_color: 0x101010,
                                press_color: 0x262626,
                                text_size: 22,
                                radius: 20,
                                text: LOCALE_OPTIONS[i][0],
                                click_func: () => {
                                    setSystemLocale(LOCALE_OPTIONS[i][1],LOCALE_OPTIONS[i][2])
                                    hmUI.showToast({text:`${getText('已成功将系统语言设置为')}${LOCALE_OPTIONS[i][0]}`})
                                }
                              })
                          }
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