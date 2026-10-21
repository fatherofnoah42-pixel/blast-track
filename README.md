# 爆破跑道 · Blast Track

FSL 公会塔防原型：STEPN 跑者冲过你的领地，你用易拉罐、香蕉皮、洒水器、洒水车、鞋盒无人机、广场舞音响、休闲诱惑站 7 个装置家族（外加经济建筑矿机）让他们摔倒退赛。支持中文 / English / Français，电脑（横屏、快捷键）和手机都能玩。

- **第一章「创世纪 · 2008–2010」**：6 关、每关 20 波 + 章节地图，跟着剧情从比特币白皮书走到价值溢出事件，每关结束收一张知识卡。
- **矿机**：比赛中按算力占比抢区块，挖到区块得「聪」并开一次三选一；全网算力会随难度调整上涨。
- **组合**：湿、滑、辣、冻、懵、热六种状态叠在同一个跑者身上会触发碎冰、冷热冲击、水上漂、蒸汽、蹦迪、当头一罐、脸着地等组合，首次触发收入图鉴。
- **克制型跑者**：雨衣跑者不怕洒水器和洒水车，弹簧鞋跑者跳过香蕉皮（被音响弄懵时除外），降噪耳机跑者不怕音响，巨鲸削弱小伤害。逼玩家混搭装置，首次遇到会弹出说明并收入图鉴。
- **跑者美术和号码布**：6 种跑者用手绘精灵图（`art/runners.webp`），带跑步动画（腿和手臂绕髋、肩摆动，身体随步伐起伏），每人随机 3 种肤色，肤色只影响外观。从第 3 波起会出现两种号码布变体：绿号码布（脚下绿圈）有 20% 概率躲开装置攻击、体力少两成；红号码布（脚下红圈）速度和体力各 +20%，但减速和诱惑站对他的效果多一半，装置也优先打他。出现概率和各项倍率都在配置表「全局」页（`bib` 开头）。跑者始终面朝跑步方向。
- **洒水器和洒水车**：两种独立装置。洒水器固定在原地持续喷水；洒水车会自己开，以停车位上的消防栓为中心，在「活动范围」内追着跑者喷水，更灵活也更贵；它只在跑道边的草地上开，不会开上跑道（离跑道的距离由配置表「全局」页 `truckTrackGap` 控制）。洒水车要靠成就「浇透全场」解锁：用洒水器累计淋湿 300 名跑者（跨局累计，配置表 `truckWet` 可改），解锁后凡是能用洒水器的关卡都能造洒水车。车的图是 `art/tower.truck.png`。
- **鞋盒无人机**：设好投递区后，无人机飞过去一次，之后一直在投递区上空盘旋、从那里直接投鞋盒，不再每投一次就往返发射台；改投递区时直接飞去新位置。
- **建塔图标**：建塔菜单用 `art/icon.tower.<装置>.png`（贴纸风格，128 × 128），由 `art/icons/make_icons.py` 从装置美术生成；换了装置美术后重新运行它即可。诱惑站和矿机还没有专属美术，它们的图标是用洒水器底座和音响机箱拼出来的。
- **城市公园地图**：第一章 6 关全部用同一张手绘地图（S 形跑道穿过公园）。电脑上横向显示，手机上旋转 90° 竖向显示；上方商铺、两侧树带和下方围栏不能放装置。
- **自由摆放**：地图按 20 × 20 的格子划分，跑道、树和石头以外的格子都能放装置；每种装置占 N × N 格（大多 2 × 2，诱惑站和矿机 3 × 3，配置表「装置」页可改）。
- **重开本关**：按钮栏的「↻ 重开本关」（电脑按 R）跳过剧情直接重来。
- **升级规则**：每个装置最多发展两条路线，都能先升到 2 级；先到 3 级的成为主路线，可升到 5 级（常规终局 5/2/0）；6 级专精变成 6/0/0，副路线移除，已花的钱抵扣 6 级费用。
- **经典模式**：原来的 15 波 + 每波神秘箱玩法，在章节地图里进入。

