import {
  Scene,
  PerspectiveCamera,
  AmbientLight,
  Mesh,
  BlinnPhongMaterial,
  CubeGeometry,
  DirectLight,
  PlaneGeometry,
} from "tinoe";
import { useContext, useEffect } from "react";
import { TinoeContext } from "@/components/TinoeContainer";
import CubeScript from "./scripts/cube";
import GameScript from "./scripts/game";

export default () => {
  const { stage } = useContext(TinoeContext);

  const initScene = async () => {
    if (!stage) return;
    // 创建场景
    const scene = new Scene();
    // 添加相机
    const camera = new PerspectiveCamera({
      far: 100,
      position: [0, 3, -10],
      aspectRatio: stage.canvas.clientWidth / stage.canvas.clientHeight,
    });
    scene.cameraManager.addCameras(camera);
    // 添加光照
    const al = new AmbientLight({ color: "#aaa", alpha: 1 });
    const dl = new DirectLight({
      color: "#fff",
      alpha: 1,
      direction: [-2, 2, 2],
    });
    scene.lightManager.addLights(al, dl);

    // 创建cube
    const cubeMat = new BlinnPhongMaterial({ diffuseColor: "#00ff00" });
    const cubeGeo = new CubeGeometry();
    const cube = new Mesh(cubeGeo, cubeMat);
    cube.translateY(0.5);
    cube.rotateY(-10);
    scene.addChildren(cube);

    // 创建平面
    const plane = new Mesh(
      new PlaneGeometry({ width: 10, height: 10 }),
      new BlinnPhongMaterial({ diffuseColor: "#aaa" })
    );
    plane.rotateX(90);
    scene.addChildren(plane);

    // 添加脚本
    scene.scriptManager.addScript(GameScript);
    scene.scriptManager.addScript<%= data.typescript ? '<any>' : '' %>(CubeScript, cube);
    CubeScript.width = stage.canvas.clientWidth;
    CubeScript.height = stage.canvas.clientHeight;

    // 开启渲染循环
    stage.loop(scene);
  };

  useEffect(() => {
    initScene();
  }, [stage]);

  return null;
};
