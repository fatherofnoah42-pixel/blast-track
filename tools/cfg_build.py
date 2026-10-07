# Builds the default game config (single source of truth for the game and the spreadsheet).
import json, re
exec(open('trans.py').read())          # T: zh -> (en, fr)
def L(zh):
    en, fr = T.get(zh, (zh, zh))
    return {'zh': zh, 'en': en, 'fr': fr}

G = [  # key, value, description
 ('waves', 15, '总波数（须与「波次」表行数一致）'),
 ('eliteAffixes', 2, '精英波词缀数量'),
 ('startGold', 200, '开局 GST'),
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
 ('spawnArmorMult', 1.3, '耐力跑者出场后间隔倍率'),
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
 ('padTrackGap', 34, '额外放置点：离跑道中心线的最小距离'),
 ('padGap', 32, '额外放置点：离其他空位的最小距离'),
 ('scoreKill', 600, '分数：劝退率权重'),
 ('scoreLives', 300, '分数：剩余生命权重'),
 ('scoreClean', 100, '分数：无漏怪波数权重'),
]

TOWERS = [
 # id, name, short, desc, cost, dmg, rate, range, rad, slow, chain, armor, color
 ('dart', '易拉罐投手', '易拉罐', '单体速投易拉罐；对耐力跑者只有 25% 效果，「铁罐」2 级后破甲', 100, 1, .5, 95, 0, 0, 0, .25, '#ff6b6b'),
 ('bomb', '香蕉皮投手', '香蕉皮', '扔香蕉皮，一片跑者一起滑倒；耐力跑者的克星', 160, 3, 1.3, 82, 40, 0, 0, 1, '#ffd84a'),
 ('frost', '洒水器', '洒水器', '洒水让跑道湿滑，范围减速', 120, .5, 1.1, 72, 0, .35, 0, .5, '#6fc3ff'),
 ('sniper', '鞋盒无人机', '无人机', '全图空投鞋盒，专砸体力最多的跑者，无视耐力', 180, 6, 1.7, 999, 0, 0, 0, 1, '#ff9d7a'),
 ('tesla', '广场舞音响', '音响', '洗脑神曲在跑者之间传播，一次影响好几个', 150, 2, .9, 88, 0, 0, 3, .5, '#ff8fd0'),
 ('gem', '宝石发射器', '宝石', '发射宝石：红宝石主攻暴击，黄宝石主攻连发和 GST，蓝宝石减速冻结', 140, 1.5, .7, 100, 0, 0, 0, .6, '#00a6f4'),
]
# tower, path, path name, [(tier name, cost, desc, effect)]
PATHS = [
 ('gem', 1, '红宝石', [('打磨红宝石', 80, '效果 +1', 'dmg+=1'), ('鸽血红', 150, '暴击率 +20%', 'crit+=0.2'), ('红宝石切面', 320, '暴击 ×3，对耐力跑者全额生效', 'critMul=3; armor=1'), ('炽红核心', 750, '效果 ×2，对 Boss 再 ×1.5', 'dmg*=2; bossMul*=1.5'), ('红宝石之心', 1700, '效果 +12，暴击率再 +20%', 'dmg+=12; crit+=0.2')]),
 ('gem', 2, '黄宝石', [('黄晶碎片', 70, '出手间隔 −15%', 'rate*=0.85'), ('双生黄晶', 130, '每次多打 1 名跑者', 'multi+=1'), ('黄晶矿脉', 300, '每波结束额外 +40 GST', 'gpw+=40'), ('黄晶棱镜', 700, '再多打 2 名跑者，出手间隔 −25%', 'multi+=2; rate*=0.75'), ('GST 金矿', 1600, '每波结束再 +120 GST，出手间隔减半', 'gpw+=120; rate*=0.5')]),
 ('gem', 3, '蓝宝石', [('冰蓝切片', 60, '命中减速 25%，持续 1.5 秒', 'slow=0.25; slowDur=1.5'), ('深海蓝', 120, '射程 +25', 'range+=25'), ('蓝宝石冰封', 300, '命中时冻住非 Boss 跑者 0.6 秒', 'freeze=0.6'), ('寒光', 680, '被减速的跑者受到所有效果 +30%', 'vulnSlow=0.3'), ('星海蓝钻', 1500, '减速 50%，冻结 1.2 秒，Boss 也吃满减速', 'slow=0.5; freeze=1.2; bossSlowFull=1')]),
 ('dart', 1, '铁罐', [('加料汽水罐', 70, '效果 +1', 'dmg+=1'), ('铁皮罐', 120, '对耐力跑者：25% → 60%', 'armor>=0.6'), ('实心铁罐', 260, '效果 +2，对耐力跑者全额生效', 'dmg+=2; armor=1'), ('罐头炮', 600, '效果 ×2，对 Boss 不再打折', 'dmg*=2; bossMul=1'), ('大桶可乐', 1400, '效果 +8；命中有 10% 概率直接绊倒退赛（非 Boss）', 'dmg+=8; execChance=0.1')]),
 ('dart', 2, '连投', [('快手', 60, '出手间隔 −15%', 'rate*=0.85'), ('双手投', 110, '出手间隔 −20%', 'rate*=0.8'), ('三连投', 280, '每次多砸 2 名跑者', 'multi+=2'), ('自动投罐机', 650, '出手间隔减半', 'rate*=0.5'), ('罐头暴雨', 1500, '再多砸 4 名跑者，间隔再 −30%', 'multi+=4; rate*=0.7')]),
 ('dart', 3, '瞄准', [('远投', 50, '射程 +25', 'range+=25'), ('精准', 100, '暴击率 +15%', 'crit+=0.15'), ('汽水黏鞋', 300, '被砸中的跑者鞋底发黏，2 秒内受到所有效果 +20%', 'mark=2'), ('远程狙罐', 700, '射程 +60，暴击 ×3', 'range+=60; critMul=3'), ('补给站站长', 1300, '120 范围内其他装置出手间隔 −20%', 'auraRate=0.8; auraR=120')]),
 ('bomb', 1, '大香蕉', [('大片香蕉皮', 90, '滑倒范围 +10', 'rad+=10'), ('熟透香蕉', 150, '效果 +3', 'dmg+=3'), ('四脚朝天', 330, '滑倒的跑者眩晕 0.6 秒', 'stun=0.6'), ('香蕉船', 750, '对 Boss 效果 ×3', 'bossMul*=3'), ('香蕉海啸', 1700, '效果 +20，范围 +25', 'dmg+=20; rad+=25')]),
 ('bomb', 2, '一串香蕉', [('双发香蕉', 100, '一次扔 2 片，砸 2 个点', 'bombs=2'), ('香蕉碎片', 160, '落地后溅出 4 块碎皮，各 30% 效果', 'shrapnel=4'), ('一串香蕉', 350, '落地后再弹出 3 根小香蕉', 'cluster=1'), ('香蕉连环', 800, '小香蕉还会再散开一次', 'cluster=2'), ('香蕉雨', 1800, '出手间隔 −60%', 'rate*=0.4')]),
 ('bomb', 3, '辣椒油', [('辣椒粉', 80, '沾到的跑者辣到跳脚 2 秒', 'burnDur=2; burnPct=0.25'), ('魔鬼椒', 140, '持续 3 秒，持续效果 +40%', 'burnDur=3; burnPct=0.35'), ('辣油泼地', 320, '落点留下 2 秒辣油', 'firePatch=2'), ('变态辣', 700, '持续效果 ×2.5', 'burnPct*=2.5'), ('火锅底料', 1600, '辣到退赛的跑者会把辣油溅到身边', 'inferno=1')]),
 ('frost', 1, '冰水', [('凉水', 60, '减速 +10%', 'slow+=0.1'), ('持续喷淋', 110, '湿滑持续 +1 秒', 'slowDur+=1'), ('冰水', 300, '冻住非 Boss 跑者 0.8 秒', 'freeze=0.8'), ('冰桶挑战', 750, '冻住 1.5 秒，Boss 也吃满减速', 'freeze=1.5; bossSlowFull=1'), ('人工降雪', 1600, '每 8 秒冻住全场非 Boss 跑者 2 秒', 'iceAge=8')]),
 ('frost', 2, '高压水枪', [('加压', 70, '效果 +1', 'dmg+=1'), ('湿身', 130, '被淋湿的跑者受到所有效果 +25%', 'vulnSlow=0.25'), ('高压水柱', 320, '效果 ×3', 'dmg*=3'), ('冰面', 680, '被冻住的跑者受到所有效果 +60%', 'vulnFreeze=0.6'), ('消防水炮', 1500, '效果 +10，射程 +40', 'dmg+=10; range+=40')]),
 ('frost', 3, '补水站', [('喷头扩展', 60, '射程 +20', 'range+=20'), ('快速喷淋', 110, '出手间隔 −20%', 'rate*=0.8'), ('泡水鞋', 260, '耐力跑者的鞋泡水，3 秒内失去耐力加成', 'strip=3'), ('补水光环', 600, '射程内其他装置效果 +20%', 'auraDmg=1.2'), ('能量饮料站', 1300, '射程内其他装置出手间隔 −25%', 'auraRate=0.75')]),
 ('sniper', 1, '重型鞋盒', [('加重鞋盒', 100, '效果 +4', 'dmg+=4'), ('大号鞋盒', 180, '效果 +6', 'dmg+=6'), ('退赛通知', 400, '体力低于 25% 的非 Boss 跑者直接退赛', 'exec25=1'), ('创世鞋盒', 900, '效果 ×2，对 Boss 再 ×1.5', 'dmg*=2; bossMul*=1.5'), ('神秘箱轰炸', 2000, '每第 4 次：砸 Boss 额外扣其 15% 体力，砸其他跑者 ×3', 'decap=1')]),
 ('sniper', 2, '快递', [('夜航', 80, '暴击率 +20%', 'crit+=0.2'), ('快速装填', 140, '出手间隔 −20%', 'rate*=0.8'), ('双桨无人机', 380, '出手间隔减半', 'rate*=0.5'), ('无人机群', 850, '出手间隔 −40%', 'rate*=0.6'), ('当日达', 1900, '效果 +10，出手间隔再 −30%', 'dmg+=10; rate*=0.7')]),
 ('sniper', 3, '空投支援', [('震地', 90, '鞋盒落地震晕 0.4 秒', 'stun=0.4'), ('弹跳鞋盒', 150, '鞋盒弹跳再砸 2 名跑者，50% 效果', 'ricochet=2'), ('GST 补给', 360, '每波结束 +40 GST', 'gpw=40'), ('GST 空投', 700, '每波结束 +100 GST', 'gpw=100'), ('空中支援', 1500, '全场所有装置效果 +15%', 'globalDmg=0.15')]),
 ('tesla', 1, '传唱', [('小音箱', 80, '多传 1 人', 'chain+=1'), ('蓝牙串联', 140, '多传 2 人', 'chain+=2'), ('无损音质', 320, '多传 3 人，传播不衰减', 'chain+=3; decay=1'), ('双声道', 750, '同时放两首', 'starts=2'), ('全城广场舞', 1700, '多传 10 人，效果 +6', 'chain+=10; dmg+=6')]),
 ('tesla', 2, '重低音', [('低音炮', 90, '效果 +1.5', 'dmg+=1.5'), ('大功率', 150, '效果 +2', 'dmg+=2'), ('重低音', 380, '每第 4 首效果 ×3', 'overN=4; overMul=3'), ('炸街', 800, '效果 ×2', 'dmg*=2'), ('地动山摇', 1800, '重低音效果 ×8', 'overN=4; overMul=8')]),
 ('tesla', 3, '洗脑神曲', [('扩音', 70, '射程 +20', 'range+=20'), ('跟着跳', 130, '听到的跑者停下来跳 0.25 秒', 'stun=0.25'), ('震碎能量盾', 330, '对能量盾效果 ×3', 'shieldMul=3'), ('魔性旋律', 700, '射程内跑者每秒持续受 3 点效果', 'staticDps=3'), ('广场舞女王', 1600, '出手间隔 −30%，多传 3 人', 'rate*=0.7; chain+=3')]),
]
ENEMIES = [  # id, name, radius, speed, gold, scoreValue, energyCost
 ('norm', '慢跑者', 9, 55, 6, 1, 1),
 ('arm', '耐力跑者', 11, 42, 12, 2, 2),
 ('boss', '传奇跑者', 22, 26, 80, 15, 10),
]
def waves():
    rows = []
    for w in range(1, 16):
        n = round((6 + w * 1.3) * 1.35) * 3; a = (int((w - 1) * 1.1) if w >= 3 else 0) * 3
        boss = w % 5 == 0
        rows.append({'wave': w, 'normals': n, 'armored': a, 'normHp': round(3 + w * 1.1, 2), 'armHp': round(7 + w * 2.4, 2),
                     'boss': 1 if boss else 0, 'bossHp': {5: 80, 10: 220, 15: 480}.get(w, 0), 'affixes': 0 if w < 4 else (2 if boss and w >= 10 else 1)})
    return rows