> 这是可玩原型，数值只用脚本机器人粗调过。局内 GST、聪和积分都只是原型里的链下数字，不和任何真实资产或代币挂钩。

**在线试玩：** `https://<你的 GitHub 用户名或组织>.github.io/<仓库名>/`（开启 GitHub Pages 后可用，见下文）

## 文件说明

| 路径 | 用途 |
| --- | --- |
| `index.html` | 游戏本体，直接用浏览器打开也能玩（要和 `vendor/` 文件夹放在一起） |
| `vendor/pixi.min.js` | PixiJS 8（MIT 开源许可，免费商用），WebGL 渲染。许可证原文在 `vendor/pixi.LICENSE.txt`。缺了它游戏会自动退回 Canvas 2D，照样能玩 |
| `config/blast-track-config.xlsx` | 配置表：装置、升级、敌人、波次、Boss、卡牌、地图、三语文字、美术资源，全部可改 |
| `tools/` | 生成 `index.html` 和配置表的源文件，只有改代码时才需要 |
| `art/tower.dart.*`、`art/shot.dart.*` | 易拉罐投手和飞行罐子的动画精灵图 + JSON，游戏默认自带 |
| `art/runners.webp` | 跑者精灵图：6 种跑者 × 3 种肤色 × 5 帧跑步动作，加上号码布。由 `art/runners/gen_runners.py` 从原画 `art/runners/ref/runners_ref.png` 生成（需要 Pillow、numpy、scipy、scikit-image），它会同时更新 `tools/script.js` 里的 `RUNNER_RIG`，之后运行 `tools/build.sh`。髋、肩关节点和摆动幅度在 `art/runners/rig.py` |
| `art/can-tosser/` | 易拉罐投手的部件图（底座、投臂、罐子、轴盖）和动画脚本。改 `gen_can_anim.py` 里的 `FIRE` / `IDLE` 表再运行 `python3 gen_can_anim.py`（需要 Pillow、numpy），就能重新生成上面的精灵图 |

## 渲染：PixiJS（WebGL）

地图、跑者、装置和界面文字照旧用 Canvas 2D 画在 `#cv` 上；PixiJS 只负责发光特效（闪光、火花、冲击波），画在叠在上面的一张透明 WebGL 画布里，由浏览器以加光方式（CSS `mix-blend-mode: plus-lighter`）叠到画面上，中间不做任何拷贝，所以几乎不增加开销。游戏里所有 `burst()`（粒子迸发）和 `ring()`（冲击圈）都会自动带上对应的光效，罐子命中也有命中闪光。爆炸留下的焦痕画在 2D 地图层上（跑者下面），纯 Canvas 模式也有。震屏是平滑抖动，大爆炸时画面轻微推近，两层同步。

- **自动退回**：浏览器不支持 WebGL、加载失败、或者 WebGL 在这台设备上跑得慢（比赛中前 5 秒低于 38 fps），游戏会自动改用原来的 Canvas 2D 画法，并在这台设备上记住。
- **手动切换（测试用）**：网址后面加 `#canvas` 强制用 Canvas 2D，加 `#webgl` 强制用 WebGL（都会在这台设备上记住）。
- **看帧率**：网址后面加 `#fps`，左下角显示当前渲染方式、帧率，以及每帧耗时拆分：logic（游戏逻辑）、2D（Canvas 绘制）、GL（WebGL 特效）、UI（侧栏界面）。两个可以合起来写，比如 `#fps-canvas`、`#fps-webgl`。
- 特效代码在 `tools/fx_pixi.js`，游戏里调用它的地方都写作 `FX.xxx(...)`。

## 发布到网页（GitHub Pages）

1. 仓库页面 → **Settings** → **Pages**。
2. **Source** 选 **Deploy from a branch**，Branch 选 `main`，文件夹选 `/ (root)`，点 **Save**。
3. 等 1–2 分钟，页面顶部会出现网址，就是上面的「在线试玩」地址。

