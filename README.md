# Helloalp 的个人网站

> **站点:** [helloalp.top](https://helloalp.top)  
> **作者:** Helloalp ([realfrancis2022@gmail.com](mailto:realfrancis2022@gmail.com))  
> **性质:** 纯静态个人网站 / 学生工具箱 / Minecraft 组织站 / 校园门户

---

## 👀项目概览

一个学生个人维护的全功能静态网站，集成了导航门户、博客、游戏合集、加密工具、网络测试、Minecraft 客户端/组织站、学校非官方门户等功能。**无后端、无构建流程、纯 HTML/CSS/JS。**

---

## 📂目录结构

```
helloalp.github.io/
│
├── index.html                 # 主站导航页（旧版，仍在使用）
├── indexlight.html            # 主站导航页（轻量版，绿色终端风）
│
├── 404.html                   # 404 页面
├── 404old.html                # 旧版 404 页面
├── robots.txt                 # 搜索引擎爬虫规则
├── CNAME                      # GitHub Pages 自定义域名
├── BingSiteAuth.xml           # Bing 站长验证
├── sogousiteverification.txt  # 搜狗站长验证
├── sitemap.xml                # 站点地图
├── sitemap.txt
├── sitemap_location.xml
├── sitemap/                   # 额外 sitemap 文件
│
├── global/                    # 全局公共资源
│   ├── global.css
│   ├── global.js              # 全局脚本（防复制等）
│   ├── control.css / control.js
│   ├── jquery.js
│   └── openlib.js
│
├── cdn/                       # 自建 CDN 资源
│   ├── stylesheet/index/      # 首页样式
│   ├── js/                    # jQuery 等 JS 库
│   ├── pictures/              # 242 张梗图
│   └── torrent/               # BT 种子
│
├── newsite/                   # 个人博客（主博客）
│   ├── index.html             # 博客目录
│   ├── indexold.html          # 旧版博客目录
│   ├── sakuraindexold.html    # 樱花主题旧版
│   ├── publish.html           # 投稿与联系
│   ├── css/ / fonts/ / pictures/ / script/
│   ├── qstatic/               # 字体分片（Dela Gothic One 等）
│   └── 20+ 篇博文             # 校园评论、诗歌、社会话题
│
├── sstf/                      # 石室天府学生门户（非官方）
│   ├── home.html              # 门户首页
│   ├── homeold.html           # 旧版首页
│   ├── menu.html / menu2.html # 博客目录
│   ├── forumjumper.html       # 论坛跳转
│   ├── anonymousjumper.html   # 匿名互动
│   ├── openlib2.html          # 图书馆查询跳转
│   ├── cdn/ / home/ / archive/ / menu/
│   └── post/                  # 8 篇博文（食堂、作息、调查等）
│
├── hc/                        # Hello Client（Minecraft 工具客户端）
│   ├── index.html             # 主页
│   ├── donate.html            # 捐赠
│   ├── update.html            # 更新下载
│   ├── debug.html             # 反馈
│   ├── hp/                    # Hello Pack（材质包）
│   └── update/                # 更新日志
│
├── organization/              # NAU 组织（Minecraft 2b2t）
│   ├── home.html              # 内部主页（密码保护）
│   ├── archive.html           # 内部下载中心
│   ├── memberspage2.html      # 成员个人页
│   ├── membersqrcode1.html
│   └── archives/              # JAR 工具包合集
│
├── games/                     # 网页游戏合集
│   ├── index.html             # 游戏目录
│   ├── 2048/                  # 2048（中/英文版）
│   ├── snakes/                # 贪吃蛇
│   ├── snakes2/               # 贪吃蛇（增强版）
│   ├── minesweeper/           # 扫雷
│   ├── maze/                  # 迷宫
│   ├── fluidonline/           # WebGL 流体模拟
│   └── starssky/              # 星空动画
│
├── ai/                        # AI 工具
│   ├── onlineai.html          # ChatGPT 入口
│   ├── about-openai-api-key.html  # API Key 指南
│   └── openai-api-key-query.html  # Key 余额查询
│
├── personal/                  # 个人内容
│   ├── blog.html              # 每日一语（旧版）
│   ├── newblog.html           # 每日一语
│   ├── realblog.html          # 每日微语
│   └── overview/              # 假期兼职服务菜单
│
├── archive/                   # 文件档案
│   ├── home.html              # 档案库首页
│   ├── text/                  # 电子书（魔戒、HP 等）
│   ├── minecraft/             # Minecraft 资源
│   └── PDF / MP3 / ZIP / 7Z
│
├── auth/                      # 认证页面
│   └── authpw2.html           # 密码验证
├── secret/                    # 隐藏内容
│   └── yellow.html            # 学习资料库（密码保护）
│
├── cube/                      # 魔方工具箱
│   └── index.html
│
├── openlib/                   # 图书馆查询系统
│   ├── libsys64.html          # 加载页
│   └── usage.html             # 使用说明
│
├── openads/                   # 广告页面
│   ├── ad1.html               # 云服务器广告
│   └── authad2.html           # 暗影小店广告
│
├── testsite/                  # 测试站（Bootstrap 模板）
│   └── index.html + CSS/JS/图片
│
├── hugosite/                  # Hugo 生成的静态博客（独立）
│   └── index.html + posts/ + CSS/JS
│
├── 根目录工具页               # 单页工具
│   ├── aesencrypt.html        # AES 加密/解密
│   ├── base64encrypt.html     # Base64 混淆
│   ├── shaencrypt.html        # SHA 在线哈希
│   ├── ssv.html               # 科研级网速测试
│   ├── ssv_en-US.html         # 网速测试（海外版）
│   ├── power.html             # 设备性能测试
│   ├── poweragreement.html    # 性能测试协议
│   ├── timer.html             # 倒计时中心
│   ├── downloadcenter.html    # 下载中心
│   ├── downloadunlockcode.html # 解锁码下载
│   ├── books.html             # 小说下载
│   ├── musichall.html         # 音乐播放器（实验）
│   ├── gtcenter.html          # 梗图乐园
│   ├── menu.html              # 全站功能目录
│   ├── clean.html             # 缓存清理
│   ├── siteinfo.html          # 站点信息
│   ├── backup.html            # 备用站点与联系方式
│   ├── emergency.html         # CDN 故障声明
│   ├── updates.html           # 更新日志
│   ├── formerupdates.html     # 旧版更新日志
│   ├── history.html           # 组织历史
│   ├── htmlcodelighter.html   # HTML 代码压缩
│   ├── password.html          # NAU 组织密码门
│   ├── teaminsideindex.html   # NAU 内部入口
│   ├── teamoutsideindex.html  # NAU 外部入口
│   ├── less_is_more.html      # "少即是多" 展示页
│   └── ajax.html              # AJAX 加载中转
│
├── JS 公用脚本
│   ├── content-management.js      # 防复制/防右键
│   ├── content-management-2.js    # 防复制（加强版）
│   ├── copyaddon.css / .min.js    # SweetAlert 弹窗
│   ├── crypto-js.js / .min.js     # CryptoJS 加密库
│   ├── plyr.css / plyr.js         # 媒体播放器
│   ├── realblogscript.js          # 微语内容数据
│   └── aesencrypt.js              # AES 加密逻辑
│
├── 图片/图标
│   ├── icon.ico / icon2.ico       # 网站图标
│   ├── logo.png                   # Logo
│   ├── indexbackground.jpg / indexbgimg.png
│   └── important.css              # 字体 CDN 定义（2607 行）
│
├── Dockerfile                 # Nginx 容器部署
└── .dockerignore              # Docker 排除规则
```

---

## 🔭子项目一览

| 子项目 | 路径 | 说明 |
|--------|------|------|
| 主站导航 | `index.html` | 全网功能入口导航 |
| 个人博客 | `newsite/` | 学生视角的校园评论与诗歌 |
| SSTF 校园门户 | `sstf/` | 石室天府非官方学生门户 |
| Minecraft 客户端 | `hc/` | Hello Client 工具客户端 |
| NAU 组织站 | `organization/` | 2b2t 游戏组织内部站 |
| 游戏合集 | `games/` | 7 款网页小游戏 |
| 加密工具箱 | 根目录 `*encrypt*.html` | AES/Base64/SHA |
| 网络测试 | `ssv.html` | 自定义网速测试工具 |
| AI 工具 | `ai/` | ChatGPT 入口与 API 管理 |
| 图书馆查询 | `openlib/` | 学校图书馆在线查询 |
| Hugo 博客 | `hugosite/` | 独立 Hugo 静态博客 |
| 测试站 | `testsite/` | Bootstrap 模板演示 |

---

## 🔧技术栈

| 层 | 技术 |
|----|------|
| 前端 | 原生 HTML + CSS + JavaScript |
| 依赖 | jQuery、CryptoJS、Plyr（直接引用，无包管理） |
| 容器化 | Nginx Alpine（Docker） |
| 部署 | GitHub Pages / Vercel / 自建服务器 |

---

## 🐋Docker 部署

```bash
# 安装Docker
[Docker](https://docs.docker.com/get-docker/)

# 构建镜像
docker build -t helloalp .

# 运行容器
docker run -d -p 80:80 --name helloalp-container helloalp

# 浏览网站
[http://localhost/](http://localhost/)
```

基于 `nginx:alpine`，全部静态文件复制到 `/usr/share/nginx/html`。

---

## 镜像站

- 国内: [sstf.pages.dev](https://sstf.pages.dev)
- 海外: [sstf.vercel.app](https://sstf.vercel.app)（需代理）

---

## 协议

本项目未明确开源协议，版权所有 © Helloalp
