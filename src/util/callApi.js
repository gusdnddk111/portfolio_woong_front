import axios from 'axios';

export default function callApi ({
    url, 
    method='get', 
    params, 
    data, 
    responseType='json',
    isLoading=true
}, config) {
    const api_url = url;
    console.log('[Request] : ' + api_url);
    console.log(data)

    return axios({
        method,
        url: api_url,
        params,
        data,
        isLoading,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        
        ...config,
    }).then((response) => {
        console.log('[Response] : ' + api_url);
        console.log(response);
        
        const { data } = response;
        return {
            isSuccess:true,
            data
        }
    }).catch((error)=>{
        return {
            isSuccess:false,
            data: undefined
        }
    })
}