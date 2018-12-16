import jsonp from 'common/js/jasonp'
import {commonParams, options} from './config'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
  const data = Object.assign({}, commonParams, {
    // callback: 'getUCGI46504439254342333',
    // g_tk: 280488151,
    // jsonpCallback: 'getUCGI46504439254342333',
    // loginUin: 742028887,
    // hostUin: 0,
    // format: 'jsonp',
    // inCharset: 'utf8',
    // outCharset: 'utf-8',
    // notice: 0,
    // platform: 'yqq',
    // needNewCode: 0
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })
  return jsonp(url, data, options)
}
