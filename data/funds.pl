%
% See also: https://swish.swi-prolog.org/p/etf.pl
%
:- dynamic type/1, dividend/1, quality/1, highyield/1, category/1, sector/1, fund/1.

% Assign funds.
fund(sdy) :- type(stock), dividend(yes), quality(rising), highyield(yes).
fund(pfm) :- type(stock), dividend(yes), quality(rising), highyield(no).
fund(bsv) :- type(bond), category(short), sector(broad).
fund(bnd) :- type(bond), category(medium), sector(broad).

% By adding this fact, when we set highyield=yes, we also get dividend=yes, thus leading us to fund(sdy).
dividend(yes) :- highyield(yes).

% Assign our fund preferences.
type(stock).
%dividend(yes).
quality(rising).
highyield(yes).
category(none).
sector(none).

% Query for the selected fund.
?- fund(Which)

% Output: Which = sdy