//本程序由Struggle（LaoLiu）独立开发，可随意二创，但请务必保留此声明并且@原作者
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
          'drink'
        );
        DeviceRuntimeCore.HmLogger.getLogger('sanjiao');
        t.module = DeviceRuntimeCore.Page({
          onInit() {
            hmUI.setLayerScrolling(false);
            hmApp.setScreenKeep(true);
            hmApp.unregisterGestureEvent();
            const battery = hmSensor.createSensor(hmSensor.id.BATTERY);
            const capacity = battery.current * 18 / 10;
            
            const texts = [
              { 
                battery_text: '电池管家', xitong_text: '系统容量', dangqian_text: '当前容量',
                mah_text: '毫安', didian_text: '剩余电量不足10%', didiantwo_text: '剩余电量不足20%',
                current_text: '当前电量', yiyong_text: '已用电量', yvji_text: '预计还可使用',
                chongdianzhong: '充电中',fangdianzhong: '放电中',day: '天',hour: '时',second: '秒',unknown: '未知'
              },
              { 
                battery_text: '電池管家', xitong_text: '系统容量', dangqian_text: '當前容量',
                mah_text: '毫安', didian_text: '賸餘電量不足10%', didiantwo_text: '賸餘電量不足20%',
                current_text: '當前電量', yiyong_text: '已用電量',yvji_text: '預計還可使用',
                chongdianzhong: '充電中',fangdianzhong: '放電中',day: '天',hour: '時',second: '秒',unknown: '未知'
              },
              { 
                battery_text: 'Battery', xitong_text: 'System capacity', dangqian_text: 'Current capacity',
                mah_text: 'mAh', didian_text: 'Less than 10% remaining power', didiantwo_text: 'Less than 20% remaining power',
                current_text: 'Current', yiyong_text: 'Used', yvji_text: 'Expected usable',
                chongdianzhong: 'Charging',fangdianzhong: 'During discharge',day: 'day',hour: 'hour',second: 'second',unknown: 'unknown'
              }
            ];
            const langText = texts[hmSetting.getLanguage()] || texts[2]
            
            function calculateTime(p, multiplier) {
              let t = p / 100 * multiplier;
              if (t < 0.17) return langText.unknown;
              if (t <= 1) return `${Math.floor(t * 60) + langText.second}`;
              if (t <= 24) return `${Math.round(t) + langText.hour}`;
              let d = Math.floor(t / 24);
              return `${d + langText.day}`;
            }
            
            // 当前电量状态
            let current = battery.current > (pb || 0) ? langText.chongdianzhong : langText.fangdianzhong;
            var pb = battery.current;
            
            // 创建小部件的辅助函数
            const createWidget = (type, options) => hmUI.createWidget(type, options);
            
            createWidget(hmUI.widget.TEXT,{x:116,y:79,w:60,h:20,color:0xe2492f,text:langText.yiyong_text,text_size:14,align_h:hmUI.align.CENTER_H,align_v:hmUI.align.TOP,text_style:hmUI.text_style.WRAP})
            createWidget(hmUI.widget.TEXT,{x:60,y:12,w:90,h:31,color:0xffffff,text:langText.battery_text})
            createWidget(hmUI.widget.FILL_RECT,{x:13,y:69,w:72,h:72,radius:120,color:0x101010})
            createWidget(hmUI.widget.FILL_RECT,{x:105,y:69,w:72,h:72,radius:120,color:0x101010})
            createWidget(hmUI.widget.BUTTON,{x:10,y:167,w:132,h:36,text:langText.yvji_text,text_size:18,color:0xe2492f,normal_color:0x101010,press_color:0x262626,radius:25})
            createWidget(hmUI.widget.BUTTON,{x:146,y:167,w:37,h:37,text:calculateTime(battery.current,82),text_size:16,color:0xe2492f,normal_color:0x101010,press_color:0x262626,radius:25})
            createWidget(hmUI.widget.BUTTON,{x:10,y:212,w:132,h:36,text:langText.yvji_text,text_size:18,color:0x7CFC00,normal_color:0x101010,press_color:0x262626,radius:25})
            createWidget(hmUI.widget.BUTTON,{x:146,y:212,w:37,h:37,text:calculateTime(battery.current,359),text_size:16,color:0x7CFC00,normal_color:0x101010,press_color:0x262626,radius:25})
            createWidget(hmUI.widget.TEXT,{x:21,y:79,w:57,h:20,color:0x7CFC00,text:langText.current_text,text_size:14,align_h:hmUI.align.CENTER_H,align_v:hmUI.align.TOP,text_style:hmUI.text_style.WRAP})
            createWidget(hmUI.widget.TEXT,{x:116,y:79,w:60,h:20,color:0xe2492f,text:langText.yiyong_text,text_size:14,align_h:hmUI.align.CENTER_H,align_v:hmUI.align.TOP,text_style:hmUI.text_style.WRAP})
            createWidget(hmUI.widget.TEXT,{x:35,y:100,w:66,h:48,color:0x7CFC00,text_size:25,text:`${battery.current}`})
            createWidget(hmUI.widget.TEXT,{x:129,y:100,w:66,h:48,color:0xe2492f,text_size:25,text:`${100-battery.current}`})
            createWidget(hmUI.widget.TEXT,{x:15,y:256,w:167,h:30,color:0xffffffff,text_size:18,text:`${langText.xitong_text}180${langText.mah_text}`,align_h:hmUI.align.CENTER_H,align_v:hmUI.align.TOP,text_style:hmUI.text_style.WRAP})
            createWidget(hmUI.widget.TEXT,{x:15,y:283,w:167,h:34,color:0xffffff,text_size:18,text:`${langText.dangqian_text}${Math.round(capacity)}${langText.mah_text}`,align_h:hmUI.align.CENTER_H,align_v:hmUI.align.TOP,text_style:hmUI.text_style.WRAP})
            createWidget(hmUI.widget.TEXT,{x:52,y:334,w:97,h:45,color:0xffffffff,text_size:20,text:current,align_h:hmUI.align.CENTER_H,align_v:hmUI.align.TOP,text_style:hmUI.text_style.WRAP});
            
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