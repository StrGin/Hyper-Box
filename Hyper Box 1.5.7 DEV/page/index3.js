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
        const getRandomNumber = (min, max) =>Math.floor(Math.random() * (max - min + 1)) + min;
        const phrases = {
          'zh-CN': ["冬天之所以那么冷是为了告诉大家身边人的温暖有多重要。", "时间是存在者的时间。", "站起来吧孩子,没人会看见倒下的人。", "请别怕黑暗,你自带光环！", "同情是把双面有刃的利刀,不会使用的人最好别动手。", "比起想念来,千年又何其长。比起相见来,千年又何其短。", "请不要带着不好的事情去做自己喜欢做的事情。", "我是一个很没有毅力的人,喜欢你这件事我却爱了三年。", "曾盛开过一朵,曾不会败落,曾在他眼中流淌过浩瀚的银河。", "哲学的基本问题是思维和存在的关系问题。", "对于所有生命来说,不会死亡的绝望,是最可怕的审判。", "我本可以忍受黑暗,如果我不曾见过光明。", "光,火交错,诞生了夕阳。", "弱小不是逃避的借口,应是竭尽全力的理由。", "百废待兴长久事,千灯如逝长庚驰。", "东风夜放花千树。更吹落、星如雨。", "二十四桥明月夜,玉人何处教吹箫？", "一日不见兮,思之如狂。", "无聊的并不是时间,而是平庸无奇的我。", "虽然我的心脏停止跳动了,但它不会停止爱你。", "旅人不识清明雨,深院碧桃香红袖。", "十几岁的年纪里,谁都不是谁的一生。", "如果你执意追逐我的幻影,迟早会被真正的我打败。", "似水流年是一个人所有的一切,只有这个东西,才真正归你所有。", "资本来到世间,从头到脚每个毛孔都滴着血和肮脏的东西。", "当人们做不到一些事情的时候,他们会对你说你也同样不能。", "春宵一刻值千金,花有清香月有阴。", "一切终将失去,只有死亡永生。", "我追着你,因为我爱你", "每个人都是月亮,总有一个阴暗面,从来不让人看见。", "再等一等,等我,来劈开冻住我们的冷。", "天下没有免费的午餐,努力创造奇迹吧少年！", "兰陵美酒郁金香,玉碗盛来琥珀光。", "井蛙不可以语于海者,拘于虚也；夏虫不可以语于冰者,笃于时也", "谁是我们的敌人,谁是我们的朋友,这是革命的首要问题。", "仁不行商、义不守财；情不立威,善不居官；慈不掌兵,柔不监国。", "既然等不到青城的日落,那就从朝阳开始。", "迷茫在人海之中,找不到路,东顾西顾,无所谓,只管前行。", "选择你所喜欢的,爱你所选择的。", "我住长江头,君住长江尾。", "现在我们也都还各自活着,我想。", "如果你仲记得我,就返转头啦。", "剃刀边缘怎能起造伽蓝。", "只是,想要做些什么而已。 觉得不做些什么就会死掉而已。", "剑指之地,破穹其顶。", "月出于东山之上,徘徊于斗牛之间。", "一个细胞里,却分裂出了两种截然不同的命运。", "我不是畏惧风,我只是怕风把沙子吹到我的眼睛里！,", "等一条离群太远的深海游鱼 碰到一只 离群太远的蚁", "江南几度梅花发,人在天涯鬓已斑。", "且视他人之疑目如盏盏鬼火,大胆地去你的夜路。", "皑如山上雪,皎若云间月。", "吾为天帝,当镇压世间一切敌。", "隔岸无旧情,姑苏有钟声。", "虽有遗憾,绝不后悔。", "你要知道我所做出的决定都没改变过 无论如何也会达成", "所谓宿命,其实都是最好的安排。", "痛苦犹如一艘船,欲望是指南针。", "独乐乐不如众乐乐。", "君子不器。", "此情可待成追忆,只是当时已惘然。", "只恐双溪舴艋舟,载不动许多愁。", "你背朝太阳,就只能看到自己的影子。", "运伟大之思者,必行伟大之迷途。", "人最强大的武器,是习惯和信赖。", "迎着风,拥抱彩虹！", "没有值不值得,只有愿不愿意。", "一件事物与其自身完全一致", "我们感到不满的原因就在于我们试图不断地提高自己的要求。", "早知如此绊人心,何如当初莫相识。", "人能够能动地认识世界；人能够能动地改造世界。", "人生,三十年前看爹敬儿,三十年后看儿敬爹！", "桃李春风一杯酒,江湖夜雨十年灯。", "高调做事,低调做人。", "夜来幽梦忽还乡。小轩窗。正梳妆。相顾无言,惟有泪千行。", "人类把最精密的保密系统,都用在了自我毁灭上。", "雨喝醉了,小路摇摇晃晃,倒在我怀里。", "人类起源于信仰,毁于信仰,人们在信仰的余烬里重生。", "疏影横斜水清浅,暗香浮动月黄昏。", "最是人间留不住,朱颜辞镜花辞树。", "宇宙是蚂蚁的梦。", "独立寒秋,湘江北去,橘子洲头。", "自满必定失败,骄傲必定后悔。", "时光只解催人老,不信多情,长恨离亭,泪滴春衫酒易醒。", "愿你晴雨无伤。", "每次对一个人很好,最后换来的不过是自己身价的卑微。", "萤火之光看起来比平常要更耀眼是错觉吗？今宵会成为永夜的吧。", "不努力就只能听到别人的好消息。", "未来不是被给予的,而是自己争取的。", "一定要保护自己的梦想,即使牺牲一切。", "恰沐春风共同游,终只叹,木已舟。", "这个世界对温柔的你可一点也不温柔呀。", "我们控制,我们收容,我们保护。", "慢慢来,谁还没有一个努力的过程。", "现在我这个遗患,已经成为把真学们极欲拔掉的夫来比道中钉。", "每一个不曾起舞的日子,都是对生命的辜负。", "我们生活在阴沟里,但有人依然仰望星空。", "历史的发展是不以人的意志为转移的。", "不要在晚上做出任何决定。", "寒夜客来茶当酒,竹炉汤沸火初红。", "一切已失去,不可以再追。", "这无缘无故的攀比之心,是从何而来啊？", "当敌人变成战友多半是为了生存,而战友变成敌人多半是为了金钱。", "长大了,就要自己做决定,哪怕是艰难的决定。", "我们即使发了一千次短信,心与心之间大概也只能靠近1厘米。", "树大必有枯枝,人多必有白痴。", "弱肉强食的世界,强者没有理由道歉,弱者也没有资格埋怨。"],
          'en-US': ["The reason why winter is so cold is to tell everyone how important the warmth of the people around us is.","Time is the time of existence.","Stand up, child, no one will see the fallen.","Please don't be afraid of the darkness, you bring your own halo!","Sympathy is a double-edged sword, and those who cannot use it are better not to use it.","Compared to longing, a thousand years are much longer. Compared to meeting, a thousand years are much shorter.","Please don't do things you like with bad things.", "I am a person who lacks perseverance, and I like you.","I have loved things for three years."," Once bloomed a flower, never to fail, once flowed the vast Milky Way in his eyes. "," The fundamental problem of philosophy is the relationship between thinking and existence. "," For all life, the despair of not dying is the most terrifying judgment. "," I could have endured darkness if I had never seen light. "," Light and fire intertwined, giving birth to the sunset. "," Weakness is not an excuse to escape, but a reason to do everything possible. "," A hundred wastes wait for a long time, a thousand lamps like fleeting light, a thousand trees blooming in the east wind. ","Blowing down, stars like rain ","On the bright moon night of the Twenty Four Bridges, where does the Jade Man teach to play the flute?","One day without seeing, thinking is like madness." ,"Boring is not time, but the ordinary and ordinary me.","Although my heart stops beating, it will not stop loving you.","Travelers do not know the clear morning rain, deep courtyard with fragrant peaches and red sleeves.","In their teenage years, no one is their life.","If you persist in pursuing my illusion, sooner or later you will be defeated by the true me.","Time flies like water, everything belongs to a person. Only this thing truly belongs to you.","Capital comes into the world, with blood and dirty things dripping from every pore from head to toe.", "When people can't do something, they will tell you that you can't do it either." ,"A moment in spring is worth a thousand gold, flowers have fragrance, and the moon has shade.","Everything will eventually be lost, only death will live forever.", "I pursue you because I love you.", "Everyone is the moon, there is always a dark side that no one can see.", "Wait a little longer, wait for me, come and split the cold that freezes us." ,"There is no free lunch in the world, work hard to create miracles, young man!", "Lanling wine, tulips, and a jade bowl filled with amber light." ,"The well frog cannot speak to the sea, constrained by emptiness the summer insect cannot speak to the ice, faithful to time.","Who are our enemies and who are our friends? This is the primary issue of revolution.","Ren cannot do business, righteousness does not maintain wealth; emotions do not establish power, kindness does not hold official positions; kindness does not command troops, gentleness does not supervise the country.","Since we cannot wait for the sunset of Qingcheng, let's start from the sunrise.","Confused in the sea of people, unable to find a way, looking east and west, it doesn't matter, just move forward.","Choose what you like, love what you choose.","I live at the head of the Yangtze River, and you live at the tail of the Yangtze River.","Now we are all alive, I think.","If you remember me, then turn your head.", "How can the edge of the razor create Galan?","Just want to do something. I feel like I will die if I don't do something.","The land of the sword finger, breaking through the dome.","The moon rises from the east mountain, wandering between bullfights.","In one cell, two completely different fates split.","I'm not afraid of the wind, I'm not afraid of it.","I'm just afraid the wind will blow the sand into my eyes","Waiting for a deep-sea swimming fish that is too far away from the group to encounter an ant that is too far away from the group.","Jiangnan has plum blossom hair several times, and people have already spotted their temples at the end of the earth.", "And let others' doubts be like a lamp of ghostly fire, boldly going on your night path.","It's as clear as snow on the mountain, as bright as the moon in the clouds.","As the Heavenly Emperor, I will suppress all enemies in the world.", "There is no old love across the bank, and there is a bell ringing in Suzhou.","Although there are regrets, there will be no regrets." ,"You should know that my decisions have never changed, and no matter what fate is, they will be achieved.", "In fact, they are all the best arrangements.", "Pain is like a ship, desire is a compass.", "Merry happiness alone is not as good as happiness among the people.", "A gentleman is not a weapon." ,"This situation can be remembered, but it was already lost at that time.", "I was afraid that the two streams would not be able to carry many sorrows." ,"If you turn your back to the sun, you can only see your own shadow." ,"Those who carry great thoughts will inevitably go astray." ,"The most powerful weapon of a person is habit and trust.", "Embrace the rainbow in the wind!" ,"There is no value, only willingness." ,"A thing is completely consistent with itself" ,"The reason why we feel dissatisfied is because we try to constantly improve our own expectations.","If we had known so much, how could we not have met before.","People can understand the world actively; people can change the world actively." ,"Life, 30 years ago, we look at our father and respect our children, 30 years later, we look at our children and respect our father!", "A cup of wine with peach and plum spring breeze, ten years of night rain in the martial arts world.", "High profile work, low-key life.", "Nightly dreams suddenly return to our hometown. The small pavilion window. Dressing up. Silent, only tears flow." ,"Humanity uses the most sophisticated confidentiality system." ,"All of it has been used for self destruction. "," The rain got drunk, the path swayed and fell into my arms. "," Humanity originated from faith, destroyed by faith, and people are reborn in the ashes of faith. "," The sparse shadows slanted across the clear water, and the faint fragrance floated in the moonlight and dusk. "," The most unforgettable thing is that the human world cannot stay. Zhu Yan bid farewell to the mirror flower and the tree. "," The universe is an ant's dream. "," In the cold autumn of independence, the Xiangjiang River flows north, at the head of Orange Island. "," Self satisfaction is bound to fail, pride is bound to regret. "," Time only dispels the urge of aging, not believing in sentimentality, leaving the pavilion with tears in spring. ","Clothes and wine are easy to wake up." ,"May you rain and shine without injury.", "Every time you treat someone well, what you end up with is only your own lowly worth." ,"Is it an illusion that the glow of fireflies looks brighter than usual? Tonight will become eternal." ,"If you don't work hard, you can only hear good news from others." ,"The future is not given, but you strive for it." ,"Be sure to protect your dreams, even if you sacrifice everything." ,"Just bask in the spring breeze and swim together, only sigh, the wood is already in the boat." ,"This world is not gentle to the gentle you at all." ,"We control it, we shelter it, we protect it." ,"Take it slow, who will." ,"There is no process of hard work." ,"Now, my legacy has become a thorn in the path of comparison that drives true scholars to their extreme desires.", "Every day without dancing is a betrayal of life." ,"We live in a sewer, but some people still look up to the stars." ,"The development of history is not subject to human will." ,"Do not make any decisions at night." ,"On a cold night, guests come to tea as wine, bamboo furnace soup boiling red.", "Everything has been lost, and cannot be pursued again." ,"Where is this inexplicable desire for comparison?" ,"Come on, When an enemy becomes a comrade in arms, it is mostly for survival, and when a comrade in arms becomes an enemy, it is mostly for money." ,"When you grow up, you have to make your own decisions, even difficult decisions." ,"Even if we send a thousand text messages, the distance between our hearts can only be about 1 centimeter." ,"A big tree must have dead branches, and many people must have idiots." ,"In a world where the weak eat the weak, the strong have no reason to apologize, and the weak have no right to complain."],
          'zh-TW': ["冬天之所以那麼冷是為了告訴大家身邊人的溫暖有多重要。","時間是存在者的時間。","站起來吧孩子,沒人會看見倒下的人。","請別怕黑暗,你自帶光環！","同情是把雙面有刃的利刀,不會使用的人最好別動手。","比起想念來,千年又何其長。比起相見來,千年又何其短。" ,"請不要帶著不好的事情去做自己喜歡做的事情。","我是一個很沒有毅力的人,喜歡你這件事我卻愛了三年。","曾盛開過一朵,曾不會敗落,曾在他眼中流淌過浩瀚的銀河。","哲學的基本問題是思維和存在的關係問題。","對於所有生命來說,不會死亡的絕望,是最可怕的審判。", "我本可以忍受黑暗,如果我不曾見過光明。","光,火交錯,誕生了夕陽。","弱小不是逃避的藉口,應是竭盡全力的理由。","百廢待興長久事,千燈如逝長庚馳。","東風夜放花千樹。更吹落、星如雨。","二十四橋明月夜,玉人何處教吹簫？","一日不見兮,思之如狂。", "無聊的並不是時間,而是平庸無奇的我。","雖然我的心臟停止跳動了,但它不會停止愛你。","旅人不識清明雨,深院碧桃香紅袖。","十幾歲的年紀裏,誰都不是誰的一生。","如果你執意追逐我的幻影,遲早會被真正的我打敗。","似水流年是一個人所有的一切,只有這個東西,才真正歸你所有。", "資本來到世間,從頭到腳每個毛孔都滴著血和骯髒的東西。","當人們做不到一些事情的時候,他們會對你說你也同樣不能。","春宵一刻值千金,花有清香月有陰。","一切終將失去,只有死亡永生。","我追著你,因為我愛你","每個人都是月亮,總有一個陰暗面,從來不讓人看見。", "再等一等,等我,來劈開凍住我們的冷。","天下沒有免費的午餐,努力創造奇跡吧少年！","蘭陵美酒鬱金香,玉碗盛來琥珀光。","井蛙不可以語於海者,拘於虛也；夏蟲不可以語於冰者,篤於時也","誰是我們的敵人,誰是我們的朋友,這是革命的首要問題。","仁不行商、義不守財； 情不立威,善不居官； 慈不掌兵,柔不監國。 ","既然等不到青城的日落,那就從朝陽開始。 ","迷茫在人海之中,找不到路,東顧西顧,無所謂,只管前行。 ","選擇你所喜歡的,愛你所選擇的。 ","我住長江頭,君住長江尾。 ","現在我們也都還各自活著,我想。 ","如果你仲記得我,就返轉頭啦。 ","剃刀邊緣怎能起造伽藍。 ","只是,想要做些什麼而已。 覺得不做些什麼就會死掉而已。 ","劍指之地,破穹其頂。 ","月出於東山之上,徘徊於鬥牛之間。 ","一個細胞裏,卻分裂出了兩種截然不同的命運。 ","我不是畏懼風,我只是怕風把沙子吹到我的眼睛裏！, ","等一條離群太遠的深海遊魚碰到一隻離群太遠的蟻","江南幾度梅花發,人在天涯鬢已斑。 ","且視他人之疑目如盞盞鬼火,大膽地去你的夜路。 ","皚如山上雪,皎若雲間月。 ","吾為天帝,當鎮壓世間一切敵。 ","隔岸無舊情,姑蘇有鐘聲。 ","雖有遺憾,絕不後悔。 ","你要知道我所做出的决定都沒改變過無論如何也會達成","所謂宿命,其實都是最好的安排。 ","痛苦猶如一艘船,欲望是指南針。 ","獨樂樂不如眾樂樂。 ","君子不器。 ","此情可待成追憶,只是當時已惘然。 ","只恐雙溪舴艋舟,載不動許多愁。 ","你背朝太陽,就只能看到自己的影子。 ","運偉大之思者,必行偉大之迷途。 ","人最强大的武器,是習慣和信賴。 ","迎著風,擁抱彩虹！ ","沒有值不值得,只有願不願意。 ","一件事物與其自身完全一致","我們感到不滿的原因就在於我們試圖不斷地提高自己的要求。 ","早知如此絆人心,何如當初莫相識。 ","人能够能動地認識世界； 人能够能動地改造世界。 ","人生,三十年前看爹敬兒,三十年後看兒敬爹！ ","桃李春風一杯酒,江湖夜雨十年燈。 ","高調做事,低調做人。 ","夜來幽夢忽還鄉。 小軒窗。 正梳妝。 相顧無言,惟有淚千行。 ","人類把最精密的保密系統,都用在了自我毀滅上。 ","雨喝醉了,小路搖搖晃晃,倒在我懷裡。 ","人類起源於信仰,毀於信仰,人們在信仰的餘燼裏重生。 ","疏影橫斜水清淺,暗香浮動月黃昏。 ","最是人間留不住,朱顏辭鏡花辭樹。 ","宇宙是螞蟻的夢。 ","獨立寒秋,湘江北去,橘子洲頭。 ","自滿必定失敗,驕傲必定後悔。 ","時光只解催人老,不信多情,長恨離亭,淚滴春衫酒易醒。 ","願你晴雨無傷。 ","每次對一個人很好,最後換來的不過是自己身價的卑微。 ","螢火之光看起來比平常要更耀眼是錯覺嗎？ 今宵會成為永夜的吧。 ","不努力就只能聽到別人的好消息。 ","未來不是被給予的,而是自己爭取的。 ","一定要保護自己的夢想,即使犧牲一切。 ","恰沐春風共同遊,終只歎,木已舟。 ","這個世界對溫柔的你可一點也不溫柔呀。 ","我們控制,我們收容,我們保護。 ","慢慢來,誰還沒有一個努力的過程。 ","現在我這個遺患,已經成為把真學們極欲拔掉的夫來比道中釘。 ","每一個不曾起舞的日子,都是對生命的辜負。 ","我們生活在陰溝裏,但有人依然仰望星空。 ","歷史的發展是不以人的意志為轉移的。 ","不要在晚上做出任何决定。 ","寒夜客來茶當酒,竹爐湯沸火初紅。 ","一切已失去,不可以再追。 ","這無緣無故的攀比之心,是從何而來啊？ ","當敵人變成戰友多半是為了生存,而戰友變成敵人多半是為了金錢。 ","長大了,就要自己做决定,哪怕是艱難的决定。 ","我們即使發了一千次簡訊,心與心之間大概也只能靠近1釐米。 ","樹大必有枯枝,人多必有白癡。 ","弱肉强食的世界,强者沒有理由道歉,弱者也沒有資格埋怨。 "]
        }
        let language = DeviceRuntimeCore.HmUtils.getLanguage()
        language = phrases.hasOwnProperty(language) ? language : "en-US";
        const randomPhrase = phrases[language][getRandomNumber(0, phrases[language].length - 1)];
         hmUI.createWidget(hmUI.widget.TEXT, {
          x: 0,
          y: 120,
          w: 192,
          h: 200,
          color: 0xffffff,
          text_size: 20,
          align_h: hmUI.align.CENTER_H,
          align_v: hmUI.align.CENTER_V,
          text_style: hmUI.text_style.WRAP,
          text: randomPhrase
        });
       },
      });
     })();
    } catch (e) {
     console.log(e);
    }
   })();
  } catch (e) {
   console.log(e);
  }