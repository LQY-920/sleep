import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Plan() {
  return (
    <View className='plan'>
      <View className='container'>
        <View className='header'>
          <Text className='title'>我的计划</Text>
          <View className='add-btn'>
            <Text>+ 添加</Text>
          </View>
        </View>

        <View className='plan-list'>
          <View className='empty-state'>
            <View className='empty-icon' />
            <Text className='empty-text'>暂无计划</Text>
            <Text className='empty-hint'>点击上方添加按钮创建你的第一个计划</Text>
          </View>
        </View>

        <View className='plan-types'>
          <Text className='section-title'>计划类型说明</Text>
          <View className='type-card'>
            <View className='type-icon pet' />
            <View className='type-info'>
              <Text className='type-name'>宠物喂养</Text>
              <Text className='type-desc'>每天记得给你的小宠物喂食哦~</Text>
            </View>
          </View>
          <View className='type-card'>
            <View className='type-icon plant' />
            <View className='type-info'>
              <Text className='type-name'>植物浇水</Text>
              <Text className='type-desc'>别忘了给你的植物浇水~</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}
