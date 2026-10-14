# Builds the default game config (single source of truth for the game and the spreadsheet).
import json, re
exec(open('trans.py').read())          # T: zh -> (en, fr)
def L(zh):
    en, fr = T.get(zh, (zh, zh))
    return {'zh': zh, 'en': en, 'fr': fr}

G = [  # key, value, description
 ('waves', 15, '总波数（须与「波次」表行数一致）'),
 ('eliteAffixes', 2, '精英波词缀数量'),
 ('startGold', 300, '开局 GST'),
 ('startLives', 20, '开局生命'),
 ('waveReward', 30, '每波守住的基础 GST 奖励'),
 ('eliteReward', 60, '精英波额外 GST 奖励'),
 ('eliteHpMult', 1.4, '精英波对手体力倍率'),
 ('betweenTime', 8, '两波之间的布置时间（秒）'),
 ('earlyBonusPerSec', 5, '提前开波每剩 1 秒奖励的 GST'),
 ('rerollBase', 20, '神秘箱重抽起始价格'),
 ('rerollStep', 10, '每次重抽涨价'),
 ('sellRefund', 0.6, '回收装置返还比例'),
 ('secCap', 2, '次路线等级上限'),
 ('secCapBreaker', 3, '抽到「创世鞋」后的次路线上限'),
 ('masterDmg', 1.25, '徽章卡：该装置效果倍率'),
 ('masterCost', 0.8, '徽章卡：该装置升级费用倍率'),
 ('couponMult', 0.5, '升级卷轴：升级费用倍率'),
 ('critBase', 0.12, '基础暴击率'),
 ('critMul', 2, '基础暴击倍率'),
 ('markBonus', 0.2, '「汽水黏鞋」标记后受到的额外效果'),
 ('comboWindow', 1.2, '连续劝退的判定间隔（秒）'),
 ('frenzyNeed', 50, '触发燃脂模式所需连续劝退'),
 ('frenzyDur', 5, '燃脂模式持续（秒）'),
 ('frenzyRate', 1.6, '燃脂模式出手速度倍率'),
 ('marathonDur', 10, '马拉松模式：燃脂持续（秒）'),
 ('marathonRate', 2, '马拉松模式：出手速度倍率'),
 ('warmBonus', 0.1, '当天跑步 ≥ 2 km 的热身效果加成'),
 ('warmKm', 2, '热身：当天在 STEPN 跑满多少 km 触发'),
 ('rpPerKm1', 10, 'RP：前 5 km 每 km 获得的 RP'),
 ('rpPerKm2', 5, 'RP：5–10 km 每 km 获得的 RP'),
 ('rpDailyCap', 75, 'RP：单日上限'),
 ('talentRP1', 200, '天赋一档所需累计 RP'),
 ('talentRP2', 600, '天赋二档所需累计 RP'),
 ('talentRP3', 1200, '天赋三档所需累计 RP'),
 ('talentBonus1', 0.1, '天赋一档：全部装置效果加成'),
 ('talentBonus2', 0.2, '天赋二档：全部装置效果加成'),
 ('talentBonus3', 0.3, '天赋三档：全部装置效果加成'),
 ('rarityC', 60, '神秘箱抽卡权重：普通'),
 ('rarityR', 30, '神秘箱抽卡权重：稀有'),
 ('rarityL', 10, '神秘箱抽卡权重：传说'),
 ('bankRate', 0.1, 'GMT 质押：每波利息比例'),
 ('bankCap', 60, 'GMT 质押：每波利息上限'),
 ('goldenChance', 0.1, '神秘箱跑者出现概率'),
 ('goldenMult', 5, '神秘箱跑者 GST 倍率'),
 ('popRadius', 34, 'Gas Hero 毒气半径'),
 ('popBase', 2, 'Gas Hero 毒气基础效果'),
 ('popPerWave', 0.5, 'Gas Hero 毒气每波增加的效果'),
 ('popChainRadius', 1.5, '连环毒气：半径倍率'),
 ('popChainDmg', 2, '连环毒气：效果倍率'),
 ('twinChance', 0.2, '双倍铸造：立刻再出手概率'),
 ('freeupFallback', 100, '鞋匠：场上没有装置时改给的 GST'),
 ('spawnBase', 0.62, '出怪间隔基础值（秒）'),
 ('spawnPerWave', 0.022, '出怪间隔每波缩短'),
 ('spawnMin', 0.28, '出怪间隔下限'),
 ('spawnArmorMult', 1.3, '耐力跑者、巨鲸出场后间隔倍率'),
 ('hpRain', 1.2, '雨衣跑者体力 = 慢跑者体力 × 此值'),
 ('hpHop', 1.0, '弹簧鞋跑者体力 = 慢跑者体力 × 此值'),
 ('hpPhones', 1.2, '降噪耳机跑者体力 = 慢跑者体力 × 此值'),
 ('hpWhale', 3.0, '巨鲸体力 = 耐力跑者体力 × 此值'),
 ('hopDmg', 0.2, '弹簧鞋跑者跳过香蕉皮时只吃的效果比例'),
 ('whaleMin', 4, '巨鲸：单次效果低于此值的攻击会被削弱'),
 ('whaleChip', 0.33, '巨鲸：被削弱的攻击只算此比例'),
 ('slowCap', 0.85, '减速上限'),
 ('bossSlowMult', 0.5, 'Boss 受减速的比例（未升「冰桶挑战」时）'),
 ('bossStunMult', 0.25, 'Boss 受眩晕时长比例'),
 ('miniHp', 0.35, '跑团：跟跑者体力占原跑者比例'),
 ('miniGold', 2, '跟跑者 GST'),
 ('miniSpeed', 1.15, '跟跑者速度倍率'),
 ('shieldPct', 0.35, '能量盾占体力比例'),
 ('regenPct', 0.05, '补给词缀：每秒回复比例'),
 ('regenDelay', 1, '补给词缀：多久没被干扰开始回复（秒）'),
 ('swiftMult', 1.4, '冲刺词缀：速度倍率'),
 ('shrapnelRange', 90, '香蕉碎片：溅射距离'),
 ('shrapnelPct', 0.3, '香蕉碎片：每块效果比例'),
 ('clusterPct', 0.4, '小香蕉：效果比例'),
 ('firePatchDps', 0.6, '辣油泼地：每秒效果比例'),
 ('infernoRadius', 42, '火锅底料：溅射半径'),
 ('iceAgeFreeze', 2, '人工降雪：冻结时长（秒）'),
 ('ricochetPct', 0.5, '弹跳鞋盒：效果比例'),
 ('ricochetRange', 120, '弹跳鞋盒：弹跳距离'),
 ('decapBossPct', 0.15, '神秘箱轰炸：扣 Boss 最大体力比例'),
 ('decapMult', 3, '神秘箱轰炸：对非 Boss 倍率'),
 ('teslaHop', 70, '广场舞音响：传播距离'),
 ('blockTarget', 16, '挖矿：全网平均出块间隔（秒）'),
 ('blockReward', 5000, '挖矿：每个区块奖励的聪'),
 ('adjustEvery', 3, '挖矿：每多少个区块调整一次难度'),
 ('netGrowth', 0.15, '挖矿：每次难度调整全网算力上涨比例'),
 ('freeNet', 3, '挖矿：经典模式的全网初始算力'),
 ('rerollSats', 1500, '区块奖励重抽一次花费的聪'),
 ('padTrackGap', 34, '额外放置点：离跑道中心线的最小距离'),
 ('padGap', 32, '额外放置点：离其他空位的最小距离'),
 ('scoreKill', 600, '分数：劝退率权重'),
 ('scoreLives', 300, '分数：剩余生命权重'),
 ('scoreClean', 100, '分数：无漏怪波数权重'),
]

