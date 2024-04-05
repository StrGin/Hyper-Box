try {
    (() => {
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
                        const eat = {
                            'zh-CN': ["馄饨","烩面","热干面","刀削面","油泼面","炸酱面","炒面","重庆小面","米线","酸辣粉","土豆粉","螺狮粉","凉皮儿","麻辣烫","肉夹馍","羊肉泡馍","炒饭","盖浇饭","烤肉饭","黄焖鸡米饭","麻辣香锅","火锅","酸菜鱼","烤串","披萨","烤鸭","汉堡","炸鸡","寿司","煎饼果子","南瓜粥","小龙虾","牛排","砂锅","大排档","馒头","西餐","自助餐","小笼包","水果","西北风","烧烤","泡面","水饺","日本料理","涮羊肉","兰州拉面","肯德基","面包","臊子面","小笼包","麦当劳","沙县小吃","烤鱼","海鲜","铁板烧","韩国料理","甜点"],
                            'en-US': ["Hamburger","Hot Dog","Buffalo Wings","Pizza","Barbecue Ribs","Clam Chowder","Lobster Roll","Philly Cheesesteak","Texas BBQ Brisket","Chicago Deep Dish Pizza","New York Style Cheesecake","Key Lime Pie","Fried Chicken","Biscuits and Gravy","Pulled Pork Sandwich","Cornbread","Gumbo","Cajun Jambalaya","Chili Cheese Fries","Southern Fried Catfish","Apple Pie","Pancakes","Donuts","S'mores","Reuben Sandwich","BBQ Pulled Pork","Fried Green Tomatoes","Fish Tacos","Pho","Tacos","California Sushi Rolls","New England Clam Bake"],
                            'zh-TW': ["鹵肉飯","牛肉麵","蚵仔煎","鳳梨酥","甜不辣","鹽酥雞","牡蠣米線","臭豆腐","胡椒餅","鼎泰豐小籠包","魚丸湯","鹅肉","燒餅","油條","豆漿","猪血糕","三杯雞","麻辣火鍋"]
                          }  
                        const drink = {
                            'zh-CN': ["水","可口可乐","百事可乐","雪碧","美年达","脉动","营养快线","康师傅冰红茶","绿茶","茉莉花茶","娃哈哈AD钙奶","旺仔牛奶","芬达","o泡果奶","蒙牛","伊利","红牛","喜茶",'蜜雪冰城','沪上阿姨',"核废水","鸭血粉丝汤"],
                            'zh-TW': ["水","可口可樂","百事可樂","雪碧","美年達","脈動","營養快線","康師傅冰紅茶","綠茶","茉莉花茶","旺仔牛奶","芬達","o泡果奶","蒙牛","伊利","紅牛","喜茶",'蜜雪冰城'],
                            'en-US': ["Coca-Cola","Pepsi","Root Beer","Sweet Tea","Iced Coffee","Milkshake","Lemonade","Craft Beer","Whiskey Sour","Margarita","Long Island Iced Tea","Mojito","Bloody Mary","Gin and Tonic","Pina Colada","Cosmopolitan","Arnold Palmer","Orange Crush","Mint Julep","Apple Cider","Bourbon","Craft Cocktails","Sangria","Hot Chocolate"]
                        }    
                        const time = hmSensor.createSensor(hmSensor.id.TIME).hour
                        function random(minNum,maxNum){ 
                            switch(arguments.length){ 
                                case 1: 
                                    return parseInt(Math.random()*minNum+1,10); 
                                case 2: 
                                    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
                            } 
                          }             
                          const baseVocabulary = {
                            "未知": ['Unknown', '未知'],
                            "早饭时间": ['Breakfast', '早飯時間'],
                            "午饭时间": ['Lunch', '午飯時間'],
                            '我吃柠檬': ['Go Away', '不应食用'],
                            "晚饭时间": ['Dinner', '晚飯時間'],
                            '夜宵时间': ['Night Snack', '亱宵時間'],
                            '食': ['Eat','食'],
                            '饮': ['Drink','飲']
                          }
                          
                          const languages = ["zh-CN", "en-US", "zh-TW"];
                          let i18nData = languages.reduce((acc, language, i) => ({
                            ...acc,
                            [language]: Object.keys(baseVocabulary).reduce((vocab, key) => {
                              vocab[key] = !i ? key : baseVocabulary[key][i - 1]
                              return vocab
                            }, {})
                          }), {}); 
                          let language = DeviceRuntimeCore.HmUtils.getLanguage()
                          let language_ = drink.hasOwnProperty(language) ? language : "en-US";     
                          language = eat.hasOwnProperty(language) ? language : "en-US";    
                          const getText = (key) => i18nData[language][key] || i18nData["en-US"][key];         
                          let time_2 = getText("未知")
                          if (time >=4 && time <= 10 && hmSetting.getTimeFormat() == 1) time_2 = getText("早饭时间")
                          else if (time >= 11 && time <= 14 && hmSetting.getTimeFormat() == 1) time_2 = getText("午饭时间")
                          else if (time >= 14 && time <= 17 && hmSetting.getTimeFormat() == 1) time_2 = getText("我吃柠檬")
                          else if (time >= 18 && time <= 22 && hmSetting.getTimeFormat() == 1)  time_2 = getText("晚饭时间")
                          else if (time >= 22 && time <= 3 && hmSetting.getTimeFormat() == 1) time_2 = getText("夜宵时间")
 
                        hmUI.createWidget(hmUI.widget.TEXT, {
							x: 45,
							y: 40,
							w: 120,
							h: 40,
							color: 0xFFFFFF,
							text_size: 25,
							text: time_2
						});             

                        
                        hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 30,
                            y: 100,
                            text: getText('食'),
                            w: 130,
                            h: 70,
                            radius: 20,
                            color: 0xffffff,
                            normal_color: 0x195aea,
                            press_color: 0xffffff,
                            click_func: ()=>{
                                    hmUI.showToast({
                                    text: eat[language][random(0, eat[language].length - 1)]
                                  })
                            }
                          })
                          hmUI.createWidget(hmUI.widget.BUTTON, {
                            x: 30,
                            y: 180,
                            text: getText('饮'),
                            w: 130,
                            h: 70,
                            radius: 20,
                            color: 0xffffff,
                            normal_color: 0x195aea,
                            press_color: 0xffffff,
                            click_func: ()=>{
                                    hmUI.showToast({
                                    text: drink[language_][random(0, drink[language_].length - 1)]
                                  })
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