import * as types from './mutation-types'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

export const selectPlay = function({commit, state}, {list, index}){
	commit(types.SET_SEQUENCE_LIST, list)
	if(state.mode === playMode.random) {
		let randomList = shuffle(list)
		commit(types.SET_PLAY_LIST, randomList)
		index = findIndex(randomList, list[index])
	}else{
		commit(types.SET_PLAY_LIST, list)
	}
	commit(types.SET_CURRENT_INDEX, index)
	commit(types.SET_FULL_SCREEN, true)
	commit(types.SET_PLAYING_STATE, true)
}

export const randomPlay = function({commit}, {list}) {
	commit(types.SET_PLAY_MODE, playMode.random)
	commit(types.SET_SEQUENCE_LIST, list)
	let randomList = shuffle(list)
	commit(types.SET_PLAY_LIST, randomList)
	commit(types.SET_CURRENT_INDEX, 0)
	commit(types.SET_FULL_SCREEN, true)
	commit(types.SET_PLAYING_STATE, true)
}

export const insertSong = function({commit,state}, song) {
	let playlist = state.playList.slice()
	let sequenceList = state.sequenceList.slice()
	let currentIndex = state.currentIndex
	//记录当前歌曲
	let currentSong = playlist[currentIndex]
	
	//当前播放列表中是否有待插入的歌曲 有就返回index
	let fpIndex = findIndex(playlist, song)
	
	//插入歌曲 索引加1
	currentIndex++
	//插入歌曲到当前索引
	playlist.splice(currentIndex, 0, song)
	
	//如果已经包含这首歌
	if(fpIndex > -1){
		//如果当前插入的索引大于列表中搜索到的索引
		if(currentIndex > fpIndex){
			playlist.splice(fpIndex, 1)
			currentIndex--
		}else{
			playlist.splice(fpIndex + 1, 1)
		}
	}
	
	//需要插入到的索引
	let currentSIndex = findIndex(sequenceList, currentSong) + 1
	let fsIndex = findIndex(sequenceList, song)
	
	sequenceList.splice(currentSIndex, 0, song)
	
	if(fsIndex > -1){
		if(currentSIndex > fsIndex){
			sequenceList.splice(fsIndex, 1)
		}else{
			sequenceList.splice(fsIndex + 1, 1)
		}
	}
	
	commit(types.SET_PLAY_LIST, playlist)
	commit(types.SET_SEQUENCE_LIST, sequenceList)
	commit(types.SET_CURRENT_INDEX, currentIndex)
	commit(types.SET_FULL_SCREEN, true)
	commit(types.SET_PLAYING_STATE, true)
}

export const saveSearchHistory = function({commit}, query) {
	
}
function findIndex(list, song){
	return list.findIndex((item) => {
		return item.id === song.id
	})
}
