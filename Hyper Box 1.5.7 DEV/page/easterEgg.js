const SMOOTH_TIMER_TEST_CIRCLE = 1;
    const SMOOTH_TIMER_SAFE_TIME = 30;
    const hmTime = hmSensor.createSensor(hmSensor.id.TIME);
    class SmoothTimer {
        constructor(delay, circle, func, option, mode) {
            this._lastUtc_ = hmTime.utc + delay - circle;
            if (circle == undefined)
                return null;
            this.mode = mode || SmoothTimer.modes.DYNAMIC_SMOOTH;
            this._circle_ = circle;
            this._hmTimer_ = timer.createTimer(0, SMOOTH_TIMER_TEST_CIRCLE, param => {
                if (hmTime.utc - this._lastUtc_ >= circle) {
                    if (this.mode == SmoothTimer.modes.MAX_LIMIT) {
                        this._lastUtc_ = hmTime.utc - 0.75;
                    }
                    else if (this.mode == SmoothTimer.modes.DYNAMIC_SMOOTH) {
                        this._lastUtc_ += circle;
                    }
                    func(param);
                }
            }, option);
        }
    }
    SmoothTimer.modes = {
        DYNAMIC_SMOOTH: 1,
        MAX_LIMIT: 2,
    };
    function createSmoothTimer(delay, circle, func, option, mode) {
        return new SmoothTimer(delay, circle, func, option, mode);
    }
    function stopSmoothTimer(instance) {
        if (instance._hmTimer_) {
            timer.stopTimer(instance._hmTimer_);
            return true;
        }
        return false;
    }
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
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
var bullets = 5; // 子弹总数
var liveBullets = getRandomInt(1, bullets); // 实弹数量
var airBullets = bullets - liveBullets
var playerHealth = 3; // 主角的生命值
var devilHealth = 3; // 恶魔的生命值
const spear = hmUI.createWidget(hmUI.widget.TEXT, {
    x: 40,
    y: 270,
    w: 288,
    h: 46,
    color: 0xffffff,
    text_size: 36,
    text: '枪'
  })
  const devilHealthView = hmUI.createWidget(hmUI.widget.TEXT, {
    x: 120,
    y: 140,
    w: 288,
    h: 46,
    color: 0xffffff,
    text_size: 25,
    text: `血 ${devilHealth}`
  })
  const playerHealthView = hmUI.createWidget(hmUI.widget.TEXT, {
    x: 120,
    y: 310,
    w: 288,
    h: 46,
    color: 0xffffff,
    text_size: 25,
    text: `血 ${playerHealth}`
  })
  function c() {
    if (liveBullets !== 0) {
        if (airBullets == 0) {
            playerHealth--;
            bullets--
            liveBullets--
            new createSmoothTimer(500, 4000000000000000000000000000000000000000000000000000000000, () => {
                spear.setProperty(hmUI.prop.Y, 270)
            }, {});
            hmUI.showToast({text: "恶魔击中了你！"});
            playerHealthView.setProperty(hmUI.prop.TEXT, `血 ${playerHealth}`)

            if (bullets == 0) {
                bullets = 5
                liveBullets = getRandomInt(1, bullets); // 实弹数量
                airBullets = bullets - liveBullets
            }
        } else if (getRandomInt(0, bullets) > 2 && liveBullets !== 0) {
            playerHealth--;
            liveBullets--;
            bullets--
            playerHealthView.setProperty(hmUI.prop.TEXT, `血 ${playerHealth}`)
            hmUI.showToast({text: "恶魔击中了你！"});
            new createSmoothTimer(500, 4000000000000000000000000000000000000000000000000000000000, () => {
                spear.setProperty(hmUI.prop.Y, 270)
            }, {});

            if (bullets == 0) {
                bullets = 5
                liveBullets = getRandomInt(1, bullets); // 实弹数量
                airBullets = bullets - liveBullets
            }

        } else {
            bullets--
            airBullets--
            hmUI.showToast({text: "恶魔没有击中你"});
            new createSmoothTimer(500, 4000000000000000000000000000000000000000000000000000000000, () => {
                spear.setProperty(hmUI.prop.Y, 270)
            }, {});
            if (bullets == 0) {
                bullets = 5
                liveBullets = getRandomInt(1, bullets); // 实弹数量
                airBullets = bullets - liveBullets
            }
        }

    } else {
        if (getRandomInt(0, bullets) > 2 && airBullets == 0) {
            devilHealth--;
            bullets--
            liveBullets--
            devilHealthView.setProperty(hmUI.prop.TEXT, `血 ${devilHealth}`)
            hmUI.showToast({text: "恶魔被自己击中了！"})
            
            if (bullets == 0) {
                bullets = 5
                liveBullets = getRandomInt(1, bullets); // 实弹数量
                airBullets = bullets - liveBullets
            }
        else {
            new createSmoothTimer(500, 4000000000000000000000000000000000000000000000000000000000, () => {
                spear.setProperty(hmUI.prop.Y, 270)
            }, {});
        }        
        } else {
            airBullets--;
            bullets--
            hmUI.showToast({text: "恶魔没有被自己击中！"})

            if (bullets == 0) {
                bullets = 5
                liveBullets = getRandomInt(1, bullets); // 实弹数量
                airBullets = bullets - liveBullets
            }
            else {
                new createSmoothTimer(500, 4000000000000000000000000000000000000000000000000000000000, () => {
                    spear.setProperty(hmUI.prop.Y, 270)
                }, {});
            }  
            c()
        }
    }
}
                  const devil = hmUI.createWidget(hmUI.widget.BUTTON, {
                    x: 10,
                    y: 75,
                    w: 100,
                    h: 100,
                    radius: 20,
                    color: 0x000000,
                    normal_color: 0xffffff,
                    press_color: 0xdddddd,
                    text: '恶魔',
                    click_func: () => {
                      if (spear.getProperty(hmUI.prop.Y) == 270) {
                                if (airBullets == 0) {
                                    devilHealth--;
                                    liveBullets--
                                    bullets--;
                                    devilHealthView.setProperty(hmUI.prop.TEXT, `血 ${devilHealth}`)
                                    hmUI.showToast({text: "你击中了恶魔！"});
                                } else if (getRandomInt(0, bullets) > 2 && liveBullets !== 0) {
                                    devilHealth--;
                                    liveBullets--;
                                    bullets--;
                                    devilHealthView.setProperty(hmUI.prop.TEXT, `血 ${devilHealth}`)
                                    hmUI.showToast({text: "你击中了恶魔！"});
                                } else {
                                    bullets--;
                                    airBullets--
                                    hmUI.showToast({text: "你并没有击中恶魔"});
                                }
                                new createSmoothTimer(400, 4000000000000000000000000000000000000000000000000000000000, () => {
                                    spear.setProperty(hmUI.prop.Y, 150)
                                }, {});

                                    
                                    c()

                            }
                                
                      }
                
              })


              hmUI.createWidget(hmUI.widget.BUTTON, {
                x: 10,
                y: 305,
                w: 100,
                h: 100,
                radius: 20,
                color: 0x000000,
                normal_color: 0xffffff,
                press_color: 0xdddddd,
                text: hmSetting.getUserData().nickName,
                click_func: () => {
                  if (spear.getProperty(hmUI.prop.Y) == 270) {
                    if (getRandomInt(0, bullets) > 2 && airBullets == 0) {
                        playerHealth--;
                        bullets--;
                        liveBullets--
                        playerHealthView.setProperty(hmUI.prop.TEXT, `血 ${playerHealth}`)
                        spear.setProperty(hmUI.prop.Y,150)
                    } else {
                        bullets--;
                        airBullets--;
                    }
                  }
            }
          })
          new createSmoothTimer(500, 500, () => {
            if (devilHealth <= 0 && playerHealth > 0) {
                hmUI.showToast({text: 'You Win!'})
                hmApp.startApp({url: 'HmReStartScreen',type: "native"})
            }
            else if (playerHealth <= 0) {
                hmUI.showToast({text: 'Game Over!'})
            }
        }, {});
for (let i = 0;i<bullets;i++) {
    if (i < liveBullets) {
    hmUI.createWidget(hmUI.widget.FILL_RECT, {
        x: 90 + i * 20,
        y: 210,
        w: 15,
        h: 60,
        radius: 5,
        color: 0xfc6950
      })
    }
    else {
        hmUI.createWidget(hmUI.widget.FILL_RECT, {
            x: 90 + i * 20,
            y: 210,
            w: 15,
            h: 60,
            radius: 5,
            color: 0xdddddd
          }) 
    }
}
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