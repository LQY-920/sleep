import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Profile() {
  return (
    <View className='profile'>
      <View className='container'>
        <View className='user-card'>
          <View className='avatar-section'>
            <View className='avatar-placeholder' />
            <View className='edit-hint'>点击更换头像</View>
          </View>
          <View className='user-info'>
            <Text className='nickname'>点击设置昵称</Text>
            <Text className='tag'>标签：未设置</Text>
            <Text className='motto'>座右铭：未设置</Text>
          </View>
        </View>

        <View className='friend-code-section'>
          <Text className='section-title'>我的朋友码</Text>
          <View className='code-display'>
            <Text className='code'>XXXXXX</Text>
          </View>
          <View className='add-friend-btn'>
            <Text>添加朋友</Text>
          </View>
        </View>

        <View className='settings-section'>
          <Text className='section-title'>设置</Text>
          <View className='setting-item'>
            <Text className='setting-label'>签到时间设置</Text>
            <Text className='setting-arrow'>›</Text>
          </View>
          <View className='setting-item'>
            <Text className='setting-label'>预算设置</Text>
            <Text className='setting-arrow'>›</Text>
          </View>
          <View className='setting-item'>
            <Text className='setting-label'>分类管理</Text>
            <Text className='setting-arrow'>›</Text>
          </View>
          <View className='setting-item'>
            <Text className='setting-label'>朋友列表</Text>
            <Text className='setting-arrow'>›</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
