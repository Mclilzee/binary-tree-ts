import addValueListner from "./listeners/addValue";
import removeNodeListener from "./listeners/removeNode";
import selectNodeListener from "./listeners/selectNodeListener";
function attachEventListeners() {
  selectNodeListener();
  removeNodeListener();
  addValueListner();
}

export { attachEventListeners };
