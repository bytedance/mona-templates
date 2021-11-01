import { createProjectConfig } from '@bytedacne/mona';

export default createProjectConfig({
  projectName: '<%= data.projectName %>',
  input: './src/app.tsx',
  output: 'dist'
})
