import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home'
import Cadastro from './components/cadastramento/Cadastro'
import Login from './components/acesso/Login'
import Familia from './components/familia/Familia'
import Comunicacao from './components/comunicacao/Comunicacao'
import Agenda from './components/agenda/Agenda'

Vue.use(Router)

export default new Router ({
    mode: 'history',
    routes: [
        { path: '/', name: 'home',  component: Home },
        { path: '/cadastro', component: Cadastro },
        { path: '/login', component: Login },
        { path: '/acesso', component: Login },
        { path: '/familia', component: Familia},
        { path: '/comunicacao', component: Comunicacao},
        { path: '/agenda', component: Agenda}
    ]
})