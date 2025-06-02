<script lang="ts" setup>
import {onBeforeMount, onMounted, ref} from "vue";
import {GM_cookie, GM_getValue, GM_info, GM_setValue, GM_xmlhttpRequest} from 'vite-plugin-monkey/dist/client'
import {message} from "ant-design-vue"
import {
  ArrowDownOutlined,
  DownloadOutlined,
  DragOutlined,
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
  sort_id?: number
  category: string
}

export interface Category {
  name: string
  savePath: string
}

message.config({
  top: `50px`,
});
const activeKey = ref<number>();
const downloaders = ref<Downloader[]>([])
const user_detail_page = ref(false)
const torrent_list_page = ref(false)
const torrent_detail_page = ref(false)
const torrent_detail_repeat = ref(false)
const open = ref<boolean>(false);
const categories = ref<Category[]>([])
const fallback_image = ref<string>('https://picsum.photos/100/100/?random')
const cookie = ref<string>('')
const url_list = ref<string[]>([])
const modal_title = ref<string>('下载到')
const singleTorrent = ref<Torrent>()
const mySiteId = ref<number>(0)
const siteInfo = ref();
const harvestWrap = ref<HTMLElement | null>(null);
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const onMouseDown = (e: MouseEvent) => {
  if (!harvestWrap.value) return;
  isDragging = true;
  offsetX = e.clientX - harvestWrap.value.getBoundingClientRect().left;
  offsetY = e.clientY - harvestWrap.value.getBoundingClientRect().top;
  harvestWrap.value.style.cursor = "grabbing";
};

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging || !harvestWrap.value) return;
  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;
  harvestWrap.value.style.left = `${x}px`;
  harvestWrap.value.style.top = `${y}px`;
};

const onMouseUp = () => {
  isDragging = false;
  if (!harvestWrap.value) return;
  if (harvestWrap.value) {
    harvestWrap.value.style.cursor = "grab";
  }
  // 获取屏幕宽度和元素宽度
  const screenWidth = window.innerWidth;
  const elementWidth = harvestWrap.value?.offsetWidth;
  const elementLeft = parseInt(harvestWrap.value.style.left, 10);

  // 判断停靠位置
  if (elementLeft > screenWidth / 2 - elementWidth / 2) {
    // 靠右停放
    harvestWrap.value.style.left = `${screenWidth - elementWidth}px`;
  } else {
    // 靠左停放
    harvestWrap.value!.style.left = "0px";
  }
};

onMounted(() => {
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});
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
  console.log(activeKey.value)
  activeKey.value = downloader_id
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
// if (location.pathname.includes(siteInfo.value.page_detail) //尝试与配置文件中的信息绑定
  if (location.pathname.startsWith('/details.php')
      || location.pathname.includes('/torrent.php')
      || location.pathname.includes('/views.php')
      || location.pathname.includes('/Torrents/details')
      || location.pathname.search(/torrents\D*\d+/) > 0
      || location.pathname.search(/t\/\d+/) > 0
  ) {
    console.log('当前为种子详情页')
    if (downloaders.value.length <= 0) {
      await getDownloaders()
    }
    torrent_detail_page.value = true
    await get_torrent_detail()
    // await sync_torrents()
    let tid = torrents.value[0].tid
    console.log(tid)
    if (!tid) {
      message.warning('未获取到种子 id！')
      return
    }


    await repeat(tid)

  }
// if (location.pathname.includes(siteInfo.value.page_torrents) //尝试与配置文件中的信息绑定
  if (location.pathname.search(/torrents\D*$/) > 0 ||
      location.pathname.search(/t$/) > 0 ||
      location.pathname.endsWith('/Torrents') ||
      location.pathname.includes('/music.php') ||
      location.pathname.includes('/special.php') ||
      location.pathname.includes('/live.php') ||
      location.pathname.includes('/torrents.php') ||
      location.pathname.includes('/browse.php')) {
    console.log('当前为种子列表页')
    torrent_list_page.value = true
    if (downloaders.value.length <= 0) {
      await getDownloaders()
    }
    await get_torrent_id_list()
    // await sync_torrents()
  }
  // if (location.pathname.includes(siteInfo.value.page_user) //尝试与配置文件中的信息绑定
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

  // if (location.pathname.includes(siteInfo.value.page_control_panel) //尝试与配置文件中的信息绑定
  if ((location.pathname.search(/usercp.php/) > 0 && !location.href.includes('?')) ||
      location.href.includes('p_user/edit_passkey') ||
      location.href.includes('/index.php?page=usercp&do=pid_c&action=change&uid=') ||
      location.href.includes('/Users/me') ||
      location.href.includes('/user/setting') ||
      location.href.includes('/my.php')
  ) {
    console.log('当前为控制面板页')
    user_detail_page.value = true
    await sync_cookie()
  }
}


