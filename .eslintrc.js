/*
 * @Descripttion: 
 * @version: 
 * @Author: zoucw (zoucw@yunjiglobal.com)
 * @Date: 2020-02-29 01:40:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-03-02 15:54:50
 */
module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ["plugin:vue/essential", "@vue/airbnb"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    semi: ["error", "never"], // 禁用 分号
    "no-multiple-empty-lines": ["error"], // 代码空行 数量
    "linebreak-style": [0, "error", "windows"], // 使用windows的换行
    "comma-dangle": [2, "never"], //  对象数组最后一个不带逗号
    "no-trailing-spaces": 0, // 禁用 校验代码末尾带空格
    "import/no-dynamic-require": 0, // 禁用 动态require
    "import/no-unresolved": 0,
    "no-param-reassign": 0, // 声明为函数参数的变量可能会引起误解
    "max-len": ["error", 150], // 单行代码最大长度
    "guard-for-in": 0, // 禁用 禁用for in 循环
    "no-shadow": 0, // 禁用  禁止页面内相容参数名
    "object-shorthand": 0, // 禁用 禁止对象内使用带引号字符串
    "no-restricted-syntax": 0,
    // 添加 vue 支持
    "eslint.validate": [
      "javascript",
      "javascriptreact",
      {
        language: "vue",
        autoFix: true
      }
    ]
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