以后每次往 `main` 推送新的 `index.html`，网页会自动更新。

## 不改代码也能调游戏

- **改数值和名称：** 下载 `config/blast-track-config.xlsx`，用 Excel 或 Google 表格修改，导出为 .xlsx，在游戏页面底部点「导入配置表」。只对你自己的浏览器生效。
- **换美术图：** 把图片文件名改成资源编号（如 `tower.dart.png`、`boss.yawn.png`），在游戏页面点「导入美术图片 / 动画」，可一次选多张。编号、尺寸、锚点见配置表「美术资源」工作表。
- **装置动画：** PNG 精灵图 + Aseprite / TexturePacker JSON，规范和可直接导入的示例在 `art/template/`。子弹弹道在配置表「弹道」工作表里调。
- **让所有人都看到新配置：** 把改好的配置表交给维护者，由维护者重新生成 `index.html` 后推送（见下一节）。

## 维护者：重新生成 index.html

需要 Python 3 和 openpyxl（`pip install openpyxl`）。

```bash
cd tools
bash build.sh        # 重新生成 ../index.html 和 ../config/blast-track-config.xlsx
```

- 游戏逻辑和界面：`tools/script.js`、`tools/head.html`
- 内置数值：`tools/cfg_build.py`；地图坐标：`tools/maps.py`；手绘地图：图片 `tools/map_park.jpg`，跑道路线和禁放区写在 `tools/script.js` 的 `IMG_MAPS`（图片像素坐标）；章节 20 波：`tools/gen20.py`；三语翻译：`tools/trans.py`
- 第一章剧情、关卡波次、知识卡、组合和克制型跑者说明：写在 `tools/script.js` 里的 `CH1`、`REACT`、`FOES`（还没进配置表）；20 波的波次表由 `tools/gen20.py` 生成
- 数值体检：配置表里的「数值体检·波次」是实时公式；「数值体检·装置」的估算来自 `tools/balance_model.py`，实测来自 `tools/sim_duel.mjs`（需要 `npm i playwright`，跑完会更新 `tools/balance_sim.json`，再运行 build.sh 写进配置表）

## 已知限制

- 字体来自 Google Fonts，导入配置表用到 cdnjs 上的读表组件。在访问不到这两个网站的网络里（例如中国大陆），游戏仍能玩，但会用系统字体，「导入配置表」也用不了。
- 开箱的 "Oh my God!" 用的是浏览器自带语音，不同设备声音不同，部分浏览器可能没有声音。
- 进度、导入的配置和图片都只保存在当前浏览器里。
- Boss 中 Lucas、Shiti、Jerry 以真人为原型，公开发布前请确认已获得本人同意。

---

## English

Blast Track is a tower-defense prototype for FSL guilds: STEPN runners dash through your turf and you trip them up with six device families (cans, banana-peel traps, sprinklers, shoebox drones, dance speakers, chill spots) plus the miner. Chapter 1 (2008–2010) is six short story levels through early bitcoin history, with a miner device that wins blocks (sats + a pick-one-of-three) and status combos between devices. Classic mode keeps the 15-wave Mystery Box run. UI in Chinese, English and French; desktop (landscape, hotkeys) and mobile.

- **Play:** enable GitHub Pages (Settings → Pages → Deploy from branch `main`, folder `/`), then open `https://<owner>.github.io/<repo>/`.
- **Tune without code:** edit `config/blast-track-config.xlsx`, then use "Import config" on the game page (applies to your browser only).
- **Rebuild:** `cd tools && bash build.sh` (Python 3 + openpyxl).
- **Animations:** PNG sprite sheet + Aseprite/TexturePacker JSON; spec and an importable example in `art/template/`.
- Balance is only bot-tested. In-game GST, sats and points are off-chain prototype numbers with no link to any real asset or token.
