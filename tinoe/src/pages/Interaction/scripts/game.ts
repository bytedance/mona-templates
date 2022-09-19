import { Script<%- data.typescript ? ', TinoeEvent' : '' %>} from "tinoe";

export default class GameScript extends Script {
  onSwipeDown(ev<%- data.typescript ?': TinoeEvent<any>' : '' %>)<%- data.typescript ? ': void'  : '' %> {
    this.scene.background.setValue('#f00');
  }
  onSwipeLeft(ev<%- data.typescript ?': TinoeEvent<any>' : '' %>)<%- data.typescript ? ': void' : '' %> {
    this.scene.background.setValue('#0f0');
  }
  onSwipeRight(ev<%- data.typescript ?': TinoeEvent<any>' : '' %>)<%- data.typescript ? ': void' : '' %> {
    this.scene.background.setValue('#00f');
  }
  onSwipeUp(ev<%- data.typescript ?': TinoeEvent<any>' : '' %>)<%- data.typescript ? ': void' : '' %> {
    this.scene.background.setValue('#ff0');
  }
}