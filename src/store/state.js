import {playMode} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: {}, // 当前歌曲的列表
  sequencelist: {}, // 顺序歌曲播放的列表
  mode: playMode.sequence,
  currentIndex: -1,
}
export default state
