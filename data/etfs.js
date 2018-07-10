const KB = [
  {
    premises: [
      { attribute: 'class', value: 'bond' },
      { attribute: 'category', value: 'treasury' },
      { attribute: 'risk', value: 'low' },
      { attribute: 'dividend', value: 'yes' }
    ],
    conclusion: { attribute: 'fund', value: 'BND' }
  },
  {
    premises: [
      { attribute: 'class', value: 'bond' },
      { attribute: 'category', value: 'treasury' },
      { attribute: 'risk', value: 'high' },
      { attribute: 'dividend', value: 'yes' }
    ],
    conclusion: { attribute: 'fund', value: 'JNK' }
  },
  {
    premises: [
      { attribute: 'class', value: 'bond' },
      { attribute: 'risk', value: 'low' },
      { attribute: 'dividend', value: 'yes' }
    ],
    conclusion: { attribute: 'fund', value: 'MUB' }
  },
  {
    premises: [
      { attribute: 'class', value: 'bond' },
      { attribute: 'category', value: 'municipal' },
      { attribute: 'risk', value: 'low' },
      { attribute: 'dividend', value: 'yes' }
    ],
    conclusion: { attribute: 'fund', value: 'HYD' }
  },
  {
    premises: [
      { attribute: 'class', value: 'stock' },
      { attribute: 'category', value: 'large blend' },
      { attribute: 'risk', value: 'high' },
      { attribute: 'size', value: 'large' },
      { attribute: 'valuation', value: 'blend' }
    ],
    conclusion: { attribute: 'fund', value: 'SPY' }
  },
  {
    premises: [
      { attribute: 'class', value: 'stock' },
      { attribute: 'category', value: 'large value' },
      { attribute: 'risk', value: 'moderate' },
      { attribute: 'size', value: 'large' },
      { attribute: 'valuation', value: 'value' }
    ],
    conclusion: { attribute: 'fund', value: 'SDY' }
  },
  {
    premises: [
      { attribute: 'fund', value: 'MUB' }
    ],
    conclusion: { attribute: 'tolerance', value: 'low' }
  },
  {
    premises: [
      { attribute: 'fund', value: 'MUB' }
    ],
    conclusion: { attribute: 'category', value: 'municipal' }
  },
  {
    premises: [
      { attribute: 'fund', value: 'SPY' }
    ],
    conclusion: { attribute: 'tolerance', value: 'high' }
  }
];

module.exports = KB;
