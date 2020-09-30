import React, { ComponentType } from 'react'
import { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import { AtTabs, AtTabsPane } from 'taro-ui'

import Topic from '../../components/Exercise/Topic/index'
import Options from '../../components/Exercise/Options/index'
import Status from '../../components/Exercise/Status/index'

import exerciseStore from '../../store/exerciseStore';

import './index.scss'

interface IProps {
  exerciseStore: exerciseStore
}

@inject('exerciseStore')
@observer
class Exam extends Component<IProps, {}> {

  config: Config = {
    navigationBarTitleText: '刷题'
  }

  constructor(props: IProps) {
    super(props);
  }

  async componentDidShow() {
  }

  componentWillUnmount() {
    const { exerciseStore: { resetExerciseDetail } } = this.props
    resetExerciseDetail()
  }


  switchPage(current: number) {
    const { exerciseStore: { setCurrentPage } } = this.props;
    setCurrentPage(current)
  }

  generateTab(): Array<{ title: string }> {
    const { exerciseStore: { topicList } } = this.props;
    return Array.from({ length: topicList.length }).map((_, index) => ({ title: (index + 1).toString() }))
  }

  switchFontSize(type: number): void {
    const { exerciseStore: { fontSizeId, setFontSize } } = this.props;
    setFontSize(fontSizeId + type)
  }

  render() {
    const { exerciseStore: { currentPage, topicList, theme }, exerciseStore } = this.props;
    const tabList = this.generateTab();
    return (
      <View className={`exam-container ${theme}`}>
        <AtTabs
          current={currentPage}
          scroll
          tabList={tabList}
          onClick={this.switchPage.bind(this)}>
          {topicList.map((_, index) => {
            return (
              <AtTabsPane current={currentPage} index={index} key={index}>
                <Topic number={index} exerciseStore={exerciseStore} />
                <Options number={index} exerciseStore={exerciseStore} />
              </AtTabsPane>
            )
          })}
        </AtTabs>
        <Status />
      </View>
    )
  }
}

export default Exam as ComponentType
