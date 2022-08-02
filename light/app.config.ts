import { createAppConfig } from "@bytedance/mona";

export default createAppConfig({
  pages: [
    'pages/Home/index',
    'pages/Info/index',
    'pages/List/index'
  ],
  light: {
    mode: 'sidebar-semi-420'
  }
})