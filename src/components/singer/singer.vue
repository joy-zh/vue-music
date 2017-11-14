<template>
    <div class="singer">
        推荐页
    </div>
</template>
<script type="text/javascript">
	import {getSingerList} from 'api/singer'
	import {ERR_OK} from 'api/config'
	import Singer from 'common/js/singer'
	
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
						this.singer = res.data.list;
						console.log(this.singer)
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
				
			}
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