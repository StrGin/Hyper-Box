try {
  (()=>{
    var e = __$$hmAppManager$$__.currentApp
    var t = e.current
    try {
     (() => {
      var e = __$$hmAppManager$$__.currentApp,
       t = e.current
      new DeviceRuntimeCore.WidgetFactory(
      new DeviceRuntimeCore.HmDomApi(e, t),
       "drink")
      DeviceRuntimeCore.HmLogger.getLogger("sanjiao")
      t.module = DeviceRuntimeCore.Page({
          onInit() {
            const buttonsText = [
              "AC", "删除", "%", "/", 
              "7", "8", "9", "*", 
              "4", "5", "6", "-",
              "1", "2", "3", "+",
              "0", ".", "="
            ]
            
            let startY = 150
            const deltaY = 46
            const buttonHeight = 45
            let view_text = "0"
            
            const view = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 80,
              y: 110,
              w: 100,
              h: 120,
              color: 0xffffff,
              text_size: 20,
              align_h: hmUI.align.RIGHT,
              align_v: hmUI.align.BOTTOM,
              text_style: hmUI.text_style.WRAP,
              text: view_text
            })
          
            function updateDisplay(text) {
              switch(text) {
                case "AC":
                  return "0"
                case "删除":
                  return view_text.length > 1 ? view_text.slice(0, -1) : "0"
                case "%":
                  try {
                    const lastNumberMatch = view_text.match(/[\d.]+$/)
                    if (lastNumberMatch) {
                      const lastNumber = lastNumberMatch[0]
                      const percentageValue = String(parseFloat(lastNumber) / 100)
                      view_text = view_text.slice(0, -lastNumber.length) + percentageValue
                    }
                  } catch (e) {
                    console.error(e)
                    return "错误"
                  }
                  return view_text
                case "=":
                  try {
                    const calcFunc = new (() => {}).__proto__.constructor('return ' + view_text)()
                    return String(calcFunc)
                  } catch (e) {
                    console.error(e)
                    return "错误"
                  }
                default:
                  return view_text === "0" ? text : view_text + text
              }
            }
            
            
            buttonsText.forEach((text, index) => {
              let x = 4 + (index % 4) * 46
              let y = 80 + startY + Math.floor(index / 4) * deltaY
              const isNumberOrDot = !isNaN(text) || text === "."
              let textColor = isNumberOrDot ? 0xffffff : 0xFFA500
              let normalColor = 0x262626
              let pressColor = 0x101010
              if (text === "=") {
                textColor = 0xffffff
                normalColor = 0xFFA500
                pressColor = 0xE59500
              }
            
              hmUI.createWidget(hmUI.widget.BUTTON, {
                x: x,
                y: y,
                w: buttonHeight,
                h: buttonHeight,
                radius: 12,
                normal_color: normalColor,
                press_color: pressColor,
                color: textColor,
                text: text,
                text_size: 20.67,
                click_func: () => {
                  view_text = updateDisplay(text)
                  view.setProperty(hmUI.prop.TEXT, view_text)
                }
              })
            })
            hmApp.registerGestureEvent((event) => {
              if (event == hmApp.gesture.LEFT) hmApp.gotoPage({ url: 'page/index1_relative' })
          });
      },
      onDestory() {
       hmApp.unregisterGestureEvent()
      }
         })
        })()
       } catch (e) {
        console.log(e)
       }
      })()
     } catch (e) {
      console.log(e)
     }