exec(open('devices_cfg.py').read())
T.update(translations())
TOWERS = [(d[0], d[1][0], d[2][0], d[3][0], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13]) for d in DEVICES] + [
 ('miner', '矿机', '矿机', '不攻击，比赛中不停算题挖区块：挖到区块得聪和一次三选一', 120, 0, 1, 70, 0, 0, 0, 1, '#f7931a', ''),
]
# tower, path, path name, [(tier name, cost, desc, effect)]
PATHS = [(tw, pi, pn[0], [(a, c, d, e) for (a, _en, _fr, c, d, _ed, _fd, e) in tiers]) for tw, pi, pn, tiers in PATHS6] + [
 ('miner', 1, '算力', [('超频 CPU', 60, '算力 +50%', 'hash*=1.5'), ('双核处理器', 120, '算力 +50%', 'hash*=1.5'), ('显卡挖矿', 300, '算力 ×3（2010 年显卡挖矿开始流行）', 'hash*=3'), ('多卡矿机', 700, '算力 ×2', 'hash*=2'), ('显卡农场', 1500, '算力 ×2.5', 'hash*=2.5')]),
 ('miner', 2, '矿池', [('加入矿池', 70, '出块奖励 +25%', 'blockBonus+=0.25'), ('矿池分成', 140, '射程内其他装置效果 +15%', 'auraDmg=1.15'), ('稳定收益', 320, '出块奖励再 +50%', 'blockBonus+=0.5'), ('大矿池', 700, '射程内其他装置效果 +30%，射程 +30', 'auraDmg=1.3; range+=30'), ('算力联盟', 1500, '出块奖励再 +100%，射程内装置出手间隔 −15%', 'blockBonus+=1; auraRate=0.85')]),
 ('miner', 3, '散热', [('风扇狂转', 60, '吹出热风：射程内跑者每秒受 1 点效果并挂上“热”', 'heat+=1'), ('机箱漏风', 120, '热风 +2', 'heat+=2'), ('水冷管道', 300, '射程 +25', 'range+=25'), ('烧机模式', 700, '热风 ×3', 'heat*=3'), ('矿场火炉', 1500, '热风 +15，射程 +30', 'heat+=15; range+=30')]),
]
ENEMIES = [  # id, name, radius, speed, gold, scoreValue, energyCost
 ('norm', '慢跑者', 9, 55, 6, 1, 1),
 ('arm', '耐力跑者', 11, 42, 12, 2, 2),
 ('boss', '传奇跑者', 22, 26, 80, 15, 10),
 ('rain', '雨衣跑者', 9, 52, 8, 1, 1),
 ('hop', '弹簧鞋跑者', 9, 62, 8, 1, 1),
 ('phones', '降噪耳机跑者', 9, 55, 8, 1, 1),
 ('whale', '巨鲸', 15, 30, 30, 4, 3),
]
def waves():
    rows = []
    for w in range(1, 16):
        n = round((6 + w * 1.3) * 1.35) * 3; a = (int((w - 1) * 1.1) if w >= 3 else 0) * 3
        boss = w % 5 == 0
        rows.append({'wave': w, 'normals': n, 'armored': a, 'normHp': round((2.2 + w * .9 + w * w * .1) * (1 + max(0, w - 8) * .06), 2), 'armHp': round((5.5 + w * 2 + w * w * .2) * (1 + max(0, w - 8) * .06), 2),
                     'boss': 1 if boss else 0, 'bossHp': {5: 100, 10: 420, 15: 1400}.get(w, 0), 'affixes': 0 if w < 4 else (2 if boss and w >= 10 else 1),
                     'rain': round(n * .1) if w >= 4 else 0, 'hop': round(n * .08) if w >= 6 else 0, 'phones': round(n * .08) if w >= 8 else 0, 'whale': (1 + (w - 10) // 2) if w >= 10 else 0})
    return rows
BOSSES = [  # id, name, title, ability, p1, p2, p3, p4  (meaning described in sheet)
 ('yawn', 'Nox', '黑猫', '九命：第一次退赛会原地复活（40% 体力）', 0.4, 1, 0, 0),
 ('gilg', 'Aurum', '金王', '王之宝库：每 4 秒召唤 2 名金甲跑者', 4, 2, 8, 0.8),
 ('king', 'Slimo', '黏液国王', '黏液王冠：身后留下黏液，踩到的跑者加速 30% 并回体力', 0.3, 1.3, 0.04, 5),
 ('lucas', 'Rocco', '光头', '铁头冲刺：每 5 秒冲刺 1 秒，3 倍速', 5, 1, 3, 0),
 ('shiti', 'Chuckles', '笑声', '开怀大笑：每 6 秒大笑一次，身边的装置停工 1.5 秒', 6, 130, 1.5, 0),
 ('pizza', 'Pizza Rider', '披萨外卖员', '一万枚换两个披萨：体力掉到 2/3 和 1/3 时各扔下一盒披萨，冒出一群披萨跑者', 5, 0.22, 0, 0),
 ('overflow', 'Overflow', '溢出怪', '整数溢出：第一次倒下时分裂成两个，各带 60% 体力；几秒后“软分叉”修复，两个都掉一半体力', 4, 0.5, 0, 0),
 ('jerry', 'Datto', '数据控', '数据分析：每 3 秒对受到最多的装置类型产生 65% 抗性', 3, 0.65, 0, 0),
]
BOSS_PARAMS = {
 'yawn': ['复活体力比例', '复活后无敌秒数', '', ''],
 'gilg': ['召唤间隔（秒）', '每次召唤人数', '最多召唤人数', '金甲跑者体力倍率'],
 'king': ['黏液间隔（秒）', '黏液上速度倍率', '黏液上每秒回复比例', '黏液持续（秒）'],
 'lucas': ['冲刺间隔（秒）', '冲刺时长（秒）', '冲刺速度倍率', ''],
 'shiti': ['大笑间隔（秒）', '影响半径', '装置停工（秒）', ''],
 'pizza': ['每盒披萨冒出几个跑者', '披萨跑者体力占比', '', ''],
 'overflow': ['软分叉延迟（秒）', '软分叉扣除体力比例', '', ''],
 'jerry': ['统计间隔（秒）', '抗性比例', '', ''],
}
AFFIXES = [('swift', '冲刺', '移速 +40%'), ('regen', '补给', '1 秒没被干扰就回体力'), ('shield', '能量盾', '额外 35% 能量护盾'), ('split', '跑团', '退赛时 2 名跟跑者接力')]
CARDS = [  # id, tag, rarity, stack, name, desc, v1, v2, note
 ('u_bomb', '装置', 'C', 0, '香蕉皮投手', '解锁香蕉皮投手：往跑道扔香蕉皮陷阱，踩中的几个人一起滑倒', 0, 0, ''),
 ('u_frost', '装置', 'C', 0, '洒水器', '解锁洒水器：持续喷水，范围减速', 0, 0, ''),
 ('u_sniper', '装置', 'R', 0, '鞋盒无人机', '解锁鞋盒无人机：指定投递区，全图空投鞋盒', 0, 0, ''),
 ('u_tesla', '装置', 'R', 0, '广场舞音响', '解锁广场舞音响：洗脑神曲在跑者之间传播', 0, 0, ''),
 ('u_miner', '装置', 'R', 0, '矿机', '解锁矿机：挖区块得聪，并触发区块奖励三选一', 0, 0, ''),
 ('u_lure', '装置', 'R', 0, '休闲诱惑站', '解锁休闲诱惑站：美食、沙发和限量球鞋让跑者停下来', 0, 0, ''),
 ('pad', '道具', 'R', 1, '额外放置点', '获得 1 个放置点：点地图上跑道以外的空地，新增一个装置空位', 1, 0, 'v1 = 放置点个数'),
 ('freeup', '道具', 'C', 1, '鞋匠', '场上一个装置沿主路线免费升 1 级（没有装置时改为 +100 GST）', 0, 0, ''),
 ('coupon', '道具', 'C', 1, '升级卷轴', '接下来 3 次路线升级半价', 3, 0, 'v1 = 半价次数'),
 ('m_dart', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('m_bomb', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('m_frost', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('m_sniper', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('m_tesla', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('m_miner', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('m_lure', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('breaker', '道具', 'L', 0, '创世鞋', '6 级专精升级费用 −30%', 0.7, 0, 'v1 = 费用倍率'),
 ('drill', '宝石', 'C', 1, '效率宝石', '所有装置效果 +15%（可叠加）', 0.15, 0, 'v1 = 效果加成'),
 ('crit', '宝石', 'C', 1, '幸运宝石', '暴击率 +10%（可叠加）', 0.1, 0, 'v1 = 暴击率加成'),
 ('heart', '宝石', 'C', 1, '舒适宝石', '生命 +6', 6, 0, 'v1 = 生命'),
 ('loot', '道具', 'C', 1, 'GST 红包', '立即获得 120 GST', 120, 0, 'v1 = GST'),
 ('golden', '道具', 'C', 0, '神秘箱', '10% 的对手跑者背着神秘箱，劝退后 GST ×5', 0, 0, '概率与倍率见全局'),
 ('bank', '道具', 'R', 0, 'GMT 质押', '每波结束获得当前 GST 10% 的利息（最多 60）', 0, 0, '利率与上限见全局'),
 ('pop', '道具', 'R', 0, 'Gas Hero 毒气', '跑者退赛时喷出毒气，波及身边跑者，可以连锁', 0, 0, '数值见全局'),
 ('cheap', '道具', 'R', 0, 'MOOAR 折扣', '放置和升级费用 −20%', 0.8, 0, 'v1 = 费用倍率'),
 ('maniac', '道具', 'R', 0, '连续打卡', '燃脂模式所需连续劝退 50 → 30', 30, 0, 'v1 = 所需连续劝退'),
 ('devil', '交易', 'R', 0, 'GST 借贷', '立即生效：+250 GST；之后对手体力 +15%', 250, 1.15, 'v1 = GST，v2 = 对手体力倍率'),
 ('glass', '交易', 'R', 0, '透支生命', '立即生效：所有装置效果 +40%；生命 −10', 0.4, 10, 'v1 = 效果加成，v2 = 扣除生命'),
 ('track', '交易', 'R', 0, '牛市狂奔', '立即生效：对手移速 +15%；劝退获得 GST +50%', 1.15, 1.5, 'v1 = 对手速度倍率，v2 = GST 倍率'),
 ('twin', '道具', 'L', 0, '双倍铸造', '所有装置每次出手有 20% 概率立刻再来一次', 0, 0, '概率见全局 twinChance'),
 ('chain', '道具', 'L', 0, 'Gas Hero 连环毒气', '毒气范围 +50%、效果翻倍', 0, 0, '需先有 Gas Hero 毒气'),
 ('overclock', '道具', 'L', 0, '马拉松模式', '燃脂模式持续 10 秒，出手速度 ×2', 0, 0, '数值见全局'),
]
exec(open('maps.py').read())
SPEED = {'classic': 1, 'twin': .85, 'fork': .85, 'merge': .95, 'cross': .8, 'trident': .8}


# ---------- art slots: key, 类别, 说明, 优先级, w, h, ax, ay, frames, fps, cover ----------
ART = []
_MAPN = {'classic':'蛇形跑道','twin':'双子跑道','fork':'分岔路口','merge':'汇流跑道','cross':'十字路口','trident':'三路汇聚'}
for mid, nm in _MAPN.items():
    ART.append((f'map.{mid}', '地图', f'{nm}整张底图（草地、装饰；cover=1 时连跑道一起画，游戏就不再画跑道）', 'P1 样板关' if mid == 'classic' else 'P2', 360, 600, 0, 0, 1, 0, 0))
_TOWN = {'dart':'易拉罐投手','bomb':'香蕉皮投手','frost':'洒水器','sniper':'鞋盒无人机','tesla':'广场舞音响','lure':'休闲诱惑站','miner':'矿机'}
for tid, nm in _TOWN.items():
    ART.append((f'tower.{tid}', '装置', f'{nm}：基础造型，面朝右（朝左时游戏自动翻转）。可做动画：idle 待机 + fire 发射（JSON 标出 release 出手帧和 muzzle 出手点）', 'P1 样板关' if tid in ('dart', 'bomb') else 'P2', 46 if tid == 'dart' else 40, 50, .5, .92, 1, 0, 0))
for tid, nm in _TOWN.items():
    if tid == 'miner': continue
    for i, PL in enumerate('ABC', 1):
        pn = next(p[2][0] for p in PATHS6 if p[0] == tid and p[1] == i)
        for lv in (3, 6):
            ART.append((f'tower.{tid}.{PL}{lv}', '装置变种', f'{nm}「{pn}」主路线 {lv} 级起的造型（{PL}{lv}；没有 {PL}4、{PL}5 时沿用 {PL}3）', 'P2' if lv == 3 else 'P3', 44 if lv == 3 else 48, 54 if lv == 3 else 58, .5, .92, 1, 0, 0))
ART_SRC = {'tower.dart': ('art/tower.dart.png', 'art/tower.dart.json'), 'shot.dart': ('art/shot.dart.png', 'art/shot.dart.json')}
ART += [
 ('pad.empty', '空位', '可放置装置的空位（石台 + 加号）', 'P2', 36, 22, .5, 1, 1, 0, 0),
 ('pad.base', '空位', '装置脚下的底座', 'P2', 36, 22, .5, 1, 1, 0, 0),
 ('runner.norm', '跑者', '慢跑者，侧面向右跑；横向序列帧', 'P1 样板关', 30, 36, .5, 1, 6, 10, 0),
 ('runner.arm', '跑者', '耐力跑者（更壮、带护具）', 'P1 样板关', 34, 42, .5, 1, 6, 10, 0),
 ('runner.mini', '跑者', '跑团分裂出的小跑者', 'P2', 22, 26, .5, 1, 6, 12, 0),
 ('runner.gold', '跑者', 'Aurum 召唤的金甲跑者', 'P2', 32, 38, .5, 1, 6, 10, 0),
]
_BOSSN = {'yawn':'Nox（黑猫，九命）','gilg':'Aurum','king':'Slimo','lucas':'Rocco','shiti':'Chuckles','jerry':'Datto','pizza':'Pizza Rider（披萨外卖员）','overflow':'Overflow（溢出怪）'}
for bid, nm in _BOSSN.items():
    ART.append((f'boss.{bid}', 'Boss', f'{nm}，侧面向右跑；真人原型需本人同意', 'P1 样板关' if bid == 'yawn' else 'P2', 64 if bid != 'yawn' else 72, 80 if bid != 'yawn' else 56, .5, 1, 6, 8, 0))
ART += [
 ('shot.dart', '子弹', '易拉罐：fly 飞行循环（画朝右，游戏沿弹道旋转）+ hit 命中', 'P2', 13, 13, .5, .5, 1, 0, 0),
 ('shot.bomb', '子弹', '飞行中的香蕉皮：fly + hit（落地）', 'P2', 14, 12, .5, .5, 1, 0, 0),
 ('shot.sniper', '子弹', '无人机空投的鞋盒：fly（下落）+ hit（砸地）', 'P2', 16, 12, .5, 1, 1, 0, 0),
 ('fx.peel', '地面效果', '落在跑道上的香蕉皮', 'P2', 18, 18, .5, .5, 1, 0, 0),
 ('icon.wave', '界面图标', '顶栏「波次」图标', 'P2', 38, 38, .5, .5, 1, 0, 0),
 ('icon.lives', '界面图标', '顶栏「生命」图标（心形）', 'P2', 38, 38, .5, .5, 1, 0, 0),
 ('icon.gst', '界面图标', '顶栏「GST」图标', 'P2', 38, 38, .5, .5, 1, 0, 0),
 ('icon.score', '界面图标', '顶栏「分数」图标', 'P2', 38, 38, .5, .5, 1, 0, 0),
]

entity_zh = set()
cfg = {'global': {k: v for k, v, _ in G}, 'globalDesc': {k: d for k, _, d in G},
       'towers': [], 'paths': [], 'enemies': [], 'waves': waves(), 'bosses': [], 'bossParams': BOSS_PARAMS,
       'affixes': [], 'cards': [], 'maps': [], 'texts': [],
       'art': [{'key': k, 'kind': kd, 'desc': d, 'prio': pr, 'src': ART_SRC.get(k, ('', ''))[0], 'json': ART_SRC.get(k, ('', ''))[1], 'w': w, 'h': h, 'ax': ax, 'ay': ay, 'frames': fr, 'fps': fps, 'cover': cv} for (k, kd, d, pr, w, h, ax, ay, fr, fps, cv) in ART]}
for (i, n, sh, d, cost, dmg, rate, rng, rad, slow, chain, armor, col, extra) in TOWERS:
    cfg['towers'].append({'id': i, 'name': L(n), 'short': L(sh), 'desc': L(d), 'cost': cost, 'dmg': dmg, 'rate': rate, 'range': rng, 'rad': rad, 'slow': slow,
                          'slowDur': 1.5 if i == 'frost' else 0, 'chain': chain, 'decay': .85 if i == 'tesla' else 1, 'armor': armor, 'bossMul': .6 if i == 'dart' else 1, 'color': col, 'extra': extra})
    entity_zh |= {n, sh, d}
for (t, p, pn, tiers) in PATHS:
    cfg['paths'].append({'tower': t, 'path': p, 'name': L(pn), 'tiers': [{'tier': k + 1, 'name': L(a), 'cost': c, 'desc': L(d), 'effect': e} for k, (a, c, d, e) in enumerate(tiers)]})
    entity_zh.add(pn); entity_zh |= {a for a, *_ in tiers} | {d for _, _, d, _ in tiers}
for (i, n, r, spd, gold, val, leak) in ENEMIES:
    cfg['enemies'].append({'id': i, 'name': L(n), 'radius': r, 'speed': spd, 'gold': gold, 'value': val, 'leak': leak}); entity_zh.add(n)
for (i, n, title, ab, *ps) in BOSSES:
    cfg['bosses'].append({'id': i, 'enabled': 1, 'name': n, 'title': L(title), 'ability': L(ab), 'p': ps}); entity_zh |= {title, ab}
for (i, n, d) in AFFIXES:
    cfg['affixes'].append({'id': i, 'name': L(n), 'desc': L(d)}); entity_zh |= {n, d}
for (i, tag, rar, stack, n, d, v1, v2, note) in CARDS:
    cfg['cards'].append({'id': i, 'enabled': 1, 'tag': tag, 'rar': rar, 'stack': stack, 'name': L(n) if n else None, 'desc': L(d) if d else None, 'v1': v1, 'v2': v2, 'note': note})
    if n: entity_zh |= {n, d}
for m in MAPS:
    cfg['maps'].append({'id': m['id'], 'enabled': 1, 'name': L(m['name']), 'desc': L(m['desc']), 'spdMult': SPEED[m['id']], 'hpMult': 1, 'routes': m['routes'], 'pads': m['pads']}); entity_zh |= {m['name'], m['desc']}
cfg['shots'] = [{'key': k, 'desc': d, 'traj': tj, 'speed': sp, 'arc': h, 'spin': spin, 'track': tk} for (k, d, tj, sp, h, spin, tk) in SHOTS]
_SRC = '\n'.join(l for l in open('script.js').read().split('\n') if not l.startswith('const I18N') and not l.startswith('const DEFAULT_CFG')) + open('head.html').read()
for zh, (en, fr) in T.items():
    if zh in entity_zh: continue
    if zh not in _SRC: continue
    cfg['texts'].append({'key': zh, 'zh': zh, 'en': en, 'fr': fr})
json.dump(cfg, open('cfg_default.json', 'w'), ensure_ascii=False, indent=1)
print(len(cfg['texts']), 'ui texts;', sum(len(p['tiers']) for p in cfg['paths']), 'tiers')
