import addValueListner from "./listeners/addValueListener";
import createTreeListener from "./listeners/createTreeListener";
import removeValueListener from "./listeners/removeValueListener";
import selectValueListener from "./listeners/selectValueListener";
function attachEventListeners() {
  selectValueListener();
  removeValueListener();
  addValueListner();
  createTreeListener();
}

export { attachEventListeners };
