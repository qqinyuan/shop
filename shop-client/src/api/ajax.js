/*
ajax������ģ��
����ֵ�� promise����(�첽���ص������ǣ�response.data)
*/
import axios from 'axios'
export default function ajax (url, data={}, type='GET') {
    // ֱ�ӷ���response.data
    return new Promise(function (reslove,reject) {
        // ִ���첽ajax����,�첽���ص�������response.data��������response
        let promise // ����ڲ���promise��������axios�ķ���ֵ(promise����)
        if (type === 'GET') {
            // ׼��url query��������
            let dataStr = '' //����ƴ���ַ�������data���ӵ�url
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + dat[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }
            // ����get����
            promise = axios.get(url)
        } else {
            // ����post����
            promise = axios.post(url,data)
        }
        // return promise
        promise.then(function (response) {
            // �ɹ��˵���resolve()
            resolve(response.data)
        })
        .catch(function (error) {
                // ʧ���˵���reject()
                reject(error)
            })
    })
}
/*const response = await ajax()
* const result = response.data
* ϣ���õ����ǣ�
* const result = await ajax()*/
