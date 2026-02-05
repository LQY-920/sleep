import { useState, useEffect } from 'react'
import { View, Text, Picker } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getUserInfo, updateCheckinTime, UserInfo } from '../../store/user'
import './checkin-time.scss'

export default function CheckinTimeSettings() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [morningStart, setMorningStart] = useState('06:00')
  const [morningEnd, setMorningEnd] = useState('09:00')
  const [eveningStart, setEveningStart] = useState('21:00')
  const [eveningEnd, setEveningEnd] = useState('23:00')

  useEffect(() => {
    loadUserInfo()
  }, [])

  const loadUserInfo = async () => {
    const info = await getUserInfo()
    setUserInfo(info)
    setMorningStart(info.morningCheckinStart || '06:00')
    setMorningEnd(info.morningCheckinEnd || '09:00')
    setEveningStart(info.eveningCheckinStart || '21:00')
    setEveningEnd(info.eveningCheckinEnd || '23:00')
  }

  const handleMorningStartChange = (e) => {
    setMorningStart(e.detail.value)
  }

  const handleMorningEndChange = (e) => {
    setMorningEnd(e.detail.value)
  }

  const handleEveningStartChange = (e) => {
    setEveningStart(e.detail.value)
  }

  const handleEveningEndChange = (e) => {
    setEveningEnd(e.detail.value)
  }

  const handleSave = async () => {
    // Validate time ranges
    if (morningStart >= morningEnd) {
      Taro.showToast({ title: '早签到开始时间需早于结束时间', icon: 'none' })
      return
    }
    if (eveningStart >= eveningEnd) {
      Taro.showToast({ title: '晚签到开始时间需早于结束时间', icon: 'none' })
      return
    }

    await updateCheckinTime({
      morningCheckinStart: morningStart,
      morningCheckinEnd: morningEnd,
      eveningCheckinStart: eveningStart,
      eveningCheckinEnd: eveningEnd
    })

    Taro.showToast({ title: '保存成功', icon: 'success' })
    setTimeout(() => {
      Taro.navigateBack()
    }, 1500)
  }

  if (!userInfo) {
    return (
      <View className='checkin-time-settings'>
        <View className='loading'>
          <Text>加载中...</Text>
        </View>
      </View>
    )
  }

  return (
    <View className='checkin-time-settings'>
      <View className='container'>
        <View className='section'>
          <View className='section-header'>
            <Text className='section-title'>早签到时间</Text>
            <Text className='section-hint'>设置早上签到的有效时间段</Text>
          </View>
          <View className='time-row'>
            <View className='time-item'>
              <Text className='time-label'>开始时间</Text>
              <Picker mode='time' value={morningStart} onChange={handleMorningStartChange}>
                <View className='time-picker'>
                  <Text className='time-value'>{morningStart}</Text>
                </View>
              </Picker>
            </View>
            <View className='time-separator'>
              <Text>至</Text>
            </View>
            <View className='time-item'>
              <Text className='time-label'>结束时间</Text>
              <Picker mode='time' value={morningEnd} onChange={handleMorningEndChange}>
                <View className='time-picker'>
                  <Text className='time-value'>{morningEnd}</Text>
                </View>
              </Picker>
            </View>
          </View>
        </View>

        <View className='section'>
          <View className='section-header'>
            <Text className='section-title'>晚签到时间</Text>
            <Text className='section-hint'>设置晚上签到的有效时间段</Text>
          </View>
          <View className='time-row'>
            <View className='time-item'>
              <Text className='time-label'>开始时间</Text>
              <Picker mode='time' value={eveningStart} onChange={handleEveningStartChange}>
                <View className='time-picker'>
                  <Text className='time-value'>{eveningStart}</Text>
                </View>
              </Picker>
            </View>
            <View className='time-separator'>
              <Text>至</Text>
            </View>
            <View className='time-item'>
              <Text className='time-label'>结束时间</Text>
              <Picker mode='time' value={eveningEnd} onChange={handleEveningEndChange}>
                <View className='time-picker'>
                  <Text className='time-value'>{eveningEnd}</Text>
                </View>
              </Picker>
            </View>
          </View>
        </View>

        <View className='tips'>
          <Text className='tips-title'>温馨提示</Text>
          <Text className='tips-content'>
            • 只有在设定的时间段内才能进行签到{'\n'}
            • 建议早签到设置在早上6:00-9:00{'\n'}
            • 建议晚签到设置在晚上21:00-23:00
          </Text>
        </View>

        <View className='save-btn' onClick={handleSave}>
          <Text>保存设置</Text>
        </View>
      </View>
    </View>
  )
}
