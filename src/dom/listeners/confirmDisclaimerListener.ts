import { disclaimerDisplay, confirmDisclaimerButton } from "../domElements";

function confirmDisclaimerListener() {
  confirmDisclaimerButton.addEventListener("click", () => {
    disclaimerDisplay.style.display = "none";
  })
}

export default confirmDisclaimerListener;
