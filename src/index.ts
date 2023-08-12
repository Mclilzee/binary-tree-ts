import { attachEventListeners } from "./dom/eventHandling";
import renderTree from "./dom/renderTree";
import "./style.css";
import tree from "./tree";

renderTree(tree);
attachEventListeners();
