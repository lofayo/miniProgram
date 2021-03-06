// pages/article-content/article-content.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleLists: [
      {
        date: "Nov 25 2018",
        title: "比利·林恩的中场故事",
        imgSrc: "/images/post/bl.png",
        avatar: "/images/avatar/2.png",
        content: "——李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式改名《半场无故事》，双满。",
        reading: "112",
        collection: "96",
        headImgSrc: "/images/post/bl.png",
        author: "白杨",
        dateTime: "1天前",
        detail: "一 “李安是一位绝不会重复自己的导演，本片将极富原创性”李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。预告片首次曝光后，被视作是明年奥斯卡种子选手。该片根据同名畅销书改编。原著小说荣获美国国家图书奖。也被BBC评为21世纪最伟大的12本英文小说之一。影片讲述一位19岁德州男孩的比利·林恩入伍参加伊战，在一次交火中他大难不死，意外与战友成为大众的关注焦点，并被塑造成英雄。之后他们返回国内，在橄榄球赛中场休息时授勋。这名战争英雄却面临前所未有的心灵煎熬……李安为什么选中这部电影来拍？因为李安想要挑战前所未有的技术难题：以120帧每秒的速度、4K、3D技术全面结合，来掀起一场电影视觉革命。什么意思？所谓“电影是24格每秒的谎言”，其中的24格，就是帧数。",
        postId: 0,
        music: {
          url: 'http://fs.w.kugou.com/201805151529/c991b32cc4bc62b0eea7a134ce4d5d4a/G083/M09/02/01/kw0DAFgvbEOAOX9-ADVWS9Y4oF4817.mp3',  //音乐链接
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000004dRTZ70jv2FA.jpg?max_age=2592000", //专辑封面URL
          title: "无条件 - 陈奕迅"  //音乐标题
        }
      },
      {
        date: "Sep 18 2018",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/crab.png",
        avatar: "/images/avatar/1.png",
        content: "—菊黄蟹正肥，品尝秋之味，徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“蟹封嫩玉双双满”。",
        reading: "112",
        collection: "96",
        headImgSrc: "/images/post/crab.png",
        author: "Stefan",
        dateTime: "24小时前",
        detail: "菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；在《世说新语》里，晋毕卓更是感叹“右手持酒杯，左手持蟹螯，拍浮酒船中，便足了一生矣。”漫漫人生长路，美食与爱岂可辜负？于是作为一个吃货，突然也很想回味一下属于我的味蕾记忆。记忆中的秋蟹，是家人的味道，弥漫着浓浓的亲情。\n\n是谁来自山川湖海，却囿于昼夜，厨房与爱？ 是母亲，深思熟虑，聪明耐心。吃蟹前，总会拿出几件工具，煞有介事而乐此不疲。告诉我们螃蟹至寒，需要佐以姜茶以祛寒，在配备的米醋小碟里，亦添入姜丝与紫苏，前者驱寒后者增香。泡好菊花茶，岁月静好，我们静等。",
        postId: 1,
        music: {
          url: 'http://mp3.qqmusic.cc/yq/102636799.mp3',  //音乐链接
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003y8dsH2wBHlo.jpg?max_age=2592000", //专辑封面URL
          title: "演员-薛之谦"  //音乐标题
        }
      },
      {
        date: "Set 25 2017",
        title: "吴京——战狼2",
        imgSrc: "/images/post/zhanlang.png",
        avatar: "/images/avatar/3.png",
        content: "——该片讲述了脱下军装的冷锋被卷入了一场非洲国家的叛乱，本来能够安全撤离的他无法忘记军人的职责，重回战场展开救援的故事。",
        reading: "99",
        collection: "99",
        headImgSrc: "/images/post/zhanlang.png",
        author: "高松",
        dateTime: "1月前",
        detail: "《战狼Ⅱ》是吴京执导的动作军事电影，由吴京、弗兰克·格里罗、吴刚、张翰、卢靖姗、淳于珊珊、丁海峰等主演。该片于2017年7月27日在中国内地上映 。该片讲述了脱下军装的冷锋被卷入了一场非洲国家的叛乱，本来能够安全撤离的他无法忘记军人的职责，重回战场展开救援的故事。2017年12月，该片获得2017中国-东盟电影节最佳影片奖，在第二届澳门国际影展上获得亚洲人气电影大奖 。",
        postId: 2,
        music: {
          url: 'http://mp3.qqmusic.cc/yq/681608.mp3',  //音乐链接
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000000ekBCf0c4CTM.jpg?max_age=2592000", //专辑封面URL
          title: "月恋歌 - 熊谷育美"  //音乐标题
        }
      },
      {
        date: "Set 16 2018",
        title: "红海行动",
        imgSrc: "/images/post/honghai.png",
        avatar: "/images/avatar/4.png",
        content: "——该片讲述了中国海军“蛟龙突击队”8人小组奉命执行撤侨任务，突击队兵分两路进行救援，但不幸遭到伏击，人员伤亡；同时在粉碎叛军武装首领的惊天阴谋中惨胜的故事。",
        reading: "999",
        collection: "999",
        headImgSrc: "/images/post/honghai.png",
        author: "七月",
        dateTime: "1月前",
        detail: "《红海行动》是由博纳影业集团股份有限公司、中国人民解放军海政电视艺术中心等出品，林超贤执导，冯骥、陈珠珠、林明杰编剧，张译、黄景瑜、海清、杜江、蒋璐霞等主演的动作片。该片讲述了中国海军“蛟龙突击队”8人小组奉命执行撤侨任务，突击队兵分两路进行救援，但不幸遭到伏击，人员伤亡；同时在粉碎叛军武装首领的惊天阴谋中惨胜的故事。该片于2018年2月16日在中国内地上映；3月1日在中国香港上映。",
        postId: 3,
        music: {
          url: 'http://mp3.qqmusic.cc/yq/202371397.mp3',  //音乐链接
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003j3NMw1ZBpsv.jpg?max_age=2592000", //专辑封面URL
          title: "起风了 - 买辣椒也用券"  //音乐标题
        }
      },
      {
        date: "Set 16 2018",
        title: "湄公河行动",
        imgSrc: "/images/post/meigonghe.png",
        avatar: "/images/avatar/5.png",
        content: "——该片根据“10·5中国船员金三角遇害事件”（湄公河惨案）改编，讲述了一支行动小组为解开中国商船船员遇难所隐藏的阴谋，企图揪出运毒案件幕后黑手的故事。",
        reading: "999",
        collection: "999",
        headImgSrc: "/images/post/meigonghe.png",
        author: "零点",
        dateTime: "1月前",
        detail: "《湄公河行动》是博纳影业集团出品，华夏电影发行有限责任公司、蓝色星空影业等联合出品的警匪动作电影，由林超贤编剧并执导，张涵予、彭于晏、冯文娟等主演。该片根据“10·5中国船员金三角遇害事件”（湄公河惨案）改编，讲述了一支行动小组为解开中国商船船员遇难所隐藏的阴谋，企图揪出运毒案件幕后黑手的故事。影片于2016年9月30日在中国上映。《湄公河行动》原定档期为2016年9月30日-2016年10月30日，后决定将全国范围内的密钥延期一个月，公映结束时间延长至2016年12月4日。该片获得第36届香港电影金像奖最佳动作设计奖、第31届中国电影金鸡奖最佳故事片奖。",
        postId: 4,
        music: {
          url: 'http://mp3.qqmusic.cc/yq/212606735.mp3',  //音乐链接
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000001qYTzY2oyDyZ.jpg?max_age=2592000", //专辑封面URL
          title: "体面-于文文"  //音乐标题
        }
      },
      {
        date: "Set 16 2018",
        title: "士兵突击",
        imgSrc: "/images/post/timg.png",
        avatar: "/images/avatar/2.png",
        content: "——该剧改编自兰晓龙小说《士兵突击》，讲述了一个农村出身的普通士兵许三多的成长历程，不抛弃、不放弃，最终成为一名出色的侦察兵的故事。",
        reading: "999",
        collection: "999",
        headImgSrc: "/images/post/timg.png",
        author: "Damon",
        dateTime: "1天前",
        detail: "《士兵突击》是由八一电影制片厂、北京华谊兄弟影视投资有限公司联合出品，由康红雷执导、兰晓龙编剧，王宝强、陈思成、段奕宏、张译、邢佳栋、张国强、李晨等主演的军事动作剧。该剧改编自兰晓龙小说《士兵突击》，讲述了一个农村出身的普通士兵许三多的成长历程，不抛弃、不放弃，最终成为一名出色的侦察兵的故事。2008年，该剧获得第27届飞天奖、第24届金鹰奖优秀电视剧奖。2013年，《士兵突击》被列入中央宣传部、教育部、共青团中央决定向全国青少年推荐的100部优秀影视片",
        postId: 5,
        music: {
          url: 'http://mp3.qqmusic.cc/yq/212877900.mp3',  //音乐链接
          coverImg: "http://y.gtimg.cn/music/photo_new/T002R300x300M000003bSL0v4bpKAx.jpg?max_age=2592000", //专辑封面URL
          title: "等你下课(with 杨瑞代) - 周杰伦"  //音乐标题
        }
      }
    ],
    currentArticle: {},
    // innerAudioContext: null,
    // 共用一个播放器，所以只需要一个控制开关
    isPlayMusic: false,
    // 当前页面也要保存一份是否收藏的结果，以渲染当前页面的收藏图片
    isCurrentCollected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this

    // 获取传递到当前页面的查询参数，并取到对应的文章项
    var articleID = options.articleID;
    this.setData({
      currentArticle: this.data.articleLists[articleID]
    })

    // 引用整个APP创建的 内部audio上下文，并赋给当前页面的数据
    var app = getApp()

    // 这个地方是个bug
    // console.log(app.globalData.innerAudioContext)
    // console.log(app.globalData.innerAudioContext.paused)
    // 判断是否当前页面的音乐在播放
    function isCurrentMusicPlay() {
      return app.globalData.innerAudioContext.src === _this.data.currentArticle.music.url
    }
    if (app.globalData.musicPlayerPlay && isCurrentMusicPlay()) {
      this.setData({
        isPlayMusic: true
      })
    }
    // 音乐播放结束，切换为原始状态
    app.globalData.innerAudioContext.onEnded(()=>{
      _this.setData({
        isPlayMusic:false
      })
    })

    // 页面加载了，或初始化storage，或获取storage渲染初始状态
    var key = 'collection_article_' + this.data.currentArticle.postId
    wx.getStorage({
      key: 'collectRecord',
      success: function (res) {
        var collectRecord = res.data
        // 2、如果当前页面被设置过收藏，则渲染收藏结果
        if (collectRecord[key] !== undefined) {
          console.log(collectRecord[key])
          _this.setData({
            isCurrentCollected: collectRecord[key]
          })
        }
      },
      // 1、失败了意味没有此本地记录，就初始化
      fail: function () {
        wx.setStorage({
          key: 'collectRecord',
          data: {}
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('hide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('unload')
    // 也是奇怪了，销毁实例，js中是这样的 
    //this.data.innerAudioContext=null
    // 小程序里却不可行，定义了自己的方法
    // this.data.innerAudioContext.destroy()
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  /**
   * 播放音乐的 内部audio上下文
   */
  playMusic: function () {
   
    var _this=this
    // 而是在点击下一首歌时，重置url
    // 这个地方要区分要区分当前页面的播放暂停，还是新进入页面的开始播放
    // 新进入页面才需要设置url
    var app = getApp()
    if (app.globalData.innerAudioContext.src != this.data.currentArticle.music.url) {
      app.globalData.innerAudioContext.src = this.data.currentArticle.music.url
    }
    if (!this.data.isPlayMusic) {
      app.globalData.innerAudioContext.play()
      app.globalData.musicPlayerPlay = true
    } else {
      app.globalData.innerAudioContext.pause()
      app.globalData.musicPlayerPlay = false
    }
    app.globalData.innerAudioContext.onPlay(()=>{
      _this.setData({
        isPlayMusic: !this.data.isPlayMusic
      })
    })
    
  },

  /**
   * 点击收藏，切换收藏与取消，并修改storage中对应那条数据
   */
  collect: function () {
    var key = 'collection_article_' + this.data.currentArticle.postId

    this.setData({
      isCurrentCollected: !this.data.isCurrentCollected
    })
    var _this = this
    wx.getStorage({
      key: 'collectRecord',
      success: function (res) {
        var collectRecord = res.data
        collectRecord[key] = _this.data.isCurrentCollected
        wx.setStorage({
          key: 'collectRecord',
          data: collectRecord
        })
      }
    })
  }
})