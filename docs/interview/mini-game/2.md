# 小程序实战技巧
## 一、实现导航栏tab和swiper联动
导航栏tab和swiper联动原理是通过桥梁curTab，这个属性是swiper的current属性值，同时也表示是导航栏的哪个tab
```jsx
// index.tsx
import React, { useState } from 'react'
import { View, Swiper, SwiperItem, ScrollView } from '@tarojs/components'
import classNames from 'classnames'
import './index.less'
import dataList from './data'

export default function Index(): JSX.Element {
  const [curTab, setCurTab] = useState<number>(0)  // 当前是哪个tab

  const handleTabChange = (tabIndex: number): void => {
    setCurTab(tabIndex)
  }
  const handleSwiperChange = (e): void => {
    setCurTab(e.target.current)
  }

  return (
    <View className='wrapper'>
      <ScrollView
        scrollX
        scrollWithAnimation
        scrollIntoView={'id' + curTab} // 自动滑动到某个View
        className='scroll-top'
      >
        {
          dataList.map((item, index) => (
            <View
              id={'id' + index}
              className={classNames('top-item', index == curTab ? 'active' : '')}
              key={item.name}
              onClick={handleTabChange.bind(this, index)}
            >{item.name}</View>
          ))
        }
      </ScrollView>
      <View className='swiper-content'>
        <Swiper
          className='swiper'
          current={curTab}
          duration={300}
          onChange={handleSwiperChange}
        >
          {
            dataList.map(item => (
              <SwiperItem className='swiper-item' key={item.name}>
                <ScrollView scrollY style='height:100%;'>
                  {item.list}
                </ScrollView>
              </SwiperItem>
            ))
          }
        </Swiper >
      </View>
    </View >
  )
} 
```
data.js
```js
const dataList = [{
    name: '梨花雪',
    list: [
        '时光年轮一圈圈转着',
        '现在，他站在原地，回首望去，从前点点滴滴，琐琐碎碎',
        '猛然发现，自己已走过了这么多',
        '他想，如果再次遇到下雪天，他会毫不犹豫迎上去',
        '因为那里，有旧时光味道。他仍在怀念，仍在留恋。怀念，白雪纷扬日子。'
    ]
}, {
    name: '冰雪消融',
    list: [
        '友情是每个人都应有的东西，而且相当的珍贵',
        '在朋友之间，难免会产生分歧，让友情结冰',
        '但我现在知道，友情上消融的冰雪是暖的。'
    ]
}, {
    name: '境由心造',
    list: [
        '有人安于某种生活，有人不能',
        '因此能安于自已目前处境的不妨就如此生活下去，不能的只好努力另找出路',
        '你无法断言哪里才是成功的，也无法肯定当自已到达了某一点之后，会不会快乐',
        '有些人永远不会感到满足，他的快乐只建立在不断地追求与争取的过程之中',
        '因此，他的目标不断地向远处推移。这种人的快乐可能少，但成就可能大。'
    ]
}, {
    name: '处世之道',
    list: [
        '有一群豪猪，就是野猪啊，身上长刺的那种野猪',
        '大家挤在一起过冬，它们老有一个困惑',
        '就是不知道大家在一起以什么样的距离最好',
        '离得稍微远一点，冬天就冷，互相借不着热气，大家就往一起凑凑',
        '结果一旦凑近了，彼此的刺都扎着对方了',
        '就又开始远离',
        '但是再远的话大家又觉得寒冷',
        '又想借助别人的温暖，就再凑，凑着凑着又受伤了',
        '然后再拉远，多少次磨合以后豪猪们终于找到了一种最最恰如其分的距离',
        '那就是在彼此不伤害的前提下，保持着群体的温暖。'
    ],
}, {
    name: '夏天',
    list: [
        '夏天的夜色很美，清爽的晚风哼着小曲来到了我们身边',
        '给我们送来了一丝丝凉意',
        '夜空中，星星眨着眼睛，静静地听着月亮姐姐讲故事',
        '这动听的故事，激发了星星们的想象',
        '星星们都在窃窃私语地讨论着，难道是在讨论演讲稿，到哪里发表演讲吗',
        '周围一片宁静，只有晚风在低低地吟唱',
        '月光洒向永不停息的小河，洒向盛开在夜晚的流星花，仿佛一切都活了',
        '萤火虫提着小灯笼，殷勤地照看着花儿、草儿，让他们快快长大、开花。'
    ]
}, {
    name: '风筝',
    list: [
        '一只跌落在脚边的风筝把我拉回到现实',
        '是啊！无论风筝飞的多高、多远，但都离不开手中的丝线',
        '最后还是要回到地面。人不也一样吗',
        '长大了，成家了，但无论离开故乡多远，离开亲人多远，你的心还在故乡，还在父母亲人的身边啊！'
    ]
}, {
    name: '春雨',
    list: ['我赤脚站到院中，踩在青石板上',
        '任雨水在我脸上流淌，我不禁抬起头望着那天空',
        '努力的想要看清春雨的样子，却怎么也看不清',
        '只听得见耳边的声音，那么清晰那么让人心情舒畅',
        '这温柔的春雨，带来他最动听的声音，击打着石台',
        '发出清脆的响声，声音透过雨帘，透进了我的心。'
    ]
}, {
    name: '拥有',
    list: [
        '拥有诚实，就舍弃了虚伪',
        '拥有充实，就舍弃了无聊；拥有踏实，就舍弃了浮躁',
        '不论是有意的丢弃，还是意外的失去，只要曾经真实的拥有，在一些时候，大度的舍弃不也是一种境界吗',
        '在不经意所失去的， 你还可以重新去争取 ',
        '丢掉了爱心， 你可以在春天里寻觅， 丢掉了意志， 你要在冬天重新磨砺。',
        '但是丢掉了懒惰， 你却不能把它拾起 ',
        '欲望太多， 反成了累赘， 还有什么比拥有淡泊的心胸， 更能让自己充实、 满足呢？ '
    ]
}, {
    name: "信任",
    list: [
        '信任一个人有时需要许多年的时间',
        '因此，有些人甚至终其一生也没有真正信任过任何一个人',
        '倘若你只信任那些能够讨你欢心的人，那是毫无意义的',
        '倘若你信任你所见到的每一个人，那你就是一个傻瓜',
        '倘若你毫不犹疑、匆匆忙忙地去信任一个人，那你就可能也会那么快地被你所信任的那个人背弃',
        '倘若你只是出于某种肤浅的需要去信任一个人，那么旋踵而来的可能就是恼人的猜忌和背叛',
        '但倘若你迟迟不敢去信任一个值得你信任的人，那永远不能获得爱的甘甜和人间的温暖，你的一生也将会因此而黯淡无光。'
    ]
}, {
    name: '生命',
    list: [
        '应当承认，生命就是希望',
        '应当说，卑鄙和庸俗不该得意过早，不该误认为它们已经成功地消灭了高尚和真纯',
        '伪装也同样不能持久，因为时间像一条长河在滔滔冲刷',
        '卑鄙者、奸商和俗棍不可能永远戴着教育家、诗人和战士的桂冠',
        '在他们畅行无阻的生涯尽头，他们的后人将长久地感到羞辱。'
    ]
}, {
    name: '闲情',
    list: [
        '终日休息着，睡和醒的时间界限，便分得不清',
        '有时在中夜，觉得精神很圆满',
        '——听得疾雷杂以疏雨，每次电光穿入',
        '将窗台上的金钟花，轻淡清澈的映在窗帘上，又急速的隐抹了去',
        '而余影极分明的，印在我的脑膜上。我看见“自然”的淡墨画，这是第一次。'
    ]
}, {
    name: '背影',
    list: [
        '我与父亲不相见已二年余了，我最不能忘记的是他的背影',
        '那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子',
        '我从北京到徐州，打算跟着父亲奔丧回家',
        '到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪',
        '父亲说，“事已如此，不必难过，好在天无绝人之路！”'
    ]
}, {
    name: '乡愁',
    list: [
        '经过多年的风雨磨砺，我们突然意识到',
        '那些曾在生命中抚慰过我们的精神驿站',
        '那些曾温暖和光明过我们的贫寒童年的火光',
        '却在不经意间，渐渐地离我们远了',
        '模糊了——譬如母亲、譬如童年的老屋、隔壁家羊角辫摇摇摆摆的阿娇一种难以驱遣的巨大空虚和孤寂袭来',
        '泪水顿时涌上来。这时，我们患了一种蔓延了几个世纪的病——乡愁'
    ]
}, {
    name: '天池',
    list: [
        '从第一眼瞥见天池到和她告别，我一直沉默不语',
        '我不愿用一点声音，来弹破这宁静',
        '天池一日我的心情是宁静的，这是我最珍爱的心境',
        '山光湖色随着日影的移动而变幻',
        '午餐后，睡了一会儿，一阵冷气袭来，就像全身浴在冰山雪水之中',
        '我悄悄起来，不愿惊醒别人，独自走到廊上',
        '再次仔细观察天池：雪峰与杉林，白与黑相映，格外分明',
        '雪山后涌起的白云给强烈阳光照得白银一样刺眼。'
    ]
}, {
    name: '秋天',
    list: [
        '秋姑娘又来到了果园里',
        '果园里的果子成熟了，葡萄架上挂满了一串串紫里透红的大葡萄',
        '它们相互掩映着自己的身体，太阳出来了',
        '照射在葡萄上就像一颗颗透明的紫色宝石',
        '桔树上，一个个金黄色的桔子，让人看了忍不住想咬一口',
        '假如你剥开桔皮，你就可以看见一瓣瓣桔子就像一弯弯亏月时的月亮，晶莹剔透。'
    ]
}, {
    name: '早晨',
    list: [
        '清晨的江边，没有车水马龙的喧嚣',
        '没有人声鼎沸的吵杂，也没有让人深感压抑的匆匆人群',
        '清晨的江边，有的只是垂柳的迎风飘拂',
        '有的只是枝头小鸟的婉转歌唱',
        '有的只是江风中蕴含着的淡淡的腥味',
        '清晨的江边，很静',
        '静的可以抚平内心的烦躁',
        '清晨的江边，很美，绿树红花、微风拂面，不允许你携带任何忧伤。'
    ]
}, {
    name: '栾树',
    list: [
        '栾树 十二月初，深圳，我在校园的青石板小路上捡到了栾树的蒴果',
        ' 栾树蒴果看上去有种似曾相识的漂亮--三瓣又薄又脆的果皮围拢成三棱形',
        '前端小心翼翼地开着口。'
    ]
}, {
    name: '荷塘',
    list: [
        '又是一年荷塘色 初夏早上六点',
        '清亮透明的月儿还躲藏在云朵里，不忍离去',
        '校园内行人稀少，我骑着单车，晃晃悠悠的耷拉着星松的睡眼',
        '校园内景色如常，照样是绿。'
    ]
}]

export default dataList
```
index.less
```less
page{
  height: 100%;
}

.wrapper {
    width: 100%;
    height: 100%;
    background: #F8F8F8;

    display: flex;
    flex-direction: column;
    .scroll-top {
      height: 80rpx;
      line-height: 80rpx;
      width: auto;
      background: #FFFFFF;
      box-shadow:0rpx 1rpx 0rpx 0rpx rgba(235,235,235,1);
      box-sizing: border-box;
      overflow: scroll;
      white-space: nowrap;
      .top-item {
        display: inline-block;
        text-align: center;
        font-size: 30rpx;
        color: #333;
        padding:0 30rpx;
        transition: all 0.3s;
      }
      .active {
        font-size: 32rpx;
        font-weight: 600;
        color: #E42828;
        position: relative;
        &:after{
          content: '';
          position: absolute;
          height: 6rpx;
          width: 60rpx;
          background-color: #E42828;
          left: 50%;
          transform: translate(-50%);
          bottom: 4rpx;
          border-radius:3rpx;
        }
      }
    }
    .swiper-content{
      flex:1;
      overflow: scroll;
      .swiper {
        box-sizing: border-box;
        padding: 2rpx 10rpx;
        height: 100%;
        .swiper-item {
          font-size: 32rpx;
          color: #333;
          line-height: 60rpx;
          text-indent: 60rpx;
        }
      }
    }
  }
```
## 二、scroll-view高度动态计算
```jsx
export default function Index(): JSX.Element {
  return (
    <View className='wrapper'>
      <ScrollView
        scrollX
        scrollWithAnimation
        scrollIntoView={'id' + curTab} // 自动滑动到某个View
        className='scroll-top'
      >
        {
          dataList.map((item, index) => (
            <View
              id={'id' + index}
              className={classNames('top-item', index == curTab ? 'active' : '')}
              key={item.name}
              onClick={handleTabChange.bind(this, index)}
            >{item.name}</View>
          ))
        }
      </ScrollView>
      <View className='swiper-content'>
        <Swiper
          className='swiper'
          current={curTab}
          duration={300}
          onChange={handleSwiperChange}
        >
          {
            dataList.map(item => (
              <SwiperItem className='swiper-item' key={item.name}>
                <ScrollView scrollY style='height:100%;'>
                  {item.list}
                </ScrollView>
              </SwiperItem>
            ))
          }
        </Swiper >
      </View>
    </View >
  )
} 
```
### 方法1：js动态计算
首先需要了解 windowHeight 概念，可使用窗口高度，即：屏幕高度(screenHeight) - 导航(tabbar)高度 - 头部高度。在不含导航（tabbar）的页面，windowHeight = 屏幕高度 - 头部高度。

