import { createProjectConfig } from '@bytedance/mona';

export default createProjectConfig({
  projectName: '<%= data.projectName %>',
  appId: "<%= data.appId %>",
  input: './src/app',
})
