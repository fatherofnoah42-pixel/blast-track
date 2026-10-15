import sys, os; os.chdir(os.path.dirname(os.path.abspath(__file__))); sys.path.insert(0,'.')
import tiers as T
T.set_window(-620,-90,820)
names=['加料汽水罐（挂件：秤砣）','铁皮罐（挂件：一对秤砣）','蓄力重罐','破防重罐','点杀专家','巨罐裁判']
T.grid([((t,0,0), f'T{t} {names[t-1]}') for t in range(1,7)],3,'路线一 · 重罐点名','_variants/route1.png')
T.grid([((6,2,0),'1-6 + 2-2'),((6,0,2),'1-6 + 3-2'),((2,0,5),'1-2 + 3-5'),((1,4,0),'1-1 + 2-4'),((5,2,0),'1-5 + 2-2'),((4,0,1),'1-4 + 3-1')],3,'路线一组合示例','_variants/route1_combos.png')
print('ok')
