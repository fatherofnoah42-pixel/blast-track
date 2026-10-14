# Six device families (v18). Each tier: (zh name, en name, fr name, cost, zh desc, en desc, fr desc, effect).
# Rule: two paths at most; both can reach tier 2; the first path to tier 3 becomes the main path (others capped at 2);
# main goes to 5; tier 6 wipes the secondary path, and what was spent on it is credited against the tier-6 price.

DEVICES = [
 # id, (zh, en, fr) name, (zh, en, fr) short, (zh, en, fr) desc, cost, dmg, rate, range, rad, slow, chain, armor, color, extra
 ('dart', ('易拉罐投手', 'Can Thrower', 'Lanceur de canettes'), ('易拉罐', 'Can', 'Canette'),
  ('单体投掷易拉罐，三条路线都只打一个目标；对耐力跑者只有 25% 效果', 'Throws cans at one runner at a time on every path; only 25% vs endurance runners', 'Lance des canettes sur un seul coureur, quelle que soit la voie ; 25 % seulement contre les endurants'),
  100, 1, .5, 95, 0, 0, 0, .25, '#ff6b6b', 'shots=1'),
 ('bomb', ('香蕉皮投手', 'Banana Peeler', 'Lance-peaux'), ('香蕉皮', 'Banana', 'Banane'),
  ('往跑道上扔香蕉皮陷阱，踩到的几个人一起滑倒；触发一次就失效', 'Tosses banana-peel traps onto the track; the runners who step on one slip together, then the peel is spent', 'Lance des pièges en peau de banane sur la piste ; ceux qui marchent dessus glissent ensemble, puis la peau disparaît'),
  160, 3, 1.2, 90, 20, 0, 0, 1, '#ffd84a', 'hitCap=4; slip=0.6; peelMax=4; peelLife=8; bombs=1; spread=14'),
 ('frost', ('洒水器', 'Sprinkler', 'Arroseur'), ('洒水器', 'Sprinkler', 'Arroseur'),
  ('持续喷水：范围内的跑者被淋湿、减速', 'Keeps spraying: runners in range get wet and slowed', 'Arrose en continu : les coureurs à portée sont mouillés et ralentis'),
  120, .5, 1.1, 72, 0, .3, 0, .5, '#6fc3ff', 'frostNeed=4; freezeCap=99'),
 ('sniper', ('鞋盒无人机', 'Shoebox Drone', 'Drone à boîtes'), ('无人机', 'Drone', 'Drone'),
  ('全图支援：点它再点地图，指定投递区；飞过去、投箱、返航都要时间', 'Map-wide support: tap it, then tap the map to set a drop zone; flying out, dropping and returning take time', 'Soutien sur toute la carte : touche-le puis la carte pour choisir une zone de largage ; aller, larguer et revenir prend du temps'),
  180, 6, 2.4, 999, 16, 0, 0, 1, '#ff9d7a', 'aimR=46; load=1'),
 ('tesla', ('广场舞音响', 'Dance Speaker', 'Enceinte de danse'), ('音响', 'Speaker', 'Enceinte'),
  ('洗脑神曲人传人：每次传给好几个跑者，让他们发懵；同一个人每次只中一次', 'An earworm passed from runner to runner: each song hits several and leaves them dizzy, once per runner per song', 'Un ver d’oreille transmis de coureur en coureur : chaque morceau en touche plusieurs et les étourdit, une fois par coureur'),
  150, 2, .9, 88, 0, 0, 3, .5, '#ff8fd0', 'hop=70; dizzyDur=1.6'),
 ('lure', ('休闲诱惑站', 'Chill Spot', 'Coin détente'), ('诱惑站', 'Chill', 'Détente'),
  ('用美食、沙发和限量球鞋让跑者停下来；每人每站只上当一次，对耐力跑者、巨鲸和 Boss 无效', 'Food, sofas and limited sneakers make runners stop; each runner falls for each spot once; no effect on endurance runners, whales or bosses', 'Bouffe, canapés et baskets limitées arrêtent les coureurs ; chacun ne s’y fait prendre qu’une fois par coin ; sans effet sur endurants, baleines et boss'),
  130, 0, 2, 75, 0, 0, 0, 1, '#ff9a3c', 'cap=3; stay=1.5'),
]

def T6(*rows): return list(rows)

