import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import theme from 'muse-ui/lib/theme'
import 'muse-ui/lib/styles/base.less';
import 'iview/dist/styles/iview.css'
import iView from 'iview'
import Echo from 'laravel-echo'
import { Button, Avatar, AppBar, Menu, TextField, Icon, Grid, Paper, Form, List, Badge, BottomNav, AutoComplete} from 'muse-ui';
import 'muse-ui/lib/styles/theme.less';
Vue.use(Button).use(Avatar).use(AppBar).use(Menu).use(TextField).use(Icon).use(Grid).use(Paper).use(Form).use(List).use(Badge)
    .use(BottomNav).use(AutoComplete).use(iView)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false
theme.add('vue', {
    primary: '#4fc08d',
    secondary: '#e91e63',
    success: '#c8e6c9',
    warning: '#ffeb3b',
}, 'light')


theme.use('vue')

// Axios
//定义全局变量
window.Pusher = require('pusher-js')
window.Echo = new Echo({
    broadcast: 'pusher',
    key: '0c4b8dea99f22954a922',
    cluster: 'ap1',
    encrypted: true
});


/* eslint-disable no-new */
window.$$$ = new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
