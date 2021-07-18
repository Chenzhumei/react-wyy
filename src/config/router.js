import Discover from '../pages/Discover/Discover';
import MyMusic from '../pages/MyMusic/MyMusic'
import Friends from '../pages/Friends/Friends'
import Shop from '../pages/Shop/Shop'
import Musician from '../pages/Musician/Musician'
import Download from '../pages/Download/Download'

import Recomend from '../pages/Discover/Recomend/Recomend'
import Toplist from '../pages/Discover/Toplist/Toplist'
import Playlist from '../pages/Discover/Playlist/Playlist'
import Djradio from '../pages/Discover/Djradio/Djradio'
import Artist from '../pages/Discover/Artist/Artist'
import Album from '../pages/Discover/Album/Album'



export const routers = [
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


export const discoverChildren =  [
    {
        path:'/discover/recomend',
        component: Recomend
    },
    {
        path:'/discover/toplist',
        component: Toplist
    },
    {
        path:'/discover/playlist',
        component: Playlist
    },
    {
        path:'/discover/djradio',
        component: Djradio
    },
    {
        path:'/discover/artist',
        component: Artist
    },
    {
        path:'/discover/album',
        component: Album
    },
]
