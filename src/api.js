import request from 'superagent'
const rootUrl = 'http://localhost:3001/api/v1/kiwi'
const authUrl = 'http://localhost:3001/api/v1/'

export function getFood() {
  console.log('YOOOO')
  return request.get(rootUrl).then((res) => {
    console.log('RES', res.body)
    return res.body
  })
}
export function loginUser(userData) {
  return request
    .post(authUrl)
    .send(userData)
    .then((res) => {
      return res.body
    })
}
