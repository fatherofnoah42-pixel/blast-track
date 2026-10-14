<script>
(() => {
const I18N = {"zh": {}, "en": {"+30%（满天赋）": "+30% (max talents)", "0%（新玩家）": "0% (new player)", "1 秒没被干扰就回体力": "Recovers stamina after 1 s undisturbed", "10% 的对手跑者背着神秘箱，劝退后 GST ×5": "10% of rival runners carry a Mystery Box: GST ×5 when they quit", "120 范围内其他装置出手间隔 −20%": "Other devices within 120: interval −20%", "1× 速度": "1× speed", "2× 速度": "2× speed", "3 个 Boss 波每局从 6 位传奇跑者里随机抽：Nox（九命复活）、Aurum（召唤金甲跑者）、Slimo（黏液加速）、Rocco（铁头冲刺）、Chuckles（大笑让装置停工）、Datto（对常用装置产生抗性）。": "Each run draws 3 bosses from 6 legendary runners: Nox (nine lives), Aurum (summons golden runners), Slimo (slime boost), Rocco (headstrong dash), Chuckles (laughter jams devices), Datto (adapts to your most-used device).", "6 种装置：易拉罐投手（单体）、香蕉皮投手（范围滑倒）、洒水器（减速、冻结）、鞋盒无人机（全图空投）、广场舞音响（神曲连锁传播）、宝石发射器（红黄蓝三种宝石）。每种 3 条路线、每条 5 级；主路线可升满，次路线最多 2 级。": "6 devices: Can Thrower (single target), Banana Peeler (area slip), Sprinkler (slow, freeze), Shoebox Drone (map-wide drop), Dance Speaker (chain earworm), Gem Launcher (ruby, topaz, sapphire). Each has 3 paths of 5 tiers; the main path can max out, the secondary stops at tier 2.", "Boss 波": "Boss wave", "Boss：{n}（{t}）": "Boss: {n} ({t})", "GMT 质押": "GMT Staking", "GST 借贷": "GST Loan", "GST 空投": "GST Airdrop", "GST 红包": "GST Red Packet", "GST 补给": "GST Supply", "Gas Hero 毒气": "Gas Hero Gas", "Gas Hero 连环毒气": "Gas Hero Chain Gas", "MOOAR 折扣": "MOOAR Discount", "Nox 九命": "Nox: Nine Lives", "{n} 名跑者": "{n} runners", "{n} 张": "{n} cards", "{n} 级 · {x}": "Tier {n} · {x}", "{x} {n} 秒后开始": "{x} starts in {n} s", "{x} 退赛！": "{x} quits!", "{x}徽章": "{x} Badge", "{x}效果 +25%，升级费用 −20%": "{x}: effect +25%, upgrades −20%", "一串香蕉": "Banana Bunch", "一次扔 2 片，砸 2 个点": "Throws 2 peels at 2 spots", "三连投": "Triple Toss", "下一波": "Next wave", "下一波 Boss：{x}。": "Next wave boss: {x}.", "主路线": "Main", "九命：第一次退赛会原地复活（40% 体力）": "Nine Lives: revives once on the spot (40% stamina)", "交易": "Deal", "人工降雪": "Snow Machine", "今天已跑 ≥ 2 km（热身 +10% 效果）": "Ran ≥ 2 km today (warm-up +10% effect)", "传唱": "Sing-along", "传奇跑者": "Legendary runner", "传播": "Chain", "传说": "Legendary", "低音炮": "Subwoofer", "体力 +40%": "Stamina +40%", "体力低于 25% 的非 Boss 跑者直接退赛": "Non-boss runners under 25% stamina quit instantly", "先在虚线圆圈里放置装置，再点「开始第 1 波」": "Place devices in the dashed circles, then press “Start wave 1”", "光头": "Bald Dasher", "全图": "Global", "全图空投鞋盒，专砸体力最多的跑者，无视耐力": "Drops shoeboxes anywhere on the strongest runner, ignores endurance", "全场冻结 2 秒": "Whole track frozen for 2 s", "全场所有装置效果 +15%": "All devices +15% effect", "全城广场舞": "Citywide Dance", "再多砸 4 名跑者，间隔再 −30%": "Hits 4 more runners, interval −30%", "再来一局": "Play again", "冰桶挑战": "Ice Bucket Challenge", "冰水": "Ice Water", "冰河时代": "Ice Age", "冰面": "Black Ice", "冲刺": "Sprint", "冲线！": "Crossed!", "冻住 1.5 秒，Boss 也吃满减速": "Freezes 1.5 s; bosses take the full slow", "冻住非 Boss 跑者 0.8 秒": "Freezes non-boss runners for 0.8 s", "凉水": "Cold Water", "减速": "Slow", "减速 +10%": "Slow +10%", "出手速度 ×1.6，持续 5 秒": "Device speed ×1.6 for 5 s", "出手速度 ×2，持续 10 秒": "Device speed ×2 for 10 s", "出手间隔 −20%": "Interval −20%", "出手间隔 −30%，多传 3 人": "Interval −30%, chains 3 more", "出手间隔 −40%": "Interval −40%", "出手间隔 −60%": "Interval −60%", "出手间隔减半": "Interval halved", "分数": "Score", "创世鞋": "Genesis Sneaker", "创世鞋盒": "Genesis Shoebox", "剩余生命 / 20 × 300": "Lives left / 20 × 300", "劝退 GST +{n}%": "GST per runner +{n}%", "劝退率 × 600": "Stop rate × 600", "加压": "Pressurize", "加料汽水罐": "Loaded Soda Can", "加重鞋盒": "Heavy Shoebox", "升级半价 ×{n}": "Half-price upgrades ×{n}", "升级卷轴": "Level-up Scroll", "单体速投易拉罐；对耐力跑者只有 25% 效果，「铁罐」2 级后破甲": "Rapid single-target cans; only 25% vs endurance runners until “Iron Can” tier 2", "原地复活！": "Back on her feet!", "双倍铸造": "Double Mint", "双发香蕉": "Double Banana", "双声道": "Stereo", "双手投": "Two-handed", "双桨无人机": "Twin Rotor", "变态辣": "Insanely Hot", "同时放两首": "Plays two songs at once", "听到的跑者停下来跳 0.25 秒": "Runners stop to dance for 0.25 s", "哈": "Ha", "哈哈哈！": "HAHAHA!", "喷头扩展": "Wider Nozzle", "四脚朝天": "Flat on Back", "回收 · +{n} GST": "Recycle · +{n} GST", "地动山摇": "Earthquake Bass", "场上一个装置沿主路线免费升 1 级（没有装置时改为 +100 GST）": "One device gets a free tier on its main path (+100 GST if you have none)", "多传 1 人": "Chains 1 more", "多传 10 人，效果 +6": "Chains 10 more, effect +6", "多传 2 人": "Chains 2 more", "多传 3 人，传播不衰减": "Chains 3 more, no falloff", "夜航": "Night Flight", "大功率": "High Wattage", "大号鞋盒": "XL Shoebox", "大桶可乐": "Party Keg", "大片香蕉皮": "Big Peel", "大香蕉": "Big Banana", "天赋加成": "Talent bonus", "奖励：30 GST": "Reward: 30 GST", "奖励：60 GST + 稀有以上": "Reward: 60 GST + rare or better", "宝石": "Gems", "实心铁罐": "Solid Iron Can", "对 Boss 效果 ×3": "×3 effect vs bosses", "对手体力 +{n}%": "Rival stamina +{n}%", "对手公会的跑者要冲过你的领地。你用「装置」干扰他们，体力耗尽就摔倒退赛。漏过去的跑者会扣你的生命，生命归零即失守。": "Rival guild runners are racing through your territory. Use devices to throw them off; when their stamina runs out they trip and quit. Every runner who gets through costs you a life; at zero lives the territory falls.", "对手公会的跑者要冲过你的领地。现在只有易拉罐投手，第 3 波开始出现耐力跑者。": "Rival guild runners are racing through your territory. You start with the Can Thrower; endurance runners appear from wave 3.", "对手移速 +{n}%": "Rival speed +{n}%", "对耐力跑者": "vs endurance", "对耐力跑者：25% → 60%": "vs endurance runners: 25% → 60%", "对能量盾效果 ×3": "×3 vs energy shields", "射程": "Range", "射程 +20": "Range +20", "射程 +25": "Range +25", "射程 +60，暴击 ×3": "Range +60, crits ×3", "射程内其他装置出手间隔 −25%": "Other devices in range: interval −25%", "射程内其他装置效果 +20%": "Other devices in range: effect +20%", "射程内跑者每秒持续受 3 点效果": "Runners in range take 3 per second", "小音箱": "Mini Speaker", "小香蕉还会再散开一次": "Mini bananas split once more", "已在发展另外两条路线": "Already developing two other paths", "已满级": "Maxed", "已达上限": "At cap", "已适应：{x}": "Adapted: {x}", "幸运宝石": "Luck Gem", "广场舞女王": "Dance Floor Queen", "广场舞音响": "Dance Speaker", "开始第 1 波": "Start wave 1", "开局：开启起手神秘箱": "Start: open your first Mystery Box", "开怀大笑：每 6 秒大笑一次，身边的装置停工 1.5 秒": "Big Laugh: every 6 s, nearby devices stop for 1.5 s", "开箱中": "Opening box", "弹跳鞋盒": "Bouncing Box", "当前全局效果：": "Active effects: ", "当日达": "Same-day Delivery", "徽章": "Badge", "快手": "Quick Hands", "快递": "Express", "快速喷淋": "Rapid Spray", "快速装填": "Fast Reload", "慢跑者": "Jogger", "所有装置效果 +15%（可叠加）": "All devices +15% effect (stacks)", "所有装置每次出手有 20% 概率立刻再来一次": "Every device has a 20% chance to act again instantly", "所有装置的次路线上限 2 级 → 3 级": "Secondary path cap 2 → 3 for all devices", "扔香蕉皮，一片跑者一起滑倒；耐力跑者的克星": "Throws banana peels that trip a whole group; counters endurance runners", "扩音": "Amplifier", "持续 3 秒，持续效果 +40%": "Lasts 3 s, +40% over time", "持续喷淋": "Steady Spray", "持续效果 ×2.5": "Effect over time ×2.5", "接下来 3 次路线升级半价": "Next 3 path upgrades are half price", "提前开波 +{n} GST": "Early start +{n} GST", "放置和升级费用 −20%": "Placing and upgrading −20%", "放置装置": "Place a device", "放置费用 −{n}%": "Placement cost −{n}%", "效果": "Effect", "效果 +1": "Effect +1", "效果 +1.5": "Effect +1.5", "效果 +10，出手间隔再 −30%": "Effect +10, interval −30% more", "效果 +2": "Effect +2", "效果 +3": "Effect +3", "效果 +4": "Effect +4", "效果 +6": "Effect +6", "效果 ×2": "Effect ×2", "效果 ×2，对 Boss 不再打折": "Effect ×2, no penalty vs bosses", "效果 ×2，对 Boss 再 ×1.5": "Effect ×2, ×1.5 more vs bosses", "效率宝石": "Efficiency Gem", "数值没有经过试玩平衡。": "Numbers are not balanced by playtesting yet.", "数据分析：每 3 秒对受到最多的装置类型产生 65% 抗性": "Data Analysis: every 3 s gains 65% resistance to the device hitting him most", "数据控": "Data Nerd", "新纪录": "New record", "无人机": "Drone", "无人机群": "Drone Swarm", "无损音质": "Lossless Audio", "无漏怪波数 / 15 × 100": "Clean waves / 15 × 100", "无词缀": "No traits", "易拉罐": "Can", "易拉罐投手": "Can Thrower", "普通": "Common", "普通跑者": "Regular runners", "暴击率 +10%（可叠加）": "Crit chance +10% (stacks)", "暴击率 +15%": "Crit chance +15%", "暴击率 +20%": "Crit chance +20%", "暴击率 +{n}%": "Crit chance +{n}%", "最高分 {n}": "Best {n}", "本局构筑": "This run", "次路线": "Secondary", "次路线上限 3 级": "Secondary cap 3", "次路线最多 {n} 级": "Secondary path max tier {n}", "每 8 秒冻住全场非 Boss 跑者 2 秒": "Every 8 s, freezes all non-boss runners for 2 s", "每次多砸 2 名跑者": "Hits 2 more runners each throw", "每波结束 +100 GST": "+100 GST after each wave", "每波结束 +40 GST": "+40 GST after each wave", "每波结束开启神秘箱三选一：宝石、GST 红包、GMT 质押、MOOAR 折扣、Gas Hero 毒气、升级卷轴、创世鞋等。局内 GST 只是关卡内货币，不和任何真实资产挂钩。": "After each wave, open a Mystery Box and pick 1 of 3: gems, GST Red Packets, GMT Staking, MOOAR Discount, Gas Hero Gas, Level-up Scrolls, Genesis Sneakers and more. In-run GST is a level-only currency and is not tied to any real asset.", "每波结束获得当前 GST 10% 的利息（最多 60）": "After each wave, earn 10% interest on your GST (max 60)", "每第 4 次：砸 Boss 额外扣其 15% 体力，砸其他跑者 ×3": "Every 4th drop: bosses lose an extra 15% stamina, others take ×3", "每第 4 首效果 ×3": "Every 4th song ×3", "毒气范围 +50%、效果翻倍": "Gas area +50%, effect doubled", "汽水黏鞋": "Sticky Soda", "沾到的跑者辣到跳脚 2 秒": "Runners hop from the heat for 2 s", "泡水鞋": "Soggy Shoes", "波次": "Wave", "洒水器": "Sprinkler", "洒水让跑道湿滑，范围减速": "Wets the track to slow an area", "洗脑神曲": "Earworm", "洗脑神曲在跑者之间传播，一次影响好几个": "An earworm hops between runners, hitting several at once", "消防水炮": "Fire Hose Cannon", "湿滑持续 +1 秒": "Wet track lasts +1 s", "湿身": "Soaked", "滑倒的跑者眩晕 0.6 秒": "Slipping runners are stunned 0.6 s", "滑倒范围 +10": "Slip area +10", "火锅底料": "Hot Pot Base", "炸街": "Street Blaster", "点跑道旁的虚线圆圈放置装置，再点已放的装置选择升级路线。每个装置最多发展两条路线：主路线可升满 5 级，次路线最多 2 级。": "Tap a dashed circle beside the track to place a device, then tap it to choose upgrade paths. Each device can develop two paths: the main one up to tier 5, the secondary up to tier 2.", "熟透香蕉": "Overripe Banana", "燃脂模式所需连续劝退 50 → 30": "Fat-burn mode needs 30 stops instead of 50", "燃脂模式持续 10 秒，出手速度 ×2": "Fat-burn mode lasts 10 s at ×2 speed", "燃脂模式需连续劝退 {n}": "Fat-burn at {n} streak", "燃脂模式！": "Fat-burn mode!", "爆破": "Blast ", "爆破跑道": "Blast Track", "牛市狂奔": "Bull Run", "王之宝库": "Royal Treasury", "王之宝库：每 4 秒召唤 2 名金甲跑者": "Royal Treasury: summons 2 golden runners every 4 s", "玩法说明": "How to play", "目标": "Targets", "盾破": "Shield down", "瞄准": "Aim", "神秘箱": "Mystery Box", "神秘箱轰炸": "Mystery Box Strike", "移速 +40%": "Speed +40%", "稀有": "Rare", "稳": "Resist", "稳妥": "Safe", "空中支援": "Air Support", "空位 · 选一个装置": "Empty spot · choose a device", "空投支援": "Airdrop Support", "立即开始第 {n} 波 · +{b} GST": "Start wave {n} now · +{b} GST", "立即生效：+250 GST；之后对手体力 +15%": "Instant: +250 GST; rivals get +15% stamina from now on", "立即生效：对手移速 +15%；劝退获得 GST +50%": "Instant: rivals +15% speed; +50% GST per runner stopped", "立即生效：所有装置效果 +40%；生命 −10": "Instant: all devices +40% effect; lives −10", "立即获得 120 GST": "Get 120 GST now", "笑声": "Laughter", "第 {n} 波": "Wave {n}", "第 {n} 波守住 · +{g} GST": "Wave {n} held · +{g} GST", "第 {n} 波进行中": "Wave {n} in progress", "第 {r} 局 · 最高分 {b}": "Run {r} · best {b}", "第 {r} 局 · 精英波 {e} 次": "Run {r} · {e} elite waves", "精准": "Precision", "精英奖励：这次的神秘箱只出稀有和传说。": "Elite reward: this Mystery Box only holds rare and legendary cards.", "精英小队": "Elite squad", "精英波": "Elite wave", "终点": "Finish", "绊倒退赛": "Tripped out", "罐头暴雨": "Can Storm", "罐头炮": "Can Cannon", "耐力跑者": "Endurance runner", "耐力跑者的鞋泡水，3 秒内失去耐力加成": "Soaks endurance runners’ shoes: no endurance bonus for 3 s", "生命": "Lives", "生命 +6": "Lives +6", "生命 −{n}": "Lives −{n}", "能量盾": "Energy Shield", "能量饮料站": "Energy Drink Station", "自动投罐机": "Auto Can Launcher", "舒适宝石": "Comfort Gem", "范围": "Area", "落地后再弹出 3 根小香蕉": "Bursts into 3 mini bananas on landing", "落地后溅出 4 块碎皮，各 30% 效果": "Splatters 4 peel bits on landing, 30% each", "落点留下 2 秒辣油": "Leaves chili oil for 2 s", "蓝牙串联": "Bluetooth Link", "补水光环": "Hydration Aura", "补水站": "Water Station", "补给": "Refuel", "补给站站长": "Aid Station Chief", "被冻住的跑者受到所有效果 +60%": "Frozen runners take +60% from everything", "被淋湿的跑者受到所有效果 +25%": "Wet runners take +25% from everything", "被砸中的跑者鞋底发黏，2 秒内受到所有效果 +20%": "Hit runners get sticky soles: +20% from everything for 2 s", "装置": "Device", "装置效果 {s}{n}%": "Device effect {s}{n}%", "解锁广场舞音响：洗脑神曲在跑者之间传播": "Unlock Dance Speaker: an earworm hops between runners", "解锁洒水器：跑道湿滑，范围减速": "Unlock Sprinkler: wet track, area slow", "解锁鞋盒无人机：全图空投鞋盒，无视耐力": "Unlock Shoebox Drone: map-wide drops, ignores endurance", "解锁香蕉皮投手：一片跑者一起滑倒，专克耐力跑者": "Unlock Banana Peeler: trips whole groups, counters endurance runners", "起点": "Start", "跑团": "Running Club", "跑者退赛时喷出毒气，波及身边跑者，可以连锁": "Runners who quit release gas that hits those nearby, and can chain", "跑道": "Track", "跟着跳": "Dance Along", "辣到退赛的跑者会把辣油溅到身边": "Runners who quit from the heat splash chili oil around", "辣椒油": "Chili Oil", "辣椒粉": "Chili Powder", "辣油泼地": "Oil Slick", "还没有卡": "No cards yet", "远投": "Long Toss", "远程狙罐": "Sniper Can", "连投": "Rapid Toss", "连续劝退 ×{n}": "Streak ×{n}", "连续打卡": "Check-in Streak", "退赛时 2 名跟跑者接力": "2 pacers take over when one quits", "退赛通知": "DNF notice", "选好后有 8 秒布置时间。": "You get 8 seconds to set up after choosing.", "选择第 {n} 段跑道": "Choose stretch {n}", "透支生命": "Overdraw Lives", "通关": "Territory held!", "道具": "Item", "重低音": "Heavy Bass", "重低音效果 ×8": "Heavy bass hits ×8", "重型鞋盒": "Heavy Box", "重抽 · {n} GST": "Reroll · {n} GST", "金王": "Golden King", "铁头冲刺": "Headstrong Dash", "铁头冲刺：每 5 秒冲刺 1 秒，3 倍速": "Headstrong Dash: every 5 s, sprints at ×3 speed for 1 s", "铁皮罐": "Tin Can", "铁罐": "Iron Can", "锁定": "Locked", "间隔": "Interval", "震地": "Ground Shake", "震碎能量盾": "Shield Shatter", "鞋匠": "Cobbler", "鞋匠 → {c}": "Cobbler → {c}", "鞋盒弹跳再砸 2 名跑者，50% 效果": "Box bounces to 2 more runners at 50%", "鞋盒无人机": "Shoebox Drone", "鞋盒落地震晕 0.4 秒": "Box impact stuns for 0.4 s", "音乐 关": "Music off", "音乐 开": "Music on", "音响": "Speaker", "音效 关": "Sound off", "音效 开": "Sound on", "领地失守 · 第 {n} 波": "Territory lost · wave {n}", "领地跑道，点击虚线圆圈放置装置": "Territory track; tap a dashed circle to place a device", "额外 35% 能量护盾": "Extra 35% energy shield", "香蕉海啸": "Banana Tsunami", "香蕉皮": "Banana", "香蕉皮投手": "Banana Peeler", "香蕉碎片": "Peel Shrapnel", "香蕉船": "Banana Split", "香蕉连环": "Banana Cascade", "香蕉雨": "Banana Rain", "马拉松模式": "Marathon Mode", "高压水枪": "Pressure Washer", "高压水柱": "Water Jet", "高风险": "Risky", "魔性旋律": "Catchy Loop", "魔鬼椒": "Ghost Pepper", "黏液国王": "Slime King", "黏液王冠：身后留下黏液，踩到的跑者加速 30% 并回体力": "Slime Crown: leaves a slime trail; runners on it get +30% speed and recover stamina", "黑猫": "Black Cat", "（选后可在空位放置）": " (place it on an empty spot)", "，下一级「{x}」不可用": "; next tier “{x}” unavailable", "出手速度 ×{r}，持续 {n} 秒": "Device speed ×{r} for {n} s", "全场冻结 {n} 秒": "Whole track frozen for {n} s", "{n} 条提示": "{n} notes", "读取表格的组件加载失败，请检查网络后重试": "Could not load the spreadsheet reader. Check your connection and try again.", "缺少工作表「{x}」，使用默认值": "Sheet “{x}” is missing; using defaults", "{w}：「{v}」不是数字，使用默认值 {d}": "{w}: “{v}” is not a number; using default {d}", "全局 {x}": "Global {x}", "全局：未知参数「{x}」已忽略": "Global: unknown setting “{x}” ignored", "装置第 {n} 行：未知 id「{x}」已忽略": "Devices row {n}: unknown id “{x}” ignored", "装置 {x} {k}": "Device {x} {k}", "升级路线第 {n} 行：找不到对应路线": "Paths row {n}: no matching path", "升级第 {n} 行：找不到对应等级": "Upgrades row {n}: no matching tier", "升级第 {n} 行 cost": "Upgrades row {n} cost", "升级第 {n} 行：效果「{x}」写法有误，保留原效果": "Upgrades row {n}: effect “{x}” is invalid; kept the previous effect", "敌人第 {n} 行：未知 id 已忽略": "Enemies row {n}: unknown id ignored", "敌人 {x} {k}": "Enemy {x} {k}", "波次第 {n} 行 {k}": "Waves row {n} {k}", "Boss 第 {n} 行：未知 id 已忽略": "Bosses row {n}: unknown id ignored", "Boss {x} enabled": "Boss {x} enabled", "Boss {x} p{i}": "Boss {x} p{i}", "卡牌第 {n} 行：未知 id「{x}」已忽略": "Cards row {n}: unknown id “{x}” ignored", "卡牌 {x} enabled": "Card {x} enabled", "卡牌 {x} stack": "Card {x} stack", "卡牌 {x} v1": "Card {x} v1", "卡牌 {x} v2": "Card {x} v2", "地图第 {n} 行 x": "Map row {n} x", "地图第 {n} 行 y": "Map row {n} y", "地图：跑道至少需要 2 个点，使用默认跑道": "Map: the track needs at least 2 points; using the default track", "地图：至少需要 1 个空位，使用默认空位": "Map: at least 1 spot is needed; using default spots", "波次为空，使用默认波次": "No waves found; using default waves", "正在使用：{x}": "Using: {x}", "正在使用：默认配置": "Using: default config", "正在读取…": "Reading…", "导入失败：{x}": "Import failed: {x}", "导入配置表 (.xlsx)": "Import config (.xlsx)", "恢复默认": "Reset to default", "在 Excel 或 Google Sheets 中修改配置表后导出为 .xlsx 再导入，游戏会立即按新数值和名称重新开局。导入的配置只保存在这台设备的浏览器里。": "Edit the config sheet in Excel or Google Sheets, export it as .xlsx and import it here. The game restarts right away with the new numbers and names. Imported configs are saved only in this browser.", "蛇形跑道": "Serpentine", "1 进 1 出：一条长蛇形跑道，经典布局": "1 in, 1 out: one long winding track, the classic layout.", "双子跑道": "Twin Tracks", "2 进 2 出：两条互不相交的跑道，中间一列空位可以同时照顾两边": "2 in, 2 out: two separate tracks; the middle column of spots can cover both.", "分岔路口": "The Fork", "1 进 2 出：跑者在路口分成左右两路，入口处是必争之地": "1 in, 2 out: runners split left and right at the junction, so the entrance is key.", "汇流跑道": "Confluence", "2 进 1 出：两路跑者从两侧进场，在中间汇合后一起冲向终点": "2 in, 1 out: runners enter from both sides, merge in the middle and rush the finish together.", "十字路口": "Crossroads", "2 进 2 出：一路从上到下、一路从左到右，两条跑道在右下交叉": "2 in, 2 out: one track runs top to bottom, the other left to right; they cross at the bottom right.", "三路汇聚": "Trident", "3 进 1 出：左右两路绕远，中路直冲终点，要优先守住中路": "3 in, 1 out: the side tracks loop around while the middle one runs straight to the finish, so guard the middle first.", "随机": "Random", "跑道选择": "Track", "本局跑道：{x}。{d}": "Track: {x}. {d}", "跑道 {x} enabled": "Track {x} enabled", "跑道 {x} spdMult": "Track {x} spdMult", "跑道 {x} hpMult": "Track {x} hpMult", "地图：跑道「{x}」不在「跑道列表」里，已忽略": "Map: track “{x}” is not in the track list; ignored", "地图「{x}」：每条路线至少需要 2 个点，保留原跑道": "Map “{x}”: each route needs at least 2 points; kept the previous track", "地图「{x}」：至少需要 1 个空位，保留原空位": "Map “{x}”: at least 1 spot is needed; kept the previous spots", "导入美术图片（可多选）": "Import art images (multiple)", "清除导入的图片": "Clear imported images", "图片文件名用资源编号命名（如 tower.dart.png、boss.yawn.png），会自动替换对应的占位图。编号和尺寸见配置表「美术资源」工作表。": "Name each image file after its asset key (e.g. tower.dart.png, boss.yawn.png) and it replaces the matching placeholder. Keys and sizes are in the “美术资源” (Art) sheet of the config workbook.", "美术资源：全部使用占位图": "Art: all placeholders", "美术资源：已替换 {n} 项（其中导入 {m} 张）": "Art: {n} replaced ({m} imported)", "加载失败：{x}": "Failed to load: {x}", "这些文件名不是资源编号，已跳过：{x}": "Skipped (file name is not an asset key): {x}", "图片太大，浏览器存不下，只在本次打开期间有效": "Images too large for browser storage; they last only until you close the page", "美术资源：新编号「{x}」游戏里没有用到": "Art: key “{x}” is not used by the game", "美术资源 {x} {k}": "Art {x} {k}", "点击开始": "Tap to start", "点跑道旁的石台放置装置，再点装置直接升级。": "Tap a stone pad beside the track to place a device, then tap the device to upgrade it.", "开跑！": "Go!", "神秘箱开启中…": "Opening the Mystery Box…", "准备…": "Get ready…", "建造装置": "Build a device", "关闭": "Close", "已锁定": "Locked", "主": "Main", "次": "2nd", "主路线可升满 5 级，次路线最多 2 级": "Main path up to tier 5, second path up to tier 2", "回收 +{n}": "Recycle +{n}", "跑步加成": "Running boost", "真实跑步会让你的装置更强。原型里用下面的开关模拟；正式版自动读取你在 STEPN 的跑步数据。": "Real runs make your devices stronger. In this prototype you simulate it with the controls below; the live version reads your STEPN running data automatically.", "公会天赋（模拟累计 RP）": "Guild talent (simulated total RP)", "累计 {r} RP · 未解锁": "{r} RP total · locked", "累计 {r} RP · {t} 档 +{b}%": "{r} RP total · tier {t} +{b}%", "今日热身：今天在 STEPN 已跑满 {k} km → 当天所有对局装置效果 +{b}%": "Warm-up: ran at least {k} km in STEPN today → all devices +{b}% effect in every run today", "天赋怎么提高：每次真实跑步获得 RP（跑步积分）——前 5 km 每 km {a} RP，5–10 km 每 km {b} RP，单日最多 {c} RP。累计 RP 达到 {t1} / {t2} / {t3} 自动解锁一 / 二 / 三档公会天赋，全部装置效果 +{p1}% / +{p2}% / +{p3}%。按每周跑 4 次、每次 4.5 km 计算，大约 1 周、3 周、7 周解锁。": "How to raise your talent: every real run earns RP (Run Points) — {a} RP per km for the first 5 km, {b} RP per km from 5 to 10 km, up to {c} RP a day. Reaching {t1} / {t2} / {t3} total RP unlocks guild talent tier 1 / 2 / 3: all devices +{p1}% / +{p2}% / +{p3}% effect. Running 4 times a week at 4.5 km each, that takes about 1, 3 and 7 weeks.", "当前跑步加成：装置效果 +{n}%": "Current running boost: devices +{n}%", "跑步加成 +{n}%": "Running boost +{n}%", "点跑道旁的石台放置装置，再点「开始第 1 波」": "Tap a stone pad beside the track to place a device, then press “Start wave 1”", "宝石发射器": "Gem Launcher", "发射宝石：红宝石主攻暴击，黄宝石主攻连发和 GST，蓝宝石减速冻结": "Fires gems: ruby for crits, topaz for multi-shot and GST, sapphire to slow and freeze", "红宝石": "Ruby", "黄宝石": "Topaz", "蓝宝石": "Sapphire", "打磨红宝石": "Polished Ruby", "鸽血红": "Pigeon Blood", "红宝石切面": "Ruby Facets", "暴击 ×3，对耐力跑者全额生效": "Crits ×3, full effect on endurance runners", "炽红核心": "Blazing Core", "红宝石之心": "Heart of Ruby", "效果 +12，暴击率再 +20%": "Effect +12, crit chance +20% more", "黄晶碎片": "Topaz Shard", "出手间隔 −15%": "Interval −15%", "双生黄晶": "Twin Topaz", "每次多打 1 名跑者": "Hits 1 more runner per shot", "黄晶矿脉": "Topaz Vein", "每波结束额外 +40 GST": "+40 GST at the end of each wave", "黄晶棱镜": "Topaz Prism", "再多打 2 名跑者，出手间隔 −25%": "Hits 2 more runners, interval −25%", "GST 金矿": "GST Gold Mine", "每波结束再 +120 GST，出手间隔减半": "+120 GST more per wave, interval halved", "冰蓝切片": "Ice-Blue Slice", "命中减速 25%，持续 1.5 秒": "Hits slow by 25% for 1.5 s", "深海蓝": "Deep-Sea Blue", "蓝宝石冰封": "Sapphire Freeze", "命中时冻住非 Boss 跑者 0.6 秒": "Hits freeze non-boss runners for 0.6 s", "寒光": "Cold Gleam", "被减速的跑者受到所有效果 +30%": "Slowed runners take +30% from everything", "星海蓝钻": "Star-Sea Diamond", "减速 50%，冻结 1.2 秒，Boss 也吃满减速": "Slow 50%, freeze 1.2 s, bosses take the full slow", "解锁宝石发射器：红、黄、蓝三种宝石对应三条路线": "Unlock the Gem Launcher: ruby, topaz and sapphire are its three paths", "额外放置点": "Extra Spot", "获得 1 个放置点：点地图上跑道以外的空地，新增一个装置空位": "Gain 1 spot: tap open ground off the track to add a new device spot", "下一级：{x}": "Next: {x}", "这里不能放": "Can’t place here", "取消放置": "Cancel placing", "＋ 放置点 ×{n}": "+ Spot ×{n}", "点跑道外的空地，新增一个放置点": "Tap open ground off the track to add a spot", "聪": "sats", "创世纪 · 2008–2010": "Genesis · 2008–2010", "组合": "Combos", "重试": "Retry", "STEPN 跑者掉进区块链时光隧道，跟着比特币走过最初的三年。": "A STEPN runner falls into a blockchain time tunnel and lives through bitcoin’s first three years.", "累计积分 {n}": "Points: {n}", "剧情中…": "Story…", "关卡完成": "Level complete", "再玩一次": "Play again", "章节地图": "Chapter map", "第二章 · 敬请期待": "Chapter 2 · coming soon", "图鉴": "Codex", "区块高度": "Block height", "区块奖励：选一个，比赛马上继续。": "Block reward: pick one and the race resumes.", "选择关卡": "Choose a level", "这关还没打出组合，试试把两种状态叠在同一个跑者身上。": "No combos this time. Try stacking two statuses on the same runner.", "快捷键：空格 开波 · F 切换速度 · 1–7 建造 · Q/W/E 升级 · X 回收 · Esc 取消": "Keys: Space start wave · F speed · 1–7 build · Q/W/E upgrade · X recycle · Esc cancel", "一万枚换两个披萨！": "10,000 coins for two pizzas!", "知识卡": "Knowledge", "新组合：{x}！": "New combo: {x}!", "下一关": "Next level", "{n}× 速度": "{n}× speed", "区块 #{h} 被别的矿工抢先挖到了": "Block #{h} went to another miner", "挖到区块": "Blocks mined", "本关触发的组合": "Combos this level", "组合：{x}": "Combos: {x}", "修复版本上线，溢出的币被回滚": "The fix is live; the overflowed coins are rolled back", "还没触发过。试试把这两种状态叠在同一个跑者身上。": "Not triggered yet. Try stacking these two statuses on one runner.", "出块！#{h}": "Block! #{h}", "挖到区块 #{h}！": "Mined block #{h}!", "披萨跑者冲出来了": "Pizza runners incoming", "重抽 · {n} 聪": "Reroll · {n} sats", "继续 ▶": "Next ▶", "收入图鉴": "Add to codex", "返回章节地图": "Back to chapter map", "跳过": "Skip", "经典模式": "Classic mode", "开始！": "Go!", "算力 {h} · 出块奖励 +{b}%": "Hash {h} · block reward +{b}%", "全网每隔十几秒出一个区块，你的算力占全网的比例，就是抢到它的几率。挖到区块：得聪，再开一次三选一。": "The network makes a block every dozen seconds or so. Your share of total hash power is your chance of winning it. Win a block: sats plus a pick-one-of-three.", "出块几率": "Win chance", "软分叉！": "Soft fork!", "原型阶段的链下积分，没有任何实际价值": "off-chain prototype points with no real-world value", "你的算力": "Your hash", "挖到的聪": "Sats mined", "全网算力": "Network hash", "已挖到": "Won", "下个区块": "Next block", "剩余生命": "Lives left", "快捷键 Q / W / E 升级，X 回收": "Keys Q / W / E upgrade, X recycles", "整数溢出！": "Integer overflow!", "第一章": "Chapter 1", "通关「{x}」解锁": "Clear “{x}” to unlock", "挂上：{x}": "Applies: {x}", "难度调整：全网算力 +{n}%": "Difficulty adjustment: network hash +{n}%", "新知识卡": "New knowledge card", "⛏ 挖矿": "⛏ Mining", "获得积分": "Points earned", "矿机": "Miner", "不攻击，比赛中不停算题挖区块：挖到区块得聪和一次三选一": "Doesn’t attack; keeps hashing during the race. Win a block for sats and a pick-one-of-three", "算力": "Hash", "矿池": "Pool", "散热": "Cooling", "超频 CPU": "Overclocked CPU", "算力 +50%": "Hash +50%", "双核处理器": "Dual-core CPU", "显卡挖矿": "GPU Mining", "算力 ×3（2010 年显卡挖矿开始流行）": "Hash ×3 (GPU mining took off in 2010)", "多卡矿机": "Multi-GPU Rig", "算力 ×2": "Hash ×2", "显卡农场": "GPU Farm", "算力 ×2.5": "Hash ×2.5", "加入矿池": "Join a Pool", "出块奖励 +25%": "Block reward +25%", "矿池分成": "Pool Payout", "射程内其他装置效果 +15%": "Other devices in range: effect +15%", "稳定收益": "Steady Income", "出块奖励再 +50%": "Block reward +50% more", "大矿池": "Big Pool", "射程内其他装置效果 +30%，射程 +30": "Other devices in range: effect +30%; range +30", "算力联盟": "Hash Alliance", "出块奖励再 +100%，射程内装置出手间隔 −15%": "Block reward +100% more; devices in range: interval −15%", "风扇狂转": "Fans Roaring", "吹出热风：射程内跑者每秒受 1 点效果并挂上“热”": "Blows hot air: runners in range take 1 effect per second and get “Heat”", "机箱漏风": "Leaky Case", "热风 +2": "Heat +2", "水冷管道": "Water-cooling Loop", "烧机模式": "Burn-in Mode", "热风 ×3": "Heat ×3", "矿场火炉": "Mine Furnace", "热风 +15，射程 +30": "Heat +15; range +30", "披萨外卖员": "Pizza courier", "一万枚换两个披萨：体力掉到 2/3 和 1/3 时各扔下一盒披萨，冒出一群披萨跑者": "10,000 coins for two pizzas: at 2/3 and 1/3 stamina he drops a pizza box and a swarm of pizza runners pours out", "溢出怪": "The Overflow", "解锁矿机：挖区块得聪，并触发区块奖励三选一": "Unlock the Miner: mine blocks for sats and a block-reward pick", "再点一次离开（本局进度不保存）": "Tap again to leave (this run is not saved)", "雨衣跑者": "Raincoat Runner", "弹簧鞋跑者": "Spring-Shoe Runner", "降噪耳机跑者": "Headphones Runner", "巨鲸": "Whale", "皮厚": "Tough", "防水": "Waterproof", "跳过！": "Hop!", "跑者": "Runners", "对策": "Counter", "还没遇到过。": "Not met yet.", "新跑者": "New runner", "对{x}无效": "No effect on {x}", "效果 +3，对耐力跑者全额生效": "Effect +3, full effect vs endurance runners", "效果 ×2；命中有 10% 概率直接绊倒退赛（非 Boss）": "Effect ×2; 10% chance to trip a non-boss out of the race", "效果 +30，范围 +25": "Effect +30, area +25", "效果 +6，射程 +40": "Effect +6, range +40", "效果 +0.5": "Effect +0.5", "整数溢出：第一次倒下时分裂成两个，各带 60% 体力；几秒后“软分叉”修复，两个都掉一半体力": "Integer overflow: the first time it falls it splits into two, each with 60% stamina; a few seconds later a “soft fork” patch halves both"}, "fr": {"+30%（满天赋）": "+30 % (talents au max)", "0%（新玩家）": "0 % (nouveau joueur)", "1 秒没被干扰就回体力": "Récupère de l’endurance après 1 s sans gêne", "10% 的对手跑者背着神秘箱，劝退后 GST ×5": "10 % des coureurs rivaux portent une Mystery Box : GST ×5 à l’abandon", "120 范围内其他装置出手间隔 −20%": "Autres dispositifs à 120 : intervalle −20 %", "1× 速度": "Vitesse 1×", "2× 速度": "Vitesse 2×", "3 个 Boss 波每局从 6 位传奇跑者里随机抽：Nox（九命复活）、Aurum（召唤金甲跑者）、Slimo（黏液加速）、Rocco（铁头冲刺）、Chuckles（大笑让装置停工）、Datto（对常用装置产生抗性）。": "Chaque partie tire 3 boss parmi 6 coureurs légendaires : Nox (neuf vies), Aurum (invoque des coureurs dorés), Slimo (bave accélérante), Rocco (charge tête baissée), Chuckles (son rire bloque les dispositifs), Datto (s’adapte à ton dispositif favori).", "6 种装置：易拉罐投手（单体）、香蕉皮投手（范围滑倒）、洒水器（减速、冻结）、鞋盒无人机（全图空投）、广场舞音响（神曲连锁传播）、宝石发射器（红黄蓝三种宝石）。每种 3 条路线、每条 5 级；主路线可升满，次路线最多 2 级。": "6 dispositifs : Lanceur de canettes (cible unique), Lanceur de peaux de banane (glissade de zone), Arroseur (ralentit, gèle), Drone à boîtes (largage sur toute la carte), Enceinte de danse (tube viral en chaîne), Lance-gemmes (rubis, topaze, saphir). Chacun a 3 voies de 5 niveaux ; la voie principale peut être maximisée, la secondaire s’arrête au niveau 2.", "Boss 波": "Vague de boss", "Boss：{n}（{t}）": "Boss : {n} ({t})", "GMT 质押": "Staking GMT", "GST 借贷": "Prêt GST", "GST 空投": "Airdrop GST", "GST 红包": "Enveloppe GST", "GST 补给": "Ravitaillement GST", "Gas Hero 毒气": "Gaz Gas Hero", "Gas Hero 连环毒气": "Gaz en chaîne Gas Hero", "MOOAR 折扣": "Remise MOOAR", "Nox 九命": "Nox : neuf vies", "{n} 名跑者": "{n} coureurs", "{n} 张": "{n} cartes", "{n} 级 · {x}": "Niv. {n} · {x}", "{x} {n} 秒后开始": "{x} dans {n} s", "{x} 退赛！": "{x} abandonne !", "{x}徽章": "Badge {x}", "{x}效果 +25%，升级费用 −20%": "{x} : effet +25 %, améliorations −20 %", "一串香蕉": "Régime de bananes", "一次扔 2 片，砸 2 个点": "Lance 2 peaux sur 2 points", "三连投": "Triple lancer", "下一波": "Vague suivante", "下一波 Boss：{x}。": "Boss de la prochaine vague : {x}.", "主路线": "Principale", "九命：第一次退赛会原地复活（40% 体力）": "Neuf vies : revient une fois sur place (40 % d’endurance)", "交易": "Pacte", "人工降雪": "Canon à neige", "今天已跑 ≥ 2 km（热身 +10% 效果）": "Couru ≥ 2 km aujourd’hui (échauffement +10 % d’effet)", "传唱": "Refrain", "传奇跑者": "Coureur légendaire", "传播": "Chaîne", "传说": "Légendaire", "低音炮": "Caisson de basses", "体力 +40%": "Endurance +40 %", "体力低于 25% 的非 Boss 跑者直接退赛": "Les coureurs (hors boss) sous 25 % d’endurance abandonnent", "先在虚线圆圈里放置装置，再点「开始第 1 波」": "Place des dispositifs dans les cercles, puis « Lancer la vague 1 »", "光头": "Crâne rasé", "全图": "Carte", "全图空投鞋盒，专砸体力最多的跑者，无视耐力": "Largue des boîtes partout sur le coureur le plus endurant, ignore l’endurance", "全场冻结 2 秒": "Toute la piste gelée 2 s", "全场所有装置效果 +15%": "Tous les dispositifs +15 % d’effet", "全城广场舞": "Danse dans toute la ville", "再多砸 4 名跑者，间隔再 −30%": "Touche 4 coureurs de plus, intervalle −30 %", "再来一局": "Rejouer", "冰桶挑战": "Ice Bucket Challenge", "冰水": "Eau glacée", "冰河时代": "Ère glaciaire", "冰面": "Verglas", "冲刺": "Sprint", "冲线！": "Arrivé !", "冻住 1.5 秒，Boss 也吃满减速": "Gèle 1,5 s ; les boss subissent tout le ralentissement", "冻住非 Boss 跑者 0.8 秒": "Gèle les coureurs (hors boss) 0,8 s", "凉水": "Eau froide", "减速": "Ralenti", "减速 +10%": "Ralenti +10 %", "出手速度 ×1.6，持续 5 秒": "Vitesse des dispositifs ×1,6 pendant 5 s", "出手速度 ×2，持续 10 秒": "Vitesse des dispositifs ×2 pendant 10 s", "出手间隔 −20%": "Intervalle −20 %", "出手间隔 −30%，多传 3 人": "Intervalle −30 %, 3 de plus en chaîne", "出手间隔 −40%": "Intervalle −40 %", "出手间隔 −60%": "Intervalle −60 %", "出手间隔减半": "Intervalle divisé par 2", "分数": "Score", "创世鞋": "Sneaker Genesis", "创世鞋盒": "Boîte Genesis", "剩余生命 / 20 × 300": "Vies restantes / 20 × 300", "劝退 GST +{n}%": "GST par coureur +{n} %", "劝退率 × 600": "Taux d’arrêt × 600", "加压": "Pression", "加料汽水罐": "Canette chargée", "加重鞋盒": "Boîte lestée", "升级半价 ×{n}": "Améliorations à moitié prix ×{n}", "升级卷轴": "Parchemin d’amélioration", "单体速投易拉罐；对耐力跑者只有 25% 效果，「铁罐」2 级后破甲": "Canettes rapides sur une cible ; 25 % contre les coureurs endurants jusqu’à « Canette en fer » niv. 2", "原地复活！": "Elle se relève !", "双倍铸造": "Double mint", "双发香蕉": "Double banane", "双声道": "Stéréo", "双手投": "À deux mains", "双桨无人机": "Double rotor", "变态辣": "Ultra piquant", "同时放两首": "Joue deux morceaux à la fois", "听到的跑者停下来跳 0.25 秒": "Les coureurs s’arrêtent pour danser 0,25 s", "哈": "Ha", "哈哈哈！": "HAHAHA !", "喷头扩展": "Buse élargie", "四脚朝天": "Les quatre fers en l’air", "回收 · +{n} GST": "Recycler · +{n} GST", "地动山摇": "Basses sismiques", "场上一个装置沿主路线免费升 1 级（没有装置时改为 +100 GST）": "Un dispositif gagne un niveau gratuit sur sa voie principale (+100 GST si aucun)", "多传 1 人": "1 de plus en chaîne", "多传 10 人，效果 +6": "10 de plus en chaîne, effet +6", "多传 2 人": "2 de plus en chaîne", "多传 3 人，传播不衰减": "3 de plus en chaîne, sans atténuation", "夜航": "Vol de nuit", "大功率": "Haute puissance", "大号鞋盒": "Boîte XL", "大桶可乐": "Fût de soda", "大片香蕉皮": "Grande peau", "大香蕉": "Grosse banane", "天赋加成": "Bonus de talents", "奖励：30 GST": "Récompense : 30 GST", "奖励：60 GST + 稀有以上": "Récompense : 60 GST + rare ou mieux", "宝石": "Gemmes", "实心铁罐": "Canette pleine en fer", "对 Boss 效果 ×3": "Effet ×3 contre les boss", "对手体力 +{n}%": "Endurance rivale +{n} %", "对手公会的跑者要冲过你的领地。你用「装置」干扰他们，体力耗尽就摔倒退赛。漏过去的跑者会扣你的生命，生命归零即失守。": "Les coureurs d’une guilde rivale traversent ton territoire. Utilise des dispositifs pour les gêner ; à court d’endurance, ils trébuchent et abandonnent. Chaque coureur qui passe te coûte une vie ; à zéro, le territoire tombe.", "对手公会的跑者要冲过你的领地。现在只有易拉罐投手，第 3 波开始出现耐力跑者。": "Des coureurs rivaux traversent ton territoire. Tu commences avec le Lanceur de canettes ; les coureurs endurants arrivent à la vague 3.", "对手移速 +{n}%": "Vitesse rivale +{n} %", "对耐力跑者": "vs endurants", "对耐力跑者：25% → 60%": "Contre les endurants : 25 % → 60 %", "对能量盾效果 ×3": "Effet ×3 contre les boucliers", "射程": "Portée", "射程 +20": "Portée +20", "射程 +25": "Portée +25", "射程 +60，暴击 ×3": "Portée +60, critiques ×3", "射程内其他装置出手间隔 −25%": "Autres dispositifs à portée : intervalle −25 %", "射程内其他装置效果 +20%": "Autres dispositifs à portée : effet +20 %", "射程内跑者每秒持续受 3 点效果": "Les coureurs à portée subissent 3 par seconde", "小音箱": "Mini enceinte", "小香蕉还会再散开一次": "Les mini-bananes se divisent encore", "已在发展另外两条路线": "Deux autres voies déjà développées", "已满级": "Au max", "已达上限": "Plafond atteint", "已适应：{x}": "Adapté : {x}", "幸运宝石": "Gemme de chance", "广场舞女王": "Reine de la piste", "广场舞音响": "Enceinte de danse", "开始第 1 波": "Lancer la vague 1", "开局：开启起手神秘箱": "Départ : ouvre ta première Mystery Box", "开怀大笑：每 6 秒大笑一次，身边的装置停工 1.5 秒": "Fou rire : toutes les 6 s, les dispositifs proches s’arrêtent 1,5 s", "开箱中": "Ouverture", "弹跳鞋盒": "Boîte rebondissante", "当前全局效果：": "Effets actifs : ", "当日达": "Livraison le jour même", "徽章": "Badge", "快手": "Mains rapides", "快递": "Express", "快速喷淋": "Arrosage rapide", "快速装填": "Rechargement rapide", "慢跑者": "Joggeur", "所有装置效果 +15%（可叠加）": "Tous les dispositifs +15 % d’effet (cumulable)", "所有装置每次出手有 20% 概率立刻再来一次": "Chaque dispositif a 20 % de chances d’agir à nouveau", "所有装置的次路线上限 2 级 → 3 级": "Plafond de la voie secondaire 2 → 3 pour tous", "扔香蕉皮，一片跑者一起滑倒；耐力跑者的克星": "Lance des peaux de banane qui font glisser un groupe ; contre les endurants", "扩音": "Amplificateur", "持续 3 秒，持续效果 +40%": "Dure 3 s, +40 % sur la durée", "持续喷淋": "Arrosage continu", "持续效果 ×2.5": "Effet sur la durée ×2,5", "接下来 3 次路线升级半价": "Les 3 prochaines améliorations à moitié prix", "提前开波 +{n} GST": "Départ anticipé +{n} GST", "放置和升级费用 −20%": "Placement et améliorations −20 %", "放置装置": "Placer un dispositif", "放置费用 −{n}%": "Coût de placement −{n} %", "效果": "Effet", "效果 +1": "Effet +1", "效果 +1.5": "Effet +1,5", "效果 +10，出手间隔再 −30%": "Effet +10, intervalle encore −30 %", "效果 +2": "Effet +2", "效果 +3": "Effet +3", "效果 +4": "Effet +4", "效果 +6": "Effet +6", "效果 ×2": "Effet ×2", "效果 ×2，对 Boss 不再打折": "Effet ×2, sans pénalité contre les boss", "效果 ×2，对 Boss 再 ×1.5": "Effet ×2, encore ×1,5 contre les boss", "效率宝石": "Gemme d’efficacité", "数值没有经过试玩平衡。": "Les valeurs ne sont pas encore équilibrées.", "数据分析：每 3 秒对受到最多的装置类型产生 65% 抗性": "Analyse de données : toutes les 3 s, résiste à 65 % au dispositif qui le touche le plus", "数据控": "Fan de données", "新纪录": "Nouveau record", "无人机": "Drone", "无人机群": "Essaim de drones", "无损音质": "Son sans perte", "无漏怪波数 / 15 × 100": "Vagues sans fuite / 15 × 100", "无词缀": "Aucun trait", "易拉罐": "Canette", "易拉罐投手": "Lanceur de canettes", "普通": "Commun", "普通跑者": "Coureurs normaux", "暴击率 +10%（可叠加）": "Chance de critique +10 % (cumulable)", "暴击率 +15%": "Chance de critique +15 %", "暴击率 +20%": "Critique +20 %", "暴击率 +{n}%": "Chance de critique +{n} %", "最高分 {n}": "Record {n}", "本局构筑": "Cette partie", "次路线": "Secondaire", "次路线上限 3 级": "Plafond secondaire 3", "次路线最多 {n} 级": "Voie secondaire : niveau {n} max", "每 8 秒冻住全场非 Boss 跑者 2 秒": "Toutes les 8 s, gèle tous les coureurs (hors boss) 2 s", "每次多砸 2 名跑者": "Touche 2 coureurs de plus par lancer", "每波结束 +100 GST": "+100 GST après chaque vague", "每波结束 +40 GST": "+40 GST après chaque vague", "每波结束开启神秘箱三选一：宝石、GST 红包、GMT 质押、MOOAR 折扣、Gas Hero 毒气、升级卷轴、创世鞋等。局内 GST 只是关卡内货币，不和任何真实资产挂钩。": "Après chaque vague, ouvre une Mystery Box et choisis 1 carte sur 3 : gemmes, Enveloppes GST, Staking GMT, Remise MOOAR, Gaz Gas Hero, Parchemins, Sneakers Genesis, etc. Le GST de la partie est une monnaie de niveau, sans lien avec un actif réel.", "每波结束获得当前 GST 10% 的利息（最多 60）": "Après chaque vague, 10 % d’intérêts sur ton GST (max 60)", "每第 4 次：砸 Boss 额外扣其 15% 体力，砸其他跑者 ×3": "Tous les 4 largages : −15 % d’endurance en plus aux boss, ×3 aux autres", "每第 4 首效果 ×3": "Un morceau sur 4 ×3", "毒气范围 +50%、效果翻倍": "Zone de gaz +50 %, effet doublé", "汽水黏鞋": "Soda collant", "沾到的跑者辣到跳脚 2 秒": "Les coureurs sautillent de piment 2 s", "泡水鞋": "Chaussures trempées", "波次": "Vague", "洒水器": "Arroseur", "洒水让跑道湿滑，范围减速": "Mouille la piste pour ralentir une zone", "洗脑神曲": "Tube entêtant", "洗脑神曲在跑者之间传播，一次影响好几个": "Un tube entêtant passe d’un coureur à l’autre", "消防水炮": "Lance à incendie", "湿滑持续 +1 秒": "Piste mouillée +1 s", "湿身": "Trempé", "滑倒的跑者眩晕 0.6 秒": "Les coureurs qui glissent sont sonnés 0,6 s", "滑倒范围 +10": "Zone de glissade +10", "火锅底料": "Bouillon fondue chinoise", "炸街": "Sono de rue", "点跑道旁的虚线圆圈放置装置，再点已放的装置选择升级路线。每个装置最多发展两条路线：主路线可升满 5 级，次路线最多 2 级。": "Touche un cercle en pointillé près de la piste pour placer un dispositif, puis touche-le pour choisir ses voies. Chaque dispositif peut développer deux voies : la principale jusqu’au niveau 5, la secondaire jusqu’au niveau 2.", "熟透香蕉": "Banane trop mûre", "燃脂模式所需连续劝退 50 → 30": "Le mode brûle-graisse demande 30 arrêts au lieu de 50", "燃脂模式持续 10 秒，出手速度 ×2": "Le mode brûle-graisse dure 10 s à vitesse ×2", "燃脂模式需连续劝退 {n}": "Brûle-graisse à {n} d’affilée", "燃脂模式！": "Mode brûle-graisse !", "爆破": "Piste ", "爆破跑道": "Piste Explosive", "牛市狂奔": "Bull run", "王之宝库": "Trésor royal", "王之宝库：每 4 秒召唤 2 名金甲跑者": "Trésor royal : invoque 2 coureurs dorés toutes les 4 s", "玩法说明": "Comment jouer", "目标": "Cibles", "盾破": "Bouclier brisé", "瞄准": "Visée", "神秘箱": "Mystery Box", "神秘箱轰炸": "Frappe Mystery Box", "移速 +40%": "Vitesse +40 %", "稀有": "Rare", "稳": "Résiste", "稳妥": "Sûr", "空中支援": "Soutien aérien", "空位 · 选一个装置": "Emplacement libre · choisis un dispositif", "空投支援": "Soutien largage", "立即开始第 {n} 波 · +{b} GST": "Lancer la vague {n} · +{b} GST", "立即生效：+250 GST；之后对手体力 +15%": "Immédiat : +250 GST ; les rivaux ont ensuite +15 % d’endurance", "立即生效：对手移速 +15%；劝退获得 GST +50%": "Immédiat : rivaux +15 % de vitesse ; +50 % de GST par coureur arrêté", "立即生效：所有装置效果 +40%；生命 −10": "Immédiat : tous les dispositifs +40 % d’effet ; vies −10", "立即获得 120 GST": "Gagne 120 GST tout de suite", "笑声": "Fou rire", "第 {n} 波": "Vague {n}", "第 {n} 波守住 · +{g} GST": "Vague {n} tenue · +{g} GST", "第 {n} 波进行中": "Vague {n} en cours", "第 {r} 局 · 最高分 {b}": "Partie {r} · record {b}", "第 {r} 局 · 精英波 {e} 次": "Partie {r} · {e} vagues d’élite", "精准": "Précision", "精英奖励：这次的神秘箱只出稀有和传说。": "Bonus d’élite : cette Mystery Box ne contient que du rare et du légendaire.", "精英小队": "Escouade d’élite", "精英波": "Vague d’élite", "终点": "Arrivée", "绊倒退赛": "Trébuche et abandonne", "罐头暴雨": "Pluie de canettes", "罐头炮": "Canon à canettes", "耐力跑者": "Coureur endurant", "耐力跑者的鞋泡水，3 秒内失去耐力加成": "Trempe les chaussures des endurants : plus de bonus pendant 3 s", "生命": "Vies", "生命 +6": "Vies +6", "生命 −{n}": "Vies −{n}", "能量盾": "Bouclier d’énergie", "能量饮料站": "Stand de boissons énergisantes", "自动投罐机": "Lanceur automatique", "舒适宝石": "Gemme de confort", "范围": "Zone", "落地后再弹出 3 根小香蕉": "Éclate en 3 mini-bananes à l’impact", "落地后溅出 4 块碎皮，各 30% 效果": "Projette 4 morceaux de peau à l’impact, 30 % chacun", "落点留下 2 秒辣油": "Laisse de l’huile pimentée 2 s", "蓝牙串联": "Liaison Bluetooth", "补水光环": "Aura d’hydratation", "补水站": "Point d’eau", "补给": "Ravitaillement", "补给站站长": "Chef du ravitaillement", "被冻住的跑者受到所有效果 +60%": "Les coureurs gelés subissent +60 % de tout", "被淋湿的跑者受到所有效果 +25%": "Les coureurs mouillés subissent +25 % de tout", "被砸中的跑者鞋底发黏，2 秒内受到所有效果 +20%": "Semelles collantes : +20 % de tout pendant 2 s", "装置": "Dispositif", "装置效果 {s}{n}%": "Effet des dispositifs {s}{n} %", "解锁广场舞音响：洗脑神曲在跑者之间传播": "Débloque l’Enceinte de danse : un tube passe de coureur en coureur", "解锁洒水器：跑道湿滑，范围减速": "Débloque l’Arroseur : piste glissante, ralentit une zone", "解锁鞋盒无人机：全图空投鞋盒，无视耐力": "Débloque le Drone à boîtes : largages partout, ignore l’endurance", "解锁香蕉皮投手：一片跑者一起滑倒，专克耐力跑者": "Débloque le Lanceur de peaux : fait glisser des groupes, contre les endurants", "起点": "Départ", "跑团": "Club de course", "跑者退赛时喷出毒气，波及身边跑者，可以连锁": "Les coureurs qui abandonnent libèrent un gaz qui touche les voisins, en chaîne", "跑道": "Explosive", "跟着跳": "Danse avec moi", "辣到退赛的跑者会把辣油溅到身边": "Les coureurs qui abandonnent éclaboussent d’huile pimentée", "辣椒油": "Huile pimentée", "辣椒粉": "Piment en poudre", "辣油泼地": "Flaque pimentée", "还没有卡": "Aucune carte", "远投": "Lancer long", "远程狙罐": "Canette de précision", "连投": "Lancers rapides", "连续劝退 ×{n}": "Série ×{n}", "连续打卡": "Série de check-ins", "退赛时 2 名跟跑者接力": "2 meneurs prennent le relais à l’abandon", "退赛通知": "Avis d’abandon", "选好后有 8 秒布置时间。": "Tu as 8 secondes pour te préparer.", "选择第 {n} 段跑道": "Choisis le tronçon {n}", "透支生命": "Vies à découvert", "通关": "Territoire défendu !", "道具": "Objet", "重低音": "Basses lourdes", "重低音效果 ×8": "Basses lourdes ×8", "重型鞋盒": "Boîte lourde", "重抽 · {n} GST": "Relancer · {n} GST", "金王": "Roi doré", "铁头冲刺": "Charge tête baissée", "铁头冲刺：每 5 秒冲刺 1 秒，3 倍速": "Charge tête baissée : toutes les 5 s, sprint ×3 pendant 1 s", "铁皮罐": "Canette en tôle", "铁罐": "Canette en fer", "锁定": "Verrouillé", "间隔": "Intervalle", "震地": "Secousse", "震碎能量盾": "Brise-bouclier", "鞋匠": "Cordonnier", "鞋匠 → {c}": "Cordonnier → {c}", "鞋盒弹跳再砸 2 名跑者，50% 效果": "La boîte rebondit sur 2 coureurs de plus à 50 %", "鞋盒无人机": "Drone à boîtes", "鞋盒落地震晕 0.4 秒": "L’impact sonne 0,4 s", "音乐 关": "Musique off", "音乐 开": "Musique on", "音响": "Enceinte", "音效 关": "Son off", "音效 开": "Son on", "领地失守 · 第 {n} 波": "Territoire perdu · vague {n}", "领地跑道，点击虚线圆圈放置装置": "Piste du territoire ; touche un cercle pour placer un dispositif", "额外 35% 能量护盾": "Bouclier d’énergie +35 %", "香蕉海啸": "Tsunami de bananes", "香蕉皮": "Banane", "香蕉皮投手": "Lanceur de peaux de banane", "香蕉碎片": "Éclats de peau", "香蕉船": "Banana split", "香蕉连环": "Cascade de bananes", "香蕉雨": "Pluie de bananes", "马拉松模式": "Mode marathon", "高压水枪": "Nettoyeur haute pression", "高压水柱": "Jet d’eau", "高风险": "Risqué", "魔性旋律": "Mélodie obsédante", "魔鬼椒": "Piment fantôme", "黏液国王": "Roi visqueux", "黏液王冠：身后留下黏液，踩到的跑者加速 30% 并回体力": "Couronne visqueuse : laisse une traînée ; les coureurs dessus gagnent +30 % de vitesse et récupèrent", "黑猫": "Chat noir", "（选后可在空位放置）": " (à placer sur un emplacement libre)", "，下一级「{x}」不可用": " ; niveau suivant « {x} » indisponible", "出手速度 ×{r}，持续 {n} 秒": "Vitesse des dispositifs ×{r} pendant {n} s", "全场冻结 {n} 秒": "Toute la piste gelée {n} s", "{n} 条提示": "{n} remarques", "读取表格的组件加载失败，请检查网络后重试": "Impossible de charger le lecteur de tableur. Vérifie ta connexion et réessaie.", "缺少工作表「{x}」，使用默认值": "Feuille « {x} » absente ; valeurs par défaut utilisées", "{w}：「{v}」不是数字，使用默认值 {d}": "{w} : « {v} » n’est pas un nombre ; valeur par défaut {d}", "全局 {x}": "Global {x}", "全局：未知参数「{x}」已忽略": "Global : paramètre inconnu « {x} » ignoré", "装置第 {n} 行：未知 id「{x}」已忽略": "Dispositifs ligne {n} : id inconnu « {x} » ignoré", "装置 {x} {k}": "Dispositif {x} {k}", "升级路线第 {n} 行：找不到对应路线": "Voies ligne {n} : voie introuvable", "升级第 {n} 行：找不到对应等级": "Améliorations ligne {n} : niveau introuvable", "升级第 {n} 行 cost": "Améliorations ligne {n} cost", "升级第 {n} 行：效果「{x}」写法有误，保留原效果": "Améliorations ligne {n} : effet « {x} » invalide ; effet précédent conservé", "敌人第 {n} 行：未知 id 已忽略": "Ennemis ligne {n} : id inconnu ignoré", "敌人 {x} {k}": "Ennemi {x} {k}", "波次第 {n} 行 {k}": "Vagues ligne {n} {k}", "Boss 第 {n} 行：未知 id 已忽略": "Boss ligne {n} : id inconnu ignoré", "Boss {x} enabled": "Boss {x} enabled", "Boss {x} p{i}": "Boss {x} p{i}", "卡牌第 {n} 行：未知 id「{x}」已忽略": "Cartes ligne {n} : id inconnu « {x} » ignoré", "卡牌 {x} enabled": "Carte {x} enabled", "卡牌 {x} stack": "Carte {x} stack", "卡牌 {x} v1": "Carte {x} v1", "卡牌 {x} v2": "Carte {x} v2", "地图第 {n} 行 x": "Carte ligne {n} x", "地图第 {n} 行 y": "Carte ligne {n} y", "地图：跑道至少需要 2 个点，使用默认跑道": "Carte : la piste demande au moins 2 points ; piste par défaut", "地图：至少需要 1 个空位，使用默认空位": "Carte : il faut au moins 1 emplacement ; emplacements par défaut", "波次为空，使用默认波次": "Aucune vague ; vagues par défaut", "正在使用：{x}": "Configuration : {x}", "正在使用：默认配置": "Configuration : par défaut", "正在读取…": "Lecture…", "导入失败：{x}": "Échec de l’import : {x}", "导入配置表 (.xlsx)": "Importer la config (.xlsx)", "恢复默认": "Rétablir par défaut", "在 Excel 或 Google Sheets 中修改配置表后导出为 .xlsx 再导入，游戏会立即按新数值和名称重新开局。导入的配置只保存在这台设备的浏览器里。": "Modifie la config dans Excel ou Google Sheets, exporte-la en .xlsx puis importe-la ici. La partie redémarre aussitôt avec les nouvelles valeurs et noms. La config importée reste dans ce navigateur.", "蛇形跑道": "Serpentin", "1 进 1 出：一条长蛇形跑道，经典布局": "1 entrée, 1 sortie : une longue piste sinueuse, le tracé classique.", "双子跑道": "Pistes jumelles", "2 进 2 出：两条互不相交的跑道，中间一列空位可以同时照顾两边": "2 entrées, 2 sorties : deux pistes séparées ; la colonne centrale couvre les deux.", "分岔路口": "La Fourche", "1 进 2 出：跑者在路口分成左右两路，入口处是必争之地": "1 entrée, 2 sorties : les coureurs se séparent au carrefour ; l’entrée est décisive.", "汇流跑道": "Confluence", "2 进 1 出：两路跑者从两侧进场，在中间汇合后一起冲向终点": "2 entrées, 1 sortie : les coureurs arrivent des deux côtés, se rejoignent au centre et filent ensemble.", "十字路口": "Carrefour", "2 进 2 出：一路从上到下、一路从左到右，两条跑道在右下交叉": "2 entrées, 2 sorties : une piste du haut vers le bas, l’autre de gauche à droite ; elles se croisent en bas à droite.", "三路汇聚": "Trident", "3 进 1 出：左右两路绕远，中路直冲终点，要优先守住中路": "3 entrées, 1 sortie : les côtés font un détour, le centre file droit à l’arrivée ; protège le centre en priorité.", "随机": "Aléatoire", "跑道选择": "Piste", "本局跑道：{x}。{d}": "Piste : {x}. {d}", "跑道 {x} enabled": "Piste {x} enabled", "跑道 {x} spdMult": "Piste {x} spdMult", "跑道 {x} hpMult": "Piste {x} hpMult", "地图：跑道「{x}」不在「跑道列表」里，已忽略": "Carte : piste « {x} » absente de la liste ; ignorée", "地图「{x}」：每条路线至少需要 2 个点，保留原跑道": "Carte « {x} » : chaque tracé demande 2 points ; piste précédente conservée", "地图「{x}」：至少需要 1 个空位，保留原空位": "Carte « {x} » : il faut au moins 1 emplacement ; emplacements précédents conservés", "导入美术图片（可多选）": "Importer des images (plusieurs)", "清除导入的图片": "Effacer les images importées", "图片文件名用资源编号命名（如 tower.dart.png、boss.yawn.png），会自动替换对应的占位图。编号和尺寸见配置表「美术资源」工作表。": "Nommez chaque image d’après sa clé (ex. tower.dart.png, boss.yawn.png) : elle remplace le dessin provisoire correspondant. Clés et tailles : feuille « 美术资源 » (Art) du classeur.", "美术资源：全部使用占位图": "Graphismes : tout est provisoire", "美术资源：已替换 {n} 项（其中导入 {m} 张）": "Graphismes : {n} remplacés ({m} importés)", "加载失败：{x}": "Échec du chargement : {x}", "这些文件名不是资源编号，已跳过：{x}": "Ignorés (le nom n’est pas une clé) : {x}", "图片太大，浏览器存不下，只在本次打开期间有效": "Images trop lourdes pour le navigateur : valables jusqu’à la fermeture de la page", "美术资源：新编号「{x}」游戏里没有用到": "Graphismes : la clé « {x} » n’est pas utilisée", "美术资源 {x} {k}": "Graphismes {x} {k}", "点击开始": "Touchez pour commencer", "点跑道旁的石台放置装置，再点装置直接升级。": "Touchez un socle près de la piste pour poser un dispositif, puis touchez-le pour l’améliorer.", "开跑！": "Partez !", "神秘箱开启中…": "Ouverture de la Mystery Box…", "准备…": "Prêt…", "建造装置": "Construire", "关闭": "Fermer", "已锁定": "Verrouillé", "主": "Princ.", "次": "Sec.", "主路线可升满 5 级，次路线最多 2 级": "Voie principale jusqu’au niv. 5, secondaire jusqu’au niv. 2", "回收 +{n}": "Recycler +{n}", "跑步加成": "Bonus de course", "真实跑步会让你的装置更强。原型里用下面的开关模拟；正式版自动读取你在 STEPN 的跑步数据。": "Courir pour de vrai renforce tes dispositifs. Dans ce prototype, simule-le ci-dessous ; la version finale lira automatiquement tes données de course STEPN.", "公会天赋（模拟累计 RP）": "Talent de guilde (RP cumulés simulés)", "累计 {r} RP · 未解锁": "{r} RP cumulés · verrouillé", "累计 {r} RP · {t} 档 +{b}%": "{r} RP cumulés · palier {t} +{b} %", "今日热身：今天在 STEPN 已跑满 {k} km → 当天所有对局装置效果 +{b}%": "Échauffement : au moins {k} km courus dans STEPN aujourd’hui → tous les dispositifs +{b} % d’effet dans chaque partie du jour", "天赋怎么提高：每次真实跑步获得 RP（跑步积分）——前 5 km 每 km {a} RP，5–10 km 每 km {b} RP，单日最多 {c} RP。累计 RP 达到 {t1} / {t2} / {t3} 自动解锁一 / 二 / 三档公会天赋，全部装置效果 +{p1}% / +{p2}% / +{p3}%。按每周跑 4 次、每次 4.5 km 计算，大约 1 周、3 周、7 周解锁。": "Comment monter ton talent : chaque vraie course rapporte des RP (points de course) — {a} RP par km sur les 5 premiers km, {b} RP par km de 5 à 10 km, {c} RP max par jour. À {t1} / {t2} / {t3} RP cumulés, tu débloques le palier 1 / 2 / 3 du talent de guilde : tous les dispositifs +{p1} % / +{p2} % / +{p3} % d’effet. En courant 4 fois par semaine 4,5 km, comptez environ 1, 3 et 7 semaines.", "当前跑步加成：装置效果 +{n}%": "Bonus de course actuel : dispositifs +{n} %", "跑步加成 +{n}%": "Bonus de course +{n} %", "点跑道旁的石台放置装置，再点「开始第 1 波」": "Touchez un socle près de la piste pour poser un dispositif, puis « Lancer la vague 1 »", "宝石发射器": "Lance-gemmes", "发射宝石：红宝石主攻暴击，黄宝石主攻连发和 GST，蓝宝石减速冻结": "Tire des gemmes : rubis pour les critiques, topaze pour les tirs multiples et le GST, saphir pour ralentir et geler", "红宝石": "Rubis", "黄宝石": "Topaze", "蓝宝石": "Saphir", "打磨红宝石": "Rubis poli", "鸽血红": "Sang de pigeon", "红宝石切面": "Facettes de rubis", "暴击 ×3，对耐力跑者全额生效": "Critiques ×3, effet total sur les coureurs endurants", "炽红核心": "Cœur ardent", "红宝石之心": "Cœur de rubis", "效果 +12，暴击率再 +20%": "Effet +12, critique encore +20 %", "黄晶碎片": "Éclat de topaze", "出手间隔 −15%": "Intervalle −15 %", "双生黄晶": "Topaze jumelle", "每次多打 1 名跑者": "Touche 1 coureur de plus par tir", "黄晶矿脉": "Filon de topaze", "每波结束额外 +40 GST": "+40 GST à la fin de chaque vague", "黄晶棱镜": "Prisme de topaze", "再多打 2 名跑者，出手间隔 −25%": "Touche 2 coureurs de plus, intervalle −25 %", "GST 金矿": "Mine d’or GST", "每波结束再 +120 GST，出手间隔减半": "+120 GST de plus par vague, intervalle divisé par deux", "冰蓝切片": "Tranche bleu glace", "命中减速 25%，持续 1.5 秒": "Ralentit de 25 % pendant 1,5 s", "深海蓝": "Bleu abyssal", "蓝宝石冰封": "Gel de saphir", "命中时冻住非 Boss 跑者 0.6 秒": "Gèle les coureurs (hors boss) 0,6 s", "寒光": "Éclat glacé", "被减速的跑者受到所有效果 +30%": "Les coureurs ralentis subissent +30 % de tout", "星海蓝钻": "Diamant mer d’étoiles", "减速 50%，冻结 1.2 秒，Boss 也吃满减速": "Ralentit de 50 %, gèle 1,2 s, les boss subissent tout le ralentissement", "解锁宝石发射器：红、黄、蓝三种宝石对应三条路线": "Débloque le Lance-gemmes : rubis, topaze et saphir sont ses trois voies", "额外放置点": "Emplacement bonus", "获得 1 个放置点：点地图上跑道以外的空地，新增一个装置空位": "Gagne 1 emplacement : touche un terrain libre hors de la piste pour créer un emplacement", "下一级：{x}": "Suivant : {x}", "这里不能放": "Impossible ici", "取消放置": "Annuler", "＋ 放置点 ×{n}": "+ Emplacement ×{n}", "点跑道外的空地，新增一个放置点": "Touche un terrain libre hors piste pour ajouter un emplacement", "聪": "sats", "创世纪 · 2008–2010": "Genèse · 2008–2010", "组合": "Combos", "重试": "Réessayer", "STEPN 跑者掉进区块链时光隧道，跟着比特币走过最初的三年。": "Un coureur STEPN tombe dans un tunnel temporel blockchain et vit les trois premières années du bitcoin.", "累计积分 {n}": "Points : {n}", "剧情中…": "Histoire…", "关卡完成": "Niveau terminé", "再玩一次": "Rejouer", "章节地图": "Carte du chapitre", "第二章 · 敬请期待": "Chapitre 2 · bientôt", "图鉴": "Codex", "区块高度": "Hauteur", "区块奖励：选一个，比赛马上继续。": "Récompense de bloc : choisis-en une et la course reprend.", "选择关卡": "Choisir un niveau", "这关还没打出组合，试试把两种状态叠在同一个跑者身上。": "Aucun combo cette fois. Essaie de cumuler deux états sur le même coureur.", "快捷键：空格 开波 · F 切换速度 · 1–7 建造 · Q/W/E 升级 · X 回收 · Esc 取消": "Touches : Espace vague · F vitesse · 1–7 construire · Q/W/E améliorer · X recycler · Échap annuler", "一万枚换两个披萨！": "10 000 pièces pour deux pizzas !", "知识卡": "Savoir", "新组合：{x}！": "Nouveau combo : {x} !", "下一关": "Niveau suivant", "{n}× 速度": "Vitesse ×{n}", "区块 #{h} 被别的矿工抢先挖到了": "Le bloc #{h} est allé à un autre mineur", "挖到区块": "Blocs minés", "本关触发的组合": "Combos de ce niveau", "组合：{x}": "Combos : {x}", "修复版本上线，溢出的币被回滚": "Le correctif est en ligne ; les pièces en trop sont annulées", "还没触发过。试试把这两种状态叠在同一个跑者身上。": "Pas encore déclenché. Cumule ces deux états sur un coureur.", "出块！#{h}": "Bloc ! #{h}", "挖到区块 #{h}！": "Bloc #{h} miné !", "披萨跑者冲出来了": "Les coureurs-pizza arrivent", "重抽 · {n} 聪": "Relancer · {n} sats", "继续 ▶": "Suite ▶", "收入图鉴": "Ajouter au codex", "返回章节地图": "Retour à la carte", "跳过": "Passer", "经典模式": "Mode classique", "开始！": "C’est parti !", "算力 {h} · 出块奖励 +{b}%": "Puissance {h} · récompense +{b} %", "全网每隔十几秒出一个区块，你的算力占全网的比例，就是抢到它的几率。挖到区块：得聪，再开一次三选一。": "Le réseau produit un bloc toutes les quinze secondes environ. Ta part de la puissance totale est ta chance de le gagner. Bloc gagné : des sats et un choix parmi trois.", "出块几率": "Chance", "软分叉！": "Soft fork !", "原型阶段的链下积分，没有任何实际价值": "points hors chaîne du prototype, sans valeur réelle", "你的算力": "Ta puissance", "挖到的聪": "Sats minés", "全网算力": "Puissance réseau", "已挖到": "Gagnés", "下个区块": "Prochain bloc", "剩余生命": "Vies restantes", "快捷键 Q / W / E 升级，X 回收": "Touches Q / W / E améliorer, X recycler", "整数溢出！": "Dépassement d’entier !", "第一章": "Chapitre 1", "通关「{x}」解锁": "Termine « {x} » pour débloquer", "挂上：{x}": "Applique : {x}", "难度调整：全网算力 +{n}%": "Ajustement de difficulté : puissance réseau +{n} %", "新知识卡": "Nouvelle carte savoir", "⛏ 挖矿": "⛏ Minage", "获得积分": "Points gagnés", "矿机": "Mineur", "不攻击，比赛中不停算题挖区块：挖到区块得聪和一次三选一": "N’attaque pas ; calcule pendant la course. Bloc gagné : des sats et un choix parmi trois", "算力": "Puissance", "矿池": "Pool", "散热": "Refroidissement", "超频 CPU": "CPU surcadencé", "算力 +50%": "Puissance +50 %", "双核处理器": "Processeur double cœur", "显卡挖矿": "Minage GPU", "算力 ×3（2010 年显卡挖矿开始流行）": "Puissance ×3 (le minage GPU décolle en 2010)", "多卡矿机": "Rig multi-GPU", "算力 ×2": "Puissance ×2", "显卡农场": "Ferme GPU", "算力 ×2.5": "Puissance ×2,5", "加入矿池": "Rejoindre un pool", "出块奖励 +25%": "Récompense de bloc +25 %", "矿池分成": "Partage du pool", "射程内其他装置效果 +15%": "Autres dispositifs à portée : effet +15 %", "稳定收益": "Revenu stable", "出块奖励再 +50%": "Récompense de bloc encore +50 %", "大矿池": "Gros pool", "射程内其他装置效果 +30%，射程 +30": "Autres dispositifs à portée : effet +30 % ; portée +30", "算力联盟": "Alliance de puissance", "出块奖励再 +100%，射程内装置出手间隔 −15%": "Récompense encore +100 % ; dispositifs à portée : intervalle −15 %", "风扇狂转": "Ventilos à fond", "吹出热风：射程内跑者每秒受 1 点效果并挂上“热”": "Souffle de l’air chaud : coureurs à portée subissent 1 effet par seconde et reçoivent « Chaleur »", "机箱漏风": "Boîtier qui fuit", "热风 +2": "Chaleur +2", "水冷管道": "Watercooling", "烧机模式": "Mode surchauffe", "热风 ×3": "Chaleur ×3", "矿场火炉": "Fournaise de mine", "热风 +15，射程 +30": "Chaleur +15 ; portée +30", "披萨外卖员": "Livreur de pizza", "一万枚换两个披萨：体力掉到 2/3 和 1/3 时各扔下一盒披萨，冒出一群披萨跑者": "10 000 pièces pour deux pizzas : à 2/3 et 1/3 d’endurance, il lâche une boîte et une nuée de coureurs-pizza en sort", "溢出怪": "Le Débordement", "解锁矿机：挖区块得聪，并触发区块奖励三选一": "Débloque le Mineur : mine des blocs pour des sats et un choix de récompense", "再点一次离开（本局进度不保存）": "Touche encore pour quitter (partie non sauvegardée)", "雨衣跑者": "Coureur en ciré", "弹簧鞋跑者": "Coureur à ressorts", "降噪耳机跑者": "Coureur au casque", "巨鲸": "Baleine", "皮厚": "Coriace", "防水": "Imperméable", "跳过！": "Hop !", "跑者": "Coureurs", "对策": "Parade", "还没遇到过。": "Pas encore croisé.", "新跑者": "Nouveau coureur", "对{x}无效": "Sans effet sur {x}", "效果 +3，对耐力跑者全额生效": "Effet +3, plein effet contre les endurants", "效果 ×2；命中有 10% 概率直接绊倒退赛（非 Boss）": "Effet ×2 ; 10 % de chances de faire abandonner (hors boss)", "效果 +30，范围 +25": "Effet +30, zone +25", "效果 +6，射程 +40": "Effet +6, portée +40", "效果 +0.5": "Effet +0,5", "整数溢出：第一次倒下时分裂成两个，各带 60% 体力；几秒后“软分叉”修复，两个都掉一半体力": "Dépassement d’entier : la première fois qu’il tombe, il se divise en deux, chacun à 60 % d’endurance ; quelques secondes plus tard, un « soft fork » coupe leur endurance de moitié"}};
const LANGS = ['zh', 'en', 'fr'];
let LANG = (() => { try { const v = localStorage.getItem('bd-lang'); if (LANGS.includes(v)) return v; } catch (e) {} const n = (navigator.language || '').toLowerCase(); return n.startsWith('zh') ? 'zh' : n.startsWith('fr') ? 'fr' : 'en'; })();
const tr = x => x == null ? x : (I18N[LANG] && I18N[LANG][x] != null ? I18N[LANG][x] : x);
const tf = (k, v = {}) => tr(k).replace(/\{(\w+)\}/g, (_, n) => v[n] ?? '');
const LAND = (() => { try { return matchMedia('(min-width: 1000px) and (min-aspect-ratio: 5/4)').matches; } catch (e) { return false; } })();
let W = LAND ? 600 : 360, H = LAND ? 360 : 600;
document.body.classList.toggle('land', LAND);
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const rnd = (a, b) => a + Math.random() * (b - a);
const pickN = (arr, n) => { const a = arr.slice(), out = []; while (a.length && out.length < n) out.push(a.splice(Math.floor(Math.random() * a.length), 1)[0]); return out; };

// ---------- meta (per-viewer convenience only) ----------
let meta = {runs: 0, best: 0};
try { const m = JSON.parse(localStorage.getItem('bd-meta') || 'null'); if (m) meta = m; } catch (e) {}
const saveMeta = () => { try { localStorage.setItem('bd-meta', JSON.stringify(meta)); } catch (e) {} };

// ---------- config: every tunable number and name comes from here (see the config spreadsheet) ----------
const DEFAULT_CFG = {"global": {"waves": 15, "eliteAffixes": 2, "startGold": 300, "startLives": 20, "waveReward": 30, "eliteReward": 60, "eliteHpMult": 1.4, "betweenTime": 8, "earlyBonusPerSec": 5, "rerollBase": 20, "rerollStep": 10, "sellRefund": 0.6, "secCap": 2, "secCapBreaker": 3, "masterDmg": 1.25, "masterCost": 0.8, "couponMult": 0.5, "critBase": 0.12, "critMul": 2, "markBonus": 0.2, "comboWindow": 1.2, "frenzyNeed": 50, "frenzyDur": 5, "frenzyRate": 1.6, "marathonDur": 10, "marathonRate": 2, "warmBonus": 0.1, "warmKm": 2, "rpPerKm1": 10, "rpPerKm2": 5, "rpDailyCap": 75, "talentRP1": 200, "talentRP2": 600, "talentRP3": 1200, "talentBonus1": 0.1, "talentBonus2": 0.2, "talentBonus3": 0.3, "rarityC": 60, "rarityR": 30, "rarityL": 10, "bankRate": 0.1, "bankCap": 60, "goldenChance": 0.1, "goldenMult": 5, "popRadius": 34, "popBase": 2, "popPerWave": 0.5, "popChainRadius": 1.5, "popChainDmg": 2, "twinChance": 0.2, "freeupFallback": 100, "spawnBase": 0.62, "spawnPerWave": 0.022, "spawnMin": 0.28, "spawnArmorMult": 1.3, "hpRain": 1.2, "hpHop": 1.0, "hpPhones": 1.2, "hpWhale": 3.0, "hopDmg": 0.2, "whaleMin": 4, "whaleChip": 0.33, "slowCap": 0.85, "bossSlowMult": 0.5, "bossStunMult": 0.25, "miniHp": 0.35, "miniGold": 2, "miniSpeed": 1.15, "shieldPct": 0.35, "regenPct": 0.05, "regenDelay": 1, "swiftMult": 1.4, "shrapnelRange": 90, "shrapnelPct": 0.3, "clusterPct": 0.4, "firePatchDps": 0.6, "infernoRadius": 42, "iceAgeFreeze": 2, "ricochetPct": 0.5, "ricochetRange": 120, "decapBossPct": 0.15, "decapMult": 3, "teslaHop": 70, "blockTarget": 16, "blockReward": 5000, "adjustEvery": 3, "netGrowth": 0.15, "freeNet": 3, "rerollSats": 1500, "padTrackGap": 34, "padGap": 32, "scoreKill": 600, "scoreLives": 300, "scoreClean": 100}, "towers": [{"id": "dart", "name": {"zh": "易拉罐投手", "en": "Can Thrower", "fr": "Lanceur de canettes"}, "short": {"zh": "易拉罐", "en": "Can", "fr": "Canette"}, "desc": {"zh": "单体速投易拉罐；对耐力跑者只有 25% 效果，「铁罐」2 级后破甲", "en": "Rapid single-target cans; only 25% vs endurance runners until “Iron Can” tier 2", "fr": "Canettes rapides sur une cible ; 25 % contre les coureurs endurants jusqu’à « Canette en fer » niv. 2"}, "cost": 100, "dmg": 1, "rate": 0.5, "range": 95, "rad": 0, "slow": 0, "slowDur": 0, "chain": 0, "decay": 1, "armor": 0.25, "bossMul": 0.6, "color": "#ff6b6b"}, {"id": "bomb", "name": {"zh": "香蕉皮投手", "en": "Banana Peeler", "fr": "Lanceur de peaux de banane"}, "short": {"zh": "香蕉皮", "en": "Banana", "fr": "Banane"}, "desc": {"zh": "扔香蕉皮，一片跑者一起滑倒；耐力跑者的克星", "en": "Throws banana peels that trip a whole group; counters endurance runners", "fr": "Lance des peaux de banane qui font glisser un groupe ; contre les endurants"}, "cost": 160, "dmg": 3, "rate": 1.3, "range": 82, "rad": 40, "slow": 0, "slowDur": 0, "chain": 0, "decay": 1, "armor": 1, "bossMul": 1, "color": "#ffd84a"}, {"id": "frost", "name": {"zh": "洒水器", "en": "Sprinkler", "fr": "Arroseur"}, "short": {"zh": "洒水器", "en": "Sprinkler", "fr": "Arroseur"}, "desc": {"zh": "洒水让跑道湿滑，范围减速", "en": "Wets the track to slow an area", "fr": "Mouille la piste pour ralentir une zone"}, "cost": 120, "dmg": 0.5, "rate": 1.1, "range": 72, "rad": 0, "slow": 0.35, "slowDur": 1.5, "chain": 0, "decay": 1, "armor": 0.5, "bossMul": 1, "color": "#6fc3ff"}, {"id": "sniper", "name": {"zh": "鞋盒无人机", "en": "Shoebox Drone", "fr": "Drone à boîtes"}, "short": {"zh": "无人机", "en": "Drone", "fr": "Drone"}, "desc": {"zh": "全图空投鞋盒，专砸体力最多的跑者，无视耐力", "en": "Drops shoeboxes anywhere on the strongest runner, ignores endurance", "fr": "Largue des boîtes partout sur le coureur le plus endurant, ignore l’endurance"}, "cost": 180, "dmg": 6, "rate": 1.7, "range": 999, "rad": 0, "slow": 0, "slowDur": 0, "chain": 0, "decay": 1, "armor": 1, "bossMul": 1, "color": "#ff9d7a"}, {"id": "tesla", "name": {"zh": "广场舞音响", "en": "Dance Speaker", "fr": "Enceinte de danse"}, "short": {"zh": "音响", "en": "Speaker", "fr": "Enceinte"}, "desc": {"zh": "洗脑神曲在跑者之间传播，一次影响好几个", "en": "An earworm hops between runners, hitting several at once", "fr": "Un tube entêtant passe d’un coureur à l’autre"}, "cost": 150, "dmg": 2, "rate": 0.9, "range": 88, "rad": 0, "slow": 0, "slowDur": 0, "chain": 3, "decay": 0.85, "armor": 0.5, "bossMul": 1, "color": "#ff8fd0"}, {"id": "miner", "name": {"zh": "矿机", "en": "Miner", "fr": "Mineur"}, "short": {"zh": "矿机", "en": "Miner", "fr": "Mineur"}, "desc": {"zh": "不攻击，比赛中不停算题挖区块：挖到区块得聪和一次三选一", "en": "Doesn’t attack; keeps hashing during the race. Win a block for sats and a pick-one-of-three", "fr": "N’attaque pas ; calcule pendant la course. Bloc gagné : des sats et un choix parmi trois"}, "cost": 120, "dmg": 0, "rate": 1, "range": 70, "rad": 0, "slow": 0, "slowDur": 0, "chain": 0, "decay": 1, "armor": 1, "bossMul": 1, "color": "#f7931a"}, {"id": "gem", "name": {"zh": "宝石发射器", "en": "Gem Launcher", "fr": "Lance-gemmes"}, "short": {"zh": "宝石", "en": "Gems", "fr": "Gemmes"}, "desc": {"zh": "发射宝石：红宝石主攻暴击，黄宝石主攻连发和 GST，蓝宝石减速冻结", "en": "Fires gems: ruby for crits, topaz for multi-shot and GST, sapphire to slow and freeze", "fr": "Tire des gemmes : rubis pour les critiques, topaze pour les tirs multiples et le GST, saphir pour ralentir et geler"}, "cost": 140, "dmg": 1.5, "rate": 0.7, "range": 100, "rad": 0, "slow": 0, "slowDur": 0, "chain": 0, "decay": 1, "armor": 0.6, "bossMul": 1, "color": "#00a6f4"}], "paths": [{"tower": "miner", "path": 1, "name": {"zh": "算力", "en": "Hash", "fr": "Puissance"}, "tiers": [{"tier": 1, "name": {"zh": "超频 CPU", "en": "Overclocked CPU", "fr": "CPU surcadencé"}, "cost": 60, "desc": {"zh": "算力 +50%", "en": "Hash +50%", "fr": "Puissance +50 %"}, "effect": "hash*=1.5"}, {"tier": 2, "name": {"zh": "双核处理器", "en": "Dual-core CPU", "fr": "Processeur double cœur"}, "cost": 120, "desc": {"zh": "算力 +50%", "en": "Hash +50%", "fr": "Puissance +50 %"}, "effect": "hash*=1.5"}, {"tier": 3, "name": {"zh": "显卡挖矿", "en": "GPU Mining", "fr": "Minage GPU"}, "cost": 300, "desc": {"zh": "算力 ×3（2010 年显卡挖矿开始流行）", "en": "Hash ×3 (GPU mining took off in 2010)", "fr": "Puissance ×3 (le minage GPU décolle en 2010)"}, "effect": "hash*=3"}, {"tier": 4, "name": {"zh": "多卡矿机", "en": "Multi-GPU Rig", "fr": "Rig multi-GPU"}, "cost": 700, "desc": {"zh": "算力 ×2", "en": "Hash ×2", "fr": "Puissance ×2"}, "effect": "hash*=2"}, {"tier": 5, "name": {"zh": "显卡农场", "en": "GPU Farm", "fr": "Ferme GPU"}, "cost": 1500, "desc": {"zh": "算力 ×2.5", "en": "Hash ×2.5", "fr": "Puissance ×2,5"}, "effect": "hash*=2.5"}]}, {"tower": "miner", "path": 2, "name": {"zh": "矿池", "en": "Pool", "fr": "Pool"}, "tiers": [{"tier": 1, "name": {"zh": "加入矿池", "en": "Join a Pool", "fr": "Rejoindre un pool"}, "cost": 70, "desc": {"zh": "出块奖励 +25%", "en": "Block reward +25%", "fr": "Récompense de bloc +25 %"}, "effect": "blockBonus+=0.25"}, {"tier": 2, "name": {"zh": "矿池分成", "en": "Pool Payout", "fr": "Partage du pool"}, "cost": 140, "desc": {"zh": "射程内其他装置效果 +15%", "en": "Other devices in range: effect +15%", "fr": "Autres dispositifs à portée : effet +15 %"}, "effect": "auraDmg=1.15"}, {"tier": 3, "name": {"zh": "稳定收益", "en": "Steady Income", "fr": "Revenu stable"}, "cost": 320, "desc": {"zh": "出块奖励再 +50%", "en": "Block reward +50% more", "fr": "Récompense de bloc encore +50 %"}, "effect": "blockBonus+=0.5"}, {"tier": 4, "name": {"zh": "大矿池", "en": "Big Pool", "fr": "Gros pool"}, "cost": 700, "desc": {"zh": "射程内其他装置效果 +30%，射程 +30", "en": "Other devices in range: effect +30%; range +30", "fr": "Autres dispositifs à portée : effet +30 % ; portée +30"}, "effect": "auraDmg=1.3; range+=30"}, {"tier": 5, "name": {"zh": "算力联盟", "en": "Hash Alliance", "fr": "Alliance de puissance"}, "cost": 1500, "desc": {"zh": "出块奖励再 +100%，射程内装置出手间隔 −15%", "en": "Block reward +100% more; devices in range: interval −15%", "fr": "Récompense encore +100 % ; dispositifs à portée : intervalle −15 %"}, "effect": "blockBonus+=1; auraRate=0.85"}]}, {"tower": "miner", "path": 3, "name": {"zh": "散热", "en": "Cooling", "fr": "Refroidissement"}, "tiers": [{"tier": 1, "name": {"zh": "风扇狂转", "en": "Fans Roaring", "fr": "Ventilos à fond"}, "cost": 60, "desc": {"zh": "吹出热风：射程内跑者每秒受 1 点效果并挂上“热”", "en": "Blows hot air: runners in range take 1 effect per second and get “Heat”", "fr": "Souffle de l’air chaud : coureurs à portée subissent 1 effet par seconde et reçoivent « Chaleur »"}, "effect": "heat+=1"}, {"tier": 2, "name": {"zh": "机箱漏风", "en": "Leaky Case", "fr": "Boîtier qui fuit"}, "cost": 120, "desc": {"zh": "热风 +2", "en": "Heat +2", "fr": "Chaleur +2"}, "effect": "heat+=2"}, {"tier": 3, "name": {"zh": "水冷管道", "en": "Water-cooling Loop", "fr": "Watercooling"}, "cost": 300, "desc": {"zh": "射程 +25", "en": "Range +25", "fr": "Portée +25"}, "effect": "range+=25"}, {"tier": 4, "name": {"zh": "烧机模式", "en": "Burn-in Mode", "fr": "Mode surchauffe"}, "cost": 700, "desc": {"zh": "热风 ×3", "en": "Heat ×3", "fr": "Chaleur ×3"}, "effect": "heat*=3"}, {"tier": 5, "name": {"zh": "矿场火炉", "en": "Mine Furnace", "fr": "Fournaise de mine"}, "cost": 1500, "desc": {"zh": "热风 +15，射程 +30", "en": "Heat +15; range +30", "fr": "Chaleur +15 ; portée +30"}, "effect": "heat+=15; range+=30"}]}, {"tower": "gem", "path": 1, "name": {"zh": "红宝石", "en": "Ruby", "fr": "Rubis"}, "tiers": [{"tier": 1, "name": {"zh": "打磨红宝石", "en": "Polished Ruby", "fr": "Rubis poli"}, "cost": 80, "desc": {"zh": "效果 +1", "en": "Effect +1", "fr": "Effet +1"}, "effect": "dmg+=1"}, {"tier": 2, "name": {"zh": "鸽血红", "en": "Pigeon Blood", "fr": "Sang de pigeon"}, "cost": 90, "desc": {"zh": "暴击率 +20%", "en": "Crit chance +20%", "fr": "Critique +20 %"}, "effect": "crit+=0.2"}, {"tier": 3, "name": {"zh": "红宝石切面", "en": "Ruby Facets", "fr": "Facettes de rubis"}, "cost": 200, "desc": {"zh": "暴击 ×3，对耐力跑者全额生效", "en": "Crits ×3, full effect on endurance runners", "fr": "Critiques ×3, effet total sur les coureurs endurants"}, "effect": "critMul=3; armor=1"}, {"tier": 4, "name": {"zh": "炽红核心", "en": "Blazing Core", "fr": "Cœur ardent"}, "cost": 450, "desc": {"zh": "效果 ×2，对 Boss 再 ×1.5", "en": "Effect ×2, ×1.5 more vs bosses", "fr": "Effet ×2, encore ×1,5 contre les boss"}, "effect": "dmg*=2; bossMul*=1.5"}, {"tier": 5, "name": {"zh": "红宝石之心", "en": "Heart of Ruby", "fr": "Cœur de rubis"}, "cost": 1700, "desc": {"zh": "效果 +12，暴击率再 +20%", "en": "Effect +12, crit chance +20% more", "fr": "Effet +12, critique encore +20 %"}, "effect": "dmg+=12; crit+=0.2"}]}, {"tower": "gem", "path": 2, "name": {"zh": "黄宝石", "en": "Topaz", "fr": "Topaze"}, "tiers": [{"tier": 1, "name": {"zh": "黄晶碎片", "en": "Topaz Shard", "fr": "Éclat de topaze"}, "cost": 50, "desc": {"zh": "出手间隔 −20%", "en": "Interval −20%", "fr": "Intervalle −20 %"}, "effect": "rate*=0.8"}, {"tier": 2, "name": {"zh": "双生黄晶", "en": "Twin Topaz", "fr": "Topaze jumelle"}, "cost": 130, "desc": {"zh": "每次多打 1 名跑者", "en": "Hits 1 more runner per shot", "fr": "Touche 1 coureur de plus par tir"}, "effect": "multi+=1"}, {"tier": 3, "name": {"zh": "黄晶矿脉", "en": "Topaz Vein", "fr": "Filon de topaze"}, "cost": 300, "desc": {"zh": "每波结束额外 +40 GST", "en": "+40 GST at the end of each wave", "fr": "+40 GST à la fin de chaque vague"}, "effect": "gpw+=40"}, {"tier": 4, "name": {"zh": "黄晶棱镜", "en": "Topaz Prism", "fr": "Prisme de topaze"}, "cost": 560, "desc": {"zh": "再多打 2 名跑者，出手间隔 −25%", "en": "Hits 2 more runners, interval −25%", "fr": "Touche 2 coureurs de plus, intervalle −25 %"}, "effect": "multi+=2; rate*=0.75"}, {"tier": 5, "name": {"zh": "GST 金矿", "en": "GST Gold Mine", "fr": "Mine d’or GST"}, "cost": 1600, "desc": {"zh": "每波结束再 +120 GST，出手间隔减半", "en": "+120 GST more per wave, interval halved", "fr": "+120 GST de plus par vague, intervalle divisé par deux"}, "effect": "gpw+=120; rate*=0.5"}]}, {"tower": "gem", "path": 3, "name": {"zh": "蓝宝石", "en": "Sapphire", "fr": "Saphir"}, "tiers": [{"tier": 1, "name": {"zh": "冰蓝切片", "en": "Ice-Blue Slice", "fr": "Tranche bleu glace"}, "cost": 60, "desc": {"zh": "命中减速 25%，持续 1.5 秒", "en": "Hits slow by 25% for 1.5 s", "fr": "Ralentit de 25 % pendant 1,5 s"}, "effect": "slow=0.25; slowDur=1.5"}, {"tier": 2, "name": {"zh": "深海蓝", "en": "Deep-Sea Blue", "fr": "Bleu abyssal"}, "cost": 120, "desc": {"zh": "射程 +25", "en": "Range +25", "fr": "Portée +25"}, "effect": "range+=25"}, {"tier": 3, "name": {"zh": "蓝宝石冰封", "en": "Sapphire Freeze", "fr": "Gel de saphir"}, "cost": 300, "desc": {"zh": "命中时冻住非 Boss 跑者 0.6 秒", "en": "Hits freeze non-boss runners for 0.6 s", "fr": "Gèle les coureurs (hors boss) 0,6 s"}, "effect": "freeze=0.6"}, {"tier": 4, "name": {"zh": "寒光", "en": "Cold Gleam", "fr": "Éclat glacé"}, "cost": 680, "desc": {"zh": "被减速的跑者受到所有效果 +30%", "en": "Slowed runners take +30% from everything", "fr": "Les coureurs ralentis subissent +30 % de tout"}, "effect": "vulnSlow=0.3"}, {"tier": 5, "name": {"zh": "星海蓝钻", "en": "Star-Sea Diamond", "fr": "Diamant mer d’étoiles"}, "cost": 1500, "desc": {"zh": "减速 50%，冻结 1.2 秒，Boss 也吃满减速", "en": "Slow 50%, freeze 1.2 s, bosses take the full slow", "fr": "Ralentit de 50 %, gèle 1,2 s, les boss subissent tout le ralentissement"}, "effect": "slow=0.5; freeze=1.2; bossSlowFull=1"}]}, {"tower": "dart", "path": 1, "name": {"zh": "铁罐", "en": "Iron Can", "fr": "Canette en fer"}, "tiers": [{"tier": 1, "name": {"zh": "加料汽水罐", "en": "Loaded Soda Can", "fr": "Canette chargée"}, "cost": 70, "desc": {"zh": "效果 +1", "en": "Effect +1", "fr": "Effet +1"}, "effect": "dmg+=1"}, {"tier": 2, "name": {"zh": "铁皮罐", "en": "Tin Can", "fr": "Canette en tôle"}, "cost": 120, "desc": {"zh": "对耐力跑者：25% → 60%", "en": "vs endurance runners: 25% → 60%", "fr": "Contre les endurants : 25 % → 60 %"}, "effect": "armor>=0.6"}, {"tier": 3, "name": {"zh": "实心铁罐", "en": "Solid Iron Can", "fr": "Canette pleine en fer"}, "cost": 260, "desc": {"zh": "效果 +3，对耐力跑者全额生效", "en": "Effect +3, full effect vs endurance runners", "fr": "Effet +3, plein effet contre les endurants"}, "effect": "dmg+=3; armor=1"}, {"tier": 4, "name": {"zh": "罐头炮", "en": "Can Cannon", "fr": "Canon à canettes"}, "cost": 600, "desc": {"zh": "效果 ×2，对 Boss 不再打折", "en": "Effect ×2, no penalty vs bosses", "fr": "Effet ×2, sans pénalité contre les boss"}, "effect": "dmg*=2; bossMul=1"}, {"tier": 5, "name": {"zh": "大桶可乐", "en": "Party Keg", "fr": "Fût de soda"}, "cost": 1400, "desc": {"zh": "效果 ×2；命中有 10% 概率直接绊倒退赛（非 Boss）", "en": "Effect ×2; 10% chance to trip a non-boss out of the race", "fr": "Effet ×2 ; 10 % de chances de faire abandonner (hors boss)"}, "effect": "dmg*=2; execChance=0.1"}]}, {"tower": "dart", "path": 2, "name": {"zh": "连投", "en": "Rapid Toss", "fr": "Lancers rapides"}, "tiers": [{"tier": 1, "name": {"zh": "快手", "en": "Quick Hands", "fr": "Mains rapides"}, "cost": 40, "desc": {"zh": "出手间隔 −25%", "en": "出手间隔 −25%", "fr": "出手间隔 −25%"}, "effect": "rate*=0.75"}, {"tier": 2, "name": {"zh": "双手投", "en": "Two-handed", "fr": "À deux mains"}, "cost": 70, "desc": {"zh": "出手间隔 −25%", "en": "出手间隔 −25%", "fr": "出手间隔 −25%"}, "effect": "rate*=0.75"}, {"tier": 3, "name": {"zh": "三连投", "en": "Triple Toss", "fr": "Triple lancer"}, "cost": 280, "desc": {"zh": "每次多砸 2 名跑者", "en": "Hits 2 more runners each throw", "fr": "Touche 2 coureurs de plus par lancer"}, "effect": "multi+=2"}, {"tier": 4, "name": {"zh": "自动投罐机", "en": "Auto Can Launcher", "fr": "Lanceur automatique"}, "cost": 650, "desc": {"zh": "出手间隔减半", "en": "Interval halved", "fr": "Intervalle divisé par 2"}, "effect": "rate*=0.5"}, {"tier": 5, "name": {"zh": "罐头暴雨", "en": "Can Storm", "fr": "Pluie de canettes"}, "cost": 1500, "desc": {"zh": "再多砸 4 名跑者，间隔再 −30%", "en": "Hits 4 more runners, interval −30%", "fr": "Touche 4 coureurs de plus, intervalle −30 %"}, "effect": "multi+=4; rate*=0.7"}]}, {"tower": "dart", "path": 3, "name": {"zh": "瞄准", "en": "Aim", "fr": "Visée"}, "tiers": [{"tier": 1, "name": {"zh": "远投", "en": "Long Toss", "fr": "Lancer long"}, "cost": 50, "desc": {"zh": "射程 +25", "en": "Range +25", "fr": "Portée +25"}, "effect": "range+=25"}, {"tier": 2, "name": {"zh": "精准", "en": "Precision", "fr": "Précision"}, "cost": 100, "desc": {"zh": "暴击率 +15%", "en": "Crit chance +15%", "fr": "Chance de critique +15 %"}, "effect": "crit+=0.15"}, {"tier": 3, "name": {"zh": "汽水黏鞋", "en": "Sticky Soda", "fr": "Soda collant"}, "cost": 300, "desc": {"zh": "被砸中的跑者鞋底发黏，2 秒内受到所有效果 +20%", "en": "Hit runners get sticky soles: +20% from everything for 2 s", "fr": "Semelles collantes : +20 % de tout pendant 2 s"}, "effect": "mark=2"}, {"tier": 4, "name": {"zh": "远程狙罐", "en": "Sniper Can", "fr": "Canette de précision"}, "cost": 700, "desc": {"zh": "射程 +60，暴击 ×3", "en": "Range +60, crits ×3", "fr": "Portée +60, critiques ×3"}, "effect": "range+=60; critMul=3"}, {"tier": 5, "name": {"zh": "补给站站长", "en": "Aid Station Chief", "fr": "Chef du ravitaillement"}, "cost": 1300, "desc": {"zh": "120 范围内其他装置出手间隔 −20%", "en": "Other devices within 120: interval −20%", "fr": "Autres dispositifs à 120 : intervalle −20 %"}, "effect": "auraRate=0.8; auraR=120"}]}, {"tower": "bomb", "path": 1, "name": {"zh": "大香蕉", "en": "Big Banana", "fr": "Grosse banane"}, "tiers": [{"tier": 1, "name": {"zh": "大片香蕉皮", "en": "Big Peel", "fr": "Grande peau"}, "cost": 70, "desc": {"zh": "滑倒范围 +10", "en": "Slip area +10", "fr": "Zone de glissade +10"}, "effect": "rad+=10"}, {"tier": 2, "name": {"zh": "熟透香蕉", "en": "Overripe Banana", "fr": "Banane trop mûre"}, "cost": 150, "desc": {"zh": "效果 +3", "en": "Effect +3", "fr": "Effet +3"}, "effect": "dmg+=3"}, {"tier": 3, "name": {"zh": "四脚朝天", "en": "Flat on Back", "fr": "Les quatre fers en l’air"}, "cost": 330, "desc": {"zh": "滑倒的跑者眩晕 0.6 秒", "en": "Slipping runners are stunned 0.6 s", "fr": "Les coureurs qui glissent sont sonnés 0,6 s"}, "effect": "stun=0.6"}, {"tier": 4, "name": {"zh": "香蕉船", "en": "Banana Split", "fr": "Banana split"}, "cost": 750, "desc": {"zh": "对 Boss 效果 ×3", "en": "×3 effect vs bosses", "fr": "Effet ×3 contre les boss"}, "effect": "bossMul*=3"}, {"tier": 5, "name": {"zh": "香蕉海啸", "en": "Banana Tsunami", "fr": "Tsunami de bananes"}, "cost": 1400, "desc": {"zh": "效果 +30，范围 +25", "en": "Effect +30, area +25", "fr": "Effet +30, zone +25"}, "effect": "dmg+=30; rad+=25"}]}, {"tower": "bomb", "path": 2, "name": {"zh": "一串香蕉", "en": "Banana Bunch", "fr": "Régime de bananes"}, "tiers": [{"tier": 1, "name": {"zh": "双发香蕉", "en": "Double Banana", "fr": "Double banane"}, "cost": 100, "desc": {"zh": "一次扔 2 片，砸 2 个点", "en": "Throws 2 peels at 2 spots", "fr": "Lance 2 peaux sur 2 points"}, "effect": "bombs=2"}, {"tier": 2, "name": {"zh": "香蕉碎片", "en": "Peel Shrapnel", "fr": "Éclats de peau"}, "cost": 160, "desc": {"zh": "落地后溅出 4 块碎皮，各 30% 效果", "en": "Splatters 4 peel bits on landing, 30% each", "fr": "Projette 4 morceaux de peau à l’impact, 30 % chacun"}, "effect": "shrapnel=4"}, {"tier": 3, "name": {"zh": "一串香蕉", "en": "Banana Bunch", "fr": "Régime de bananes"}, "cost": 220, "desc": {"zh": "落地后再弹出 3 根小香蕉", "en": "Bursts into 3 mini bananas on landing", "fr": "Éclate en 3 mini-bananes à l’impact"}, "effect": "cluster=1"}, {"tier": 4, "name": {"zh": "香蕉连环", "en": "Banana Cascade", "fr": "Cascade de bananes"}, "cost": 480, "desc": {"zh": "小香蕉还会再散开一次", "en": "Mini bananas split once more", "fr": "Les mini-bananes se divisent encore"}, "effect": "cluster=2"}, {"tier": 5, "name": {"zh": "香蕉雨", "en": "Banana Rain", "fr": "Pluie de bananes"}, "cost": 1500, "desc": {"zh": "出手间隔 −60%", "en": "Interval −60%", "fr": "Intervalle −60 %"}, "effect": "rate*=0.4"}]}, {"tower": "bomb", "path": 3, "name": {"zh": "辣椒油", "en": "Chili Oil", "fr": "Huile pimentée"}, "tiers": [{"tier": 1, "name": {"zh": "辣椒粉", "en": "Chili Powder", "fr": "Piment en poudre"}, "cost": 80, "desc": {"zh": "沾到的跑者辣到跳脚 2 秒", "en": "Runners hop from the heat for 2 s", "fr": "Les coureurs sautillent de piment 2 s"}, "effect": "burnDur=2; burnPct=0.25"}, {"tier": 2, "name": {"zh": "魔鬼椒", "en": "Ghost Pepper", "fr": "Piment fantôme"}, "cost": 140, "desc": {"zh": "持续 3 秒，持续效果 +40%", "en": "Lasts 3 s, +40% over time", "fr": "Dure 3 s, +40 % sur la durée"}, "effect": "burnDur=3; burnPct=0.35"}, {"tier": 3, "name": {"zh": "辣油泼地", "en": "Oil Slick", "fr": "Flaque pimentée"}, "cost": 260, "desc": {"zh": "落点留下 2 秒辣油", "en": "Leaves chili oil for 2 s", "fr": "Laisse de l’huile pimentée 2 s"}, "effect": "firePatch=2"}, {"tier": 4, "name": {"zh": "变态辣", "en": "Insanely Hot", "fr": "Ultra piquant"}, "cost": 560, "desc": {"zh": "持续效果 ×2.5", "en": "Effect over time ×2.5", "fr": "Effet sur la durée ×2,5"}, "effect": "burnPct*=2.5"}, {"tier": 5, "name": {"zh": "火锅底料", "en": "Hot Pot Base", "fr": "Bouillon fondue chinoise"}, "cost": 1600, "desc": {"zh": "辣到退赛的跑者会把辣油溅到身边", "en": "Runners who quit from the heat splash chili oil around", "fr": "Les coureurs qui abandonnent éclaboussent d’huile pimentée"}, "effect": "inferno=1"}]}, {"tower": "frost", "path": 1, "name": {"zh": "冰水", "en": "Ice Water", "fr": "Eau glacée"}, "tiers": [{"tier": 1, "name": {"zh": "凉水", "en": "Cold Water", "fr": "Eau froide"}, "cost": 60, "desc": {"zh": "减速 +10%", "en": "Slow +10%", "fr": "Ralenti +10 %"}, "effect": "slow+=0.1"}, {"tier": 2, "name": {"zh": "持续喷淋", "en": "Steady Spray", "fr": "Arrosage continu"}, "cost": 90, "desc": {"zh": "湿滑持续 +1 秒", "en": "Wet track lasts +1 s", "fr": "Piste mouillée +1 s"}, "effect": "slowDur+=1"}, {"tier": 3, "name": {"zh": "冰水", "en": "Ice Water", "fr": "Eau glacée"}, "cost": 300, "desc": {"zh": "冻住非 Boss 跑者 0.8 秒", "en": "Freezes non-boss runners for 0.8 s", "fr": "Gèle les coureurs (hors boss) 0,8 s"}, "effect": "freeze=0.8"}, {"tier": 4, "name": {"zh": "冰桶挑战", "en": "Ice Bucket Challenge", "fr": "Ice Bucket Challenge"}, "cost": 750, "desc": {"zh": "冻住 1.5 秒，Boss 也吃满减速", "en": "Freezes 1.5 s; bosses take the full slow", "fr": "Gèle 1,5 s ; les boss subissent tout le ralentissement"}, "effect": "freeze=1.5; bossSlowFull=1"}, {"tier": 5, "name": {"zh": "人工降雪", "en": "Snow Machine", "fr": "Canon à neige"}, "cost": 1600, "desc": {"zh": "每 8 秒冻住全场非 Boss 跑者 2 秒", "en": "Every 8 s, freezes all non-boss runners for 2 s", "fr": "Toutes les 8 s, gèle tous les coureurs (hors boss) 2 s"}, "effect": "iceAge=8"}]}, {"tower": "frost", "path": 2, "name": {"zh": "高压水枪", "en": "Pressure Washer", "fr": "Nettoyeur haute pression"}, "tiers": [{"tier": 1, "name": {"zh": "加压", "en": "Pressurize", "fr": "Pression"}, "cost": 70, "desc": {"zh": "效果 +0.5", "en": "Effect +0.5", "fr": "Effet +0,5"}, "effect": "dmg+=0.5"}, {"tier": 2, "name": {"zh": "湿身", "en": "Soaked", "fr": "Trempé"}, "cost": 130, "desc": {"zh": "被淋湿的跑者受到所有效果 +25%", "en": "Wet runners take +25% from everything", "fr": "Les coureurs mouillés subissent +25 % de tout"}, "effect": "vulnSlow=0.25"}, {"tier": 3, "name": {"zh": "高压水柱", "en": "Water Jet", "fr": "Jet d’eau"}, "cost": 320, "desc": {"zh": "效果 ×2", "en": "Effect ×2", "fr": "Effet ×2"}, "effect": "dmg*=2"}, {"tier": 4, "name": {"zh": "冰面", "en": "Black Ice", "fr": "Verglas"}, "cost": 680, "desc": {"zh": "被冻住的跑者受到所有效果 +60%", "en": "Frozen runners take +60% from everything", "fr": "Les coureurs gelés subissent +60 % de tout"}, "effect": "vulnFreeze=0.6"}, {"tier": 5, "name": {"zh": "消防水炮", "en": "Fire Hose Cannon", "fr": "Lance à incendie"}, "cost": 1500, "desc": {"zh": "效果 +6，射程 +40", "en": "Effect +6, range +40", "fr": "Effet +6, portée +40"}, "effect": "dmg+=6; range+=40"}]}, {"tower": "frost", "path": 3, "name": {"zh": "补水站", "en": "Water Station", "fr": "Point d’eau"}, "tiers": [{"tier": 1, "name": {"zh": "喷头扩展", "en": "Wider Nozzle", "fr": "Buse élargie"}, "cost": 60, "desc": {"zh": "射程 +20", "en": "Range +20", "fr": "Portée +20"}, "effect": "range+=20"}, {"tier": 2, "name": {"zh": "快速喷淋", "en": "Rapid Spray", "fr": "Arrosage rapide"}, "cost": 110, "desc": {"zh": "出手间隔 −20%", "en": "Interval −20%", "fr": "Intervalle −20 %"}, "effect": "rate*=0.8"}, {"tier": 3, "name": {"zh": "泡水鞋", "en": "Soggy Shoes", "fr": "Chaussures trempées"}, "cost": 260, "desc": {"zh": "耐力跑者的鞋泡水，3 秒内失去耐力加成", "en": "Soaks endurance runners’ shoes: no endurance bonus for 3 s", "fr": "Trempe les chaussures des endurants : plus de bonus pendant 3 s"}, "effect": "strip=3"}, {"tier": 4, "name": {"zh": "补水光环", "en": "Hydration Aura", "fr": "Aura d’hydratation"}, "cost": 600, "desc": {"zh": "射程内其他装置效果 +20%", "en": "Other devices in range: effect +20%", "fr": "Autres dispositifs à portée : effet +20 %"}, "effect": "auraDmg=1.2"}, {"tier": 5, "name": {"zh": "能量饮料站", "en": "Energy Drink Station", "fr": "Stand de boissons énergisantes"}, "cost": 1300, "desc": {"zh": "射程内其他装置出手间隔 −25%", "en": "Other devices in range: interval −25%", "fr": "Autres dispositifs à portée : intervalle −25 %"}, "effect": "auraRate=0.75"}]}, {"tower": "sniper", "path": 1, "name": {"zh": "重型鞋盒", "en": "Heavy Box", "fr": "Boîte lourde"}, "tiers": [{"tier": 1, "name": {"zh": "加重鞋盒", "en": "Heavy Shoebox", "fr": "Boîte lestée"}, "cost": 100, "desc": {"zh": "效果 +4", "en": "Effect +4", "fr": "Effet +4"}, "effect": "dmg+=4"}, {"tier": 2, "name": {"zh": "大号鞋盒", "en": "XL Shoebox", "fr": "Boîte XL"}, "cost": 180, "desc": {"zh": "效果 +6", "en": "Effect +6", "fr": "Effet +6"}, "effect": "dmg+=6"}, {"tier": 3, "name": {"zh": "退赛通知", "en": "DNF notice", "fr": "Avis d’abandon"}, "cost": 400, "desc": {"zh": "体力低于 25% 的非 Boss 跑者直接退赛", "en": "Non-boss runners under 25% stamina quit instantly", "fr": "Les coureurs (hors boss) sous 25 % d’endurance abandonnent"}, "effect": "exec25=1"}, {"tier": 4, "name": {"zh": "创世鞋盒", "en": "Genesis Shoebox", "fr": "Boîte Genesis"}, "cost": 750, "desc": {"zh": "效果 ×2，对 Boss 再 ×1.5", "en": "Effect ×2, ×1.5 more vs bosses", "fr": "Effet ×2, encore ×1,5 contre les boss"}, "effect": "dmg*=2; bossMul*=1.5"}, {"tier": 5, "name": {"zh": "神秘箱轰炸", "en": "Mystery Box Strike", "fr": "Frappe Mystery Box"}, "cost": 2000, "desc": {"zh": "每第 4 次：砸 Boss 额外扣其 15% 体力，砸其他跑者 ×3", "en": "Every 4th drop: bosses lose an extra 15% stamina, others take ×3", "fr": "Tous les 4 largages : −15 % d’endurance en plus aux boss, ×3 aux autres"}, "effect": "decap=1"}]}, {"tower": "sniper", "path": 2, "name": {"zh": "快递", "en": "Express", "fr": "Express"}, "tiers": [{"tier": 1, "name": {"zh": "夜航", "en": "Night Flight", "fr": "Vol de nuit"}, "cost": 80, "desc": {"zh": "暴击率 +20%", "en": "Crit chance +20%", "fr": "Critique +20 %"}, "effect": "crit+=0.2"}, {"tier": 2, "name": {"zh": "快速装填", "en": "Fast Reload", "fr": "Rechargement rapide"}, "cost": 100, "desc": {"zh": "出手间隔 −20%", "en": "Interval −20%", "fr": "Intervalle −20 %"}, "effect": "rate*=0.8"}, {"tier": 3, "name": {"zh": "双桨无人机", "en": "Twin Rotor", "fr": "Double rotor"}, "cost": 300, "desc": {"zh": "出手间隔减半", "en": "Interval halved", "fr": "Intervalle divisé par 2"}, "effect": "rate*=0.5"}, {"tier": 4, "name": {"zh": "无人机群", "en": "Drone Swarm", "fr": "Essaim de drones"}, "cost": 650, "desc": {"zh": "出手间隔 −40%", "en": "Interval −40%", "fr": "Intervalle −40 %"}, "effect": "rate*=0.6"}, {"tier": 5, "name": {"zh": "当日达", "en": "Same-day Delivery", "fr": "Livraison le jour même"}, "cost": 1900, "desc": {"zh": "效果 +10，出手间隔再 −30%", "en": "Effect +10, interval −30% more", "fr": "Effet +10, intervalle encore −30 %"}, "effect": "dmg+=10; rate*=0.7"}]}, {"tower": "sniper", "path": 3, "name": {"zh": "空投支援", "en": "Airdrop Support", "fr": "Soutien largage"}, "tiers": [{"tier": 1, "name": {"zh": "震地", "en": "Ground Shake", "fr": "Secousse"}, "cost": 90, "desc": {"zh": "鞋盒落地震晕 0.4 秒", "en": "Box impact stuns for 0.4 s", "fr": "L’impact sonne 0,4 s"}, "effect": "stun=0.4"}, {"tier": 2, "name": {"zh": "弹跳鞋盒", "en": "Bouncing Box", "fr": "Boîte rebondissante"}, "cost": 150, "desc": {"zh": "鞋盒弹跳再砸 2 名跑者，50% 效果", "en": "Box bounces to 2 more runners at 50%", "fr": "La boîte rebondit sur 2 coureurs de plus à 50 %"}, "effect": "ricochet=2"}, {"tier": 3, "name": {"zh": "GST 补给", "en": "GST Supply", "fr": "Ravitaillement GST"}, "cost": 360, "desc": {"zh": "每波结束 +40 GST", "en": "+40 GST after each wave", "fr": "+40 GST après chaque vague"}, "effect": "gpw=40"}, {"tier": 4, "name": {"zh": "GST 空投", "en": "GST Airdrop", "fr": "Airdrop GST"}, "cost": 700, "desc": {"zh": "每波结束 +100 GST", "en": "+100 GST after each wave", "fr": "+100 GST après chaque vague"}, "effect": "gpw=100"}, {"tier": 5, "name": {"zh": "空中支援", "en": "Air Support", "fr": "Soutien aérien"}, "cost": 1500, "desc": {"zh": "全场所有装置效果 +15%", "en": "All devices +15% effect", "fr": "Tous les dispositifs +15 % d’effet"}, "effect": "globalDmg=0.15"}]}, {"tower": "tesla", "path": 1, "name": {"zh": "传唱", "en": "Sing-along", "fr": "Refrain"}, "tiers": [{"tier": 1, "name": {"zh": "小音箱", "en": "Mini Speaker", "fr": "Mini enceinte"}, "cost": 50, "desc": {"zh": "多传 1 人", "en": "Chains 1 more", "fr": "1 de plus en chaîne"}, "effect": "chain+=1"}, {"tier": 2, "name": {"zh": "蓝牙串联", "en": "Bluetooth Link", "fr": "Liaison Bluetooth"}, "cost": 90, "desc": {"zh": "多传 2 人", "en": "Chains 2 more", "fr": "2 de plus en chaîne"}, "effect": "chain+=2"}, {"tier": 3, "name": {"zh": "无损音质", "en": "Lossless Audio", "fr": "Son sans perte"}, "cost": 320, "desc": {"zh": "多传 3 人，传播不衰减", "en": "Chains 3 more, no falloff", "fr": "3 de plus en chaîne, sans atténuation"}, "effect": "chain+=3; decay=1"}, {"tier": 4, "name": {"zh": "双声道", "en": "Stereo", "fr": "Stéréo"}, "cost": 750, "desc": {"zh": "同时放两首", "en": "Plays two songs at once", "fr": "Joue deux morceaux à la fois"}, "effect": "starts=2"}, {"tier": 5, "name": {"zh": "全城广场舞", "en": "Citywide Dance", "fr": "Danse dans toute la ville"}, "cost": 1700, "desc": {"zh": "多传 10 人，效果 +6", "en": "Chains 10 more, effect +6", "fr": "10 de plus en chaîne, effet +6"}, "effect": "chain+=10; dmg+=6"}]}, {"tower": "tesla", "path": 2, "name": {"zh": "重低音", "en": "Heavy Bass", "fr": "Basses lourdes"}, "tiers": [{"tier": 1, "name": {"zh": "低音炮", "en": "Subwoofer", "fr": "Caisson de basses"}, "cost": 90, "desc": {"zh": "效果 +1.5", "en": "Effect +1.5", "fr": "Effet +1,5"}, "effect": "dmg+=1.5"}, {"tier": 2, "name": {"zh": "大功率", "en": "High Wattage", "fr": "Haute puissance"}, "cost": 150, "desc": {"zh": "效果 +2", "en": "Effect +2", "fr": "Effet +2"}, "effect": "dmg+=2"}, {"tier": 3, "name": {"zh": "重低音", "en": "Heavy Bass", "fr": "Basses lourdes"}, "cost": 380, "desc": {"zh": "每第 4 首效果 ×3", "en": "Every 4th song ×3", "fr": "Un morceau sur 4 ×3"}, "effect": "overN=4; overMul=3"}, {"tier": 4, "name": {"zh": "炸街", "en": "Street Blaster", "fr": "Sono de rue"}, "cost": 800, "desc": {"zh": "效果 ×2", "en": "Effect ×2", "fr": "Effet ×2"}, "effect": "dmg*=2"}, {"tier": 5, "name": {"zh": "地动山摇", "en": "Earthquake Bass", "fr": "Basses sismiques"}, "cost": 1500, "desc": {"zh": "重低音效果 ×8", "en": "Heavy bass hits ×8", "fr": "Basses lourdes ×8"}, "effect": "overN=4; overMul=8"}]}, {"tower": "tesla", "path": 3, "name": {"zh": "洗脑神曲", "en": "Earworm", "fr": "Tube entêtant"}, "tiers": [{"tier": 1, "name": {"zh": "扩音", "en": "Amplifier", "fr": "Amplificateur"}, "cost": 70, "desc": {"zh": "射程 +20", "en": "Range +20", "fr": "Portée +20"}, "effect": "range+=20"}, {"tier": 2, "name": {"zh": "跟着跳", "en": "Dance Along", "fr": "Danse avec moi"}, "cost": 130, "desc": {"zh": "听到的跑者停下来跳 0.25 秒", "en": "Runners stop to dance for 0.25 s", "fr": "Les coureurs s’arrêtent pour danser 0,25 s"}, "effect": "stun=0.25"}, {"tier": 3, "name": {"zh": "震碎能量盾", "en": "Shield Shatter", "fr": "Brise-bouclier"}, "cost": 330, "desc": {"zh": "对能量盾效果 ×3", "en": "×3 vs energy shields", "fr": "Effet ×3 contre les boucliers"}, "effect": "shieldMul=3"}, {"tier": 4, "name": {"zh": "魔性旋律", "en": "Catchy Loop", "fr": "Mélodie obsédante"}, "cost": 700, "desc": {"zh": "射程内跑者每秒持续受 3 点效果", "en": "Runners in range take 3 per second", "fr": "Les coureurs à portée subissent 3 par seconde"}, "effect": "staticDps=3"}, {"tier": 5, "name": {"zh": "广场舞女王", "en": "Dance Floor Queen", "fr": "Reine de la piste"}, "cost": 1600, "desc": {"zh": "出手间隔 −30%，多传 3 人", "en": "Interval −30%, chains 3 more", "fr": "Intervalle −30 %, 3 de plus en chaîne"}, "effect": "rate*=0.7; chain+=3"}]}], "enemies": [{"id": "norm", "name": {"zh": "慢跑者", "en": "Jogger", "fr": "Joggeur"}, "radius": 9, "speed": 55, "gold": 6, "value": 1, "leak": 1}, {"id": "arm", "name": {"zh": "耐力跑者", "en": "Endurance runner", "fr": "Coureur endurant"}, "radius": 11, "speed": 42, "gold": 12, "value": 2, "leak": 2}, {"id": "boss", "name": {"zh": "传奇跑者", "en": "Legendary runner", "fr": "Coureur légendaire"}, "radius": 22, "speed": 26, "gold": 80, "value": 15, "leak": 10}, {"id": "rain", "name": {"zh": "雨衣跑者", "en": "Raincoat Runner", "fr": "Coureur en ciré"}, "radius": 9, "speed": 52, "gold": 8, "value": 1, "leak": 1}, {"id": "hop", "name": {"zh": "弹簧鞋跑者", "en": "Spring-Shoe Runner", "fr": "Coureur à ressorts"}, "radius": 9, "speed": 62, "gold": 8, "value": 1, "leak": 1}, {"id": "phones", "name": {"zh": "降噪耳机跑者", "en": "Headphones Runner", "fr": "Coureur au casque"}, "radius": 9, "speed": 55, "gold": 8, "value": 1, "leak": 1}, {"id": "whale", "name": {"zh": "巨鲸", "en": "Whale", "fr": "Baleine"}, "radius": 15, "speed": 30, "gold": 30, "value": 4, "leak": 3}], "waves": [{"wave": 1, "normals": 30, "armored": 0, "normHp": 3.2, "armHp": 7.7, "boss": 0, "bossHp": 0, "affixes": 0, "rain": 0, "hop": 0, "phones": 0, "whale": 0}, {"wave": 2, "normals": 36, "armored": 0, "normHp": 4.4, "armHp": 10.3, "boss": 0, "bossHp": 0, "affixes": 0, "rain": 0, "hop": 0, "phones": 0, "whale": 0}, {"wave": 3, "normals": 39, "armored": 6, "normHp": 5.8, "armHp": 13.3, "boss": 0, "bossHp": 0, "affixes": 0, "rain": 0, "hop": 0, "phones": 0, "whale": 0}, {"wave": 4, "normals": 45, "armored": 9, "normHp": 7.4, "armHp": 16.7, "boss": 0, "bossHp": 0, "affixes": 1, "rain": 4, "hop": 0, "phones": 0, "whale": 0}, {"wave": 5, "normals": 51, "armored": 12, "normHp": 9.2, "armHp": 20.5, "boss": 1, "bossHp": 100, "affixes": 1, "rain": 5, "hop": 0, "phones": 0, "whale": 0}, {"wave": 6, "normals": 57, "armored": 15, "normHp": 11.2, "armHp": 24.7, "boss": 0, "bossHp": 0, "affixes": 1, "rain": 6, "hop": 5, "phones": 0, "whale": 0}, {"wave": 7, "normals": 60, "armored": 18, "normHp": 13.4, "armHp": 29.3, "boss": 0, "bossHp": 0, "affixes": 1, "rain": 6, "hop": 5, "phones": 0, "whale": 0}, {"wave": 8, "normals": 66, "armored": 21, "normHp": 15.8, "armHp": 34.3, "boss": 0, "bossHp": 0, "affixes": 1, "rain": 7, "hop": 5, "phones": 5, "whale": 0}, {"wave": 9, "normals": 72, "armored": 24, "normHp": 19.5, "armHp": 42.08, "boss": 0, "bossHp": 0, "affixes": 1, "rain": 7, "hop": 6, "phones": 6, "whale": 0}, {"wave": 10, "normals": 78, "armored": 27, "normHp": 23.74, "armHp": 50.96, "boss": 1, "bossHp": 420, "affixes": 2, "rain": 8, "hop": 6, "phones": 6, "whale": 1}, {"wave": 11, "normals": 81, "armored": 33, "normHp": 28.56, "armHp": 61.01, "boss": 0, "bossHp": 0, "affixes": 1, "rain": 8, "hop": 6, "phones": 6, "whale": 1}, {"wave": 12, "normals": 87, "armored": 36, "normHp": 33.98, "armHp": 72.29, "boss": 0, "bossHp": 0, "affixes": 1, "rain": 9, "hop": 7, "phones": 7, "whale": 2}, {"wave": 13, "normals": 93, "armored": 39, "normHp": 40.04, "armHp": 84.89, "boss": 0, "bossHp": 0, "affixes": 1, "rain": 9, "hop": 7, "phones": 7, "whale": 2}, {"wave": 14, "normals": 99, "armored": 42, "normHp": 46.78, "armHp": 98.87, "boss": 0, "bossHp": 0, "affixes": 1, "rain": 10, "hop": 8, "phones": 8, "whale": 3}, {"wave": 15, "normals": 102, "armored": 45, "normHp": 54.24, "armHp": 114.31, "boss": 1, "bossHp": 1400, "affixes": 2, "rain": 10, "hop": 8, "phones": 8, "whale": 3}], "bosses": [{"id": "yawn", "enabled": 1, "name": "Nox", "title": {"zh": "黑猫", "en": "Black Cat", "fr": "Chat noir"}, "ability": {"zh": "九命：第一次退赛会原地复活（40% 体力）", "en": "Nine Lives: revives once on the spot (40% stamina)", "fr": "Neuf vies : revient une fois sur place (40 % d’endurance)"}, "p": [0.4, 1, 0, 0]}, {"id": "gilg", "enabled": 1, "name": "Aurum", "title": {"zh": "金王", "en": "Golden King", "fr": "Roi doré"}, "ability": {"zh": "王之宝库：每 4 秒召唤 2 名金甲跑者", "en": "Royal Treasury: summons 2 golden runners every 4 s", "fr": "Trésor royal : invoque 2 coureurs dorés toutes les 4 s"}, "p": [4, 2, 8, 0.8]}, {"id": "king", "enabled": 1, "name": "Slimo", "title": {"zh": "黏液国王", "en": "Slime King", "fr": "Roi visqueux"}, "ability": {"zh": "黏液王冠：身后留下黏液，踩到的跑者加速 30% 并回体力", "en": "Slime Crown: leaves a slime trail; runners on it get +30% speed and recover stamina", "fr": "Couronne visqueuse : laisse une traînée ; les coureurs dessus gagnent +30 % de vitesse et récupèrent"}, "p": [0.3, 1.3, 0.04, 5]}, {"id": "lucas", "enabled": 1, "name": "Rocco", "title": {"zh": "光头", "en": "Bald Dasher", "fr": "Crâne rasé"}, "ability": {"zh": "铁头冲刺：每 5 秒冲刺 1 秒，3 倍速", "en": "Headstrong Dash: every 5 s, sprints at ×3 speed for 1 s", "fr": "Charge tête baissée : toutes les 5 s, sprint ×3 pendant 1 s"}, "p": [5, 1, 3, 0]}, {"id": "shiti", "enabled": 1, "name": "Chuckles", "title": {"zh": "笑声", "en": "Laughter", "fr": "Fou rire"}, "ability": {"zh": "开怀大笑：每 6 秒大笑一次，身边的装置停工 1.5 秒", "en": "Big Laugh: every 6 s, nearby devices stop for 1.5 s", "fr": "Fou rire : toutes les 6 s, les dispositifs proches s’arrêtent 1,5 s"}, "p": [6, 130, 1.5, 0]}, {"id": "pizza", "enabled": 1, "name": "Pizza Rider", "title": {"zh": "披萨外卖员", "en": "Pizza courier", "fr": "Livreur de pizza"}, "ability": {"zh": "一万枚换两个披萨：体力掉到 2/3 和 1/3 时各扔下一盒披萨，冒出一群披萨跑者", "en": "10,000 coins for two pizzas: at 2/3 and 1/3 stamina he drops a pizza box and a swarm of pizza runners pours out", "fr": "10 000 pièces pour deux pizzas : à 2/3 et 1/3 d’endurance, il lâche une boîte et une nuée de coureurs-pizza en sort"}, "p": [5, 0.22, 0, 0]}, {"id": "overflow", "enabled": 1, "name": "Overflow", "title": {"zh": "溢出怪", "en": "The Overflow", "fr": "Le Débordement"}, "ability": {"zh": "整数溢出：第一次倒下时分裂成两个，各带 60% 体力；几秒后“软分叉”修复，两个都掉一半体力", "en": "Integer overflow: the first time it falls it splits into two, each with 60% stamina; a few seconds later a “soft fork” patch halves both", "fr": "Dépassement d’entier : la première fois qu’il tombe, il se divise en deux, chacun à 60 % d’endurance ; quelques secondes plus tard, un « soft fork » coupe leur endurance de moitié"}, "p": [4, 0.5, 0, 0]}, {"id": "jerry", "enabled": 1, "name": "Datto", "title": {"zh": "数据控", "en": "Data Nerd", "fr": "Fan de données"}, "ability": {"zh": "数据分析：每 3 秒对受到最多的装置类型产生 65% 抗性", "en": "Data Analysis: every 3 s gains 65% resistance to the device hitting him most", "fr": "Analyse de données : toutes les 3 s, résiste à 65 % au dispositif qui le touche le plus"}, "p": [3, 0.65, 0, 0]}], "affixes": [{"id": "swift", "name": {"zh": "冲刺", "en": "Sprint", "fr": "Sprint"}, "desc": {"zh": "移速 +40%", "en": "Speed +40%", "fr": "Vitesse +40 %"}}, {"id": "regen", "name": {"zh": "补给", "en": "Refuel", "fr": "Ravitaillement"}, "desc": {"zh": "1 秒没被干扰就回体力", "en": "Recovers stamina after 1 s undisturbed", "fr": "Récupère de l’endurance après 1 s sans gêne"}}, {"id": "shield", "name": {"zh": "能量盾", "en": "Energy Shield", "fr": "Bouclier d’énergie"}, "desc": {"zh": "额外 35% 能量护盾", "en": "Extra 35% energy shield", "fr": "Bouclier d’énergie +35 %"}}, {"id": "split", "name": {"zh": "跑团", "en": "Running Club", "fr": "Club de course"}, "desc": {"zh": "退赛时 2 名跟跑者接力", "en": "2 pacers take over when one quits", "fr": "2 meneurs prennent le relais à l’abandon"}}], "cards": [{"id": "u_bomb", "enabled": 1, "tag": "装置", "rar": "C", "stack": 0, "name": {"zh": "香蕉皮投手", "en": "Banana Peeler", "fr": "Lanceur de peaux de banane"}, "desc": {"zh": "解锁香蕉皮投手：一片跑者一起滑倒，专克耐力跑者", "en": "Unlock Banana Peeler: trips whole groups, counters endurance runners", "fr": "Débloque le Lanceur de peaux : fait glisser des groupes, contre les endurants"}, "v1": 0, "v2": 0}, {"id": "u_frost", "enabled": 1, "tag": "装置", "rar": "C", "stack": 0, "name": {"zh": "洒水器", "en": "Sprinkler", "fr": "Arroseur"}, "desc": {"zh": "解锁洒水器：跑道湿滑，范围减速", "en": "Unlock Sprinkler: wet track, area slow", "fr": "Débloque l’Arroseur : piste glissante, ralentit une zone"}, "v1": 0, "v2": 0}, {"id": "u_sniper", "enabled": 1, "tag": "装置", "rar": "R", "stack": 0, "name": {"zh": "鞋盒无人机", "en": "Shoebox Drone", "fr": "Drone à boîtes"}, "desc": {"zh": "解锁鞋盒无人机：全图空投鞋盒，无视耐力", "en": "Unlock Shoebox Drone: map-wide drops, ignores endurance", "fr": "Débloque le Drone à boîtes : largages partout, ignore l’endurance"}, "v1": 0, "v2": 0}, {"id": "u_tesla", "enabled": 1, "tag": "装置", "rar": "R", "stack": 0, "name": {"zh": "广场舞音响", "en": "Dance Speaker", "fr": "Enceinte de danse"}, "desc": {"zh": "解锁广场舞音响：洗脑神曲在跑者之间传播", "en": "Unlock Dance Speaker: an earworm hops between runners", "fr": "Débloque l’Enceinte de danse : un tube passe de coureur en coureur"}, "v1": 0, "v2": 0}, {"id": "u_miner", "enabled": 1, "tag": "装置", "rar": "R", "stack": 0, "name": {"zh": "矿机", "en": "Miner", "fr": "Mineur"}, "desc": {"zh": "解锁矿机：挖区块得聪，并触发区块奖励三选一", "en": "Unlock the Miner: mine blocks for sats and a block-reward pick", "fr": "Débloque le Mineur : mine des blocs pour des sats et un choix de récompense"}, "v1": 0, "v2": 0}, {"id": "u_gem", "enabled": 1, "tag": "装置", "rar": "R", "stack": 0, "name": {"zh": "宝石发射器", "en": "Gem Launcher", "fr": "Lance-gemmes"}, "desc": {"zh": "解锁宝石发射器：红、黄、蓝三种宝石对应三条路线", "en": "Unlock the Gem Launcher: ruby, topaz and sapphire are its three paths", "fr": "Débloque le Lance-gemmes : rubis, topaze et saphir sont ses trois voies"}, "v1": 0, "v2": 0}, {"id": "pad", "enabled": 1, "tag": "道具", "rar": "R", "stack": 1, "name": {"zh": "额外放置点", "en": "Extra Spot", "fr": "Emplacement bonus"}, "desc": {"zh": "获得 1 个放置点：点地图上跑道以外的空地，新增一个装置空位", "en": "Gain 1 spot: tap open ground off the track to add a new device spot", "fr": "Gagne 1 emplacement : touche un terrain libre hors de la piste pour créer un emplacement"}, "v1": 1, "v2": 0}, {"id": "freeup", "enabled": 1, "tag": "道具", "rar": "C", "stack": 1, "name": {"zh": "鞋匠", "en": "Cobbler", "fr": "Cordonnier"}, "desc": {"zh": "场上一个装置沿主路线免费升 1 级（没有装置时改为 +100 GST）", "en": "One device gets a free tier on its main path (+100 GST if you have none)", "fr": "Un dispositif gagne un niveau gratuit sur sa voie principale (+100 GST si aucun)"}, "v1": 0, "v2": 0}, {"id": "coupon", "enabled": 1, "tag": "道具", "rar": "C", "stack": 1, "name": {"zh": "升级卷轴", "en": "Level-up Scroll", "fr": "Parchemin d’amélioration"}, "desc": {"zh": "接下来 3 次路线升级半价", "en": "Next 3 path upgrades are half price", "fr": "Les 3 prochaines améliorations à moitié prix"}, "v1": 3, "v2": 0}, {"id": "m_dart", "enabled": 1, "tag": "徽章", "rar": "R", "stack": 0, "name": null, "desc": null, "v1": 0, "v2": 0}, {"id": "m_bomb", "enabled": 1, "tag": "徽章", "rar": "R", "stack": 0, "name": null, "desc": null, "v1": 0, "v2": 0}, {"id": "m_frost", "enabled": 1, "tag": "徽章", "rar": "R", "stack": 0, "name": null, "desc": null, "v1": 0, "v2": 0}, {"id": "m_sniper", "enabled": 1, "tag": "徽章", "rar": "R", "stack": 0, "name": null, "desc": null, "v1": 0, "v2": 0}, {"id": "m_tesla", "enabled": 1, "tag": "徽章", "rar": "R", "stack": 0, "name": null, "desc": null, "v1": 0, "v2": 0}, {"id": "m_miner", "enabled": 1, "tag": "徽章", "rar": "R", "stack": 0, "name": null, "desc": null, "v1": 0, "v2": 0}, {"id": "m_gem", "enabled": 1, "tag": "徽章", "rar": "R", "stack": 0, "name": null, "desc": null, "v1": 0, "v2": 0}, {"id": "breaker", "enabled": 1, "tag": "道具", "rar": "L", "stack": 0, "name": {"zh": "创世鞋", "en": "Genesis Sneaker", "fr": "Sneaker Genesis"}, "desc": {"zh": "所有装置的次路线上限 2 级 → 3 级", "en": "Secondary path cap 2 → 3 for all devices", "fr": "Plafond de la voie secondaire 2 → 3 pour tous"}, "v1": 0, "v2": 0}, {"id": "drill", "enabled": 1, "tag": "宝石", "rar": "C", "stack": 1, "name": {"zh": "效率宝石", "en": "Efficiency Gem", "fr": "Gemme d’efficacité"}, "desc": {"zh": "所有装置效果 +15%（可叠加）", "en": "All devices +15% effect (stacks)", "fr": "Tous les dispositifs +15 % d’effet (cumulable)"}, "v1": 0.15, "v2": 0}, {"id": "crit", "enabled": 1, "tag": "宝石", "rar": "C", "stack": 1, "name": {"zh": "幸运宝石", "en": "Luck Gem", "fr": "Gemme de chance"}, "desc": {"zh": "暴击率 +10%（可叠加）", "en": "Crit chance +10% (stacks)", "fr": "Chance de critique +10 % (cumulable)"}, "v1": 0.1, "v2": 0}, {"id": "heart", "enabled": 1, "tag": "宝石", "rar": "C", "stack": 1, "name": {"zh": "舒适宝石", "en": "Comfort Gem", "fr": "Gemme de confort"}, "desc": {"zh": "生命 +6", "en": "Lives +6", "fr": "Vies +6"}, "v1": 6, "v2": 0}, {"id": "loot", "enabled": 1, "tag": "道具", "rar": "C", "stack": 1, "name": {"zh": "GST 红包", "en": "GST Red Packet", "fr": "Enveloppe GST"}, "desc": {"zh": "立即获得 120 GST", "en": "Get 120 GST now", "fr": "Gagne 120 GST tout de suite"}, "v1": 120, "v2": 0}, {"id": "golden", "enabled": 1, "tag": "道具", "rar": "C", "stack": 0, "name": {"zh": "神秘箱", "en": "Mystery Box", "fr": "Mystery Box"}, "desc": {"zh": "10% 的对手跑者背着神秘箱，劝退后 GST ×5", "en": "10% of rival runners carry a Mystery Box: GST ×5 when they quit", "fr": "10 % des coureurs rivaux portent une Mystery Box : GST ×5 à l’abandon"}, "v1": 0, "v2": 0}, {"id": "bank", "enabled": 1, "tag": "道具", "rar": "R", "stack": 0, "name": {"zh": "GMT 质押", "en": "GMT Staking", "fr": "Staking GMT"}, "desc": {"zh": "每波结束获得当前 GST 10% 的利息（最多 60）", "en": "After each wave, earn 10% interest on your GST (max 60)", "fr": "Après chaque vague, 10 % d’intérêts sur ton GST (max 60)"}, "v1": 0, "v2": 0}, {"id": "pop", "enabled": 1, "tag": "道具", "rar": "R", "stack": 0, "name": {"zh": "Gas Hero 毒气", "en": "Gas Hero Gas", "fr": "Gaz Gas Hero"}, "desc": {"zh": "跑者退赛时喷出毒气，波及身边跑者，可以连锁", "en": "Runners who quit release gas that hits those nearby, and can chain", "fr": "Les coureurs qui abandonnent libèrent un gaz qui touche les voisins, en chaîne"}, "v1": 0, "v2": 0}, {"id": "cheap", "enabled": 1, "tag": "道具", "rar": "R", "stack": 0, "name": {"zh": "MOOAR 折扣", "en": "MOOAR Discount", "fr": "Remise MOOAR"}, "desc": {"zh": "放置和升级费用 −20%", "en": "Placing and upgrading −20%", "fr": "Placement et améliorations −20 %"}, "v1": 0.8, "v2": 0}, {"id": "maniac", "enabled": 1, "tag": "道具", "rar": "R", "stack": 0, "name": {"zh": "连续打卡", "en": "Check-in Streak", "fr": "Série de check-ins"}, "desc": {"zh": "燃脂模式所需连续劝退 50 → 30", "en": "Fat-burn mode needs 30 stops instead of 50", "fr": "Le mode brûle-graisse demande 30 arrêts au lieu de 50"}, "v1": 30, "v2": 0}, {"id": "devil", "enabled": 1, "tag": "交易", "rar": "R", "stack": 0, "name": {"zh": "GST 借贷", "en": "GST Loan", "fr": "Prêt GST"}, "desc": {"zh": "立即生效：+250 GST；之后对手体力 +15%", "en": "Instant: +250 GST; rivals get +15% stamina from now on", "fr": "Immédiat : +250 GST ; les rivaux ont ensuite +15 % d’endurance"}, "v1": 250, "v2": 1.15}, {"id": "glass", "enabled": 1, "tag": "交易", "rar": "R", "stack": 0, "name": {"zh": "透支生命", "en": "Overdraw Lives", "fr": "Vies à découvert"}, "desc": {"zh": "立即生效：所有装置效果 +40%；生命 −10", "en": "Instant: all devices +40% effect; lives −10", "fr": "Immédiat : tous les dispositifs +40 % d’effet ; vies −10"}, "v1": 0.4, "v2": 10}, {"id": "track", "enabled": 1, "tag": "交易", "rar": "R", "stack": 0, "name": {"zh": "牛市狂奔", "en": "Bull Run", "fr": "Bull run"}, "desc": {"zh": "立即生效：对手移速 +15%；劝退获得 GST +50%", "en": "Instant: rivals +15% speed; +50% GST per runner stopped", "fr": "Immédiat : rivaux +15 % de vitesse ; +50 % de GST par coureur arrêté"}, "v1": 1.15, "v2": 1.5}, {"id": "twin", "enabled": 1, "tag": "道具", "rar": "L", "stack": 0, "name": {"zh": "双倍铸造", "en": "Double Mint", "fr": "Double mint"}, "desc": {"zh": "所有装置每次出手有 20% 概率立刻再来一次", "en": "Every device has a 20% chance to act again instantly", "fr": "Chaque dispositif a 20 % de chances d’agir à nouveau"}, "v1": 0, "v2": 0}, {"id": "chain", "enabled": 1, "tag": "道具", "rar": "L", "stack": 0, "name": {"zh": "Gas Hero 连环毒气", "en": "Gas Hero Chain Gas", "fr": "Gaz en chaîne Gas Hero"}, "desc": {"zh": "毒气范围 +50%、效果翻倍", "en": "Gas area +50%, effect doubled", "fr": "Zone de gaz +50 %, effet doublé"}, "v1": 0, "v2": 0}, {"id": "overclock", "enabled": 1, "tag": "道具", "rar": "L", "stack": 0, "name": {"zh": "马拉松模式", "en": "Marathon Mode", "fr": "Mode marathon"}, "desc": {"zh": "燃脂模式持续 10 秒，出手速度 ×2", "en": "Fat-burn mode lasts 10 s at ×2 speed", "fr": "Le mode brûle-graisse dure 10 s à vitesse ×2"}, "v1": 0, "v2": 0}], "maps": [{"id": "classic", "enabled": 1, "name": {"zh": "蛇形跑道", "en": "Serpentine", "fr": "Serpentin"}, "desc": {"zh": "1 进 1 出：一条长蛇形跑道，经典布局", "en": "1 in, 1 out: one long winding track, the classic layout.", "fr": "1 entrée, 1 sortie : une longue piste sinueuse, le tracé classique."}, "spdMult": 1, "hpMult": 1, "routes": [[[-24, 80], [300, 80], [300, 220], [60, 220], [60, 360], [300, 360], [300, 500], [180, 500], [180, 640]]], "pads": [[40, 150], [120, 150], [200, 150], [250, 150], [120, 290], [200, 290], [260, 290], [335, 290], [30, 430], [110, 430], [190, 430], [250, 430], [100, 560], [260, 560]]}, {"id": "twin", "enabled": 1, "name": {"zh": "双子跑道", "en": "Twin Tracks", "fr": "Pistes jumelles"}, "desc": {"zh": "2 进 2 出：两条互不相交的跑道，中间一列空位可以同时照顾两边", "en": "2 in, 2 out: two separate tracks; the middle column of spots can cover both.", "fr": "2 entrées, 2 sorties : deux pistes séparées ; la colonne centrale couvre les deux."}, "spdMult": 0.85, "hpMult": 1, "routes": [[[60, -24], [60, 180], [140, 180], [140, 420], [60, 420], [60, 624]], [[300, -24], [300, 180], [220, 180], [220, 420], [300, 420], [300, 624]]], "pads": [[180, 100], [100, 100], [260, 100], [180, 230], [180, 300], [180, 370], [100, 300], [260, 300], [20, 300], [340, 300], [100, 500], [180, 500], [260, 500]]}, {"id": "fork", "enabled": 1, "name": {"zh": "分岔路口", "en": "The Fork", "fr": "La Fourche"}, "desc": {"zh": "1 进 2 出：跑者在路口分成左右两路，入口处是必争之地", "en": "1 in, 2 out: runners split left and right at the junction, so the entrance is key.", "fr": "1 entrée, 2 sorties : les coureurs se séparent au carrefour ; l’entrée est décisive."}, "spdMult": 0.85, "hpMult": 1, "routes": [[[180, -24], [180, 180], [60, 180], [60, 400], [140, 400], [140, 624]], [[180, -24], [180, 180], [300, 180], [300, 400], [220, 400], [220, 624]]], "pads": [[100, 100], [260, 100], [20, 100], [340, 100], [180, 260], [180, 330], [100, 290], [260, 290], [180, 480], [60, 500], [300, 500], [180, 560]]}, {"id": "merge", "enabled": 1, "name": {"zh": "汇流跑道", "en": "Confluence", "fr": "Confluence"}, "desc": {"zh": "2 进 1 出：两路跑者从两侧进场，在中间汇合后一起冲向终点", "en": "2 in, 1 out: runners enter from both sides, merge in the middle and rush the finish together.", "fr": "2 entrées, 1 sortie : les coureurs arrivent des deux côtés, se rejoignent au centre et filent ensemble."}, "spdMult": 0.95, "hpMult": 1, "routes": [[[-24, 100], [120, 100], [120, 300], [180, 300], [180, 380], [60, 380], [60, 500], [300, 500], [300, 624]], [[384, 100], [240, 100], [240, 300], [180, 300], [180, 380], [60, 380], [60, 500], [300, 500], [300, 624]]], "pads": [[60, 200], [300, 200], [180, 200], [180, 40], [40, 40], [320, 40], [120, 440], [240, 440], [60, 300], [300, 300], [180, 560], [60, 570]]}, {"id": "cross", "enabled": 1, "name": {"zh": "十字路口", "en": "Crossroads", "fr": "Carrefour"}, "desc": {"zh": "2 进 2 出：一路从上到下、一路从左到右，两条跑道在右下交叉", "en": "2 in, 2 out: one track runs top to bottom, the other left to right; they cross at the bottom right.", "fr": "2 entrées, 2 sorties : une piste du haut vers le bas, l’autre de gauche à droite ; elles se croisent en bas à droite."}, "spdMult": 0.8, "hpMult": 1, "routes": [[[100, -24], [100, 200], [260, 200], [260, 624]], [[-24, 320], [180, 320], [180, 480], [384, 480]]], "pads": [[180, 100], [40, 120], [330, 120], [180, 260], [320, 300], [60, 400], [120, 400], [220, 400], [320, 400], [100, 560], [200, 560], [320, 560]]}, {"id": "trident", "enabled": 1, "name": {"zh": "三路汇聚", "en": "Trident", "fr": "Trident"}, "desc": {"zh": "3 进 1 出：左右两路绕远，中路直冲终点，要优先守住中路", "en": "3 in, 1 out: the side tracks loop around while the middle one runs straight to the finish, so guard the middle first.", "fr": "3 entrées, 1 sortie : les côtés font un détour, le centre file droit à l’arrivée ; protège le centre en priorité."}, "spdMult": 0.8, "hpMult": 1, "routes": [[[-24, 120], [100, 120], [100, 360], [180, 360], [180, 624]], [[180, -24], [180, 624]], [[384, 120], [260, 120], [260, 360], [180, 360], [180, 624]]], "pads": [[40, 60], [320, 60], [120, 60], [240, 60], [140, 220], [220, 220], [40, 240], [320, 240], [100, 440], [260, 440], [120, 540], [240, 540]]}], "texts": [{"key": "+30%（满天赋）", "zh": "+30%（满天赋）", "en": "+30% (max talents)", "fr": "+30 % (talents au max)"}, {"key": "0%（新玩家）", "zh": "0%（新玩家）", "en": "0% (new player)", "fr": "0 % (nouveau joueur)"}, {"key": "1× 速度", "zh": "1× 速度", "en": "1× speed", "fr": "Vitesse 1×"}, {"key": "2× 速度", "zh": "2× 速度", "en": "2× speed", "fr": "Vitesse 2×"}, {"key": "3 个 Boss 波每局从 6 位传奇跑者里随机抽：Nox（九命复活）、Aurum（召唤金甲跑者）、Slimo（黏液加速）、Rocco（铁头冲刺）、Chuckles（大笑让装置停工）、Datto（对常用装置产生抗性）。", "zh": "3 个 Boss 波每局从 6 位传奇跑者里随机抽：Nox（九命复活）、Aurum（召唤金甲跑者）、Slimo（黏液加速）、Rocco（铁头冲刺）、Chuckles（大笑让装置停工）、Datto（对常用装置产生抗性）。", "en": "Each run draws 3 bosses from 6 legendary runners: Nox (nine lives), Aurum (summons golden runners), Slimo (slime boost), Rocco (headstrong dash), Chuckles (laughter jams devices), Datto (adapts to your most-used device).", "fr": "Chaque partie tire 3 boss parmi 6 coureurs légendaires : Nox (neuf vies), Aurum (invoque des coureurs dorés), Slimo (bave accélérante), Rocco (charge tête baissée), Chuckles (son rire bloque les dispositifs), Datto (s’adapte à ton dispositif favori)."}, {"key": "6 种装置：易拉罐投手（单体）、香蕉皮投手（范围滑倒）、洒水器（减速、冻结）、鞋盒无人机（全图空投）、广场舞音响（神曲连锁传播）、宝石发射器（红黄蓝三种宝石）。每种 3 条路线、每条 5 级；主路线可升满，次路线最多 2 级。", "zh": "6 种装置：易拉罐投手（单体）、香蕉皮投手（范围滑倒）、洒水器（减速、冻结）、鞋盒无人机（全图空投）、广场舞音响（神曲连锁传播）、宝石发射器（红黄蓝三种宝石）。每种 3 条路线、每条 5 级；主路线可升满，次路线最多 2 级。", "en": "6 devices: Can Thrower (single target), Banana Peeler (area slip), Sprinkler (slow, freeze), Shoebox Drone (map-wide drop), Dance Speaker (chain earworm), Gem Launcher (ruby, topaz, sapphire). Each has 3 paths of 5 tiers; the main path can max out, the secondary stops at tier 2.", "fr": "6 dispositifs : Lanceur de canettes (cible unique), Lanceur de peaux de banane (glissade de zone), Arroseur (ralentit, gèle), Drone à boîtes (largage sur toute la carte), Enceinte de danse (tube viral en chaîne), Lance-gemmes (rubis, topaze, saphir). Chacun a 3 voies de 5 niveaux ; la voie principale peut être maximisée, la secondaire s’arrête au niveau 2."}, {"key": "Boss 波", "zh": "Boss 波", "en": "Boss wave", "fr": "Vague de boss"}, {"key": "Boss：{n}（{t}）", "zh": "Boss：{n}（{t}）", "en": "Boss: {n} ({t})", "fr": "Boss : {n} ({t})"}, {"key": "Nox 九命", "zh": "Nox 九命", "en": "Nox: Nine Lives", "fr": "Nox : neuf vies"}, {"key": "{n} 名跑者", "zh": "{n} 名跑者", "en": "{n} runners", "fr": "{n} coureurs"}, {"key": "{n} 张", "zh": "{n} 张", "en": "{n} cards", "fr": "{n} cartes"}, {"key": "{n} 级 · {x}", "zh": "{n} 级 · {x}", "en": "Tier {n} · {x}", "fr": "Niv. {n} · {x}"}, {"key": "{x} {n} 秒后开始", "zh": "{x} {n} 秒后开始", "en": "{x} starts in {n} s", "fr": "{x} dans {n} s"}, {"key": "{x} 退赛！", "zh": "{x} 退赛！", "en": "{x} quits!", "fr": "{x} abandonne !"}, {"key": "{x}徽章", "zh": "{x}徽章", "en": "{x} Badge", "fr": "Badge {x}"}, {"key": "{x}效果 +25%，升级费用 −20%", "zh": "{x}效果 +25%，升级费用 −20%", "en": "{x}: effect +25%, upgrades −20%", "fr": "{x} : effet +25 %, améliorations −20 %"}, {"key": "下一波", "zh": "下一波", "en": "Next wave", "fr": "Vague suivante"}, {"key": "下一波 Boss：{x}。", "zh": "下一波 Boss：{x}。", "en": "Next wave boss: {x}.", "fr": "Boss de la prochaine vague : {x}."}, {"key": "主路线", "zh": "主路线", "en": "Main", "fr": "Principale"}, {"key": "交易", "zh": "交易", "en": "Deal", "fr": "Pacte"}, {"key": "今天已跑 ≥ 2 km（热身 +10% 效果）", "zh": "今天已跑 ≥ 2 km（热身 +10% 效果）", "en": "Ran ≥ 2 km today (warm-up +10% effect)", "fr": "Couru ≥ 2 km aujourd’hui (échauffement +10 % d’effet)"}, {"key": "传播", "zh": "传播", "en": "Chain", "fr": "Chaîne"}, {"key": "传说", "zh": "传说", "en": "Legendary", "fr": "Légendaire"}, {"key": "体力 +40%", "zh": "体力 +40%", "en": "Stamina +40%", "fr": "Endurance +40 %"}, {"key": "先在虚线圆圈里放置装置，再点「开始第 1 波」", "zh": "先在虚线圆圈里放置装置，再点「开始第 1 波」", "en": "Place devices in the dashed circles, then press “Start wave 1”", "fr": "Place des dispositifs dans les cercles, puis « Lancer la vague 1 »"}, {"key": "全图", "zh": "全图", "en": "Global", "fr": "Carte"}, {"key": "全场冻结 2 秒", "zh": "全场冻结 2 秒", "en": "Whole track frozen for 2 s", "fr": "Toute la piste gelée 2 s"}, {"key": "再来一局", "zh": "再来一局", "en": "Play again", "fr": "Rejouer"}, {"key": "冰河时代", "zh": "冰河时代", "en": "Ice Age", "fr": "Ère glaciaire"}, {"key": "冲线！", "zh": "冲线！", "en": "Crossed!", "fr": "Arrivé !"}, {"key": "减速", "zh": "减速", "en": "Slow", "fr": "Ralenti"}, {"key": "出手速度 ×1.6，持续 5 秒", "zh": "出手速度 ×1.6，持续 5 秒", "en": "Device speed ×1.6 for 5 s", "fr": "Vitesse des dispositifs ×1,6 pendant 5 s"}, {"key": "出手速度 ×2，持续 10 秒", "zh": "出手速度 ×2，持续 10 秒", "en": "Device speed ×2 for 10 s", "fr": "Vitesse des dispositifs ×2 pendant 10 s"}, {"key": "分数", "zh": "分数", "en": "Score", "fr": "Score"}, {"key": "剩余生命 / 20 × 300", "zh": "剩余生命 / 20 × 300", "en": "Lives left / 20 × 300", "fr": "Vies restantes / 20 × 300"}, {"key": "劝退 GST +{n}%", "zh": "劝退 GST +{n}%", "en": "GST per runner +{n}%", "fr": "GST par coureur +{n} %"}, {"key": "劝退率 × 600", "zh": "劝退率 × 600", "en": "Stop rate × 600", "fr": "Taux d’arrêt × 600"}, {"key": "升级半价 ×{n}", "zh": "升级半价 ×{n}", "en": "Half-price upgrades ×{n}", "fr": "Améliorations à moitié prix ×{n}"}, {"key": "原地复活！", "zh": "原地复活！", "en": "Back on her feet!", "fr": "Elle se relève !"}, {"key": "哈", "zh": "哈", "en": "Ha", "fr": "Ha"}, {"key": "哈哈哈！", "zh": "哈哈哈！", "en": "HAHAHA!", "fr": "HAHAHA !"}, {"key": "回收 · +{n} GST", "zh": "回收 · +{n} GST", "en": "Recycle · +{n} GST", "fr": "Recycler · +{n} GST"}, {"key": "天赋加成", "zh": "天赋加成", "en": "Talent bonus", "fr": "Bonus de talents"}, {"key": "奖励：30 GST", "zh": "奖励：30 GST", "en": "Reward: 30 GST", "fr": "Récompense : 30 GST"}, {"key": "奖励：60 GST + 稀有以上", "zh": "奖励：60 GST + 稀有以上", "en": "Reward: 60 GST + rare or better", "fr": "Récompense : 60 GST + rare ou mieux"}, {"key": "对手体力 +{n}%", "zh": "对手体力 +{n}%", "en": "Rival stamina +{n}%", "fr": "Endurance rivale +{n} %"}, {"key": "对手公会的跑者要冲过你的领地。你用「装置」干扰他们，体力耗尽就摔倒退赛。漏过去的跑者会扣你的生命，生命归零即失守。", "zh": "对手公会的跑者要冲过你的领地。你用「装置」干扰他们，体力耗尽就摔倒退赛。漏过去的跑者会扣你的生命，生命归零即失守。", "en": "Rival guild runners are racing through your territory. Use devices to throw them off; when their stamina runs out they trip and quit. Every runner who gets through costs you a life; at zero lives the territory falls.", "fr": "Les coureurs d’une guilde rivale traversent ton territoire. Utilise des dispositifs pour les gêner ; à court d’endurance, ils trébuchent et abandonnent. Chaque coureur qui passe te coûte une vie ; à zéro, le territoire tombe."}, {"key": "对手公会的跑者要冲过你的领地。现在只有易拉罐投手，第 3 波开始出现耐力跑者。", "zh": "对手公会的跑者要冲过你的领地。现在只有易拉罐投手，第 3 波开始出现耐力跑者。", "en": "Rival guild runners are racing through your territory. You start with the Can Thrower; endurance runners appear from wave 3.", "fr": "Des coureurs rivaux traversent ton territoire. Tu commences avec le Lanceur de canettes ; les coureurs endurants arrivent à la vague 3."}, {"key": "对手移速 +{n}%", "zh": "对手移速 +{n}%", "en": "Rival speed +{n}%", "fr": "Vitesse rivale +{n} %"}, {"key": "对耐力跑者", "zh": "对耐力跑者", "en": "vs endurance", "fr": "vs endurants"}, {"key": "射程", "zh": "射程", "en": "Range", "fr": "Portée"}, {"key": "已在发展另外两条路线", "zh": "已在发展另外两条路线", "en": "Already developing two other paths", "fr": "Deux autres voies déjà développées"}, {"key": "已满级", "zh": "已满级", "en": "Maxed", "fr": "Au max"}, {"key": "已达上限", "zh": "已达上限", "en": "At cap", "fr": "Plafond atteint"}, {"key": "已适应：{x}", "zh": "已适应：{x}", "en": "Adapted: {x}", "fr": "Adapté : {x}"}, {"key": "开始第 1 波", "zh": "开始第 1 波", "en": "Start wave 1", "fr": "Lancer la vague 1"}, {"key": "开局：开启起手神秘箱", "zh": "开局：开启起手神秘箱", "en": "Start: open your first Mystery Box", "fr": "Départ : ouvre ta première Mystery Box"}, {"key": "开箱中", "zh": "开箱中", "en": "Opening box", "fr": "Ouverture"}, {"key": "当前全局效果：", "zh": "当前全局效果：", "en": "Active effects: ", "fr": "Effets actifs : "}, {"key": "徽章", "zh": "徽章", "en": "Badge", "fr": "Badge"}, {"key": "提前开波 +{n} GST", "zh": "提前开波 +{n} GST", "en": "Early start +{n} GST", "fr": "Départ anticipé +{n} GST"}, {"key": "放置装置", "zh": "放置装置", "en": "Place a device", "fr": "Placer un dispositif"}, {"key": "放置费用 −{n}%", "zh": "放置费用 −{n}%", "en": "Placement cost −{n}%", "fr": "Coût de placement −{n} %"}, {"key": "效果", "zh": "效果", "en": "Effect", "fr": "Effet"}, {"key": "数值没有经过试玩平衡。", "zh": "数值没有经过试玩平衡。", "en": "Numbers are not balanced by playtesting yet.", "fr": "Les valeurs ne sont pas encore équilibrées."}, {"key": "新纪录", "zh": "新纪录", "en": "New record", "fr": "Nouveau record"}, {"key": "无漏怪波数 / 15 × 100", "zh": "无漏怪波数 / 15 × 100", "en": "Clean waves / 15 × 100", "fr": "Vagues sans fuite / 15 × 100"}, {"key": "无词缀", "zh": "无词缀", "en": "No traits", "fr": "Aucun trait"}, {"key": "普通", "zh": "普通", "en": "Common", "fr": "Commun"}, {"key": "普通跑者", "zh": "普通跑者", "en": "Regular runners", "fr": "Coureurs normaux"}, {"key": "暴击率 +{n}%", "zh": "暴击率 +{n}%", "en": "Crit chance +{n}%", "fr": "Chance de critique +{n} %"}, {"key": "最高分 {n}", "zh": "最高分 {n}", "en": "Best {n}", "fr": "Record {n}"}, {"key": "本局构筑", "zh": "本局构筑", "en": "This run", "fr": "Cette partie"}, {"key": "次路线", "zh": "次路线", "en": "Secondary", "fr": "Secondaire"}, {"key": "次路线上限 3 级", "zh": "次路线上限 3 级", "en": "Secondary cap 3", "fr": "Plafond secondaire 3"}, {"key": "次路线最多 {n} 级", "zh": "次路线最多 {n} 级", "en": "Secondary path max tier {n}", "fr": "Voie secondaire : niveau {n} max"}, {"key": "每波结束开启神秘箱三选一：宝石、GST 红包、GMT 质押、MOOAR 折扣、Gas Hero 毒气、升级卷轴、创世鞋等。局内 GST 只是关卡内货币，不和任何真实资产挂钩。", "zh": "每波结束开启神秘箱三选一：宝石、GST 红包、GMT 质押、MOOAR 折扣、Gas Hero 毒气、升级卷轴、创世鞋等。局内 GST 只是关卡内货币，不和任何真实资产挂钩。", "en": "After each wave, open a Mystery Box and pick 1 of 3: gems, GST Red Packets, GMT Staking, MOOAR Discount, Gas Hero Gas, Level-up Scrolls, Genesis Sneakers and more. In-run GST is a level-only currency and is not tied to any real asset.", "fr": "Après chaque vague, ouvre une Mystery Box et choisis 1 carte sur 3 : gemmes, Enveloppes GST, Staking GMT, Remise MOOAR, Gaz Gas Hero, Parchemins, Sneakers Genesis, etc. Le GST de la partie est une monnaie de niveau, sans lien avec un actif réel."}, {"key": "波次", "zh": "波次", "en": "Wave", "fr": "Vague"}, {"key": "点跑道旁的虚线圆圈放置装置，再点已放的装置选择升级路线。每个装置最多发展两条路线：主路线可升满 5 级，次路线最多 2 级。", "zh": "点跑道旁的虚线圆圈放置装置，再点已放的装置选择升级路线。每个装置最多发展两条路线：主路线可升满 5 级，次路线最多 2 级。", "en": "Tap a dashed circle beside the track to place a device, then tap it to choose upgrade paths. Each device can develop two paths: the main one up to tier 5, the secondary up to tier 2.", "fr": "Touche un cercle en pointillé près de la piste pour placer un dispositif, puis touche-le pour choisir ses voies. Chaque dispositif peut développer deux voies : la principale jusqu’au niveau 5, la secondaire jusqu’au niveau 2."}, {"key": "燃脂模式需连续劝退 {n}", "zh": "燃脂模式需连续劝退 {n}", "en": "Fat-burn at {n} streak", "fr": "Brûle-graisse à {n} d’affilée"}, {"key": "燃脂模式！", "zh": "燃脂模式！", "en": "Fat-burn mode!", "fr": "Mode brûle-graisse !"}, {"key": "爆破", "zh": "爆破", "en": "Blast ", "fr": "Piste "}, {"key": "爆破跑道", "zh": "爆破跑道", "en": "Blast Track", "fr": "Piste Explosive"}, {"key": "王之宝库", "zh": "王之宝库", "en": "Royal Treasury", "fr": "Trésor royal"}, {"key": "玩法说明", "zh": "玩法说明", "en": "How to play", "fr": "Comment jouer"}, {"key": "目标", "zh": "目标", "en": "Targets", "fr": "Cibles"}, {"key": "盾破", "zh": "盾破", "en": "Shield down", "fr": "Bouclier brisé"}, {"key": "稀有", "zh": "稀有", "en": "Rare", "fr": "Rare"}, {"key": "稳", "zh": "稳", "en": "Resist", "fr": "Résiste"}, {"key": "稳妥", "zh": "稳妥", "en": "Safe", "fr": "Sûr"}, {"key": "空位 · 选一个装置", "zh": "空位 · 选一个装置", "en": "Empty spot · choose a device", "fr": "Emplacement libre · choisis un dispositif"}, {"key": "立即开始第 {n} 波 · +{b} GST", "zh": "立即开始第 {n} 波 · +{b} GST", "en": "Start wave {n} now · +{b} GST", "fr": "Lancer la vague {n} · +{b} GST"}, {"key": "第 {n} 波", "zh": "第 {n} 波", "en": "Wave {n}", "fr": "Vague {n}"}, {"key": "第 {n} 波守住 · +{g} GST", "zh": "第 {n} 波守住 · +{g} GST", "en": "Wave {n} held · +{g} GST", "fr": "Vague {n} tenue · +{g} GST"}, {"key": "第 {n} 波进行中", "zh": "第 {n} 波进行中", "en": "Wave {n} in progress", "fr": "Vague {n} en cours"}, {"key": "第 {r} 局 · 最高分 {b}", "zh": "第 {r} 局 · 最高分 {b}", "en": "Run {r} · best {b}", "fr": "Partie {r} · record {b}"}, {"key": "第 {r} 局 · 精英波 {e} 次", "zh": "第 {r} 局 · 精英波 {e} 次", "en": "Run {r} · {e} elite waves", "fr": "Partie {r} · {e} vagues d’élite"}, {"key": "精英奖励：这次的神秘箱只出稀有和传说。", "zh": "精英奖励：这次的神秘箱只出稀有和传说。", "en": "Elite reward: this Mystery Box only holds rare and legendary cards.", "fr": "Bonus d’élite : cette Mystery Box ne contient que du rare et du légendaire."}, {"key": "精英小队", "zh": "精英小队", "en": "Elite squad", "fr": "Escouade d’élite"}, {"key": "精英波", "zh": "精英波", "en": "Elite wave", "fr": "Vague d’élite"}, {"key": "终点", "zh": "终点", "en": "Finish", "fr": "Arrivée"}, {"key": "绊倒退赛", "zh": "绊倒退赛", "en": "Tripped out", "fr": "Trébuche et abandonne"}, {"key": "生命", "zh": "生命", "en": "Lives", "fr": "Vies"}, {"key": "生命 −{n}", "zh": "生命 −{n}", "en": "Lives −{n}", "fr": "Vies −{n}"}, {"key": "范围", "zh": "范围", "en": "Area", "fr": "Zone"}, {"key": "装置", "zh": "装置", "en": "Device", "fr": "Dispositif"}, {"key": "装置效果 {s}{n}%", "zh": "装置效果 {s}{n}%", "en": "Device effect {s}{n}%", "fr": "Effet des dispositifs {s}{n} %"}, {"key": "起点", "zh": "起点", "en": "Start", "fr": "Départ"}, {"key": "跑道", "zh": "跑道", "en": "Track", "fr": "Explosive"}, {"key": "还没有卡", "zh": "还没有卡", "en": "No cards yet", "fr": "Aucune carte"}, {"key": "连续劝退 ×{n}", "zh": "连续劝退 ×{n}", "en": "Streak ×{n}", "fr": "Série ×{n}"}, {"key": "选好后有 8 秒布置时间。", "zh": "选好后有 8 秒布置时间。", "en": "You get 8 seconds to set up after choosing.", "fr": "Tu as 8 secondes pour te préparer."}, {"key": "选择第 {n} 段跑道", "zh": "选择第 {n} 段跑道", "en": "Choose stretch {n}", "fr": "Choisis le tronçon {n}"}, {"key": "通关", "zh": "通关", "en": "Territory held!", "fr": "Territoire défendu !"}, {"key": "道具", "zh": "道具", "en": "Item", "fr": "Objet"}, {"key": "重抽 · {n} GST", "zh": "重抽 · {n} GST", "en": "Reroll · {n} GST", "fr": "Relancer · {n} GST"}, {"key": "铁头冲刺", "zh": "铁头冲刺", "en": "Headstrong Dash", "fr": "Charge tête baissée"}, {"key": "锁定", "zh": "锁定", "en": "Locked", "fr": "Verrouillé"}, {"key": "间隔", "zh": "间隔", "en": "Interval", "fr": "Intervalle"}, {"key": "鞋匠 → {c}", "zh": "鞋匠 → {c}", "en": "Cobbler → {c}", "fr": "Cordonnier → {c}"}, {"key": "音乐 关", "zh": "音乐 关", "en": "Music off", "fr": "Musique off"}, {"key": "音乐 开", "zh": "音乐 开", "en": "Music on", "fr": "Musique on"}, {"key": "音效 关", "zh": "音效 关", "en": "Sound off", "fr": "Son off"}, {"key": "音效 开", "zh": "音效 开", "en": "Sound on", "fr": "Son on"}, {"key": "领地失守 · 第 {n} 波", "zh": "领地失守 · 第 {n} 波", "en": "Territory lost · wave {n}", "fr": "Territoire perdu · vague {n}"}, {"key": "领地跑道，点击虚线圆圈放置装置", "zh": "领地跑道，点击虚线圆圈放置装置", "en": "Territory track; tap a dashed circle to place a device", "fr": "Piste du territoire ; touche un cercle pour placer un dispositif"}, {"key": "高风险", "zh": "高风险", "en": "Risky", "fr": "Risqué"}, {"key": "（选后可在空位放置）", "zh": "（选后可在空位放置）", "en": " (place it on an empty spot)", "fr": " (à placer sur un emplacement libre)"}, {"key": "，下一级「{x}」不可用", "zh": "，下一级「{x}」不可用", "en": "; next tier “{x}” unavailable", "fr": " ; niveau suivant « {x} » indisponible"}, {"key": "出手速度 ×{r}，持续 {n} 秒", "zh": "出手速度 ×{r}，持续 {n} 秒", "en": "Device speed ×{r} for {n} s", "fr": "Vitesse des dispositifs ×{r} pendant {n} s"}, {"key": "全场冻结 {n} 秒", "zh": "全场冻结 {n} 秒", "en": "Whole track frozen for {n} s", "fr": "Toute la piste gelée {n} s"}, {"key": "{n} 条提示", "zh": "{n} 条提示", "en": "{n} notes", "fr": "{n} remarques"}, {"key": "读取表格的组件加载失败，请检查网络后重试", "zh": "读取表格的组件加载失败，请检查网络后重试", "en": "Could not load the spreadsheet reader. Check your connection and try again.", "fr": "Impossible de charger le lecteur de tableur. Vérifie ta connexion et réessaie."}, {"key": "缺少工作表「{x}」，使用默认值", "zh": "缺少工作表「{x}」，使用默认值", "en": "Sheet “{x}” is missing; using defaults", "fr": "Feuille « {x} » absente ; valeurs par défaut utilisées"}, {"key": "{w}：「{v}」不是数字，使用默认值 {d}", "zh": "{w}：「{v}」不是数字，使用默认值 {d}", "en": "{w}: “{v}” is not a number; using default {d}", "fr": "{w} : « {v} » n’est pas un nombre ; valeur par défaut {d}"}, {"key": "全局 {x}", "zh": "全局 {x}", "en": "Global {x}", "fr": "Global {x}"}, {"key": "全局：未知参数「{x}」已忽略", "zh": "全局：未知参数「{x}」已忽略", "en": "Global: unknown setting “{x}” ignored", "fr": "Global : paramètre inconnu « {x} » ignoré"}, {"key": "装置第 {n} 行：未知 id「{x}」已忽略", "zh": "装置第 {n} 行：未知 id「{x}」已忽略", "en": "Devices row {n}: unknown id “{x}” ignored", "fr": "Dispositifs ligne {n} : id inconnu « {x} » ignoré"}, {"key": "装置 {x} {k}", "zh": "装置 {x} {k}", "en": "Device {x} {k}", "fr": "Dispositif {x} {k}"}, {"key": "升级路线第 {n} 行：找不到对应路线", "zh": "升级路线第 {n} 行：找不到对应路线", "en": "Paths row {n}: no matching path", "fr": "Voies ligne {n} : voie introuvable"}, {"key": "升级第 {n} 行：找不到对应等级", "zh": "升级第 {n} 行：找不到对应等级", "en": "Upgrades row {n}: no matching tier", "fr": "Améliorations ligne {n} : niveau introuvable"}, {"key": "升级第 {n} 行 cost", "zh": "升级第 {n} 行 cost", "en": "Upgrades row {n} cost", "fr": "Améliorations ligne {n} cost"}, {"key": "升级第 {n} 行：效果「{x}」写法有误，保留原效果", "zh": "升级第 {n} 行：效果「{x}」写法有误，保留原效果", "en": "Upgrades row {n}: effect “{x}” is invalid; kept the previous effect", "fr": "Améliorations ligne {n} : effet « {x} » invalide ; effet précédent conservé"}, {"key": "敌人第 {n} 行：未知 id 已忽略", "zh": "敌人第 {n} 行：未知 id 已忽略", "en": "Enemies row {n}: unknown id ignored", "fr": "Ennemis ligne {n} : id inconnu ignoré"}, {"key": "敌人 {x} {k}", "zh": "敌人 {x} {k}", "en": "Enemy {x} {k}", "fr": "Ennemi {x} {k}"}, {"key": "波次第 {n} 行 {k}", "zh": "波次第 {n} 行 {k}", "en": "Waves row {n} {k}", "fr": "Vagues ligne {n} {k}"}, {"key": "Boss 第 {n} 行：未知 id 已忽略", "zh": "Boss 第 {n} 行：未知 id 已忽略", "en": "Bosses row {n}: unknown id ignored", "fr": "Boss ligne {n} : id inconnu ignoré"}, {"key": "Boss {x} enabled", "zh": "Boss {x} enabled", "en": "Boss {x} enabled", "fr": "Boss {x} enabled"}, {"key": "Boss {x} p{i}", "zh": "Boss {x} p{i}", "en": "Boss {x} p{i}", "fr": "Boss {x} p{i}"}, {"key": "卡牌第 {n} 行：未知 id「{x}」已忽略", "zh": "卡牌第 {n} 行：未知 id「{x}」已忽略", "en": "Cards row {n}: unknown id “{x}” ignored", "fr": "Cartes ligne {n} : id inconnu « {x} » ignoré"}, {"key": "卡牌 {x} enabled", "zh": "卡牌 {x} enabled", "en": "Card {x} enabled", "fr": "Carte {x} enabled"}, {"key": "卡牌 {x} stack", "zh": "卡牌 {x} stack", "en": "Card {x} stack", "fr": "Carte {x} stack"}, {"key": "卡牌 {x} v1", "zh": "卡牌 {x} v1", "en": "Card {x} v1", "fr": "Carte {x} v1"}, {"key": "卡牌 {x} v2", "zh": "卡牌 {x} v2", "en": "Card {x} v2", "fr": "Carte {x} v2"}, {"key": "地图第 {n} 行 x", "zh": "地图第 {n} 行 x", "en": "Map row {n} x", "fr": "Carte ligne {n} x"}, {"key": "地图第 {n} 行 y", "zh": "地图第 {n} 行 y", "en": "Map row {n} y", "fr": "Carte ligne {n} y"}, {"key": "地图：跑道至少需要 2 个点，使用默认跑道", "zh": "地图：跑道至少需要 2 个点，使用默认跑道", "en": "Map: the track needs at least 2 points; using the default track", "fr": "Carte : la piste demande au moins 2 points ; piste par défaut"}, {"key": "地图：至少需要 1 个空位，使用默认空位", "zh": "地图：至少需要 1 个空位，使用默认空位", "en": "Map: at least 1 spot is needed; using default spots", "fr": "Carte : il faut au moins 1 emplacement ; emplacements par défaut"}, {"key": "波次为空，使用默认波次", "zh": "波次为空，使用默认波次", "en": "No waves found; using default waves", "fr": "Aucune vague ; vagues par défaut"}, {"key": "正在使用：{x}", "zh": "正在使用：{x}", "en": "Using: {x}", "fr": "Configuration : {x}"}, {"key": "正在使用：默认配置", "zh": "正在使用：默认配置", "en": "Using: default config", "fr": "Configuration : par défaut"}, {"key": "正在读取…", "zh": "正在读取…", "en": "Reading…", "fr": "Lecture…"}, {"key": "导入失败：{x}", "zh": "导入失败：{x}", "en": "Import failed: {x}", "fr": "Échec de l’import : {x}"}, {"key": "导入配置表 (.xlsx)", "zh": "导入配置表 (.xlsx)", "en": "Import config (.xlsx)", "fr": "Importer la config (.xlsx)"}, {"key": "恢复默认", "zh": "恢复默认", "en": "Reset to default", "fr": "Rétablir par défaut"}, {"key": "在 Excel 或 Google Sheets 中修改配置表后导出为 .xlsx 再导入，游戏会立即按新数值和名称重新开局。导入的配置只保存在这台设备的浏览器里。", "zh": "在 Excel 或 Google Sheets 中修改配置表后导出为 .xlsx 再导入，游戏会立即按新数值和名称重新开局。导入的配置只保存在这台设备的浏览器里。", "en": "Edit the config sheet in Excel or Google Sheets, export it as .xlsx and import it here. The game restarts right away with the new numbers and names. Imported configs are saved only in this browser.", "fr": "Modifie la config dans Excel ou Google Sheets, exporte-la en .xlsx puis importe-la ici. La partie redémarre aussitôt avec les nouvelles valeurs et noms. La config importée reste dans ce navigateur."}, {"key": "随机", "zh": "随机", "en": "Random", "fr": "Aléatoire"}, {"key": "跑道选择", "zh": "跑道选择", "en": "Track", "fr": "Piste"}, {"key": "本局跑道：{x}。{d}", "zh": "本局跑道：{x}。{d}", "en": "Track: {x}. {d}", "fr": "Piste : {x}. {d}"}, {"key": "跑道 {x} enabled", "zh": "跑道 {x} enabled", "en": "Track {x} enabled", "fr": "Piste {x} enabled"}, {"key": "跑道 {x} spdMult", "zh": "跑道 {x} spdMult", "en": "Track {x} spdMult", "fr": "Piste {x} spdMult"}, {"key": "跑道 {x} hpMult", "zh": "跑道 {x} hpMult", "en": "Track {x} hpMult", "fr": "Piste {x} hpMult"}, {"key": "地图：跑道「{x}」不在「跑道列表」里，已忽略", "zh": "地图：跑道「{x}」不在「跑道列表」里，已忽略", "en": "Map: track “{x}” is not in the track list; ignored", "fr": "Carte : piste « {x} » absente de la liste ; ignorée"}, {"key": "地图「{x}」：每条路线至少需要 2 个点，保留原跑道", "zh": "地图「{x}」：每条路线至少需要 2 个点，保留原跑道", "en": "Map “{x}”: each route needs at least 2 points; kept the previous track", "fr": "Carte « {x} » : chaque tracé demande 2 points ; piste précédente conservée"}, {"key": "地图「{x}」：至少需要 1 个空位，保留原空位", "zh": "地图「{x}」：至少需要 1 个空位，保留原空位", "en": "Map “{x}”: at least 1 spot is needed; kept the previous spots", "fr": "Carte « {x} » : il faut au moins 1 emplacement ; emplacements précédents conservés"}, {"key": "导入美术图片（可多选）", "zh": "导入美术图片（可多选）", "en": "Import art images (multiple)", "fr": "Importer des images (plusieurs)"}, {"key": "清除导入的图片", "zh": "清除导入的图片", "en": "Clear imported images", "fr": "Effacer les images importées"}, {"key": "图片文件名用资源编号命名（如 tower.dart.png、boss.yawn.png），会自动替换对应的占位图。编号和尺寸见配置表「美术资源」工作表。", "zh": "图片文件名用资源编号命名（如 tower.dart.png、boss.yawn.png），会自动替换对应的占位图。编号和尺寸见配置表「美术资源」工作表。", "en": "Name each image file after its asset key (e.g. tower.dart.png, boss.yawn.png) and it replaces the matching placeholder. Keys and sizes are in the “美术资源” (Art) sheet of the config workbook.", "fr": "Nommez chaque image d’après sa clé (ex. tower.dart.png, boss.yawn.png) : elle remplace le dessin provisoire correspondant. Clés et tailles : feuille « 美术资源 » (Art) du classeur."}, {"key": "美术资源：全部使用占位图", "zh": "美术资源：全部使用占位图", "en": "Art: all placeholders", "fr": "Graphismes : tout est provisoire"}, {"key": "美术资源：已替换 {n} 项（其中导入 {m} 张）", "zh": "美术资源：已替换 {n} 项（其中导入 {m} 张）", "en": "Art: {n} replaced ({m} imported)", "fr": "Graphismes : {n} remplacés ({m} importés)"}, {"key": "加载失败：{x}", "zh": "加载失败：{x}", "en": "Failed to load: {x}", "fr": "Échec du chargement : {x}"}, {"key": "这些文件名不是资源编号，已跳过：{x}", "zh": "这些文件名不是资源编号，已跳过：{x}", "en": "Skipped (file name is not an asset key): {x}", "fr": "Ignorés (le nom n’est pas une clé) : {x}"}, {"key": "图片太大，浏览器存不下，只在本次打开期间有效", "zh": "图片太大，浏览器存不下，只在本次打开期间有效", "en": "Images too large for browser storage; they last only until you close the page", "fr": "Images trop lourdes pour le navigateur : valables jusqu’à la fermeture de la page"}, {"key": "美术资源：新编号「{x}」游戏里没有用到", "zh": "美术资源：新编号「{x}」游戏里没有用到", "en": "Art: key “{x}” is not used by the game", "fr": "Graphismes : la clé « {x} » n’est pas utilisée"}, {"key": "美术资源 {x} {k}", "zh": "美术资源 {x} {k}", "en": "Art {x} {k}", "fr": "Graphismes {x} {k}"}, {"key": "点击开始", "zh": "点击开始", "en": "Tap to start", "fr": "Touchez pour commencer"}, {"key": "点跑道旁的石台放置装置，再点装置直接升级。", "zh": "点跑道旁的石台放置装置，再点装置直接升级。", "en": "Tap a stone pad beside the track to place a device, then tap the device to upgrade it.", "fr": "Touchez un socle près de la piste pour poser un dispositif, puis touchez-le pour l’améliorer."}, {"key": "开跑！", "zh": "开跑！", "en": "Go!", "fr": "Partez !"}, {"key": "神秘箱开启中…", "zh": "神秘箱开启中…", "en": "Opening the Mystery Box…", "fr": "Ouverture de la Mystery Box…"}, {"key": "准备…", "zh": "准备…", "en": "Get ready…", "fr": "Prêt…"}, {"key": "建造装置", "zh": "建造装置", "en": "Build a device", "fr": "Construire"}, {"key": "关闭", "zh": "关闭", "en": "Close", "fr": "Fermer"}, {"key": "已锁定", "zh": "已锁定", "en": "Locked", "fr": "Verrouillé"}, {"key": "主", "zh": "主", "en": "Main", "fr": "Princ."}, {"key": "次", "zh": "次", "en": "2nd", "fr": "Sec."}, {"key": "主路线可升满 5 级，次路线最多 2 级", "zh": "主路线可升满 5 级，次路线最多 2 级", "en": "Main path up to tier 5, second path up to tier 2", "fr": "Voie principale jusqu’au niv. 5, secondaire jusqu’au niv. 2"}, {"key": "回收 +{n}", "zh": "回收 +{n}", "en": "Recycle +{n}", "fr": "Recycler +{n}"}, {"key": "跑步加成", "zh": "跑步加成", "en": "Running boost", "fr": "Bonus de course"}, {"key": "真实跑步会让你的装置更强。原型里用下面的开关模拟；正式版自动读取你在 STEPN 的跑步数据。", "zh": "真实跑步会让你的装置更强。原型里用下面的开关模拟；正式版自动读取你在 STEPN 的跑步数据。", "en": "Real runs make your devices stronger. In this prototype you simulate it with the controls below; the live version reads your STEPN running data automatically.", "fr": "Courir pour de vrai renforce tes dispositifs. Dans ce prototype, simule-le ci-dessous ; la version finale lira automatiquement tes données de course STEPN."}, {"key": "公会天赋（模拟累计 RP）", "zh": "公会天赋（模拟累计 RP）", "en": "Guild talent (simulated total RP)", "fr": "Talent de guilde (RP cumulés simulés)"}, {"key": "累计 {r} RP · 未解锁", "zh": "累计 {r} RP · 未解锁", "en": "{r} RP total · locked", "fr": "{r} RP cumulés · verrouillé"}, {"key": "累计 {r} RP · {t} 档 +{b}%", "zh": "累计 {r} RP · {t} 档 +{b}%", "en": "{r} RP total · tier {t} +{b}%", "fr": "{r} RP cumulés · palier {t} +{b} %"}, {"key": "今日热身：今天在 STEPN 已跑满 {k} km → 当天所有对局装置效果 +{b}%", "zh": "今日热身：今天在 STEPN 已跑满 {k} km → 当天所有对局装置效果 +{b}%", "en": "Warm-up: ran at least {k} km in STEPN today → all devices +{b}% effect in every run today", "fr": "Échauffement : au moins {k} km courus dans STEPN aujourd’hui → tous les dispositifs +{b} % d’effet dans chaque partie du jour"}, {"key": "天赋怎么提高：每次真实跑步获得 RP（跑步积分）——前 5 km 每 km {a} RP，5–10 km 每 km {b} RP，单日最多 {c} RP。累计 RP 达到 {t1} / {t2} / {t3} 自动解锁一 / 二 / 三档公会天赋，全部装置效果 +{p1}% / +{p2}% / +{p3}%。按每周跑 4 次、每次 4.5 km 计算，大约 1 周、3 周、7 周解锁。", "zh": "天赋怎么提高：每次真实跑步获得 RP（跑步积分）——前 5 km 每 km {a} RP，5–10 km 每 km {b} RP，单日最多 {c} RP。累计 RP 达到 {t1} / {t2} / {t3} 自动解锁一 / 二 / 三档公会天赋，全部装置效果 +{p1}% / +{p2}% / +{p3}%。按每周跑 4 次、每次 4.5 km 计算，大约 1 周、3 周、7 周解锁。", "en": "How to raise your talent: every real run earns RP (Run Points) — {a} RP per km for the first 5 km, {b} RP per km from 5 to 10 km, up to {c} RP a day. Reaching {t1} / {t2} / {t3} total RP unlocks guild talent tier 1 / 2 / 3: all devices +{p1}% / +{p2}% / +{p3}% effect. Running 4 times a week at 4.5 km each, that takes about 1, 3 and 7 weeks.", "fr": "Comment monter ton talent : chaque vraie course rapporte des RP (points de course) — {a} RP par km sur les 5 premiers km, {b} RP par km de 5 à 10 km, {c} RP max par jour. À {t1} / {t2} / {t3} RP cumulés, tu débloques le palier 1 / 2 / 3 du talent de guilde : tous les dispositifs +{p1} % / +{p2} % / +{p3} % d’effet. En courant 4 fois par semaine 4,5 km, comptez environ 1, 3 et 7 semaines."}, {"key": "当前跑步加成：装置效果 +{n}%", "zh": "当前跑步加成：装置效果 +{n}%", "en": "Current running boost: devices +{n}%", "fr": "Bonus de course actuel : dispositifs +{n} %"}, {"key": "跑步加成 +{n}%", "zh": "跑步加成 +{n}%", "en": "Running boost +{n}%", "fr": "Bonus de course +{n} %"}, {"key": "点跑道旁的石台放置装置，再点「开始第 1 波」", "zh": "点跑道旁的石台放置装置，再点「开始第 1 波」", "en": "Tap a stone pad beside the track to place a device, then press “Start wave 1”", "fr": "Touchez un socle près de la piste pour poser un dispositif, puis « Lancer la vague 1 »"}, {"key": "出手间隔 −15%", "zh": "出手间隔 −15%", "en": "Interval −15%", "fr": "Intervalle −15 %"}, {"key": "下一级：{x}", "zh": "下一级：{x}", "en": "Next: {x}", "fr": "Suivant : {x}"}, {"key": "这里不能放", "zh": "这里不能放", "en": "Can’t place here", "fr": "Impossible ici"}, {"key": "取消放置", "zh": "取消放置", "en": "Cancel placing", "fr": "Annuler"}, {"key": "＋ 放置点 ×{n}", "zh": "＋ 放置点 ×{n}", "en": "+ Spot ×{n}", "fr": "+ Emplacement ×{n}"}, {"key": "点跑道外的空地，新增一个放置点", "zh": "点跑道外的空地，新增一个放置点", "en": "Tap open ground off the track to add a spot", "fr": "Touche un terrain libre hors piste pour ajouter un emplacement"}, {"key": "聪", "zh": "聪", "en": "sats", "fr": "sats"}, {"key": "创世纪 · 2008–2010", "zh": "创世纪 · 2008–2010", "en": "Genesis · 2008–2010", "fr": "Genèse · 2008–2010"}, {"key": "组合", "zh": "组合", "en": "Combos", "fr": "Combos"}, {"key": "重试", "zh": "重试", "en": "Retry", "fr": "Réessayer"}, {"key": "STEPN 跑者掉进区块链时光隧道，跟着比特币走过最初的三年。", "zh": "STEPN 跑者掉进区块链时光隧道，跟着比特币走过最初的三年。", "en": "A STEPN runner falls into a blockchain time tunnel and lives through bitcoin’s first three years.", "fr": "Un coureur STEPN tombe dans un tunnel temporel blockchain et vit les trois premières années du bitcoin."}, {"key": "累计积分 {n}", "zh": "累计积分 {n}", "en": "Points: {n}", "fr": "Points : {n}"}, {"key": "剧情中…", "zh": "剧情中…", "en": "Story…", "fr": "Histoire…"}, {"key": "关卡完成", "zh": "关卡完成", "en": "Level complete", "fr": "Niveau terminé"}, {"key": "再玩一次", "zh": "再玩一次", "en": "Play again", "fr": "Rejouer"}, {"key": "章节地图", "zh": "章节地图", "en": "Chapter map", "fr": "Carte du chapitre"}, {"key": "第二章 · 敬请期待", "zh": "第二章 · 敬请期待", "en": "Chapter 2 · coming soon", "fr": "Chapitre 2 · bientôt"}, {"key": "图鉴", "zh": "图鉴", "en": "Codex", "fr": "Codex"}, {"key": "区块高度", "zh": "区块高度", "en": "Block height", "fr": "Hauteur"}, {"key": "区块奖励：选一个，比赛马上继续。", "zh": "区块奖励：选一个，比赛马上继续。", "en": "Block reward: pick one and the race resumes.", "fr": "Récompense de bloc : choisis-en une et la course reprend."}, {"key": "选择关卡", "zh": "选择关卡", "en": "Choose a level", "fr": "Choisir un niveau"}, {"key": "这关还没打出组合，试试把两种状态叠在同一个跑者身上。", "zh": "这关还没打出组合，试试把两种状态叠在同一个跑者身上。", "en": "No combos this time. Try stacking two statuses on the same runner.", "fr": "Aucun combo cette fois. Essaie de cumuler deux états sur le même coureur."}, {"key": "快捷键：空格 开波 · F 切换速度 · 1–7 建造 · Q/W/E 升级 · X 回收 · Esc 取消", "zh": "快捷键：空格 开波 · F 切换速度 · 1–7 建造 · Q/W/E 升级 · X 回收 · Esc 取消", "en": "Keys: Space start wave · F speed · 1–7 build · Q/W/E upgrade · X recycle · Esc cancel", "fr": "Touches : Espace vague · F vitesse · 1–7 construire · Q/W/E améliorer · X recycler · Échap annuler"}, {"key": "一万枚换两个披萨！", "zh": "一万枚换两个披萨！", "en": "10,000 coins for two pizzas!", "fr": "10 000 pièces pour deux pizzas !"}, {"key": "知识卡", "zh": "知识卡", "en": "Knowledge", "fr": "Savoir"}, {"key": "新组合：{x}！", "zh": "新组合：{x}！", "en": "New combo: {x}!", "fr": "Nouveau combo : {x} !"}, {"key": "下一关", "zh": "下一关", "en": "Next level", "fr": "Niveau suivant"}, {"key": "{n}× 速度", "zh": "{n}× 速度", "en": "{n}× speed", "fr": "Vitesse ×{n}"}, {"key": "区块 #{h} 被别的矿工抢先挖到了", "zh": "区块 #{h} 被别的矿工抢先挖到了", "en": "Block #{h} went to another miner", "fr": "Le bloc #{h} est allé à un autre mineur"}, {"key": "挖到区块", "zh": "挖到区块", "en": "Blocks mined", "fr": "Blocs minés"}, {"key": "本关触发的组合", "zh": "本关触发的组合", "en": "Combos this level", "fr": "Combos de ce niveau"}, {"key": "组合：{x}", "zh": "组合：{x}", "en": "Combos: {x}", "fr": "Combos : {x}"}, {"key": "修复版本上线，溢出的币被回滚", "zh": "修复版本上线，溢出的币被回滚", "en": "The fix is live; the overflowed coins are rolled back", "fr": "Le correctif est en ligne ; les pièces en trop sont annulées"}, {"key": "还没触发过。试试把这两种状态叠在同一个跑者身上。", "zh": "还没触发过。试试把这两种状态叠在同一个跑者身上。", "en": "Not triggered yet. Try stacking these two statuses on one runner.", "fr": "Pas encore déclenché. Cumule ces deux états sur un coureur."}, {"key": "出块！#{h}", "zh": "出块！#{h}", "en": "Block! #{h}", "fr": "Bloc ! #{h}"}, {"key": "挖到区块 #{h}！", "zh": "挖到区块 #{h}！", "en": "Mined block #{h}!", "fr": "Bloc #{h} miné !"}, {"key": "披萨跑者冲出来了", "zh": "披萨跑者冲出来了", "en": "Pizza runners incoming", "fr": "Les coureurs-pizza arrivent"}, {"key": "重抽 · {n} 聪", "zh": "重抽 · {n} 聪", "en": "Reroll · {n} sats", "fr": "Relancer · {n} sats"}, {"key": "继续 ▶", "zh": "继续 ▶", "en": "Next ▶", "fr": "Suite ▶"}, {"key": "收入图鉴", "zh": "收入图鉴", "en": "Add to codex", "fr": "Ajouter au codex"}, {"key": "返回章节地图", "zh": "返回章节地图", "en": "Back to chapter map", "fr": "Retour à la carte"}, {"key": "跳过", "zh": "跳过", "en": "Skip", "fr": "Passer"}, {"key": "经典模式", "zh": "经典模式", "en": "Classic mode", "fr": "Mode classique"}, {"key": "开始！", "zh": "开始！", "en": "Go!", "fr": "C’est parti !"}, {"key": "算力 {h} · 出块奖励 +{b}%", "zh": "算力 {h} · 出块奖励 +{b}%", "en": "Hash {h} · block reward +{b}%", "fr": "Puissance {h} · récompense +{b} %"}, {"key": "全网每隔十几秒出一个区块，你的算力占全网的比例，就是抢到它的几率。挖到区块：得聪，再开一次三选一。", "zh": "全网每隔十几秒出一个区块，你的算力占全网的比例，就是抢到它的几率。挖到区块：得聪，再开一次三选一。", "en": "The network makes a block every dozen seconds or so. Your share of total hash power is your chance of winning it. Win a block: sats plus a pick-one-of-three.", "fr": "Le réseau produit un bloc toutes les quinze secondes environ. Ta part de la puissance totale est ta chance de le gagner. Bloc gagné : des sats et un choix parmi trois."}, {"key": "出块几率", "zh": "出块几率", "en": "Win chance", "fr": "Chance"}, {"key": "软分叉！", "zh": "软分叉！", "en": "Soft fork!", "fr": "Soft fork !"}, {"key": "原型阶段的链下积分，没有任何实际价值", "zh": "原型阶段的链下积分，没有任何实际价值", "en": "off-chain prototype points with no real-world value", "fr": "points hors chaîne du prototype, sans valeur réelle"}, {"key": "你的算力", "zh": "你的算力", "en": "Your hash", "fr": "Ta puissance"}, {"key": "挖到的聪", "zh": "挖到的聪", "en": "Sats mined", "fr": "Sats minés"}, {"key": "全网算力", "zh": "全网算力", "en": "Network hash", "fr": "Puissance réseau"}, {"key": "已挖到", "zh": "已挖到", "en": "Won", "fr": "Gagnés"}, {"key": "下个区块", "zh": "下个区块", "en": "Next block", "fr": "Prochain bloc"}, {"key": "剩余生命", "zh": "剩余生命", "en": "Lives left", "fr": "Vies restantes"}, {"key": "快捷键 Q / W / E 升级，X 回收", "zh": "快捷键 Q / W / E 升级，X 回收", "en": "Keys Q / W / E upgrade, X recycles", "fr": "Touches Q / W / E améliorer, X recycler"}, {"key": "整数溢出！", "zh": "整数溢出！", "en": "Integer overflow!", "fr": "Dépassement d’entier !"}, {"key": "第一章", "zh": "第一章", "en": "Chapter 1", "fr": "Chapitre 1"}, {"key": "通关「{x}」解锁", "zh": "通关「{x}」解锁", "en": "Clear “{x}” to unlock", "fr": "Termine « {x} » pour débloquer"}, {"key": "挂上：{x}", "zh": "挂上：{x}", "en": "Applies: {x}", "fr": "Applique : {x}"}, {"key": "难度调整：全网算力 +{n}%", "zh": "难度调整：全网算力 +{n}%", "en": "Difficulty adjustment: network hash +{n}%", "fr": "Ajustement de difficulté : puissance réseau +{n} %"}, {"key": "新知识卡", "zh": "新知识卡", "en": "New knowledge card", "fr": "Nouvelle carte savoir"}, {"key": "⛏ 挖矿", "zh": "⛏ 挖矿", "en": "⛏ Mining", "fr": "⛏ Minage"}, {"key": "获得积分", "zh": "获得积分", "en": "Points earned", "fr": "Points gagnés"}, {"key": "再点一次离开（本局进度不保存）", "zh": "再点一次离开（本局进度不保存）", "en": "Tap again to leave (this run is not saved)", "fr": "Touche encore pour quitter (partie non sauvegardée)"}, {"key": "皮厚", "zh": "皮厚", "en": "Tough", "fr": "Coriace"}, {"key": "防水", "zh": "防水", "en": "Waterproof", "fr": "Imperméable"}, {"key": "跳过！", "zh": "跳过！", "en": "Hop!", "fr": "Hop !"}, {"key": "跑者", "zh": "跑者", "en": "Runners", "fr": "Coureurs"}, {"key": "对策", "zh": "对策", "en": "Counter", "fr": "Parade"}, {"key": "还没遇到过。", "zh": "还没遇到过。", "en": "Not met yet.", "fr": "Pas encore croisé."}, {"key": "新跑者", "zh": "新跑者", "en": "New runner", "fr": "Nouveau coureur"}, {"key": "对{x}无效", "zh": "对{x}无效", "en": "No effect on {x}", "fr": "Sans effet sur {x}"}], "art": [{"key": "map.classic", "src": "", "w": 360, "h": 600, "ax": 0, "ay": 0, "frames": 1, "fps": 0, "cover": 0}, {"key": "map.twin", "src": "", "w": 360, "h": 600, "ax": 0, "ay": 0, "frames": 1, "fps": 0, "cover": 0}, {"key": "map.fork", "src": "", "w": 360, "h": 600, "ax": 0, "ay": 0, "frames": 1, "fps": 0, "cover": 0}, {"key": "map.merge", "src": "", "w": 360, "h": 600, "ax": 0, "ay": 0, "frames": 1, "fps": 0, "cover": 0}, {"key": "map.cross", "src": "", "w": 360, "h": 600, "ax": 0, "ay": 0, "frames": 1, "fps": 0, "cover": 0}, {"key": "map.trident", "src": "", "w": 360, "h": 600, "ax": 0, "ay": 0, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.dart", "src": "", "w": 40, "h": 50, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.bomb", "src": "", "w": 40, "h": 50, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.frost", "src": "", "w": 40, "h": 50, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.sniper", "src": "", "w": 40, "h": 50, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.tesla", "src": "", "w": 40, "h": 50, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.gem", "src": "", "w": 40, "h": 50, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.miner", "src": "", "w": 40, "h": 50, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.dart.p1", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.dart.p2", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.dart.p3", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.bomb.p1", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.bomb.p2", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.bomb.p3", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.frost.p1", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.frost.p2", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.frost.p3", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.sniper.p1", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.sniper.p2", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.sniper.p3", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.tesla.p1", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.tesla.p2", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.tesla.p3", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.gem.p1", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.gem.p2", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.gem.p3", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.miner.p1", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.miner.p2", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "tower.miner.p3", "src": "", "w": 44, "h": 54, "ax": 0.5, "ay": 0.92, "frames": 1, "fps": 0, "cover": 0}, {"key": "pad.empty", "src": "", "w": 36, "h": 22, "ax": 0.5, "ay": 1, "frames": 1, "fps": 0, "cover": 0}, {"key": "pad.base", "src": "", "w": 36, "h": 22, "ax": 0.5, "ay": 1, "frames": 1, "fps": 0, "cover": 0}, {"key": "runner.norm", "src": "", "w": 30, "h": 36, "ax": 0.5, "ay": 1, "frames": 6, "fps": 10, "cover": 0}, {"key": "runner.arm", "src": "", "w": 34, "h": 42, "ax": 0.5, "ay": 1, "frames": 6, "fps": 10, "cover": 0}, {"key": "runner.mini", "src": "", "w": 22, "h": 26, "ax": 0.5, "ay": 1, "frames": 6, "fps": 12, "cover": 0}, {"key": "runner.gold", "src": "", "w": 32, "h": 38, "ax": 0.5, "ay": 1, "frames": 6, "fps": 10, "cover": 0}, {"key": "boss.yawn", "src": "", "w": 72, "h": 56, "ax": 0.5, "ay": 1, "frames": 6, "fps": 8, "cover": 0}, {"key": "boss.gilg", "src": "", "w": 64, "h": 80, "ax": 0.5, "ay": 1, "frames": 6, "fps": 8, "cover": 0}, {"key": "boss.king", "src": "", "w": 64, "h": 80, "ax": 0.5, "ay": 1, "frames": 6, "fps": 8, "cover": 0}, {"key": "boss.lucas", "src": "", "w": 64, "h": 80, "ax": 0.5, "ay": 1, "frames": 6, "fps": 8, "cover": 0}, {"key": "boss.shiti", "src": "", "w": 64, "h": 80, "ax": 0.5, "ay": 1, "frames": 6, "fps": 8, "cover": 0}, {"key": "boss.jerry", "src": "", "w": 64, "h": 80, "ax": 0.5, "ay": 1, "frames": 6, "fps": 8, "cover": 0}, {"key": "boss.pizza", "src": "", "w": 64, "h": 80, "ax": 0.5, "ay": 1, "frames": 6, "fps": 8, "cover": 0}, {"key": "boss.overflow", "src": "", "w": 64, "h": 80, "ax": 0.5, "ay": 1, "frames": 6, "fps": 8, "cover": 0}, {"key": "proj.dart", "src": "", "w": 10, "h": 12, "ax": 0.5, "ay": 0.5, "frames": 1, "fps": 0, "cover": 0}, {"key": "proj.bomb", "src": "", "w": 14, "h": 12, "ax": 0.5, "ay": 0.5, "frames": 1, "fps": 0, "cover": 0}, {"key": "proj.drop", "src": "", "w": 16, "h": 12, "ax": 0.5, "ay": 1, "frames": 1, "fps": 0, "cover": 0}, {"key": "proj.gem.ruby", "src": "", "w": 12, "h": 12, "ax": 0.5, "ay": 0.5, "frames": 1, "fps": 0, "cover": 0}, {"key": "proj.gem.topaz", "src": "", "w": 12, "h": 12, "ax": 0.5, "ay": 0.5, "frames": 1, "fps": 0, "cover": 0}, {"key": "proj.gem.sapphire", "src": "", "w": 12, "h": 12, "ax": 0.5, "ay": 0.5, "frames": 1, "fps": 0, "cover": 0}, {"key": "proj.dropGold", "src": "", "w": 16, "h": 12, "ax": 0.5, "ay": 1, "frames": 1, "fps": 0, "cover": 0}, {"key": "fx.peel", "src": "", "w": 18, "h": 18, "ax": 0.5, "ay": 0.5, "frames": 1, "fps": 0, "cover": 0}, {"key": "fx.chili", "src": "", "w": 18, "h": 18, "ax": 0.5, "ay": 0.5, "frames": 1, "fps": 0, "cover": 0}, {"key": "icon.wave", "src": "", "w": 38, "h": 38, "ax": 0.5, "ay": 0.5, "frames": 1, "fps": 0, "cover": 0}, {"key": "icon.lives", "src": "", "w": 38, "h": 38, "ax": 0.5, "ay": 0.5, "frames": 1, "fps": 0, "cover": 0}, {"key": "icon.gst", "src": "", "w": 38, "h": 38, "ax": 0.5, "ay": 0.5, "frames": 1, "fps": 0, "cover": 0}, {"key": "icon.score", "src": "", "w": 38, "h": 38, "ax": 0.5, "ay": 0.5, "frames": 1, "fps": 0, "cover": 0}]};
let G = {}, CFG_NAME = '';
const ROUTES = [], PADS = [], MAPS = {};
let CUR_MAP = '';
function segAt(d, r = 0){ const R = ROUTES[r] || ROUTES[0]; for (const s of R.seg) if (d <= s.s + s.l) return s; return R.seg[R.seg.length-1]; }
function at(d, r = 0){ const s = segAt(d, r), t = Math.max(0, Math.min(1, (d - s.s) / s.l)); return [s.x1 + (s.x2-s.x1)*t, s.y1 + (s.y2-s.y1)*t]; }
const routeLen = r => (ROUTES[r] || ROUTES[0]).len;
function buildRoute(pts){ const seg = []; let len = 0; for (let i = 0; i < pts.length - 1; i++) { const [x1,y1] = pts[i], [x2,y2] = pts[i+1], l = Math.hypot(x2-x1, y2-y1) || 1; seg.push({x1,y1,x2,y2,l,s:len}); len += l; } return {pts, seg, len}; }
function useMap(id){
  const m = MAPS[id] || Object.values(MAPS)[0]; CUR_MAP = m.id;
  const tp = p => LAND ? [p[1], p[0]] : [p[0], p[1]];
  ROUTES.length = 0; m.routes.forEach(r => ROUTES.push(buildRoute(r.map(tp))));
  PADS.length = 0; m.pads.forEach(p => PADS.push(tp(p)));
}
const TOW = {}, PATHS = {}, E = {}, BOSS = {}, AFX = {};
let CARDS = [], WAVES = [], FREE_WAVES = [], BOSS_WAVES = [], RW = {C:60, R:30, L:10};
const RAR = {C:'普通', R:'稀有', L:'传说'}, RANK = {C:0, R:1, L:2};
const PCOL = ['#ff9d7a', '#ffcf3a', '#8fd3ff'];
const ECOL = {norm:'#b9a6ff', arm:'#8f9aab', boss:'#ff8a5c', rain:'#ffd23f', hop:'#ff5ad1', phones:'#ff8fd0', whale:'#4a78b8'};
const STATS = ['dmg','rate','range','rad','slow','slowDur','chain','decay','multi','crit','critMul','armor','bossMul','starts','shieldMul','bombs',
  'execChance','mark','auraRate','auraR','auraDmg','stun','shrapnel','cluster','burnDur','burnPct','firePatch','inferno','freeze','bossSlowFull',
  'iceAge','vulnSlow','vulnFreeze','strip','exec25','decap','ricochet','gpw','globalDmg','overN','overMul','staticDps','hash','blockBonus','heat'];
function parseEffect(src){
  const ops = String(src ?? '').split(/[;；\n]/).map(x => x.trim()).filter(Boolean).map(st => {
    const m = st.match(/^([A-Za-z0-9]+)\s*(\+=|\*=|>=|=)\s*(-?\d*\.?\d+)$/);
    if (!m || !STATS.includes(m[1])) throw new Error(st);
    return [m[1], m[2], parseFloat(m[3])];
  });
  return s => { for (const [k, op, v] of ops) s[k] = op === '+=' ? (s[k] || 0) + v : op === '*=' ? (s[k] ?? 0) * v : op === '>=' ? Math.max(s[k] || 0, v) : v; };
}
const reg = L => { if (!L || !L.zh) return; for (const lg of ['en', 'fr']) if (L[lg]) I18N[lg][L.zh] = L[lg]; };
const has = k => S.unlocked.includes(k);
const mod = id => S.mods.has(id);
const unlock = k => { if (TOW[k] && !has(k)) S.unlocked.push(k); };
const CARD_LOGIC = {
  u_bomb:  {req:() => !has('bomb'), apply:() => unlock('bomb')},
  u_frost: {req:() => !has('frost'), apply:() => unlock('frost')},
  u_sniper:{req:() => !has('sniper'), apply:() => unlock('sniper')},
  u_tesla: {req:() => !has('tesla'), apply:() => unlock('tesla')},
  u_gem:   {req:() => !has('gem'), apply:() => unlock('gem')},
  pad:     {apply:c => { S.padTokens += Math.max(1, c.v1 | 0); }},
  freeup:  {apply:() => freeUpgrade()},
  coupon:  {apply:c => S.coupons += c.v1},
  drill:   {apply:c => S.dmgMult += c.v1},
  crit:    {apply:c => S.critBonus += c.v1},
  heart:   {apply:c => S.lives += c.v1},
  loot:    {apply:c => S.gold += c.v1},
  cheap:   {apply:c => S.costMult = c.v1},
  maniac:  {apply:c => S.frenzyNeed = c.v1},
  devil:   {apply:c => { S.gold += c.v1; S.hpMult *= c.v2; }},
  glass:   {req:c => S.lives > c.v2, apply:c => { S.dmgMult += c.v1; S.lives -= c.v2; }},
  track:   {apply:c => { S.spdMult *= c.v1; S.goldMult *= c.v2; }},
  chain:   {req:() => mod('pop')}
};
function applyConfig(cfg){
  G = Object.assign({}, DEFAULT_CFG.global, cfg.global);
  RW = {C:G.rarityC, R:G.rarityR, L:G.rarityL};
  for (const k in MAPS) delete MAPS[k];
  for (const m of cfg.maps) {
    if (m.enabled === 0) continue;
    const routes = m.routes.map(r => r.map(p => [+p[0], +p[1]])).filter(r => r.length >= 2);
    if (!routes.length || !m.pads.length) continue;
    MAPS[m.id] = {id:m.id, name:m.name.zh, desc:m.desc.zh, spd:+m.spdMult || 1, hp:+m.hpMult || 1, routes, pads:m.pads.map(p => [+p[0], +p[1]])};
    reg(m.name); reg(m.desc);
  }
  if (!Object.keys(MAPS).length) { const m = DEFAULT_CFG.maps[0]; MAPS[m.id] = {id:m.id, name:m.name.zh, desc:m.desc.zh, spd:1, hp:1, routes:m.routes, pads:m.pads}; }
  useMap(MAPS[CUR_MAP] ? CUR_MAP : Object.keys(MAPS)[0]);
  fillMapSelect();
  for (const k in TOW) delete TOW[k];
  for (const t of cfg.towers) {
    TOW[t.id] = {name:t.name.zh, short:t.short.zh, desc:t.desc.zh, cost:t.cost, dmg:t.dmg, rate:t.rate, range:t.range, rad:t.rad, slow:t.slow,
                 slowDur:t.slowDur || 1.5, chain:t.chain, decay:t.decay || 1, armor:t.armor, bossMul:t.bossMul || 1, col:t.color};
    reg(t.name); reg(t.short); reg(t.desc);
  }
  for (const k in PATHS) delete PATHS[k];
  for (const p of cfg.paths) {
    (PATHS[p.tower] = PATHS[p.tower] || [])[p.path - 1] = {name:p.name.zh, tiers: p.tiers.slice().sort((a, b) => a.tier - b.tier).map(x => [x.name.zh, x.cost, x.desc.zh, x.fx || parseEffect(x.effect)])};
    reg(p.name); p.tiers.forEach(x => { reg(x.name); reg(x.desc); });
  }
  for (const k in E) delete E[k];
  for (const e of cfg.enemies) { E[e.id] = {name:e.name.zh, r:e.radius, spd:e.speed, gold:e.gold, val:e.value, leak:e.leak, col:ECOL[e.id]}; reg(e.name); }
  WAVES = cfg.waves.slice().sort((a, b) => a.wave - b.wave); FREE_WAVES = WAVES;
  BOSS_WAVES = WAVES.filter(w => +w.boss).map(w => w.wave);
  for (const k in BOSS) delete BOSS[k];
  for (const b of cfg.bosses) { if (b.enabled === 0) continue; BOSS[b.id] = {name:b.name, title:b.title.zh, ability:b.ability.zh, p:b.p.map(Number)}; reg(b.title); reg(b.ability); }
  for (const k in AFX) delete AFX[k];
  for (const a of cfg.affixes) { AFX[a.id] = {name:a.name.zh, desc:a.desc.zh}; reg(a.name); reg(a.desc); }
  CARDS = cfg.cards.filter(c => c.enabled !== 0).map(c => {
    const out = {id:c.id, tag:c.tag, rar:c.rar, stack:!!+c.stack, name:c.name && c.name.zh, desc:c.desc && c.desc.zh, v1:+c.v1 || 0, v2:+c.v2 || 0};
    if (c.name) reg(c.name); if (c.desc) reg(c.desc);
    if (c.id.startsWith('m_')) { const k = c.id.slice(2); return Object.assign(out, {m:k, req:() => has(k), apply:() => { S.master[k] = true; refreshStats(); }}); }
    return Object.assign(out, CARD_LOGIC[c.id] || {});
  }).filter(c => !c.m || TOW[c.m]);
  for (const t of cfg.texts) { if (t.zh && t.zh !== t.key) I18N.zh[t.key] = t.zh; else delete I18N.zh[t.key]; if (t.en) I18N.en[t.key] = t.en; if (t.fr) I18N.fr[t.key] = t.fr; }
  ART_DEF = (cfg.art && cfg.art.length ? cfg.art : DEFAULT_CFG.art) || []; loadArt();
}
const bp = (id, i) => BOSS[id] ? BOSS[id].p[i] : 0;
const bossFor = n => S.bossPlan[Math.max(0, BOSS_WAVES.indexOf(n))];
const waveRow = w => WAVES[Math.min(WAVES.length, Math.max(1, w)) - 1];

function computeStats(t){
  const b = TOW[t.kind];
  const s = {dmg:b.dmg, rate:b.rate, range:b.range, rad:b.rad || 0, slow:b.slow || 0, slowDur:b.slowDur, chain:b.chain || 0, decay:b.decay,
             multi:1, crit:0, critMul:G.critMul, armor:b.armor, bossMul:b.bossMul, starts:1, shieldMul:1, bombs:1, hash: t.kind === 'miner' ? 1 : 0};
  PATHS[t.kind].forEach((p, i) => { for (let k = 0; k < t.p[i]; k++) p.tiers[k][3](s); });
  if (S.master[t.kind]) s.dmg *= G.masterDmg;
  if (!s.auraR) s.auraR = s.range;
  return s;
}
const refreshStats = () => { for (const t of S.towers) t.s = computeStats(t); };
const secCap = () => mod('breaker') ? G.secCapBreaker : G.secCap;
function pathCap(t, i){
  const sec = secCap(), others = [0,1,2].filter(j => j !== i && t.p[j] > 0);
  if (t.p[i] === 0 && others.length >= 2) return {cap:0, why:tr('已在发展另外两条路线')};
  if (others.some(j => t.p[j] > sec)) return {cap:sec, why:tf('次路线最多 {n} 级', {n:sec})};
  return {cap:5, why:''};
}
function roleOf(t, i){
  const sec = secCap();
  if (t.p[i] > sec) return 'main';
  if (t.p[i] > 0 && [0,1,2].some(j => j !== i && t.p[j] > sec)) return 'sec';
  if (pathCap(t, i).cap === 0) return 'lock';
  return '';
}
const upCost = (t, i) => Math.round(PATHS[t.kind][i].tiers[t.p[i]][1] * S.costMult * (S.master[t.kind] ? G.masterCost : 1) * (S.coupons > 0 ? G.couponMult : 1));
const code = t => t.p.join('-');

const hpOf = (k, w) => { const r = waveRow(w); return k === 'norm' ? r.normHp : k === 'arm' ? r.armHp : k === 'rain' ? r.normHp * G.hpRain : k === 'hop' ? r.normHp * G.hpHop : k === 'phones' ? r.normHp * G.hpPhones : k === 'whale' ? r.armHp * G.hpWhale : (r.bossHp || r.armHp * 10); };
function waveList(w){
  const r = waveRow(w), n = Math.max(0, Math.round(r.normals)), a = Math.max(0, Math.round(r.armored));
  const L = []; let ai = 0; const every = a ? Math.max(1, Math.floor(n / a)) : 0;
  for (let i = 0; i < n; i++) { L.push('norm'); if (a && ai < a && i % every === 0) { L.push('arm'); ai++; } }
  while (ai < a) { L.push('arm'); ai++; }
  const sp = []; for (const k of FOE_IDS) if (E[k]) for (let i = 0; i < Math.round(+r[k] || 0); i++) sp.push(k);
  for (let i = sp.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [sp[i], sp[j]] = [sp[j], sp[i]]; }
  sp.forEach((k, i) => L.splice(Math.round((i + 1) * (L.length + 1) / (sp.length + 1)), 0, k));
  if (+r.boss && Object.keys(BOSS).length) L.push('boss');
  return L;
}
function freeUpgrade(){
  const opts = [];
  for (const t of S.towers) for (let i = 0; i < 3; i++) if (t.p[i] < pathCap(t, i).cap) opts.push([t, i, t.p[i]]);
  if (!opts.length) { S.gold += G.freeupFallback; return; }
  const best = Math.max(...opts.map(o => o[2]));
  const top = opts.filter(o => o[2] === best);
  const [t, i] = top[Math.floor(Math.random() * top.length)];
  t.p[i]++; t.s = computeStats(t);
  S.pendingFx.push(() => { burst(t.x, t.y, PCOL[i], 24, 120); floatText(t.x, t.y - 24, tf('鞋匠 → {c}', {c:code(t)}), {size:13, col:'#ffcf3a', life:1.2}); });
}
const cName = c => c.m ? tf('{x}徽章', {x: tr(TOW[c.m].short)}) : tr(c.name);
const cDesc = c => c.m ? tf('{x}效果 +25%，升级费用 −20%', {x: tr(TOW[c.m].name)}) : tr(c.desc);
function rollDraft(minRank){
  let pool = CARDS.filter(c => (c.stack || !S.picked.has(c.id)) && (!c.req || c.req(c)) && RW[c.rar] > 0 && !(S.mode === 'camp' && c.id.startsWith('u_')));
  if (minRank) { const hi = pool.filter(c => RANK[c.rar] >= minRank); if (hi.length >= 3) pool = hi; }
  const out = [];
  while (out.length < 3 && pool.length) {
    const tot = pool.reduce((s, c) => s + RW[c.rar], 0);
    let r = Math.random() * tot, i = 0;
    for (; i < pool.length; i++) { r -= RW[pool[i].rar]; if (r <= 0) break; }
    out.push(pool.splice(Math.min(i, pool.length - 1), 1)[0]);
  }
  return out;
}
const rollAffix = n => pickN(Object.keys(AFX), Math.max(0, Math.round(n)));
function makeRoutes(){
  const n = S.wave + 1, r = waveRow(n);
  if (+r.boss && Object.keys(BOSS).length) return [{type:'boss', boss:bossFor(n), affix:rollAffix(r.affixes)}];
  if (n === 1) return [{type:'normal', affix:rollAffix(r.affixes)}];
  return [{type:'normal', affix:rollAffix(r.affixes)}, {type:'elite', affix:rollAffix(G.eliteAffixes)}];
}

// ---------- Chapter 1 · Genesis (2008–2010): levels, dialogue, knowledge cards ----------
// Text objects carry zh / en / fr; L() picks the current language.
const L = o => o == null ? '' : typeof o === 'string' ? o : (o[LANG] || o.zh || '');
const SPK = {
  kicks: {name:{zh:'小跑', en:'Kicks', fr:'Kicks'}, col:'#3ec7c0',
    svg:'<svg viewBox="0 0 48 48"><circle cx="24" cy="26" r="15" fill="#ffe0c8" stroke="#3b2a1e" stroke-width="2.5"/><path d="M9 24 Q9 8 24 8 Q39 8 39 24 Q31 15 22 18 Q14 15 9 24 Z" fill="#c0452f" stroke="#3b2a1e" stroke-width="2.5"/><path d="M10 21 H38" stroke="#3ec7c0" stroke-width="4"/><circle cx="29" cy="27" r="2" fill="#1d1a28"/><circle cx="19" cy="27" r="2" fill="#1d1a28"/><path d="M20 34 Q24 37 28 34" fill="none" stroke="#1d1a28" stroke-width="2" stroke-linecap="round"/></svg>'},
  blocky: {name:{zh:'区块君', en:'Blocky', fr:'Blocky'}, col:'#f7931a',
    svg:'<svg viewBox="0 0 48 48"><path d="M24 5 L42 14 V34 L24 43 L6 34 V14 Z" fill="#f7931a" stroke="#3b2a1e" stroke-width="2.5" stroke-linejoin="round"/><path d="M6 14 L24 23 L42 14 M24 23 V43" fill="none" stroke="#3b2a1e" stroke-width="2"/><path d="M24 23 L42 14 V34 L24 43 Z" fill="#d9780a"/><circle cx="12" cy="24" r="2.2" fill="#1d1a28"/><circle cx="19" cy="27" r="2.2" fill="#1d1a28"/><path d="M12 31 Q16 35 20 32" fill="none" stroke="#1d1a28" stroke-width="2" stroke-linecap="round"/></svg>'},
  hood: {name:{zh:'神秘兜帽人', en:'Hooded Stranger', fr:'L’inconnu à capuche'}, col:'#9aa3c7',
    svg:'<svg viewBox="0 0 48 48"><path d="M24 4 Q42 6 42 28 L42 44 H6 V28 Q6 6 24 4 Z" fill="#2b2a3a" stroke="#1d1a28" stroke-width="2.5"/><ellipse cx="24" cy="27" rx="11" ry="12" fill="#0d0c14"/><circle cx="20" cy="27" r="1.6" fill="#f7931a"/><circle cx="28" cy="27" r="1.6" fill="#f7931a"/></svg>'},
  fud: {name:{zh:'FUD 大叔', en:'Uncle FUD', fr:'Tonton FUD'}, col:'#e0473a',
    svg:'<svg viewBox="0 0 48 48"><circle cx="24" cy="26" r="16" fill="#f2c9a8" stroke="#3b2a1e" stroke-width="2.5"/><path d="M8 22 Q10 8 24 8 Q38 8 40 22 Q36 14 24 15 Q12 14 8 22 Z" fill="#8a8f99" stroke="#3b2a1e" stroke-width="2"/><path d="M15 22 L21 25 M33 22 L27 25" stroke="#1d1a28" stroke-width="2.5" stroke-linecap="round"/><circle cx="19" cy="28" r="1.8" fill="#1d1a28"/><circle cx="29" cy="28" r="1.8" fill="#1d1a28"/><path d="M17 36 Q24 31 31 36" fill="none" stroke="#1d1a28" stroke-width="2.4" stroke-linecap="round"/><rect x="13" y="25" width="9" height="6" rx="2" fill="none" stroke="#1d1a28" stroke-width="1.6"/><rect x="26" y="25" width="9" height="6" rx="2" fill="none" stroke="#1d1a28" stroke-width="1.6"/></svg>'},
};
const ln = (who, zh, en, fr) => [who, {zh, en, fr}];
// wave rows: [normals, armored, normHp, armHp, bossId|null, bossHp, affixes]
const CH1 = [
 {id:'c1l1', date:'2008.10.31', map:'classic', gold:250, unlock:['dart'], fresh:['dart'], net:0, height:0,
  name:{zh:'白皮书', en:'The White Paper', fr:'Le livre blanc'},
  waves:[[14,0,3,0],[20,0,3.5,0],[26,2,4,9],[32,4,4.5,10]],
  intro:[
   ln('blocky','欢迎来到 2008 年！金融危机刚爆发，雷曼兄弟倒闭了，全世界都在骂银行。','Welcome to 2008! The financial crisis just hit, Lehman Brothers collapsed, and the whole world is angry at the banks.','Bienvenue en 2008 ! La crise financière éclate, Lehman Brothers s’effondre et le monde entier peste contre les banques.'),
   ln('kicks','我只是在晨跑，怎么一头跑进时光隧道了？','I was just on a morning jog. How did I run into a time tunnel?','Je faisais juste mon footing. Comment j’ai atterri dans un tunnel temporel ?'),
   ln('blocky','别慌。今天是 10 月 31 日，一个叫“中本聪”的人刚发布了一份 9 页的论文。','Relax. It’s October 31, and someone called “Satoshi Nakamoto” just published a 9-page paper.','Pas de panique. Nous sommes le 31 octobre, et un certain « Satoshi Nakamoto » vient de publier un article de 9 pages.'),
   ln('hood','《比特币：一种点对点的电子现金系统》。','“Bitcoin: A Peer-to-Peer Electronic Cash System.”','« Bitcoin : un système de monnaie électronique pair-à-pair. »'),
   ln('fud','又一个空气币！小的们，冲过去把这份白皮书撕了！','Another vapourware coin! Runners, charge in and rip up that paper!','Encore une monnaie de pacotille ! Les coureurs, foncez déchirer ce papier !'),
   ln('blocky','FUD 大叔的跑团来了。点跑道旁的石台，放易拉罐投手拦住他们！','Here comes Uncle FUD’s running club. Tap a stone pad beside the track and place a Can Thrower!','Voilà le club de course de Tonton FUD. Touche un socle près de la piste et pose un Lanceur de canettes !')],
  beats:{3:[
   ln('fud','没有银行的钱？哈！不出一年就归零！','Money without banks? Ha! It’ll be worth zero within a year!','De l’argent sans banque ? Ha ! Ça vaudra zéro dans un an !'),
   ln('blocky','“归零”这句话，他会一直喊十几年。习惯就好。','He’ll keep shouting “zero” for over a decade. You’ll get used to it.','Il va crier « zéro » pendant plus de dix ans. Tu t’y habitueras.')]},
  outro:[
   ln('kicks','守住了！所以“点对点”到底是什么意思？','We held! So what does “peer-to-peer” actually mean?','On a tenu ! Alors « pair-à-pair », ça veut dire quoi ?'),
   ln('blocky','就是你把钱直接付给我，中间不经过银行。账本也不归哪家公司管，网络里的每台电脑都存着一份。','You pay me directly, no bank in the middle. And no company owns the ledger: every computer on the network keeps a copy.','Tu me paies directement, sans banque au milieu. Et aucune entreprise ne tient le registre : chaque ordinateur du réseau en garde une copie.')],
  card:{title:{zh:'比特币白皮书', en:'The Bitcoin white paper', fr:'Le livre blanc de Bitcoin'}, pts:[
   {zh:'2008 年 10 月 31 日，中本聪把一篇 9 页的论文发到了密码学邮件列表，题为《比特币：一种点对点的电子现金系统》。', en:'On October 31, 2008, Satoshi Nakamoto posted a 9-page paper to a cryptography mailing list: “Bitcoin: A Peer-to-Peer Electronic Cash System.”', fr:'Le 31 octobre 2008, Satoshi Nakamoto publie sur une liste de diffusion de cryptographie un article de 9 pages : « Bitcoin : un système de monnaie électronique pair-à-pair ».'},
   {zh:'核心想法：不需要银行这类“可信第三方”，由所有人共同维护一本公开账本。这就是“去中心化”。', en:'The core idea: no “trusted third party” like a bank; everyone maintains one public ledger together. That is “decentralisation.”', fr:'L’idée clé : pas de « tiers de confiance » comme une banque ; tout le monde tient ensemble un registre public. C’est la « décentralisation ».'},
   {zh:'至今没有人能确认中本聪是谁，是一个人还是一群人。', en:'To this day nobody can confirm who Satoshi is, or whether it was one person or a group.', fr:'À ce jour, personne ne sait qui est Satoshi, ni s’il s’agit d’une personne ou d’un groupe.'}]}},

 {id:'c1l2', date:'2009.01.03', map:'twin', gold:400, unlock:['dart','miner'], fresh:['miner'], net:1, height:0,
  name:{zh:'创世区块', en:'The Genesis Block', fr:'Le bloc de genèse'},
  waves:[[12,0,3,0],[18,0,3.5,0],[22,2,4,8],[28,3,4.5,9],[32,4,5,10]],
  intro:[
   ln('blocky','2009 年 1 月 3 日，比特币网络的第一个区块诞生了，它叫“创世区块”。','January 3, 2009: the first block of the Bitcoin network is born. It’s called the “genesis block.”','3 janvier 2009 : le premier bloc du réseau Bitcoin voit le jour. On l’appelle le « bloc de genèse ».'),
   ln('hood','The Times 03/Jan/2009 Chancellor on brink of second bailout for banks','The Times 03/Jan/2009 Chancellor on brink of second bailout for banks','The Times 03/Jan/2009 Chancellor on brink of second bailout for banks'),
   ln('kicks','他在区块里塞了一条报纸头条？','He hid a newspaper headline inside the block?','Il a caché un titre de journal dans le bloc ?'),
   ln('blocky','《泰晤士报》当天的头条：“财政大臣即将第二次救助银行”。像是在说：这就是我们需要比特币的原因。','That day’s front page of The Times: “Chancellor on brink of second bailout for banks.” As if to say: this is why we need Bitcoin.','La une du Times ce jour-là : « Le chancelier sur le point d’un second renflouement des banques ». Comme pour dire : voilà pourquoi il faut Bitcoin.'),
   ln('blocky','新装置：矿机！它不打人，但比赛中会不停算题。算赢了就能“挖到区块”，拿到聪，还能开一次三选一！','New device: the Miner! It doesn’t hit anyone, but it keeps crunching during the race. Win a block and you get sats plus a pick-one-of-three!','Nouveau dispositif : le Mineur ! Il ne frappe personne, mais il calcule sans arrêt pendant la course. Gagne un bloc : des sats et un choix parmi trois !'),
   ln('kicks','等等，这张图有两条跑道！我先在两边各放一个易拉罐，再把矿机塞到不碍事的角落。','Wait, this map has two tracks! I’ll put a can thrower on each side first, then tuck the miner into a quiet corner.','Attends, cette carte a deux pistes ! Je mets d’abord un lanceur de canettes de chaque côté, puis je cache la mineuse dans un coin tranquille.')],
  beats:{3:[
   ln('blocky','看右边的挖矿面板：你的算力越高，抢到区块的几率越大。全网每隔一段时间就出一个块，谁先算出来归谁。','Check the mining panel: the more hash power you have, the better your odds. The network makes a block every so often, and whoever solves it first wins it.','Regarde le panneau de minage : plus ta puissance de calcul est haute, plus tu as de chances. Le réseau produit un bloc régulièrement, et le premier à le résoudre le remporte.'),
   ln('fud','一群电脑解数学题，能解出钱来？笑死！','A bunch of computers solving maths puzzles makes money? Hilarious!','Des ordis qui résolvent des énigmes et ça fait de l’argent ? Hilarant !')]},
  outro:[
   ln('blocky','冷知识：创世区块的 50 枚奖励永远花不出去，算是代码里的一个彩蛋。','Fun fact: the 50-coin reward in the genesis block can never be spent. A little easter egg in the code.','Anecdote : la récompense de 50 pièces du bloc de genèse ne pourra jamais être dépensée. Un petit easter egg dans le code.')],
  card:{title:{zh:'区块与挖矿', en:'Blocks and mining', fr:'Blocs et minage'}, pts:[
   {zh:'区块就像账本的一页，一页页按顺序连起来，就是“区块链”。', en:'A block is like one page of the ledger; pages chained in order make the “blockchain.”', fr:'Un bloc, c’est comme une page du registre ; les pages enchaînées dans l’ordre forment la « blockchain ».'},
   {zh:'矿工用电脑反复计算，谁先算出答案，谁就把下一页写进账本，并获得新币作为奖励（最初每块 50 枚）。', en:'Miners compute over and over; whoever finds the answer first writes the next page and earns new coins (50 per block at first).', fr:'Les mineurs calculent sans relâche ; le premier qui trouve la réponse écrit la page suivante et gagne de nouvelles pièces (50 par bloc au début).'},
   {zh:'1 枚比特币 = 1 亿“聪”，聪是比特币的最小单位，以中本聪命名。', en:'1 bitcoin = 100 million “sats.” The sat is bitcoin’s smallest unit, named after Satoshi.', fr:'1 bitcoin = 100 millions de « sats ». Le sat est la plus petite unité du bitcoin, nommée d’après Satoshi.'}]}},

 {id:'c1l3', date:'2009.01.12', map:'fork', gold:320, unlock:['dart','miner','bomb','frost'], fresh:['bomb','frost'], net:1.5, height:160,
  name:{zh:'Running bitcoin', en:'Running bitcoin', fr:'Running bitcoin'},
  waves:[[20,2,4,9],[26,4,4.5,10],[32,6,5,10.5,null,0,['swift']],[38,8,5.5,11],[44,10,6,12]],
  intro:[
   ln('blocky','2009 年 1 月 10 日，程序员 Hal Finney 发了一条推特：“Running bitcoin”。','January 10, 2009: programmer Hal Finney tweets “Running bitcoin.”','10 janvier 2009 : le programmeur Hal Finney tweete « Running bitcoin ».'),
   ln('kicks','Running？跑步？那是我们同行啊！','Running? Like jogging? He’s one of us!','Running ? Comme courir ? C’est un collègue !'),
   ln('blocky','他的意思是“正在运行比特币软件”……不过 Hal 本人确实热爱跑步。','He meant he was running the Bitcoin software… but Hal really did love running.','Il voulait dire qu’il faisait tourner le logiciel Bitcoin… mais Hal adorait vraiment courir.'),
   ln('blocky','两天后，中本聪给 Hal 转了 10 枚比特币，这是史上第一笔比特币转账。','Two days later, Satoshi sent Hal 10 bitcoins: the first bitcoin transaction ever.','Deux jours plus tard, Satoshi envoie 10 bitcoins à Hal : la toute première transaction en bitcoin.'),
   ln('blocky','新装置：香蕉皮和洒水器。小提示：先用洒水器把跑者淋湿，再扔香蕉皮，看看会发生什么。','New devices: Banana Peeler and Sprinkler. Tip: soak runners with the sprinkler first, then throw a banana peel and see what happens.','Nouveaux dispositifs : peaux de banane et arroseur. Astuce : mouille d’abord les coureurs, puis lance une peau de banane et regarde ce qui se passe.')],
  beats:{3:[
   ln('fud','转一笔账要等十分钟？我刷卡一秒钟！','Ten minutes to send money? My card takes one second!','Dix minutes pour un virement ? Ma carte met une seconde !'),
   ln('blocky','刷卡是一秒，商家到账可要好几天；跨国汇款更慢，手续费还贵。','The swipe takes a second, but the merchant waits days to get paid; cross-border transfers are slower and pricier.','Le paiement prend une seconde, mais le commerçant attend des jours ; les virements internationaux sont plus lents et plus chers.')]},
  outro:[
   ln('blocky','转账要用“私钥”签名。私钥就像你家大门钥匙，丢了谁也帮不了你。','Every transfer is signed with your “private key.” It’s like your front-door key: lose it and nobody can help you.','Chaque transfert est signé avec ta « clé privée ». C’est comme la clé de ta maison : perdue, personne ne peut t’aider.'),
   ln('kicks','我马上抄十份！','I’ll write down ten copies right now!','J’en recopie dix tout de suite !'),
   ln('blocky','抄可以，千万别拍照发朋友圈。','Copies, sure. Just don’t post a photo of it online.','Des copies, d’accord. Mais ne la poste surtout pas en photo.')],
  card:{title:{zh:'交易与私钥', en:'Transactions and private keys', fr:'Transactions et clés privées'}, pts:[
   {zh:'2009 年 1 月 12 日，中本聪转给 Hal Finney 10 枚比特币，记录在第 170 号区块，是第一笔点对点转账。', en:'On January 12, 2009, Satoshi sent Hal Finney 10 bitcoins, recorded in block 170: the first peer-to-peer transfer.', fr:'Le 12 janvier 2009, Satoshi envoie 10 bitcoins à Hal Finney, inscrits dans le bloc 170 : le premier transfert pair-à-pair.'},
   {zh:'钱包地址像银行卡号，可以公开给别人；私钥像密码，谁拿到私钥，谁就能动用里面的币。', en:'A wallet address is like an account number you can share; the private key is like the password, and whoever holds it controls the coins.', fr:'Une adresse de portefeuille, c’est comme un numéro de compte qu’on peut partager ; la clé privée, c’est le mot de passe : qui la détient contrôle les pièces.'},
   {zh:'交易一旦写进区块就很难撤销，所以转错地址通常追不回来。', en:'Once a transaction is in a block it is very hard to reverse, so coins sent to the wrong address are usually gone.', fr:'Une fois inscrite dans un bloc, une transaction est presque irréversible : envoyer à la mauvaise adresse, c’est souvent perdu.'}]}},

 {id:'c1l4', date:'2009.10.05', map:'merge', gold:330, unlock:['dart','miner','bomb','frost','tesla'], fresh:['tesla'], net:2, height:24800,
  name:{zh:'一美元换 1309 枚', en:'1,309 coins for a dollar', fr:'1 309 pièces pour un dollar'},
  waves:[[24,2,5.8,12.6],[32,6,6.4,13.8,null,0,[],{'rain':3}],[40,8,7.4,14.9,null,0,['regen'],{'rain':3}],[48,10,8.0,16.1,null,0,[],{'hop':4,'rain':2}],[56,14,8.7,17.2,null,0,['shield'],{'rain':4,'hop':6}]],
  intro:[
   ln('blocky','2009 年 10 月，网站 New Liberty Standard 第一次给比特币报了个价：1 美元能买 1309 枚。','October 2009: the site New Liberty Standard posts the first bitcoin price: 1 US dollar buys 1,309 coins.','Octobre 2009 : le site New Liberty Standard publie le premier prix du bitcoin : 1 dollar achète 1 309 pièces.'),
   ln('kicks','1309 枚！那我拿 100 美元买……','1,309! So with 100 dollars I could buy…','1 309 ! Alors avec 100 dollars j’aurais…'),
   ln('blocky','13 万枚。按现在的价格……算了，别算了，伤身体。','About 130,000. At today’s prices… never mind, don’t do the maths, it hurts.','Environ 130 000. Au prix d’aujourd’hui… non, ne calcule pas, ça fait mal.'),
   ln('blocky','这个价是怎么来的？他们按挖矿消耗的电费估算出来的。','Where did that price come from? They estimated it from the electricity cost of mining.','D’où vient ce prix ? Ils l’ont estimé à partir du coût de l’électricité du minage.'),
   ln('blocky','新装置：广场舞音响！神曲会让跑者“发懵”。懵的时候被易拉罐砸、被辣椒油泼，都有惊喜。','New device: the Dance Speaker! The earworm makes runners dizzy. Hit a dizzy runner with a can, or splash chili oil on them, for a surprise.','Nouveau dispositif : l’enceinte de danse ! Le tube rend les coureurs étourdis. Touche-les avec une canette ou de l’huile pimentée pour une surprise.')],
  beats:{2:[
   ln('fud','哈！我请了穿雨衣的兄弟，你的洒水器没用了！','Ha! I hired my raincoat buddies. Your sprinklers are useless now!','Ha ! J’ai engagé mes potes en ciré. Tes arroseurs ne servent plus à rien !'),
   ln('blocky','雨衣跑者不怕水。换香蕉皮、音响，或者混着放。单一装置总会被克制，混搭才稳。','Raincoat runners ignore water. Switch to peels or speakers, or mix them. Any single device can be countered; a mix holds.','Les coureurs en ciré ignorent l’eau. Passe aux peaux ou aux enceintes, ou mélange. Un seul type se fait contrer ; un mélange tient.')],
  4:[
   ln('kicks','那几个怎么一蹦一跳的？香蕉皮全被跳过去了！','Why are those guys bouncing? They’re jumping over every peel!','Pourquoi ils rebondissent ? Ils sautent par-dessus toutes les peaux !'),
   ln('blocky','弹簧鞋跑者。先让音响把他们放懵，懵了就跳不起来，再踩香蕉皮就是“脸着地”。','Spring shoes. Make them dizzy with a speaker first: dizzy runners can’t jump, and the peel gives you a “Faceplant”.','Des ressorts. Étourdis-les d’abord avec une enceinte : ils ne peuvent plus sauter, et la peau donne une « Gamelle ».')],
  3:[
   ln('blocky','2009 年 12 月 30 日，比特币第一次上调挖矿难度：参与挖矿的人变多了，题目就自动变难。','December 30, 2009: bitcoin’s mining difficulty rises for the first time. More people mining means harder puzzles, automatically.','30 décembre 2009 : la difficulté de minage augmente pour la première fois. Plus de mineurs, des énigmes plus dures, automatiquement.')]},
  outro:[
   ln('fud','0.0008 美元一枚？连一颗糖都买不起！','0.0008 dollars a coin? That won’t even buy a sweet!','0,0008 dollar la pièce ? Ça n’achète même pas un bonbon !'),
   ln('blocky','大叔，这句话我先帮你记下来。','I’ll write that one down for you, Uncle.','Je note ta phrase, Tonton.')],
  card:{title:{zh:'价格是怎么来的', en:'Where prices come from', fr:'D’où viennent les prix'}, pts:[
   {zh:'比特币没有官方定价，价格是买卖双方在市场上谈出来的。', en:'Bitcoin has no official price; buyers and sellers agree on it in the market.', fr:'Le bitcoin n’a pas de prix officiel ; acheteurs et vendeurs le fixent sur le marché.'},
   {zh:'第一个公开报价（2009 年 10 月）：1 美元约等于 1309 枚，依据是挖矿的电费成本。', en:'The first public quote (October 2009): 1 dollar ≈ 1,309 coins, based on the electricity cost of mining.', fr:'Première cotation publique (octobre 2009) : 1 dollar ≈ 1 309 pièces, d’après le coût de l’électricité du minage.'},
   {zh:'难度调整：全网算力越大，挖矿越难，让出块时间大致保持在 10 分钟。价格大起大落是加密货币的常态，也是风险所在。', en:'Difficulty adjustment keeps blocks at roughly 10 minutes as hash power grows. Big price swings are normal in crypto, and that is also its risk.', fr:'L’ajustement de difficulté maintient les blocs à environ 10 minutes quand la puissance augmente. Les fortes variations de prix sont normales en crypto, et c’est aussi un risque.'}]}},

 {id:'c1l5', date:'2010.05.22', map:'cross', gold:400, unlock:['dart','miner','bomb','frost','tesla','sniper'], fresh:['sniper'], net:3, height:57030,
  name:{zh:'比特币披萨日', en:'Bitcoin Pizza Day', fr:'Le Bitcoin Pizza Day'},
  waves:[[18,2,5.2,11.5,null,0,[],{'rain':2}],[28,4,5.8,12.6,null,0,[],{'phones':4}],[36,8,6.3,13.8,null,0,['split'],{'phones':4,'hop':3}],[44,10,6.9,14.9,null,0,[],{'whale':1,'phones':5}],[50,12,7.5,16.1,'pizza',300,[],{'whale':2,'rain':3,'hop':3}]],
  intro:[
   ln('blocky','2010 年 5 月 22 日，程序员 Laszlo 用 10000 枚比特币买了两个披萨。','May 22, 2010: programmer Laszlo buys two pizzas for 10,000 bitcoins.','22 mai 2010 : le programmeur Laszlo achète deux pizzas pour 10 000 bitcoins.'),
   ln('kicks','一万枚换两个披萨？！','Ten thousand coins for two pizzas?!','Dix mille pièces pour deux pizzas ?!'),
   ln('blocky','当时大概值 41 美元。这是第一次有人用比特币买到真实的东西，所以每年 5 月 22 日都被叫作“比特币披萨日”。','It was worth about 41 dollars then. It was the first time bitcoin bought something real, so every May 22 is now “Bitcoin Pizza Day.”','Ça valait environ 41 dollars à l’époque. C’était le premier achat réel en bitcoin, d’où le « Bitcoin Pizza Day » chaque 22 mai.'),
   ln('blocky','新装置：鞋盒无人机，全图空投！最后一波小心披萨外卖员，他每掉一盒披萨，就冒出一群披萨跑者。','New device: the Shoebox Drone, map-wide airdrops! In the last wave, watch the pizza courier: every box he drops spawns a swarm of pizza runners.','Nouveau dispositif : le drone à boîtes, largage sur toute la carte ! Dernière vague : attention au livreur, chaque boîte qu’il lâche libère une nuée de coureurs-pizza.')],
  beats:{2:[
   ln('fud','我的人都戴上降噪耳机了，你那破音响吵不到他们！','My crew wears noise-cancelling headphones now. Your speakers can’t touch them!','Mon équipe porte des casques anti-bruit. Tes enceintes ne peuvent plus rien !'),
   ln('kicks','那就易拉罐和无人机伺候。','Then cans and drones it is.','Alors ce sera canettes et drones.')],
  4:[
   ln('blocky','注意，巨鲸来了！币圈管手里有大量币的人叫“巨鲸”，他们一动，价格就跟着晃。','Heads up, a whale! In crypto, people holding huge piles of coins are called “whales”; when they move, the price shakes.','Attention, une baleine ! En crypto, on appelle « baleines » ceux qui ont énormément de pièces ; quand elles bougent, le prix tremble.'),
   ln('blocky','巨鲸皮厚：小打小闹只算三分之一。用升级过的无人机或易拉罐，一下打出 4 点以上。','Whales are tough: small hits only count a third. Use an upgraded drone or cans that hit for 4 or more.','Les baleines sont coriaces : les petits coups ne comptent qu’au tiers. Utilise un drone ou des canettes améliorés qui frappent à 4 ou plus.')],
  3:[
   ln('blocky','冷知识：Laszlo 还是最早用显卡挖矿的人之一。把矿机的「算力」路线升到“显卡挖矿”，算力直接起飞。','Fun fact: Laszlo was also one of the first to mine with a graphics card. Upgrade the Miner’s Hash path to “GPU Mining” and watch it take off.','Anecdote : Laszlo fut aussi l’un des premiers à miner avec une carte graphique. Monte la voie Puissance du Mineur jusqu’à « Minage GPU ».')],
   5:[ln('fud','比特币就配换披萨！','Bitcoin is only good for pizza!','Le bitcoin, c’est juste bon pour des pizzas !')]},
  outro:[
   ln('kicks','我要是 Laszlo，现在肯定悔到睡不着。','If I were Laszlo I’d never sleep again.','Si j’étais Laszlo, je ne dormirais plus jamais.'),
   ln('blocky','他在采访里说过并不后悔：总得有人先拿它买东西，它才真的像钱。','He has said in interviews he doesn’t regret it: someone had to buy something with it first for it to work as money.','Il a dit en interview ne pas regretter : il fallait bien que quelqu’un achète quelque chose en premier pour que ce soit une monnaie.')],
  card:{title:{zh:'比特币作为货币', en:'Bitcoin as money', fr:'Le bitcoin comme monnaie'}, pts:[
   {zh:'2010 年 5 月 22 日，Laszlo Hanyecz 用 10000 枚比特币换了两个披萨，这是第一笔广为人知的实物交易。', en:'On May 22, 2010, Laszlo Hanyecz traded 10,000 bitcoins for two pizzas: the first widely known real-world purchase.', fr:'Le 22 mai 2010, Laszlo Hanyecz échange 10 000 bitcoins contre deux pizzas : le premier achat réel largement connu.'},
   {zh:'货币有三个用途：交换媒介、计价单位、价值储存。披萨交易证明了它能当交换媒介。', en:'Money does three jobs: medium of exchange, unit of account, store of value. The pizza trade proved it could be a medium of exchange.', fr:'La monnaie a trois fonctions : intermédiaire des échanges, unité de compte, réserve de valeur. Les pizzas ont prouvé la première.'},
   {zh:'同一时期，用显卡挖矿开始流行，挖矿的算力竞赛从此开始。', en:'Around the same time, mining with graphics cards took off, and the hash-power race began.', fr:'À la même époque, le minage avec cartes graphiques décolle, et la course à la puissance de calcul commence.'}]}},

 {id:'c1l6', date:'2010.08.15', map:'trident', gold:450, unlock:['dart','miner','bomb','frost','tesla','sniper','gem'], fresh:['gem'], net:4, height:74630,
  name:{zh:'价值溢出', en:'The Value Overflow', fr:'Le débordement de valeur'},
  waves:[[18,2,4.5,10,null,0,[],{'rain':3,'hop':2}],[24,4,5,11,null,0,['swift'],{'phones':4}],[34,8,5.5,12,null,0,[],{'whale':1,'hop':4}],[42,12,6,13,null,0,['shield'],{'rain':5,'phones':5}],[50,14,6.5,14,null,0,['regen'],{'whale':2,'hop':5}],[50,16,7,15,'overflow',340,[],{'whale':2,'rain':4,'phones':4}]],
  intro:[
   ln('blocky','2010 年 7 月，交易所 Mt. Gox 上线，买卖比特币方便多了。','July 2010: the Mt. Gox exchange launches, and buying and selling bitcoin gets much easier.','Juillet 2010 : la plateforme Mt. Gox ouvre, acheter et vendre du bitcoin devient bien plus simple.'),
   ln('blocky','但 8 月 15 日出了大事：有人利用程序漏洞，凭空造出了约 1844 亿枚比特币！','But on August 15 disaster strikes: someone exploits a bug and creates about 184 billion bitcoins out of thin air!','Mais le 15 août, catastrophe : quelqu’un exploite un bug et crée environ 184 milliards de bitcoins à partir de rien !'),
   ln('kicks','不是说总量只有 2100 万枚吗？','Wasn’t the total supposed to be 21 million?','Le total n’était pas censé être de 21 millions ?'),
   ln('blocky','所以这是 bug，叫“价值溢出”：数字太大，把计算撑爆了。','Exactly, it’s a bug called “value overflow”: the number got so big it broke the maths.','Exactement, c’est un bug appelé « débordement de valeur » : le nombre était si grand qu’il a cassé le calcul.'),
   ln('fud','哈哈！看吧，我早说它会崩！','Ha! Told you it would crash!','Ha ! Je vous avais dit que ça s’effondrerait !'),
   ln('blocky','别急，看开发者怎么修。新装置：宝石发射器，三种宝石，三种打法。','Hold on, watch how the developers fix it. New device: the Gem Launcher, three gems, three play styles.','Patience, regarde comment les développeurs réparent ça. Nouveau dispositif : le lance-gemmes, trois gemmes, trois styles.')],
  beats:{6:[
   ln('blocky','溢出怪来了！它倒下时会“溢出”复活，还会分裂成两笔。撑住，修复马上就到！','The Overflow is coming! When it falls it overflows back to life and splits in two. Hold on, the fix is on its way!','Voilà le Débordement ! Quand il tombe, il déborde, revient à la vie et se divise en deux. Tiens bon, le correctif arrive !')]},
  outro:[
   ln('blocky','漏洞被发现后，开发者在几个小时内发布了修复版本，大家改用新软件，出错的那段链被分叉丢掉，1844 亿枚假币从账本上消失了。','Within hours the developers shipped a fix. Everyone upgraded, the broken part of the chain was forked away, and the 184 billion fake coins vanished from the ledger.','En quelques heures, les développeurs publient un correctif. Tout le monde met à jour, la partie fautive de la chaîne est abandonnée par un fork, et les 184 milliards de fausses pièces disparaissent.'),
   ln('kicks','原来区块链也会出错？','So blockchains can break too?','Donc une blockchain peut aussi bugger ?'),
   ln('blocky','会。但代码是公开的，大家都能检查、一起修。这就是开源的力量。','They can. But the code is open, so everyone can check it and fix it together. That’s the power of open source.','Oui. Mais le code est public : tout le monde peut le vérifier et le réparer ensemble. C’est la force de l’open source.'),
   ln('hood','……','…','…'),
   ln('blocky','2010 年 12 月，中本聪在论坛发了最后几条帖子，从此再也没有公开露面。第二章：2011–2013，敬请期待！','In December 2010 Satoshi made his last forum posts and was never seen in public again. Chapter 2: 2011–2013, coming soon!','En décembre 2010, Satoshi publie ses derniers messages sur le forum et disparaît. Chapitre 2 : 2011–2013, bientôt !')],
  card:{title:{zh:'漏洞、分叉与开源', en:'Bugs, forks and open source', fr:'Bugs, forks et open source'}, pts:[
   {zh:'2010 年 8 月 15 日的“价值溢出事件”中，一笔交易凭空造出约 1844 亿枚比特币。', en:'In the “value overflow incident” of August 15, 2010, one transaction created about 184 billion bitcoins out of nothing.', fr:'Lors de l’« incident de débordement de valeur » du 15 août 2010, une transaction a créé environ 184 milliards de bitcoins à partir de rien.'},
   {zh:'开发者几小时内发布修复，大家改用修复后的软件，把出错的那段链“分叉”丢掉。', en:'Developers released a fix within hours; everyone switched to it and the faulty stretch of chain was “forked” away.', fr:'Les développeurs ont publié un correctif en quelques heures ; tout le monde l’a adopté et le tronçon fautif a été abandonné par un « fork ».'},
   {zh:'比特币总量上限 2100 万枚，大约每 4 年新币产量减半一次（“减半”）。', en:'Bitcoin is capped at 21 million coins, and new issuance halves roughly every 4 years (“the halving”).', fr:'Le bitcoin est plafonné à 21 millions de pièces, et l’émission est divisée par deux environ tous les 4 ans (« le halving »).'}]}},
];
// reactions: two statuses meet → something big happens
const REACT = {
  shatter:   {col:'#9fe8ff', name:{zh:'碎冰', en:'Shatter', fr:'Éclat de glace'}, how:{zh:'湿 + 冻', en:'Wet + Frozen', fr:'Mouillé + Gelé'}, desc:{zh:'被淋湿又被冻住的跑者，下一击伤害 ×2.5，碎冰溅到周围。', en:'A wet, frozen runner takes ×2.5 from the next hit and shards spray nearby.', fr:'Un coureur mouillé et gelé subit ×2,5 au prochain coup, et des éclats touchent les voisins.'}},
  aquaplane: {col:'#5ad8ff', name:{zh:'水上漂', en:'Aquaplane', fr:'Aquaplaning'}, how:{zh:'湿 + 香蕉皮', en:'Wet + Banana', fr:'Mouillé + Banane'}, desc:{zh:'湿漉漉的跑者踩到香蕉皮，滑回起点方向一大截，并伤害 ×1.5。', en:'A wet runner who steps on a peel slides back towards the start and takes ×1.5.', fr:'Un coureur mouillé qui marche sur une peau glisse vers le départ et subit ×1,5.'}},
  steam:     {col:'#e8e8e8', name:{zh:'蒸汽', en:'Steam', fr:'Vapeur'}, how:{zh:'辣 + 水', en:'Spicy + Water', fr:'Piment + Eau'}, desc:{zh:'给辣到冒烟的跑者泼水，炸出一团蒸汽，伤害周围所有人，并把他们都淋湿。', en:'Splash a burning runner and a steam cloud bursts out, hitting everyone nearby and soaking them.', fr:'Arrose un coureur en feu : un nuage de vapeur blesse tous les voisins et les mouille.'}},
  rave:      {col:'#ff8fd0', name:{zh:'蹦迪', en:'Rave', fr:'Rave'}, how:{zh:'懵 + 辣', en:'Dizzy + Spicy', fr:'Étourdi + Piment'}, desc:{zh:'又懵又辣的跑者原地蹦迪，倒着跑 1.6 秒。', en:'Dizzy and burning, the runner starts raving and runs backwards for 1.6 s.', fr:'Étourdi et brûlant, le coureur part en rave et court à l’envers 1,6 s.'}},
  bonk:      {col:'#ffd23f', name:{zh:'当头一罐', en:'Bonk', fr:'Bonk'}, how:{zh:'懵 + 易拉罐 / 宝石', en:'Dizzy + Can / Gem', fr:'Étourdi + Canette / Gemme'}, desc:{zh:'砸中发懵的跑者必定暴击，伤害 ×2.5，还会晕 0.3 秒。', en:'Hitting a dizzy runner is a guaranteed crit for ×2.5 and stuns for 0.3 s.', fr:'Toucher un coureur étourdi : critique garanti ×2,5 et 0,3 s d’étourdissement.'}},
  faceplant: {col:'#ff5ad1', name:{zh:'脸着地', en:'Faceplant', fr:'Gamelle'}, how:{zh:'懵 + 香蕉皮（弹簧鞋跑者）', en:'Dizzy + Banana (spring-shoe runner)', fr:'Étourdi + Banane (coureur à ressorts)'}, desc:{zh:'发懵的弹簧鞋跑者跳不起来，一脚踩中香蕉皮直接脸着地：伤害 ×2，晕 1 秒。', en:'A dizzy spring-shoe runner can’t jump, lands on the peel face-first: ×2 damage and a 1 s stun.', fr:'Étourdi, le coureur à ressorts ne peut pas sauter et s’écrase sur la peau : dégâts ×2 et 1 s d’étourdissement.'}},
  thermal:   {col:'#ff6a3d', name:{zh:'冷热冲击', en:'Thermal Shock', fr:'Choc thermique'}, how:{zh:'冻 + 矿机热风', en:'Frozen + Miner heat', fr:'Gelé + Chaleur du mineur'}, desc:{zh:'矿机的热风吹到冻住的跑者，冰块瞬间炸裂，扣掉大量体力。', en:'Miner heat hits a frozen runner and the ice bursts, dealing a big chunk of stamina.', fr:'La chaleur du mineur frappe un coureur gelé : la glace éclate et lui retire beaucoup d’endurance.'}},
};
// statuses each device applies (shown in the build/upgrade pop-up)
const FOES = {
  rain:   {col:'#ffd23f', name:{zh:'雨衣跑者', en:'Raincoat Runner', fr:'Coureur en ciré'},
           trait:{zh:'穿着雨衣：洒水器打不湿、减不了速，也冻不住他。', en:'Wears a raincoat: sprinklers can’t soak, slow or freeze him.', fr:'Porte un ciré : les arroseurs ne peuvent ni le mouiller, ni le ralentir, ni le geler.'},
           tip:{zh:'换香蕉皮、音响或蓝宝石来对付他。', en:'Switch to banana peels, speakers or the sapphire.', fr:'Passe aux peaux de banane, aux enceintes ou au saphir.'}},
  hop:    {col:'#ff5ad1', name:{zh:'弹簧鞋跑者', en:'Spring-Shoe Runner', fr:'Coureur à ressorts'},
           trait:{zh:'穿弹簧鞋：看见香蕉皮就跳过去，只吃 20% 效果，也不会滑倒。', en:'Bounces over banana peels: takes only 20% and never slips.', fr:'Saute par-dessus les peaux de banane : 20 % d’effet seulement, il ne glisse jamais.'},
           tip:{zh:'先用音响把他弄懵：懵了就跳不起来，踩到香蕉皮会脸着地。', en:'Make him dizzy with a speaker first: dizzy runners can’t jump, and the peel sends them face-first.', fr:'Étourdis-le d’abord avec une enceinte : il ne peut plus sauter et la peau l’envoie face contre terre.'}},
  phones: {col:'#ff8fd0', name:{zh:'降噪耳机跑者', en:'Headphones Runner', fr:'Coureur au casque'},
           trait:{zh:'戴着降噪耳机：广场舞音响对他完全无效，洗脑神曲也传不到他身上。', en:'Noise-cancelling headphones: speakers do nothing to him and the song can’t chain through him.', fr:'Casque anti-bruit : les enceintes ne lui font rien et la chanson ne passe pas par lui.'},
           tip:{zh:'用易拉罐、无人机或洒水器。', en:'Use cans, drones or sprinklers.', fr:'Utilise les canettes, les drones ou les arroseurs.'}},
  whale:  {col:'#4a78b8', name:{zh:'巨鲸', en:'Whale', fr:'Baleine'},
           trait:{zh:'体力超厚：单次效果不到 4 点的攻击只算三分之一；不会被晕、冻住或击退。', en:'Massive stamina: hits under 4 count for a third, and it can’t be stunned, frozen or knocked back.', fr:'Endurance énorme : les coups de moins de 4 ne comptent qu’au tiers, et elle ne peut être ni étourdie, ni gelée, ni repoussée.'},
           tip:{zh:'用升级过的大威力装置（无人机、红宝石、高级易拉罐），或者辣椒油这种持续伤害。', en:'Use upgraded heavy hitters (drone, ruby, high-tier cans) or damage over time such as chili oil.', fr:'Utilise des frappes lourdes améliorées (drone, rubis, canettes haut niveau) ou des dégâts continus comme l’huile pimentée.'},
           fact:{zh:'币圈把手里有大量币的人叫“巨鲸”，他们一买一卖就能让价格大起大落。', en:'In crypto, people holding huge amounts of coins are called “whales”: one big buy or sell can swing the price.', fr:'En crypto, on appelle « baleines » ceux qui détiennent énormément de pièces : un seul gros achat ou vente peut faire bouger le prix.'}},
};
const FOE_IDS = Object.keys(FOES);
const KIND_IMMUNE = {frost:['rain'], bomb:['hop'], tesla:['phones']};
const KIND_STATUS = {dart:[], bomb:['slip', 'spicy'], frost:['wet', 'frozen'], sniper:[], tesla:['dizzy'], gem:['frozen'], miner:['heat']};
const STATUS_NAME = {wet:{zh:'湿', en:'Wet', fr:'Mouillé'}, slip:{zh:'滑', en:'Slippery', fr:'Glissant'}, spicy:{zh:'辣', en:'Spicy', fr:'Pimenté'}, frozen:{zh:'冻', en:'Frozen', fr:'Gelé'}, dizzy:{zh:'懵', en:'Dizzy', fr:'Étourdi'}, heat:{zh:'热', en:'Heat', fr:'Chaleur'}};
const KIND_REACT = {dart:['bonk'], bomb:['aquaplane', 'rave', 'faceplant'], frost:['shatter', 'aquaplane', 'steam'], sniper:['shatter'], tesla:['rave', 'bonk', 'faceplant'], gem:['bonk', 'shatter'], miner:['thermal']};

// ---------- state ----------
let S;
function newGame(lvId){
  const speed = S ? S.speed : 1, lvl = lvId ? CH1.find(l => l.id === lvId) : null;
  flowToken++; setWaves(lvl); bgKey = '';
  const pick = mapSel.value, ids = Object.keys(MAPS);
  useMap(lvl && MAPS[lvl.map] ? lvl.map : MAPS[pick] ? pick : ids[Math.floor(Math.random() * ids.length)]);
  S = {gold:G.startGold, lives:G.startLives, wave:0, state:'draft', enemies:[], towers:[], shots:[], parts:[], texts:[], delay:[], bolts:[], fires:[],
       fallers:[], shoes:[], slimes:[], spawnRoute:Math.floor(Math.random() * 9), drops:[], peels:[], notes:[], spawnQ:[], spawnT:0, between:0, combo:0, lastKill:-9, frenzy:0, slowmo:0, shake:0, flash:0, iceFlash:0, t:0,
       killVal:0, possible:0, noLeak:0, leaked:false, elites:0, sel:null, speed, banner:null,
       unlocked:['dart'], bossPlan:(() => { const ids = Object.keys(BOSS).filter(id => !CAMP_BOSS.has(id)), p = pickN(ids, BOSS_WAVES.length); while (ids.length && p.length < BOSS_WAVES.length) p.push(ids[Math.floor(Math.random() * ids.length)]); return p; })(), picked:new Set(), mods:new Set(), taken:[], master:{}, coupons:0, pendingFx:[],
       dmgMult:1, critBonus:0, costMult:1, hpMult:1, spdMult:1, goldMult:1, globalDmg:0,
       frenzyNeed:G.frenzyNeed, padTokens:0, placing:false, pendingRare:false, cur:{type:'normal', affix:[]}, next:null, rerollCost:G.rerollBase, offer:[], routes:[], step:'card', title:''};
  Object.assign(S, {mode: lvl ? 'camp' : 'free', level:lvl, sats:0, satsEarned:0, height: lvl ? lvl.height : 0, blockT:G.blockTarget * .6, net: lvl ? lvl.net : G.freeNet,
    blocksWon:0, netBlocks:0, reacts:{}, draftQ:0, hitstop:0, blockDraft:false, story:null, campRes:null});
  if (lvl) { S.unlocked = lvl.unlock.slice(); S.gold = lvl.gold; S.next = campNext(1); }
  meta.runs++; saveMeta();
  lastDock = ''; lastGo = ''; lastBuild = -1; popKey = '';
  S.firstDraft = () => openDraft(() => tr('开局：开启起手神秘箱'), () => tf('本局跑道：{x}。{d}', {x:tr(MAPS[CUR_MAP].name), d:tr(MAPS[CUR_MAP].desc)}) + ' ' + tr('对手公会的跑者要冲过你的领地。现在只有易拉罐投手，第 3 波开始出现耐力跑者。'));
  if (lvl) { S.afterCount = () => { S.state = 'ready'; ov.hidden = true; lastGo = ''; }; showStory(lvl.intro, () => startCountdown()); }
  else { S.afterCount = S.firstDraft; if (!introDone) { S.state = 'intro'; renderOverlay(); } else startCountdown(); }
}
let introDone = false, flowToken = 0;
// 3-2-1 before the opening box; any newer game cancels an older countdown
function startCountdown(){
  const tok = ++flowToken; introDone = true; S.state = 'count';
  const steps = [3, 2, 1, 0];
  const tick = i => {
    if (tok !== flowToken) return;
    if (i >= steps.length) { (S.afterCount || S.firstDraft)(); return; }
    const n = steps[i]; S.countN = n; renderOverlay();
    if (n) tone(n === 1 ? 660 : 520, .14, 'square', .05, 0, .2); else { tone(880, .25, 'triangle', .06, 0, .3); tone(1320, .25, 'triangle', .04, 0, .3, .08); }
    setTimeout(() => tick(i + 1), n ? 720 : 420);
  };
  tick(0);
}
const warmEl = document.getElementById('warm'), talentEl = document.getElementById('talent');
const talentTier = () => Number(talentEl.value) || 0;
const talentBonus = () => [0, G.talentBonus1, G.talentBonus2, G.talentBonus3][talentTier()] || 0;
const runBoost = () => (warmEl.checked ? G.warmBonus : 0) + talentBonus();
const mult = () => (1 + runBoost()) * S.dmgMult * (1 + S.globalDmg);
const pct = v => Math.round(v * 100);
function fillBoost(){
  const cur = talentEl.value || '0';
  talentEl.innerHTML = [0, 1, 2, 3].map(i => `<option value="${i}">${i === 0 ? tf('累计 {r} RP · 未解锁', {r:0}) : tf('累计 {r} RP · {t} 档 +{b}%', {r:G['talentRP' + i], t:i, b:pct(G['talentBonus' + i])})}</option>`).join('');
  talentEl.value = cur;
  $('warmTxt').textContent = tf('今日热身：今天在 STEPN 已跑满 {k} km → 当天所有对局装置效果 +{b}%', {k:G.warmKm, b:pct(G.warmBonus)});
  $('talentHelp').textContent = tf('天赋怎么提高：每次真实跑步获得 RP（跑步积分）——前 5 km 每 km {a} RP，5–10 km 每 km {b} RP，单日最多 {c} RP。累计 RP 达到 {t1} / {t2} / {t3} 自动解锁一 / 二 / 三档公会天赋，全部装置效果 +{p1}% / +{p2}% / +{p3}%。按每周跑 4 次、每次 4.5 km 计算，大约 1 周、3 周、7 周解锁。',
    {a:G.rpPerKm1, b:G.rpPerKm2, c:G.rpDailyCap, t1:G.talentRP1, t2:G.talentRP2, t3:G.talentRP3, p1:pct(G.talentBonus1), p2:pct(G.talentBonus2), p3:pct(G.talentBonus3)});
  $('boostTotal').textContent = tf('当前跑步加成：装置效果 +{n}%', {n:pct(runBoost())});
}
warmEl.addEventListener('change', fillBoost); talentEl.addEventListener('change', fillBoost);
const cost = k => Math.round(TOW[k].cost * S.costMult);
const score = () => {
  if (!S.wave) return {k:0, l:0, c:0, total:0};
  const k = S.possible ? Math.round(S.killVal / S.possible * G.scoreKill) : 0, l = Math.round(Math.min(G.startLives, S.lives) / G.startLives * G.scoreLives), c = Math.round(S.noLeak / WAVES.length * G.scoreClean);
  return {k, l, c, total: Math.min(G.scoreKill + G.scoreLives + G.scoreClean, k + l + c)};
};

// ---------- audio: stadium bus (compressor + reverb), sfx, music ----------
let AC = null, muted = false, musicOn = true, master = null, wetIn = null, noiseBuf = null;
function ensureAudio(){
  if (!AC) {
    try {
      AC = new (window.AudioContext || window.webkitAudioContext)();
      const comp = AC.createDynamicsCompressor(); comp.threshold.value = -16; comp.ratio.value = 4; comp.attack.value = .004; comp.release.value = .2;
      comp.connect(AC.destination);
      master = AC.createGain(); master.gain.value = .85; master.connect(comp);
      const conv = AC.createConvolver(), len = AC.sampleRate * 2.6, ir = AC.createBuffer(2, len, AC.sampleRate);
      for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random()*2-1) * Math.pow(1 - i/len, 3.2); }
      conv.buffer = ir; wetIn = AC.createGain(); wetIn.gain.value = .35; wetIn.connect(conv); conv.connect(master);
      noiseBuf = AC.createBuffer(1, AC.sampleRate * 2, AC.sampleRate);
      const nd = noiseBuf.getChannelData(0); for (let i = 0; i < nd.length; i++) nd[i] = Math.random()*2-1;
    } catch (e) { AC = null; }
  }
  if (AC && AC.state === 'suspended') AC.resume();
}
const live = () => AC && !muted;
function out(node, wet){ node.connect(master); if (wet) { const g = AC.createGain(); g.gain.value = wet; node.connect(g); g.connect(wetIn); } }
function env(g, t, a, d, v){ g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(Math.max(.0002, v), t + a); g.gain.exponentialRampToValueAtTime(.0001, t + a + d); }
function tone(f, dur, type='square', vol=.04, slide=0, wet=.15, when=0){
  if (!live()) return;
  const t = AC.currentTime + when, o = AC.createOscillator(), g = AC.createGain();
  o.type = type; o.frequency.setValueAtTime(f, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, f*slide), t + dur);
  env(g, t, .004, dur, vol); o.connect(g); out(g, wet); o.start(t); o.stop(t + dur + .05);
}
function noise(dur, {type='lowpass', freq=1000, to=0, q=.7, vol=.2, wet=.2, when=0, attack=.003}={}){
  if (!live()) return;
  const t = AC.currentTime + when, src = AC.createBufferSource(), f = AC.createBiquadFilter(), g = AC.createGain();
  src.buffer = noiseBuf; src.loop = true; f.type = type; f.Q.value = q; f.frequency.setValueAtTime(freq, t);
  if (to) f.frequency.exponentialRampToValueAtTime(to, t + dur);
  env(g, t, attack, dur, vol); src.connect(f).connect(g); out(g, wet);
  src.start(t, Math.random()); src.stop(t + attack + dur + .05);
}
function sub(f0, f1, dur, vol, when=0){
  if (!live()) return;
  const t = AC.currentTime + when, o = AC.createOscillator(), g = AC.createGain();
  o.type = 'sine'; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
  env(g, t, .003, dur, vol); o.connect(g); out(g, .04); o.start(t); o.stop(t + dur + .05);
}
// brass section: detuned saws through an opening lowpass
function brass(freqs, dur=.5, vol=.05, when=0, bright=2600){
  if (!live()) return;
  const t = AC.currentTime + when, f = AC.createBiquadFilter(), g = AC.createGain();
  f.type = 'lowpass'; f.Q.value = 1.2; f.frequency.setValueAtTime(350, t); f.frequency.exponentialRampToValueAtTime(bright, t + .06); f.frequency.exponentialRampToValueAtTime(900, t + dur);
  g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + .035); g.gain.setValueAtTime(vol, t + dur * .6); g.gain.exponentialRampToValueAtTime(.0001, t + dur);
  f.connect(g); out(g, .4);
  for (const fr of freqs) for (const det of [-7, 7]) {
    const o = AC.createOscillator(); o.type = 'sawtooth'; o.frequency.value = fr; o.detune.value = det;
    o.connect(f); o.start(t); o.stop(t + dur + .05);
  }
}
const cymbal = (vol=.12, dur=1.4, when=0) => noise(dur, {type:'highpass', freq:6500, vol, wet:.45, when});
function cheer(vol=.1, dur=1.8, when=0){
  if (!live()) return;
  for (const [fq, v] of [[1100, 1], [2300, .6], [650, .7]]) noise(dur, {type:'bandpass', freq:fq * rnd(.9, 1.1), q:.8, vol:vol * v, wet:.5, when, attack:.25});
  for (let i = 0; i < 6; i++) tone(rnd(1800, 2600), .08, 'sine', vol * .25, 1.15, .4, when + rnd(.1, dur * .6));
}
const riser = (dur=.7) => { noise(dur, {type:'bandpass', freq:300, to:5000, q:2, vol:.12, wet:.3, attack:dur*.8}); tone(220, dur, 'sawtooth', .025, 4, .3); };
let lastBoom = 0, lastPop = 0, lastCoin = 0;
function boom(vol=.18){ noise(.45, {freq:1100, to:200, vol, wet:.3}); sub(120, 36, .4, vol * 1.8); }
const boomT = v => { const n = performance.now(); if (n - lastBoom < 45) return; lastBoom = n; boom(v); };
function popSound(big){
  const now = performance.now(); if (now - lastPop < 35) return; lastPop = now;
  if (big) return;
  tone(620 + Math.random()*380, .07, 'square', .028, .55, .08);
  noise(.05, {type:'highpass', freq:3000, vol:.05, wet:.05});
}
function coin(){
  const now = performance.now(); if (now - lastCoin < 50) return; lastCoin = now;
  tone(1319, .06, 'triangle', .03, 0, .2); tone(1976, .14, 'triangle', .03, 0, .3, .05);
}
const chord = (notes, gap=70) => notes.forEach((f, i) => tone(f, .22, 'triangle', .05, 0, .3, i * gap / 1000));
const SFX = {
  waveStart(boss){
    if (boss) {
      brass([55, 82.4, 110], 1.6, .07, 0, 1400); brass([58.3, 87.3, 116.5], 1.2, .06, 1.1, 1400);
      for (let i = 0; i < 8; i++) sub(95, 55, .25, .35 * (1 - i/10), i * .09);
      cymbal(.14, 2.2, .1); cheer(.06, 2.4, .2);
    } else {
      brass([220, 277, 330], .22, .05); brass([294, 370, 440], .5, .055, .2);
      sub(140, 50, .25, .35); cymbal(.08, 1.1);
    }
  },
  elite(){ brass([196, 233, 294], .7, .06, 0, 1800); sub(90, 40, .5, .4); },
  frenzy(){ riser(.55); brass([440, 554, 659, 880], .9, .07, .5); cymbal(.16, 1.8, .5); sub(130, 40, .6, .5, .5); cheer(.12, 2.2, .45); },
  bossDown(){ boom(.35); sub(90, 25, 1.4, .7); brass([523, 659, 784, 1047], 1.6, .07, .35); cymbal(.16, 2.4, .35); cheer(.16, 3, .3); },
  leak(){ tone(110, .35, 'sawtooth', .06, .7, .2); tone(116, .35, 'sawtooth', .05, .7, .2); sub(70, 40, .3, .3); noise(.9, {type:'bandpass', freq:500, to:300, q:.6, vol:.05, wet:.5, attack:.1}); },
  card(r){
    if (r === 'L') { [784, 988, 1175, 1568, 1976].forEach((f, i) => tone(f, .35, 'triangle', .04, 0, .5, i * .05)); brass([392, 494, 587, 784], 1.2, .06, .2); cymbal(.1, 1.6, .2); cheer(.07, 1.6, .25); }
    else if (r === 'R') { chord([523, 659, 784, 1047], 60); brass([262, 330, 392], .6, .045, .15); }
    else chord([523, 659, 784], 60);
  },
  upgrade(lv){
    if (lv >= 5) { brass([262, 330, 392], .3, .06); brass([349, 440, 523], .3, .06, .25); brass([392, 494, 587, 784], 1.4, .07, .5); cymbal(.15, 2, .5); sub(120, 40, .5, .5, .5); cheer(.13, 2.4, .55); }
    else if (lv >= 3) { brass([392, 494, 587], .5, .05); cymbal(.06, .9); }
    else chord([523, 784]);
  },
  build(){ sub(160, 70, .15, .3); tone(440, .1, 'triangle', .04, 1.5, .2); },
  win(){ [[392], [523], [659], [784], [1047]].forEach((n, i) => brass(n.concat([n[0] / 2]), i === 4 ? 1.8 : .22, .07, i * .2)); cymbal(.18, 2.8, .8); cheer(.18, 3.6, .8); },
  lose(){ brass([233, 277, 349], .5, .06); brass([220, 262, 330], .5, .06, .45); brass([196, 233, 294], 1.5, .06, .9, 1200); sub(80, 30, 1.2, .4, .9); },
  clank(){ const n = performance.now(); if (n - (SFX._ck || 0) < 45) return; SFX._ck = n; tone(2600 + Math.random()*500, .06, 'triangle', .022, .9, .15); tone(3900, .04, 'square', .008, 1, .1); },
  speaker(over){ const sc = [523, 587, 659, 784, 880]; const f = sc[Math.floor(Math.random()*5)] * (over ? .5 : 1); tone(f, .12, 'square', over ? .045 : .025, 0, .3); tone(f * 1.5, .12, 'square', .015, 0, .3, .1); if (over) { sub(90, 40, .4, .55); noise(.3, {type:'lowpass', freq:300, vol:.2, wet:.2}); } },
  laugh(){ [0, .16, .32, .5].forEach((w, i) => { tone(520 - i*30, .12, 'square', .04, .7, .3, w); noise(.1, {type:'bandpass', freq:1400, q:2, vol:.05, wet:.3, when:w}); }); },
  adapt(){ tone(880, .08, 'square', .03, 0, .2); tone(1320, .12, 'square', .03, 0, .25, .08); tone(1760, .2, 'triangle', .03, 0, .3, .16); },
  revive(){ [392, 523, 659, 784].forEach((f, i) => tone(f, .25, 'sawtooth', .04, 0, .5, i * .06)); tone(1200, .5, 'sine', .04, .5, .6); sub(100, 40, .5, .4); },
  dash(){ noise(.6, {type:'bandpass', freq:400, to:2400, q:1.5, vol:.12, wet:.2}); sub(80, 160, .3, .3); },
  summon(){ brass([196, 247, 294], .5, .05, 0, 2000); [1319, 1568, 1976].forEach((f, i) => tone(f, .18, 'triangle', .03, 0, .4, .1 + i * .05)); },
  iceAge(){ for (let i = 0; i < 8; i++) tone(rnd(1800, 3800), .9, 'sine', .025, .6, .6, i * .04); noise(1.2, {type:'highpass', freq:9000, to:2500, vol:.1, wet:.6}); sub(80, 40, .6, .3); }
};

// music: 126 bpm stadium beat, only while a wave runs; intensity follows boss waves and frenzy
const MUS = {next:0, step:0};
const ROOTS = [110, 87.31, 130.81, 98];
function bass(f, t, dur){ const o = AC.createOscillator(), fl = AC.createBiquadFilter(), g = AC.createGain(); o.type = 'sawtooth'; o.frequency.value = f; fl.type = 'lowpass'; fl.frequency.value = 520; o.connect(fl).connect(g); g.gain.setValueAtTime(.0001, t); g.gain.exponentialRampToValueAtTime(.07, t + .01); g.gain.exponentialRampToValueAtTime(.0001, t + dur); g.connect(master); o.start(t); o.stop(t + dur + .05); }
function hit(kind, t, v){
  const w = t - AC.currentTime;
  if (kind === 'kick') sub(150, 45, .2, .4 * v, w);
  else if (kind === 'snare') { noise(.13, {type:'highpass', freq:1600, vol:.09 * v, wet:.25, when:w}); tone(190, .07, 'triangle', .04 * v, .8, .1, w); }
  else if (kind === 'hat') noise(.035, {type:'highpass', freq:8500, vol:.035 * v, wet:0, when:w});
  else if (kind === 'tom') sub(110, 70, .22, .3 * v, w);
}
function musicTick(){
  if (!live() || !musicOn || !S) return;
  const st = S.state, lvl = st === 'wave' ? (S.frenzy > 0 ? 3 : S.cur.type === 'boss' ? 2 : 1) : st === 'between' ? 0 : -1;
  if (lvl < 0) { MUS.next = 0; return; }
  const sx = 60 / 126 / 4;
  if (MUS.next < AC.currentTime) { MUS.next = AC.currentTime + .05; MUS.step = 0; }
  while (MUS.next < AC.currentTime + .12) {
    const t = MUS.next, b = MUS.step % 16, root = ROOTS[Math.floor(MUS.step / 16) % 4];
    if (lvl === 0) { if (b % 4 === 0) hit('hat', t, .6); if (b === 0) bass(root, t, .4); }
    else {
      if (b % 4 === 0 || (lvl >= 2 && b === 10)) hit('kick', t, 1);
      if (b === 4 || b === 12) hit('snare', t, 1);
      if (lvl >= 3 || b % 2 === 0) hit('hat', t, b % 4 === 2 ? 1 : .6);
      if ([0, 3, 6, 8, 11, 14].includes(b)) bass(b === 8 && lvl >= 2 ? root * 2 : root, t, sx * 2.2);
      if (lvl === 2 && (b === 14 || b === 15)) hit('tom', t, 1);
      if (lvl === 2 && b === 0 && MUS.step % 64 === 0) brass([root * 2, root * 3], .8, .035, t - AC.currentTime, 1200);
    }
    MUS.next += sx; MUS.step++;
  }
}
setInterval(musicTick, 30);

// ---------- effects ----------
function burst(x, y, col, n, spd=120){
  for (let i = 0; i < n && S.parts.length < 700; i++) {
    const a = Math.random()*Math.PI*2, v = spd*(.4 + Math.random());
    S.parts.push({x, y, vx:Math.cos(a)*v, vy:Math.sin(a)*v, life:.35 + Math.random()*.35, max:.7, r:1.5 + Math.random()*2.5, col});
  }
}
const ring = (x, y, R, col, life=.3) => S.parts.push({ring:true, x, y, R, col, life, max:life});
function floatText(x, y, txt, opts={}){
  txt = tr(txt);
  if (S.texts.length > 50) S.texts.shift();
  S.texts.push({x, y, txt, life:opts.life || .7, max:opts.life || .7, size:opts.size || 12, col:opts.col || '#f4efe4'});
}
function banner(txt, sub){ S.banner = {txt: tr(txt), sub: tr(sub), life:1.8}; }
const comboEl = document.getElementById('combo');
function showCombo(){
  comboEl.textContent = tf('连续劝退 ×{n}', {n:S.combo});
  comboEl.classList.toggle('on', S.combo >= 3);
  if (S.combo >= 3 && !RM) { comboEl.classList.remove('pop'); void comboEl.offsetWidth; comboEl.classList.add('pop'); }
}

// ---------- combat ----------
const valOf = e => e.mini ? .5 : E[e.k].val;
function spawnEnemy(k, d, mini, hpOverride, route){
  const af = S.cur.affix, elite = S.cur.type === 'elite';
  const hp = hpOverride ?? hpOf(k, S.wave) * (elite ? G.eliteHpMult : 1) * S.hpMult * MAPS[CUR_MAP].hp;
  const r = route ?? (S.spawnRoute++ % ROUTES.length);
  const [x,y] = at(d, r);
  const e = {k, hp, max:hp, d, r, left:routeLen(r) - d, x, y, hit:0, wob:Math.random()*6, mini, face:1, ph:Math.random()*6, look:runnerLook(k, mini), lastHit:-9, slowT:0, slow:0, burnT:0, burnDps:0,
             boss: k === 'boss' ? (BOSS[S.cur.boss] ? S.cur.boss : Object.keys(BOSS)[0]) : null, abT:0, dashT:0, inv:0, summons:0,
             stunT:0, iced:false, wetT:0, dizzyT:0, slipT:0, heatT:0, revT:0, aquaT:0, markT:0, stripT:0, vulnSlow:0, vulnFreeze:0,
             golden: !mini && k !== 'boss' && mod('golden') && Math.random() < G.goldenChance,
             shield: !mini && af.includes('shield') ? hp * G.shieldPct : 0};
  e.shieldMax = e.shield;
  if (e.boss) e.look = bossLook(e.boss);
  if (FOES[k] && !mini) seeFoe(k);
  S.possible += valOf(e);
  S.enemies.push(e);
}
function seeFoe(k){
  S.seenFoes = S.seenFoes || {}; if (S.seenFoes[k]) return; S.seenFoes[k] = 1;
  const first = !PROG.foes[k]; if (first) { PROG.foes[k] = 1; saveProg(); if (!RM) S.slowmo = .9; }
  (S.foeNotes = S.foeNotes || []).push({k, life: first ? 6 : 3.5, max: first ? 6 : 3.5, first});
}
function stun(e, dur, iced){
  if (e.k === 'whale') return;
  if (e.k === 'boss') { if (iced) return; dur *= G.bossStunMult; }
  if (dur > e.stunT) { e.stunT = dur; e.iced = !!iced; }
}
const DOT_SRC = new Set(['heat', 'static', 'inferno', 'react']);
function damage(e, d, src, o={}){
  if (e.dead || e.inv > 0) return;
  o = Object.assign({}, o); d = react(e, d, src, o);
  let m = 1;
  if (e.k === 'arm' && !e.mini && !(e.stripT > 0)) m = o.armor ?? 1;
  if (e.k === 'boss') m *= o.bossMul ?? 1;
  if (e.k === 'phones' && (src === 'tesla' || src === 'static')) return;
  if (e.slowT > 0) m *= 1 + e.vulnSlow;
  if (e.stunT > 0 && e.iced) m *= 1 + e.vulnFreeze;
  if (e.markT > 0) m *= 1 + G.markBonus;
  if (e.boss === 'jerry' && TOW[src]) { if (e.adapt === src) m *= 1 - bp('jerry', 1); e.log = e.log || {}; }
  const crit = !o.noCrit && Math.random() < G.critBase + S.critBonus + (o.crit || 0);
  let dd = d * m * (crit ? (o.critMul || G.critMul) : 1);
  if (e.k === 'whale' && !DOT_SRC.has(src) && dd < G.whaleMin) { dd *= G.whaleChip; if (!o.quiet && Math.random() < .25) floatText(e.x + 8, e.y - 22, tr('皮厚'), {size:10, col:'#9fc3ff', life:.5}); }
  if (!o.quiet) { e.hit = .08; e.lastHit = S.t; }
  if (e.shield > 0) {
    const sm = o.shieldMul || 1, ab = Math.min(e.shield, dd * sm);
    e.shield -= ab; dd -= ab / sm;
    if (e.shield <= 0) { burst(e.x, e.y, '#7cc4ff', 10, 110); floatText(e.x, e.y - 14, '盾破', {size:12, col:'#7cc4ff'}); }
  }
  e.hp -= dd;
  if (e.boss === 'jerry' && TOW[src]) e.log[src] = (e.log[src] || 0) + dd;
  if (!o.quiet && (src !== 'pop' || crit)) {
    if (m < .3 && !crit) floatText(e.x + 6, e.y - 8, '稳', {size:10, col:'#95a2ba', life:.45});
    else if (dd > 0) floatText(e.x + rnd(-5, 5), e.y - 10, (dd >= 1 ? Math.round(dd) : dd.toFixed(1)) + (crit ? '!' : ''),
                     {size: crit ? 20 : 12, col: crit ? '#ffcf3a' : '#f4efe4', life: crit ? .9 : .6});
  }
  if (e.hp <= 0) kill(e);
}
function kill(e, how){
  if (e.dead) return;
  if (e.boss === 'yawn' && !e.revived) {
    e.revived = true; e.hp = e.max * bp('yawn', 0); e.inv = bp('yawn', 1); e.burnT = 0;
    banner('Nox 九命', '原地复活！'); burst(e.x, e.y, '#ffd84a', 40, 180); SFX.revive();
    return;
  }
  if (e.boss === 'overflow' && !e.overflowed) {
    e.overflowed = true; e.hp = e.max * .6; e.inv = .6; S.forkT = bp('overflow', 0);
    spawnEnemy('boss', Math.max(0, e.d - 16), false, e.max * .6, e.r); S.enemies[S.enemies.length - 1].overflowed = true;
    banner(tr('整数溢出！'), '184,467,440,737 BTC'); burst(e.x, e.y, '#00ff9c', 50, 200); S.shake = RM ? 0 : 10; SFX.revive();
    return;
  }
  e.dead = true;
  const def = E[e.k];
  const g = Math.round((e.mini ? G.miniGold : def.gold) * (e.golden ? G.goldenMult : 1) * S.goldMult);
  S.gold += g; S.killVal += valOf(e);
  S.combo = (S.t - S.lastKill < G.comboWindow) ? S.combo + 1 : 1; S.lastKill = S.t;
  if (S.combo >= S.frenzyNeed && S.frenzy <= 0) {
    const oc = mod('overclock');
    S.frenzy = oc ? G.marathonDur : G.frenzyDur; S.frenzyMax = S.frenzy; S.combo = 0;
    banner('燃脂模式！', tf('出手速度 ×{r}，持续 {n} 秒', {r: oc ? G.marathonRate : G.frenzyRate, n: S.frenzy}));
    SFX.frenzy();
  }
  showCombo();
  if (how) floatText(e.x, e.y - 16, how, {size:15, col:'#ff9d7a', life:.8});
  const sc = runnerScale(e);
  if (S.fallers.length < 40) S.fallers.push({boss:e.boss, k:e.k, mini:e.mini, x:e.x, y:e.y, sc, look:e.look, face:e.face, ph:e.ph, golden:e.golden, rot:0, vr:e.face * rnd(5, 9), vx:-e.face * rnd(20, 60), vy:-rnd(90, 150), life:.75, max:.75});
  if (S.shoes.length < 60) S.shoes.push({x:e.x, y:e.y + 8 * sc, sc, col:e.look.shoe, rot:0, vr:rnd(-16, 16), vx:rnd(-70, 70), vy:-rnd(200, 280), life:1, max:1});
  for (let k = 0; k < 4; k++) S.parts.push({x:e.x, y:e.y - 8 * sc, vx:rnd(-60, 60), vy:rnd(-90, -30), life:.5, max:.5, r:1.6, col:'#bfe6ff'});
  if (e.k === 'boss') {
    burst(e.x, e.y, '#ff8a5c', 70, 220); burst(e.x, e.y, '#ffcf3a', 40, 160);
    S.slowmo = RM ? 0 : .5; S.shake = RM ? 0 : 12; banner(tf('{x} 退赛！', {x:BOSS[e.boss].name}), `+${g} GST`);
    SFX.bossDown();
  } else {
    burst(e.x, e.y, e.golden ? '#ffd84a' : e.iced && e.stunT > 0 ? '#cfefff' : def.col, e.golden ? 24 : e.k === 'arm' ? 18 : 11, e.golden ? 170 : 120);
    floatText(e.x, e.y + 4, `+${g}`, {size: e.golden ? 16 : 10, col:'#ffcf3a', life: e.golden ? .9 : .6});
    popSound(false); coin();
    if (S.combo && S.combo % 15 === 0) cheer(.07, 1.3);
  }
  if (S.cur.affix.includes('split') && !e.mini && e.k !== 'boss') {
    for (const off of [-12, 6]) spawnEnemy('norm', Math.max(0, e.d + off), true, e.max * G.miniHp, e.r);
  }
  if (e.inferno && e.burnT > 0) {
    ring(e.x, e.y, G.infernoRadius, '#ff6b4a', .3); burst(e.x, e.y, '#ff6b4a', 14, 140);
    for (const o of S.enemies) if (!o.dead && Math.hypot(o.x - e.x, o.y - e.y) <= G.infernoRadius + E[o.k].r) damage(o, e.infernoDmg, 'inferno', {quiet:true});
  }
  if (mod('pop')) {
    const ch = mod('chain'), R = G.popRadius * (ch ? G.popChainRadius : 1), dmg = (G.popBase + S.wave * G.popPerWave) * (ch ? G.popChainDmg : 1) * S.dmgMult;
    ring(e.x, e.y, R, ch ? '#ff9d7a' : '#ffcf3a', .25);
    for (const o of S.enemies) if (!o.dead && Math.hypot(o.x - e.x, o.y - e.y) <= R + E[o.k].r) damage(o, dmg, 'pop', {armor:.6});
  }
}

// ---------- flow ----------
const $ = id => document.getElementById(id);
const ov = $('ov'), ovBody = $('ovBody');
function openDraft(title, sub){
  S.state = 'draft'; S.step = 'card'; S.rerollCost = G.rerollBase; S.title = title; S.sub = sub || (() => '');
  S.offer = rollDraft(S.pendingRare ? 1 : 0);
  S.step = RM ? 'card' : 'open'; S.cardAnim = true;
  renderOverlay();
  if (S.step === 'open') {
    const tok = ++flowToken;
    tone(180, .5, 'sawtooth', .02, 1.5, .4);
    setTimeout(() => { if (tok === flowToken && S.step === 'open') { S.boxPop = true; renderOverlay(); boxSound(); shoutOMG(); } }, 1000);
    setTimeout(() => { if (tok === flowToken && S.step === 'open') { S.step = 'card'; renderOverlay(); } }, 1700);
  }
}
function boxSound(){ if (!live()) return; cymbal(.07, 1.1); chord(bestRar() === 'L' ? [523, 659, 784, 1047] : [523, 659, 784], 55); }
const bestRar = () => S.offer.some(c => c.rar === 'L') ? 'L' : S.offer.some(c => c.rar === 'R') ? 'R' : 'C';

const chipsFor = aff => aff.length ? aff.map(a => `<span class="chip bad">${tr(AFX[a].name)} · ${tr(AFX[a].desc)}</span>`).join('') : `<span class="chip">${tr('无词缀')}</span>`;
function renderOverlay(){
  ov.hidden = false; ov.className = 'overlay';
  if (S.state === 'over') { renderEnd(); return; }
  if (S.state === 'story') { renderStory(); return; }
  if (S.state === 'map') { renderMap(); return; }
  if (S.state === 'codex') { renderCodex(); return; }
  if (S.state === 'kcard') { renderKCard(); return; }
  if (S.state === 'intro') {
    ov.classList.add('ov-intro');
    ovBody.innerHTML = `<div class="intro">
      <div class="logo disp">${tr('爆破')}<span class="hl">${tr('跑道')}</span></div>
      <p class="sub">${tf('本局跑道：{x}。{d}', {x:tr(MAPS[CUR_MAP].name), d:tr(MAPS[CUR_MAP].desc)})}</p>
      <button type="button" class="primary startbtn" data-start="1">${tr('点击开始')}</button>
      <p class="sub small">${tr('点跑道旁的石台放置装置，再点装置直接升级。')}</p></div>`;
    return;
  }
  if (S.state === 'count') {
    ov.classList.add('ov-count');
    ovBody.innerHTML = `<div class="count" aria-live="assertive"><span class="cnum" key="${S.countN}">${S.countN ? S.countN : tr('开跑！')}</span></div>`;
    return;
  }
  if (S.step === 'open') {
    ov.classList.add('ov-box', 'glow-' + bestRar());
    ovBody.innerHTML = `<div class="boxstage ${S.boxPop ? 'burst' : 'shake'}" data-skip="1"><div class="rays"></div><div class="chest">${CHEST}</div>
      <div class="coins">${'<i></i>'.repeat(12)}</div><p class="sub">${tr('神秘箱开启中…')}</p></div>`;
    return;
  }
  if (S.step === 'card') {
    const sub = S.sub(), anim = S.cardAnim; S.cardAnim = false; S.boxPop = false;
    ovBody.innerHTML = `<h2 class="${anim ? 'in' : ''}">${S.title()}</h2>${sub ? `<p class="sub">${sub}</p>` : ''}
      ${S.offer.map((c, i) => `<button type="button" class="pick r-${c.rar} ${c.tag === '交易' ? 't-deal' : ''} ${anim ? 'deal' : ''}" style="--i:${i}" data-card="${i}">
        <span class="meta"><span class="tg">${tr(c.tag)}</span><span class="rar">${tr(RAR[c.rar])}</span></span>
        <strong>${cName(c)}</strong><small>${cDesc(c)}${c.tag === '装置' ? tr('（选后可在空位放置）') : ''}</small></button>`).join('')}
      <div class="row2">${S.blockDraft ? `<button type="button" data-reroll="1" ${S.sats < S.satReroll ? 'disabled' : ''}>${tf('重抽 · {n} 聪', {n:fmtN(S.satReroll)})}</button>`
        : `<button type="button" data-reroll="1" ${S.gold < S.rerollCost ? 'disabled' : ''}>${tf('重抽 · {n} GST', {n:S.rerollCost})}</button>`}</div>`;
  } else {
    const n = S.wave + 1;
    ovBody.innerHTML = `<h2>${tf('选择第 {n} 段跑道', {n})}</h2><p class="sub">${tr('选好后有 8 秒布置时间。')}</p>
      ${S.routes.map((r, i) => `<button type="button" class="pick ${r.type === 'elite' ? 'r-R' : r.type === 'boss' ? 'r-L' : ''}" data-route="${i}">
        <span class="meta"><span>${tr(r.type === 'elite' ? '高风险' : r.type === 'boss' ? 'Boss 波' : '稳妥')}</span><span class="rar">${tr(r.type === 'elite' ? '奖励：60 GST + 稀有以上' : r.type === 'boss' ? '传奇跑者' : '奖励：30 GST')}</span></span>
        <strong>${r.type === 'elite' ? tr('精英小队') : r.type === 'boss' ? tf('Boss：{n}（{t}）', {n:BOSS[r.boss].name, t:tr(BOSS[r.boss].title)}) : tr('普通跑者')}</strong>${r.type === 'boss' ? `<small>${tr(BOSS[r.boss].ability)}</small>` : ''}
        <span class="chips">${chipsFor(r.affix)}${r.type === 'elite' ? `<span class="chip bad">${tr('体力 +40%')}</span>` : ''}</span></button>`).join('')}`;
  }
}
ovBody.addEventListener('click', ev => {
  if (S.step === 'open' && S.state === 'draft') { flowToken++; S.step = 'card'; renderOverlay(); return; }
  const b = ev.target.closest('button');
  if (S.state === 'story' && !b) { storyNext(false); return; }
  if (!b || b.disabled) return;
  ensureAudio();
  if (b.dataset.start) { showMap(); return; }
  if (b.dataset.story) { storyNext(false); return; }
  if (b.dataset.skipstory) { storyNext(true); return; }
  if (b.dataset.level) { newGame(b.dataset.level); return; }
  if (b.dataset.free) { newGame(); return; }
  if (b.dataset.tomap) { showMap(); return; }
  if (b.dataset.codex) { S.codexTab = b.dataset.codex; S.state = 'codex'; renderOverlay(); return; }
  if (b.dataset.kdone) { end(true); return; }
  if (b.dataset.card !== undefined) {
    const c = S.offer[+b.dataset.card];
    if (c.apply) c.apply(c); else S.mods.add(c.id);
    if (c.id === 'breaker') refreshStats();
    S.picked.add(c.id); S.taken.push(c); S.pendingRare = false;
    SFX.card(c.rar);
    if (S.blockDraft) { S.blockDraft = false; ov.hidden = true; S.state = S.resume || 'wave'; lastDock = ''; popKey = ''; lastGo = '';
      if (S.draftQ > 0) { S.draftQ--; setTimeout(() => { if (S.state === 'wave' || S.state === 'between') openBlockDraft(); }, 500); }
      return; }
    S.step = 'route'; S.routes = makeRoutes(); renderOverlay();
    lastDock = '';
  } else if (b.dataset.reroll && S.blockDraft) {
    if (S.sats < S.satReroll) return;
    S.sats -= S.satReroll; S.satReroll = Math.round(S.satReroll * 1.5); S.offer = rollDraft(0);
    tone(700, .06, 'square', .03, 1.5, .1); S.cardAnim = !RM; renderOverlay();
  } else if (b.dataset.reroll) {
    if (S.gold < S.rerollCost) return;
    S.gold -= S.rerollCost; S.rerollCost += G.rerollStep; S.offer = rollDraft(S.pendingRare ? 1 : 0);
    tone(700, .06, 'square', .03, 1.5, .1); S.cardAnim = !RM; renderOverlay();
  } else if (b.dataset.route !== undefined) {
    S.next = S.routes[+b.dataset.route];
    ov.hidden = true;
    if (S.wave === 0) S.state = 'ready'; else { S.state = 'between'; S.between = G.betweenTime; }
    for (const f of S.pendingFx) f(); S.pendingFx = [];
    tone(440, .1, 'triangle', .04, 1.5);
  } else if (b.dataset.again) {
    newGame();
  }
});
function startWave(){
  if (S.state !== 'ready' && S.state !== 'between') return;
  if (S.state === 'between') { const bonus = Math.round(S.between * G.earlyBonusPerSec); if (bonus > 0) { S.gold += bonus; floatText(W/2, H/2, tf('提前开波 +{n} GST', {n:bonus}), {size:14, col:'#ffcf3a', life:1}); } }
  S.wave++; S.cur = S.next || {type:'normal', affix:[]}; S.next = null;
  if (S.cur.type === 'boss' && !BOSS[S.cur.boss]) { S.cur.boss = BOSS[bossFor(S.wave)] ? bossFor(S.wave) : Object.keys(BOSS)[0]; if (!S.cur.boss) S.cur.type = 'normal'; }
  S.spawnQ = waveList(S.wave); S.spawnT = 0; S.state = 'wave'; S.leaked = false;
  const tag = S.cur.type === 'elite' ? ' · ' + tr('精英小队') : S.cur.type === 'boss' ? ` · ${BOSS[S.cur.boss].name}` : '';
  banner(tf('第 {n} 波', {n:S.wave}) + tag, S.cur.affix.length ? S.cur.affix.map(a => tr(AFX[a].name)).join(' + ') : tf('{n} 名跑者', {n:S.spawnQ.length}));
  SFX.waveStart(S.cur.type === 'boss'); if (S.cur.type === 'elite') SFX.elite();
}
function waveCleared(){
  if (!S.leaked) S.noLeak++;
  if (S.mode === 'camp') { campWaveCleared(); return; }
  if (S.wave >= WAVES.length) { end(true); return; }
  let g = G.waveReward;
  const elite = S.cur.type === 'elite', w = S.wave;
  if (elite) { g += G.eliteReward; S.elites++; S.pendingRare = true; }
  for (const t of S.towers) if (t.s.gpw) g += t.s.gpw;
  if (mod('bank')) g += Math.min(G.bankCap, Math.floor(S.gold * G.bankRate));
  S.gold += g;
  const nextBoss = BOSS_WAVES.includes(w + 1) && BOSS[bossFor(w + 1)] ? BOSS[bossFor(w + 1)].name : null;
  openDraft(() => tf('第 {n} 波守住 · +{g} GST', {n:w, g}), () => elite ? tr('精英奖励：这次的神秘箱只出稀有和传说。') : nextBoss ? tf('下一波 Boss：{x}。', {x:nextBoss}) : '');
}
function end(win){
  S.state = 'over'; S.story = null;
  const sc = score();
  S.endInfo = {win, sc, best: sc.total > meta.best};
  if (S.endInfo.best) { meta.best = sc.total; saveMeta(); }
  renderEnd();
  if (win) { if (S.mode !== 'camp') SFX.win(); } else SFX.lose();
}
function renderEnd(){
  if (S.mode === 'camp') { renderCampEnd(); return; }
  const {win, sc, best} = S.endInfo;
  ov.hidden = false; ov.className = 'overlay';
  const towers = S.towers.map(t => `<span class="chip">${tr(TOW[t.kind].short)} ${code(t)}</span>`).join('');
  ovBody.innerHTML = `<h2>${win ? tr('通关') : tf('领地失守 · 第 {n} 波', {n:S.wave})}</h2>
    <div class="big">${sc.total}</div>
    <p class="sub" style="text-align:center">${best ? tr('新纪录') : tf('最高分 {n}', {n:meta.best})} · ${tf('第 {r} 局 · 精英波 {e} 次', {r:meta.runs, e:S.elites})}</p>
    <div class="rows">
      <div><span>${tr('劝退率 × 600')}</span><b>${sc.k}</b></div>
      <div><span>${tr('剩余生命 / 20 × 300')}</span><b>${sc.l}</b></div>
      <div><span>${tr('无漏怪波数 / 15 × 100')}</span><b>${sc.c}</b></div>
    </div>
    ${towers ? `<span class="chips">${towers}</span>` : ''}
    <span class="chips">${S.taken.map(c => `<span class="chip ${c.rar}">${cName(c)}</span>`).join('')}</span>
    <button class="primary" type="button" data-again="1">${tr('再来一局')}</button>
    <div class="row2"><button type="button" data-tomap="1">${tr('返回章节地图')}</button></div>`;
}

// ---------- update ----------
function update(dt){
  S.t += dt;
  if (S.frenzy > 0) S.frenzy -= dt;
  if (S.combo && S.t - S.lastKill > G.comboWindow) { S.combo = 0; showCombo(); }

  if (S.state === 'wave') {
    S.spawnT -= dt;
    if (S.spawnQ.length && S.spawnT <= 0) {
      const k = S.spawnQ.shift(); spawnEnemy(k, 0, false);
      S.spawnT = Math.max(G.spawnMin, G.spawnBase - S.wave * G.spawnPerWave) * (k === 'arm' || k === 'whale' ? G.spawnArmorMult : 1);
    }
    if (!S.spawnQ.length && !S.enemies.length) { waveCleared(); return; }
  } else if (S.state === 'between') {
    S.between -= dt; if (S.between <= 0) startWave();
  }

  const af = S.cur.affix;
  for (const e of S.enemies) {
    if (e.dead) continue;
    e.hit -= dt;
    if (e.inv > 0) e.inv -= dt;
    if (e.boss === 'lucas') { if (e.dashT > 0) e.dashT -= dt; else if ((e.abT += dt) > bp('lucas', 0)) { e.abT = 0; e.dashT = bp('lucas', 1); floatText(e.x, e.y - 40, '铁头冲刺', {size:16, col:'#ff9d3a', life:1}); SFX.dash(); } }
    if (e.boss === 'gilg' && e.summons < bp('gilg', 2) && (e.abT += dt) > bp('gilg', 0)) {
      e.abT = 0; const cnt = Math.max(0, Math.round(bp('gilg', 1))); e.summons += cnt;
      for (let q = 0; q < cnt; q++) { const off = -16 - q * 14; spawnEnemy('arm', Math.max(0, e.d + off), false, hpOf('arm', S.wave) * bp('gilg', 3), e.r); const m = S.enemies[S.enemies.length - 1]; m.look = {...m.look, shirt:'#c9a227', shorts:'#6b4f12', shoe:SHOE.legendary, band:'#ffd84a'}; m.goldArmor = true; }
      floatText(e.x, e.y - 40, '王之宝库', {size:16, col:'#ffd84a', life:1}); SFX.summon();
    }
    if (e.boss === 'king' && (e.abT += dt) > bp('king', 0)) { e.abT = 0; if (S.slimes.length < 80) S.slimes.push({d:e.d, r:e.r, x:e.x, y:e.y, life:bp('king', 3), max:bp('king', 3), r:rnd(12, 17)}); }
    if (e.boss === 'shiti' && (e.abT += dt) > bp('shiti', 0)) {
      e.abT = 0; let n = 0;
      for (const t of S.towers) if (Math.hypot(t.x - e.x, t.y - e.y) < bp('shiti', 1)) { t.disT = bp('shiti', 2); n++; }
      ring(e.x, e.y, bp('shiti', 1), '#ffcf3a', .6); ring(e.x, e.y, 90, '#ffcf3a', .45);
      floatText(e.x, e.y - 44, '哈哈哈！', {size:18, col:'#ffcf3a', life:1.2}); SFX.laugh();
    }
    if (e.boss === 'jerry' && (e.abT += dt) > bp('jerry', 0)) {
      e.abT = 0; let best = null, bv = 0;
      for (const k in e.log) if (e.log[k] > bv) { bv = e.log[k]; best = k; }
      if (best && best !== e.adapt) { e.adapt = best; floatText(e.x, e.y - 44, tf('已适应：{x}', {x: tr(TOW[best].short)}), {size:14, col:'#6fb8ff', life:1.3}); SFX.adapt(); }
      e.log = {};
    }
    e.inspired = !e.boss && S.slimes.some(sl => Math.hypot(sl.x - e.x, sl.y - e.y) < sl.r + 4);
    if (e.inspired && e.hp < e.max) e.hp = Math.min(e.max, e.hp + e.max * bp('king', 2) * dt);
    if (e.markT > 0) e.markT -= dt;
    if (e.stripT > 0) e.stripT -= dt;
    if (e.slowT > 0) e.slowT -= dt;
    if (e.wetT > 0) e.wetT -= dt; if (e.dizzyT > 0) e.dizzyT -= dt; if (e.slipT > 0) e.slipT -= dt; if (e.heatT > 0) e.heatT -= dt; if (e.revT > 0) e.revT -= dt; if (e.aquaT > 0) e.aquaT -= dt; if (e.hopT > 0) e.hopT -= dt;
    if (e.boss === 'pizza') { const th = e.hp / e.max; while ((e.drops || 0) < 2 && th < ((e.drops || 0) === 0 ? .66 : .33)) { e.drops = (e.drops || 0) + 1;
      for (let q = 0; q < bp('pizza', 0); q++) { spawnEnemy('norm', Math.max(0, e.d - 10 - q * 9), true, hpOf('norm', S.wave) * bp('pizza', 1) * 3, e.r); const m = S.enemies[S.enemies.length - 1]; m.look = {...m.look, shirt:'#ffcf3a', shorts:'#e0473a', band:'#e0473a'}; }
      banner(tr('一万枚换两个披萨！'), tr('披萨跑者冲出来了')); burst(e.x, e.y, '#ffcf3a', 30, 160); } }
    if (e.stunT > 0) e.stunT -= dt;
    else {
      const sl = e.slowT > 0 ? (e.k === 'boss' && !e.fullSlow ? e.slow * G.bossSlowMult : e.slow) : 0;
      const step = E[e.k].spd * (e.mini ? G.miniSpeed : 1) * S.spdMult * (af.includes('swift') ? G.swiftMult : 1) * (1 - Math.min(G.slowCap, sl)) * (e.dashT > 0 ? bp('lucas', 2) : 1) * (e.inspired ? bp('king', 1) : 1) * MAPS[CUR_MAP].spd * dt;
      e.d = Math.max(0, e.d + (e.revT > 0 ? -step * .85 : step)); e.ph += step * .32;
    }
    [e.x, e.y] = at(e.d, e.r); e.left = routeLen(e.r) - e.d;
    { const sg = segAt(e.d, e.r); if (sg.y1 === sg.y2) e.face = (sg.x2 > sg.x1 ? 1 : -1) * (e.revT > 0 ? -1 : 1); }
    if (af.includes('regen') && S.t - e.lastHit > G.regenDelay && e.hp < e.max) e.hp = Math.min(e.max, e.hp + e.max * G.regenPct * dt);
    if (e.burnT > 0) { e.burnT -= dt; e.hp -= e.burnDps * dt; if (e.hp <= 0) { kill(e); continue; } }
    if (e.d >= routeLen(e.r)) {
      e.dead = true;
      S.lives = Math.max(0, S.lives - E[e.k].leak); S.leaked = true; S.flash = .35;
      SFX.leak(); floatText(e.x, e.y - 14, '冲线！', {size:15, col:'#ff6b6b', life:.9}); floatText(e.x, e.y - 30, tf('生命 −{n}', {n:E[e.k].leak}), {size:12, col:'#ffb0b0', life:.9});
      if (S.lives <= 0) { end(false); return; }
    }
  }
  for (const f of S.fires) {
    f.t -= dt;
    for (const e of S.enemies) if (!e.dead && Math.hypot(e.x - f.x, e.y - f.y) <= f.r) { e.hp -= f.dps * dt; if (e.hp <= 0) kill(e); }
  }
  S.fires = S.fires.filter(f => f.t > 0);
  if (S.forkT > 0 && (S.forkT -= dt) <= 0) {
    for (const e of S.enemies) if (!e.dead && e.boss === 'overflow') { e.hp = Math.max(1, e.hp * (1 - bp('overflow', 1))); burst(e.x, e.y, '#00ff9c', 30, 160); }
    banner(tr('软分叉！'), tr('修复版本上线，溢出的币被回滚')); S.shake = RM ? 0 : 8; cymbal(.08, 1);
  }

  // auras and global buffs
  S.globalDmg = S.towers.some(t => t.s.globalDmg) ? .15 : 0;
  for (const t of S.towers) { t.bRate = 1; t.bDmg = 1; }
  for (const a of S.towers) if (a.s.auraRate || a.s.auraDmg) for (const t of S.towers) if (t !== a && Math.hypot(t.x - a.x, t.y - a.y) <= a.s.auraR) {
    if (a.s.auraRate) t.bRate = Math.min(t.bRate, a.s.auraRate);
    if (a.s.auraDmg) t.bDmg = Math.max(t.bDmg, a.s.auraDmg);
  }

  const fr = S.frenzy > 0 ? (mod('overclock') ? G.marathonRate : G.frenzyRate) : 1, gm = mult();
  for (const t of S.towers) {
    const s = t.s;
    t.cd -= dt * fr; t.recoil = Math.max(0, t.recoil - dt*6);
    if (t.kind === 'miner') { if (t.disT > 0) { t.disT -= dt; continue; } minerHeat(t, s, gm, dt); continue; }
    if (s.staticDps) for (const e of S.enemies) if (!e.dead && Math.hypot(e.x - t.x, e.y - t.y) <= s.range + E[e.k].r) damage(e, s.staticDps * gm * t.bDmg * dt, 'static', {quiet:true, noCrit:true});
    if (s.iceAge) {
      t.iceT = (t.iceT ?? s.iceAge) - dt * fr;
      if (t.iceT <= 0 && S.enemies.length) {
        t.iceT = s.iceAge;
        for (const e of S.enemies) if (!e.dead && e.k !== 'boss' && e.k !== 'rain') { stun(e, G.iceAgeFreeze, true); e.vulnFreeze = Math.max(e.vulnFreeze, s.vulnFreeze || 0); }
        S.iceFlash = .5; banner('冰河时代', tf('全场冻结 {n} 秒', {n:G.iceAgeFreeze})); SFX.iceAge();
      }
    }
    if (t.disT > 0) { t.disT -= dt; continue; }
    if (t.cd > 0) continue;
    const inRange = S.enemies.filter(e => !e.dead && Math.hypot(e.x - t.x, e.y - t.y) <= s.range + E[e.k].r).sort((a,b) => a.left - b.left);
    if (t.kind === 'tesla') { const f = inRange.filter(e => e.k !== 'phones'); inRange.length = 0; inRange.push(...f); }
    if (!inRange.length) continue;
    t.cd = s.rate * t.bRate; t.recoil = 1;
    const dmg = s.dmg * gm * t.bDmg;
    const opt = {armor:s.armor, bossMul:s.bossMul, crit:s.crit, critMul:s.critMul, shieldMul:s.shieldMul};
    if (t.kind === 'dart') {
      const n = Math.min(s.multi, inRange.length);
      for (let j = 0; j < n; j++) { const e = inRange[j]; S.shots.push({type:'dart', x:t.x, y:t.y, tg:e, lx:e.x, ly:e.y, dmg, opt, s}); }
      t.ang = Math.atan2(inRange[0].y - t.y, inRange[0].x - t.x);
      noise(.03, {type:'highpass', freq:4000, vol:.025, wet:0});
    } else if (t.kind === 'gem') {
      const n = Math.min(s.multi, inRange.length), g = gemOf(t);
      for (let j = 0; j < n; j++) { const e = inRange[j]; S.shots.push({type:'gem', gem:g, x:t.x, y:t.y - 18, tg:e, lx:e.x, ly:e.y, dmg, opt, s}); }
      t.ang = Math.atan2(inRange[0].y - t.y, inRange[0].x - t.x);
      tone(g === 'ruby' ? 1320 : g === 'topaz' ? 1568 : 1760, .06, 'triangle', .02, .4, .3);
    } else if (t.kind === 'bomb') {
      for (const e of inRange.slice(0, s.bombs)) {
        const dist = Math.hypot(e.x - t.x, e.y - t.y), lead = at(e.d + E[e.k].spd * (dist / 260), e.r);
        S.shots.push({type:'bomb', sx:t.x, sy:t.y, tx:lead[0], ty:lead[1], t:0, dur:Math.max(.15, dist/260), dmg, s, lv:Math.max(...t.p)});
      }
      t.ang = Math.atan2(inRange[0].y - t.y, inRange[0].x - t.x);
      noise(.12, {type:'bandpass', freq:700, to:1600, q:1.5, vol:.05, wet:.1});
    } else if (t.kind === 'frost') {
      for (const e of inRange) {
        if (e.k === 'rain') { if (Math.random() < .3) floatText(e.x + 6, e.y - 20, tr('防水'), {size:10, col:'#ffd23f', life:.5}); continue; }
        e.slow = e.slowT > 0 ? Math.max(e.slow, s.slow) : s.slow; e.slowT = Math.max(e.slowT, s.slowDur);
        if (s.bossSlowFull) e.fullSlow = true;
        if (s.vulnSlow) e.vulnSlow = Math.max(e.vulnSlow, s.vulnSlow);
        if (s.vulnFreeze) e.vulnFreeze = Math.max(e.vulnFreeze, s.vulnFreeze);
        if (s.freeze) stun(e, s.freeze, true);
        if (s.strip) e.stripT = s.strip;
        damage(e, dmg, 'frost', opt); e.wetT = Math.max(e.wetT, s.slowDur + 1.5);
      }
      ring(t.x, t.y, s.range, '#6fc3ff', .35); burst(t.x, t.y, '#6fc3ff', 14, s.range * 1.6); burst(t.x, t.y, '#cfefff', 6, 60);
      tone(2400, .25, 'sine', .02, .5, .5); noise(.3, {type:'highpass', freq:7000, to:3000, vol:.04, wet:.4});
    } else if (t.kind === 'sniper') {
      // spread drones: skip runners that boxes already in the air will finish off
      const pend = new Map(); for (const d of S.drops) if (d.tg && !d.tg.dead) pend.set(d.tg, (pend.get(d.tg) || 0) + d.dmg);
      const open = inRange.filter(e => (pend.get(e) || 0) < e.hp + (e.shield || 0));
      const e = (open.length ? open : inRange).slice().sort((a, b) => (b.k === 'boss') - (a.k === 'boss') || b.hp - a.hp)[0];
      t.n = (t.n || 0) + 1;
      t.ang = Math.atan2(e.y - t.y, e.x - t.x);
      S.drops.push({tg:e, x:e.x, y:e.y, t:0, dur:.28, dmg, s, opt, decap: s.decap && t.n % 4 === 0});
      noise(.3, {type:'bandpass', freq:1800, to:600, q:2, vol:.05, wet:.2});
    } else if (t.kind === 'tesla') {
      t.n = (t.n || 0) + 1;
      const over = s.overN && t.n % s.overN === 0, hit = new Set();
      for (const start of inRange.slice(0, s.starts)) {
        if (hit.has(start)) continue;
        let d = dmg * (over ? s.overMul : 1), cur = start, px = t.x, py = t.y;
        for (let c = 0; c < s.chain && cur; c++) {
          S.bolts.push({pts:wave(px, py, cur.x, cur.y), col: over ? '#ffcf3a' : '#ff8fd0', life:.18, w: over ? 3 : 1.6});
          if (S.notes.length < 60) S.notes.push({x:cur.x, y:cur.y - 16, txt: Math.random() < .5 ? '♪' : '♫', life:.7, max:.7, col: over ? '#ffcf3a' : '#ff8fd0'});
          hit.add(cur); px = cur.x; py = cur.y;
          if (s.stun) stun(cur, s.stun);
          cur.dizzyT = Math.max(cur.dizzyT, 1.6); damage(cur, d, 'tesla', opt); d *= s.decay;
          let best = null, bd = G.teslaHop;
          for (const o of S.enemies) if (!o.dead && !hit.has(o) && o.k !== 'phones') { const dd = Math.hypot(o.x - px, o.y - py); if (dd < bd) { bd = dd; best = o; } }
          cur = best;
        }
      }
      if (over) { burst(t.x, t.y, '#ffcf3a', 12, 140); S.shake = RM ? 0 : Math.max(S.shake, s.overMul > 3 ? 7 : 4); }
      SFX.speaker(over);
    }
    if (mod('twin') && Math.random() < G.twinChance) t.cd = Math.min(t.cd, .08);
  }

  for (const sh of S.shots) {
    if (sh.type === 'dart' || sh.type === 'gem') {
      if (sh.tg && !sh.tg.dead) { sh.lx = sh.tg.x; sh.ly = sh.tg.y; } else sh.tg = null;
      const dx = sh.lx - sh.x, dy = sh.ly - sh.y, dist = Math.hypot(dx, dy), step = 480 * dt;
      if (dist <= step + 4) {
        const e = sh.tg;
        if (e && sh.type === 'gem') {
          const s2 = sh.s;
          if (s2.slow) { e.slow = e.slowT > 0 ? Math.max(e.slow, s2.slow) : s2.slow; e.slowT = Math.max(e.slowT, s2.slowDur); if (s2.bossSlowFull) e.fullSlow = true; }
          if (s2.vulnSlow) e.vulnSlow = Math.max(e.vulnSlow, s2.vulnSlow);
          if (s2.freeze && e.k !== 'boss') stun(e, s2.freeze, true);
          damage(e, sh.dmg, 'gem', sh.opt);
          burst(e.x, e.y - 6, sh.gem === 'ruby' ? '#ff4a00' : sh.gem === 'topaz' ? '#ffcc33' : '#50d8ff', 6, 90);
        } else if (e) {
          if (sh.s.execChance && e.k !== 'boss' && Math.random() < sh.s.execChance) kill(e, '绊倒退赛');
          else { damage(e, sh.dmg, 'dart', sh.opt); if (sh.s.mark) e.markT = sh.s.mark; SFX.clank(); }
        }
        sh.done = true;
      } else { sh.x += dx/dist*step; sh.y += dy/dist*step; sh.ang = Math.atan2(dy, dx); }
    } else {
      sh.t += dt;
      if (sh.t >= sh.dur) { sh.done = true; explode(sh.tx, sh.ty, sh.dmg, sh.s.rad, sh.s, 0, sh.lv); }
    }
  }
  for (const dp of S.drops) { dp.t += dt; if (dp.tg && !dp.tg.dead) { dp.x = dp.tg.x; dp.y = dp.tg.y; } if (dp.t >= dp.dur) { dp.done = true; landDrop(dp); } }
  S.drops = S.drops.filter(d => !d.done);
  for (const sl of S.slimes) sl.life -= dt;
  S.slimes = S.slimes.filter(sl => sl.life > 0);
  for (const p of S.peels) p.life -= dt;
  S.peels = S.peels.filter(p => p.life > 0);
  for (const n of S.notes) { n.life -= dt; n.y -= 22 * dt; n.x += Math.sin(n.life * 9) * 18 * dt; }
  S.notes = S.notes.filter(n => n.life > 0);
  for (const b of S.delay) { b.t -= dt; if (b.t <= 0) { b.done = true; explode(b.x, b.y, b.dmg, b.rad, b.s, b.depth, 1); } }
  S.delay = S.delay.filter(b => !b.done);
  S.shots = S.shots.filter(s => !s.done);
  S.enemies = S.enemies.filter(e => !e.dead);
  for (const p of S.parts) { p.life -= dt; if (!p.ring) { p.x += p.vx*dt; p.y += p.vy*dt; p.vx *= .92; p.vy *= .92; } }
  S.parts = S.parts.filter(p => p.life > 0);
  for (const b of S.bolts) b.life -= dt;
  for (const f of S.fallers) { f.life -= dt; f.vy += 420 * dt; f.x += f.vx * dt; f.y += f.vy * dt; f.rot += f.vr * dt; }
  S.fallers = S.fallers.filter(f => f.life > 0);
  for (const f of S.shoes) { f.life -= dt; f.vy += 620 * dt; f.x += f.vx * dt; f.y += f.vy * dt; f.rot += f.vr * dt; }
  S.shoes = S.shoes.filter(f => f.life > 0);
  S.bolts = S.bolts.filter(b => b.life > 0);
  for (const tx of S.texts) { tx.life -= dt; tx.y -= 28*dt; }
  S.texts = S.texts.filter(t => t.life > 0);
  if (S.banner) { S.banner.life -= dt; if (S.banner.life <= 0) S.banner = null; }
}
function landDrop(dp){
  const e = dp.tg, s = dp.s, opt = dp.opt;
  burst(dp.x, dp.y + 8, '#c9b49a', 12, 120); ring(dp.x, dp.y + 6, 22, '#f4efe4', .25);
  if (!RM) S.shake = Math.max(S.shake, 2);
  sub(160, 50, .18, .4); noise(.12, {type:'lowpass', freq:900, vol:.12, wet:.25});
  if (e.dead) return;
  if (s.exec25 && e.k !== 'boss' && e.hp / e.max < .25) { kill(e, '退赛通知'); return; }
  let d = dp.dmg;
  if (dp.decap) { if (e.k === 'boss') { d += e.max * G.decapBossPct; floatText(e.x, e.y - 30, '神秘箱轰炸', {size:17, col:'#ff6b6b', life:1}); } else d *= G.decapMult; }
  if (s.stun) stun(e, s.stun);
  damage(e, d, 'sniper', opt);
  if (s.ricochet) {
    let px = e.x, py = e.y; const hit = new Set([e]);
    for (let r = 0; r < s.ricochet; r++) {
      let best = null, bd = G.ricochetRange;
      for (const o of S.enemies) if (!o.dead && !hit.has(o)) { const dd = Math.hypot(o.x - px, o.y - py); if (dd < bd) { bd = dd; best = o; } }
      if (!best) break;
      S.bolts.push({pts:arc(px, py, best.x, best.y), col:'#c9b49a', life:.25, w:2, box:true});
      hit.add(best); px = best.x; py = best.y; damage(best, dp.dmg * G.ricochetPct, 'sniper', opt);
    }
  }
}
function arc(x1, y1, x2, y2){ const pts = []; for (let i = 0; i <= 8; i++) { const t = i / 8; pts.push([x1 + (x2-x1)*t, y1 + (y2-y1)*t - Math.sin(t*Math.PI)*22]); } return pts; }
function explode(x, y, dmg, rad, s, depth, lv){
  const main = depth === 0;
  const opt = {bossMul:s.bossMul, crit:s.crit, critMul:s.critMul};
  for (const e of S.enemies) if (!e.dead && Math.hypot(e.x - x, e.y - y) <= rad + E[e.k].r) {
    if (e.k === 'hop' && !(e.stunT > 0)) {
      if (!(e.dizzyT > 0)) { e.hopT = .45; if (main && Math.random() < .4) floatText(e.x, e.y - 22, tr('跳过！'), {size:11, col:'#ff5ad1', life:.6}); damage(e, dmg * G.hopDmg, 'bomb', opt); continue; }
      if (main) { e.dizzyT = 0; reactFx(e, 'faceplant'); stun(e, 1); damage(e, dmg * 2, 'bomb', opt); continue; }
    }
    if (s.stun && main) stun(e, s.stun);
    if (main) e.slipT = 1.2;
    if (s.burnDur && main) { e.burnT = s.burnDur; e.burnDps = dmg * s.burnPct; if (s.inferno) { e.inferno = true; e.infernoDmg = dmg; } }
    damage(e, dmg, 'bomb', opt);
  }
  burst(x, y, s.burnDur ? '#ff6b4a' : '#ffe27a', main ? 14 + lv*3 : 8, main ? 160 : 110); if (main) burst(x, y, '#f4efe4', 6, 80);
  ring(x, y, rad, s.burnDur ? '#ff6b4a' : '#ffd84a', main ? .3 : .2);
  if (S.peels.length < 40) S.peels.push({x, y, rot:Math.random()*6, life: main ? 1.6 : .9, max: main ? 1.6 : .9, chili:!!s.burnDur, sc: main ? 1 : .7});
  if (main) tone(1100, .28, 'sine', .035, .32, .25);
  if (main && s.shrapnel) {
    const near = S.enemies.filter(e => !e.dead && Math.hypot(e.x - x, e.y - y) <= G.shrapnelRange).sort((a, b) => Math.hypot(a.x - x, a.y - y) - Math.hypot(b.x - x, b.y - y)).slice(0, s.shrapnel);
    for (const e of near) { S.bolts.push({pts:[[x, y], [e.x, e.y]], col:'#ffcf3a', life:.1, w:1.5}); damage(e, dmg * G.shrapnelPct, 'bomb', opt); }
  }
  if (s.cluster > depth) for (let j = 0; j < 3; j++) {
    const a = Math.random()*Math.PI*2, r = main ? 28 : 18;
    S.delay.push({x:x + Math.cos(a)*r, y:y + Math.sin(a)*r, t:.12 + j*.07, dmg:dmg*G.clusterPct, rad:Math.max(16, rad*.55), s, depth:depth + 1});
  }
  if (main && s.firePatch) S.fires.push({x, y, r:rad * .8, t:s.firePatch, dps:dmg * G.firePatchDps});
  if (!RM) S.shake = Math.max(S.shake, main ? 2 + lv*.6 : 1);
  boomT(main ? .06 + lv*.015 : .03);
}
function wave(x1, y1, x2, y2){ const pts = [], n = 10, dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy) || 1; for (let i = 0; i <= n; i++) { const t = i / n, w = Math.sin(t * Math.PI * 3 + S.t * 20) * 4; pts.push([x1 + dx*t - dy/L*w, y1 + dy*t + dx/L*w]); } return pts; }
function jag(x1, y1, x2, y2){
  const pts = [[x1, y1]];
  for (let i = 1; i < 5; i++) { const t = i / 5; pts.push([x1 + (x2-x1)*t + rnd(-6, 6), y1 + (y2-y1)*t + rnd(-6, 6)]); }
  pts.push([x2, y2]); return pts;
}

// ---------- draw ----------
const cvs = $('cv'), ctx = cvs.getContext('2d');
let scale = 1;
function resize(){
  const w = cvs.getBoundingClientRect().width || W, dpr = Math.min(window.devicePixelRatio || 1, 2);
  cvs.style.aspectRatio = `${W}/${H}`;
  cvs.width = Math.round(w * dpr); cvs.height = Math.round(w * H / W * dpr); scale = cvs.width / W;
}
const DISPF = '"ZCOOL QingKe HuangYou","Noto Sans SC",system-ui,sans-serif';
const FONT = (w, px) => `${px}px ${DISPF}`;
const CJK = (w, px) => `${w} ${px}px "Noto Sans SC",system-ui,sans-serif`;
const INK = '#3b2a1e', INK2 = '#1d1a28';

function fitText(txt, x, y, maxW, size){ ctx.font = CJK(900, size); const w = ctx.measureText(txt).width; if (w > maxW) ctx.font = CJK(900, size * maxW / w); ctx.fillText(txt, x, y); }
// chunky outlined text (display font), centred
function inkText(txt, x, y, size, col = '#fff', o = {}){
  ctx.font = FONT(400, size); ctx.textAlign = o.align || 'center'; ctx.lineJoin = 'round';
  if (o.maxW) { const w = ctx.measureText(txt).width; if (w > o.maxW) ctx.font = FONT(400, size * o.maxW / w); }
  if (o.drop !== false) { ctx.fillStyle = 'rgba(0,0,0,.28)'; ctx.strokeStyle = 'rgba(0,0,0,.28)'; ctx.lineWidth = size * .26; ctx.strokeText(txt, x, y + size * .12); }
  ctx.strokeStyle = o.ink || INK2; ctx.lineWidth = size * .24; ctx.strokeText(txt, x, y);
  ctx.fillStyle = col; ctx.fillText(txt, x, y);
}
// dark capsule plaque, first glyph gold (matches the lobby labels)
function plaque(txt, x, y, size = 11){
  ctx.font = FONT(400, size); const w = ctx.measureText(txt).width + 14, h = size + 8;
  ctx.fillStyle = 'rgba(32,30,44,.85)'; ctx.beginPath(); ctx.roundRect(x - w/2, y - h/2, w, h, 6); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,.22)'; ctx.lineWidth = 1; ctx.stroke();
  ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
  const first = txt[0], rest = txt.slice(1), fw = ctx.measureText(first).width, x0 = x - (w - 14)/2;
  ctx.strokeStyle = INK2; ctx.lineWidth = size * .22; ctx.lineJoin = 'round';
  ctx.strokeText(first, x0, y + 1); ctx.fillStyle = '#ffe27a'; ctx.fillText(first, x0, y + 1);
  ctx.strokeText(rest, x0 + fw, y + 1); ctx.fillStyle = '#fff'; ctx.fillText(rest, x0 + fw, y + 1);
  ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'center';
}

// ---------- art slots (filled from the 「美术资源」 sheet or imported images; vector fallback otherwise) ----------
const ART = {};
let ART_DEF = [], ART_LOCAL = {}, artNote = '';
try { ART_LOCAL = JSON.parse(localStorage.getItem('bd-art') || '{}') || {}; } catch (e) { ART_LOCAL = {}; }
function loadArt(){
  for (const k in ART) delete ART[k];
  const defs = {}; for (const a of ART_DEF) defs[a.key] = a;
  for (const k in ART_LOCAL) if (!defs[k]) defs[k] = {key:k};
  for (const k in defs) {
    const a = defs[k], src = ART_LOCAL[k] || a.src; if (!src) continue;
    const img = new Image(), e = ART[k] = Object.assign({}, a, {img, ok:false, err:false, local:!!ART_LOCAL[k]});
    img.onload = () => { e.ok = true; bgKey = ''; artStatus(); applyArtIcons(); };
    img.onerror = () => { e.err = true; artStatus(); };
    img.src = src;
  }
  bgKey = ''; artStatus(); applyArtIcons();
}
const art = key => { const e = ART[key]; return e && e.ok ? e : null; };
const num0 = (v, d) => { const n = Number(v); return v === '' || v == null || !isFinite(n) ? d : n; };
// draws a sprite anchored at (x, y); w/h in field units (360 × 600). Horizontal strips animate (frames, fps).
function drawArt(key, x, y, o = {}){
  const e = art(key); if (!e) return false;
  const fr = Math.max(1, num0(e.frames, 1) | 0), fw = e.img.naturalWidth / fr, fh = e.img.naturalHeight;
  const i = fr > 1 ? Math.floor((o.t ?? S.t) * num0(e.fps, 8)) % fr : 0;
  const sc = o.sc || 1, w = num0(e.w, fw) * sc, h = num0(e.h, fh) * sc;
  ctx.save(); ctx.translate(x, y); if (o.rot) ctx.rotate(o.rot); if (o.face === -1) ctx.scale(-1, 1);
  ctx.drawImage(e.img, i * fw, 0, fw, fh, -w * num0(e.ax, .5), -h * num0(e.ay, 1), w, h);
  ctx.restore(); return true;
}
function applyArtIcons(){
  document.querySelectorAll('[data-art]').forEach(el => {
    if (!el.dataset.svg) el.dataset.svg = el.innerHTML;
    const e = art(el.dataset.art);
    const html = e ? `<img src="${e.img.src}" alt="" width="38" height="38" style="width:38px;height:38px;object-fit:contain">` : el.dataset.svg;
    if (el.innerHTML !== html) el.innerHTML = html;
  });
}
function artStatus(){
  const el = document.getElementById('artStatus'); if (!el) return;
  const all = Object.values(ART), ok = all.filter(e => e.ok).length, bad = all.filter(e => e.err).map(e => e.key), loc = Object.keys(ART_LOCAL).length;
  el.textContent = !all.length ? tr('美术资源：全部使用占位图') : tf('美术资源：已替换 {n} 项（其中导入 {m} 张）', {n:ok, m:loc}) + (bad.length ? ' · ' + tf('加载失败：{x}', {x:bad.join(', ')}) : '') + (artNote ? ' · ' + artNote : '');
}

// ---------- painted meadow (cached per map / scale) ----------
let bgCache = null, bgKey = '';
const seeded = seed => { let s = (seed >>> 0) || 1; return () => (s = (Math.imul(s, 1664525) + 1013904223) >>> 0) / 4294967296; };
const hashStr = s => { let h = 2166136261; for (const c of s) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; };
function distToRoutes(x, y){
  let m = 1e9;
  for (const R of ROUTES) for (let i = 0; i < R.pts.length - 1; i++) {
    const [x1, y1] = R.pts[i], [x2, y2] = R.pts[i + 1], dx = x2 - x1, dy = y2 - y1, L = dx*dx + dy*dy || 1;
    const t = Math.max(0, Math.min(1, ((x - x1)*dx + (y - y1)*dy) / L)); m = Math.min(m, Math.hypot(x - x1 - dx*t, y - y1 - dy*t));
  }
  return m;
}
function pTree(g, x, y, s, r){
  g.save(); g.translate(x, y); g.scale(s, s); g.lineJoin = 'round'; g.lineWidth = 1.6;
  g.fillStyle = 'rgba(0,0,0,.2)'; g.beginPath(); g.ellipse(0, 2, 13, 4, 0, 0, Math.PI*2); g.fill();
  g.fillStyle = '#7a4e2e'; g.strokeStyle = INK; g.beginPath(); g.roundRect(-3, -12, 6, 14, 2); g.fill(); g.stroke();
  const dark = r() < .5 ? '#4f9a3e' : '#3f8a3a';
  for (const [top, base, hw] of [[-50, -13, 16], [-62, -31, 12]]) {
    g.fillStyle = dark; g.strokeStyle = '#25542a';
    g.beginPath(); g.moveTo(0, top); g.lineTo(hw, base); g.quadraticCurveTo(0, base + 6, -hw, base); g.closePath(); g.fill(); g.stroke();
    g.fillStyle = '#86cf58'; g.beginPath(); g.moveTo(0, top); g.lineTo(-hw, base); g.quadraticCurveTo(-hw*.4, base + 2, 0, base + 1); g.closePath(); g.fill();
  }
  g.restore();
}
function pBush(g, x, y, s){
  g.save(); g.translate(x, y); g.scale(s, s); g.lineWidth = 1.5; g.strokeStyle = '#2f6b2c';
  g.fillStyle = 'rgba(0,0,0,.18)'; g.beginPath(); g.ellipse(0, 2, 14, 4, 0, 0, Math.PI*2); g.fill();
  g.fillStyle = '#5aa845';
  for (const [cx, cy, rr] of [[-7, -5, 8], [6, -6, 9], [0, -11, 8]]) { g.beginPath(); g.arc(cx, cy, rr, 0, Math.PI*2); g.fill(); g.stroke(); }
  g.fillStyle = '#5aa845'; g.beginPath(); g.arc(-1, -7, 7, 0, Math.PI*2); g.fill();
  g.fillStyle = '#8fd06a'; g.beginPath(); g.arc(-2, -14, 3, 0, Math.PI*2); g.arc(8, -9, 2.4, 0, Math.PI*2); g.fill();
  g.restore();
}
function pRock(g, x, y, s){
  g.save(); g.translate(x, y); g.scale(s, s); g.lineJoin = 'round';
  g.fillStyle = '#a9b2ba'; g.strokeStyle = '#4a5560'; g.lineWidth = 1.5;
  g.beginPath(); g.moveTo(-12, 0); g.lineTo(-8, -10); g.lineTo(2, -13); g.lineTo(12, -6); g.lineTo(12, 0); g.closePath(); g.fill(); g.stroke();
  g.fillStyle = '#d6dde3'; g.beginPath(); g.moveTo(-8, -10); g.lineTo(2, -13); g.lineTo(0, -4); g.closePath(); g.fill();
  g.restore();
}
function pFlower(g, x, y, col){
  g.fillStyle = col; for (const [dx, dy] of [[-3, 0], [3, 0], [0, -3], [0, 3]]) { g.beginPath(); g.arc(x + dx, y + dy, 2.6, 0, Math.PI*2); g.fill(); }
  g.fillStyle = '#ffb21a'; g.beginPath(); g.arc(x, y, 1.8, 0, Math.PI*2); g.fill();
}
function paintMeadow(g){
  const r = seeded(hashStr(CUR_MAP || 'x'));
  const grd = g.createLinearGradient(0, 0, 0, H); grd.addColorStop(0, '#a3da6c'); grd.addColorStop(1, '#78bf52');
  g.fillStyle = grd; g.fillRect(0, 0, W, H);
  for (let i = 0; i < 90; i++) { g.globalAlpha = .4; g.fillStyle = ['#b9e57c', '#6fb64c', '#94d266', '#c6ea8a'][i % 4];
    g.beginPath(); g.ellipse(r() * W, r() * H, 12 + r() * 26, 5 + r() * 9, 0, 0, Math.PI*2); g.fill(); }
  g.globalAlpha = 1; g.strokeStyle = '#4f9a3e'; g.lineWidth = 1.4; g.lineCap = 'round';
  for (let i = 0; i < 70; i++) { const x = r() * W, y = r() * H; g.beginPath(); g.moveTo(x, y); g.lineTo(x + 2, y - 6); g.lineTo(x + 4, y); g.moveTo(x + 5, y); g.lineTo(x + 6.5, y - 4); g.stroke(); }
  // decor, kept clear of the track and pads, drawn back-to-front
  const items = [];
  for (let i = 0; i < 260 && items.length < 46; i++) {
    const x = 8 + r() * (W - 16), y = 14 + r() * (H - 20), roll = r();
    const kind = roll < .2 ? 'tree' : roll < .45 ? 'bush' : roll < .9 ? 'flower' : 'rock';
    const clear = kind === 'tree' ? 34 : kind === 'flower' ? 24 : 30;
    if (distToRoutes(x, y) < clear || distToRoutes(x, y - 20) < (kind === 'tree' ? 28 : 0)) continue;
    if (PADS.some(([px, py]) => Math.hypot(px - x, py - y) < (kind === 'tree' ? 34 : 24) || (kind === 'tree' && Math.abs(px - x) < 18 && py < y && y - py < 60))) continue;
    if (items.some(o => Math.hypot(o.x - x, o.y - y) < 20)) continue;
    items.push({x, y, kind, s:.55 + r() * .3, col:['#ff8fa0', '#ffffff', '#ffd23f', '#c8a0ff'][Math.floor(r() * 4)]});
  }
  items.sort((a, b) => a.y - b.y);
  for (const o of items) {
    if (o.kind === 'tree') pTree(g, o.x, o.y, o.s, r);
    else if (o.kind === 'bush') pBush(g, o.x, o.y, o.s);
    else if (o.kind === 'rock') pRock(g, o.x, o.y, o.s * .9);
    else pFlower(g, o.x, o.y, o.col);
  }
}
function ensureBg(){
  const mapArt = art('map.' + CUR_MAP), key = [CUR_MAP, cvs.width, mapArt ? mapArt.img.src.length : 0].join('|');
  if (bgCache && key === bgKey) return;
  bgKey = key;
  bgCache = bgCache || document.createElement('canvas');
  bgCache.width = cvs.width; bgCache.height = cvs.height;
  const g = bgCache.getContext('2d'); g.setTransform(scale, 0, 0, scale, 0, 0);
  if (mapArt) g.drawImage(mapArt.img, 0, 0, W, H); else paintMeadow(g);
}
function drawField(){
  ensureBg();
  ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.drawImage(bgCache, 0, 0); ctx.restore();
  const mapArt = art('map.' + CUR_MAP), cover = mapArt && +mapArt.cover;
  ctx.lineJoin = 'round'; ctx.lineCap = 'butt';
  const line = () => { ctx.beginPath(); for (const R of ROUTES) { ctx.moveTo(R.pts[0][0], R.pts[0][1]); for (const [x,y] of R.pts.slice(1)) ctx.lineTo(x, y); } };
  if (!cover) {
    const elite = S.cur.type === 'elite' && S.state === 'wave';
    ctx.save(); ctx.translate(0, 4); line(); ctx.strokeStyle = 'rgba(0,0,0,.16)'; ctx.lineWidth = 46; ctx.stroke(); ctx.restore();
    line(); ctx.strokeStyle = INK; ctx.lineWidth = 45; ctx.stroke();
    line(); ctx.strokeStyle = '#fff7e6'; ctx.lineWidth = 41.5; ctx.stroke();
    line(); ctx.strokeStyle = elite ? '#8e2f22' : '#c35a34'; ctx.lineWidth = 36; ctx.stroke();
    line(); ctx.strokeStyle = elite ? '#b8402c' : '#e5815a'; ctx.lineWidth = 31; ctx.stroke();
    line(); ctx.setLineDash([10, 9]); ctx.strokeStyle = 'rgba(255,255,255,.6)'; ctx.lineWidth = 1.8; ctx.stroke(); ctx.setLineDash([]);
  }
  const seen = [], fresh = (x, y) => { if (seen.some(([a, b]) => Math.hypot(a - x, b - y) < 30)) return false; seen.push([x, y]); return true; };
  ROUTES.forEach((R, ri) => {
    const L = R.len;
    let d0 = 0; while (d0 < L) { const [x, y] = at(d0, ri); if (x > 6 && x < W - 6 && y > 6 && y < H - 6) break; d0 += 4; }
    const [sx, sy] = at(d0 + 8, ri), sg = segAt(d0 + 8, ri), hz = sg.y1 === sg.y2;
    if (fresh(sx, sy)) {
      ctx.fillStyle = '#fff'; ctx.strokeStyle = INK; ctx.lineWidth = 1.2;
      if (hz) { ctx.fillRect(sx - 2, sy - 18, 4, 36); ctx.strokeRect(sx - 2, sy - 18, 4, 36); } else { ctx.fillRect(sx - 18, sy - 2, 36, 4); ctx.strokeRect(sx - 18, sy - 2, 36, 4); }
      const lx = hz ? sx : sx + (sx >= W / 2 ? -40 : 40), ly = hz ? (sy > 34 ? sy - 30 : sy + 32) : Math.max(sy, 24);
      plaque(tr('起点'), Math.min(W - 24, Math.max(24, lx)), ly, 11);
    }
    let d1 = L; while (d1 > 0) { const [x, y] = at(d1, ri); if (x > 10 && x < W - 10 && y > 10 && y < H - 10) break; d1 -= 4; }
    const [fx, fy] = at(d1 - 10, ri), fg = segAt(d1 - 10, ri), fh = fg.y1 === fg.y2;
    if (fresh(fx, fy + 1000)) {
      for (let a = 0; a < 9; a++) for (let b = 0; b < 2; b++) { ctx.fillStyle = (a + b) % 2 ? INK2 : '#fff'; if (fh) ctx.fillRect(fx - 4 + b*4, fy - 17 + a*3.8, 4, 3.8); else ctx.fillRect(fx - 17 + a*3.8, fy - 4 + b*4, 3.8, 4); }
      const lx = fh ? fx : fx + (fx >= W / 2 ? -40 : 40), ly = fh ? (fy > H - 44 ? fy - 30 : fy + 32) : Math.min(fy, H - 40);
      plaque(tr('终点'), Math.min(W - 24, Math.max(24, lx)), ly, 11);
    }
  });
  const marks = [];
  ROUTES.forEach((R, ri) => { for (let d = 400; d < R.len - 120; d += 400) {
    const s = segAt(d, ri), [x,y] = at(d, ri), horiz = s.y1 === s.y2;
    if (marks.some(([a, b]) => Math.hypot(a - x, b - y) < 40)) continue; marks.push([x, y]);
    ctx.fillStyle = 'rgba(255,255,255,.85)';
    if (horiz) ctx.fillRect(x - 1, y - 15, 2, 30); else ctx.fillRect(x - 15, y - 1, 30, 2);
    inkText(`${d} m`, horiz ? x : x + (x > 180 ? -38 : 38), horiz ? y + 32 : y + 4, 11, '#fff', {drop:false});
  } });
  for (const sl of S.slimes) { ctx.globalAlpha = Math.min(.6, sl.life / sl.max); ctx.fillStyle = '#7be36a'; ctx.beginPath(); ctx.ellipse(sl.x, sl.y + 6, sl.r * .9, sl.r * .55, 0, 0, Math.PI*2); ctx.fill(); }
  ctx.globalAlpha = 1;
  for (const p of S.peels) {
    ctx.save(); ctx.globalAlpha = Math.min(1, p.life / p.max * 2);
    if (!drawArt(p.chili ? 'fx.chili' : 'fx.peel', p.x, p.y, {rot:p.rot, sc:p.sc})) {
      ctx.translate(p.x, p.y); ctx.rotate(p.rot); ctx.scale(p.sc, p.sc);
      for (const a of [0, 2.1, 4.2]) { ctx.save(); ctx.rotate(a); ctx.beginPath(); ctx.ellipse(0, 5, 2.6, 5.8, 0, 0, Math.PI*2); ctx.fillStyle = p.chili ? '#d9381e' : '#ffd84a'; ctx.strokeStyle = INK; ctx.lineWidth = 1; ctx.fill(); ctx.stroke(); ctx.restore(); }
      ctx.fillStyle = p.chili ? '#7a1c10' : '#6b4f12'; ctx.beginPath(); ctx.arc(0, 0, 2, 0, Math.PI*2); ctx.fill();
    }
    ctx.restore();
  }
  for (const f of S.fires) {
    ctx.globalAlpha = Math.min(1, f.t) * (.28 + Math.sin(S.t*20 + f.x)*.08);
    ctx.fillStyle = '#d9381e'; ctx.beginPath(); ctx.arc(f.x, f.y, f.r, 0, Math.PI*2); ctx.fill();
  }
  ctx.globalAlpha = 1;
}
// round stone pad (empty slot / device base)
function stonePad(x, y, rim){
  ctx.fillStyle = 'rgba(0,0,0,.22)'; ctx.beginPath(); ctx.ellipse(x, y + 7, 18, 7, 0, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#7a6a56'; ctx.beginPath(); ctx.ellipse(x, y + 4, 17, 8, 0, 0, Math.PI*2); ctx.fill();
  ctx.fillStyle = '#ddd2ba'; ctx.strokeStyle = rim || INK; ctx.lineWidth = rim ? 2.4 : 1.6; ctx.beginPath(); ctx.ellipse(x, y, 17, 8, 0, 0, Math.PI*2); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#f1eadb'; ctx.beginPath(); ctx.ellipse(x - 4, y - 1.5, 9, 3.2, 0, 0, Math.PI*2); ctx.fill();
}
function drawPads(){
  PADS.forEach(([x,y], i) => {
    if (S.towers.some(t => t.pad === i)) return;
    const sel = S.sel === i;
    if (sel) { ctx.save(); ctx.globalAlpha = .55 + Math.sin(S.t*6)*.2; ctx.fillStyle = '#fff3a0'; ctx.beginPath(); ctx.ellipse(x, y + 2, 24, 13, 0, 0, Math.PI*2); ctx.fill(); ctx.restore(); }
    if (!drawArt('pad.empty', x, y + 8)) {
      stonePad(x, y, sel ? '#ffb21a' : null);
      ctx.lineCap = 'round'; ctx.strokeStyle = INK; ctx.lineWidth = 4.5;
      ctx.beginPath(); ctx.moveTo(x - 5, y); ctx.lineTo(x + 5, y); ctx.moveTo(x, y - 4); ctx.lineTo(x, y + 4); ctx.stroke();
      ctx.strokeStyle = sel ? '#ffd23f' : '#fff'; ctx.lineWidth = 2.4; ctx.stroke();
    }
  });
}
// operator outfits per device kind (vector placeholders until tower art arrives)
const OPS = {
  dart:  {shirt:'#e0473a', shorts:'#2b3a6b', shoe:'#ffffff', hair:{col:'#2b2238'}, cap:'#3a8fd0'},
  bomb:  {shirt:'#ffd23f', shorts:'#3a8fd0', shoe:'#3ec7c0', hair:{col:'#7a3b1e'}},
  frost: {shirt:'#3a8fd0', shorts:'#ffffff', shoe:'#e0473a', hair:{col:'#e9c84a'}, cap:'#ffffff'},
  sniper:{shirt:'#c98a4a', shorts:'#4a3424', shoe:'#ffd23f', hair:{col:'#2b2238'}},
  tesla: {shirt:'#9a6ad8', shorts:'#2b2238', shoe:'#ff8fd0', hair:{col:'#c0452f', style:'bob'}},
  miner: {shirt:'#f7931a', shorts:'#2b2238', shoe:'#ffffff', hair:{col:'#2b2238'}, cap:'#2b2238'},
  gem:   {shirt:'#2b2238', shorts:'#3a8fd0', shoe:'#ffd23f', hair:{col:'#e9e2d0'}, cap:'#00a6f4'},
};
function drawProp(t, hx, hy, u){
  const s = t.s, top = Math.max(...t.p);
  ctx.lineJoin = 'round'; ctx.strokeStyle = INK; ctx.lineWidth = .7*u;
  if (t.kind === 'dart') {
    const k = t.recoil * 3*u;
    ctx.fillStyle = top >= 4 ? '#ffcf3a' : '#e5484d'; ctx.beginPath(); ctx.roundRect(hx - 1.6*u, hy - 5*u - k, 3.6*u, 5.4*u, .8*u); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#fff'; ctx.fillRect(hx - 1.6*u, hy - 3.6*u - k, 3.6*u, 1.1*u);
  } else if (t.kind === 'bomb') {
    const n = 1 + Math.min(2, t.p[1]);
    for (let i = 0; i < n; i++) { ctx.save(); ctx.translate(hx + i*1.2*u, hy - 2*u); ctx.rotate(-.5 + i*.35); ctx.beginPath(); ctx.arc(0, 0, 3*u, Math.PI*1.05, Math.PI*1.95); ctx.strokeStyle = INK; ctx.lineWidth = 2.6*u; ctx.lineCap = 'round'; ctx.stroke(); ctx.strokeStyle = s.burnDur ? '#ff8a3d' : '#ffd84a'; ctx.lineWidth = 1.6*u; ctx.stroke(); ctx.restore(); }
  } else if (t.kind === 'frost') {
    ctx.strokeStyle = '#3ec7c0'; ctx.lineWidth = 1.2*u; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(hx, hy); ctx.quadraticCurveTo(hx + 6*u, hy - 2*u, hx + 6*u, hy + 6*u); ctx.stroke();
    ctx.save(); ctx.translate(hx + 6*u, hy + 6*u); ctx.rotate(S.t * 4);
    for (let k = 0; k < 3; k++) { ctx.rotate(Math.PI*2/3); ctx.strokeStyle = '#8fe8ff'; ctx.lineWidth = .9*u; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(4*u, 0); ctx.stroke(); }
    ctx.fillStyle = '#2b5f8a'; ctx.beginPath(); ctx.arc(0, 0, 1.4*u, 0, Math.PI*2); ctx.fill(); ctx.restore();
  } else if (t.kind === 'gem') {
    drawGem(gemOf(t), hx + .6*u, hy - 2.6*u - t.recoil * 2*u, 5.4*u, Math.sin(S.t * 3) * .3);
  } else if (t.kind === 'miner') {
    // mining rig beside the operator: case, fans, LEDs; glows hot on the heat path
    ctx.save(); ctx.translate(-9*u, 5*u);
    if (s.heat) { ctx.fillStyle = `rgba(255,110,50,${.25 + Math.sin(S.t * 8) * .1})`; ctx.beginPath(); ctx.arc(0, -4*u, 8*u, 0, Math.PI*2); ctx.fill(); }
    ctx.fillStyle = '#2b2a3a'; ctx.strokeStyle = INK; ctx.lineWidth = .6*u; ctx.beginPath(); ctx.roundRect(-4.6*u, -10*u, 9.2*u, 10.5*u, 1.2*u); ctx.fill(); ctx.stroke();
    for (const fy of [-7*u, -3*u]) { ctx.save(); ctx.translate(-1.2*u, fy); ctx.rotate(S.t * (8 + (s.hash || 1) * 2)); ctx.strokeStyle = '#9aa3c7'; ctx.lineWidth = .7*u; for (let k = 0; k < 3; k++) { ctx.rotate(Math.PI * 2 / 3); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(1.5*u, 0); ctx.stroke(); } ctx.restore(); }
    ctx.fillStyle = Math.sin(S.t * 12) > 0 ? '#00ff9c' : '#f7931a'; ctx.fillRect(2*u, -8.5*u, 1.4*u, 1*u); ctx.fillStyle = '#f7931a'; ctx.fillRect(2*u, -6*u, 1.4*u, 1*u);
    if (t.p[0] >= 3) { ctx.fillStyle = '#3ec7c0'; ctx.fillRect(-4*u, .8*u, 8*u, 1.4*u); }
    ctx.restore();
  } else if (t.kind === 'sniper') {
    ctx.fillStyle = '#2b2238'; ctx.fillRect(hx - .8*u, hy - 2.4*u, 2*u, 3*u);
  } else {
    const p = 1 + t.recoil * .25;
    ctx.save(); ctx.translate(hx - 9*u, hy + 4*u); ctx.scale(p, p);
    ctx.fillStyle = '#2b2034'; ctx.beginPath(); ctx.roundRect(-3.4*u, -9*u, 6.8*u, 10*u, 1.2*u); ctx.fill(); ctx.stroke();
    ctx.fillStyle = '#ff8fd0'; ctx.beginPath(); ctx.arc(0, -2.6*u, 2*u, 0, Math.PI*2); ctx.arc(0, -6.6*u, 1.1*u, 0, Math.PI*2); ctx.fill();
    ctx.restore();
  }
}
function drawDrone(x, y, t){
  ctx.save(); ctx.translate(x, y + Math.sin(S.t * 3 + t.pad) * 1.5);
  ctx.strokeStyle = INK; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(-8, -6); ctx.lineTo(8, 6); ctx.moveTo(8, -6); ctx.lineTo(-8, 6); ctx.stroke();
  for (const [rx, ry] of [[-8, -6], [8, -6], [-8, 6], [8, 6]]) { ctx.save(); ctx.translate(rx, ry); ctx.rotate(S.t * 40); ctx.fillStyle = 'rgba(191,233,255,.8)'; ctx.fillRect(-4.5, -.9, 9, 1.8); ctx.restore(); }
  ctx.fillStyle = '#c98a4a'; ctx.strokeStyle = INK; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.roundRect(-5, -3.5, 10, 7, 1.5); ctx.fill(); ctx.stroke();
  ctx.fillStyle = '#ff9d7a'; ctx.fillRect(-5, -.8, 10, 1.6);
  ctx.restore();
}
function drawTowers(){
  const list = S.towers.slice().sort((a, b) => a.y - b.y);
  for (const t of list) {
    const s = t.s, sel = S.sel === t.pad;
    if (sel && s.range < 500) { ctx.beginPath(); ctx.arc(t.x, t.y, s.range, 0, Math.PI*2); ctx.fillStyle = 'rgba(255,255,255,.16)'; ctx.fill(); ctx.setLineDash([8, 6]); ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.lineWidth = 2; ctx.stroke(); ctx.setLineDash([]); }
    if ((s.auraRate || s.auraDmg) && sel) { ctx.setLineDash([3, 5]); ctx.beginPath(); ctx.arc(t.x, t.y, s.auraR, 0, Math.PI*2); ctx.strokeStyle = 'rgba(143,232,255,.9)'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.setLineDash([]); }
    if (s.staticDps) { ctx.globalAlpha = .14 + Math.sin(S.t*18)*.05; ctx.beginPath(); ctx.arc(t.x, t.y, s.range, 0, Math.PI*2); ctx.fillStyle = '#c9a6ff'; ctx.fill(); ctx.globalAlpha = 1; }
  }
  for (const t of list) {
    const s = t.s, sel = S.sel === t.pad, top = Math.max(...t.p), ti = t.p.indexOf(top);
    if (top >= 3) { ctx.save(); ctx.shadowColor = PCOL[ti]; ctx.shadowBlur = top === 5 ? 18 : 9; ctx.fillStyle = PCOL[ti]; ctx.globalAlpha = .55; ctx.beginPath(); ctx.ellipse(t.x, t.y + 1, 22, 11, 0, 0, Math.PI*2); ctx.fill(); ctx.restore(); }
    if (sel) { ctx.save(); ctx.globalAlpha = .6 + Math.sin(S.t*6)*.2; ctx.fillStyle = '#fff3a0'; ctx.beginPath(); ctx.ellipse(t.x, t.y + 2, 24, 13, 0, 0, Math.PI*2); ctx.fill(); ctx.restore(); }
    if (!drawArt('pad.base', t.x, t.y + 8)) stonePad(t.x, t.y, sel ? '#ffb21a' : top >= 3 ? PCOL[ti] : null);
    if (t.disT > 0) ctx.globalAlpha = .45;
    const face = Math.cos(t.ang ?? -Math.PI/2) < 0 ? -1 : 1;
    const evolved = top >= 3 ? `tower.${t.kind}.p${ti + 1}` : '';
    if (!(evolved && drawArt(evolved, t.x, t.y + 2, {face})) && !drawArt(`tower.${t.kind}`, t.x, t.y + 2, {face})) {
      const O = OPS[t.kind] || OPS.dart, u = 1.22;
      const L = {skin: SKIN[t.pad % SKIN.length], shirt: O.shirt, shorts: O.shorts, shoe: O.shoe, hair: O.hair, band: top >= 3 ? PCOL[ti] : null, cap: O.cap};
      drawRunner(t.x, t.y - 9.5*u, u, L, face, t.recoil * 1.2, {stand:true, crown: top === 5, prop:(hx, hy) => drawProp(t, hx, hy, u)});
      if (t.kind === 'sniper') drawDrone(t.x + 12*face, Math.max(12, t.y - 38), t);
    }
    ctx.globalAlpha = 1;
    if (t.bRate < 1 || t.bDmg > 1) { ctx.beginPath(); ctx.arc(t.x + 15, t.y - 34, 3.4, 0, Math.PI*2); ctx.fillStyle = '#8fe8ff'; ctx.strokeStyle = INK; ctx.lineWidth = 1.2; ctx.fill(); ctx.stroke(); }
    if (t.disT > 0) inkText(tr('哈'), t.x + 15, t.y - 34, 14, '#ffd23f');
    if (top > 0) {
      ctx.font = FONT(400, 11); const txt = code(t), w = ctx.measureText(txt).width + 10;
      ctx.fillStyle = '#fffaf0'; ctx.strokeStyle = INK; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.roundRect(t.x - w/2, t.y + 10, w, 13, 6.5); ctx.fill(); ctx.stroke();
      ctx.fillStyle = INK; ctx.textAlign = 'center'; ctx.fillText(txt, t.x, t.y + 20.5);
    }
  }
}
// ---------- gems (gem launcher paths: ruby / topaz / sapphire), drawn from one facet table for SVG and canvas ----------
const GEMS = {
  ruby: {outer:[[128,45],[370,45],[445,242],[248,445],[52,242]], facets:[
    [[[128,45],[370,45],[305,128],[192,128]], '#ff4a00'], [[[128,45],[192,128],[160,222],[52,242]], '#ffd8d2'],
    [[[370,45],[445,242],[340,222],[305,128]], '#d81a00'], [[[52,242],[160,222],[248,312],[248,445]], '#ff0000'],
    [[[445,242],[248,445],[248,312],[340,222]], '#75003a'], [[[192,128],[305,128],[340,222],[248,312],[160,222]], '#fffaf2']]},
  topaz: {outer:[[250,35],[445,255],[250,460],[50,255]], facets:[
    [[[250,35],[50,255],[150,248]], '#ffd030'], [[[250,35],[150,248],[348,248]], '#ffffe0'], [[[250,35],[348,248],[445,255]], '#ffaa00'],
    [[[50,255],[150,248],[250,460]], '#ffaa00'], [[[150,248],[348,248],[250,460]], '#ffcc33'], [[[348,248],[445,255],[250,460]], '#ff7a20']]},
  sapphire: {outer:[[135,50],[185,45],[310,45],[365,55],[460,172],[250,452],[40,172]], facets:[
    [[[135,50],[185,45],[135,205],[40,172]], '#00ffff'], [[[185,45],[310,45],[362,205],[135,205]], '#eefcff'],
    [[[310,45],[365,55],[460,172],[362,205]], '#1ac0f0'], [[[40,172],[135,205],[250,452]], '#00ffc0'],
    [[[135,205],[362,205],[250,452]], '#50d8ff'], [[[362,205],[460,172],[250,452]], '#3080e0']]},
};
const GEM_ORDER = ['ruby', 'topaz', 'sapphire'];
const gemSVG = (k, size = 24) => { const g = GEMS[k], P = pts => pts.map(p => p.join(',')).join(' ');
  return `<svg viewBox="20 15 460 460" width="${size}" height="${size}" aria-hidden="true">${g.facets.map(([pts, c]) => `<polygon points="${P(pts)}" fill="${c}" stroke="#000" stroke-width="5" stroke-linejoin="round"/>`).join('')}<polygon points="${P(g.outer)}" fill="none" stroke="#000" stroke-width="22" stroke-linejoin="round"/></svg>`; };
function drawGem(k, x, y, size, rot = 0){
  const g = GEMS[k]; if (!g) return; const sc = size / 460;
  ctx.save(); ctx.translate(x, y); if (rot) ctx.rotate(rot); ctx.scale(sc, sc); ctx.translate(-250, -245); ctx.lineJoin = 'round';
  for (const [pts, c] of g.facets) { ctx.beginPath(); pts.forEach(([a, b], i) => i ? ctx.lineTo(a, b) : ctx.moveTo(a, b)); ctx.closePath(); ctx.fillStyle = c; ctx.fill(); ctx.strokeStyle = '#000'; ctx.lineWidth = 6; ctx.stroke(); }
  ctx.beginPath(); g.outer.forEach(([a, b], i) => i ? ctx.lineTo(a, b) : ctx.moveTo(a, b)); ctx.closePath(); ctx.lineWidth = 24; ctx.stroke();
  ctx.restore();
}
// which gem a gem launcher fires: its main path, ruby when it has none yet
const gemOf = t => { const top = Math.max(...t.p); return top > 0 ? GEM_ORDER[t.p.indexOf(top)] : GEM_ORDER[(t.pad || 0) % 3]; };

// ---------- STEPN-style mystery box (front view) ----------
const BOX_ART = `
  <rect x="40" y="70" width="940" height="820" fill="#eeeeee"/>
  <g fill="#3b3a36">
    <rect x="190" y="0" width="640" height="88" rx="10"/><rect x="190" y="874" width="640" height="88" rx="10"/>
    <rect x="0" y="385" width="62" height="200" rx="12"/><rect x="958" y="385" width="62" height="200" rx="12"/>
  </g>
  <clipPath id="bxTop"><rect x="198" y="6" width="624" height="76"/></clipPath><clipPath id="bxBot"><rect x="198" y="880" width="624" height="76"/></clipPath>
  <g fill="#00a6f4" clip-path="url(#bxTop)">${[0,1,2,3,4,5,6].map(i => `<polygon points="${200 + i*105},0 ${245 + i*105},0 ${290 + i*105},88 ${245 + i*105},88"/>`).join('')}</g>
  <g fill="#00a6f4" clip-path="url(#bxBot)">${[0,1,2,3,4,5,6].map(i => `<polygon points="${200 + i*105},874 ${245 + i*105},874 ${290 + i*105},962 ${245 + i*105},962"/>`).join('')}</g>
  <g stroke="#3b3a36" stroke-width="6" stroke-linejoin="round">
    <rect x="18" y="405" width="272" height="170" fill="#00a6f4"/><rect x="730" y="405" width="272" height="170" fill="#00a6f4"/>
    <rect x="425" y="88" width="165" height="190" fill="#00a6f4"/><rect x="425" y="684" width="165" height="190" fill="#00a6f4"/>
  </g>
  <g stroke="#3b3a36" stroke-width="5"><path d="M18 490 H290 M730 490 H1002 M507 88 V278 M507 684 V874"/></g>
  <g fill="#3b3a36"><rect x="290" y="405" width="50" height="170"/><rect x="680" y="405" width="50" height="170"/><rect x="425" y="278" width="165" height="45"/><rect x="425" y="640" width="165" height="44"/></g>
  ${[[1,1],[-1,1],[1,-1],[-1,-1]].map(([sx, sy]) => `<g transform="translate(${sx > 0 ? 0 : 1020} ${sy > 0 ? 0 : 962}) scale(${sx} ${sy})">
    <polygon points="125,262 240,130 350,130 350,310 298,358 125,358" fill="#00a6f4" stroke="#3b3a36" stroke-width="5" stroke-linejoin="round"/>
    <polygon points="170,265 248,175 315,175 315,295 280,327 170,327" fill="#eeeeee" stroke="#3b3a36" stroke-width="5" stroke-linejoin="round"/>
    <path d="M0 14 Q0 0 14 0 H195 V88 H100 L40 190 H14 Q0 190 0 176 Z" fill="#3b3a36"/>
    <polygon points="52,48 150,48 150,92 98,150 52,150" fill="#00a6f4"/><circle cx="96" cy="90" r="20" fill="#3b3a36"/>
  </g>`).join('')}
  <rect x="40" y="70" width="940" height="820" fill="none" stroke="#3b3a36" stroke-width="8"/>`;
const OCTA = (r, cx = 510, cy = 481) => Array.from({length:8}, (_, i) => { const a = Math.PI/8 + i*Math.PI/4; return `${(cx + r*Math.cos(a)).toFixed(1)},${(cy + r*Math.sin(a)).toFixed(1)}`; }).join(' ');
const CHEST = `<svg class="chest-svg" viewBox="0 0 1020 962" width="200" height="189" aria-hidden="true">
  <defs><g id="bxArt">${BOX_ART}</g>
    <clipPath id="q1"><rect x="0" y="0" width="510" height="481"/></clipPath><clipPath id="q2"><rect x="510" y="0" width="510" height="481"/></clipPath>
    <clipPath id="q3"><rect x="0" y="481" width="510" height="481"/></clipPath><clipPath id="q4"><rect x="510" y="481" width="510" height="481"/></clipPath></defs>
  <g class="q q1"><use href="#bxArt" clip-path="url(#q1)"/></g><g class="q q2"><use href="#bxArt" clip-path="url(#q2)"/></g>
  <g class="q q3"><use href="#bxArt" clip-path="url(#q3)"/></g><g class="q q4"><use href="#bxArt" clip-path="url(#q4)"/></g>
  <g class="core">
    <polygon points="${OCTA(185)}" fill="#3b3a36"/><polygon points="${OCTA(170)}" fill="#00a6f4"/>
    <polygon points="${OCTA(140)}" fill="#3b3a36"/><polygon points="${OCTA(122)}" fill="#eeeeee"/>
    <g class="bolt"><path d="M553 392 L455 497 L500 512 L470 592 L572 486 L526 470 Z" fill="#3b3a36"/></g>
  </g>
</svg>`;
// "Oh my God!" shout on the box burst (browser voice; muted with sound effects)
function shoutOMG(){
  if (muted || !window.speechSynthesis) return;
  try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance('Oh my God!'); u.lang = 'en-US'; u.rate = 1.12; u.pitch = 1.35; u.volume = 1;
    const v = speechSynthesis.getVoices().find(v => /^en(-|_)US/i.test(v.lang)); if (v) u.voice = v; speechSynthesis.speak(u); } catch (e) {}
}

const SKIN = ['#f1c7a3', '#d9a07a', '#a8714f', '#f6d7bd'];
const SHOE = {common:'#eceae4', uncommon:'#5fd39a', rare:'#6fb8ff', epic:'#c9a6ff', legendary:'#ff9d3a'};
function runnerLook(k, mini){
  const skin = SKIN[Math.floor(Math.random() * SKIN.length)];
  if (k === 'boss') return {skin, shirt:'#ff8a5c', shorts:'#3a160c', shoe:SHOE.legendary, band:'#ffcf3a'};
  if (k === 'arm' && !mini) return {skin, shirt:'#3b6fb6', shorts:'#1c2c4a', shoe:SHOE.rare, band:'#cfe2ff'};
  if (mini) return {skin, shirt:'#9ae6dc', shorts:'#24525c', shoe:SHOE.common, band:'#ffffff'};
  if (k === 'rain') return {skin, shirt:'#ffd23f', shorts:'#33507a', shoe:'#3a8fd0', hood:'#ffd23f', band:null};
  if (k === 'hop') return {skin, shirt:'#ff8fd0', shorts:'#5a2a6a', shoe:'#ff5ad1', spring:true, band:'#ffe0f4'};
  if (k === 'phones') return {skin, shirt:'#2b2a3a', shorts:'#1a1a24', shoe:SHOE.uncommon, phones:'#ff4fa0', band:null};
  if (k === 'whale') return {skin, shirt:'#4a78b8', shorts:'#22324a', shoe:SHOE.rare, print:'#cfe2ff', spout:true, band:null};
  return {skin, shirt:'#2fb3a6', shorts:'#1a3d44', shoe: Math.random() < .35 ? SHOE.uncommon : SHOE.common, band:'#ffffff'};
}
function bossLook(id){
  if (id === 'gilg')  return {skin:'#d9a07a', shirt:'#2b4aa0', shorts:'#c9a227', shoe:'#ffd84a', band:'#ffd84a', hat:'tall', beard:{col:'#1b1b1b', len:1.25, curly:true}};
  if (id === 'king')  return {skin:'#a8e08a', shirt:'#3f6b45', shorts:'#2f5f8a', shoe:'#7be36a', band:null, bald:true, hat:'crown', gem:'#7be3c0', mustache:'#5e8a4a', collar:'#eef0ff', slime:true};
  if (id === 'lucas') return {skin:'#f1c7a3', shirt:'#6e6672', shorts:'#1b1b1b', shoe:'#7d8a4e', band:null, bald:true, beard:{col:'#3a2a1e', len:.85, short:true}, strap:'#1b1b1b', bag:'#b9c2b0', watch:true};
  if (id === 'shiti') return {skin:'#a8714f', shirt:'#f4efe4', shorts:'#2b3953', shoe:'#ff9d3a', band:null, hair:{col:'#141414', style:'bob'}, earrings:true, watch:true};
  if (id === 'pizza') return {skin:'#f1c7a3', shirt:'#e0473a', shorts:'#2b3a6b', shoe:'#ffffff', cap:'#e0473a', pizza:true, hair:{col:'#3a2a1e'}};
  if (id === 'overflow') return {skin:'#b8f5d8', shirt:'#1d1a28', shorts:'#00a66b', shoe:'#00ff9c', print:'#00ff9c', bald:true, glitch:true};
  if (id === 'jerry') return {skin:'#ecc29b', shirt:'#f4efe4', shorts:'#3a3f4a', shoe:'#ff9d3a', band:null, hair:{col:'#6b4a2b', style:'bowl'}, glasses:true, print:'#ff7a33', strap:'#1b1b1b', phone:true, watch:true};
  return {cat:true, shoe:'#e5484d'};
}
// Nox: black cat with yellow eyes, red slit pupils, white mark, red scarf; (0,0) = body centre
function drawCat(x, y, k, face, ph, o={}){
  ctx.save(); ctx.translate(x, y); if (o.rot) ctx.rotate(o.rot); ctx.scale(face, 1);
  const sw = Math.sin(ph * 1.3), fur = o.hit ? '#ffffff' : o.ice ? '#cfefff' : '#1d2126';
  if (!o.noShadow) { ctx.fillStyle = 'rgba(0,0,0,.28)'; ctx.beginPath(); ctx.ellipse(0, 9*k, 13*k, 2.6*k, 0, 0, Math.PI*2); ctx.fill(); }
  ctx.strokeStyle = fur; ctx.lineCap = 'round';
  ctx.lineWidth = 2.6*k; ctx.beginPath(); ctx.moveTo(-10*k, -2*k); ctx.quadraticCurveTo(-18*k, -4*k + sw*2*k, -16*k, -13*k + sw*2*k); ctx.stroke();
  const leg = (lx, a) => { ctx.lineWidth = 2.6*k; ctx.beginPath(); ctx.moveTo(lx, 2*k); ctx.lineTo(lx + Math.sin(a)*5*k, 8.5*k); ctx.stroke(); };
  leg(-7*k, -sw*.9); leg(6*k, sw*.9);
  ctx.fillStyle = fur; ctx.beginPath(); ctx.ellipse(0, 0, 11*k, 6*k, -.05, 0, Math.PI*2); ctx.fill();
  leg(-5*k, sw*.9); leg(8*k, -sw*.9);
  // scarf tails behind the neck
  const flap = Math.sin(ph * 2) * 2*k;
  ctx.fillStyle = '#c8402f';
  ctx.beginPath(); ctx.moveTo(6*k, -4*k); ctx.lineTo(-3*k, -9*k + flap); ctx.lineTo(-1*k, -4*k + flap); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(6*k, -3*k); ctx.lineTo(-4*k, -3*k - flap); ctx.lineTo(-1*k, 0); ctx.closePath(); ctx.fill();
  // head + ears
  ctx.fillStyle = fur; ctx.beginPath(); ctx.arc(11*k, -6*k, 6.6*k, 0, Math.PI*2); ctx.fill();
  ctx.beginPath(); ctx.moveTo(6.5*k, -9.5*k); ctx.lineTo(7*k, -18*k); ctx.lineTo(11*k, -11.5*k); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(12*k, -11.5*k); ctx.lineTo(17*k, -17*k); ctx.lineTo(17*k, -8.5*k); ctx.closePath(); ctx.fill();
  // scarf band
  ctx.strokeStyle = '#c8402f'; ctx.lineWidth = 2.4*k; ctx.beginPath(); ctx.moveTo(6*k, -2.5*k); ctx.quadraticCurveTo(10*k, 0, 14.5*k, -1.5*k); ctx.stroke();
  // angry yellow eyes with red slits
  for (const ex of [10.4*k, 14.6*k]) {
    ctx.fillStyle = '#f2c230'; ctx.beginPath(); ctx.ellipse(ex, -6*k, 1.9*k, 1.5*k, 0, 0, Math.PI*2); ctx.fill();
    ctx.strokeStyle = '#c62828'; ctx.lineWidth = .7*k; ctx.beginPath(); ctx.moveTo(ex, -7.2*k); ctx.lineTo(ex, -4.9*k); ctx.stroke();
  }
  ctx.fillStyle = fur; ctx.beginPath(); ctx.moveTo(8.2*k, -8.4*k); ctx.lineTo(12.4*k, -6.6*k); ctx.lineTo(12.4*k, -8.8*k); ctx.closePath(); ctx.fill();
  ctx.beginPath(); ctx.moveTo(16.8*k, -8.4*k); ctx.lineTo(12.6*k, -6.6*k); ctx.lineTo(12.6*k, -8.8*k); ctx.closePath(); ctx.fill();
  ctx.strokeStyle = '#ffffff'; ctx.lineWidth = .55*k; ctx.beginPath(); ctx.moveTo(11.3*k, -9.6*k); ctx.lineTo(11.6*k, -11*k); ctx.lineTo(12.5*k, -10.2*k); ctx.lineTo(13.4*k, -11*k); ctx.lineTo(13.7*k, -9.6*k); ctx.stroke();
  ctx.fillStyle = '#e88a9a'; ctx.beginPath(); ctx.ellipse(15.6*k, -2.6*k, .9*k, 1.2*k, .3, 0, Math.PI*2); ctx.fill();
  ctx.restore();
}
const runnerScale = e => e.mini ? .85 : e.k === 'boss' ? 2.4 : e.k === 'whale' ? 1.9 : e.goldArmor ? 1.3 : e.k === 'arm' ? 1.45 : 1.25;
// side-view chibi runner, inked outlines, big head; (0,0) is the torso centre, u = scale unit
function drawRunner(x, y, u, L, face, ph, o={}){
  ctx.save(); ctx.translate(x, y); if (o.rot) ctx.rotate(o.rot); ctx.scale(face, 1);
  if (!o.noShadow) { ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(0, 11*u, 7.5*u, 2.3*u, 0, 0, Math.PI*2); ctx.fill(); }
  if (!o.stand) ctx.rotate(.14);
  const sw = o.stand ? 0 : Math.sin(ph), white = o.hit, skin = white ? '#fff' : L.skin, shirt = white ? '#fff' : o.ice ? '#cfefff' : L.shirt;
  const OL = .85*u;
  const limb = (ax, ay, ang, len, col, w) => { const ex = ax + Math.sin(ang)*len, ey = ay + Math.cos(ang)*len; ctx.lineCap = 'round';
    ctx.strokeStyle = INK; ctx.lineWidth = w + OL; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ex, ey); ctx.stroke();
    ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ex, ey); ctx.stroke(); return [ex, ey]; };
  const shoe = (fx, fy) => { ctx.fillStyle = L.shoe; ctx.strokeStyle = INK; ctx.lineWidth = .5*u; ctx.beginPath(); ctx.ellipse(fx + 1.4*u, fy, 3.5*u, 1.8*u, 0, 0, Math.PI*2); ctx.fill(); ctx.stroke(); ctx.fillStyle = '#fff'; ctx.fillRect(fx - 1.6*u, fy + .7*u, 6*u, .8*u);
    if (L.spring) { ctx.strokeStyle = '#c9cdd6'; ctx.lineWidth = .7*u; ctx.beginPath(); ctx.moveTo(fx + 1.4*u, fy + 1.6*u); for (let q = 1; q <= 4; q++) ctx.lineTo(fx + 1.4*u + (q % 2 ? 1.4 : -1.4)*u, fy + 1.6*u + q*.8*u); ctx.stroke(); } };
  if (L.cape) { const fl = Math.sin(ph * 2) * 1.6*u; ctx.fillStyle = L.cape; ctx.strokeStyle = INK; ctx.lineWidth = .5*u; ctx.beginPath(); ctx.moveTo(-1*u, -5*u); ctx.lineTo(-10*u, 3*u + fl); ctx.lineTo(-7*u, 6*u + fl); ctx.lineTo(0, 1*u); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  // back leg + arm
  let [fx, fy] = o.stand ? limb(-1.4*u, 2*u, 0, 7.6*u, L.shorts, 2.6*u) : limb(0, 2*u, -sw*.9, 8*u, L.shorts, 2.6*u); shoe(fx, fy);
  if (!o.stand) limb(0, -4*u, sw*.9, 5.5*u, skin, 2*u);
  // torso
  ctx.lineCap = 'round';
  ctx.strokeStyle = INK; ctx.lineWidth = 5.4*u + OL; ctx.beginPath(); ctx.moveTo(0, -4.4*u); ctx.lineTo(0, 1.6*u); ctx.stroke();
  ctx.strokeStyle = shirt; ctx.lineWidth = 5.4*u; ctx.stroke();
  if (L.collar && !white) { ctx.strokeStyle = L.collar; ctx.lineWidth = 1.6*u; ctx.beginPath(); ctx.moveTo(-2*u, -5*u); ctx.lineTo(2.6*u, -4.4*u); ctx.stroke(); ctx.fillStyle = '#5b7fb0'; ctx.fillRect(.2*u, -4*u, 2.2*u, 4*u); }
  if (L.print && !white) { ctx.fillStyle = L.print; ctx.beginPath(); ctx.arc(1.2*u, -2*u, 1.6*u, 0, Math.PI*2); ctx.fill(); ctx.fillRect(-.6*u, -1*u, 3.4*u, .8*u); }
  if (L.strap) { ctx.strokeStyle = L.strap; ctx.lineWidth = .7*u; ctx.beginPath(); ctx.moveTo(-1.8*u, -4.6*u); ctx.lineTo(2.4*u, .8*u); ctx.stroke(); if (L.bag) { ctx.fillStyle = L.bag; ctx.beginPath(); ctx.ellipse(2.4*u, .4*u, 1.8*u, 1.1*u, .3, 0, Math.PI*2); ctx.fill(); } }
  if (o.badge) { ctx.fillStyle = o.badge === 'off' ? 'rgba(255,107,107,.9)' : '#cfe2ff'; ctx.strokeStyle = INK; ctx.lineWidth = .4*u; ctx.beginPath(); ctx.moveTo(.6*u, -3.6*u); ctx.lineTo(3*u, -3*u); ctx.lineTo(2.6*u, -.6*u); ctx.lineTo(1.6*u, .4*u); ctx.lineTo(.6*u, -.6*u); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  if (o.medal) { ctx.fillStyle = '#ffcf3a'; ctx.strokeStyle = INK; ctx.lineWidth = .4*u; ctx.beginPath(); ctx.arc(1.6*u, -1.6*u, 1.4*u, 0, Math.PI*2); ctx.fill(); ctx.stroke(); }
  if (o.box) { ctx.fillStyle = '#ffcf3a'; ctx.strokeStyle = INK; ctx.lineWidth = .5*u; ctx.fillRect(-6.6*u, -5*u, 4.4*u, 4.4*u); ctx.strokeRect(-6.6*u, -5*u, 4.4*u, 4.4*u); ctx.fillStyle = '#5a3b00'; ctx.font = `900 ${3.6*u}px system-ui`; ctx.textAlign = 'center'; ctx.fillText('?', -4.4*u, -1.4*u); }
  // front leg + arm
  [fx, fy] = o.stand ? limb(1.4*u, 2*u, 0, 7.6*u, L.shorts, 2.6*u) : limb(0, 2*u, sw*.9, 8*u, L.shorts, 2.6*u); shoe(fx, fy);
  const hand = o.stand ? limb(.6*u, -3.6*u, 2.2 - (o.prop ? ph * .8 : 0), 5*u, skin, 2*u) : limb(0, -4*u, -sw*.9, 5.5*u, skin, 2*u);
  if (L.watch) { ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(hand[0] - Math.sin(-sw*.9)*1.2*u, hand[1] - Math.cos(-sw*.9)*1.2*u, .8*u, 0, Math.PI*2); ctx.fill(); }
  if (L.pizza) { const [px, py] = hand; for (let q = 0; q < 2; q++) { ctx.fillStyle = q ? '#f6e7c4' : '#e9d3a8'; ctx.strokeStyle = INK; ctx.lineWidth = .4*u; ctx.fillRect(px - 3*u, py - 2.6*u - q*1.6*u, 6.4*u, 1.5*u); ctx.strokeRect(px - 3*u, py - 2.6*u - q*1.6*u, 6.4*u, 1.5*u); } ctx.fillStyle = '#e0473a'; ctx.fillRect(px - 1*u, py - 3.6*u, 2.2*u, .5*u); }
  if (L.phone) { ctx.fillStyle = '#111'; ctx.fillRect(hand[0] - .6*u, hand[1] - 1.2*u, 1.6*u, 2.6*u); }
  if (L.scepter) { ctx.strokeStyle = '#ffcf3a'; ctx.lineWidth = 1*u; ctx.beginPath(); ctx.moveTo(hand[0], hand[1] + 2*u); ctx.lineTo(hand[0] + 2*u, hand[1] - 7*u); ctx.stroke(); ctx.fillStyle = '#e5484d'; ctx.beginPath(); ctx.arc(hand[0] + 2.2*u, hand[1] - 7.6*u, 1.2*u, 0, Math.PI*2); ctx.fill(); }
  if (o.prop) o.prop(hand[0], hand[1]);
  // head: drawn 1.3× around its centre and lifted, for the big-head chibi proportion
  ctx.save(); ctx.translate(1*u, -9.8*u); ctx.scale(1.3, 1.3); ctx.translate(-1*u, 8.6*u);
  if (L.hair && L.hair.style === 'bob') { ctx.fillStyle = L.hair.col; ctx.strokeStyle = INK; ctx.lineWidth = .45*u; ctx.beginPath(); ctx.roundRect(-3.2*u, -12*u, 6.6*u, 8.4*u, [3*u, 3*u, 1*u, 1*u]); ctx.fill(); ctx.stroke(); }
  if (L.hood && !white) { ctx.fillStyle = L.hood; ctx.strokeStyle = INK; ctx.lineWidth = .5*u; ctx.beginPath(); ctx.arc(.6*u, -8.8*u, 4.2*u, 0, Math.PI*2); ctx.fill(); ctx.stroke(); }
  ctx.fillStyle = skin; ctx.strokeStyle = INK; ctx.lineWidth = .5*u; ctx.beginPath(); ctx.arc(1*u, -8.6*u, 3.3*u, 0, Math.PI*2); ctx.fill(); ctx.stroke();
  if (!white) {
    ctx.fillStyle = INK2; ctx.beginPath(); ctx.ellipse(2.9*u, -8.7*u, .5*u, .7*u, 0, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = 'rgba(255,143,143,.55)'; ctx.beginPath(); ctx.ellipse(2.3*u, -7.3*u, .9*u, .5*u, 0, 0, Math.PI*2); ctx.fill();
  }
  if (L.hair) { ctx.fillStyle = L.hair.col; ctx.strokeStyle = INK; ctx.lineWidth = .45*u; ctx.beginPath();
    if (L.hair.style === 'bob') { ctx.arc(.6*u, -9.4*u, 3.5*u, Math.PI * 1.02, Math.PI * 1.9); ctx.lineTo(4.2*u, -9.2*u); ctx.lineTo(-2.6*u, -8*u); }
    else { ctx.arc(1*u, -9*u, 3.6*u, Math.PI * 1.05, Math.PI * 1.95); ctx.lineTo(4.6*u, -8.6*u); ctx.lineTo(-2.6*u, -8.6*u); }
    ctx.closePath(); ctx.fill(); ctx.stroke(); }
  if (L.cap && !white) { ctx.fillStyle = L.cap; ctx.strokeStyle = INK; ctx.lineWidth = .45*u; ctx.beginPath(); ctx.arc(1*u, -9.4*u, 3.5*u, Math.PI, Math.PI*2); ctx.lineTo(6.2*u, -9.4*u); ctx.lineTo(6.2*u, -8.8*u); ctx.lineTo(-2.5*u, -8.8*u); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  if (L.hood && !white) { ctx.fillStyle = L.hood; ctx.strokeStyle = INK; ctx.lineWidth = .45*u; ctx.beginPath(); ctx.arc(.8*u, -9.2*u, 3.7*u, Math.PI * 1.02, Math.PI * 1.85); ctx.lineTo(1.6*u, -9.4*u); ctx.closePath(); ctx.fill(); ctx.stroke(); }
  if (L.phones && !white) { ctx.strokeStyle = INK; ctx.lineWidth = 1.5*u; ctx.beginPath(); ctx.arc(1*u, -8.8*u, 3.9*u, Math.PI * 1.05, Math.PI * 1.95); ctx.stroke(); ctx.strokeStyle = L.phones; ctx.lineWidth = .9*u; ctx.stroke();
    ctx.fillStyle = L.phones; ctx.strokeStyle = INK; ctx.lineWidth = .45*u; ctx.beginPath(); ctx.ellipse(.2*u, -8.3*u, 1.4*u, 1.9*u, 0, 0, Math.PI*2); ctx.fill(); ctx.stroke(); }
  if (L.spout && !white) { ctx.strokeStyle = '#8fd3ff'; ctx.lineWidth = .7*u; ctx.lineCap = 'round'; const sp = Math.sin(ph * 3) * .6*u; for (const dx of [-1.6, 0, 1.6]) { ctx.beginPath(); ctx.moveTo(1*u, -12.4*u); ctx.quadraticCurveTo((1 + dx)*u, -15.4*u + sp, (1 + dx * 1.8)*u, -13.6*u); ctx.stroke(); } }
  if (L.glasses) { ctx.strokeStyle = '#111'; ctx.lineWidth = .7*u; ctx.strokeRect(1.8*u, -9.4*u, 2.4*u, 1.6*u); ctx.beginPath(); ctx.moveTo(1.8*u, -8.8*u); ctx.lineTo(-.6*u, -8.8*u); ctx.stroke(); }
  if (L.earrings) { ctx.strokeStyle = '#d7dbe2'; ctx.lineWidth = .6*u; ctx.beginPath(); ctx.moveTo(-.2*u, -7.6*u); ctx.lineTo(-.2*u, -5.2*u); ctx.stroke(); ctx.fillStyle = '#d7dbe2'; ctx.beginPath(); ctx.moveTo(-.8*u, -5.6*u); ctx.lineTo(.4*u, -5.6*u); ctx.lineTo(-.2*u, -4*u); ctx.closePath(); ctx.fill(); }
  if (L.slime) { ctx.fillStyle = 'rgba(123,227,106,.75)'; for (const [dx, len] of [[-1.6, 2.2], [.6, 3], [2.6, 1.8], [3.8, 2.6]]) { ctx.beginPath(); ctx.roundRect(dx*u, -11*u, .9*u, len*u, .45*u); ctx.fill(); } }
  if (L.mustache) { ctx.fillStyle = L.mustache; ctx.beginPath(); ctx.ellipse(2.4*u, -6.9*u, 1.9*u, .75*u, 0, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(4.2*u, -6.5*u, .6*u, 0, Math.PI*2); ctx.fill(); }
  if (L.bald) { ctx.fillStyle = 'rgba(255,255,255,.75)'; ctx.beginPath(); ctx.ellipse(0, -10.6*u, 1.4*u, .7*u, -.4, 0, Math.PI*2); ctx.fill(); }
  else if (L.band && !L.hat && !L.cap) { ctx.strokeStyle = L.band; ctx.lineWidth = 1.1*u; ctx.beginPath(); ctx.moveTo(-2.1*u, -9.6*u); ctx.lineTo(4.1*u, -9.6*u); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-2.1*u, -9.6*u); ctx.lineTo(-4.2*u, -8.4*u + sw*u); ctx.stroke(); }
  if (L.beard) { const b = L.beard; ctx.fillStyle = b.col; ctx.strokeStyle = INK; ctx.lineWidth = .4*u; ctx.beginPath(); if (b.curly) ctx.roundRect(.4*u, -7*u, 4.4*u, 6.4*u, [1*u, 1*u, 2.2*u, 2.2*u]); else if (b.short) { ctx.arc(1*u, -8.6*u, 3.4*u, Math.PI * .05, Math.PI * .75); ctx.lineTo(1.6*u, -7.2*u); ctx.lineTo(4.2*u, -7.6*u); } else ctx.ellipse(2.4*u, -5.6*u + b.len*1.2*u, 2.6*u*b.len, 2.8*u*b.len, .15, 0, Math.PI*2); ctx.fill(); ctx.stroke();
    if (b.curly) { ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = .5*u; for (let r = 0; r < 3; r++) for (let i = 0; i < 3; i++) { ctx.beginPath(); ctx.arc(1.3*u + i*1.3*u, -5.6*u + r*1.8*u, .55*u, 0, Math.PI); ctx.stroke(); } } }
  if (L.hat === 'tall') { ctx.fillStyle = '#ffcf3a'; ctx.strokeStyle = INK; ctx.lineWidth = .45*u; ctx.fillRect(-2*u, -15.6*u, 6.2*u, 4.6*u); ctx.strokeRect(-2*u, -15.6*u, 6.2*u, 4.6*u); ctx.fillStyle = '#2b4aa0'; ctx.fillRect(-2*u, -12.8*u, 6.2*u, 1.1*u); }
  if (L.hat === 'crown' || o.crown) { ctx.fillStyle = '#ffcf3a'; ctx.strokeStyle = INK; ctx.lineWidth = .45*u; ctx.beginPath(); ctx.moveTo(-1.6*u, -11.4*u); ctx.lineTo(-1.2*u, -13.8*u); ctx.lineTo(.2*u, -12.4*u); ctx.lineTo(1.2*u, -14.2*u); ctx.lineTo(2.2*u, -12.4*u); ctx.lineTo(3.6*u, -13.8*u); ctx.lineTo(3.8*u, -11.4*u); ctx.closePath(); ctx.fill(); ctx.stroke(); if (L.gem) { ctx.fillStyle = L.gem; ctx.beginPath(); ctx.arc(1.1*u, -12*u, .55*u, 0, Math.PI*2); ctx.fill(); } }
  ctx.restore();
  ctx.restore();
}
function drawEnemies(){
  const af = S.cur.affix;
  for (const e of S.enemies) {
    const u = runnerScale(e), iced = e.stunT > 0 && e.iced;
    if (af.includes('swift') && e.stunT <= 0) { ctx.strokeStyle = 'rgba(244,239,228,.35)'; ctx.lineWidth = 1.5; for (const dy of [-4, 2]) { ctx.beginPath(); ctx.moveTo(e.x - e.face * 9 * u, e.y + dy * u); ctx.lineTo(e.x - e.face * 17 * u, e.y + dy * u); ctx.stroke(); } }
    if (e.k === 'boss') { ctx.save(); ctx.globalAlpha = .22 + Math.sin(S.t*5)*.08; ctx.fillStyle = e.look.cat ? '#9b87ff' : '#ff9d3a'; ctx.beginPath(); ctx.arc(e.x, e.y, 26, 0, Math.PI*2); ctx.fill(); ctx.restore(); }
    if (e.boss === 'king') { ctx.save(); ctx.globalAlpha = .18; ctx.strokeStyle = '#ffcf3a'; ctx.setLineDash([4, 6]); ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(e.x, e.y, 80, 0, Math.PI*2); ctx.stroke(); ctx.restore(); }
    if (e.dashT > 0) { ctx.strokeStyle = 'rgba(255,157,58,.6)'; ctx.lineWidth = 3; for (const dy of [-10, 0, 10]) { ctx.beginPath(); ctx.moveTo(e.x - e.face * 20, e.y + dy); ctx.lineTo(e.x - e.face * 44, e.y + dy); ctx.stroke(); } }
    if (e.inv > 0) { ctx.save(); ctx.globalAlpha = .5 + Math.sin(S.t*30)*.3; }
    const akey = e.k === 'boss' ? 'boss.' + (e.boss || 'yawn') : e.mini ? 'runner.mini' : e.goldArmor ? 'runner.gold' : 'runner.' + e.k;
    if (e.hit > 0 && art(akey)) ctx.globalAlpha = .55;
    if (drawArt(akey, e.x, e.y + 11*u, {face:e.face, t:S.t + e.ph})) ctx.globalAlpha = 1;
    else if (e.look.cat) drawCat(e.x, e.y + 2, u * .62, e.face, e.ph, {hit: e.hit > 0, ice: iced});
    else if (e.look.glitch && !RM) { ctx.save(); ctx.globalAlpha = .35; drawRunner(e.x - 3 + Math.sin(S.t * 30) * 2, e.y, u, {...e.look, shirt:'#ff3b6b'}, e.face, e.ph, {noShadow:true}); drawRunner(e.x + 3, e.y, u, {...e.look, shirt:'#00e0ff'}, e.face, e.ph, {noShadow:true}); ctx.restore();
      drawRunner(e.x, e.y, u, e.look, e.face, e.ph, {hit: e.hit > 0, ice: iced, medal:true}); inkText(e.overflowed ? '184,467,440,737' : 'OVERFLOW', e.x, e.y - 14 * u - 22, 11, '#00ff9c', {drop:false}); }
    else drawRunner(e.x, e.y - (e.k === 'hop' ? Math.abs(Math.sin(e.ph * .5)) * 3 + (e.hopT > 0 ? Math.sin(e.hopT / .45 * Math.PI) * 12 : 0) : 0), u, e.look, e.face, e.ph, {hit: e.hit > 0, ice: iced, box: e.golden, medal: e.k === 'boss',
      badge: e.k === 'arm' && !e.mini ? (e.stripT > 0 ? 'off' : 'on') : null});
    if (e.inv > 0) ctx.restore();
    if (e.inspired) { ctx.fillStyle = '#7be36a'; ctx.beginPath(); ctx.arc(e.x + 4*u, e.y - 13*u, 1.6, 0, Math.PI*2); ctx.fill(); }
    if (e.boss === 'jerry' && e.adapt) { ctx.font = CJK(900, 11); ctx.textAlign = 'center'; const tx = '🛡 ' + tr(TOW[e.adapt].short), w = ctx.measureText(tx).width + 8; ctx.fillStyle = 'rgba(11,18,32,.85)'; ctx.fillRect(e.x - w/2, e.y - 14*u - 24, w, 14); ctx.fillStyle = '#6fb8ff'; ctx.fillText(tx, e.x, e.y - 14*u - 13); }
    const top = e.y - 14 * u;
    if (iced) { ctx.fillStyle = 'rgba(207,239,255,.45)'; ctx.strokeStyle = 'rgba(207,239,255,.9)'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.roundRect(e.x - 8*u, top, 16*u, 26*u, 3); ctx.fill(); ctx.stroke(); }
    if (e.slowT > 0 && !iced) { ctx.fillStyle = '#8fd3ff'; for (let k = 0; k < 2; k++) { ctx.beginPath(); ctx.arc(e.x + rnd(-6, 6)*u, e.y + 10*u, 1.4, 0, Math.PI*2); ctx.fill(); } }
    if (e.shield > 0) { ctx.beginPath(); ctx.ellipse(e.x, e.y - 2*u, 10*u, 14*u, 0, 0, Math.PI*2); ctx.strokeStyle = `rgba(124,196,255,${.2 + .5 * e.shield / e.shieldMax})`; ctx.lineWidth = 1.4; ctx.stroke(); }
    if (e.markT > 0) { ctx.strokeStyle = '#ff6b6b'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(e.x, e.y - 2*u, 9*u, 0, Math.PI*2); ctx.moveTo(e.x - 12*u, e.y - 2*u); ctx.lineTo(e.x + 12*u, e.y - 2*u); ctx.stroke(); }
    if (e.stunT > 0 && !iced) { ctx.fillStyle = '#ffcf3a'; for (let k = 0; k < 3; k++) { const a = S.t*6 + k*2.1; ctx.beginPath(); ctx.arc(e.x + Math.cos(a)*6*u, top - 1 + Math.sin(a)*2, 1.6, 0, Math.PI*2); ctx.fill(); } }
    if (e.burnT > 0) { ctx.fillStyle = '#ff9d4a'; for (let k = 0; k < 2; k++) { ctx.beginPath(); ctx.arc(e.x + rnd(-5, 5)*u, e.y + rnd(-10, 4)*u, 1.8, 0, Math.PI*2); ctx.fill(); } }
    if (!e.mini && (e.hp < e.max || e.k === 'boss')) {
      const w = Math.max(16, 14*u), f = Math.max(0, e.hp/e.max);
      const by = top - 9 - (e.k === 'boss' ? 6 : 0), bh = e.k === 'boss' ? 6 : 4.5;
      ctx.fillStyle = INK2; ctx.beginPath(); ctx.roundRect(e.x - w/2 - 1.5, by - 1.5, w + 3, bh + 3, 3); ctx.fill();
      ctx.fillStyle = f > .5 ? '#6fdc4a' : f > .25 ? '#ffd23f' : '#ff5a4a'; ctx.beginPath(); ctx.roundRect(e.x - w/2, by, Math.max(1, w * f), bh, 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.45)'; ctx.fillRect(e.x - w/2 + 1, by + .6, Math.max(0, w * f - 2), 1.2);
    }
  }
  for (const f of S.fallers) {
    ctx.save(); ctx.globalAlpha = Math.max(0, f.life / f.max);
    const fk = f.k === 'boss' ? 'boss.' + (f.boss || 'yawn') : f.mini ? 'runner.mini' : 'runner.' + (f.k || 'norm');
    if (drawArt(fk, f.x, f.y + 11*f.sc, {face:f.face, rot:f.rot})) {}
    else if (f.look.cat) drawCat(f.x, f.y, f.sc * .62, f.face, f.ph, {rot:f.rot, noShadow:true});
    else drawRunner(f.x, f.y, f.sc, f.look, f.face, f.ph, {rot:f.rot, noShadow:true, box:f.golden});
    ctx.restore();
  }
  for (const f of S.shoes) {
    ctx.save(); ctx.globalAlpha = Math.min(1, f.life / .3); ctx.translate(f.x, f.y); ctx.rotate(f.rot);
    ctx.fillStyle = f.col; ctx.beginPath(); ctx.ellipse(0, 0, 4.2*f.sc, 2.1*f.sc, 0, 0, Math.PI*2); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.fillRect(-4*f.sc, 1*f.sc, 8*f.sc, 1.1*f.sc);
    ctx.restore();
  }
}
function drawShots(){
  for (const sh of S.shots) {
    if (sh.type === 'gem') {
      if (!drawArt('proj.gem.' + sh.gem, sh.x, sh.y, {rot:S.t * 10})) drawGem(sh.gem, sh.x, sh.y, 11, S.t * 10);
      continue;
    }
    if (sh.type === 'dart') {
      if (drawArt('proj.dart', sh.x, sh.y, {rot:S.t * 18})) continue;
      ctx.save(); ctx.translate(sh.x, sh.y); ctx.rotate(S.t * 18); ctx.strokeStyle = INK; ctx.lineWidth = 1; ctx.strokeRect(-2.5, -4, 5, 8);
      ctx.fillStyle = '#e5484d'; ctx.fillRect(-2.5, -4, 5, 8); ctx.fillStyle = '#d7dbe2'; ctx.fillRect(-2.5, -4, 5, 1.6); ctx.fillRect(-2.5, 2.6, 5, 1.4);
      ctx.restore();
    } else {
      const p = sh.t / sh.dur, x = sh.sx + (sh.tx - sh.sx)*p, y = sh.sy + (sh.ty - sh.sy)*p - Math.sin(p*Math.PI)*40;
      if (drawArt('proj.bomb', x, y, {rot:S.t * 12})) continue;
      ctx.save(); ctx.translate(x, y); ctx.rotate(S.t * 12); ctx.strokeStyle = INK; ctx.lineWidth = 5.4; ctx.lineCap = 'round'; ctx.beginPath(); ctx.arc(0, 0, 5, .3, Math.PI - .3); ctx.stroke(); ctx.restore();
      ctx.save(); ctx.translate(x, y); ctx.rotate(S.t * 12);
      ctx.strokeStyle = sh.s.burnDur ? '#ff6b4a' : '#ffd84a'; ctx.lineWidth = 3.4; ctx.lineCap = 'round';
      ctx.beginPath(); ctx.arc(0, 0, 5, .3, Math.PI - .3); ctx.stroke();
      ctx.fillStyle = '#6b4f12'; ctx.fillRect(-1, -6, 2, 2);
      ctx.restore();
    }
  }
  for (const dp of S.drops) {
    const p = Math.min(1, dp.t / dp.dur), y = dp.y - 70 * (1 - p * p);
    ctx.fillStyle = 'rgba(0,0,0,.25)'; ctx.beginPath(); ctx.ellipse(dp.x, dp.y + 8, 4 + 4*p, 1.6 + p, 0, 0, Math.PI*2); ctx.fill();
    if (drawArt(dp.decap ? 'proj.dropGold' : 'proj.drop', dp.x, y + 2, {rot:(1 - p) * .6})) continue;
    ctx.save(); ctx.translate(dp.x, y - 6); ctx.rotate((1 - p) * .6); ctx.strokeStyle = INK; ctx.lineWidth = 1.2; ctx.strokeRect(-7, -4.5, 14, 9);
    ctx.fillStyle = dp.decap ? '#ffcf3a' : '#c9b49a'; ctx.fillRect(-7, -4.5, 14, 9);
    ctx.fillStyle = dp.decap ? '#5a3b00' : '#ff9d7a'; ctx.fillRect(-7, -1, 14, 2);
    if (dp.decap) { ctx.font = '900 7px system-ui'; ctx.textAlign = 'center'; ctx.fillStyle = '#5a3b00'; ctx.fillText('?', 0, 3); }
    ctx.restore();
  }
  for (const b of S.bolts) {
    ctx.globalAlpha = Math.min(1, b.life / .08); ctx.strokeStyle = b.col; ctx.lineWidth = b.w; ctx.lineCap = 'round';
    ctx.beginPath(); ctx.moveTo(b.pts[0][0], b.pts[0][1]); for (const [x, y] of b.pts.slice(1)) ctx.lineTo(x, y); ctx.stroke();
    if (b.box) { const [x, y] = b.pts[Math.floor(b.pts.length / 2)]; ctx.fillStyle = '#c9b49a'; ctx.fillRect(x - 4, y - 3, 8, 6); }
  }
  ctx.globalAlpha = 1;
  ctx.textAlign = 'center';
  for (const n of S.notes) { ctx.globalAlpha = Math.min(1, n.life / n.max * 1.6); ctx.font = '900 15px system-ui'; ctx.strokeStyle = INK2; ctx.lineWidth = 3; ctx.lineJoin = 'round'; ctx.strokeText(n.txt, n.x, n.y); ctx.fillStyle = n.col; ctx.fillText(n.txt, n.x, n.y); }
  ctx.globalAlpha = 1;
}
function capsule(txt, x, y, size){
  ctx.font = CJK(900, size); let w = ctx.measureText(txt).width; const maxW = W - 40; let sz = size; if (w > maxW) { sz = size * maxW / w; ctx.font = CJK(900, sz); w = maxW; }
  ctx.fillStyle = 'rgba(32,30,44,.82)'; ctx.beginPath(); ctx.roundRect(x - w/2 - 14, y - sz - 6, w + 28, sz + 16, (sz + 16)/2); ctx.fill();
  ctx.strokeStyle = 'rgba(255,255,255,.25)'; ctx.lineWidth = 1.2; ctx.stroke();
  ctx.textAlign = 'center'; ctx.fillStyle = '#fff'; ctx.fillText(txt, x, y);
}
function drawFx(){
  for (const p of S.parts) {
    const a = Math.max(0, p.life / p.max);
    if (p.ring) { ctx.globalAlpha = a; ctx.beginPath(); ctx.arc(p.x, p.y, p.R * (1 - a*.7), 0, Math.PI*2); ctx.strokeStyle = p.col; ctx.lineWidth = 3; ctx.stroke(); ctx.globalAlpha = 1; continue; }
    ctx.globalAlpha = a; ctx.fillStyle = p.col; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI*2); ctx.fill();
  }
  ctx.globalAlpha = 1; ctx.textAlign = 'center';
  for (const t of S.texts) {
    const a = Math.min(1, t.life / t.max * 2), grow = t.size >= 18 ? 1 + (1 - t.life/t.max)*.2 : 1;
    ctx.globalAlpha = a; inkText(t.txt, t.x, t.y, t.size * grow * 1.15, t.col, {maxW: W - 16});
  }
  ctx.globalAlpha = 1;
  if (S.iceFlash > 0) { ctx.fillStyle = `rgba(143,211,255,${S.iceFlash*.45})`; ctx.fillRect(0, 0, W, H); }
  if (S.frenzy > 0) { ctx.strokeStyle = `rgba(255,210,63,${.45 + Math.sin(S.t*14)*.15})`; ctx.lineWidth = 12; ctx.strokeRect(0, 0, W, H); }
  if (S.flash > 0) { ctx.fillStyle = `rgba(255,107,107,${S.flash*.5})`; ctx.fillRect(0, 0, W, H); }
  if (S.banner) {
    const b = S.banner, a = Math.min(1, b.life / .4), sc = RM ? 1 : 1 + Math.max(0, b.life - 1.5) * .8;
    ctx.save(); ctx.globalAlpha = a; ctx.translate(W/2, H/2 - 8); ctx.scale(sc, sc); ctx.textAlign = 'center';
    ctx.font = FONT(400, 30); const bw = Math.min(W - 24, ctx.measureText(b.txt).width + 56);
    ctx.fillStyle = '#b8321f'; ctx.strokeStyle = '#4a1208'; ctx.lineWidth = 2.5; ctx.lineJoin = 'round';
    for (const sx of [-1, 1]) { ctx.beginPath(); ctx.moveTo(sx * (bw/2 - 6), -14); ctx.lineTo(sx * (bw/2 + 14), -14); ctx.lineTo(sx * (bw/2 + 6), 0); ctx.lineTo(sx * (bw/2 + 14), 14); ctx.lineTo(sx * (bw/2 - 6), 14); ctx.closePath(); ctx.fill(); ctx.stroke(); }
    ctx.fillStyle = '#e0473a'; ctx.beginPath(); ctx.roundRect(-bw/2, -24, bw, 36, 8); ctx.fill(); ctx.stroke();
    ctx.fillStyle = 'rgba(255,170,150,.6)'; ctx.fillRect(-bw/2 + 8, -20, bw - 16, 2.5);
    inkText(b.txt, 0, 4, 28, '#fff', {ink:'#4a1208', maxW: bw - 24});
    if (b.sub) inkText(b.sub, 0, 34, 15, '#ffe27a', {maxW: W - 30});
    ctx.restore();
  }
  if (S.placing) {
    ctx.save(); ctx.globalAlpha = .5 + Math.sin(S.t * 5) * .2; ctx.setLineDash([6, 6]); ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
    for (const [px, py] of PADS) { ctx.beginPath(); ctx.arc(px, py, G.padGap, 0, Math.PI * 2); ctx.stroke(); }
    ctx.restore(); capsule(tr('点跑道外的空地，新增一个放置点'), W/2, 40, 13);
  }
  if (S.state === 'ready') {
    capsule(tr('点跑道旁的石台放置装置，再点「开始第 1 波」'), W/2, H/2, 13);
  }
  if (S.state === 'between' && S.next) {
    const nm = S.next.type === 'elite' ? '精英波' : S.next.type === 'boss' ? 'Boss 波' : '下一波';
    capsule(tf('{x} {n} 秒后开始', {x:tr(nm), n:Math.ceil(S.between)}), W/2, H/2, 15);
    if (S.next.affix.length) inkText(S.next.affix.map(a => tr(AFX[a].name)).join(' + '), W/2, H/2 + 30, 14, '#ffb0a6', {maxW: W - 30});
  }
}
function draw(){
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  if (S.shake > 0) ctx.translate((Math.random()-.5)*S.shake, (Math.random()-.5)*S.shake);
  drawField(); drawPads(); drawTowers(); drawEnemies(); drawStatuses(); drawShots(); drawFx();
}

// ---------- UI ----------
const hud = {wave:$('hWave'), lives:$('hLives'), gold:$('hGold'), score:$('hScore'), sats:$('hSats')};
const set = (el, v) => { v = String(v); if (el.textContent !== v) el.textContent = v; };
const goBtn = $('go'), dock = $('dock'), frBar = $('frenzyBar'), runTag = $('runTag');
let lastDock = '', lastGo = '', lastBuild = -1;
const selTower = () => S.sel === null ? null : S.towers.find(t => t.pad === S.sel) || null;
const fmt = n => Number.isInteger(n) ? n : n < 10 ? n.toFixed(1) : Math.round(n);

function renderUI(){
  set(hud.wave, `${S.wave}/${WAVES.length}`); set(hud.lives, S.lives); set(hud.gold, S.gold); set(hud.score, score().total); set(hud.sats, fmtN(S.sats || 0));
  set($('lvTag'), S.mode === 'camp' ? `${S.level.date} · ${L(S.level.name)}` : tr('经典模式'));
  { const mb = $('mapBtn'), hide = ['intro', 'map', 'codex', 'story', 'count', 'kcard'].includes(S.state); if (mb.hidden !== hide) mb.hidden = hide; }
  { const H0 = myHash(), show = S.unlocked.includes('miner') || H0 > 0; $('mine').hidden = !show;
    if (show) { const share = H0 ? H0 / (H0 + S.net) : 0;
      set($('mHeight'), '#' + fmtN(S.height)); set($('mHash'), fmt(H0)); set($('mNet'), fmt(S.net)); set($('mShare'), Math.round(share * 100) + '%');
      set($('mNext'), S.state === 'wave' ? Math.max(0, Math.ceil(S.blockT)) + 's' : '—'); set($('mWon'), String(S.blocksWon));
      $('mBar').style.width = (S.state === 'wave' ? Math.max(0, Math.min(100, 100 - S.blockT / (G.blockTarget * 1.45) * 100)) : 0) + '%'; } }
  hud.lives.classList.toggle('low', S.lives <= 5);
  set(runTag, tf('第 {r} 局 · 最高分 {b}', {r:meta.runs, b:meta.best}) + (runBoost() ? ' · ' + tf('跑步加成 +{n}%', {n:pct(runBoost())}) : ''));
  frBar.style.width = S.frenzy > 0 ? `${S.frenzy/(S.frenzyMax || 5)*100}%` : `${Math.min(100, S.combo/S.frenzyNeed*100)}%`;

  const buildKey = LANG + (S.taken.length * 100 + S.coupons);
  if (buildKey !== lastBuild) {
    lastBuild = buildKey;
    set($('buildCount'), tf('{n} 张', {n:S.taken.length}));
    $('buildChips').innerHTML = S.taken.length ? S.taken.map(c => `<span class="chip ${c.rar} ${c.tag === '交易' ? 'bad' : ''}" title="${cDesc(c)}"><span class="ctag">${tr(c.tag)}</span>${cName(c)}</span>`).join('') : `<span class="chip">${tr('还没有卡')}</span>`;
    const fx = [], pc = v => Math.round(v * 100);
    if (S.dmgMult !== 1) fx.push(tf('装置效果 {s}{n}%', {s: S.dmgMult > 1 ? '+' : '', n: pc(S.dmgMult - 1)}));
    if (S.critBonus) fx.push(tf('暴击率 +{n}%', {n: pc(S.critBonus)}));
    if (S.costMult !== 1) fx.push(tf('放置费用 −{n}%', {n: pc(1 - S.costMult)}));
    if (S.coupons) fx.push(tf('升级半价 ×{n}', {n: S.coupons}));
    if (mod('breaker')) fx.push(tr('次路线上限 3 级'));
    if (S.hpMult !== 1) fx.push(tf('对手体力 +{n}%', {n: pc(S.hpMult - 1)}));
    if (S.spdMult !== 1) fx.push(tf('对手移速 +{n}%', {n: pc(S.spdMult - 1)}));
    if (S.goldMult !== 1) fx.push(tf('劝退 GST +{n}%', {n: pc(S.goldMult - 1)}));
    if (S.frenzyNeed !== 50) fx.push(tf('燃脂模式需连续劝退 {n}', {n: S.frenzyNeed}));
    $('buildFx').textContent = fx.length ? tr('当前全局效果：') + fx.join(' · ') : '';
    $('buildFx').hidden = !fx.length;
  }

  const bonus = Math.round(Math.max(0, S.between) * G.earlyBonusPerSec);
  const goKey = LANG + S.state + '|' + S.wave + '|' + bonus;
  renderPop();
  { const show = S.padTokens > 0 && (S.state === 'ready' || S.state === 'between' || S.state === 'wave');
    padBtn.hidden = !show; if (show) { const tx = S.placing ? tr('取消放置') : tf('＋ 放置点 ×{n}', {n:S.padTokens}); if (padBtn.textContent !== tx) padBtn.textContent = tx; padBtn.classList.toggle('on', S.placing); } }
  if (goKey !== lastGo) {
    lastGo = goKey;
    goBtn.disabled = S.state === 'wave' || PAUSED.has(S.state) && S.state !== 'over' && S.state !== 'intro' && S.state !== 'map';
    goBtn.textContent = S.state === 'intro' ? tr('点击开始') : S.state === 'map' || S.state === 'codex' ? tr('选择关卡') : S.state === 'story' ? tr('剧情中…') : S.state === 'kcard' ? tr('关卡完成') : S.state === 'count' ? tr('准备…') : S.state === 'ready' ? tr('开始第 1 波')
      : S.state === 'wave' ? tf('第 {n} 波进行中', {n:S.wave})
      : S.state === 'draft' ? tr('开箱中')
      : S.state === 'between' ? tf('立即开始第 {n} 波 · +{b} GST', {n:S.wave + 1, b:bonus})
      : S.mode === 'camp' ? (S.endInfo && S.endInfo.win && CH1[CH1.indexOf(S.level) + 1] ? tr('下一关') : S.endInfo && S.endInfo.win ? tr('再玩一次') : tr('重试'))
      : tr('再来一局');
  }

  const t = selTower();
  const afford = t ? [0,1,2].map(i => t.p[i] < 5 ? S.gold >= upCost(t, i) : 'x').join() : S.unlocked.map(k => S.gold >= cost(k)).join();
  const key = [LANG, S.sel, t ? t.kind + code(t) : '-', S.unlocked.join(), afford, S.costMult, S.coupons, JSON.stringify(S.master), mod('breaker'), S.state === 'over'].join('|');
  if (key === lastDock) return; lastDock = key;
  if (S.sel === null) {
    dock.innerHTML = `<h3>${tr('放置装置')}</h3><p>${tr('点跑道旁的虚线圆圈放置装置，再点已放的装置选择升级路线。每个装置最多发展两条路线：主路线可升满 5 级，次路线最多 2 级。')}</p>`;
  } else if (!t) {
    dock.innerHTML = `<h3>${tr('空位 · 选一个装置')}</h3><div class="opts">${S.unlocked.map(k => `
      <button class="opt" type="button" data-build="${k}" ${S.gold < cost(k) ? 'disabled' : ''}>
        <strong>${tr(TOW[k].name)}</strong><span class="cost">${cost(k)} GST</span><small>${tr(TOW[k].desc)}</small></button>`).join('')}</div>`;
  } else {
    const d = TOW[t.kind], s = t.s, refund = Math.floor(t.spent * G.sellRefund);
    const st = [[tr('效果'), fmt(s.dmg)], [tr('间隔'), fmt(s.rate) + 's'], [tr('射程'), s.range > 500 ? tr('全图') : Math.round(s.range)]];
    if (t.kind === 'dart' && s.multi > 1) st.push([tr('目标'), s.multi]);
    if (t.kind === 'bomb') st.push([tr('范围'), Math.round(s.rad)]);
    if (t.kind === 'frost') st.push([tr('减速'), Math.round(s.slow*100) + '%']);
    if (t.kind === 'tesla') st.push([tr('传播'), s.chain]);
    if (s.armor < 1) st.push([tr('对耐力跑者'), Math.round(s.armor*100) + '%']);
    const paths = PATHS[t.kind].map((P, i) => {
      const lv = t.p[i], {cap, why} = pathCap(t, i), role = roleOf(t, i);
      const pips = [0,1,2,3,4].map(k => `<i ${k < lv ? `style="background:${PCOL[i]}"` : k >= cap ? 'class="cap"' : ''}></i>`).join('');
      const roleTag = role === 'main' ? `<span class="role main">${tr('主路线')}</span>` : role === 'sec' ? `<span class="role">${tr('次路线')}</span>` : role === 'lock' ? `<span class="role">${tr('锁定')}</span>` : '';
      let body;
      if (lv >= 5) body = `<span class="done">${tr('已满级')} · ${tr(P.tiers[4][0])}</span>`;
      else if (lv >= cap) body = `<span class="lock">${why || tr('已达上限')}${lv < 5 && cap > 0 ? tf('，下一级「{x}」不可用', {x:tr(P.tiers[lv][0])}) : ''}</span>`;
      else {
        const c = upCost(t, i), [nm, , desc] = P.tiers[lv];
        body = `<button class="up" type="button" data-path="${i}" ${S.gold < c ? 'disabled' : ''}>
          <span class="top"><strong>${tf('{n} 级 · {x}', {n:lv + 1, x:tr(nm)})}</strong><span class="cost">${c} GST</span></span><small>${tr(desc)}</small></button>`;
      }
      return `<div class="path"><div class="ph"><strong style="color:${PCOL[i]}">${tr(P.name)}</strong>${roleTag}<span class="pips">${pips}</span></div>${body}</div>`;
    }).join('');
    dock.innerHTML = `<h3>${tr(d.name)} · ${code(t)}</h3>
      <div class="stats">${st.map(([a, b]) => `<span>${a} <b>${b}</b></span>`).join('')}</div>
      <div class="paths">${paths}</div>
      <button type="button" data-sell="1">${tf('回收 · +{n} GST', {n:refund})}</button>`;
  }
}
const KIND_ICON = {
  dart:'<svg viewBox="0 0 44 40"><rect x="13" y="6" width="18" height="30" rx="4" fill="#e0473a" stroke="#3b2a1e" stroke-width="3"/><rect x="13" y="12" width="18" height="6" fill="#fff"/><ellipse cx="22" cy="7" rx="7" ry="2.5" fill="#d0d6da" stroke="#3b2a1e" stroke-width="1.5"/></svg>',
  bomb:'<svg viewBox="0 0 44 40"><path d="M8 32 Q22 0 36 32" fill="none" stroke="#3b2a1e" stroke-width="11" stroke-linecap="round"/><path d="M8 32 Q22 0 36 32" fill="none" stroke="#ffd23f" stroke-width="7" stroke-linecap="round"/></svg>',
  frost:'<svg viewBox="0 0 44 40"><path d="M22 36 V20" stroke="#3b2a1e" stroke-width="5" stroke-linecap="round"/><circle cx="22" cy="18" r="7" fill="#3ec7c0" stroke="#3b2a1e" stroke-width="2.5"/><path d="M15 16 Q6 8 3 18 M29 16 Q38 8 41 18 M22 11 V2" fill="none" stroke="#3a8fd0" stroke-width="3.5" stroke-linecap="round"/></svg>',
  sniper:'<svg viewBox="0 0 44 40"><rect x="10" y="18" width="24" height="16" rx="3" fill="#c98a4a" stroke="#3b2a1e" stroke-width="2.5"/><path d="M4 12 H18 M26 12 H40" stroke="#3b2a1e" stroke-width="3" stroke-linecap="round"/><path d="M11 12 V18 M33 12 V18" stroke="#3b2a1e" stroke-width="2.5"/></svg>',
  miner:'<svg viewBox="0 0 44 40"><rect x="9" y="6" width="26" height="30" rx="4" fill="#2b2a3a" stroke="#3b2a1e" stroke-width="2.5"/><circle cx="18" cy="15" r="5" fill="none" stroke="#9aa3c7" stroke-width="2"/><circle cx="18" cy="27" r="5" fill="none" stroke="#9aa3c7" stroke-width="2"/><rect x="27" y="11" width="4" height="3" fill="#00ff9c"/><rect x="27" y="17" width="4" height="3" fill="#f7931a"/><circle cx="33" cy="33" r="7" fill="#f7931a" stroke="#3b2a1e" stroke-width="2"/><text x="33" y="37" text-anchor="middle" font-size="9" font-weight="900" fill="#fff" font-family="sans-serif">₿</text></svg>',
  gem:'<svg viewBox="0 0 44 40"><g transform="translate(4 1) scale(.078)"><polygon points="135,50 185,45 310,45 365,55 460,172 250,452 40,172" fill="#50d8ff" stroke="#3b2a1e" stroke-width="30" stroke-linejoin="round"/><polygon points="185,45 310,45 362,205 135,205" fill="#eefcff"/><polygon points="135,205 362,205 250,452" fill="#00a6f4"/></g></svg>',
  tesla:'<svg viewBox="0 0 44 40"><rect x="12" y="4" width="20" height="32" rx="4" fill="#9a6ad8" stroke="#3b2a1e" stroke-width="2.5"/><circle cx="22" cy="13" r="4" fill="#ffd23f" stroke="#3b2a1e" stroke-width="1.5"/><circle cx="22" cy="26" r="6" fill="#ffd23f" stroke="#3b2a1e" stroke-width="1.5"/></svg>',
};
const pop = $('pop'); let popKey = '';
function renderPop(){
  const t = selTower(), open = S.sel !== null && !PAUSED.has(S.state);
  const afford = t ? [0,1,2].map(i => t.p[i] < 5 ? S.gold >= upCost(t, i) : 'x').join() : S.unlocked.map(k => S.gold >= cost(k)).join();
  const key = [open, LANG, S.sel, PADS.length, t ? t.kind + code(t) : '-', S.unlocked.join(), afford, S.costMult, S.coupons, JSON.stringify(S.master), mod('breaker')].join('|');
  if (key === popKey) return; popKey = key;
  if (!open) { pop.hidden = true; return; }
  let html;
  if (!t) {
    html = `<div class="pop-h"><strong>${tr('建造装置')}</strong><button type="button" class="pop-x" data-close="1" aria-label="${tr('关闭')}">×</button></div>
      <div class="pop-build">${S.unlocked.map(k => `<button type="button" class="pb" data-build="${k}" ${S.gold < cost(k) ? 'disabled' : ''}>
        <span class="pi">${KIND_ICON[k] || ''}</span><span class="pn">${tr(TOW[k].short)}</span><span class="pc">${cost(k)}</span></button>`).join('')}</div>
      <p class="pop-desc">${S.unlocked.map((k, i) => `<b>${LAND ? `[${i + 1}] ` : ''}${tr(TOW[k].short)}</b> ${tr(TOW[k].desc)}${(KIND_STATUS[k] || []).length ? ` <span class="tagline">${tf('挂上：{x}', {x:statusTags(k)})}</span>` : ''}${immuneTag(k)}`).join('<br>')}</p>`;
  } else {
    const refund = Math.floor(t.spent * G.sellRefund);
    const rows = PATHS[t.kind].map((P, i) => {
      const lv = t.p[i], {cap} = pathCap(t, i), role = roleOf(t, i);
      const pips = [0,1,2,3,4].map(k => `<i ${k < lv ? `style="background:${PCOL[i]}"` : k >= cap ? 'class="cap"' : ''}></i>`).join('');
      let act, desc;
      if (lv >= 5) { act = `<span class="pu done">${tr('已满级')}</span>`; desc = tr(P.tiers[4][2]); }
      else if (lv >= cap) { act = `<span class="pu lock">${cap === 0 ? tr('已锁定') : tr('已达上限')}</span>`; desc = (pathCap(t, i).why || '') + (lv < 5 ? ' · ' + tf('下一级：{x}', {x:tr(P.tiers[lv][2])}) : ''); }
      else { const c = upCost(t, i); act = `<button type="button" class="pu" data-path="${i}" ${S.gold < c ? 'disabled' : ''}><span class="pun">${tr(P.tiers[lv][0])}</span><span class="pc">${c}</span></button>`; desc = tf('下一级：{x}', {x:tr(P.tiers[lv][2])}); }
      const gi = t.kind === 'gem' ? `<span class="pgem">${gemSVG(GEM_ORDER[i], 18)}</span>` : '';
      return `<div class="prow"><div class="pl">${gi}<span class="pname" style="color:${PCOL[i]}">${tr(P.name)}</span>${role === 'main' ? `<span class="role main">${tr('主')}</span>` : role === 'sec' ? `<span class="role">${tr('次')}</span>` : ''}<span class="pips">${pips}</span></div>${act}<div class="pdesc">${desc}</div></div>`;
    }).join('');
    html = `<div class="pop-h"><span class="pi sm">${KIND_ICON[t.kind] || ''}</span><strong>${tr(TOW[t.kind].short)} · ${code(t)}</strong><button type="button" class="pop-x" data-close="1" aria-label="${tr('关闭')}">×</button></div>
      ${(KIND_STATUS[t.kind] || []).length || (KIND_REACT[t.kind] || []).length ? `<p class="pop-tags">${(KIND_STATUS[t.kind] || []).length ? tf('挂上：{x}', {x:statusTags(t.kind)}) + ' · ' : ''}${tf('组合：{x}', {x:reactTags(t.kind)})}${immuneTag(t.kind)}</p>` : ''}
      ${t.kind === 'miner' ? `<p class="pop-tags">${tf('算力 {h} · 出块奖励 +{b}%', {h:fmt(t.s.hash || 0), b:Math.round((t.s.blockBonus || 0) * 100)})}</p>` : ''}
      ${rows}<div class="pop-f"><span class="hint">${LAND ? tr('快捷键 Q / W / E 升级，X 回收') : tr('主路线可升满 5 级，次路线最多 2 级')}</span><button type="button" class="psell" data-sell="1">${tf('回收 +{n}', {n:refund})}</button></div>`;
  }
  pop.innerHTML = html; pop.hidden = false;
  // place beside the pad without covering it
  const st = pop.parentElement.getBoundingClientRect(), [px, py] = PADS[S.sel], sx = px / W * st.width, sy = py / H * st.height;
  const pw = pop.offsetWidth, ph = pop.offsetHeight, gap = 30 * st.width / W;
  const left = Math.max(6, Math.min(st.width - pw - 6, sx - pw / 2));
  let top = sy + gap * .9; if (top + ph > st.height - 6) top = sy - gap * 1.3 - ph; if (top < 6) top = Math.max(6, Math.min(st.height - ph - 6, sy + gap * .9));
  pop.style.left = left + 'px'; pop.style.top = top + 'px';
  pop.style.setProperty('--ax', Math.max(14, Math.min(pw - 14, sx - left)) + 'px');
  pop.classList.toggle('above', top < sy);
}
function onAction(ev){
  const b = ev.target.closest('button'); if (!b || b.disabled || S.state === 'over') return;
  if (b.dataset.close) { S.sel = null; lastDock = ''; return; }
  ensureAudio();
  if (b.dataset.build) {
    const k = b.dataset.build, [x,y] = PADS[S.sel], c = cost(k);
    if (S.gold < c) return;
    S.gold -= c;
    const t = {pad:S.sel, kind:k, p:[0,0,0], x, y, cd:0, ang:-Math.PI/2, recoil:0, spent:c, bRate:1, bDmg:1};
    t.s = computeStats(t); S.towers.push(t);
    burst(x, y, TOW[k].col, 12, 90); SFX.build();
  } else if (b.dataset.path !== undefined) {
    const t = selTower(), i = +b.dataset.path;
    if (!t || t.p[i] >= pathCap(t, i).cap) return;
    const c = upCost(t, i); if (S.gold < c) return;
    S.gold -= c; t.spent += c; if (S.coupons > 0) S.coupons--;
    t.p[i]++; t.s = computeStats(t);
    const lv = t.p[i];
    burst(t.x, t.y, PCOL[i], lv >= 5 ? 50 : lv >= 3 ? 26 : 14, lv >= 5 ? 200 : 120);
    floatText(t.x, t.y - 24, PATHS[t.kind][i].tiers[lv - 1][0], {size: lv >= 5 ? 18 : 14, col:PCOL[i], life: lv >= 5 ? 1.4 : .9});
    if (lv === 5) S.shake = RM ? 0 : 6;
    SFX.upgrade(lv);
  } else if (b.dataset.sell) {
    const t = selTower(); S.gold += Math.floor(t.spent * G.sellRefund);
    S.towers = S.towers.filter(x => x !== t); tone(300, .1, 'triangle', .04, .7);
  }
  lastDock = ''; popKey = '';
}
dock.addEventListener('click', onAction);
pop.addEventListener('click', onAction);
pop.addEventListener('pointerdown', ev => ev.stopPropagation());
cvs.addEventListener('pointerdown', ev => {
  ensureAudio();
  if (PAUSED.has(S.state)) return;
  const r = cvs.getBoundingClientRect(), x = (ev.clientX - r.left) / r.width * W, y = (ev.clientY - r.top) / r.height * H;
  if (S.placing) { placePad(x, y); return; }
  let best = null, bd = 28;
  PADS.forEach(([px,py], i) => { const d = Math.hypot(px - x, py - y); if (d < bd) { bd = d; best = i; } });
  S.sel = best === S.sel ? null : best; lastDock = ''; popKey = '';
  if (best !== null) tone(S.towers.some(t => t.pad === best) ? 600 : 500, .04, 'triangle', .03);
});
const padBtn = $('padBtn');
function placeOk(x, y){ return x > 16 && x < W - 16 && y > 18 && y < H - 22 && distToRoutes(x, y) >= G.padTrackGap && PADS.every(([px, py]) => Math.hypot(px - x, py - y) >= G.padGap); }
function placePad(x, y){
  if (!S.padTokens) { S.placing = false; return; }
  if (!placeOk(x, y)) { floatText(x, y - 10, tr('这里不能放'), {size:13, col:'#ff6b6b', life:.8}); tone(160, .12, 'square', .03); return; }
  PADS.push([Math.round(x), Math.round(y)]); S.padTokens--; S.placing = false; bgKey = '';
  S.sel = PADS.length - 1; lastDock = ''; popKey = '';
  burst(x, y, '#ffd23f', 18, 120); ring(x, y, 30, '#fff3a0', .4); SFX.build();
}
padBtn.addEventListener('click', () => { ensureAudio(); if (!S.padTokens) return; S.placing = !S.placing; S.sel = null; lastDock = ''; popKey = ''; });
goBtn.addEventListener('click', () => { ensureAudio(); if (S.state === 'over') { if (S.mode === 'camp') { const b = ovBody.querySelector('[data-level]'); if (b) b.click(); else newGame(S.level.id); } else newGame(); return; } if (S.state === 'intro' || S.state === 'map') { showMap(); return; } startWave(); });
const mapBtn = $('mapBtn'); let mapArm = 0;
const mapBtnText = () => mapArm ? tr('再点一次离开（本局进度不保存）') : '🗺 ' + tr('章节地图');
mapBtn.addEventListener('click', () => {
  ensureAudio();
  const midRun = S && S.wave > 0 && S.state !== 'over';
  if (midRun && !mapArm) { mapArm = 1; mapBtn.textContent = mapBtnText(); mapBtn.classList.add('warn'); setTimeout(() => { mapArm = 0; mapBtn.textContent = mapBtnText(); mapBtn.classList.remove('warn'); }, 3000); return; }
  mapArm = 0; mapBtn.textContent = mapBtnText(); mapBtn.classList.remove('warn'); showMap();
});
const setCtl = () => {
  mapBtn.textContent = mapBtnText();
  $('spd').textContent = tf('{n}× 速度', {n:S.speed});
  $('snd').textContent = tr(muted ? '音效 关' : '音效 开');
  $('mus').textContent = tr(musicOn ? '音乐 开' : '音乐 关');
};
$('spd').addEventListener('click', ev => { S.speed = S.speed >= 3 ? 1 : S.speed + 1; setCtl(); ev.currentTarget.setAttribute('aria-pressed', S.speed > 1); });
$('mus').addEventListener('click', ev => { musicOn = !musicOn; setCtl(); ev.currentTarget.setAttribute('aria-pressed', musicOn); ensureAudio(); });
$('snd').addEventListener('click', ev => { muted = !muted; setCtl(); ev.currentTarget.setAttribute('aria-pressed', !muted); if (!muted) ensureAudio(); });
function applyLang(){
  document.documentElement.lang = LANG === 'zh' ? 'zh-CN' : LANG;
  document.title = tr('爆破跑道');
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = tr(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', tr(el.dataset.i18nAria)));
  document.querySelectorAll('[data-lang]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === LANG));
  if (CFG_NAME !== undefined) showCfgStatus(CFG_NAME ? tf('正在使用：{x}', {x:CFG_NAME}) : tr('正在使用：默认配置'));
  fillMapSelect(); fillBoost(); artStatus();
  if (S) { setCtl(); popKey = ''; showCombo(); lastDock = ''; lastGo = ''; lastBuild = ''; if (!ov.hidden) renderOverlay(); }
}
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => {
  LANG = b.dataset.lang; try { localStorage.setItem('bd-lang', LANG); } catch (e) {}
  applyLang();
}));

// ---------- map selector ----------
const mapSel = $('mapSel');
function fillMapSelect(){
  if (!mapSel) return;
  const cur = mapSel.value || 'random';
  mapSel.innerHTML = `<option value="random">${tr('随机')}</option>` + Object.values(MAPS).map(m => `<option value="${m.id}">${tr(m.name)}</option>`).join('');
  mapSel.value = MAPS[cur] || cur === 'random' ? cur : 'random';
}
mapSel.addEventListener('change', () => { newGame(); });

// ---------- config import ----------
const cfgStatus = $('cfgStatus'), cfgWarn = $('cfgWarn');
function showCfgStatus(msg, warns){
  cfgStatus.textContent = msg;
  cfgWarn.hidden = !warns || !warns.length;
  cfgWarn.innerHTML = warns && warns.length ? `<summary>${tf('{n} 条提示', {n:warns.length})}</summary><ul>${warns.slice(0, 60).map(w => `<li>${w.replace(/</g, '&lt;')}</li>`).join('')}</ul>` : '';
}
function loadXLSX(){
  if (window.XLSX) return Promise.resolve(window.XLSX);
  return new Promise((ok, no) => { const sc = document.createElement('script'); sc.src = 'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js'; sc.onload = () => ok(window.XLSX); sc.onerror = () => no(new Error(tr('读取表格的组件加载失败，请检查网络后重试'))); document.head.appendChild(sc); });
}
// Sheets: row 1 = human header, row 2 = machine keys (do not edit), data from row 3
function sheetRows(wb, name, warns){
  const ws = wb.Sheets[name]; if (!ws) { warns.push(tf('缺少工作表「{x}」，使用默认值', {x:name})); return null; }
  const a = XLSX.utils.sheet_to_json(ws, {header:1, defval:'', raw:true});
  const keys = (a[1] || []).map(k => String(k).trim());
  return a.slice(2).filter(r => r.some(v => v !== '' && v != null) && !String(r[0] ?? '').trim().startsWith('※')).map((r, i) => { const o = {_row: i + 3}; keys.forEach((k, j) => { if (k) o[k] = r[j]; }); return o; });
}
function parseConfigWorkbook(wb){
  const warns = [], cfg = JSON.parse(JSON.stringify(DEFAULT_CFG));
  const num = (v, fb, where) => { if (v === '' || v == null) return fb; const n = Number(String(v).replace(',', '.')); if (!isFinite(n)) { warns.push(tf('{w}：「{v}」不是数字，使用默认值 {d}', {w:where, v, d:fb})); return fb; } return n; };
  const txt = (r, base, fb) => ({zh: String(r[base + '_zh'] ?? '').trim() || fb.zh, en: String(r[base + '_en'] ?? '').trim() || fb.en, fr: String(r[base + '_fr'] ?? '').trim() || fb.fr});
  let rows = sheetRows(wb, '全局', warns);
  if (rows) for (const r of rows) { const k = String(r.key).trim(); if (!(k in cfg.global)) { warns.push(tf('全局：未知参数「{x}」已忽略', {x:k})); continue; } cfg.global[k] = num(r.value, cfg.global[k], tf('全局 {x}', {x:k})); }
  rows = sheetRows(wb, '装置', warns);
  if (rows) for (const r of rows) {
    const t = cfg.towers.find(x => x.id === String(r.id).trim()); if (!t) { warns.push(tf('装置第 {n} 行：未知 id「{x}」已忽略', {n:r._row, x:r.id})); continue; }
    t.name = txt(r, 'name', t.name); t.short = txt(r, 'short', t.short); t.desc = txt(r, 'desc', t.desc);
    for (const k of ['cost','dmg','rate','range','rad','slow','slowDur','chain','decay','armor','bossMul']) t[k] = num(r[k], t[k], tf('装置 {x} {k}', {x:t.id, k}));
    if (r.color) t.color = String(r.color).trim();
  }
  rows = sheetRows(wb, '升级路线', warns);
  if (rows) for (const r of rows) { const p = cfg.paths.find(x => x.tower === String(r.tower).trim() && x.path === Number(r.path)); if (!p) { warns.push(tf('升级路线第 {n} 行：找不到对应路线', {n:r._row})); continue; } p.name = txt(r, 'name', p.name); }
  rows = sheetRows(wb, '升级', warns);
  if (rows) for (const r of rows) {
    const p = cfg.paths.find(x => x.tower === String(r.tower).trim() && x.path === Number(r.path)), t = p && p.tiers.find(x => x.tier === Number(r.tier));
    if (!t) { warns.push(tf('升级第 {n} 行：找不到对应等级', {n:r._row})); continue; }
    t.name = txt(r, 'name', t.name); t.desc = txt(r, 'desc', t.desc); t.cost = num(r.cost, t.cost, tf('升级第 {n} 行 cost', {n:r._row}));
    const eff = String(r.effect ?? '').trim();
    if (eff && eff !== t.effect) { try { parseEffect(eff); t.effect = eff; } catch (e) { warns.push(tf('升级第 {n} 行：效果「{x}」写法有误，保留原效果', {n:r._row, x:e.message})); } }
  }
  rows = sheetRows(wb, '敌人', warns);
  if (rows) for (const r of rows) { const e = cfg.enemies.find(x => x.id === String(r.id).trim()); if (!e) { warns.push(tf('敌人第 {n} 行：未知 id 已忽略', {n:r._row})); continue; }
    e.name = txt(r, 'name', e.name); for (const k of ['radius','speed','gold','value','leak']) e[k] = num(r[k], e[k], tf('敌人 {x} {k}', {x:e.id, k})); }
  rows = sheetRows(wb, '波次', warns);
  if (rows && rows.length) {
    const ws = rows.map((r, i) => { const d = cfg.waves[Math.min(i, cfg.waves.length - 1)]; const o = {wave: i + 1};
      for (const k of ['normals','armored','normHp','armHp','boss','bossHp','affixes','rain','hop','phones','whale']) o[k] = num(r[k], d[k] || 0, tf('波次第 {n} 行 {k}', {n:r._row, k})); return o; });
    cfg.waves = ws; cfg.global.waves = ws.length;
  }
  rows = sheetRows(wb, 'Boss', warns);
  if (rows) for (const r of rows) { const b = cfg.bosses.find(x => x.id === String(r.id).trim()); if (!b) { warns.push(tf('Boss 第 {n} 行：未知 id 已忽略', {n:r._row})); continue; }
    if (String(r.name ?? '').trim()) b.name = String(r.name).trim(); b.enabled = num(r.enabled, 1, tf('Boss {x} enabled', {x:b.id})) ? 1 : 0;
    b.title = txt(r, 'title', b.title); b.ability = txt(r, 'ability', b.ability); b.p = [1,2,3,4].map(i => num(r['p' + i], b.p[i - 1], tf('Boss {x} p{i}', {x:b.id, i}))); }
  rows = sheetRows(wb, '词缀', warns);
  if (rows) for (const r of rows) { const a = cfg.affixes.find(x => x.id === String(r.id).trim()); if (!a) continue; a.name = txt(r, 'name', a.name); a.desc = txt(r, 'desc', a.desc); }
  rows = sheetRows(wb, '卡牌', warns);
  if (rows) for (const r of rows) { const c = cfg.cards.find(x => x.id === String(r.id).trim()); if (!c) { warns.push(tf('卡牌第 {n} 行：未知 id「{x}」已忽略', {n:r._row, x:r.id})); continue; }
    c.enabled = num(r.enabled, 1, tf('卡牌 {x} enabled', {x:c.id})) ? 1 : 0; const rar = String(r.rar ?? '').trim().toUpperCase(); if (['C','R','L'].includes(rar)) c.rar = rar;
    c.stack = num(r.stack, c.stack, tf('卡牌 {x} stack', {x:c.id})) ? 1 : 0; if (c.name) c.name = txt(r, 'name', c.name); if (c.desc) c.desc = txt(r, 'desc', c.desc);
    c.v1 = num(r.v1, c.v1, tf('卡牌 {x} v1', {x:c.id})); c.v2 = num(r.v2, c.v2, tf('卡牌 {x} v2', {x:c.id})); }
  rows = sheetRows(wb, '跑道列表', warns);
  if (rows) for (const r of rows) { const id = String(r.id ?? '').trim(); if (!id) continue; let m = cfg.maps.find(x => x.id === id);
    if (!m) { m = {id, enabled:1, name:{zh:id, en:id, fr:id}, desc:{zh:'', en:'', fr:''}, spdMult:1, hpMult:1, routes:[], pads:[]}; cfg.maps.push(m); }
    m.enabled = num(r.enabled, 1, tf('跑道 {x} enabled', {x:id})) ? 1 : 0; m.name = txt(r, 'name', m.name); m.desc = txt(r, 'desc', m.desc);
    m.spdMult = num(r.spdMult, m.spdMult, tf('跑道 {x} spdMult', {x:id})); m.hpMult = num(r.hpMult, m.hpMult, tf('跑道 {x} hpMult', {x:id})); }
  rows = sheetRows(wb, '地图', warns);
  if (rows) {
    const byMap = {};
    for (const r of rows) { const id = String(r.map ?? '').trim(), type = String(r.type ?? '').trim(); if (!id || !type) continue;
      const x = num(r.x, NaN, tf('地图第 {n} 行 x', {n:r._row})), y = num(r.y, NaN, tf('地图第 {n} 行 y', {n:r._row})); if (!isFinite(x) || !isFinite(y)) continue;
      const m = byMap[id] = byMap[id] || {routes:{}, pads:[]};
      if (type === 'path') (m.routes[num(r.route, 1, '')] = m.routes[num(r.route, 1, '')] || []).push([num(r.order, 0, ''), x, y]);
      else if (type === 'pad') m.pads.push([num(r.order, 0, ''), x, y]); }
    for (const id in byMap) {
      const m = cfg.maps.find(x => x.id === id); if (!m) { warns.push(tf('地图：跑道「{x}」不在「跑道列表」里，已忽略', {x:id})); continue; }
      const routes = Object.keys(byMap[id].routes).sort((a, b) => a - b).map(k => byMap[id].routes[k].sort((a, b) => a[0] - b[0]).map(p => [p[1], p[2]])).filter(r => r.length >= 2);
      const pads = byMap[id].pads.sort((a, b) => a[0] - b[0]).map(p => [p[1], p[2]]);
      if (routes.length) m.routes = routes; else warns.push(tf('地图「{x}」：每条路线至少需要 2 个点，保留原跑道', {x:id}));
      if (pads.length) m.pads = pads; else warns.push(tf('地图「{x}」：至少需要 1 个空位，保留原空位', {x:id}));
    }
  }
  rows = sheetRows(wb, '界面文字', warns);
  if (rows) for (const r of rows) { const t = cfg.texts.find(x => x.key === String(r.key)); if (!t) continue; for (const lg of ['zh','en','fr']) { const v = String(r[lg] ?? '').trim(); if (v) t[lg] = v; } }
  rows = sheetRows(wb, '美术资源', warns);
  if (rows) { if (!cfg.art) cfg.art = JSON.parse(JSON.stringify(DEFAULT_CFG.art || []));
    for (const r of rows) { const key = String(r.key ?? '').trim(); if (!key) continue; let a = cfg.art.find(x => x.key === key);
      if (!a) { a = {key}; cfg.art.push(a); warns.push(tf('美术资源：新编号「{x}」游戏里没有用到', {x:key})); }
      a.src = String(r.src ?? '').trim();
      for (const k of ['w','h','ax','ay','frames','fps','cover']) if (r[k] !== '' && r[k] != null) a[k] = num(r[k], a[k], tf('美术资源 {x} {k}', {x:key, k})); } }
  if (!cfg.waves.length) { warns.push(tr('波次为空，使用默认波次')); cfg.waves = DEFAULT_CFG.waves; }
  return {cfg, warns};
}
function useConfig(cfg, name, warns){
  applyConfig(cfg); CFG_NAME = name || '';
  newGame(); applyLang();
  showCfgStatus(name ? tf('正在使用：{x}', {x:name}) : tr('正在使用：默认配置'), warns);
}
$('cfgFile').addEventListener('change', async ev => {
  const f = ev.target.files && ev.target.files[0]; if (!f) return;
  showCfgStatus(tr('正在读取…'));
  try {
    const X = await loadXLSX(), wb = X.read(await f.arrayBuffer(), {type:'array'});
    const {cfg, warns} = parseConfigWorkbook(wb);
    try { localStorage.setItem('bd-cfg', JSON.stringify({name:f.name, cfg})); } catch (e) {}
    useConfig(cfg, f.name, warns);
  } catch (e) { showCfgStatus(tf('导入失败：{x}', {x:e.message})); }
  ev.target.value = '';
});
$('cfgReset').addEventListener('click', () => { try { localStorage.removeItem('bd-cfg'); } catch (e) {} useConfig(JSON.parse(JSON.stringify(DEFAULT_CFG)), '', []); });

const ART_KEY_RE = /^[a-z]+(\.[A-Za-z0-9_]+)+$/;
$('artFile').addEventListener('change', async ev => {
  const files = [...(ev.target.files || [])]; if (!files.length) return;
  const known = new Set(ART_DEF.map(a => a.key)), skipped = [];
  for (const f of files) {
    const key = f.name.replace(/\.[^.]+$/, '').replace(/@\dx$/, '');
    if (!ART_KEY_RE.test(key) || !known.has(key)) { skipped.push(f.name); continue; }
    ART_LOCAL[key] = await new Promise(ok => { const r = new FileReader(); r.onload = () => ok(r.result); r.readAsDataURL(f); });
  }
  let saved = true; try { localStorage.setItem('bd-art', JSON.stringify(ART_LOCAL)); } catch (e) { saved = false; }
  const msgs = [];
  if (skipped.length) msgs.push(tf('这些文件名不是资源编号，已跳过：{x}', {x:skipped.join(', ')}));
  if (!saved) msgs.push(tr('图片太大，浏览器存不下，只在本次打开期间有效'));
  artNote = msgs.join(' · '); loadArt();
  ev.target.value = '';
});
$('artReset').addEventListener('click', () => { ART_LOCAL = {}; artNote = ''; try { localStorage.removeItem('bd-art'); } catch (e) {} loadArt(); });

// ---------- campaign: progress, story, chapter map, mining, reactions ----------
const PAUSED = new Set(['over', 'draft', 'intro', 'count', 'story', 'map', 'kcard', 'codex']);
const CAMP_BOSS = new Set(['pizza', 'overflow']);
let PROG = {stars:{}, cards:{}, combos:{}, foes:{}, points:0};
try { PROG = Object.assign(PROG, JSON.parse(localStorage.getItem('bd-prog') || '{}')); } catch (e) {}
const saveProg = () => { try { localStorage.setItem('bd-prog', JSON.stringify(PROG)); } catch (e) {} };
const levelOpen = i => i === 0 || PROG.stars[CH1[i - 1].id] > 0;
const fmtN = n => Math.round(n).toLocaleString(LANG === 'fr' ? 'fr-FR' : 'en-US');

function rowFrom(r, i){ const [n, a, nh, ah, boss, bh, aff, sp] = r; return Object.assign({wave:i + 1, normals:n, armored:a, normHp:nh, armHp:ah || nh * 2, boss: boss ? 1 : 0, bossHp:bh || 0, affixes:0, bossId:boss || null, affList:aff || []}, sp || {}); }
function setWaves(lvl){
  WAVES = lvl ? lvl.waves.map(rowFrom) : FREE_WAVES;
  BOSS_WAVES = WAVES.filter(w => +w.boss).map(w => w.wave);
}
const campNext = n => { const r = WAVES[n - 1]; return r ? {type: r.bossId ? 'boss' : 'normal', boss: r.bossId || undefined, affix: (r.affList || []).filter(a => AFX[a])} : {type:'normal', affix:[]}; };

// ----- story overlay -----
function showStory(lines, done){
  if (!lines || !lines.length) { done(); return; }
  S.story = {lines, i:0, done}; S.state = 'story'; popKey = ''; renderOverlay();
}
function storyNext(skip){
  const st = S.story; if (!st) return;
  if (skip || st.i >= st.lines.length - 1) { S.story = null; ov.hidden = true; st.done(); return; }
  st.i++; tone(660 + st.i * 20, .04, 'triangle', .02); renderOverlay();
}
function renderStory(){
  const st = S.story, [who, txt] = st.lines[st.i], sp = SPK[who] || SPK.blocky, lvl = S.level;
  ov.classList.add('ov-story');
  ovBody.innerHTML = `<div class="story">
    ${lvl ? `<div class="st-date"><span>${lvl.date}</span>${L(lvl.name)}</div>` : ''}
    <div class="st-box" style="--sc:${sp.col}">
      <div class="st-por ${who === 'hood' ? 'dark' : ''}">${sp.svg}</div>
      <div class="st-body"><b class="st-name">${L(sp.name)}</b><p class="st-txt" key="${st.i}">${L(txt)}</p></div>
    </div>
    <div class="st-ctl"><span class="st-n">${st.i + 1} / ${st.lines.length}</span>
      <button type="button" data-skipstory="1">${tr('跳过')}</button>
      <button type="button" class="primary" data-story="1">${st.i >= st.lines.length - 1 ? tr('开始！') : tr('继续 ▶')}</button></div>
  </div>`;
}

// ----- chapter map / codex / knowledge card / result -----
function showMap(){
  flowToken++; introDone = true; if (S) { S.state = 'map'; S.sel = null; } popKey = ''; renderOverlay();
}
function renderMap(){
  ov.classList.add('ov-map');
  const total = CH1.reduce((s, l) => s + (PROG.stars[l.id] || 0), 0);
  ovBody.innerHTML = `<div class="cmap">
    <div class="cm-h"><span class="cm-ch">${tr('第一章')}</span><h2>${tr('创世纪 · 2008–2010')}</h2>
      <span class="cm-stars">★ ${total} / ${CH1.length * 3}</span></div>
    <p class="sub">${tr('STEPN 跑者掉进区块链时光隧道，跟着比特币走过最初的三年。')}</p>
    <ol class="cm-path">${CH1.map((l, i) => { const open = levelOpen(i), st = PROG.stars[l.id] || 0;
      return `<li class="cm-node ${open ? '' : 'lock'} ${st ? 'done' : ''} ${open && !st ? 'next' : ''}">
        <button type="button" data-level="${l.id}" ${open ? '' : 'disabled'}>
          <span class="cm-i">${i + 1}</span><span class="cm-t"><small>${l.date}</small><b>${L(l.name)}</b></span>
          <span class="cm-s">${open ? '★★★'.split('').map((s, k) => `<i class="${k < st ? 'on' : ''}">★</i>`).join('') : '🔒'}</span>
        </button></li>`; }).join('')}
      <li class="cm-node lock soon"><button type="button" disabled><span class="cm-i">2</span><span class="cm-t"><small>2011–2013</small><b>${tr('第二章 · 敬请期待')}</b></span></button></li>
    </ol>
    <div class="cm-f">
      <button type="button" data-codex="cards">${tr('图鉴')} · ${Object.keys(PROG.cards).length + Object.keys(PROG.combos).length + Object.keys(PROG.foes).length}</button>
      <button type="button" data-free="1">${tr('经典模式')}</button>
    </div>
    <p class="cm-pts">${tf('累计积分 {n}', {n:fmtN(PROG.points)})} · <span>${tr('原型阶段的链下积分，没有任何实际价值')}</span></p>
  </div>`;
}
function renderCodex(){
  ov.classList.add('ov-map');
  const tab = S.codexTab || 'cards';
  const cards = CH1.map(l => PROG.cards[l.id] ? `<div class="cx-card"><small>${l.date}</small><b>${L(l.card.title)}</b><ul>${l.card.pts.map(p => `<li>${L(p)}</li>`).join('')}</ul></div>`
    : `<div class="cx-card lock"><small>${l.date}</small><b>???</b><p>${tf('通关「{x}」解锁', {x:L(l.name)})}</p></div>`).join('');
  const combos = Object.entries(REACT).map(([id, r]) => PROG.combos[id] ? `<div class="cx-card cx-r" style="--rc:${r.col}"><b>${L(r.name)}</b><small>${L(r.how)}</small><p>${L(r.desc)}</p></div>`
    : `<div class="cx-card lock"><b>???</b><small>${L(r.how)}</small><p>${tr('还没触发过。试试把这两种状态叠在同一个跑者身上。')}</p></div>`).join('');
  const foes = FOE_IDS.map(k => { const f = FOES[k]; return PROG.foes[k] ? `<div class="cx-card cx-r" style="--rc:${f.col}"><b>${L(f.name)}</b><p>${L(f.trait)}</p><p><b>${tr('对策')}</b> ${L(f.tip)}</p>${f.fact ? `<p class="cx-fact">${L(f.fact)}</p>` : ''}</div>`
    : `<div class="cx-card lock"><b>???</b><p>${tr('还没遇到过。')}</p></div>`; }).join('');
  ovBody.innerHTML = `<div class="cmap codex">
    <div class="cm-h"><h2>${tr('图鉴')}</h2></div>
    <div class="cx-tabs"><button type="button" data-codex="cards" aria-pressed="${tab === 'cards'}">${tr('知识卡')} ${Object.keys(PROG.cards).length}/${CH1.length}</button>
      <button type="button" data-codex="combos" aria-pressed="${tab === 'combos'}">${tr('组合')} ${Object.keys(PROG.combos).length}/${Object.keys(REACT).length}</button>
      <button type="button" data-codex="foes" aria-pressed="${tab === 'foes'}">${tr('跑者')} ${FOE_IDS.filter(k => PROG.foes[k]).length}/${FOE_IDS.length}</button></div>
    <div class="cx-list">${tab === 'cards' ? cards : tab === 'combos' ? combos : foes}</div>
    <div class="cm-f"><button type="button" class="primary" data-tomap="1">${tr('返回章节地图')}</button></div></div>`;
}
function renderKCard(){
  const l = S.level; ov.classList.add('ov-kcard');
  ovBody.innerHTML = `<div class="kcard">
    <div class="kc-badge">${tr('新知识卡')}</div>
    <small>${l.date}</small><h2>${L(l.card.title)}</h2>
    <ul>${l.card.pts.map(p => `<li>${L(p)}</li>`).join('')}</ul>
    <button type="button" class="primary" data-kdone="1">${tr('收入图鉴')}</button></div>`;
}
function levelWin(){
  const lvl = S.level, ratio = S.lives / G.startLives, stars = ratio >= .9 ? 3 : ratio >= .5 ? 2 : 1;
  const nre = Object.values(S.reacts).reduce((a, b) => a + b, 0);
  const pts = Math.round(S.satsEarned / 100) + stars * 100 + Math.min(200, nre * 2);
  S.campRes = {stars, pts, best: stars > (PROG.stars[lvl.id] || 0), first: !PROG.cards[lvl.id]};
  PROG.stars[lvl.id] = Math.max(PROG.stars[lvl.id] || 0, stars); PROG.cards[lvl.id] = 1; PROG.points += pts; saveProg();
  showStory(lvl.outro, () => { S.state = 'kcard'; renderOverlay(); });
}
function renderCampEnd(){
  const {win} = S.endInfo, lvl = S.level, r = S.campRes || {stars:0, pts:0}, idx = CH1.indexOf(lvl), nxt = CH1[idx + 1];
  const reacts = Object.entries(S.reacts).filter(([, n]) => n).map(([id, n]) => `<span class="chip" style="box-shadow:0 0 0 2px ${REACT[id].col}">${L(REACT[id].name)} ×${n}</span>`).join('');
  ov.hidden = false; ov.className = 'overlay';
  ovBody.innerHTML = `<h2>${win ? tr('关卡完成') : tf('领地失守 · 第 {n} 波', {n:S.wave})}</h2>
    <p class="sub">${lvl.date} · ${L(lvl.name)}</p>
    ${win ? `<div class="stars3">${[0,1,2].map(k => `<i class="${k < r.stars ? 'on' : ''}" style="--k:${k}">★</i>`).join('')}</div>` : ''}
    <div class="rows">
      <div><span>${tr('剩余生命')}</span><b>${S.lives} / ${G.startLives}</b></div>
      <div><span>${tr('挖到区块')}</span><b>${S.blocksWon}</b></div>
      <div><span>${tr('挖到的聪')}</span><b>${fmtN(S.satsEarned)}</b></div>
      ${win ? `<div><span>${tr('获得积分')}</span><b>+${fmtN(r.pts)}</b></div>` : ''}
    </div>
    ${reacts ? `<p class="sub">${tr('本关触发的组合')}</p><span class="chips">${reacts}</span>` : `<p class="sub">${tr('这关还没打出组合，试试把两种状态叠在同一个跑者身上。')}</p>`}
    ${win && nxt ? `<button class="primary" type="button" data-level="${nxt.id}">${tr('下一关')} · ${L(nxt.name)}</button>` : ''}
    <div class="row2"><button type="button" data-level="${lvl.id}">${win ? tr('再玩一次') : tr('重试')}</button><button type="button" data-tomap="1">${tr('章节地图')}</button></div>`;
}
function campWaveCleared(){
  const w = S.wave;
  if (w >= WAVES.length) { S.state = 'over'; S.endInfo = {win:true, sc:score(), best:false}; levelWin(); return; }
  let g = G.waveReward;
  for (const t of S.towers) if (t.s.gpw) g += t.s.gpw;
  if (mod('bank')) g += Math.min(G.bankCap, Math.floor(S.gold * G.bankRate));
  S.gold += g; floatText(W/2, H/2 - 40, tf('第 {n} 波守住 · +{g} GST', {n:w, g}), {size:16, col:'#ffd23f', life:1.4});
  S.next = campNext(w + 1); S.state = 'between'; S.between = G.betweenTime;
  const beat = S.level.beats && S.level.beats[w + 1];
  if (beat) showStory(beat, () => { S.state = 'between'; ov.hidden = true; });
}

// ----- mining: the network makes a block every so often; your share of hash power is your odds -----
const myHash = () => S.towers.reduce((s, t) => s + (t.kind === 'miner' ? t.s.hash || 0 : 0), 0);
function mineTick(dt){
  if (!S.unlocked.includes('miner') && !S.towers.some(t => t.kind === 'miner')) return;
  S.blockT -= dt; if (S.blockT > 0) return;
  S.blockT = G.blockTarget * (.55 + Math.random() * .9); S.height++; S.netBlocks++;
  const H0 = myHash(), share = H0 / (H0 + S.net);
  if (S.netBlocks % G.adjustEvery === 0) { S.net *= 1 + G.netGrowth; if (H0) floatText(W/2, 26, tf('难度调整：全网算力 +{n}%', {n:Math.round(G.netGrowth * 100)}), {size:12, col:'#fff3a0', life:1.4}); }
  if (H0 && Math.random() < share) {
    const miners = S.towers.filter(t => t.kind === 'miner'); let r = Math.random() * H0, m = miners[0];
    for (const t of miners) { r -= t.s.hash || 0; if (r <= 0) { m = t; break; } }
    const bonus = miners.reduce((s, t) => Math.max(s, t.s.blockBonus || 0), 0), sats = Math.round(G.blockReward * (1 + bonus));
    S.sats += sats; S.satsEarned += sats; S.blocksWon++;
    burst(m.x, m.y - 20, '#f7931a', 30, 170); ring(m.x, m.y, 40, '#ffd23f', .5); m.recoil = 1;
    floatText(m.x, m.y - 44, tf('出块！#{h}', {h:fmtN(S.height)}), {size:18, col:'#f7931a', life:1.3});
    chord([784, 988, 1175], 50);
    if (S.state === 'draft') S.draftQ++; else setTimeout(() => { if (S.state === 'wave' || S.state === 'between') openBlockDraft(); else S.draftQ++; }, 450);
  } else if (H0) {
    S.lostT = 1.6; S.lostH = S.height;
  }
}
function openBlockDraft(){
  S.resume = S.state === 'draft' ? S.resume : S.state; S.blockDraft = true; S.satReroll = G.rerollSats;
  const h = S.height, n = Math.round(G.blockReward);
  openDraft(() => tf('挖到区块 #{h}！', {h:fmtN(h)}), () => tr('区块奖励：选一个，比赛马上继续。'));
}
function minerHeat(t, s, gm, dt){
  if (!s.heat) return;
  for (const e of S.enemies) if (!e.dead && Math.hypot(e.x - t.x, e.y - t.y) <= s.range + E[e.k].r) { e.heatT = .5; damage(e, s.heat * gm * t.bDmg * dt, 'heat', {quiet:true, noCrit:true}); }
  if (Math.random() < dt * 6) S.parts.push({x:t.x + rnd(-10, 10), y:t.y - 18, vx:rnd(-10, 10), vy:-40, life:.6, max:.6, r:2.2, col:'rgba(255,120,60,.8)'});
}

// ----- reactions -----
let lastStop = -9;
function discover(id){
  if (PROG.combos[id]) return; PROG.combos[id] = 1; saveProg();
  banner(tf('新组合：{x}！', {x:L(REACT[id].name)}), L(REACT[id].how)); cheer(.06, 1.2);
}
function reactFx(e, id){
  const r = REACT[id]; S.reacts[id] = (S.reacts[id] || 0) + 1; discover(id);
  floatText(e.x, e.y - 30, L(r.name) + '!', {size:20, col:r.col, life:1});
  ring(e.x, e.y, 34, r.col, .35); burst(e.x, e.y, r.col, 18, 160);
  if (!RM) { S.shake = Math.max(S.shake, 5); if (S.t - lastStop > .3) { S.hitstop = .06; lastStop = S.t; } }
  tone(id === 'thermal' ? 220 : id === 'bonk' ? 880 : 520, .12, 'square', .04, id === 'rave' ? 2 : .6, .3);
}
function react(e, d, src, o){
  if (src === 'react') return d;
  const frozen = e.stunT > 0 && e.iced;
  if (frozen && e.wetT > 0 && !e.shattered && src !== 'heat') {
    e.shattered = true; e.stunT = 0; reactFx(e, 'shatter');
    for (const x of S.enemies) if (x !== e && !x.dead && Math.hypot(x.x - e.x, x.y - e.y) < 42) damage(x, d * 1.2, 'react', {quiet:true});
    return d * 2.5;
  }
  if (src === 'heat' && frozen) { e.stunT = 0; reactFx(e, 'thermal'); return Math.max(d * 40, e.max * (e.k === 'boss' ? .04 : .18)); }
  if (src === 'bomb' && e.wetT > 0 && !(e.aquaT > 0) && e.k !== 'whale') {
    e.aquaT = 1.5; e.d = Math.max(0, e.d - (e.k === 'boss' ? 18 : 48)); e.wetT = 0; reactFx(e, 'aquaplane'); return d * 1.5;
  }
  if (src === 'frost' && e.burnT > 0) {
    e.burnT = 0; reactFx(e, 'steam');
    for (const x of S.enemies) if (!x.dead && Math.hypot(x.x - e.x, x.y - e.y) < 48) { if (x.k !== 'rain') x.wetT = Math.max(x.wetT, 2); if (x !== e) damage(x, d * 3 + 2, 'react', {quiet:true}); }
    return d * 3 + 2;
  }
  if (e.dizzyT > 0 && e.burnT > 0 && !(e.revT > 0) && (src === 'bomb' || src === 'tesla')) { e.revT = 1.6; reactFx(e, 'rave'); return d; }
  if ((src === 'dart' || src === 'gem') && e.dizzyT > 0) { o.crit = 1; o.critMul = Math.max(o.critMul || 0, 2.5); stun(e, .3); e.dizzyT = 0; reactFx(e, 'bonk'); return d; }
  return d;
}
function wrapText(txt, maxW){ const out = []; let line = ''; const words = LANG === 'zh' ? [...txt] : txt.split(/(\s+)/);
  for (const w of words) { const t = line + w; if (ctx.measureText(t).width > maxW && line.trim()) { out.push(line.trim()); line = w.trimStart(); } else line = t; }
  if (line.trim()) out.push(line.trim()); return out; }
function drawFoeNotes(){
  const n = S.foeNotes && S.foeNotes[0]; if (!n) return;
  n.life -= 1/60; if (n.life <= 0) { S.foeNotes.shift(); return; }
  const f = FOES[n.k], a = Math.min(1, n.life / .4, (n.max - n.life) / .25), w = Math.min(W - 24, 340), x = 12, y = 40;
  ctx.save(); ctx.globalAlpha = a; ctx.font = CJK(700, 11);
  const lines = [...wrapText(L(f.trait), w - 58), ...wrapText(tr('对策') + '：' + L(f.tip), w - 58)], h = 30 + lines.length * 14;
  ctx.fillStyle = 'rgba(32,30,44,.9)'; ctx.strokeStyle = f.col; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.roundRect(x, y, w, h, 12); ctx.fill(); ctx.stroke();
  drawRunner(x + 24, y + h / 2 + 4, n.k === 'whale' ? 1.25 : 1.15, runnerLook(n.k), 1, S.t * 6, {noShadow:true});
  ctx.textAlign = 'left'; ctx.fillStyle = f.col; ctx.font = CJK(900, 13); ctx.fillText((n.first ? tr('新跑者') + ' · ' : '') + L(f.name), x + 48, y + 19);
  ctx.fillStyle = '#fff'; ctx.font = CJK(700, 11); lines.forEach((l, i) => ctx.fillText(l, x + 48, y + 35 + i * 14));
  ctx.restore();
}
function drawStatuses(){
  drawFoeNotes();
  ctx.textAlign = 'center';
  for (const e of S.enemies) {
    if (e.dead) continue;
    const tags = [];
    if (e.wetT > 0) tags.push(['#3a8fd0', '湿']); if (e.slipT > 0) tags.push(['#e9b800', '滑']); if (e.burnT > 0) tags.push(['#e0473a', '辣']);
    if (e.stunT > 0 && e.iced) tags.push(['#6fc3ff', '冻']); if (e.dizzyT > 0) tags.push(['#b05ad8', '懵']); if (e.heatT > 0) tags.push(['#ff6a3d', '热']);
    if (!tags.length) continue;
    const u = runnerScale(e), y = e.y - 14 * u - 18 - (e.k === 'boss' ? 22 : 0), w = 11;
    tags.forEach(([c, t], i) => { const x = e.x + (i - (tags.length - 1) / 2) * (w + 1);
      ctx.fillStyle = c; ctx.strokeStyle = INK; ctx.lineWidth = 1; ctx.beginPath(); ctx.roundRect(x - w/2, y - w/2, w, w, 3); ctx.fill(); ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = CJK(900, 8); ctx.fillText(LANG === 'zh' ? t : L(STATUS_NAME[{湿:'wet', 滑:'slip', 辣:'spicy', 冻:'frozen', 懵:'dizzy', 热:'heat'}[t]])[0], x, y + 3); });
  }
  if (S.lostT > 0) { S.lostT -= 1/60; ctx.globalAlpha = Math.min(1, S.lostT); capsule(tf('区块 #{h} 被别的矿工抢先挖到了', {h:fmtN(S.lostH)}), W/2, 22, 11); ctx.globalAlpha = 1; }
}
const immuneTag = k => { const f = (KIND_IMMUNE[k] || []).filter(x => PROG.foes[x]); return f.length ? ` <span class="tagline immune">· ${tf('对{x}无效', {x:f.map(x => L(FOES[x].name)).join(LANG === 'zh' ? '、' : ', ')})}</span>` : ''; };
const statusTags = k => (KIND_STATUS[k] || []).map(s => L(STATUS_NAME[s])).join(LANG === 'zh' ? '、' : ', ');
const reactTags = k => (KIND_REACT[k] || []).map(r => PROG.combos[r] ? L(REACT[r].name) : '???').join(LANG === 'zh' ? '、' : ', ');

// ----- keyboard (desktop) -----
document.addEventListener('keydown', ev => {
  if (ev.target && /INPUT|SELECT|TEXTAREA/.test(ev.target.tagName)) return;
  const k = ev.key.toLowerCase();
  if (S.state === 'story') { if (k === ' ' || k === 'enter') { ev.preventDefault(); storyNext(false); } else if (k === 'escape') storyNext(true); return; }
  if (k === ' ') { ev.preventDefault(); if (!goBtn.disabled) goBtn.click(); return; }
  if (k === 'f') { $('spd').click(); return; }
  if (k === 'escape') { S.sel = null; S.placing = false; lastDock = ''; popKey = ''; return; }
  if (S.sel === null || PAUSED.has(S.state)) return;
  const t = selTower();
  if (!t && /^[1-9]$/.test(k)) { const kind = S.unlocked[+k - 1]; const b = kind && pop.querySelector(`[data-build="${kind}"]`); if (b && !b.disabled) b.click(); }
  if (t && 'qwe'.includes(k) && k.length === 1) { const b = pop.querySelector(`[data-path="${'qwe'.indexOf(k)}"]`); if (b && !b.disabled) b.click(); }
  if (t && k === 'x') { const b = pop.querySelector('[data-sell]'); if (b) b.click(); }
});

// test hook for automated checks (no effect on play)
window.__bd = { get S(){ return S; }, pathCap, computeStats, PATHS, spawnEnemy, parseConfigWorkbook, useConfig, get G(){ return G; }, TOW, E, BOSS, get WAVES(){ return WAVES; }, PADS, ROUTES, MAPS, get CUR_MAP(){ return CUR_MAP; }, get W(){ return W; }, get H(){ return H; }, get PROG(){ return PROG; }, CH1, REACT, myHash: () => myHash(), placeOk: (x, y) => placeOk(x, y), ART, get ART_DEF(){ return ART_DEF; }, loadArt, setArtLocal(o){ ART_LOCAL = o; loadArt(); }, newGame, showMap, openBlockDraft, levelWin, react, damage, explode, stun };

// ---------- loop ----------
let last = performance.now();
function loop(now){
  const real = Math.min(.05, (now - last) / 1000); last = now;
  let dt = real * S.speed;
  if (S.slowmo > 0) { S.slowmo -= real; dt *= .25; }
  if (S.shake > 0) S.shake = Math.max(0, S.shake - real * 30);
  if (S.flash > 0) S.flash = Math.max(0, S.flash - real);
  if (S.iceFlash > 0) S.iceFlash = Math.max(0, S.iceFlash - real);
  if (S.hitstop > 0) { S.hitstop -= real; dt = 0; }
  if (!PAUSED.has(S.state)) { update(dt); if (S.state === 'wave') mineTick(dt); }
  draw(); renderUI();
  requestAnimationFrame(loop);
}
{ let saved = null; try { saved = JSON.parse(localStorage.getItem('bd-cfg') || 'null'); } catch (e) {}
  let ok = false;
  const current = c => (c.towers || []).some(t => t.id === 'miner') && (c.bosses || []).some(b => b.id === 'overflow') && (c.enemies || []).some(e => e.id === 'whale');
  if (saved && saved.cfg && current(saved.cfg)) { try { applyConfig(saved.cfg); CFG_NAME = saved.name; ok = true; } catch (e) {} }
  else if (saved) { try { localStorage.removeItem('bd-cfg'); } catch (e) {} }
  if (!ok) applyConfig(DEFAULT_CFG);
  showCfgStatus(ok ? tf('正在使用：{x}', {x:CFG_NAME}) : tr('正在使用：默认配置'));
}
newGame(); applyLang(); resize();
window.addEventListener('resize', resize);
if (window.ResizeObserver) new ResizeObserver(resize).observe(cvs);
requestAnimationFrame(loop);
})();
</script>
