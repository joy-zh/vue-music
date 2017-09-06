/* 
* @Author: zhangyi
* @Date:   2017-08-31 15:32:55
* @Last Modified by:   zhangyi
* @Last Modified time: 2017-08-31 15:42:42
*/
import originJSONP from 'jsonp'

export default function jsonp(url, data, option){
    url += (url.indexOf("?") < 0 ? "?" : '&') + param(data);

    return new Promise((resolve, reject) => {
        originJSONP(url, option, (err,data) => {
            if(!err){
                resolve(data);
            }else{
                reject(err);
            }
        })
    })
}

function param(data){
    let url = '';
    for(var k in data){
        let value = data[k] !== undefined ? data[k] : ''
        url += `&${k}=${encodeURIComponent(value)}`
    }
    return url ? url.substring(1) : ''
}