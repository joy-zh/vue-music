import {playMode} from 'common/js/config'
const state = {
	singer: {},
	playing: false, //播放 暂停
	fullScreen: false, //全屏 缩小
	playList: [], //播放列表
	sequenceList: [], //排序列表  顺序播放  随机播放  单曲循环
	mode: playMode.sequence, //播放模式
	currentIndex: -1,  //当前播放
	disc: {}    //歌单
}

export default state
