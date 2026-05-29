# Helloalp's Personal Website

> **Site:** [helloalp.top](https://helloalp.top)  
> **Author:** Helloalp ([realfrancis2022@gmail.com](mailto:realfrancis2022@gmail.com))  
> **Type:** Static personal website / Student toolbox / Minecraft org site / Campus portal

---

## Overview

A full-featured static website maintained by a student. Includes a navigation portal, blog, game collection, encryption tools, network speed test, Minecraft client/org site, and an unofficial school portal. **No backend, no build process, pure HTML/CSS/JS.**

---

## Directory Structure

```
helloalp.github.io/
│
├── index.html                 # Main portal (older version, still live)
├── indexlight.html            # Main portal (light version, green terminal style)
│
├── 404.html                   # 404 page
├── 404old.html                # Old 404 page
├── robots.txt                 # Search engine crawler rules
├── CNAME                      # GitHub Pages custom domain
├── BingSiteAuth.xml           # Bing webmaster verification
├── sogousiteverification.txt  # Sogou search verification
├── sitemap.xml                # Sitemap
├── sitemap.txt
├── sitemap_location.xml
├── sitemap/                   # Additional sitemap files
│
├── global/                    # Global shared assets
│   ├── global.css
│   ├── global.js              # Global scripts (copy protection, etc.)
│   ├── control.css / control.js
│   ├── jquery.js
│   └── openlib.js
│
├── cdn/                       # Self-hosted CDN assets
│   ├── stylesheet/index/      # Homepage styles
│   ├── js/                    # jQuery & other JS libs
│   ├── pictures/              # 242 meme images
│   └── torrent/               # Torrent files
│
├── newsite/                   # Personal blog (main blog)
│   ├── index.html             # Blog directory
│   ├── indexold.html          # Older blog directory
│   ├── sakuraindexold.html    # Sakura-themed old version
│   ├── publish.html           # Submit posts & contact
│   ├── css/ / fonts/ / pictures/ / script/
│   ├── qstatic/               # Font chunks (Dela Gothic One, etc.)
│   └── 20+ articles           # School critiques, poems, social topics
│
├── sstf/                      # SSTF (Shishitianfu) Student Portal (unofficial)
│   ├── home.html              # Portal homepage
│   ├── homeold.html           # Old homepage
│   ├── menu.html / menu2.html # Blog directory
│   ├── forumjumper.html       # Forum redirect
│   ├── anonymousjumper.html   # Anonymous interaction
│   ├── openlib2.html          # Library query redirect
│   ├── cdn/ / home/ / archive/ / menu/
│   └── post/                  # 8 articles (cafeteria, schedule, surveys, etc.)
│
├── hc/                        # Hello Client (Minecraft utility mod)
│   ├── index.html             # Home
│   ├── donate.html            # Donate
│   ├── update.html            # Downloads & updates
│   ├── debug.html             # Bug reports & feedback
│   ├── hp/                    # Hello Pack (resource pack)
│   └── update/                # Changelog
│
├── organization/              # NAU Organization (Minecraft 2b2t)
│   ├── home.html              # Internal homepage (password-protected)
│   ├── archive.html           # Internal download center
│   ├── memberspage2.html      # Member page
│   ├── membersqrcode1.html
│   └── archives/              # JAR tool collection
│
├── games/                     # Web games collection
│   ├── index.html             # Game directory
│   ├── 2048/                  # 2048 (CN/EN)
│   ├── snakes/                # Snake
│   ├── snakes2/               # Snake (enhanced)
│   ├── minesweeper/           # Minesweeper
│   ├── maze/                  # Maze
│   ├── fluidonline/           # WebGL fluid simulation
│   └── starssky/              # Starry sky animation
│
├── ai/                        # AI tools
│   ├── onlineai.html          # ChatGPT portal
│   ├── about-openai-api-key.html  # API Key guide
│   └── openai-api-key-query.html  # Key balance checker
│
├── personal/                  # Personal content
│   ├── blog.html              # Daily quote (old)
│   ├── newblog.html           # Daily quote
│   ├── realblog.html          # Micro-blog
│   └── overview/              # Tutoring service menu
│
├── archive/                   # File archives
│   ├── home.html              # Archive homepage
│   ├── text/                  # E-books (LOTR, HP, etc.)
│   ├── minecraft/             # Minecraft resources
│   └── PDF / MP3 / ZIP / 7Z
│
├── auth/                      # Authentication
│   └── authpw2.html           # Password verification
├── secret/                    # Hidden content
│   └── yellow.html            # Learning materials (password-protected)
│
├── cube/                      # Rubik's Cube toolbox
│   └── index.html
│
├── openlib/                   # Library query system
│   ├── libsys64.html          # Loading page
│   └── usage.html             # Usage instructions
│
├── openads/                   # Ad pages
│   ├── ad1.html               # Cloud server ad
│   └── authad2.html           # Shadow Shop ad
│
├── testsite/                  # Test site (Bootstrap template)
│   └── index.html + CSS/JS/images
│
├── hugosite/                  # Hugo-generated static blog (standalone)
│   └── index.html + posts/ + CSS/JS
│
├── Root-level tool pages      # Standalone single-page tools
│   ├── aesencrypt.html        # AES encrypt/decrypt
│   ├── base64encrypt.html     # Base64 obfuscator
│   ├── shaencrypt.html        # SHA online hash
│   ├── ssv.html               # Network speed test (CN)
│   ├── ssv_en-US.html         # Network speed test (EN)
│   ├── power.html             # Device performance benchmark
│   ├── poweragreement.html    # Performance test agreement
│   ├── timer.html             # Countdown center
│   ├── downloadcenter.html    # Download center
│   ├── downloadunlockcode.html # Unlock code download
│   ├── books.html             # E-book downloads
│   ├── musichall.html         # Music player (experimental)
│   ├── gtcenter.html          # Meme gallery
│   ├── menu.html              # Full site directory
│   ├── clean.html             # Cache cleaner
│   ├── siteinfo.html          # Site info
│   ├── backup.html            # Backup sites & contact
│   ├── emergency.html         # CDN outage notice
│   ├── updates.html           # Changelog
│   ├── formerupdates.html     # Old changelog
│   ├── history.html           # Organization history
│   ├── htmlcodelighter.html   # HTML code minifier
│   ├── password.html          # NAU org password gate
│   ├── teaminsideindex.html   # NAU internal entry
│   ├── teamoutsideindex.html  # NAU external entry
│   ├── less_is_more.html      # "Less is more" display page
│   └── ajax.html              # AJAX loading transition
│
├── Shared JS
│   ├── content-management.js      # Anti-copy / anti-right-click
│   ├── content-management-2.js    # Anti-copy (enhanced)
│   ├── copyaddon.css / .min.js    # SweetAlert-style modals
│   ├── crypto-js.js / .min.js     # CryptoJS encryption library
│   ├── plyr.css / plyr.js         # Media player
│   ├── realblogscript.js          # Micro-blog content data
│   └── aesencrypt.js              # AES encryption logic
│
├── Images / Icons
│   ├── icon.ico / icon2.ico       # Favicons
│   ├── logo.png                   # Logo
│   ├── indexbackground.jpg / indexbgimg.png
│   └── important.css              # Font CDN definitions (2607 lines)
│
├── Dockerfile                 # Nginx container deployment
└── .dockerignore              # Docker exclusion rules
```

---

## Subprojects

| Subproject | Path | Description |
|------------|------|-------------|
| Main Portal | `index.html` | Central hub linking to all services |
| Personal Blog | `newsite/` | Student's school critiques & poems |
| SSTF Campus Portal | `sstf/` | Unofficial SSTF student portal |
| Minecraft Client | `hc/` | Hello Client utility mod |
| NAU Org Site | `organization/` | 2b2t Minecraft org internal site |
| Game Collection | `games/` | 7 web mini-games |
| Encryption Tools | root `*encrypt*.html` | AES / Base64 / SHA |
| Network Test | `ssv.html` | Custom speed test tool |
| AI Tools | `ai/` | ChatGPT portal & API management |
| Library Query | `openlib/` | School library online search |
| Hugo Blog | `hugosite/` | Standalone Hugo-generated blog |
| Test Site | `testsite/` | Bootstrap template demo |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Vanilla HTML + CSS + JavaScript |
| Dependencies | jQuery, CryptoJS, Plyr (directly referenced, no package manager) |
| Containerization | Nginx Alpine (Docker) |
| Deployment | GitHub Pages / Vercel / Self-hosted |

---

## Docker Deployment

```bash
# Build image
docker build -t helloalp .

# Run container
docker run -d -p 80:80 --name helloalp-container helloalp

# Visit
http://localhost/
```

Based on `nginx:alpine` — all static files copied to `/usr/share/nginx/html`.

---

## Mirror Sites

- China: [sstf.pages.dev](https://sstf.pages.dev)
- Overseas: [sstf.vercel.app](https://sstf.vercel.app) (VPN may be required)

---

## License

No open-source license specified. Copyright © Helloalp