然后需要知道px和rpx互相转换的方法，因为rpx是按750的设计稿来计算的尺寸，rpx转px只需要乘以ratio即可。
```js
const ratio = windowWidth / 750   // rpx和px的比例，rpx * ratio= px
```
scroll-view的高度 = windowHeight - tab导航栏的高度
```jsx
export default function Index(): JSX.Element {
  const [height, setHeight] = useState<number>(0) // 

  useEffect(() => {
    const { windowHeight, windowWidth} = Taro.getSystemInfoSync()
    const ratio = windowWidth / 750   // rpx和px的比例
    setHeight(windowHeight - 80 * ratio)  // windowHeight是可使用高度
  }, [])

  return (
    <View className='wrapper'>
      {/*省略*/}
      <View className='swiper-content' style={{ height: height + 'px' }}>
        <Swiper
          className='swiper'
          current={curTab}
          duration={300}
          onChange={handleSwiperChange}
          style='height:100%'
        >
          {
            dataList.map(item => (
              <SwiperItem className='swiper-item' key={item.name}>
                <ScrollView scrollY style='height:100%;'>
                  {item.list}
                </ScrollView>
              </SwiperItem>
            ))
          }
        </Swiper >
      </View>
    </View >
  )
} 
```
### 方法2：css3 calc
```jsx
<View className='swiper-content' style={{ height: `calc(100vh-80rpx)` }}>
    <Swiper
        className='swiper'
        current={curTab}
        duration={300}
        onChange={handleSwiperChange}
        style='height:100%'
    >
        {
        dataList.map(item => (
            <SwiperItem className='swiper-item' key={item.name}>
            <ScrollView scrollY style='height:100%;'>
                {item.list}
            </ScrollView>
            </SwiperItem>
        ))
        }
    </Swiper >
</View>
```
### 方法3：flex布局
通过给 wrapper 设置 ```display: flex; flex-direction: column;```，然后给swiper-content设置```flex:1;```，这样就可以实现自适应高度。这是最简单的方法。
## 三、地图Map实现气泡功能
```jsx
import React, { useState, useEffect, useMemo } from 'react'
import Taro from '@tarojs/taro'
import { View, Map } from '@tarojs/components'
import { request } from '@/base/util'
import './index.less'

interface Location {
  longitude: number,
  latitude: number
}

interface MarkersInfo {
  hasMarkers: Boolean
  markers: Array<any>
}

const KEY = 'LTDBZ-YI3K6-6L7SX-MCPFU-XO7OV-EOBMU'

export default function Place(): JSX.Element {
  const [curLocation, setCurlocation] = useState<Location>({ longitude: 0, latitude: 0 })
  const [markersInfo, setMarkersInfo] = useState<MarkersInfo>({ hasMarkers: false, markers: [] })

  useEffect((): void => {
    getLocation()
  }, [])

  useEffect(() => {
    // 根据关键词搜索地方
    const getPlacesByKeyWord = async (keyword: string): Promise<any> => {
      const { status = 0, data = [] } = await request({
        url: 'https://apis.map.qq.com/ws/place/v1/search',
        keyword: encodeURI(keyword),
        boundary: 'region(深圳,0)',
        page_size: 20,
        page_index: 1,
        orderby: '_distance',
        key: KEY
      })
      if (status === 0) {
        const markerArr = data.map((item, index) => ({
          longitude: item.location.lng,
          latitude: item.location.lat,
          title: item.title,
          iconPath: '',
          id: index + 1,
          width: 20,
          height: 30,
          callout: {
            content: item.title,
            display: 'BYCLICK',
            textAlign: 'center',
            padding: 10,
            borderRadius: 8
          }
        }))
        markerArr.push({
          longitude: curLocation.longitude,
          latitude: curLocation.latitude,
          title: '您的位置',
          iconPath: '',
          id: 0,
          width: 20,
          height: 30,
          callout: {
            content: '您的位置',
            display: 'BYCLICK',
            textAlign: 'center',
            padding: 10,
            borderRadius: 8
          }
        })
        setMarkersInfo({ hasMarkers: true, markers: markerArr })
      }
    }
    curLocation.longitude && getPlacesByKeyWord('餐厅')
  }, [curLocation])

  // 获取位置
  const getLocation = (): void => {
    Taro.getLocation({
      type: 'gcj02',
      success: function (res) {
        const { longitude, latitude } = res
        setCurlocation({ longitude, latitude })
      }
    })
  }
  const handleMarkerTap = (e): void => {
    const { markerId } = e.detail
    const curMarker = markersInfo.markers.find(t => t.id == markerId)
    const { longitude, latitude } = curMarker
    setCurlocation({ longitude, latitude })
  }
  return (
    <View className='wrapper' style='height:100%'>
      <View style='height:500rpx'>
        {
          markersInfo.hasMarkers ? (
            <Map
              longitude={curLocation.longitude}
              latitude={curLocation.latitude}
              markers={markersInfo.markers}
              scale={12}
              circles={[]}
              polyline={[]}
              style='width:100%;height:100%'
              onMarkerTap={handleMarkerTap}
            ></Map>
          ) : null
        }
      </View>
    </View>
  )
}
```