PATHS6 = [
 ('dart', 1, ('重罐点名', 'Heavy Can', 'Canette lourde'), T6(
  ('加料汽水罐', 'Fizz Boost', 'Soda boosté', 60, '效果 +1', 'Effect +1', 'Effet +1', 'dmg+=1'),
  ('铁皮罐', 'Tin Can', 'Canette en fer', 110, '对重型目标（耐力跑者、巨鲸、Boss）效果 +40%，耐力减免降到 60%', 'Heavy targets (endurance, whale, boss) +40%; endurance penalty eased to 60%', 'Cibles lourdes (endurants, baleine, boss) +40 % ; malus d’endurance réduit à 60 %', 'heavyMul+=0.4; armor>=0.6'),
  ('蓄力重罐', 'Charged Can', 'Canette chargée', 260, '效果 +3，出手稍慢', 'Effect +3, slightly slower', 'Effet +3, un peu plus lent', 'dmg+=3; rate*=1.2'),
  ('破防重罐', 'Armor Breaker', 'Brise-garde', 450, '耐力减免完全无效，对能量盾 ×2', 'Ignores endurance; ×2 vs energy shields', 'Ignore l’endurance ; ×2 contre les boucliers', 'armor=1; shieldMul=2'),
  ('点杀专家', 'Heavy Hunter', 'Chasseur de poids lourds', 1100, '优先砸重型目标，对它们效果再 +100%', 'Targets heavy runners first, +100% more vs them', 'Vise d’abord les lourds, +100 % contre eux', 'heavyFirst=1; heavyMul+=1'),
  ('巨罐裁判', 'Mega-Can Referee', 'Arbitre méga-canette', 3600, '效果 ×7，出手间隔 ×1.6', 'Effect ×7, throw interval ×1.6', 'Effet ×7, intervalle ×1,6', 'dmg*=7; rate*=1.6'))),
 ('dart', 2, ('连罐速投', 'Rapid Cans', 'Canettes rapides'), T6(
  ('快手', 'Quick Hands', 'Mains rapides', 45, '出手间隔 −25%', 'Throw interval −25%', 'Intervalle −25 %', 'rate*=0.75'),
  ('连击', 'Combo', 'Combo', 70, '连续砸同一人，每次 +15%（最多 +45%）', 'Each consecutive hit on the same runner +15% (max +45%)', 'Chaque coup consécutif sur le même coureur +15 % (max +45 %)', 'streak=0.15; streakMax=3'),
  ('连续追投', 'Chain Toss', 'Lancers enchaînés', 200, '出手间隔 −25%，连击上限 +75%', 'Interval −25%, combo cap +75%', 'Intervalle −25 %, combo max +75 %', 'rate*=0.75; streakMax=5'),
  ('转火保连击', 'Keep the Rhythm', 'Garder le rythme', 420, '换目标时保留一半连击', 'Keep half your combo when switching targets', 'Garde la moitié du combo en changeant de cible', 'keepStreak=0.5'),
  ('双臂连投', 'Two-Arm Toss', 'Lancer à deux bras', 1500, '每次投两罐', 'Throws two cans each time', 'Lance deux canettes à chaque fois', 'shots=2'),
  ('连罐风暴', 'Can Storm', 'Tempête de canettes', 3400, '效果 +3；每 6 秒爆发：4 秒内出手 ×4，之后散热 2 秒', 'Effect +3; every 6 s: 4 s at ×4 throw speed, then 2 s cooling down', 'Effet +3 ; toutes les 6 s : 4 s à cadence ×4, puis 2 s de refroidissement', 'storm=6; dmg+=3'))),
 ('dart', 3, ('弱点点名', 'Weak Spot', 'Point faible'), T6(
  ('远投', 'Long Toss', 'Lancer long', 50, '射程 +25', 'Range +25', 'Portée +25', 'range+=25'),
  ('弱点标记', 'Weak-Spot Mark', 'Marque', 100, '命中标记 2 秒：被标记的跑者受到所有效果 +10%', 'Hits mark for 2 s: marked runners take +10% from everything', 'Marque 2 s : les coureurs marqués subissent +10 % de tout', 'mark=2; markPct>=0.1'),
  ('强化标记', 'Bigger Mark', 'Marque renforcée', 280, '标记增伤提高到 +20%', 'Mark bonus raised to +20%', 'Bonus de marque porté à +20 %', 'markPct>=0.2'),
  ('持久标记', 'Lasting Mark', 'Marque durable', 550, '标记持续 5 秒，射程 +20', 'Mark lasts 5 s, range +20', 'Marque 5 s, portée +20', 'mark=5; range+=20'),
  ('集火信号', 'Focus Call', 'Appel au tir', 1200, '标记增伤 +35%，附近装置优先打被标记的跑者', 'Mark bonus +35%; nearby devices hit marked runners first', 'Bonus de marque +35 % ; les dispositifs proches visent d’abord les marqués', 'markPct>=0.35; markPull=150'),
  ('集火指挥台', 'Focus Command', 'Poste de commandement', 3000, '150 范围内的装置都打你点的目标，标记 +60%；自身效果减半', 'Devices within 150 all hit your target, mark +60%; own effect halved', 'Les dispositifs à 150 frappent ta cible, marque +60 % ; effet propre divisé par deux', 'focus=150; markPct>=0.6; dmg*=0.5'))),

 ('bomb', 1, ('大片撒皮', 'Wide Peels', 'Grandes peaux'), T6(
  ('大片香蕉皮', 'Big Peel', 'Grande peau', 70, '滑倒范围 +8', 'Slip area +8', 'Zone de glissade +8', 'rad+=8'),
  ('多人滑倒', 'Pile-Up', 'Carambolage', 100, '每片可放倒人数 +2', 'Each peel trips 2 more runners', 'Chaque peau fait tomber 2 coureurs de plus', 'hitCap+=2'),
  ('成片撒皮', 'Peel Patch', 'Tapis de peaux', 300, '一次扔 3 片', 'Throws 3 peels at once', 'Lance 3 peaux d’un coup', 'bombs=3; peelMax+=3'),
  ('扇形覆盖', 'Fan Spread', 'Éventail', 650, '散得更开，范围再 +8', 'Wider spread, area +8', 'Plus étalé, zone +8', 'spread+=20; rad+=8'),
  ('滑倒陷阱区', 'Slip Zone', 'Zone glissante', 1500, '范围 ×1.5，每片可放倒人数 +4', 'Area ×1.5, 4 more runners per peel', 'Zone ×1,5, 4 coureurs de plus par peau', 'rad*=1.5; hitCap+=4'),
  ('整道铺皮机', 'Peel Paver', 'Paveuse à peaux', 3800, '每 3.5 秒在选定路段铺满 18 片香蕉皮，效果 ×1.5', 'Every 3.5 s, paves the chosen stretch with 18 peels, effect ×1.5', 'Toutes les 3,5 s, couvre le tronçon choisi de 18 peaux, effet ×1,5', 'carpet=18; rate=3.5; peelMax+=36; dmg*=1.5'))),
 ('bomb', 2, ('滑行连撞', 'Slide & Bowl', 'Glisse et quilles'), T6(
  ('滑更远', 'Long Slide', 'Longue glissade', 70, '滑倒的跑者往回滑 20', 'Slipped runners slide back 20', 'Les coureurs glissent de 20 en arrière', 'slideBack+=20'),
  ('滑行冲击', 'Slide Impact', 'Choc de glissade', 120, '滑行时额外受 2 点效果', 'Sliding adds 2 effect', 'La glissade inflige 2 de plus', 'slideDmg+=2'),
  ('连环相撞', 'Chain Crash', 'Collision en chaîne', 320, '滑倒的人会撞倒身后 2 人', 'Sliders knock over 2 runners behind them', 'Les glisseurs renversent 2 coureurs derrière eux', 'bowl=2'),
  ('多米诺', 'Dominoes', 'Dominos', 700, '撞倒人数 +3', 'Knock over 3 more', '3 renversés de plus', 'bowl+=3'),
  ('小队连撞', 'Squad Crash', 'Collision d’équipe', 1500, '撞倒人数 +4，滑行再 +20', '4 more knocked over, slide +20', '4 de plus, glissade +20', 'bowl+=4; slideBack+=20'),
  ('滑倒保龄球', 'Peel Bowling', 'Bowling à peaux', 3600, '一路撞倒整支小队（每人每片一次），效果 ×2，冲击 ×4', 'Bowls over a whole squad (once per runner per peel), effect ×2, impact ×4', 'Renverse toute une équipe (une fois par coureur et par peau), effet ×2, choc ×4', 'bowl=20; dmg*=2; slideDmg*=4'))),
 ('bomb', 3, ('预埋皮阵', 'Peel Mines', 'Mines de peaux'), T6(
  ('耐放香蕉皮', 'Long-Life Peels', 'Peaux durables', 50, '香蕉皮保留 +6 秒', 'Peels last 6 s longer', 'Les peaux durent 6 s de plus', 'peelLife+=6'),
  ('备货', 'Stockpile', 'Réserve', 100, '场上最多香蕉皮 +3', '+3 max peels on the track', '+3 peaux max sur la piste', 'peelMax+=3'),
  ('自动补货', 'Auto Restock', 'Réassort auto', 220, '给你选定的路段补香蕉皮，没人时也会补', 'Keeps your chosen stretch stocked, even when nobody is there', 'Réapprovisionne le tronçon choisi, même sans coureur', 'autoPeel=1'),
  ('补货加速', 'Fast Restock', 'Réassort rapide', 600, '出手间隔 −30%', 'Interval −30%', 'Intervalle −30 %', 'rate*=0.7'),
  ('多组陷阱', 'Minefield', 'Champ de mines', 1300, '场上最多香蕉皮 +6，一次扔 2 片', '+6 max peels, throws 2 at a time', '+6 peaux max, en lance 2 à la fois', 'peelMax+=6; bombs=2'),
  ('香蕉皮仓库', 'Peel Warehouse', 'Entrepôt à peaux', 3200, '每波 90 片库存，可提前布阵，扔得飞快，每片多放倒 2 人；用完等下一波', '90 peels per wave to lay out in advance, thrown very fast, each trips 2 more; restocks next wave', '90 peaux par vague à poser d’avance, lancées très vite, chacune fait tomber 2 de plus ; réassort à la vague suivante', 'stock=90; rate*=0.3; peelMax+=30; hitCap+=2'))),

 ('frost', 1, ('喷淋湿地', 'Soak Zone', 'Zone détrempée'), T6(
  ('喷头加长', 'Longer Reach', 'Portée accrue', 60, '射程 +15', 'Range +15', 'Portée +15', 'range+=15'),
  ('湿地持久', 'Lasting Puddles', 'Flaques durables', 80, '湿滑持续 +1 秒', 'Wet lasts 1 s longer', 'Mouillé 1 s de plus', 'slowDur+=1'),
  ('持续喷淋', 'Steady Spray', 'Arrosage continu', 280, '喷水间隔 −40%', 'Spray interval −40%', 'Intervalle −40 %', 'rate*=0.6'),
  ('不间断', 'Nonstop', 'Non-stop', 600, '间隔再 −30%，减速 +5%', 'Interval −30% more, slow +5%', 'Intervalle encore −30 %, ralentissement +5 %', 'rate*=0.7; slow+=0.05'),
  ('双喷头', 'Twin Heads', 'Double tête', 1300, '射程 +25，减速 +10%', 'Range +25, slow +10%', 'Portée +25, ralentissement +10 %', 'range+=25; slow+=0.1'),
  ('暴雨洒水车', 'Rainstorm Truck', 'Camion orage', 3200, '射程 +50，减速 60%，效果 +1.5；不能冻结', 'Range +50, 60% slow, effect +1.5; cannot freeze', 'Portée +50, ralentissement 60 %, effet +1,5 ; ne gèle pas', 'range+=50; slow=0.6; dmg+=1.5; noFreeze=1'))),
 ('frost', 2, ('寒霜喷头', 'Frost Head', 'Tête givrante'), T6(
  ('冰水', 'Cold Water', 'Eau froide', 45, '减速 +10%', 'Slow +10%', 'Ralentissement +10 %', 'slow+=0.1'),
  ('积霜', 'Frost Build-Up', 'Givre', 80, '连续被淋，减速逐渐加深（每层 +5%，最多 4 层）', 'Repeated soaking deepens the slow (+5% per stack, max 4)', 'Les arrosages répétés ralentissent davantage (+5 % par cumul, max 4)', 'frostStack=0.05'),
  ('积霜冻结', 'Freeze Point', 'Point de gel', 300, '积满 4 层冻住 0.8 秒（非 Boss，每次最多 3 人）', 'At 4 stacks, freeze for 0.8 s (non-boss, up to 3 at a time)', 'À 4 cumuls, gel 0,8 s (hors boss, 3 à la fois)', 'freeze=0.8; freezeCap=3'),
  ('快速积霜', 'Fast Frost', 'Givre rapide', 650, '3 层就冻住', 'Freezes at 3 stacks', 'Gèle à 3 cumuls', 'frostNeed=3'),
  ('群体冻结', 'Group Freeze', 'Gel de groupe', 1400, '冻结 1.2 秒，每次最多冻 6 人', 'Freeze 1.2 s, up to 6 at a time', 'Gel 1,2 s, jusqu’à 6 à la fois', 'freeze=1.2; freezeCap=6'),
  ('极寒喷淋站', 'Deep-Freeze Station', 'Station de grand froid', 3400, '每 5 秒冻住范围内所有非 Boss 跑者 2 秒，被冻住的受到效果 +60%，喷水效果 +2；期间不再积霜冻结', 'Every 5 s freezes every non-boss in range for 2 s; frozen runners take +60%, spray effect +2; no stack freezes in between', 'Toutes les 5 s, gèle 2 s tous les non-boss à portée ; les gelés subissent +60 %, effet du jet +2 ; pas de gel par cumul entre-temps', 'iceNova=5; vulnFreeze=0.6; dmg+=2'))),
 ('frost', 3, ('高压水柱', 'Power Jet', 'Jet puissant'), T6(
  ('加压', 'Pressure Up', 'Pression', 60, '射程 +20', 'Range +20', 'Portée +20', 'range+=20'),
  ('宽喷束', 'Wide Jet', 'Jet large', 110, '效果 +0.5', 'Effect +0.5', 'Effet +0,5', 'dmg+=0.5'),
  ('击退', 'Push Back', 'Recul', 300, '把非 Boss 跑者往回冲 12', 'Pushes non-boss runners back 12', 'Repousse les non-boss de 12', 'knock=12'),
  ('穿透水柱', 'Piercing Jet', 'Jet perçant', 550, '改成直线水柱，穿过整排跑者，射程 +30，效果 +1.5', 'Becomes a straight jet that pierces the whole line, range +30, effect +1.5', 'Devient un jet droit qui traverse toute la file, portée +30, effet +1,5', 'beam=1; dmg+=1.5; range+=30'),
  ('强力冲洗', 'Power Wash', 'Lavage haute pression', 1400, '效果 ×2，击退 +10', 'Effect ×2, push +10', 'Effet ×2, recul +10', 'dmg*=2; knock+=10'),
  ('高压冲洗车', 'Jet Truck', 'Camion haute pression', 3400, '效果 ×3，击退 40；只能沿直线打，看跑道朝向', 'Effect ×3, push 40; straight line only, depends on the road', 'Effet ×3, recul 40 ; ligne droite seulement, dépend de la route', 'dmg*=3; knock=40'))),

 ('sniper', 1, ('精准重箱', 'Precision Drop', 'Largage précis'), T6(
  ('快速飞行', 'Fast Flight', 'Vol rapide', 60, '出动间隔 −15%', 'Sortie interval −15%', 'Intervalle −15 %', 'rate*=0.85'),
  ('落点修正', 'Course Correction', 'Correction de cap', 100, '鞋盒追着目标落，不会砸空', 'Boxes home in on the target and never miss', 'Les boîtes suivent la cible et ne ratent jamais', 'homing=1'),
  ('重型鞋盒', 'Heavy Box', 'Boîte lourde', 260, '效果 +8', 'Effect +8', 'Effet +8', 'dmg+=8'),
  ('动态追踪', 'Live Tracking', 'Suivi en direct', 700, '效果 +6，投递区 +20', 'Effect +6, drop zone +20', 'Effet +6, zone +20', 'dmg+=6; aimR+=20'),
  ('连续投箱', 'Double Drop', 'Double largage', 1500, '每次连投 2 箱', 'Drops 2 boxes per sortie', '2 boîtes par sortie', 'load=2'),
  ('旗舰重箱机', 'Flagship Drone', 'Drone amiral', 3800, '效果 ×8，砸地范围 +10，出动间隔 ×1.5', 'Effect ×8, impact area +10, interval ×1.5', 'Effet ×8, zone d’impact +10, intervalle ×1,5', 'dmg*=8; rad+=10; rate*=1.5'))),
 ('sniper', 2, ('批量配送', 'Bulk Delivery', 'Livraison en gros'), T6(
  ('多装一箱', 'Extra Load', 'Chargement +', 90, '每次多投 1 箱', 'One more box per sortie', 'Une boîte de plus par sortie', 'load+=1'),
  ('散布投递', 'Scatter', 'Dispersion', 150, '投递区 +25', 'Drop zone +25', 'Zone +25', 'aimR+=25'),
  ('沿路投箱', 'Route Drop', 'Largage sur route', 260, '鞋盒沿选定路段排开，再多 1 箱', 'Boxes line up along the chosen stretch, plus 1 box', 'Les boîtes s’alignent sur le tronçon choisi, +1 boîte', 'segment=1; load+=1'),
  ('多点投递', 'Multi-Drop', 'Multi-largage', 550, '每次再多投 2 箱', '2 more boxes per sortie', '2 boîtes de plus par sortie', 'load+=2'),
  ('编队配送', 'Drone Squadron', 'Escadrille', 1500, '再多投 3 箱', '3 more boxes', '3 boîtes de plus', 'load+=3'),
  ('鞋盒空投编队', 'Airdrop Armada', 'Armada de largage', 3600, '一次投 16 箱覆盖整段路，效果 +8，之后整备 3 秒', '16 boxes cover the whole stretch, effect +8, then 3 s to rearm', '16 boîtes couvrent tout le tronçon, effet +8, puis 3 s de réarmement', 'load=16; rate=3; dmg+=8'))),
 ('sniper', 3, ('应急后勤', 'Field Logistics', 'Logistique'), T6(
  ('快速返航', 'Quick Return', 'Retour rapide', 70, '出动间隔 −15%', 'Sortie interval −15%', 'Intervalle −15 %', 'rate*=0.85'),
  ('缩短整备', 'Fast Rearm', 'Réarmement rapide', 120, '出动间隔再 −15%', 'Interval −15% more', 'Intervalle encore −15 %', 'rate*=0.85'),
  ('补给箱', 'Supply Crate', 'Caisse de ravitaillement', 300, '每次出动给投递区旁 1 座地面装置补给：4 秒内出手间隔 −25%', 'Each sortie supplies 1 ground device near the drop zone: −25% interval for 4 s', 'Chaque sortie ravitaille 1 dispositif au sol près de la zone : intervalle −25 % pendant 4 s', 'supply=4; supplyN=1'),
  ('长效补给', 'Long Supply', 'Ravitaillement durable', 600, '补给持续 7 秒', 'Supply lasts 7 s', 'Ravitaillement de 7 s', 'supply=7'),
  ('多点补给', 'Wide Supply', 'Ravitaillement multiple', 1300, '一次补给 3 座装置', 'Supplies 3 devices at once', 'Ravitaille 3 dispositifs à la fois', 'supplyN=3'),
  ('紧急后勤总部', 'Logistics HQ', 'QG logistique', 3200, '不再投箱：每 8 秒让投递区 160 内的地面装置 7 秒内出手间隔 −50%、效果 +50%', 'No more boxes: every 8 s, ground devices within 160 of the drop zone get −50% interval and +50% effect for 7 s', 'Plus de boîtes : toutes les 8 s, les dispositifs au sol à 160 de la zone ont −50 % d’intervalle et +50 % d’effet pendant 7 s', 'hq=1; rate=8'))),

 ('tesla', 1, ('神曲接力', 'Song Relay', 'Relais musical'), T6(
  ('大嗓门', 'Loud Voice', 'Grosse voix', 45, '传播距离 +20', 'Hop distance +20', 'Distance de saut +20', 'hop+=20'),
  ('多传两人', 'Two More', 'Deux de plus', 80, '多传 2 人', 'Spreads to 2 more', 'Se propage à 2 de plus', 'chain+=2'),
  ('跑者接唱', 'Sing-Along', 'Chant repris', 300, '多传 3 人，传播几乎不衰减', '3 more, almost no fade', '3 de plus, presque sans perte', 'chain+=3; decay=0.95'),
  ('小队串联', 'Squad Link', 'Liaison d’équipe', 500, '传播距离再 +30，能连上相邻小队', 'Hop +30, links nearby squads', 'Saut +30, relie les équipes voisines', 'hop+=30'),
  ('长链神曲', 'Long Chain', 'Longue chaîne', 1400, '再多传 6 人', '6 more', '6 de plus', 'chain+=6'),
  ('巡回神曲', 'Touring Hit', 'Tube en tournée', 3400, '一轮最多传 30 人，不衰减，效果 ×2.5；队形分散就传不开', 'Up to 30 runners per song, no fade, effect ×2.5; spread-out runners break the chain', 'Jusqu’à 30 coureurs par morceau, sans perte, effet ×2,5 ; une file dispersée coupe la chaîne', 'chain=30; decay=1; hop+=20; dmg*=2.5'))),
 ('tesla', 2, ('重低音共振', 'Bass Resonance', 'Résonance'), T6(
  ('低音炮', 'Subwoofer', 'Caisson', 70, '效果 +1', 'Effect +1', 'Effet +1', 'dmg+=1'),
  ('共振', 'Resonance', 'Résonance', 130, '被唱到的人身边 26 内的跑者受 30% 效果', 'Runners within 26 of each target take 30%', 'Les coureurs à 26 de chaque cible subissent 30 %', 'reso=0.3; resoR=26'),
  ('音符积累', 'Note Stacks', 'Notes cumulées', 240, '每次命中给跑者加 1 个音符（最多 5 个）', 'Each hit adds a note to the runner (max 5)', 'Chaque coup ajoute une note au coureur (max 5)', 'notes=5'),
  ('共振扩散', 'Wide Resonance', 'Résonance large', 520, '共振范围 +16，共振效果 50%', 'Resonance radius +16, 50% effect', 'Rayon +16, effet 50 %', 'resoR+=16; reso=0.5'),
  ('同步爆发', 'Drop the Beat', 'Lâcher le beat', 1500, '每第 4 首：引爆范围内所有音符，每个音符 ×2 效果', 'Every 4th song detonates all notes in range, ×2 effect per note', 'Tous les 4 morceaux, fait exploser les notes à portée, ×2 par note', 'burst=2'),
  ('超级低音炮', 'Mega Bass', 'Méga basse', 3600, '引爆效果 ×5，音符上限 8 个；引爆后音符清空要重新传', 'Detonation ×5, up to 8 notes; notes reset afterwards', 'Explosion ×5, jusqu’à 8 notes ; les notes repartent de zéro', 'burst*=5; notes=8; dmg+=1'))),
 ('tesla', 3, ('耳虫续播', 'Earworm', 'Ver d’oreille'), T6(
  ('余音', 'Afterglow', 'Écho', 50, '发懵 +1 秒', 'Dizzy +1 s', 'Étourdi +1 s', 'dizzyDur+=1'),
  ('耳虫', 'Earworm', 'Ver d’oreille', 110, '发懵期间每秒受 0.6 点效果', 'While dizzy, takes 0.6 per second', 'Étourdi : 0,6 par seconde', 'worm=0.6'),
  ('离场余音', 'Can’t Unhear', 'Impossible à oublier', 300, '耳虫持续 4 秒，离开范围也甩不掉', 'Earworm lasts 4 s, even out of range', 'Le ver dure 4 s, même hors de portée', 'wormDur=4'),
  ('强化余音', 'Louder Worm', 'Ver plus fort', 600, '耳虫效果 ×2', 'Earworm ×2', 'Ver ×2', 'worm*=2'),
  ('专属耳虫', 'Personal Worm', 'Ver personnel', 1300, '最多同时盯 6 人，每秒再 +2', 'Up to 6 runners at once, +2 per second', 'Jusqu’à 6 coureurs, +2 par seconde', 'wormCap=6; worm+=2'),
  ('终极耳虫', 'Ultimate Earworm', 'Ver ultime', 3200, '最多 3 人，每秒效果 ×4，持续 8 秒，不能续时', 'Up to 3 runners, ×4 per second, 8 s, can’t be refreshed', 'Jusqu’à 3 coureurs, ×4 par seconde, 8 s, non renouvelable', 'wormCap=3; worm*=4; wormDur=8; wormLock=1'))),

 ('lure', 1, ('美食飘香', 'Food Stall', 'Stand de bouffe'), T6(
  ('飘香', 'Good Smell', 'Bonne odeur', 50, '吸引范围 +15', 'Lure range +15', 'Portée +15', 'range+=15'),
  ('加座', 'More Seats', 'Plus de places', 90, '一次多招呼 2 人', 'Invites 2 more at a time', 'Invite 2 de plus à la fois', 'cap+=2'),
  ('烧烤摊', 'BBQ Stall', 'Barbecue', 260, '停留 1.5 秒，吃完辣到冒汗（挂上“辣”）', 'Stops 1.5 s; diners leave spicy', 'Arrêt 1,5 s ; les clients repartent pimentés', 'stay=1.5; spicy=0.6'),
  ('大排档', 'Food Court', 'Aire de restauration', 600, '一次再多招呼 3 人', '3 more per invite', '3 de plus par invitation', 'cap+=3'),
  ('爆款奶茶', 'Viral Bubble Tea', 'Bubble tea viral', 1300, '停留 2.5 秒，辣度 ×2', 'Stops 2.5 s, spice ×2', 'Arrêt 2,5 s, piment ×2', 'stay=2.5; spicy*=2'),
  ('夜市开席', 'Night Market', 'Marché de nuit', 3200, '每 10 秒一次招呼最多 15 人停 3 秒', 'Every 10 s up to 15 runners stop for 3 s', 'Toutes les 10 s, jusqu’à 15 coureurs s’arrêtent 3 s', 'cap=15; stay=3; rate=10'))),
 ('lure', 2, ('舒适休息', 'Sofa', 'Canapé'), T6(
  ('软垫', 'Soft Cushion', 'Coussin', 50, '停留 +0.5 秒', 'Stay +0.5 s', 'Arrêt +0,5 s', 'stay+=0.5'),
  ('翻台快', 'Quick Turnover', 'Rotation rapide', 90, '招呼间隔 −20%', 'Invite interval −20%', 'Intervalle −20 %', 'rate*=0.8'),
  ('沙发休息站', 'Sofa Lounge', 'Salon canapé', 280, '2 个座位，每人躺 3 秒；有空位才招新人', '2 seats, 3 s rest each; only invites when a seat is free', '2 places, 3 s de repos ; invite seulement s’il y a de la place', 'seats=2; stay=3'),
  ('深度放松', 'Deep Relax', 'Détente profonde', 600, '每人躺 4.5 秒', '4.5 s rest each', 'Repos de 4,5 s', 'stay=4.5'),
  ('VIP 沙发', 'VIP Sofa', 'Canapé VIP', 1300, '3 个座位，躺 6 秒', '3 seats, 6 s rest', '3 places, 6 s', 'seats=3; stay=6'),
  ('至尊躺平区', 'Ultimate Lie-Flat', 'Zone de flemme ultime', 3200, '2 个座位，躺 12 秒', '2 seats, 12 s rest', '2 places, 12 s', 'seats=2; stay=12'))),
 ('lure', 3, ('限量围观', 'Hype Drop', 'Édition limitée'), T6(
  ('快速吆喝', 'Quick Call', 'Appel rapide', 50, '招呼间隔 −20%', 'Invite interval −20%', 'Intervalle −20 %', 'rate*=0.8'),
  ('打断冲刺', 'Break the Sprint', 'Casser le sprint', 100, '围观者失去加速', 'Onlookers lose speed boosts', 'Les curieux perdent leurs accélérations', 'cleanse=1'),
  ('球鞋展示柜', 'Sneaker Showcase', 'Vitrine de baskets', 280, '围观者还会失去能量盾和回血', 'Onlookers also lose energy shields and regen', 'Les curieux perdent aussi boucliers et régénération', 'cleanse=2'),
  ('排长队', 'Long Queue', 'Longue file', 600, '一次多招呼 3 人', '3 more per invite', '3 de plus par invitation', 'cap+=3'),
  ('限量款', 'Limited Edition', 'Modèle limité', 1300, '耐力跑者和巨鲸也会来围观', 'Endurance runners and whales come too', 'Endurants et baleines viennent aussi', 'lureHeavy=1'),
  ('限量发售会', 'Launch Event', 'Lancement exclusif', 3000, '每 9 秒：范围 ×1.4 内所有跑者（Boss 除外）失去增益并停 1 秒', 'Every 9 s: every runner within 1.4× range (not bosses) loses buffs and stops 1 s', 'Toutes les 9 s : tous les coureurs à 1,4× la portée (sauf boss) perdent leurs bonus et s’arrêtent 1 s', 'launch=9'))),
]

# trajectories for projectiles (the art only supplies the look; the game moves it)
SHOTS = [
 # key, 中文说明, trajectory (line | arc | drop | beam | chain), speed px/s, arc height, spin (turns/s), track (1 = follows a moving target)
 ('shot.dart', '易拉罐', 'arc', 420, 14, 3, 1),
 ('shot.bomb', '香蕉皮', 'arc', 260, 40, 2, 0),
 ('shot.sniper', '无人机鞋盒', 'drop', 0, 70, 0, 0),
 ('shot.frost', '水柱 / 水花', 'beam', 0, 0, 0, 0),
 ('shot.tesla', '音符', 'chain', 0, 0, 0, 0),
]

def translations():
    out = {}
    for d in DEVICES:
        for trip in (d[1], d[2], d[3]): out[trip[0]] = (trip[1], trip[2])
    for tw, pi, pn, tiers in PATHS6:
        out[pn[0]] = (pn[1], pn[2])
        for (zn, en, fr, cost, zd, ed, fd, fx) in tiers:
            out[zn] = (en, fr); out[zd] = (ed, fd)
    return out
