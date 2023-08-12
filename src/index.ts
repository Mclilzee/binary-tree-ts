import { attachEventListeners } from "./dom/eventHandling";
import renderTree from "./dom/renderTree";
import "./style.css";
import binaryTree from "./tree";

renderTree(binaryTree);
attachEventListeners();
