import Discover from '../pages/Discover/Discover';
import MyMusic from '../pages/MyMusic/MyMusic'
import Friends from '../pages/Friends/Friends'
import Shop from '../pages/Shop/Shop'
import Musician from '../pages/Musician/Musician'
import Download from '../pages/Download/Download'


const routers = [
    {
        path:'/',
        component: Discover
    },
    {
        path:'/discover',
        component: Discover
    },
    {
        path:'/myMusic',
        component: MyMusic
    },
    {
        path:'/friends',
        component: Friends
    },
    {
        path:'/shop',
        component: Shop
    },
    {
        path:'/musician',
        component: Musician
    },
    {
        path:'/download',
        component: Download
    }
]

export default routers;