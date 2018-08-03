import { jsbridge } from 'icity'

module.exports = {
    user: function() {
        if (env.isOpenMock) {
            jsbridge.setMockUser({
                'phone': '15711131688',
                'citycode': '370100',
                'token': 'd599c951-c4a4-4474-99c9-51c4a474741a',
                'nickname': '猴吉',
                'realname': '姚光腾',
                'realphone': '13365413030',
                'realid': '371523199206264050',
                'version': '2.4.0',
                'build': '52',
                'longitude': '120.37073',
                'latitude': '36.097341',
                'location': '山东省济南市历下区浪潮路靠近浪潮',
                'pushToken': '',
                'notice': 'close'
            });
        }
    }
};