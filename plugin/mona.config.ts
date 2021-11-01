import { createProjectConfig } from '@ecom/mona';

export default createProjectConfig({
  projectName: '<%= data.projectName %>',
  input: './src/app.tsx',
  output: 'dist'
})
