export default [
  {
    key: 'id',
    types: ['string', 'number'],
    required: true
  },
  {
    key: 'options',
    types: ['object'],
    required: true
  },
  {
    key: 'end',
    types: ['boolean'],
    required: false
  },
  {
    key: 'awaitOnClick',
    types: ['boolean'],
    required: false
  },
  {
    key: 'onClick',
    types: ['function'],
    required: false
  },
  {
    key: 'placeholder',
    types: ['string'],
    required: false
  },
  {
    key: 'hideInput',
    types: ['boolean'],
    required: false
  },
  {
    key: 'hideExtraControl',
    types: ['boolean'],
    required: false
  },
  {
    key: 'inputAttributes',
    types: ['object'],
    required: false
  },
  {
    key: 'metadata',
    types: ['object'],
    required: false
  }
];
