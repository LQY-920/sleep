import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Index() {
  return (
    <View className='index'>
      <View className='container'>
        <View className='header'>
          <View className='user-info'>
            <View className='avatar-placeholder' />
            <View className='user-text'>
              <Text className='nickname'>用户昵称</Text>
              <Text className='checkin-status'>今日未签到</Text>
            </View>
          </View>
        </View>

        <View className='card summary-card'>
          <Text className='card-title'>今日收支</Text>
          <View className='summary-row'>
            <View className='summary-item'>
              <Text className='label'>收入</Text>
              <Text className='amount income'>¥0.00</Text>
            </View>
            <View className='summary-item'>
              <Text className='label'>支出</Text>
              <Text className='amount expense'>¥0.00</Text>
            </View>
            <View className='summary-item'>
              <Text className='label'>结余</Text>
              <Text className='amount balance'>¥0.00</Text>
            </View>
          </View>
        </View>

        <View className='card'>
          <Text className='card-title'>朋友动态</Text>
          <View className='empty-state'>
            <Text className='empty-text'>暂无朋友动态</Text>
            <Text className='empty-hint'>添加朋友后可查看动态</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
