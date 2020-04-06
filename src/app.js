// source goes here
import renderGridNumber from "./components/gridnumber";

const app = function () {
  console.log("hello from app!");

  document.addEventListener("DOMContentLoaded", (event) => {
    renderGridNumber();
  });
};

export default app;
