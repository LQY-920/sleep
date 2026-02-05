import { useState, useEffect } from 'react'
import { View, Text, Image, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {
  getUserInfo,
  updateNickname,
  updateTag,
  updateMotto,
  updateAvatar,
  initializeUser,
  UserInfo
} from '../../store/user'
import './index.scss'

export default function Profile() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [isEditingNickname, setIsEditingNickname] = useState(false)
  const [isEditingTag, setIsEditingTag] = useState(false)
  const [isEditingMotto, setIsEditingMotto] = useState(false)
  const [tempValue, setTempValue] = useState('')

  useEffect(() => {
    loadUserInfo()
  }, [])

  const loadUserInfo = async () => {
    const info = await initializeUser()
    setUserInfo(info)
  }

  const handleChooseAvatar = async () => {
    try {
      const res = await Taro.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera']
      })
      if (res.tempFilePaths && res.tempFilePaths[0]) {
        const updatedInfo = await updateAvatar(res.tempFilePaths[0])
        setUserInfo(updatedInfo)
        Taro.showToast({ title: '头像已更新', icon: 'success' })
      }
    } catch (err) {
      console.log('Choose avatar cancelled')
    }
  }

  const startEditNickname = () => {
    setTempValue(userInfo?.nickname || '')
    setIsEditingNickname(true)
  }

  const saveNickname = async () => {
    if (tempValue.trim()) {
      const updatedInfo = await updateNickname(tempValue.trim())
      setUserInfo(updatedInfo)
      Taro.showToast({ title: '昵称已更新', icon: 'success' })
    }
    setIsEditingNickname(false)
  }

  const startEditTag = () => {
    setTempValue(userInfo?.tag || '')
    setIsEditingTag(true)
  }

  const saveTag = async () => {
    const updatedInfo = await updateTag(tempValue.trim())
    setUserInfo(updatedInfo)
    setIsEditingTag(false)
    if (tempValue.trim()) {
      Taro.showToast({ title: '标签已更新', icon: 'success' })
    }
  }

  const startEditMotto = () => {
    setTempValue(userInfo?.motto || '')
    setIsEditingMotto(true)
  }

  const saveMotto = async () => {
    const updatedInfo = await updateMotto(tempValue.trim())
    setUserInfo(updatedInfo)
    setIsEditingMotto(false)
    if (tempValue.trim()) {
      Taro.showToast({ title: '座右铭已更新', icon: 'success' })
    }
  }

  const copyFriendCode = () => {
    if (userInfo?.friendCode) {
      Taro.setClipboardData({
        data: userInfo.friendCode,
        success: () => {
          Taro.showToast({ title: '已复制朋友码', icon: 'success' })
        }
      })
    }
  }

  const goToAddFriend = () => {
    Taro.navigateTo({ url: '/pages/settings/add-friend' })
  }

  const goToCheckinSettings = () => {
    Taro.navigateTo({ url: '/pages/settings/checkin-time' })
  }

  const goToBudgetSettings = () => {
    Taro.showToast({ title: '功能开发中', icon: 'none' })
  }

  const goToCategorySettings = () => {
    Taro.showToast({ title: '功能开发中', icon: 'none' })
  }

  const goToFriendList = () => {
    Taro.showToast({ title: '功能开发中', icon: 'none' })
  }

  if (!userInfo) {
    return (
      <View className='profile'>
        <View className='loading'>
          <Text>加载中...</Text>
        </View>
      </View>
    )
  }

  return (
    <View className='profile'>
      <View className='container'>
        <View className='user-card'>
          <View className='avatar-section' onClick={handleChooseAvatar}>
            {userInfo.avatar ? (
              <Image className='avatar' src={userInfo.avatar} mode='aspectFill' />
            ) : (
              <View className='avatar-placeholder' />
            )}
            <View className='edit-hint'>点击更换头像</View>
          </View>
          <View className='user-info'>
            {isEditingNickname ? (
              <View className='edit-row'>
                <Input
                  className='edit-input'
                  value={tempValue}
                  onInput={(e) => setTempValue(e.detail.value)}
                  placeholder='输入昵称'
                  maxlength={12}
                  focus
                  onBlur={saveNickname}
                  onConfirm={saveNickname}
                />
              </View>
            ) : (
              <Text className='nickname' onClick={startEditNickname}>
                {userInfo.nickname || '点击设置昵称'}
              </Text>
            )}

            {isEditingTag ? (
              <View className='edit-row'>
                <Input
                  className='edit-input small'
                  value={tempValue}
                  onInput={(e) => setTempValue(e.detail.value)}
                  placeholder='输入标签'
                  maxlength={8}
                  focus
                  onBlur={saveTag}
                  onConfirm={saveTag}
                />
              </View>
            ) : (
              <Text className='tag' onClick={startEditTag}>
                标签：{userInfo.tag || '点击设置'}
              </Text>
            )}

            {isEditingMotto ? (
              <View className='edit-row'>
                <Input
                  className='edit-input small'
                  value={tempValue}
                  onInput={(e) => setTempValue(e.detail.value)}
                  placeholder='输入座右铭'
                  maxlength={20}
                  focus
                  onBlur={saveMotto}
                  onConfirm={saveMotto}
                />
              </View>
            ) : (
              <Text className='motto' onClick={startEditMotto}>
                座右铭：{userInfo.motto || '点击设置'}
              </Text>
            )}
          </View>
        </View>

        <View className='friend-code-section'>
          <Text className='section-title'>我的朋友码</Text>
          <View className='code-display' onClick={copyFriendCode}>
            <Text className='code'>{userInfo.friendCode || '生成中...'}</Text>
            <Text className='copy-hint'>点击复制</Text>
          </View>
          <View className='add-friend-btn' onClick={goToAddFriend}>
            <Text>添加朋友</Text>
          </View>
        </View>

        <View className='settings-section'>
          <Text className='section-title'>设置</Text>
          <View className='setting-item' onClick={goToCheckinSettings}>
            <Text className='setting-label'>签到时间设置</Text>
            <View className='setting-right'>
              <Text className='setting-value'>
                {userInfo.morningCheckinStart}-{userInfo.morningCheckinEnd}
              </Text>
              <Text className='setting-arrow'>›</Text>
            </View>
          </View>
          <View className='setting-item' onClick={goToBudgetSettings}>
            <Text className='setting-label'>预算设置</Text>
            <Text className='setting-arrow'>›</Text>
          </View>
          <View className='setting-item' onClick={goToCategorySettings}>
            <Text className='setting-label'>分类管理</Text>
            <Text className='setting-arrow'>›</Text>
          </View>
          <View className='setting-item' onClick={goToFriendList}>
            <Text className='setting-label'>朋友列表</Text>
            <Text className='setting-arrow'>›</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
