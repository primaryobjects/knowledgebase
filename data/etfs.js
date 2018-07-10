const KB = [
  /* Setting up stock/bond percentages. */
  {
    premises: [
      { attribute: 'tolerance', value: 'low' }
    ],
    conclusion: { attribute: 'bonds', value: '100' }
  },
  {
    premises: [
      { attribute: 'tolerance', value: 'moderate' }
    ],
    conclusion: { attribute: 'bonds', value: '50' }
  },
  {
    premises: [
      { attribute: 'tolerance', value: 'moderate' }
    ],
    conclusion: { attribute: 'stocks', value: '50' }
  },
  {
    premises: [
      { attribute: 'tolerance', value: 'high' },
      { attribute: 'tax free', value: 'no' }
    ],
    conclusion: { attribute: 'stocks', value: '100' }
  },
  {
    premises: [
      { attribute: 'tolerance', value: 'high' },
      { attribute: 'tax free', value: 'yes' }
    ],
    conclusion: { attribute: 'bonds', value: '100' }
  },

  /* Setting up fund selection. */
  {
    premises: [
      { attribute: 'tolerance', value: 'low' },
      { attribute: 'tax free', value: 'yes' }
    ],
    conclusion: { attribute: 'fund', value: 'MUB' }
  },
  {
    premises: [
      { attribute: 'tolerance', value: 'moderate' },
      { attribute: 'tax free', value: 'yes' }
    ],
    conclusion: { attribute: 'fund', value: 'MUB' }
  },
  {
    premises: [
      { attribute: 'tolerance', value: 'high' },
      { attribute: 'tax free', value: 'yes' }
    ],
    conclusion: { attribute: 'fund', value: 'HYD' }
  },
  {
    premises: [
      { attribute: 'bonds', value: '100' },
      { attribute: 'tax free', value: 'no' }
    ],
    conclusion: { attribute: 'fund', value: 'BND' }
  },
  {
    premises: [
      { attribute: 'bonds', value: '50' },
      { attribute: 'tax free', value: 'no' }
    ],
    conclusion: { attribute: 'fund', value: 'BND' }
  },
  {
    premises: [
      { attribute: 'stocks', value: '100' }
    ],
    conclusion: { attribute: 'fund', value: 'SPY' }
  },
  {
    premises: [
      { attribute: 'stocks', value: '50' }
    ],
    conclusion: { attribute: 'fund', value: 'SPY' }
  },
];

module.exports = KB;
