// selected number
let selectedNumber;

// get all 144 numbers
const allNumbers = [...Array(144).keys()].map((number) => number + 1);

export const isMultipleOfSelectdNumber = (number) => {
  return number % selectedNumber === 0;
};

// Get grid display
const getGridNumberList = () => {
  const gridNumberList = `
    <ul class='grid-number'>
    ${allNumbers
      .map((number) => {
        const isMultipleOf = isMultipleOfSelectdNumber(number);
        const numberClass = isMultipleOf ? "active" : "";
        return `<li class="${numberClass}" onClick="setSelectedNumber(${number}, ${isMultipleOf})">${number}</li>`;
      })
      .join("")}
    </ul>
  `;

  return gridNumberList;
};

// Render grid number
const renderGridNumber = () => {
  const rootElement = document.getElementById("grid-number");
  rootElement.innerHTML = getGridNumberList();
};

// On selecting each number in grid
window.setSelectedNumber = (number, isMultipleOf) => {
  if (!selectedNumber) {
    selectedNumber = number;
    renderGridNumber();
  } else if (isMultipleOf) {
    // Question does not say anything about what should happen if user click on unselected numbers while some of them are selected,
    // So that bit of requirement has not been worked on, so is missing in this test
    selectedNumber = 0;
    renderGridNumber();
  }
};

export default renderGridNumber;
