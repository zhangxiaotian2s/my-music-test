import {
  playMode
} from '@/utils/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequencelist: [],
  mode: playMode.sequence,
  currentIndex: -1
}
export default state
