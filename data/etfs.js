const KB = [
  {
    premises: [
      'risk tolerance is high',
      'preference is stocks',
      'preference is technology',
      'preference is dividends'
    ],
    conclusion: 'VYM'
  },
  {
    premises: [
      'risk tolerance is high',
      'preference is stocks',
      'preference is technology'
    ],
    conclusion: 'QQQ'
  },
  {
    premises: [
      'risk tolerance is high',
      'preference is stocks',
      'preference is dividends'
    ],
    conclusion: 'DVY'
  },
  {
    premises: [
      'risk tolerance is high',
      'preference is stocks',
    ],
    conclusion: 'SPY'
  },
  {
    premises: [
      'risk tolerance is moderate',
      'preference is stocks',
      'preference is dividends'
    ],
    conclusion: 'SDY'
  },
  {
    premises: [
      'risk tolerance is moderate',
      'preference is stocks'
    ],
    conclusion: 'VTI'
  },
  {
    premises: [
      'risk tolerance is high',
      'preference is bonds',
      'preference is dividends',
      'tax efficiency'
    ],
    conclusion: 'HYD'
  },
  {
    premises: [
      'risk tolerance is high',
      'preference is bonds',
      'preference is dividends'
    ],
    conclusion: 'TLT'
  },
  {
    premises: [
      'risk tolerance is moderate',
      'preference is bonds',
      'preference is dividends'
    ],
    conclusion: 'JNK'
  },
  {
    premises: [
      'risk tolerance is low',
      'preference is bonds',
      'tax efficiency'
    ],
    conclusion: 'MUB'
  },
  {
    premises: [
      'risk tolerance is low',
      'preference is bonds'
    ],
    conclusion: 'BND'
  },
  /*{
    premises: [
      'risk tolerance is moderate',
      'VTI'
    ],
    conclusion: 'BND'
  },
  {
    premises: [
      'risk tolerance is moderate',
      'BND'
    ],
    conclusion: 'VTI'
  },
  {
    premises: [
      'QQQ'
    ],
    conclusion: 'preference is technology'
  },
  {
    premises: [
      'VYM'
    ],
    conclusion: 'preference is dividends'
  },
  {
    premises: [
      'JNK'
    ],
    conclusion: 'preference is dividends'
  },
  {
    premises: [
      'MUB'
    ],
    conclusion: 'tax efficiency'
  },
  {
    premises: [
      'HYD'
    ],
    conclusion: 'tax efficiency'
  },
  {
    premises: [
      'BND'
    ],
    conclusion: 'preference is bonds'
  },
  {
    premises: [
      'VTI',
      'BND'
    ],
    conclusion: 'risk tolerence is moderate'
  }*/
];

module.exports = KB;
