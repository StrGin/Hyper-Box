        try {
            (() => {
                var e = __$$hmAppManager$$__.currentApp,t = e.current;
                new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(e, t),"drink");
                DeviceRuntimeCore.HmLogger.getLogger("sanjiao");
                t.module = DeviceRuntimeCore.Page({
                    onInit() {
                      const diskInfo = hmSetting.getDiskInfo()
                      const deviceInfo = hmSetting.getDeviceInfo()
                      function bg (number) {
                        if (!number) return '男'
                        else if (number == 1) return '女'
                        return '未知'
                      }
                        function region(languageCode) {  
                          const languageMap = {'zh-CN':'中国','zh-TW':'中国台湾','en-US':'美国','es-ES':'西班牙','ru-RU':'俄罗斯','ko-KR':'韩国','fr-FR':'法国','de-DE':'德国','id-ID':'印度尼西亚','pl-PL':'波兰','it-IT':'意大利','ja-JP':'日本','th-TH':'泰国','ar-EG':'埃及','vi-VN':'越南','pt-PT':'葡萄牙','nl-NL':'荷兰','tr-TR':'土耳其','uk-UA':'乌克兰','iw-IL':'以色列','pt-BR':'巴西','ro-RO':'罗马尼亚','cs-CZ':'捷克','el-GR':'希腊','sr-RS':'塞尔维亚','ca-ES':'加泰罗尼亚','fi-FI':'芬兰','nb-NO':'挪威','da-DK':'丹麦','sv-SE':'瑞典','hu-HU':'匈牙利','ms-MY':'马来西亚','sk-SK':'斯洛伐克','hi-IN':'印度'}
                          return languageMap[languageCode]
                        }  
                        function language(index) {  
                          const languages = ['简体中文','繁体中文（中国台湾）','英语（美国）','西班牙语（西班牙）','俄语（俄罗斯）','韩语（韩国）','法语（法国）','德语（德国）','印度尼西亚语','波兰语（波兰）','意大利语（意大利）','日语（日本）','泰语','阿拉伯语（埃及）','越南语','葡萄牙语（葡萄牙）','荷兰语','土耳其语（土耳其）','乌克兰语','希伯来语（以色列）','葡萄牙语（巴西）','罗马尼亚语','捷克语','希腊语','塞尔维亚语（拉丁文）','加泰罗尼亚语','芬兰语','挪威语','丹麦语','瑞典语','匈牙利语','马来语','斯洛伐克语','印地语'];
                          return languages[index];     
                        }  
                        function getDateFormat(index) {
                          if (!index) return '年-月-日'
                          if (index == 1) return '日-月-年'
                          return '月-日-年'
                        }
                        function getWeightUnit(index) {
                          if (!index) return '千克'
                          switch (index) {
                            case 1: return '斤'
                            case 2: return '磅'
                            case 3: return '石'
                          }
                        }
                      hmUI.createWidget(hmUI.widget.TEXT,{
                        x: 10,
                        y: 50,
                        w: 192,
                        h: 9000,
                        color: 0xffffff,
                        text_style: hmUI.text_style.WRAP,
                        text_size: 17,
                        text:
`自动亮度：${hmSetting.getScreenAutoBright() ? '开启' : '关闭'}
屏幕亮度：${hmSetting.getBrightness()}
 
年龄：${hmSetting.getUserData().age} 
身高：${hmSetting.getUserData().height} cm
体重：${hmSetting.getUserData().weight} kg
性别：${bg(hmSetting.getUserData().gender)}
姓名：${hmSetting.getUserData().nickName}
账号地址：${region(hmSetting.getUserData().region)}
 
距离单位：${hmSetting.getMileageUnit() ? '英制' : '公制'}
体重单位：${getWeightUnit(hmSetting.getWeightUnit())}

账号语言：${language(hmSetting.getLanguage())}
时间顺序：${getDateFormat(hmSetting.getDateFormat())}
时间制：${hmSetting.getTimeFormat() ? '24 小时制' : '12 小时制'}
 
总空间：${(diskInfo.total / 1024 / 1024).toFixed(1)} MB
剩余空间：${(diskInfo.free / 1024 / 1024).toFixed(1)} MB
APP占用：${(diskInfo.app / 1024 / 1024).toFixed(1)} MB
表盘占用：${(diskInfo.watchface / 1024 / 1024).toFixed(1)} MB
音乐占用：${(diskInfo.music).toFixed(2)} MB
系统占用：${(diskInfo.system / 1024 / 1024).toFixed(1)} MB
 
屏幕宽度：${deviceInfo.width}
屏幕高度：${deviceInfo.height}
屏幕形状：${deviceInfo.screenShape ? '圆屏' : '方屏'}
设备名称：${deviceInfo.deviceName}
按键数目：${deviceInfo.keyNumber}
设备代号：${deviceInfo.deviceSource}
 
体重目标：${hmSetting.getWeightTarget()} kg
睡眠目标：${hmSetting.getSleepTarget()} 分
 
连接状态：${hmBle.connectStatus() ? '是': '否'}
`
                    })
                    }
                });
            })();
        } catch (e) {
            console.log(e);
        }