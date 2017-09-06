/* 
* @Author: zhangyi
* @Date:   2017-08-31 17:23:34
* @Last Modified by:   zhangyi
* @Last Modified time: 2017-09-01 14:34:41
*/
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getRecommend(){
    const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

    const data = Object.assign({},commonParams,{
        platform : 'h5',
        needNewCode: 1,
        uin : 0
    })

    return jsonp( url, data, options )
}