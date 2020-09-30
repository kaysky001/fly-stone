import React, { ComponentType } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'

import './index.scss'

interface IProps {

}

interface IStates {

}

class Empty extends Component<IProps, IStates>{
  constructor(props: IProps) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View className="empty__container">
        <Image className="image" src="http://cdn.algbb.cn/forum/empty.svg" />
        <View className="title">No Forums Here</View>
        <View className="content">赶快前往论坛社区中发表新的贴子吧</View>
        <Image className="add" src="http://cdn.algbb.cn/forum/add.png" mode="aspectFill" onClick={() => { Taro.navigateTo({ url: '/pages/forumPublish/index' }) }} />
      </View>
    )
  }
}

export default Empty as ComponentType