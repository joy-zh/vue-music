import {playMode} from 'common/js/config'
import {loadSearch} from 'common/js/cache'
const state = {
	singer: {},
	playing: false, //播放 暂停
	fullScreen: false, //全屏 缩小
	playList: [], //播放列表
	sequenceList: [], //排序列表  顺序播放  随机播放  单曲循环
	mode: playMode.sequence, //播放模式
	currentIndex: -1,  //当前播放
	disc: {},    //歌单
	topList: {},  //排行榜列表
	searchHistory: loadSearch() //历史记录
	
}

export default state
