module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 'off',
    "semi": 0,
    'max-len': 'off',
    "quotes": [0, "double"],
    "space-before-function-paren": "error",
    'no-plusplus': 0,
    'vue/no-deprecated-slot-attribute': 'off',
    'padded-blocks': ["error", { "blocks": "always" }] ,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'object-curly-newline': 'off',
    "eol-last" :0,
    'padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never',
    }]
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
