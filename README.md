# 爆破跑道 · Blast Track

FSL 公会塔防原型：STEPN 跑者冲过你的领地，你用易拉罐、香蕉皮、洒水器、鞋盒无人机、广场舞音响、休闲诱惑站 6 个装置家族（外加经济建筑矿机）让他们摔倒退赛。支持中文 / English / Français，电脑（横屏、快捷键）和手机都能玩。

- **第一章「创世纪 · 2008–2010」**：6 关、每关 20 波 + 章节地图，跟着剧情从比特币白皮书走到价值溢出事件，每关结束收一张知识卡。
- **矿机**：比赛中按算力占比抢区块，挖到区块得「聪」并开一次三选一；全网算力会随难度调整上涨。
- **组合**：湿、滑、辣、冻、懵、热六种状态叠在同一个跑者身上会触发碎冰、冷热冲击、水上漂、蒸汽、蹦迪、当头一罐、脸着地等组合，首次触发收入图鉴。
- **克制型跑者**：雨衣跑者不怕洒水器，弹簧鞋跑者跳过香蕉皮（被音响弄懵时除外），降噪耳机跑者不怕音响，巨鲸削弱小伤害。逼玩家混搭装置，首次遇到会弹出说明并收入图鉴。
- **自由摆放**：地图按 20 × 20 的格子划分，跑道、树和石头以外的格子都能放装置；每种装置占 N × N 格（大多 2 × 2，诱惑站和矿机 3 × 3，配置表「装置」页可改）。
- **重开本关**：按钮栏的「↻ 重开本关」（电脑按 R）跳过剧情直接重来。
- **升级规则**：每个装置最多发展两条路线，都能先升到 2 级；先到 3 级的成为主路线，可升到 5 级（常规终局 5/2/0）；6 级专精变成 6/0/0，副路线移除，已花的钱抵扣 6 级费用。
- **经典模式**：原来的 15 波 + 每波神秘箱玩法，在章节地图里进入。

> 这是可玩原型，数值只用脚本机器人粗调过。局内 GST、聪和积分都只是原型里的链下数字，不和任何真实资产或代币挂钩。

**在线试玩：** `https://<你的 GitHub 用户名或组织>.github.io/<仓库名>/`（开启 GitHub Pages 后可用，见下文）

## 文件说明

| 路径 | 用途 |
| --- | --- |
| `index.html` | 游戏本体，单文件，直接用浏览器打开也能玩 |
| `config/blast-track-config.xlsx` | 配置表：装置、升级、敌人、波次、Boss、卡牌、地图、三语文字、美术资源，全部可改 |
| `tools/` | 生成 `index.html` 和配置表的源文件，只有改代码时才需要 |
| `art/tower.dart.*`、`art/shot.dart.*` | 易拉罐投手和飞行罐子的动画精灵图 + JSON，游戏默认自带 |
| `art/can-tosser/` | 易拉罐投手的部件图（底座、投臂、罐子、轴盖）和动画脚本。改 `gen_can_anim.py` 里的 `FIRE` / `IDLE` 表再运行 `python3 gen_can_anim.py`（需要 Pillow、numpy），就能重新生成上面的精灵图 |

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
- 内置数值：`tools/cfg_build.py`；地图坐标：`tools/maps.py`；三语翻译：`tools/trans.py`
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
