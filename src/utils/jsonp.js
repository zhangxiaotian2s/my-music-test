import OrginJsonp from 'jsonp'

export default function jsonp(url, data, options) {
  url += (url.indexOf('?') === -1 ? '?' : '&') + param(data)
  return new Promise((resolve, reject) => {
    OrginJsonp(url, options, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = '';
  for (let k in data) {
    let val = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(data[k])}`
  }
  return url ? url.substring(1) : ''
}
