import { createProjectConfig } from "@bytedance/mona";

export default createProjectConfig({
  projectName: "@shop-isv/<%= data.projectName %>",
  appId: "<%= data.appId %>",
});
