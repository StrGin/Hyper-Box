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
          const diskInfo = hmSetting.getDiskInfo()
          const total = diskInfo.total / 1024 / 1024,
          free = diskInfo.free / 1024 / 1024,
          app = diskInfo.app / 1024 / 1024,
          watchface = diskInfo.watchface / 1024 / 1024,
          system = diskInfo.system / 1024 / 1024
          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 16,
            y: 66,
            w: 288,
            h: 46,
            color: 0xD8D8D8,
            text_size: 26.67,
            text: "存储空间"
          })  
          hmUI.createWidget(hmUI.widget.ARC, {
            x: 29,
            y: 117,
            w: 135,
            h: 135,
            start_angle: -203,
            end_angle: 23,
            color: 0x222222,
            line_width: 12
          })
          hmUI.createWidget(hmUI.widget.ARC, {
            x: 29,
            y: 117,
            w: 135,
            h: 135,
            start_angle: -205,
            end_angle: total - free - 116,
            color: 0x60AAFF,
            line_width: 12
          })
          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 74,
            y: 156,
            w: 288,
            h: 96,
            color: 0xD0D0D0,
            text_size: 24.67,
            text: `${Math.round((total-free) / total * 100)}%`
          })  
          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 16,
            y: 211,
            w: 288,
            h: 96,
            color: 0xB0B8C5,
            text_size: 19.67,
            text: '全部'
          })  
          hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 16,
            y: 241,
            w: 34,
            h: 34,
            radius: 100,
            color: 0x222222
          })
          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 65,
            y: 241,
            w: 288,
            h: 96,
            color: 0xD0D0D0,
            text_size: 22.67,
            text: `${Math.round(total)} MB`
          }) 
          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 16,
            y: 274,
            w: 288,
            h: 96,
            color: 0xB0B8C5,
            text_size: 19.67,
            text: '已用'
          })  
          hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 16,
            y: 305,
            w: 34,
            h: 34,
            radius: 100,
            color: 0x60AAFF
          })
          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 65,
            y: 305,
            w: 288,
            h: 96,
            color: 0xD0D0D0,
            text_size: 22.67,
            text: `${Math.round(total - free)} MB`
          }) 

          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 16,
            y: 346,
            w: 288,
            h: 96,
            color: 0xB0B8C5,
            text_size: 19.67,
            text: '应用'
          })  
          hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 16,
            y: 384,
            w: 161,
            h: 21,
            radius: 100,
            color: 0x222222
          })
          hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 16,
            y: 384,
            w: app  * 5.64,
            h: 21,
            radius: 100,
            color: 0x88A3F3
          })
          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 105,
            y: 346,
            w: 288,
            h: 96,
            color: 0xD0D0D0,
            text_size: 21.67,
            text: `${app.toFixed(2)} MB`
          }) 

          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 16,
            y: 414,
            w: 288,
            h: 96,
            color: 0xB0B8C5,
            text_size: 19.67,
            text: '表盘'
          })  
          hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 16,
            y: 453,
            w: 161,
            h: 21,
            radius: 100,
            color: 0x222222
          })
          hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 16,
            y: 453,
            w: watchface * 5.64,
            h: 21,
            radius: 100,
            color: 0x6897FE
          })
          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 105,
            y: 414,
            w: 288,
            h: 96,
            color: 0xD0D0D0,
            text_size: 21.67,
            text: `${watchface.toFixed(1)} MB`
          }) 

          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 16,
            y: 484,
            w: 288,
            h: 96,
            color: 0xB0B8C5,
            text_size: 19.67,
            text: '系统'
          })  
          hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 16,
            y: 523,
            w: 161,
            h: 21,
            radius: 100,
            color: 0x222222
          })
          hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 16,
            y: 523,
            w: system * 1.64,
            h: 21,
            radius: 100,
            color: 0xCBD4FF
          })
          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 105,
            y: 484,
            w: 288,
            h: 96,
            color: 0xD0D0D0,
            text_size: 21.67,
            text: `${system.toFixed(1)} MB`
          }) 

          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 16,
            y: 554,
            w: 288,
            h: 96,
            color: 0xB0B8C5,
            text_size: 19.67,
            text: '剩余'
          })  
          hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 16,
            y: 593,
            w: 161,
            h: 21,
            radius: 100,
            color: 0x222222
          })
          hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 16,
            y: 593,
            w: free * 1.64,
            h: 21,
            radius: 100,
            color: 0xB0B8C5
          })
          hmUI.createWidget(hmUI.widget.TEXT, {
            x: 105,
            y: 554,
            w: 288,
            h: 96,
            color: 0xD0D0D0,
            text_size: 21.67,
            text: `${free.toFixed(1)} MB`
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