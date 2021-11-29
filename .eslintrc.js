module.exports = {
  root: true, // 告诉 eslint 找当前配置文件不能往父级查找
  env: {
    node: true // 此项指定环境的全局变量，下面的配置指定为 node 环境
  },
  extends: ['plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/no-v-html': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
    parser: 'babel-eslint',
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      // 添加 ES 特性支持，使之能够识别 ES6 语法
      jsx: true
    }
  },
  overrides: []
}
