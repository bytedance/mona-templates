import { createProjectConfig } from '@bytedance/mona'
import path from 'path'

export default createProjectConfig({
  projectName: 'mona-tinoe-template',
  input: './src/app',
  appId: 'testAppId',
  abilities: {
    alias: {
      components: path.join(__dirname, './src/components'),
    },
    sourceMap:
      process.env.NODE_ENV === 'production' ? false : 'cheap-source-map',
    define: {
      REQ_URL: JSON.stringify('https://xxx/xxx'),
    },
  },
})
