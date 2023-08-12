import removeNodeListener from "./listeners/removeNode";
import selectNodeListener from "./listeners/selectNodeListener";
function attachEventListeners() {
  selectNodeListener();
  removeNodeListener();
}

export { attachEventListeners };
