import { attachEventListeners } from "./dom/eventHandling";
import renderTree from "./dom/rendering/renderTree";
import "./style.css";
import tree from "./tree";

renderTree(tree);
attachEventListeners();
