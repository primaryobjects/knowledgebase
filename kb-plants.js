const KB = [
  {
    premises: [
      { attribute: 'class', value: 'gymnosperm' },
      { attribute: 'leaf shape', value: 'scalelike' }
    ],
    conclusion: { attribute: 'family', value: 'cypress' }
  },
  {
    premises: [
      { attribute: 'class', value: 'gymnosperm' },
      { attribute: 'leaf shape', value: 'needlelike' },
      { attribute: 'pattern', value: 'random' }
    ],
    conclusion: { attribute: 'family', value: 'pine' }
  },
  {
    premises: [
      { attribute: 'class', value: 'gymnosperm' },
      { attribute: 'leaf shape', value: 'needlelike' },
      { attribute: 'pattern', value: 'two even lines' },
      { attribute: 'silvery band', value: 'yes' }
    ],
    conclusion: { attribute: 'family', value: 'pine' }
  },
  {
    premises: [
      { attribute: 'class', value: 'gymnosperm' },
      { attribute: 'leaf shape', value: 'needlelike' },
      { attribute: 'pattern', value: 'two even lines' },
      { attribute: 'silvery band', value: 'no' }
    ],
    conclusion: { attribute: 'family', value: 'bald cypress' }
  },
  {
    premises: [
      { attribute: 'type', value: 'tree' },
      { attribute: 'broad and flat', value: 'yes' }
    ],
    conclusion: { attribute: 'class', value: 'angiosperm' }
  },
  {
    premises: [
      { attribute: 'type', value: 'tree' },
      { attribute: 'broad and flat', value: 'no' }
    ],
    conclusion: { attribute: 'class', value: 'gymnosperm' }
  },
  {
    premises: [
      { attribute: 'stem', value: 'green' },
    ],
    conclusion: { attribute: 'type', value: 'herb' }
  },
  {
    premises: [
      { attribute: 'stem', value: 'woody' },
      { attribute: 'position', value: 'creeping' },
    ],
    conclusion: { attribute: 'type', value: 'vine' }
  },
  {
    premises: [
      { attribute: 'stem', value: 'woody' },
      { attribute: 'position', value: 'upright' },
      { attribute: 'one main trunk', value: 'yes' }
    ],
    conclusion: { attribute: 'type', value: 'tree' }
  },
  {
    premises: [
      { attribute: 'stem', value: 'woody' },
      { attribute: 'position', value: 'upright' },
      { attribute: 'one main trunk', value: 'no' }
    ],
    conclusion: { attribute: 'type', value: 'shrub' }
  },

];

module.exports = KB;
