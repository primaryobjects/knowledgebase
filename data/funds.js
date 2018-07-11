/* See also: https://swish.swi-prolog.org/p/etf.pl

:- dynamic type/1, dividend/1, quality/1, highyield/1, category/1, sector/1, fund/1.

select :- type(stock), dividend(yes), quality(rising), highyield(yes), assert(fund(sdy)).
select :- type(stock), dividend(yes), quality(rising), highyield(no), assert(fund(pfm)).
select :- type(bond), category(short), sector(broad), assert(fund(bsv)).
select :- type(bond), category(medium), sector(broad), assert(fund(bnd)).

% By adding this fact, when we set highyield=yes, we also get dividend=yes, thus leading us to fund(sdy).
dividend(yes) :- highyield(yes).

type(stock).
%dividend(yes).
quality(rising).
highyield(yes).

?- select, fund(Which)

% Output: Which = sdy
*/

const KB = [
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'real estate' },
      { attribute: 'sector', value: 'international' }
    ],
    conclusion: { attribute: 'fund', value: 'RWO' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'real estate' },
      { attribute: 'sector', value: 'us' },
      { attribute: 'class', value: 'mortgage' }
    ],
    conclusion: { attribute: 'fund', value: 'REM' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'real estate' },
      { attribute: 'sector', value: 'us' },
      { attribute: 'class', value: 'residential' }
    ],
    conclusion: { attribute: 'fund', value: 'REZ' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'real estate' },
      { attribute: 'sector', value: 'small cap' }
    ],
    conclusion: { attribute: 'fund', value: 'ROOF' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'real estate' },
      { attribute: 'sector', value: 'homebuilders' }
    ],
    conclusion: { attribute: 'fund', value: 'XHB' }
  },

  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'technology' },
      { attribute: 'sector', value: 'us' }
    ],
    conclusion: { attribute: 'fund', value: 'XLK' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'technology' },
      { attribute: 'sector', value: 'small cap' }
    ],
    conclusion: { attribute: 'fund', value: 'PSCT' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'technology' },
      { attribute: 'sector', value: 'global' }
    ],
    conclusion: { attribute: 'fund', value: 'IXN' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'energy' },
      { attribute: 'sector', value: 'us' }
    ],
    conclusion: { attribute: 'fund', value: 'XLE' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'energy' },
      { attribute: 'sector', value: 'small cap' }
    ],
    conclusion: { attribute: 'fund', value: 'PSCE' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'energy' },
      { attribute: 'sector', value: 'global' }
    ],
    conclusion: { attribute: 'fund', value: 'IXC' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'healthcare' },
      { attribute: 'sector', value: 'us' }
    ],
    conclusion: { attribute: 'fund', value: 'XLV' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'healthcare' },
      { attribute: 'sector', value: 'small cap' }
    ],
    conclusion: { attribute: 'fund', value: 'PSCH' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'healthcare' },
      { attribute: 'sector', value: 'global' }
    ],
    conclusion: { attribute: 'fund', value: 'IXJ' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'financial' },
      { attribute: 'sector', value: 'us' }
    ],
    conclusion: { attribute: 'fund', value: 'XLF' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'financial' },
      { attribute: 'sector', value: 'small cap' }
    ],
    conclusion: { attribute: 'fund', value: 'PSCF' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'financial' },
      { attribute: 'sector', value: 'global' }
    ],
    conclusion: { attribute: 'fund', value: 'IXG' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'utilities' },
      { attribute: 'sector', value: 'us' }
    ],
    conclusion: { attribute: 'fund', value: 'XLU' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'utilities' },
      { attribute: 'sector', value: 'small cap' }
    ],
    conclusion: { attribute: 'fund', value: 'PSCU' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'utilities' },
      { attribute: 'sector', value: 'global' }
    ],
    conclusion: { attribute: 'fund', value: 'JXI' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'consumer discretionary' },
      { attribute: 'sector', value: 'us' }
    ],
    conclusion: { attribute: 'fund', value: 'XLY' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'consumer discretionary' },
      { attribute: 'sector', value: 'small cap' }
    ],
    conclusion: { attribute: 'fund', value: 'PSCD' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'consumer discretionary' },
      { attribute: 'sector', value: 'global' }
    ],
    conclusion: { attribute: 'fund', value: 'RXI' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'consumer staples' },
      { attribute: 'sector', value: 'us' }
    ],
    conclusion: { attribute: 'fund', value: 'XLP' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'consumer staples' },
      { attribute: 'sector', value: 'small cap' }
    ],
    conclusion: { attribute: 'fund', value: 'PSCC' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'consumer staples' },
      { attribute: 'sector', value: 'global' }
    ],
    conclusion: { attribute: 'fund', value: 'KXI' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'basic materials' },
      { attribute: 'sector', value: 'us' }
    ],
    conclusion: { attribute: 'fund', value: 'XLB' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'basic materials' },
      { attribute: 'sector', value: 'small cap' }
    ],
    conclusion: { attribute: 'fund', value: 'PSCM' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'category', value: 'basic materials' },
      { attribute: 'sector', value: 'global' }
    ],
    conclusion: { attribute: 'fund', value: 'MXI' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'dividend', value: 'yes' },
      { attribute: 'quality', value: 'rising' },
      { attribute: 'high yield', value: 'yes' },
      { attribute: 'international', value: 'yes' }
    ],
    conclusion: { attribute: 'fund', value: 'PID' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'dividend', value: 'yes' },
      { attribute: 'quality', value: 'preferred' },
      { attribute: 'category', value: 'financial' }
    ],
    conclusion: { attribute: 'fund', value: 'PFF' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'dividend', value: 'yes' },
      { attribute: 'quality', value: 'preferred' }
    ],
    conclusion: { attribute: 'fund', value: 'PGF' }
  },

  /* Dividend Stocks */
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'dividend', value: 'yes' },
      { attribute: 'quality', value: 'rising' },
      { attribute: 'high yield', value: 'no' }
    ],
    conclusion: { attribute: 'fund', value: 'PFM' }
  },

  /* Example of adding in forward-chaining. The fund SDY requires dividend=yes, even if we do not provide it in forward-chaining, we can still achieve it via high yield=yes => dividend=yes. */
  {
    premises: [
      { attribute: 'high yield', value: 'yes' }
    ],
    conclusion: { attribute: 'dividend', value: 'yes' }
  },
  {
    premises: [
      { attribute: 'type', value: 'stock' },
      { attribute: 'dividend', value: 'yes' },
      { attribute: 'quality', value: 'rising' },
      { attribute: 'high yield', value: 'yes' }
    ],
    conclusion: { attribute: 'fund', value: 'SDY' }
  },
  /* End example */

  /* Bonds */
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'short' },
      { attribute: 'sector', value: 'broad' }
    ],
    conclusion: { attribute: 'fund', value: 'BSV' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'medium' },
      { attribute: 'sector', value: 'broad' }
    ],
    conclusion: { attribute: 'fund', value: 'BND' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'long' },
      { attribute: 'sector', value: 'broad' }
    ],
    conclusion: { attribute: 'fund', value: 'SPLB' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'short' },
      { attribute: 'sector', value: 'us' }
    ],
    conclusion: { attribute: 'fund', value: 'BIL' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'medium' },
      { attribute: 'sector', value: 'us' }
    ],
    conclusion: { attribute: 'fund', value: 'ITE' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'long' },
      { attribute: 'sector', value: 'us' }
    ],
    conclusion: { attribute: 'fund', value: 'SPTL' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'short' },
      { attribute: 'sector', value: 'corporate' }
    ],
    conclusion: { attribute: 'fund', value: 'LDRI' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'medium' },
      { attribute: 'sector', value: 'corporate' }
    ],
    conclusion: { attribute: 'fund', value: 'CIU' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'long' },
      { attribute: 'sector', value: 'corporate' }
    ],
    conclusion: { attribute: 'fund', value: 'CLY' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'short' },
      { attribute: 'sector', value: 'international' }
    ],
    conclusion: { attribute: 'fund', value: 'BWZ' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'medium' },
      { attribute: 'sector', value: 'international' }
    ],
    conclusion: { attribute: 'fund', value: 'BWX' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'long' },
      { attribute: 'sector', value: 'international' }
    ],
    conclusion: { attribute: 'fund', value: 'PICB' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'short' },
      { attribute: 'sector', value: 'municipal' }
    ],
    conclusion: { attribute: 'fund', value: 'SHM' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'medium' },
      { attribute: 'sector', value: 'municipal' }
    ],
    conclusion: { attribute: 'fund', value: 'ITM' }
  },
  {
    premises: [
      { attribute: 'type', value: 'bond' },
      { attribute: 'category', value: 'long' },
      { attribute: 'sector', value: 'municipal' }
    ],
    conclusion: { attribute: 'fund', value: 'MLN' }
  },

];

module.exports = KB;