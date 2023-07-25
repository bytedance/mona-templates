import { createProjectConfig } from '@bytedance/mona';

export default createProjectConfig({
  projectName: '<%= data.projectName %>',
  input: './src/app',
  appId: "<%= data.appId %>",
})