/**
 * 获取站点相关规则并写入本地存储
 * @returns
 */
const getSite = async (): Promise<boolean | null> => {
  if (mySiteId.value > 0 && siteInfo.value) {
    return null;
  }
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
        Authorization: `Bearer Monkey.${token.value}`,
      },
      onload: function (response) {
        console.log(response)
        let res = response.response
        console.log(res)
        if (res.code === 0) {
          console.log(res.msg)
          resolve(true)
        } else {
          let msg = `获取站点信息出错：${res.msg}`;
          console.warn(msg)
          message.warning(msg, 10000)
          resolve(false)
          return
        }

        mySiteId.value = res.data.mysite
        siteInfo.value = res.data.website
        localStorage.setItem('website', JSON.stringify(res.data.website))
        localStorage.setItem('mySite', JSON.stringify(res.data.mysite))
        resolve(true)
      },
      onerror: function () {
        console.log('服务器连接失败！')
        reject(false)
      }
    })
  })
};


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

  console.log(siteInfo.value)
  if (siteInfo.value === false) {
    message.error('收割机服务器连接失败！')
    return false;
  }
  console.log(siteInfo.value.my_uid_rule)
  //获取cookie与useragent
  let user_agent = window.navigator.userAgent
  let cookie = await getCookie()
  if (!cookie && !document.location.host.includes("m-team")) {
    message.error('Cookie获取失败，请使用Beta版油猴（红色图标的油猴）！')
    return false
  }
  //获取UID
  let href = document.evaluate(siteInfo.value.my_uid_rule, document).iterateNext()!.textContent
  console.log(href)

  if (!href) {
    console.log('获取 UID 出错啦！')
    return false
  }
  if (location.href.includes('?id=') && !location.href.endsWith(href)) {
    console.log('非本人主页，取消同步！')
    return false
  }
  let user_id;
  if (href.includes("=")) {
    if (!href.startsWith('http')) {
      href = `${location.origin}/${href}`
    }

    let url = new URL(href)
    user_id = url.searchParams.get("id") ?? url.searchParams.get("uid") ?? url.searchParams.get("user_id") ?? url.searchParams.get("uuid")
  } else {
    let user_id_info = href.split('/')
    user_id = user_id_info[user_id_info.length - 1].trim()
  }

  console.log(user_id)
  if (!user_id) {
    message.error('用户ID获取失败！')
    return false
  }

  /* 处理馒头域名 */
  let host = `${document.location.origin}/`
  if (host.includes("m-team")) {
    host = host.replace("xp.", "api.")
    host = host.replace("kp.", "api.")
  }
  let data = `user_id=${user_id}&site=${siteInfo.value.name}&cookie=${cookie}&user_agent=${user_agent}`
  /* 处理馒头域名结束 */

  if (mySiteId.value != 0) {
    data += `&id=${mySiteId.value}`
  }
  if (mySiteId.value == 0) {
    data += `&nickname=${siteInfo.value.name}&mirror=${host}`
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
    let passkey = document.evaluate(siteInfo.value.my_passkey_rule, document).iterateNext()!.textContent
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
    let time_join = document.evaluate(siteInfo.value.my_time_join_rule, document).iterateNext()!.textContent
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
  let flag = await getSite()
  console.log(flag)
  if (flag == false) {
    return
  }
  let data = await getSiteData();
  console.log(data)
  if (data) {
    return await send_site_info(data).then(res => {
      return res
    })
  }
}

/**
 * 跳转控制面板页面并同步 Cookie
 */
