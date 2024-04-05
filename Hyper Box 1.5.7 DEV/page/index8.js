try {
	(() => {
		function str2ab(str) {
			const buf = new ArrayBuffer(str.length * 2)
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

		var h = __$$hmAppManager$$__.currentApp
		new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(h, h.current))
		try {
			(function () {
				var k = __$$hmAppManager$$__.currentApp, m = k.current
				new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(k, m), "drink")
				DeviceRuntimeCore.HmLogger.getLogger("sanjiao")
				m.module = DeviceRuntimeCore.Page({
					onInit() {
						var data = localStorage.get()
						if (Object.keys(data)
							.length == 0) {
							 data = {
								ustext: "",
								sizetxt: 20,
								color_dg: "0x000000",
								margdock: 3,
								cursorvel: 500,
								curtext: "|",
								indexcolortext: "0xffffff",
								colorsss: "0xffffff"
							}
						}
						data.ustext = data.ustext || "-"
data.sizetxt = 20
data.margdock = 3
data.cursorvel = 500
data.curtext = "|"
mayuscase = 1

data.indexcolortext = "0xffffff"
var indexcolorrec = "0x000000"

var mayuscase = 1, cursorFlag = false, 
    cursorIndex = data.ustext.length, preLen = data.ustext.length
const { height: initialHeight } = hmUI.getTextLayout(data.ustext, {
    text_size: data.sizetxt,
    text_width: 192 - data.margdock
})
const height = initialHeight || 204


						const background = hmUI.createWidget(hmUI.widget.FILL_RECT, {
							x: 0,
							y: 48,
							w: 192,
							h: 252 + height,
							radius: 0,
							color: indexcolorrec,
						})
						var charactersnum = hmUI.createWidget(hmUI.widget.TEXT, {
							x: 65,
							y: 50,
							w: 192,
							h: 492,
							color: data.indexcolortext,
							text_size: 25,
							text_style: hmUI.text_style.NONE,
							text: data.ustext.length + "字"
						})
						var mayusprop = hmUI.createWidget(hmUI.widget.TEXT, {
							x: 65,
							y: 85,
							w: 192,
							h: 492,
							color: data.indexcolortext,
							text_size: 17,
							text_style: hmUI.text_style.WRAP,
							text: "小写"
						})
						var textuser = hmUI.createWidget(hmUI.widget.TEXT, {
							x: data.margdock,
							y: 115,
							w: 192 - data.margdock,
							h: 492,
							color: data.indexcolortext,
							text_size: data.sizetxt,
							text_style: hmUI.text_style.WRAP,
							text: data.ustext
						})
						let keyboard = hmUI.createWidget(hmUI.widget.GROUP, {
							x: 0,
							y: 252,
							w: 192,
							h: 1000,
						})
						function createSpecialButton(x, y,width,text, clickFunction) {
							return keyboard.createWidget(hmUI.widget.BUTTON, {
							  x: x,
							  y: y,
							  w: width,
							  h: 48,
							  radius: 5,
							  normal_color: 0x696969,
							  press_color: 0xdddddd,
							  color: 0xdddddd,
							  text_size: 25,
							  text: text,
							  click_func: clickFunction
							})
						  }
						  createSpecialButton(0, 42, 62, "空格", () => {
								  data.ustext += " "
								  update()
							  })
						  createSpecialButton(64, 42, 62, "换行", () => {
								  data.ustext += "\n"
								  update()
							  })
						  createSpecialButton(128, 42, 62, "删除", () => {
								  if (data.ustext !== "-") {
									  data.ustext = data.ustext.substring(0, data.ustext.length - 1)
									  update()
								  }
							  })
						  createSpecialButton(0, 92, 192, "大/小", () => mayusstatus())
						const characters = [
							'1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
							'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
							'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
							'z', 'x', 'c', 'v', 'b', 'n', 'm',
							'.', ',', '?', '!', '@'
						  ]
						  
						  const screenWidth = 192
						  const buttonsPerRow = 3
						  
						  const totalMarginSpace = 4 * (buttonsPerRow + 1)
						  const buttonWidth = (screenWidth - totalMarginSpace) / buttonsPerRow
						  const buttonHeight = 48 
						  
						  const startY = 144
						  const rowHeight = 52
						  
						  characters.forEach((char, i) => {
							const rowIndex = Math.floor(i / buttonsPerRow)
							const xPosition = (i % buttonsPerRow) * (buttonWidth + 4) + 4
							const yPosition = startY + rowIndex * rowHeight
							
							keyboard.createWidget(hmUI.widget.BUTTON, {
							  x: xPosition,
							  y: yPosition,
							  w: buttonWidth, 
							  h: buttonHeight,
							  radius: 5,
							  normal_color: 0x696969,
							  press_color: 0x555555,
							  color: 0xffffff,
							  text_size: 30,
							  text: char,
							  click_func: function () {
								if (mayuscase == 1) {
								  data.ustext += char.toLowerCase()
								} else {
								  data.ustext += char.toUpperCase()
								  if (mayuscase == 2) {
									mayuscase = 1
								  }
								}
								update()
							  }
							})
						  })
						  
						  function update() {
							charactersnum.setProperty(hmUI.prop.TEXT, `${data.ustext.length}字`)
							cursorIndex += data.ustext.length > preLen ? 1 : -1
							preLen = data.ustext.length
							if (data.ustext === "-") {
							  mayuscase = 2
							  localStorage.set(data)
							  return
							}
							let text = cursorText()
							const { height } = hmUI.getTextLayout(text, { text_size: data.sizetxt, text_width: 192 - data.margdock })
							textuser.setProperty(hmUI.prop.MORE, { text: text, h: height })
							if (height > 162) {
							  keyboard.setProperty(hmUI.prop.Y, 148 + height)
							  background.setProperty(hmUI.prop.H, 148 + height)
							}
							localStorage.set(data)
						  }						  

						  function mayusstatus() {
							let statusText
							switch (mayuscase) {
								case 1:
									mayuscase = 2
									statusText = "大写锁定"
									break
								case 2:
									mayuscase = 3
									statusText = "大写"
									break
								case 3:
									mayuscase = data.ustext === "-" ? 2 : 1
									statusText = mayuscase === 2 ? "大写锁定" : "小写"
									break
								default:
									mayuscase = 1
									statusText = "小写"
									break
							}
							mayusprop.setProperty(hmUI.prop.TEXT, statusText)
						}
						

						function cursorText() {
							let cursor = cursorFlag ? data.curtext : ' '
							return data.ustext.slice(0, cursorIndex) + cursor + data.ustext.slice(cursorIndex)
						}

						function changeCursor() {
							cursorFlag = !cursorFlag
							textuser.setProperty(hmUI.prop.TEXT,cursorText())
						}
						timer.createTimer(data.cursorvel, data.cursorvel, changeCursor)
					}
				})
			})()
		} catch (k) {
			console.log(k)
		}
	})()
} catch (h) {
	console.log(h)
}