<template>
	<div class="search-box">
		<i class="icon-search"></i>
		<input class="box" :placeholder="placeHolder" v-model="query" ref="query" />
		<i @click="clear" class="icon-dismiss" v-show="query"></i>
	</div>
</template>

<script type="text/ecmascript-6">
	import {debounce} from 'common/js/util'
	export default {
		props: {
			placeHolder: {
				type: String,
				default: '搜索歌曲、歌手'
			}
		},
		data(){
			return {
				query: ''
			}
		},
		created(){
			this.$watch('query',debounce((newQuery) => {
				this.$emit('query', newQuery)
			}, 200))
		},
		methods: {
			clear(){
				this.query = ''
			},
			setQuery(query){
				this.query = query
			},
			blur() {
				this.$refs.query.blur()
			}
		}
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"

  .search-box
    position:relative
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    padding: 0 22px 0 6px
    height: 40px
    background: $color-highlight-background
    border-radius: 6px
    .icon-search
      font-size: 24px
      color: $color-background
    .box
      flex: 1
      margin: 0 5px
      line-height: 18px
      background: $color-highlight-background
      color: $color-text
      font-size: $font-size-medium
      &::placeholder
        color: $color-text-d
    .icon-dismiss
      position: absolute;
      right: 6px;
      font-size: 16px
      color: $color-background
</style>