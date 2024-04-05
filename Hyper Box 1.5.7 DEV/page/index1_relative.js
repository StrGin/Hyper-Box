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
       'drink')
      DeviceRuntimeCore.HmLogger.getLogger('sanjiao')
      t.module = DeviceRuntimeCore.Page({
          onInit() {
            let startY = 20;
            const buttonWidth = 46; // 按钮宽度
            const buttonHeight = 45; // 按钮高度
            let relationPath = '';
            
const relationMap = {
  '父': '父亲',
  '母': '母亲',
  '子': '儿子',
  '女': '女儿',
  '兄': '哥哥',
  '弟': '弟弟',
  '姐': '姐姐',
  '妹': '妹妹',
  '夫': '丈夫',
  '妻': '妻子',
  '妻子': '儿子',
  '妻女': '女儿',
  '妻兄': '大舅子',
  '妻弟': '小舅子',
  '弟妻': '弟妹',
  '哥妻': '嫂子',
  '父父': '爷爷',
  '父母': '奶奶',
  '母父': '外公',
  '母母': '外婆',
  '父兄': '伯父',
  '父弟': '叔叔',
  '母弟': '舅舅',
  '母姐': '姨妈',
  '母妹': '姨妈',
  '父姐': '姑母',
  '父妹': '姑母',
  '父子': '哥哥/弟弟/自己',
  '父女': '姐姐/妹妹/自己', 
  '妻父': '岳父',
  '妻母': '岳母',
  '夫父': '公公',
  '夫母': '婆婆',
  '子女': '孙女',
  '子子': '孙子',
  '女子': '外孙',
  '女女': '外孙女',
  '弟子': '侄子',
  '弟女': '侄女',
  '兄子': '侄子',
  '兄女': '侄女',
  '姐子': '外甥',
  '姐女': '外甥女',
  '妹子': '外甥',
  '妹女': '外甥女',
  '子兄': '儿子',
  '子弟': '儿子',
  '子姐': '女儿',
  '子妹': '女儿',
  '女兄': '儿子',
  '女弟': '儿子',
  '女姐': '女儿',
  '女妹': '女儿',
  '兄弟': '自己/弟弟/哥哥',
  '弟兄': '自己/弟弟/哥哥',
  '姐妹': '自己/姐姐/妹妹',
  '父子父': '父亲',
  '父姐夫': '姑丈',
  '父妹夫': '姑丈',
  '子父子': '自己/哥哥/弟弟',
  '父父子': '父亲/伯父/叔叔',
  '父父父': '曾祖父',
  '父母子': '父亲/伯父/叔叔',
  '父兄妻': '伯母',
  '父弟妻': '婶婶',
  '父父兄': '伯祖父',
  '父父弟': '叔祖父',
  '父父姐': '祖姑母',
  '母父兄': '伯外祖父',
  '母父弟': '叔外祖父',
  '母母兄': '外舅公',
  '母母弟': '外舅公',
  '母母母': '外曾外祖母',
  '子子子': '曾孙',
  '子子女': '曾孙女',
  '子女女': '曾外孙女',
  '子女子': '曾外孙',
  '女女女': '外曾外孙女',
  '女女子': '外曾外孙',
  '女子女': '外曾孙女',
  '女子子': '外曾孙',
  '父父父父': '高祖父',
  '父父父父父': '天祖父',
  '父父父子': '堂祖父/爷爷',
  '父父子父': '爷爷',
  '父父父父父父': '烈祖父',
  '父父父父父父父': '太祖父',
  '父父父父父父父父': '远祖父',
  '父父父父父父父父父': '鼻祖父',
  '母母母母': '祖太姥姥'
};
function optimizeRelationPath(path) {
  const maleSiblings = ['兄', '弟'];
  const femaleSiblings = ['姐', '妹'];
  let optimizedPath = '';
  let lastGenderGroup = '';
  for (let i = 0; i < path.length; i++) {
      const currentChar = path[i];
      let currentGenderGroup = '';
      if (maleSiblings.includes(currentChar)) currentGenderGroup = 'male';
      else if (femaleSiblings.includes(currentChar)) currentGenderGroup = 'female';
      if (currentGenderGroup && currentGenderGroup === lastGenderGroup)continue;
      lastGenderGroup = currentGenderGroup;
      optimizedPath += currentChar;
  }
  return optimizedPath;
}
            const view = hmUI.createWidget(hmUI.widget.TEXT, {
              x: 0,
              y: startY,
              w: 192,
              h: 60,
              color: 0xffffff,
              text_size: 20,
              align_h: hmUI.align.CENTER_H,
              align_v: hmUI.align.CENTER_V,
              text_style: hmUI.text_style.WRAP,
              text: ''
            });
            
            startY += 70;
            const buttonsText = ['夫','妻','C','退','父','母','兄','弟','姐','妹','子','女'];
            
            buttonsText.forEach((text, index) => {
              let x = (index % 4) * (buttonWidth + 6); // 安排按钮水平排列
              let y = 150 + startY + Math.floor(index / 4) * (buttonHeight + 10);
            
              hmUI.createWidget(hmUI.widget.BUTTON, {
                x: x,
                y: y,
                w: buttonWidth,
                h: buttonHeight,
                radius: 12,
                normal_color: 0x262626,
                press_color: 0x101010,
                color: 0xffffff,
                text: text,
                click_func: () => {
    relationPath += text;
    const optimizedPath = optimizeRelationPath(relationPath);
    const result = relationMap[optimizedPath] || '未知关系';
    view.setProperty(hmUI.prop.TEXT, result);
                }
              });
            });
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