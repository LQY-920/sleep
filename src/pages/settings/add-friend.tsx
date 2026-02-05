import { useState } from 'react'
import { View, Text, Input } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './add-friend.scss'

export default function AddFriend() {
  const [friendCode, setFriendCode] = useState('')

  const handleInputChange = (e) => {
    // Convert to uppercase and filter invalid characters
    const value = e.detail.value.toUpperCase().replace(/[^A-Z0-9]/g, '')
    setFriendCode(value)
  }

  const handleAddFriend = async () => {
    if (friendCode.length !== 6) {
      Taro.showToast({ title: '请输入6位朋友码', icon: 'none' })
      return
    }

    // TODO: Implement actual friend adding logic with backend
    // For now, show a placeholder message
    Taro.showModal({
      title: '提示',
      content: `朋友码 ${friendCode} 验证中...\n\n（此功能需要后端支持，当前为演示模式）`,
      showCancel: false,
      confirmText: '知道了'
    })
  }

  const handlePaste = async () => {
    try {
      const res = await Taro.getClipboardData()
      if (res.data) {
        const code = res.data.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6)
        setFriendCode(code)
        if (code.length === 6) {
          Taro.showToast({ title: '已粘贴朋友码', icon: 'success' })
        }
      }
    } catch (err) {
      console.log('Paste failed')
    }
  }

  return (
    <View className='add-friend'>
      <View className='container'>
        <View className='input-section'>
          <Text className='section-title'>输入朋友码</Text>
          <Text className='section-hint'>请输入好友分享给你的6位朋友码</Text>

          <View className='code-input-wrapper'>
            <Input
              className='code-input'
              type='text'
              value={friendCode}
              onInput={handleInputChange}
              placeholder='请输入朋友码'
              maxlength={6}
            />
            <View className='paste-btn' onClick={handlePaste}>
              <Text>粘贴</Text>
            </View>
          </View>

          <View className='code-display'>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <View key={index} className={`code-box ${friendCode[index] ? 'filled' : ''}`}>
                <Text>{friendCode[index] || ''}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className='add-btn' onClick={handleAddFriend}>
          <Text>添加朋友</Text>
        </View>

        <View className='tips'>
          <Text className='tips-title'>如何获取朋友码？</Text>
          <Text className='tips-content'>
            1. 让好友打开「我的」页面{'\n'}
            2. 在「我的朋友码」区域点击复制{'\n'}
            3. 将朋友码发送给你{'\n'}
            4. 在此页面输入朋友码即可添加
          </Text>
        </View>
      </View>
    </View>
  )
}
