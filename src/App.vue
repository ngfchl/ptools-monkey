<script lang="ts" setup>
import {onBeforeMount, ref} from "vue";
import {GM_cookie, GM_getValue, GM_setValue, GM_xmlhttpRequest} from 'vite-plugin-monkey/dist/client'
import {message} from "ant-design-vue"
import {
  ArrowDownOutlined,
  DownloadOutlined,
  PushpinFilled,
  SyncOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons-vue'

const api = ref('')
// const api = ref('http://127.0.0.1:8080/')
const token = ref('harvest')
const drawer = ref(false)
const init_modal = ref(false)
const repeat_info = ref<RepeatInfo>({
  url_list: [],
  can_list: []
})

interface Site {
  'id': number
  'name': string
  'url': string
  'logo': string
}

interface RepeatInfo {
  url_list: {
    download_url: string
    details_url: string
    site: Site
  }[]
  can_list: Site[]
}

interface Torrent {
  site_id: number
  tid: number
  title: string
  category: string
  completers?: string
  leechers?: string
  hr: boolean
  magnet_url: string
  poster: string
  published: string
  sale_expire: string
  sale_status: string
  seeders: string
  subtitle: string
  tags: string
  size: string
  hash_string?: string
  douban_url?: string
  imdb_url?: string
  files_count?: string
}

export interface Downloader {
  id: number
  name: string
  username?: string
  password?: string
  http?: 'http' | 'https'
  host?: string
  port?: number
  category: string
}

export interface Category {
  name: string
  savePath: string
}

message.config({
  top: `50px`,
});
const activeKey = ref<number[]>([]);
const downloaders = ref<Downloader[]>([])
const user_detail_page = ref(false)
const torrent_list_page = ref(false)
const torrent_detail_page = ref(false)
const torrent_detail_repeat = ref(false)
const open = ref<boolean>(false);
const categories = ref<Category[]>([])
const cookie = ref<string>('')
const url_list = ref<string[]>([])
const modal_title = ref<string>('下载到')
const singleTorrent = ref<Torrent>(null)
const showModal = () => {
  if (downloaders.value.length <= 0) {
    message.warning('没有可用的下载器！请先在收割机中添加！')
    return
  }
  if (torrents.value.length <= 0) {
    message.warning('没有符合条件的种子！')
    return
  }
  open.value = true;
  let downloader_id = downloaders.value[0].id
  activeKey.value.push(downloader_id)
  getDownloaderCategorise(downloader_id)
};
const handleOk = (e: MouseEvent) => {
  console.log(e);
  open.value = false;
};

async function init_button() {
  /**
   * 初始化页面按钮
   */
  console.log('开始初始化按钮')
  if (location.origin === 'https://hdcity.city') {
    user_detail_page.value = location.pathname.startsWith('/userdetails');
  } else {
    user_detail_page.value = true
  }

  if (location.pathname.startsWith('/details.php')
      || location.pathname.includes('/torrent.php')
      || location.pathname.includes('/views.php')
      || location.pathname.includes('/Torrents/details')
      || location.pathname.search(/torrents\D*\d+/) > 0
  ) {
    console.log('当前为种子详情页')
    torrent_detail_page.value = true
    await get_torrent_detail()
    // await sync_torrents()
    let hash_string = torrents.value[0].hash_string
    console.log(hash_string)
    if (!hash_string) {
      message.warning('未获取到 Hash_String！')
      return
    }
    torrent_detail_repeat.value = true
    await repeat(hash_string)
  }

  if (location.pathname.search(/torrents\D*$/) > 0 ||
      location.pathname.search(/t$/) > 0 ||
      location.pathname.endsWith('/Torrents') ||
      location.pathname.includes('/music.php') ||
      location.pathname.includes('/special.php') ||
      location.pathname.includes('/live.php') ||
      location.pathname.includes('/torrents.php')) {
    console.log('当前为种子列表页')
    torrent_list_page.value = true
    await get_torrent_list()
    // await sync_torrents()
  }
  if (location.pathname.startsWith('/userdetails') ||
      location.href.includes('/user.php?id=') ||
      location.href.includes('/p_user/user_detail.php') ||
      location.href.includes('/user.php?u=') ||
      location.href.includes('/u/') ||
      location.href.includes('/index.php?page=usercp&uid=') ||
      location.href.includes('/Users/profile?uid=') ||
      location.href.includes('/profile/') ||
      location.href.includes('/users/')
  ) {
    console.log('当前为个人信息页')
    await sync_cookie()
  }
  if (location.pathname.search(/usercp.php/) > 0 ||
      location.href.includes('p_user/edit_passkey') ||
      location.href.includes('/index.php?page=usercp&do=pid_c&action=change&uid=') ||
      location.href.includes('/Users/me') ||
      location.href.includes('/my.php')
  ) {
    console.log('当前为控制面板页')
    user_detail_page.value = true
    await sync_cookie()
  }
}

/**
 * 获取站点相关规则并写入本地存储
 * @returns {Promise<unknown>}
 */
async function getSite() {
  console.log(api.value)
  const path = "api/auth/monkey/get_site/"
  return new Promise((resolve, reject) => {
    let host = document.location.host;

    if (host.includes("m-team")) {
      host = host.replace("xp.", "api.")
      host = host.replace("kp.", "api.")
    }

    GM_xmlhttpRequest({
      url: `${api.value}${path}${host}`,
      method: "GET",
      responseType: "json",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      onload: function (response) {
        let res = response.response
        console.log(res)
        if (res.code === 0) {
          console.log(res.msg)
          resolve(false)
        }
        sessionStorage.setItem('website', JSON.stringify(res.data.website))
        sessionStorage.setItem('mySite', JSON.stringify(res.data.mysite))
        resolve(res.data)
      },
      onerror: function () {
        console.log('服务器连接失败！')
        reject(false)
      }
    })
  })
}


/**
 * 获取Cookie
 */
async function getCookie() {
  return new Promise(async (resolve, reject) => {
    await GM_cookie.list({ // 异步,如果在return data之前还没执行完，部分站点会导致cookie不全。
      url: location.href
    }, (cookies: {
      name: string,
      value: string
    }[]) => {
      try {
        cookie.value = cookies.map(c => `${c.name}=${c.value}`).join('; ');
        console.log('【Debug】cookie:', cookie.value);
        resolve(cookie.value)
      } catch (e) {
        reject(false)
      }
    })
  })
}

/**
 * 组装站点信息
 * @returns
 */
async function getSiteData() {
  let site_info = JSON.parse(sessionStorage.getItem('website')!)
  let mySiteId = sessionStorage.getItem('mySite')
  console.log(site_info)
  if (site_info === false) {
    message.error('收割机服务器连接失败！')
    return false;
  }
  console.log(site_info.my_uid_rule)
  //获取cookie与useragent
  let user_agent = window.navigator.userAgent
  let cookie = await getCookie()
  if (!cookie && !document.location.host.includes("m-team")) {
    message.error('Cookie获取失败，请使用Beta版油猴（红色图标的油猴）！')
    return false
  }
  //获取UID
  let href = document.evaluate(site_info.my_uid_rule, document).iterateNext()!.textContent
  console.log(href)
  if (!href) {
    console.log('获取 UID 出错啦！')
    return false
  }
  let user_id_info;
  if (href.includes("=")) {
    user_id_info = href.split('=')
  } else {
    user_id_info = href.split('/')
  }
  let user_id = user_id_info[user_id_info.length - 1].trim()
  console.log(user_id)
  if (!user_id) {
    message.error('用户ID获取失败！')
    return false
  }
  let data = `user_id=${user_id}&site=${site_info.name}&cookie=${cookie}&user_agent=${user_agent}`
  if (mySiteId != '0') {
    data += `&id=${mySiteId}`
  }
  if (mySiteId == '0') {
    data += `&nickname=${site_info.name}`
  }
  let passkey = getPasskey()
  if (passkey != false) {
    console.log(passkey)
    data += `&passkey=${passkey}`
  }
  let time_join = getTimeJoin()
  console.log(time_join)
  if (time_join != false) {
    data += `&time_join=${time_join}`
  }
  return data
}

/**
 * 获取passkey
 */
const getPasskey = () => {
  try {
    let site_info = JSON.parse(sessionStorage.getItem('website')!)
    let passkey = document.evaluate(site_info.my_passkey_rule, document).iterateNext()!.textContent
    return passkey!.trim()
  } catch (e) {
    console.error(e)
    return false
  }
}
/**
 * 获取passkey
 */
const getTimeJoin = () => {
  try {
    let site_info = JSON.parse(sessionStorage.getItem('website')!)
    let time_join = document.evaluate(site_info.my_time_join_rule, document).iterateNext()!.textContent
    return time_join!.trim()
        .replace('T', ' ')
        .replace('+08:00', '')
        .match(/\d{4}\D\d{2}\D\d{2}\D\d{2}\D\d{2}\D\d{2}/)![0]
  } catch (e) {
    console.error(e)
    return false
  }
}

/**
 * 保存站点信息到收割机
 */
async function sync_cookie() {
  await getSite()
  let data = await getSiteData();
  console.log(data)
  if (data) {
    return await send_site_info(data).then(res => {
      return res
    })
  }
}

/**
 * 发送站点信息到收割机
 * @param data
 */
async function send_site_info(data: string) {
  let url = `${api.value}api/auth/monkey/save_site`
  return new Promise((resolve, reject) => {
    GM_xmlhttpRequest({
      url: url,
      method: "POST", // responseType: "json",
      headers: {
        Authorization: `Bearer ${token.value}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
      onload: function (response) {
        console.log(response)
        let res = JSON.parse(response.response)
        console.log(res)
        if (res.code == 0) {
          console.log(res.msg)
          resolve(false)
        }
        console.log('站点信息获取成功！', res.msg)
        console.log(res)
        message.success('收割机提醒您：' + res.msg)
        resolve(res)
      }, onerror: function () {
        reject("站点信息获取失败")
      }
    })
  })
}

function xpath(query: string, node: Node) {
  return document.evaluate(query, node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
}

/**
 * 抓取种子列表页
 */
const torrents = ref<any>([])

async function get_torrent_list() {
  let o = sessionStorage.getItem('website')
  if (!o) {
    await getSite()
  }
  torrents.value.length = 0
  let site_info = JSON.parse(o!)
  let torrent_list = xpath(site_info.torrents_rule.replace("]/tr", "]/tbody/tr"), document)
  console.log('获取到种子数量：', torrent_list.snapshotLength)
  for (let i = 0; i <= torrent_list.snapshotLength; i++) {
    try {
      let torrent_info = torrent_list.snapshotItem(i)
      // 未获取到数据节点，pass
      if (!torrent_info) continue
      let title = xpath(site_info.torrent_title_rule, torrent_info).snapshotItem(0)
      let category = xpath(site_info.torrent_category_rule, torrent_info).snapshotItem(0)
      let completers = xpath(site_info.torrent_completers_rule, torrent_info).snapshotItem(0)
      let detail_url = xpath(site_info.torrent_detail_url_rule, torrent_info).snapshotItem(0)
      let hr = xpath(site_info.torrent_hr_rule, torrent_info).snapshotItem(0)
      let leechers = xpath(site_info.torrent_leechers_rule, torrent_info).snapshotItem(0)
      let magnet_url = xpath(site_info.torrent_magnet_url_rule, torrent_info).snapshotItem(0)
      let poster = xpath(site_info.torrent_poster_rule, torrent_info).snapshotItem(0)
      let published = xpath(site_info.torrent_release_rule, torrent_info).snapshotItem(0)
      let sale_expire = xpath(site_info.torrent_sale_expire_rule, torrent_info).snapshotItem(0)
      let sale = xpath(site_info.torrent_sale_rule, torrent_info).snapshotItem(0)
      let seeders = xpath(site_info.torrent_seeders_rule, torrent_info).snapshotItem(0)
      let size_items = xpath(site_info.torrent_size_rule, torrent_info)
      let subtitle = xpath(site_info.torrent_subtitle_rule, torrent_info).snapshotItem(0)
      let tags = xpath(site_info.torrent_tags_rule, torrent_info)
      console.log(detail_url)
      if (!detail_url) continue
      let tid = detail_url!.textContent!.match(/id=(\d+)/)![1]
      // 未获取到种子ID，pass
      console.log(tid)
      console.log(magnet_url)
      if (!tid) {
        continue
      }

      if (!magnet_url) {
        magnet_url = site_info.page_download.replace("{}", tid)
        if (magnet_url.includes('{}')) {
          magnet_url = magnet_url.replace("&passkey={}", "")
        }
        console.log(magnet_url)
      } else {
        magnet_url = magnet_url.textContent
      }
      if (!magnet_url.startsWith('http')) {
        magnet_url = `${location.origin}${magnet_url.startsWith('/') ? magnet_url : `/${magnet_url}`}`
      }
      let tag = []
      for (let i = 0; i < tags.snapshotLength; i++) {
        tag.push(tags.snapshotItem(i)!.textContent!.trim())
      }
      let size = ''
      if (location.host.includes('hdchina.org')) {
        size = size_items.snapshotItem(0)!.textContent!
      } else {
        size = size_items ? `${size_items.snapshotItem(0)!.textContent} ${size_items.snapshotItem(1)!.textContent}` : ''
      }


      let torrent = {
        title: title ? title.textContent : '',
        subtitle: subtitle ? subtitle.textContent : '',
        size: size,
        category: category ? category.textContent : '',
        completers: completers ? completers.textContent : 0, // detail_url: detail_url ? detail_url.textContent : '',
        hr: !hr,
        leechers: leechers ? leechers.textContent : 0,
        magnet_url: magnet_url, // poster: poster ? poster.textContent : '',
        published: published ? published.textContent : '',
        sale_expire: sale_expire ? sale_expire.textContent : '',
        sale_status: sale ? sale.textContent : '',
        seeders: seeders ? seeders.textContent : 0,
        poster: poster ? poster.textContent : '',
        tags: tags.snapshotLength > 0 ? tag.join() : '',
        tid: tid,
        site_id: site_info.name,
      }
      torrents.value.push(torrent)
    } catch (e) {
      console.trace(e)
    }
  }
  console.log(torrents.value)
}

/**
 * 抓取种子详情页
 */
async function get_torrent_detail() {
  torrents.value.length = 0
  let site_info = JSON.parse(sessionStorage.getItem('website')!);
  let title = xpath(site_info.detail_title_rule, document).snapshotItem(0)
  let subtitle = xpath(site_info.detail_subtitle_rule, document).snapshotItem(0)
  let magnet_url = xpath(site_info.detail_download_url_rule, document).snapshotItem(0)
  let size = xpath(site_info.detail_size_rule, document).snapshotItem(0)
  let category = xpath(site_info.detail_category_rule, document).snapshotItem(0)
  let files_count = xpath(site_info.detail_count_files_rule, document).snapshotItem(0)
  let hash_string = xpath(site_info.detail_hash_rule, document).snapshotItem(0)
  let sale_status = xpath(site_info.detail_free_rule, document).snapshotItem(0)
  let sale_expire = xpath(site_info.detail_free_expire_rule, document).snapshotItem(0)
  let douban_url = xpath(site_info.detail_douban_rule, document).snapshotItem(0)
  let imdb = xpath(site_info.detail_imdb_rule, document).snapshotItem(0)
  let poster = xpath(site_info.detail_poster_rule, document).snapshotItem(0)
  let tags = xpath(site_info.detail_tags_rule, document)
  let hr = xpath(site_info.detail_hr_rule, document).snapshotItem(0)
  let tid = location.search.match(/id=(\d+)/)![1]


  let tag = []
  for (let i = 0; i < tags.snapshotLength; i++) {
    tag.push(tags.snapshotItem(i)!.textContent!.trim())
  }
  let torrent = {
    tid: tid,
    site_id: site_info.id,
    title: title ? title.textContent!.trim() : '',
    subtitle: subtitle ? subtitle.textContent!.trim() : '',
    size: size ? size.textContent!.trim() : '',
    category: category ? category.textContent!.trim() : '', // completers: completers ? completers.textContent : '',
    hr: !hr,
    magnet_url: magnet_url ? magnet_url.textContent!.trim() : '', // poster: poster ? poster.textContent : '',
    sale_expire: sale_expire ? sale_expire.textContent!.trim() : null,
    sale_status: sale_status ? sale_status.textContent!.trim() : '', // seeders: seeders ? seeders.textContent : '',
    douban_url: douban_url ? douban_url.textContent!.trim() : '',
    files_count: files_count ? files_count.textContent!.match(/\d+/g)![0] : null,
    hash_string: hash_string ? hash_string.textContent!.trim().match(/[0-9a-f]{40}/)![0] : '',
    poster: poster ? poster.textContent!.trim() : '',
    tags: tags.snapshotLength > 0 ? tag.join() : '',
    imdb_url: imdb ? imdb.textContent!.trim() : '',
  }
  torrents.value.push(torrent)
}

/**
 * 获取下载器列表
 */
async function getDownloaders() {
  GM_xmlhttpRequest({
    url: `${api.value}api/option/downloaders`, method: "GET", responseType: "json",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    onload: function (response) {
      let res = response.response
      console.log(res)
      if (res.code !== 0) {
        console.log(res.msg)
      } else {
        console.log('下载器列表获取成功！', res)
        downloaders.value = res.data
      }
    }
  })
}

/**
 * 测试下载器
 */
const test_connect = async (downloader_id: number) => {
  GM_xmlhttpRequest({
    url: `${api.value}api/option/downloaders/test/${downloader_id}`,
    method: "GET",
    responseType: "json",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    onload: function (response) {
      let res = response.response
      console.log(res)
      if (res.code !== 0) {
        message.error(res.msg)
      } else {
        message.success(res.msg)
      }
    }
  })
}

/**
 * 获取下载器分类列表
 */
async function getDownloaderCategorise(downloader_id: number) {
  categories.value.length = 0
  if (!downloader_id) {
    return
  }
  await test_connect(downloader_id)
  GM_xmlhttpRequest({
    url: `${api.value}api/option/downloaders/categories/${downloader_id}`,
    method: "GET",
    responseType: "json",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    onload: function (response) {
      let res = response.response
      console.log(res)
      if (!res || res.code !== 0) {
        message.error(res.msg)
      } else {
        categories.value = res.data
      }
    }
  })
}


/**
 * 生成下载链接
 */
const generate_magnet_url = async (flag: boolean) => {
  url_list.value.length = 0
  if (torrents.value.length < 0) {
    return
  }
  console.log(flag)
  if (flag) {
    url_list.value = torrents.value.filter(
        (torrent: Torrent) => torrent.sale_status.toLowerCase().includes('free')
    ).map(
        (torrent: Torrent) => torrent.magnet_url.startsWith('https://') ? torrent.magnet_url : `${location.origin}/${torrent.magnet_url}`
    )
  } else {
    url_list.value = torrents.value.map(
        (torrent: Torrent) => torrent.magnet_url.startsWith('https://') ? torrent.magnet_url : `${location.origin}/${torrent.magnet_url}`
    )
  }
  console.log(url_list.value)
}

/**
 * 推送种子到下载器
 */
const push_torrent = async (downloader_id: number, category: string) => {
  let mySiteId = sessionStorage.getItem('mySite');
  await generate_magnet_url(false)
  console.log(url_list.value)
  if (url_list.value.length <= 0) {
    message.error('没有抓到种子链接！')
    return
  }
  let data = `site=${mySiteId}&downloader_id=${downloader_id}&category=${category}&url=${url_list.value.join(',')}`
  // message.warning(data)
  GM_xmlhttpRequest({
    url: `${api.value}api/option/push_torrent?${data}`,
    method: "GET",
    responseType: "json",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    onload: function (response) {
      let res = response.response
      console.log(res)
      if (!res || res.code !== 0) {
        message.error(res.msg)
      } else {
        categories.value = res.data
        message.success(`种子已推送，请检查下载器！${res.msg}`)
      }
    }
  })
  open.value = false
}


/**
 * 同步种子信息到 收割机
 */
const sync_torrents = async () => {
  GM_xmlhttpRequest({
    url: `${api.value}api/monkey/parse_torrents`,
    method: "POST",
    // responseType: "json",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
    data: JSON.stringify(torrents.value),
    onload: function (response) {
      console.log(response.response)
      let res = JSON.parse(response.response)
      console.log(res)
      if (res.code == 0) {
        console.log('种子信息同步成功！', res.msg)
        // message.success('收割机 提醒您：' + res.msg)
      } else {
        console.log(res)
      }
    }, onerror: function () {
      console.error("种子信息同步失败")
    }
  })
}


/**
 * 辅种助手
 * 获取辅种嘻嘻
 */
async function repeat(hash_string: string) {

  let site_info = JSON.parse(sessionStorage.getItem('website')!);
  GM_xmlhttpRequest({
    url: `${api.value}api/auth/monkey/iyuu`, method: "POST",
    responseType: "json",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${token.value}`,
    },
    data: `hash_string=${hash_string}&site=${site_info.name}`,
    onload: function (response) {
      let res = response.response
      console.log(res)
      if (res.code !== 0) {
        console.log(res.msg)
        message.warn(res.msg)
      } else {
        console.log('种子列表获取成功！', res)
        repeat_info.value = res.data
      }
    }
  })

}

async function download_to() {
  await get_torrent_detail()
  console.log(torrents.value)
  singleTorrent.value = torrents.value[0]
  await generate_magnet_url(false)
  modal_title.value = '正在下载当前种子...'
  showModal()
}

async function download_all() {
  await get_torrent_list()
  await generate_magnet_url(false)
  // modal_title.value = `正在下载本页所有${url_list.value.length}条种子...`
  showModal()
}

async function download_free() {
  await get_torrent_list()
  await generate_magnet_url(true)
  // modal_title.value = `正在下载本页${url_list.value.length}条免费种子...`
  showModal()
}

// async function copy_all() {
//   message.info('copy_all！', 2)
// }

// async function copy_free() {
//   message.info('copy_free！', 2)
// }

// async function copy_link() {
//   message.info('copy_all！', 2)
// }

function checkServer() {
  api.value = GM_getValue("harvest_api", "")
  token.value = GM_getValue("harvest_token", "harvest")
  console.log(api.value)
  if (!api.value) {
    showInitModal()
    return false
  }
  return true
}

const showInitModal = () => {
  init_modal.value = true
}

const handleSaveServer = () => {
  if (!api.value.endsWith("/")) {
    api.value = `${api.value}/`
  }
  GM_setValue("harvest_api", api.value)
  GM_setValue("harvest_token", token.value)
  init_modal.value = false
  location.reload()
}
const init = ref(0)
onBeforeMount(async () => {
  try {
    // 最顶层才加载
    if (window.top != window.self) return;
    if (!checkServer()) return;
    // 只加载一次
    while (init.value < 1) {
      if (!sessionStorage.getItem('website')) {
        await getSite()
      }
      window.addEventListener('load', async () => {
        await getDownloaders()
        await init_button()
      })
      init.value++
    }
  } catch (error) {
    console.error('Error in beforeMount:', error);
  }
})

</script>

<template>
  <div class="harvest-wrap">
    <a-image
        :fallback="`${api}favicon.png`"
        :preview="false"
        class="image"
        src="https://api.r10086.com/%E6%A8%B1%E9%81%93%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api%E6%8E%A5%E5%8F%A3.php?%E5%9B%BE%E7%89%87%E7%B3%BB%E5%88%97=%E7%8C%AB%E5%A8%981"/>
    <a-space
        align="center"
        style="width: 100%;"
    >
      <a-space-compact direction="vertical">
        <a-button
            block danger
            style="width: 110px;" type="link"
            @click="showInitModal"
        >
          <template #icon>
            <ThunderboltOutlined/>
          </template>
          收割机
        </a-button>
        <a-button
            v-if="user_detail_page" block size="small"
            type="primary"
            @click="sync_cookie">
          <template #icon>
            <SyncOutlined/>
          </template>
          同步数据
        </a-button>
        <a-button
            v-if="torrent_list_page" block
            size="small"
            @click="download_all"
        >
          <template #icon>
            <ArrowDownOutlined/>
          </template>
          下载全部
        </a-button>
        <a-button
            v-if="torrent_list_page" block
            size="small"
            @click="download_free"
        >
          <template #icon>
            <DownloadOutlined/>
          </template>
          下载免费
        </a-button>
        <!--        <a-button-->
        <!--            size="small" block-->
        <!--            v-if="torrent_list_page || torrent_detail_page"-->
        <!--            @click="sync_torrents"-->
        <!--        >-->
        <!--          <template #icon>-->
        <!--            <DownloadOutlined/>-->
        <!--          </template>-->
        <!--          sync-->
        <!--        </a-button>-->
        <!--        <a-button-->
        <!--            size="small" block-->
        <!--            v-if="torrent_list_page"-->
        <!--            @click="copy_all"-->
        <!--        >-->
        <!--          <template #icon>-->
        <!--            <CopyFilled/>-->
        <!--          </template>-->
        <!--          复制链接-->
        <!--        </a-button>-->
        <!--        <a-button-->
        <!--            size="small" block-->
        <!--            v-if="torrent_list_page"-->
        <!--            @click="copy_free"-->
        <!--        >-->
        <!--          <template #icon>-->
        <!--            <CopyOutlined/>-->
        <!--          </template>-->
        <!--          复制免费-->
        <!--        </a-button>-->
        <!--        <a-button-->
        <!--            size="small" block-->
        <!--            v-if="torrent_detail_page"-->
        <!--            @click="copy_link"-->
        <!--        >-->
        <!--          <template #icon>-->
        <!--            <CopyOutlined/>-->
        <!--          </template>-->
        <!--          复制链接-->
        <!--        </a-button>-->
        <a-button
            v-if="torrent_detail_page" block
            size="small"
            @click="download_to">
          <template #icon>
            <DownloadOutlined/>
          </template>
          下载到...
        </a-button>
        <a-button
            v-if="torrent_detail_repeat" block
            size="small"
            @click="drawer = true">
          <template #icon>
            <PushpinFilled/>
          </template>
          辅种助手
        </a-button>
      </a-space-compact>
      <!--      <a-space-compact direction="vertical">-->
      <!--        <a-button block @click="getDownloaders">下载器列表</a-button>-->
      <!--        <a-button block @click="get_torrent_list">种子列表页</a-button>-->
      <!--        <a-button block @click="get_torrent_detail">种子详情页</a-button>-->
      <!--        <a-button block @click="generate_magnet_url(false)">组装URL</a-button>-->
      <!--        <a-button block @click="generate_magnet_url(true)">免费URL</a-button>-->
      <!--      </a-space-compact>-->
    </a-space>
    <a-modal v-model:open="open" :title="modal_title" @ok="handleOk">
      <a-tooltip v-if="torrents.length <= 1" :title="url_list[0]">
        <a-alert :message="singleTorrent.subtitle" style="text-align: center !important;"></a-alert>
      </a-tooltip>
      <a-tooltip v-else :title="`正在批量下载本页种子`">
        <a-alert :message="`本页抓取到种子${torrents.length}个，准备下载${url_list.length}个种子`"
                 style="text-align: center !important;"></a-alert>
      </a-tooltip>
      <a-collapse
          v-model:activeKey="activeKey"
          :bordered="false"
          accordion
          expand-icon-position="end"
          style="background: rgb(255, 255, 255)"
          @change="getDownloaderCategorise">
        <a-collapse-panel v-for="d in downloaders" :key="d.id" style="font-size: 16px;">
          <template #header>
            <a-avatar :size="18">
              {{ d.category }}
            </a-avatar>
            <!--            <a-image-->
            <!--                :width="16"-->
            <!--                style="margin-top: -3px;padding-right: 1px;"-->
            <!--                :src="d.category === 'Qb' ? `${api}images/qb32.png` : `${api}images/tr.png`"/>-->
            <span style="margin-left: 3px;">{{ d.name }}</span>
          </template>
          <a-space align="center" wrap>
            <a-button
                v-if="d.category === 'Qb'"
                ghost
                size="small"
                type="primary"
                @click="push_torrent(d.id, '')"
            >
              未分类
            </a-button>
            <a-button
                v-for="c in categories"
                ghost
                size="small" type="primary"
                @click="push_torrent(d.id, c.name)"
            >
              {{ c.name }}
            </a-button>
          </a-space>
        </a-collapse-panel>
      </a-collapse>
    </a-modal>
    <a-modal v-model:open="init_modal" :footer="null" cancel-text="取消" ok-text="保存"
             title="请填写收割机服务器地址" width="400px"
             @ok="handleSaveServer">
      <a-form layout="vertical" style="margin: auto;">
        <a-form-item>
          <a-input-group compact>
            <a-input v-model:value="api" placeholder="Harvest服务器地址" style="width: 220px;"/>
            <a-button :href="api" danger style="width: 80px;" target="_blank" type="dashed">打开
            </a-button>
          </a-input-group>
        </a-form-item>
        <a-form-item>
          <a-input v-model:value.lazy="token" autofocus label="Token" placeholder="安全Token" style="width: 300px;"/>
        </a-form-item>
        <a-form-item>
          <a-button style="width: 300px;" type="primary" @click="handleSaveServer">保存</a-button>
        </a-form-item>
      </a-form>
    </a-modal>
    <a-drawer
        :bodyStyle="{
          padding:0
        }" :open="drawer" :width="400"
        :zIndex="10001" placement="right" title="辅种助手"
        @close="drawer=!drawer"
    >
      <template #extra>
        <a-avatar :src="`${api}favicon.png`">
          辅种助手
        </a-avatar>
      </template>
      <a-card style="width: 100%" title="可辅种站点">
        <a-space align="center" wrap>
          <a-button
              v-for="info in repeat_info!.url_list"
              :key="info.site.id"
              :href="info.details_url"
              ghost
              size="small"
              target="_blank"
              type="primary"
          >
            <template #icon>
              <a-image
                  :fallback="`${api}${info.site.logo}`"
                  :preview="false" :src="info.site.logo"
                  :width="13"
              ></a-image>
            </template>
            {{ info.site.name }}
          </a-button>
        </a-space>
      </a-card>
      <a-card title="可发布站点">
        <a-space align="center" wrap>
          <a-button
              v-for="site in repeat_info!.can_list"
              :key="site.id" :href="site.url"
              danger
              ghost
              size="small" target="_blank">
            <template #icon>
              <a-image
                  :fallback="`${api}favicon.png`" :src="site.logo"
                  :width="13"
              ></a-image>
            </template>
            {{ site.name }}
          </a-button>
        </a-space>
      </a-card>
    </a-drawer>
  </div>
</template>


