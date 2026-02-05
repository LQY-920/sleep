import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Checkin() {
  return (
    <View className='checkin'>
      <View className='container'>
        <View className='date-info'>
          <Text className='date'>2026年2月5日</Text>
          <Text className='streak'>连续签到 0 天</Text>
        </View>

        <View className='checkin-cards'>
          <View className='checkin-card morning'>
            <View className='card-header'>
              <Text className='card-title'>早签到</Text>
              <Text className='time-range'>06:00 - 09:00</Text>
            </View>
            <View className='card-body'>
              <View className='checkin-btn'>
                <Text>签到</Text>
              </View>
            </View>
          </View>

          <View className='checkin-card evening'>
            <View className='card-header'>
              <Text className='card-title'>晚签到</Text>
              <Text className='time-range'>21:00 - 23:00</Text>
            </View>
            <View className='card-body'>
              <View className='checkin-btn disabled'>
                <Text>未到时间</Text>
              </View>
            </View>
          </View>
        </View>

        <View className='tips'>
          <Text className='tips-title'>签到小贴士</Text>
          <Text className='tips-content'>坚持签到，养成良好的作息习惯！每次签到都会收到专属的正能量激励哦~</Text>
        </View>
      </View>
    </View>
  )
}
