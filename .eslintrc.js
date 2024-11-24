module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false, // สำหรับโปรเจกต์ที่ไม่มีไฟล์ Babel configuration
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
  },
};
