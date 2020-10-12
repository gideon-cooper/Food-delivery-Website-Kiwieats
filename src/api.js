import request from 'superagent'
const rootUrl = 'http://localhost:3001/api/v1/kiwi'

export function getFood() {
  console.log('YOOOO')
  return request.get(rootUrl).then((res) => {
    console.log('RES', res.body)
    return res.body
  })
}
