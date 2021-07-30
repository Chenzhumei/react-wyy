import {get} from './http'

export const reqBanner = () => get('/banner');

export const reqSheets = (param = {}) => get('/top/playlist',param);