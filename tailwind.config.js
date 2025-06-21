// 설정 변경
module.exports = {
  content: [
    './main/templates/**/*.html',
    './main/static/js/**/*.js',
  ],
  corePlugins: {
    preflight: false, // 👈 기본 리셋 끄기
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
