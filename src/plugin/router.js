import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import main from '../components/main'
import Login from '../pages/Login.vue';
import Retrieval from '../pages/Retrieval.vue';
import Advanced from '../pages/Advanced.vue';
import SearchResult from '../pages/SearchResult.vue';
// import SearchDetail from '../pages/SearchDetail.vue';
import LookData from '../pages/LookData.vue';
import Grouping from '../pages/Grouping.vue';
import ErrorPage from '../components/ErrorPage.vue';
import CrfTemplateFistPage from '../Crf/CrfTemplateFistPage.vue';
import CrfTemplate from '../Crf/CrfTemplate.vue';
import CrfTemplateMain from '../Crf/CrfTemplateMain.vue';
import ChildCrfTemplatMainRightHeader from '../ChildCrfTemplatMainRight/ChildCrfTemplatMainRightHeader.vue';
let routes = [
    { path: '/login', component: Login },
    {path:'/main',component:main},
    { path: '/retrieval', component: Retrieval },
    { path: '/advanced', component: Advanced },
    { path: '/searchResult', component: SearchResult },
    // { path: '/searchDetail/:id', name: 'searchDetail', component: SearchDetail },
    { path: '/lookData', name: 'lookData', component: LookData },
    { path: '/grouping', name: 'grouping', component: Grouping },
    { path: '/', redirect: '/login' },
    { path: '*', component: ErrorPage },
    { path: '/CrfTemplateFistPage', component: CrfTemplateFistPage,
    children:[
        {
            path:'/',component:CrfTemplate,
        }, {
            path:'/CrfTemplateMain',component:CrfTemplateMain,
            children:[
                {path:'/ChildCrfTemplatMainRightHeader',component:ChildCrfTemplatMainRightHeader}
            ]
        },
    ]},

];

let router = new VueRouter({
    routes
})

export default router;