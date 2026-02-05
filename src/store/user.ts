import Taro from '@tarojs/taro'

// User data interface
export interface UserInfo {
  id: string
  nickname: string
  avatar: string
  tag: string
  motto: string
  friendCode: string
  morningCheckinStart: string
  morningCheckinEnd: string
  eveningCheckinStart: string
  eveningCheckinEnd: string
  createdAt: string
  updatedAt: string
}

// Default user data
const defaultUserInfo: UserInfo = {
  id: '',
  nickname: '',
  avatar: '',
  tag: '',
  motto: '',
  friendCode: '',
  morningCheckinStart: '06:00',
  morningCheckinEnd: '09:00',
  eveningCheckinStart: '21:00',
  eveningCheckinEnd: '23:00',
  createdAt: '',
  updatedAt: ''
}

const STORAGE_KEY = 'user_info'

// Generate unique friend code (6 characters)
export function generateFriendCode(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
  let code = ''
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

// Generate unique user ID
export function generateUserId(): string {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

// Get user info from storage
export async function getUserInfo(): Promise<UserInfo> {
  try {
    const data = await Taro.getStorage({ key: STORAGE_KEY })
    return { ...defaultUserInfo, ...data.data }
  } catch {
    return defaultUserInfo
  }
}

// Save user info to storage
export async function saveUserInfo(userInfo: Partial<UserInfo>): Promise<UserInfo> {
  const currentInfo = await getUserInfo()
  const updatedInfo: UserInfo = {
    ...currentInfo,
    ...userInfo,
    updatedAt: new Date().toISOString()
  }

  // Initialize new user
  if (!updatedInfo.id) {
    updatedInfo.id = generateUserId()
    updatedInfo.createdAt = new Date().toISOString()
  }

  // Generate friend code if not exists
  if (!updatedInfo.friendCode) {
    updatedInfo.friendCode = generateFriendCode()
  }

  await Taro.setStorage({ key: STORAGE_KEY, data: updatedInfo })
  return updatedInfo
}

// Update nickname
export async function updateNickname(nickname: string): Promise<UserInfo> {
  return saveUserInfo({ nickname })
}

// Update avatar
export async function updateAvatar(avatar: string): Promise<UserInfo> {
  return saveUserInfo({ avatar })
}

// Update tag
export async function updateTag(tag: string): Promise<UserInfo> {
  return saveUserInfo({ tag })
}

// Update motto
export async function updateMotto(motto: string): Promise<UserInfo> {
  return saveUserInfo({ motto })
}

// Update check-in time settings
export async function updateCheckinTime(settings: {
  morningCheckinStart?: string
  morningCheckinEnd?: string
  eveningCheckinStart?: string
  eveningCheckinEnd?: string
}): Promise<UserInfo> {
  return saveUserInfo(settings)
}

// Initialize user (call on first launch)
export async function initializeUser(): Promise<UserInfo> {
  const userInfo = await getUserInfo()
  if (!userInfo.id) {
    return saveUserInfo({})
  }
  return userInfo
}
