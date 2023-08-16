const binaryTreeContainer = document.querySelector(".binary-tree-container") as HTMLDivElement;
const removeButton = document.querySelector(".remove-button") as HTMLDivElement;
const addValueForm = document.querySelector("form.add-new-value") as HTMLDivElement;
const createTreeForm = document.querySelector("form.create-tree") as HTMLFormElement;
const balanceButton = document.querySelector(".controls > .balance-button") as HTMLButtonElement;
const confirmDisclaimerButton = document.querySelector(".disclaimer-display > .box > .confirm") as HTMLButtonElement;
const disclaimerDisplay = document.querySelector(".disclaimer-display") as HTMLDivElement;
const linesContainer = document.querySelector(".lines-container") as HTMLDivElement;

export { binaryTreeContainer, removeButton, addValueForm, createTreeForm, balanceButton, confirmDisclaimerButton, disclaimerDisplay, linesContainer }
