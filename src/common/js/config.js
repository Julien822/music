export const HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'http://106.12.92.32:3000'
export const ERR_OK = 200

export const playMode = {
  sequence: 0,
  loop: 1,
  random: 2
}
