import attachEventListeners from "./dom/eventHandling";
import drawLines from "./dom/rendering/drawLines";
import renderTree from "./dom/rendering/renderTree";
import "./style.css";
import tree from "./tree";

renderTree(tree);

window.onresize = drawLines;
attachEventListeners();
