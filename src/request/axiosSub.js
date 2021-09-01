import axios from 'axios'

/**
 * @jsonUrl json的文件名
 */

export function getData(jsonUrl){
  return new Promise((resolve,reject)=>{
    const axios1 = axios.create({
      baseURL:'../../static/',
      timeout:10000
    })
    axios1({
      url:jsonUrl
    })
    .then(res=>{
      resolve(res.data)
      
    })
    .catch(err=>{
      reject(err)
    })
    

  })
 
}