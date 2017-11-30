<template>
    <div class="singer">
        <list-view :data="singer">
        	
        </list-view>
    </div>
</template>
<script type="text/javascript">
	import {getSingerList} from 'api/singer'
	import {ERR_OK} from 'api/config'
	import Singer from 'common/js/singer'
	import ListView from 'base/listview/listview'
	
	const HOT_NAME = '热门'
	const HOT_SINGER_LENGTH = 10;
    export default {
		data(){
			return {
				singer: []
			}
		},
		created(){
			this._getSingerList()
		},
		methods:{
			_getSingerList(){
				getSingerList().then((res) => {
					if(res.code == ERR_OK){
						this.singer = this._normalizeSinger(res.data.list);
//						console.log(this.singer)
//						console.log(this._normalizeSinger(this.singer))
					}
				})
			},
			_normalizeSinger(list){
				let map = {
					hot: {
						title: HOT_NAME,
						items: []
					}
				};
				list.forEach((item,index) => {
					if( index < HOT_SINGER_LENGTH ){
						map.hot.items.push(new Singer({
							id: item.Fsinger_mid,
							name: item.Fsinger_name
						}))
					}
					const key = item.Findex;
					if( !map[key] ){
						map[key] = {
							title: key,
							items: []
						}
					}
					map[key].items.push(new Singer({
						id: item.Fsinger_mid,
						name: item.Fsinger_name
					}))
				})
				
				let hot = [];
				let ret = [];
				for(let key in map){
					let val = map[key];
					if( val.title.match(/[a-zA-Z]/) ){
						ret.push( val )
					}else if( val.title.match(/[0-9]/) ){
						
					}else{
						hot.push(val)
					}
				}
				ret.sort((a,b) => {
					return a.title.charCodeAt(0) - b.title.charCodeAt(0)
				})
				return hot.concat(ret);
			}
		},
		components: {
			ListView
		}
    }
</script>

<style type="text/css" lang="stylus">
    .singer{
    	position: fixed;
    	top:88px;
    	bottom:0;
    	width:100%;
    }
</style>