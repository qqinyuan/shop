import _Object$keys from 'babel-runtime/core-js/object/keys';
import _Promise from 'babel-runtime/core-js/promise';
/*
ajax������ģ��
����ֵ�� promise����(�첽���ص������ǣ�response.data)
*/
import axios from 'axios';
export default function ajax(url) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';

    // ֱ�ӷ���response.data
    return new _Promise(function (reslove, reject) {
        // ִ���첽ajax����,�첽���ص�������response.data��������response
        var promise = void 0; // ����ڲ���promise��������axios�ķ���ֵ(promise����)
        if (type === 'GET') {
            // ׼��url query��������
            var dataStr = ''; //����ƴ���ַ�������data���ӵ�url
            _Object$keys(data).forEach(function (key) {
                dataStr += key + '=' + dat[key] + '&';
            });
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
                url = url + '?' + dataStr;
            }
            // ����get����
            promise = axios.get(url);
        } else {
            // ����post����
            promise = axios.post(url, data);
        }
        // return promise
        promise.then(function (response) {
            // �ɹ��˵���resolve()
            resolve(response.data);
        }).catch(function (error) {
            // ʧ���˵���reject()
            reject(error);
        });
    });
}
/*const response = await ajax()
* const result = response.data
* ϣ���õ����ǣ�
* const result = await ajax()*/

//# sourceMappingURL=ajax-compiled.js.map