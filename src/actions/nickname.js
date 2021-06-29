export const UPDATE_NICK_NAME = 'UPDATE_NICK_NAME'

export const updateNickname = (nickname) => ({
  type: UPDATE_NICK_NAME,
  payload: nickname
})