async function go_to_control_page() {
  console.log('跳转控制面板页面...')
  console.log(siteInfo.value)
  if (!(siteInfo.value)) {
    await getSite()
  }
  let url = siteInfo.value.page_control_panel
  location.replace(url);
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
        Authorization: `Bearer Monkey.${token.value}`,
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
/**
 * 提取链接中的 数字 id 信息
 * @param s
 */
const extractId = (s: string) => {
  const regexAll = /(?:t[-\/]|[?&]id=)(\d+)/;
  return s.match(regexAll)?.[1]
}

async function get_torrent_id_list() {
  torrents.value.length = 0
  let torrent_list = xpath(siteInfo.value.torrents_rule.replace("]/tr", "]/tbody/tr"), document)
  console.log('获取到种子数量：', torrent_list.snapshotLength)
  for (let i = 0; i <= torrent_list.snapshotLength; i++) {
    try {
      let torrent_info = torrent_list.snapshotItem(i)
      // 未获取到数据节点，pass
      console.debug(torrent_info)
      if (!torrent_info) continue
      let detail_url = xpath(siteInfo.value.torrent_detail_url_rule, torrent_info).snapshotItem(0)
      console.debug(detail_url)
      if (!detail_url) continue
      let tid = extractId(detail_url!.textContent!)!
      let sale = xpath(siteInfo.value.torrent_sale_rule, torrent_info).snapshotItem(0)

      torrents.value.push({
        tid: tid,
        sale_status: sale ? sale.textContent : '',
      })
    } catch (e) {
      console.trace(e)
    }
  }
  console.log('获取到种子信息：', torrents.value)
}

async function get_torrent_list() {
  torrents.value.length = 0
  let torrent_list = xpath(siteInfo.value.torrents_rule.replace("]/tr", "]/tbody/tr"), document)
  console.log('获取到种子数量：', torrent_list.snapshotLength)
  for (let i = 0; i <= torrent_list.snapshotLength; i++) {
    try {
      let torrent_info = torrent_list.snapshotItem(i)
      // 未获取到数据节点，pass
      if (!torrent_info) continue
      let title = xpath(siteInfo.value.torrent_title_rule, torrent_info).snapshotItem(0)
      let category = xpath(siteInfo.value.torrent_category_rule, torrent_info).snapshotItem(0)
      let completers = xpath(siteInfo.value.torrent_completers_rule, torrent_info).snapshotItem(0)
      let detail_url = xpath(siteInfo.value.torrent_detail_url_rule, torrent_info).snapshotItem(0)
      let hr = xpath(siteInfo.value.torrent_hr_rule, torrent_info).snapshotItem(0)
      let leechers = xpath(siteInfo.value.torrent_leechers_rule, torrent_info).snapshotItem(0)
      let magnet_url_node = xpath(siteInfo.value.torrent_magnet_url_rule, torrent_info).snapshotItem(0)
      let poster = xpath(siteInfo.value.torrent_poster_rule, torrent_info).snapshotItem(0)
      let published = xpath(siteInfo.value.torrent_release_rule, torrent_info).snapshotItem(0)
      let sale_expire = xpath(siteInfo.value.torrent_sale_expire_rule, torrent_info).snapshotItem(0)
      let sale = xpath(siteInfo.value.torrent_sale_rule, torrent_info).snapshotItem(0)
      let seeders = xpath(siteInfo.value.torrent_seeders_rule, torrent_info).snapshotItem(0)
      let size_items = xpath(siteInfo.value.torrent_size_rule, torrent_info)
      let subtitle = xpath(siteInfo.value.torrent_subtitle_rule, torrent_info).snapshotItem(0)
      let tags = xpath(siteInfo.value.torrent_tags_rule, torrent_info)
      console.log(detail_url)
      if (!detail_url) continue
      let tid = detail_url!.textContent!.match(/id=(\d+)/)![1]
      // 未获取到种子ID，pass
      console.log(tid)
      console.log(magnet_url_node)
      if (!tid) {
        continue
      }
      let magnet_url;
      if (!magnet_url_node) {
        magnet_url = siteInfo.value.page_download.replace("{}", tid)
        if (magnet_url?.includes('{}')) {
          magnet_url = magnet_url?.replace("&passkey={}", "")
        }
        console.log(magnet_url)
      } else {
        magnet_url = magnet_url_node.textContent
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
        tags: [tags.snapshotLength > 0 ? tag.join() : '', siteInfo.value.name].filter(item => item.length > 0),
        tid: tid,
        site_id: siteInfo.value.name,
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
  let title = xpath(siteInfo.value.detail_title_rule, document).snapshotItem(0)
  let subtitle = xpath(siteInfo.value.detail_subtitle_rule, document).snapshotItem(0)
  let magnet_url = xpath(siteInfo.value.detail_download_url_rule, document).snapshotItem(0)
  let size = xpath(siteInfo.value.detail_size_rule, document).snapshotItem(0)
  let category = xpath(siteInfo.value.detail_category_rule, document).snapshotItem(0)
  let files_count = xpath(siteInfo.value.detail_count_files_rule, document).snapshotItem(0)
  let hash_string = xpath(siteInfo.value.detail_hash_rule, document).snapshotItem(0)
  let sale_status = xpath(siteInfo.value.detail_free_rule, document).snapshotItem(0)
  let sale_expire = xpath(siteInfo.value.detail_free_expire_rule, document).snapshotItem(0)
  let douban_url = xpath(siteInfo.value.detail_douban_rule, document).snapshotItem(0)
  let imdb = xpath(siteInfo.value.detail_imdb_rule, document).snapshotItem(0)
  let poster = xpath(siteInfo.value.detail_poster_rule, document).snapshotItem(0)
  let tags = xpath(siteInfo.value.detail_tags_rule, document)
  let hr = xpath(siteInfo.value.detail_hr_rule, document).snapshotItem(0)
  let tid = location.search.match(/id=(\d+)/)![1]


  let tag = []
  for (let i = 0; i < tags.snapshotLength; i++) {
    tag.push(tags.snapshotItem(i)!.textContent!.trim())
  }
  let torrent = {
    tid: tid,
    site_id: siteInfo.value.id,
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
    tags: [tags.snapshotLength > 0 ? tag.join() : '', siteInfo.value.name].filter(item => item.length > 0),
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
      Authorization: `Bearer Monkey.${token.value}`,
    },
    onload: function (response) {
      let res = response.response
      console.log(res)
      if (res.code !== 0) {
        console.log(res.msg)
      } else {
        console.log('下载器列表获取成功！', res)
        downloaders.value = res.data
        downloaders.value.sort((a, b) => (a.sort_id ?? 0) - (b.sort_id ?? 0))
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
      Authorization: `Bearer Monkey.${token.value}`,
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
    url: `${api.value}api/option/downloaders/category/${downloader_id}`,
    method: "GET",
    responseType: "json",
    headers: {
      Authorization: `Bearer Monkey.${token.value}`,
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
  if (torrents.value.length <= 0) {
    return
  }
  console.log(flag)
  if (flag) {
    url_list.value = torrents.value.filter(
        (torrent: Torrent) => torrent.sale_status.toLowerCase().includes('free')
    ).map((torrent: Torrent) => torrent.tid)
  } else {
    url_list.value = torrents.value.map((torrent: Torrent) => torrent.tid)
  }
  console.log(url_list.value)
}

/**
 * 推送种子到下载器
 */
const push_torrent = async (downloader_id: number, category: string | null, save_path: string | null) => {
  // await generate_magnet_url(false)
  console.log(url_list.value)
  if (url_list.value.length <= 0) {
    message.error('没有抓到种子链接！')
    return
  }
  const data = JSON.stringify({
    cookie: await getCookie(),
    category: category,
    save_path: save_path,
    urls: url_list.value,
    tags: [siteInfo.value.name, "harvest-monkey"],
  })
  console.log(data)
  GM_xmlhttpRequest({
    url: `${api.value}api/option/push_monkey/${downloader_id}/${mySiteId.value}`,
    method: "POST",
    responseType: "json",
    headers: {
      Authorization: `Bearer Monkey.${token.value}`,
    },
    data: data,
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
      Authorization: `Bearer Monkey.${token.value}`,
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
async function repeat(tid: number) {
  console.log(siteInfo.value)
  if (siteInfo.value && siteInfo.value.iyuu > 0) {
    torrent_detail_repeat.value = true
  }
  GM_xmlhttpRequest({
    url: `${api.value}api/auth/monkey/iyuu`, method: "POST",
    responseType: "json",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer Monkey.${token.value}`,
    },
    data: `torrent_id=${tid}&site_id=${mySiteId.value}`,
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
  if (downloaders.value.length <= 0) {
    await getDownloaders()
  }
  await get_torrent_detail()
  console.log(torrents.value)
  singleTorrent.value = torrents.value[0]
  await generate_magnet_url(false)
  modal_title.value = '正在下载当前种子...'
  showModal()
}

async function download_all() {
  if (downloaders.value.length <= 0) {
    await getDownloaders()
  }
  await get_torrent_id_list()
  await generate_magnet_url(false)
  // modal_title.value = `正在下载本页所有${url_list.value.length}条种子...`
  showModal()
}

async function download_free() {
  if (downloaders.value.length <= 0) {
    await getDownloaders()
  }
  await get_torrent_id_list()
  // await get_torrent_list()
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
    console.log(GM_info)
    const isTampermonkeyBeta = GM_info.version > '5.0.0';

    if (isTampermonkeyBeta) {
      console.log('当前是 Tampermonkey Beta 版本');
    } else {
      console.log('当前是 Tampermonkey 稳定版');
      message.error('请在篡改猴测试版中使用收割机脚本！');
      return;
    }

    // 最顶层才加载
    if (window.top != window.self || !checkServer()) return;
    let checkAuth;
    // 只加载一次
    while (init.value < 1) {
      if (!siteInfo.value) {
        checkAuth = await getSite()
      }
      console.log(checkAuth)
      if (!checkAuth) {
        return
      }
      await init_button()
      await getDownloaders()
      init.value++
    }
  } catch (error) {
    console.error('Error in beforeMount:', error);
    console.trace(error)
  }
})

</script>

<template>
  <div ref="harvestWrap" class="harvest-wrap">
    <div style="position:relative;">
      <a-image
          :preview="false"
          class="image"
          fallback="https://picsum.photos/200/200/?random"
          src="https://api.r10086.com/%E6%A8%B1%E9%81%93%E9%9A%8F%E6%9C%BA%E5%9B%BE%E7%89%87api%E6%8E%A5%E5%8F%A3.php?%E5%9B%BE%E7%89%87%E7%B3%BB%E5%88%97=%E5%B0%91%E5%A5%B3%E5%86%99%E7%9C%9F5"/>
      <DragOutlined class="move-item" @mousedown="onMouseDown"/>
    </div>
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
        <!--        <a-button-->
        <!--            v-if="user_detail_page && mySiteId == 0"-->
        <!--            block size="small"-->
        <!--            type="primary"-->
        <!--            @click="go_to_control_page">-->
        <!--          <template #icon>-->
        <!--            <SyncOutlined/>-->
        <!--          </template>-->
        <!--          同步数据-->
        <!--        </a-button>-->
        <a-button
            block size="small"
            type="primary"
            @click="go_to_control_page">
          <template #icon>
            <SyncOutlined/>
          </template>
          同步数据
        </a-button>
        <a-button
            v-if="torrent_list_page && downloaders.length > 0  && mySiteId > 0" block
            size="small"
            @click="download_all"
        >
          <template #icon>
            <ArrowDownOutlined/>
          </template>
          下载全部
        </a-button>
        <a-button
            v-if="torrent_list_page && downloaders.length > 0  && mySiteId > 0" block
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
            v-if="torrent_detail_page && downloaders.length > 0  && mySiteId > 0" block
            size="small"
            @click="download_to">
          <template #icon>
            <DownloadOutlined/>
          </template>
          下载到...
        </a-button>
        <a-button
            v-if="torrent_detail_repeat && mySiteId > 0" block
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
        <a-alert :message="singleTorrent?.subtitle" style="text-align: center !important;"></a-alert>
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
                @click="push_torrent(d.id, null,null)"
            >
              未分类
            </a-button>
            <a-button
                v-for="c in categories"
                ghost
                size="small" type="primary"
                @click="push_torrent(d.id,  c.name , c.savePath)"
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
          <a-input v-model:value.lazy="token" autofocus label="Token" placeholder="安全Token"
                   style="width: 300px;text-align: center;"/>
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
      <a-card :title="`可辅种站点: ${repeat_info!.url_list.length}`" style="width: 100%">
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
                  :fallback="fallback_image"
                  :preview="false" :src="info.site.logo.replace('http://','https://')"
                  :width="13"
              ></a-image>
            </template>
            {{ info.site.name }}
          </a-button>
        </a-space>
      </a-card>
      <a-card :title="`可发布站点: ${repeat_info!.can_list.length}`">
        <a-space align="center" wrap>
          <a-button
              v-for="site in repeat_info!.can_list"
              :key="site.id" :href="site.url"
              danger
              ghost
              size="small" target="_blank">
            <template #icon>
              <a-image
                  :fallback="fallback_image" :src="site.logo.replace('http://','https://')"
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


