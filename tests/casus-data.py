"""De casusrekenbron reproduceert de boekwaarden van Handelsvoorraden (H8) en Productiviteit (H9)."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
from casus_data import STOCK, mpu, regression, month_label
from formula_visuals import num

stock = mpu()
assert num(stock['mean']) == '2.008,51'
assert num(stock['sd']) == '680,57', 'Boek p. 206: s_w = 680,57'
assert num(stock['factor']) == '164,72', 'Boek p. 205: vaste factor 164,72'
assert num(stock['estimate'], 0) == '7.029.776'
assert num(stock['margin'], 0) == '219.724', 't = 1,960 bij df > 200'
assert (stock['lower'], stock['upper']) == (6810052, 7249501)
assert stock['contains_W'] and not stock['meets_requirement']
assert stock['needed'] == 759 and stock['extra'] == 359
assert num(mpu(t=1.966)['margin'], 0) == '220.397', 'Met de t van het boek: casusboek, MPU ± 220.397'
assert STOCK['W'] == 7029580

line = regression()
assert line['n'] == 24
assert num(line['b1'], 3) == '0,610' and num(line['b0'], 3) == '-1,108'
assert num(line['mean_x'], 3) == '48,683' and num(line['mean_y'], 3) == '28,583'
assert num(line['sx'], 3) == '6,314' and num(line['sy'], 3) == '3,998'
assert num(line['r'], 3) == '0,963' and num(line['r2'], 3) == '0,928'
assert num(line['se'], 3) == '1,100', 'Boek tabel 9.5: Std. Error of the Estimate 1,100'
assert num(line['b1'] / line['se_b1'], 3) == '16,788', 'Boek tabel 9.4: t = 16,788'
assert month_label(line['largest']) == 'jun 2008' and num(line['residuals'][5]) == '2,25'
print('Casusrekenbron: Handelsvoorraden en Productiviteit reproduceren de boekwaarden.')
