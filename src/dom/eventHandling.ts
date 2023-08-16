import addValueListner from "./listeners/addValueListener";
import balanceTreeListener from "./listeners/balanceTreeListener";
import createTreeListener from "./listeners/createTreeListener";
import removeValueListener from "./listeners/removeValueListener";
import selectValueListener from "./listeners/selectValueListener";

function attachEventListeners() {
  selectValueListener();
  removeValueListener();
  addValueListner();
  createTreeListener();
  balanceTreeListener();
}

export { attachEventListeners };
