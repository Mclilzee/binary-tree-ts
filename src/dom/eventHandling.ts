import addValueListner from "./listeners/addValueListener";
import removeValueListener from "./listeners/removeValueListener";
import selectValueListener from "./listeners/selectValueListener";
function attachEventListeners() {
  selectValueListener();
  removeValueListener();
  addValueListner();
}

export { attachEventListeners };
