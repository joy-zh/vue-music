/* 
* @Author: zhangyi
* @Date:   2017-08-31 17:23:34
* @Last Modified by:   zhangyi
* @Last Modified time: 2017-09-01 14:34:41
*/
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend(){
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

    const data = Object.assign({},commonParams,{
        platform : 'h5',
        needNewCode: 1,
        uin : 0
    })

    return jsonp( url, data, options )
}

export function getDiscList(){
	const url = '/api/getDiscList';
	const data = Object.assign({}, commonParams, {
	    platform: 'yqq',
	    hostUin: 0,
	    sin: 0,
	    ein: 29,
	    sortId: 5,
	    needNewCode: 0,
	    categoryId: 10000000,
	    rnd: Math.random(),
	    format: 'json'
	})

	axios.get(url,{
		param: data
	}).then((res) => {
		return Promise.resolve(res.data)
	})
    return jsonp( url, data, options )
}