BOSSES = [  # id, name, title, ability, p1, p2, p3, p4  (meaning described in sheet)
 ('yawn', 'Nox', '黑猫', '九命：第一次退赛会原地复活（40% 体力）', 0.4, 1, 0, 0),
 ('gilg', 'Aurum', '金王', '王之宝库：每 4 秒召唤 2 名金甲跑者', 4, 2, 8, 0.8),
 ('king', 'Slimo', '黏液国王', '黏液王冠：身后留下黏液，踩到的跑者加速 30% 并回体力', 0.3, 1.3, 0.04, 5),
 ('lucas', 'Rocco', '光头', '铁头冲刺：每 5 秒冲刺 1 秒，3 倍速', 5, 1, 3, 0),
 ('shiti', 'Chuckles', '笑声', '开怀大笑：每 6 秒大笑一次，身边的装置停工 1.5 秒', 6, 130, 1.5, 0),
 ('jerry', 'Datto', '数据控', '数据分析：每 3 秒对受到最多的装置类型产生 65% 抗性', 3, 0.65, 0, 0),
]
BOSS_PARAMS = {
 'yawn': ['复活体力比例', '复活后无敌秒数', '', ''],
 'gilg': ['召唤间隔（秒）', '每次召唤人数', '最多召唤人数', '金甲跑者体力倍率'],
 'king': ['黏液间隔（秒）', '黏液上速度倍率', '黏液上每秒回复比例', '黏液持续（秒）'],
 'lucas': ['冲刺间隔（秒）', '冲刺时长（秒）', '冲刺速度倍率', ''],
 'shiti': ['大笑间隔（秒）', '影响半径', '装置停工（秒）', ''],
 'jerry': ['统计间隔（秒）', '抗性比例', '', ''],
}
AFFIXES = [('swift', '冲刺', '移速 +40%'), ('regen', '补给', '1 秒没被干扰就回体力'), ('shield', '能量盾', '额外 35% 能量护盾'), ('split', '跑团', '退赛时 2 名跟跑者接力')]
CARDS = [  # id, tag, rarity, stack, name, desc, v1, v2, note
 ('u_bomb', '装置', 'C', 0, '香蕉皮投手', '解锁香蕉皮投手：一片跑者一起滑倒，专克耐力跑者', 0, 0, ''),
 ('u_frost', '装置', 'C', 0, '洒水器', '解锁洒水器：跑道湿滑，范围减速', 0, 0, ''),
 ('u_sniper', '装置', 'R', 0, '鞋盒无人机', '解锁鞋盒无人机：全图空投鞋盒，无视耐力', 0, 0, ''),
 ('u_tesla', '装置', 'R', 0, '广场舞音响', '解锁广场舞音响：洗脑神曲在跑者之间传播', 0, 0, ''),
 ('u_gem', '装置', 'R', 0, '宝石发射器', '解锁宝石发射器：红、黄、蓝三种宝石对应三条路线', 0, 0, ''),
 ('pad', '道具', 'R', 1, '额外放置点', '获得 1 个放置点：点地图上跑道以外的空地，新增一个装置空位', 1, 0, 'v1 = 放置点个数'),
 ('freeup', '道具', 'C', 1, '鞋匠', '场上一个装置沿主路线免费升 1 级（没有装置时改为 +100 GST）', 0, 0, ''),
 ('coupon', '道具', 'C', 1, '升级卷轴', '接下来 3 次路线升级半价', 3, 0, 'v1 = 半价次数'),
 ('m_dart', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('m_bomb', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('m_frost', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('m_sniper', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('m_tesla', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('m_gem', '徽章', 'R', 0, '', '', 0, 0, '名称和说明自动生成'),
 ('breaker', '道具', 'L', 0, '创世鞋', '所有装置的次路线上限 2 级 → 3 级', 0, 0, '上限见全局 secCapBreaker'),
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
_TOWN = {'dart':'易拉罐投手','bomb':'香蕉皮投手','frost':'洒水器','sniper':'鞋盒无人机','tesla':'广场舞音响','gem':'宝石发射器'}
for tid, nm in _TOWN.items():
    ART.append((f'tower.{tid}', '装置', f'{nm}：操作员 + 道具，面朝右（朝左时游戏自动翻转），脚底对齐空位中心', 'P1 样板关' if tid in ('dart', 'bomb') else 'P2', 40, 50, .5, .92, 1, 0, 0))
for tid, nm in _TOWN.items():
    for i in (1, 2, 3):
        ART.append((f'tower.{tid}.p{i}', '装置进化', f'{nm} 第 {i} 条路线升到 3 级以上作为主路线时的外观', 'P3', 44, 54, .5, .92, 1, 0, 0))
ART += [
 ('pad.empty', '空位', '可放置装置的空位（石台 + 加号）', 'P2', 36, 22, .5, 1, 1, 0, 0),
 ('pad.base', '空位', '装置脚下的底座', 'P2', 36, 22, .5, 1, 1, 0, 0),
 ('runner.norm', '跑者', '慢跑者，侧面向右跑；横向序列帧', 'P1 样板关', 30, 36, .5, 1, 6, 10, 0),
 ('runner.arm', '跑者', '耐力跑者（更壮、带护具）', 'P1 样板关', 34, 42, .5, 1, 6, 10, 0),
 ('runner.mini', '跑者', '跑团分裂出的小跑者', 'P2', 22, 26, .5, 1, 6, 12, 0),
 ('runner.gold', '跑者', 'Aurum 召唤的金甲跑者', 'P2', 32, 38, .5, 1, 6, 10, 0),
]
_BOSSN = {'yawn':'Nox（黑猫，九命）','gilg':'Aurum','king':'Slimo','lucas':'Rocco','shiti':'Chuckles','jerry':'Datto'}
for bid, nm in _BOSSN.items():
    ART.append((f'boss.{bid}', 'Boss', f'{nm}，侧面向右跑；真人原型需本人同意', 'P1 样板关' if bid == 'yawn' else 'P2', 64 if bid != 'yawn' else 72, 80 if bid != 'yawn' else 56, .5, 1, 6, 8, 0))
ART += [
 ('proj.dart', '投射物', '飞行中的易拉罐（游戏会旋转它）', 'P2', 10, 12, .5, .5, 1, 0, 0),
 ('proj.bomb', '投射物', '飞行中的香蕉皮', 'P2', 14, 12, .5, .5, 1, 0, 0),
 ('proj.drop', '投射物', '无人机空投的鞋盒', 'P2', 16, 12, .5, 1, 1, 0, 0),
 ('proj.gem.ruby', '投射物', '红宝石弹', 'P2', 12, 12, .5, .5, 1, 0, 0),
 ('proj.gem.topaz', '投射物', '黄宝石弹', 'P2', 12, 12, .5, .5, 1, 0, 0),
 ('proj.gem.sapphire', '投射物', '蓝宝石弹', 'P2', 12, 12, .5, .5, 1, 0, 0),
 ('proj.dropGold', '投射物', '金色神秘鞋盒（暴击空投）', 'P3', 16, 12, .5, 1, 1, 0, 0),
 ('fx.peel', '地面效果', '落在跑道上的香蕉皮', 'P2', 18, 18, .5, .5, 1, 0, 0),
 ('fx.chili', '地面效果', '辣椒油香蕉皮', 'P3', 18, 18, .5, .5, 1, 0, 0),
 ('icon.wave', '界面图标', '顶栏「波次」图标', 'P2', 38, 38, .5, .5, 1, 0, 0),
 ('icon.lives', '界面图标', '顶栏「生命」图标（心形）', 'P2', 38, 38, .5, .5, 1, 0, 0),
 ('icon.gst', '界面图标', '顶栏「GST」图标', 'P2', 38, 38, .5, .5, 1, 0, 0),
 ('icon.score', '界面图标', '顶栏「分数」图标', 'P2', 38, 38, .5, .5, 1, 0, 0),
]

entity_zh = set()
cfg = {'global': {k: v for k, v, _ in G}, 'globalDesc': {k: d for k, _, d in G},
       'towers': [], 'paths': [], 'enemies': [], 'waves': waves(), 'bosses': [], 'bossParams': BOSS_PARAMS,
       'affixes': [], 'cards': [], 'maps': [], 'texts': [],
       'art': [{'key': k, 'kind': kd, 'desc': d, 'prio': pr, 'src': '', 'w': w, 'h': h, 'ax': ax, 'ay': ay, 'frames': fr, 'fps': fps, 'cover': cv} for (k, kd, d, pr, w, h, ax, ay, fr, fps, cv) in ART]}
for (i, n, sh, d, cost, dmg, rate, rng, rad, slow, chain, armor, col) in TOWERS:
    cfg['towers'].append({'id': i, 'name': L(n), 'short': L(sh), 'desc': L(d), 'cost': cost, 'dmg': dmg, 'rate': rate, 'range': rng, 'rad': rad, 'slow': slow,
                          'slowDur': 1.5 if i == 'frost' else 0, 'chain': chain, 'decay': .85 if i == 'tesla' else 1, 'armor': armor, 'bossMul': .6 if i == 'dart' else 1, 'color': col})
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
for zh, (en, fr) in T.items():
    if zh in entity_zh: continue
    cfg['texts'].append({'key': zh, 'zh': zh, 'en': en, 'fr': fr})
json.dump(cfg, open('cfg_default.json', 'w'), ensure_ascii=False, indent=1)
print(len(cfg['texts']), 'ui texts;', sum(len(p['tiers']) for p in cfg['paths']), 'tiers')
