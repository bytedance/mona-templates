import { Color, Script, Vector3<%- data.typescript ? ', BlinnPhongMaterial, Mesh, TinoeEvent' : ''%> } from "tinoe";


export default class CubeScript extends Script<%- data.typescript ? '<Mesh<any, BlinnPhongMaterial>>' : '' %> {
  <%- data.typescript ? 'private' : '' %> _tmpVec3 = new Vector3();
  <%- data.typescript ? 'private' : '' %> _lastPosition = new Vector3();
  <%- data.typescript ? 'private' : '' %> _zValue<%- data.typescript ? ': number' : '' %> = 0;
  <%- data.typescript ? 'private' : '' %> _color = new Color();

  static width = 0;
  static height = 0;

  onAwake()<%- data.typescript ? ': void' : '' %> {
    this.instance.matrixAutoUpdate = false;
  }
  onPointerEnter(ev<%- data.typescript ? ': TinoeEvent<Mesh>' : '' %>)<%- data.typescript ?': void' : '' %> {
    this.instance.material.diffuseColor = this._color.setFrom255(
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255,
    )
  }
  onPointerExit(ev<%- data.typescript ? ': TinoeEvent<Mesh>' : '' %>)<%- data.typescript ?': void' : '' %> {
    this.instance.material.diffuseColor = this._color.setFrom255(
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255,
    )
  }
  onPointerClick(ev<%- data.typescript ? ': TinoeEvent<Mesh>' : '' %>)<%- data.typescript ?': void' : '' %> {
    this.instance.material.diffuseColor = this._color.setFrom255(
      Math.random() * 255,
      Math.random() * 255,
      Math.random() * 255,
    )
  }
  onPointerDown(ev<%- data.typescript ? ': TinoeEvent<Mesh>' : '' %>)<%- data.typescript ?': void' : '' %> {
    if (ev.data && ev.data.pointers) {
      // 计算出按下点在裁剪空间的z值
      this.scene.activeCamera.world2Screen(this.instance.worldPosition, this._tmpVec3);
      this._zValue = this._tmpVec3.z;
      const { x, y } = ev.data.pointers[0].position;
      this._tmpVec3.set(x / CubeScript.width, y / CubeScript.height, this._zValue);
      // 转换到起始点的世界坐标
      this.scene.activeCamera.screen2World(this._tmpVec3, this._lastPosition);
    }
  }
  onPointerDrag(ev<%- data.typescript ? ': TinoeEvent<Mesh>' : '' %>)<%- data.typescript ?': void' : '' %> {
    if (ev.data && ev.data.pointers) {
        const { x, y } = ev.data.pointers[0].position;
        this._tmpVec3.set(x / CubeScript.width, y / CubeScript.height, this._zValue);
        // 转换到世界坐标
        this.scene.activeCamera.screen2World(this._tmpVec3, this._tmpVec3);
        // 计算出变换矩阵
        Vector3.subtract(this._tmpVec3, this._lastPosition, this._lastPosition);
        this.instance.localMatrix.translate(this._lastPosition);
        this.instance.overwriteLocalMatrix(this.instance.localMatrix);
        this._lastPosition.copy(this._tmpVec3);
      }
  }
}