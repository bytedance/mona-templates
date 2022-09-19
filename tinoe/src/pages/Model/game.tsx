import { PerspectiveCamera, AmbientLight, DirectLight } from "tinoe";
import { GLTFLoader } from '@tinoe/glk';
import { useContext, useEffect } from 'react';
import { TinoeContext } from '@/components/TinoeContainer';

export default () => {
  const { stage } = useContext(TinoeContext);

  const initScene = async () => {
    if (!stage) return;
    const scene = await GLTFLoader.loadAsScene('https://lf-tinoe.doubao.com/obj/tinoe/arrow.gltf');

    const camera = new PerspectiveCamera({
      near: 10,
      position: [200, 400, 600],
      aspectRatio: stage.canvas.clientWidth / stage.canvas.clientHeight,
    });
    scene.cameraManager.addCameras(camera);
    scene.cameraManager.activeCamera = camera;
    const dl = new DirectLight({ direction: [0, 2, -4], color: '#555' });
    const al = new AmbientLight({ color: '#fff' });
    scene.lightManager.addLights(al, dl);

    stage.enableControl();
    stage.loop(scene);
  };

  useEffect(() => {
    initScene();
  }, [stage]);

  return null;
};
