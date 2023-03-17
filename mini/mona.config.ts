import { createProjectConfig } from '@bytedance/mona';
import path from 'path';

export default createProjectConfig({
  projectName: '<%= data.projectName %>',
  input: './src/app',
  output: 'dist',
  appId:'testAppId',
  abilities: {
    alias: {
      "components": path.join(__dirname, './src/components'),
    },
    sourceMap: false,
    define: {
      REQ_URL: JSON.stringify('https://xxx/xxx'),
    },
  },
})
