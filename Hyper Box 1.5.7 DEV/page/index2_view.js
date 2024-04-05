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
       onInit(json) {
        var tem = 0
        var param = JSON.parse(json)
        var {color,fps} = param
      function getTrueProperties(obj) {
        let result = {};
        for (let key in obj) {
            if (obj[key] === true) {
                result[key] = obj[key];
            }
        }
        return result;
    }
      color = getTrueProperties(color)    
        var fill = hmUI.createWidget(hmUI.widget.FILL_RECT, {
          x: 0,
          y: 0,
          w: 192,
          h: 490,
          color: Object.keys(color)[tem]
        })
        timer.createTimer(
          Math.round(1000 / fps),
          Math.round(1000 / fps),
          () => {
            if (tem < Object.keys(color).length) {
              tem++;
              fill.setProperty(hmUI.prop.MORE, {
                x: 0,
                y: 0,
                w: 192,
                h: 490,
                color: Object.keys(color)[tem]
              });
          } else {
              tem = 0;
              fill.setProperty(hmUI.prop.MORE, {
                x: 0,
                y: 0,
                w: 192,
                h: 490,
                color: Object.keys(color)[tem]
              });
          }          
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
