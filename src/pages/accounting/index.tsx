import { View, Text } from '@tarojs/components'
import './index.scss'

export default function Accounting() {
  return (
    <View className='accounting'>
      <View className='container'>
        <View className='tabs'>
          <View className='tab active'>
            <Text>支出</Text>
          </View>
          <View className='tab'>
            <Text>收入</Text>
          </View>
        </View>

        <View className='amount-display'>
          <Text className='currency'>¥</Text>
          <Text className='amount'>0.00</Text>
        </View>

        <View className='categories'>
          <Text className='section-title'>选择分类</Text>
          <View className='category-grid'>
            <View className='category-item'>
              <View className='icon food' />
              <Text>餐饮</Text>
            </View>
            <View className='category-item'>
              <View className='icon transport' />
              <Text>交通</Text>
            </View>
            <View className='category-item'>
              <View className='icon shopping' />
              <Text>购物</Text>
            </View>
            <View className='category-item add'>
              <View className='icon add-icon' />
              <Text>添加</Text>
            </View>
          </View>
        </View>

        <View className='remark-section'>
          <Text className='section-title'>备注</Text>
          <View className='remark-input'>
            <Text className='placeholder'>点击添加备注...</Text>
          </View>
        </View>

        <View className='submit-btn'>
          <Text>确认记账</Text>
        </View>
      </View>
    </View>
  )
}
