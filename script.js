function generateEdgeInputs() {
  const nodeCount = parseInt(document.getElementById("nodeCount").value);
  const edgeInputs = document.getElementById("edgeInputs");
  edgeInputs.innerHTML = "";

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < nodeCount; i++) {
    for (let j = i + 1; j < nodeCount; j++) {
      const container = document.createElement("div");
      container.className = "flex items-center gap-4";

      const label = document.createElement("span");
      label.className = "w-24";
      label.textContent = `Edge ${i} → ${j}:`;

      const input = document.createElement("input");
      input.type = "number";
      input.min = "0";
      input.placeholder = "Weight";
      input.className = "flex-1 p-2 border rounded";
      input.setAttribute("data-edge", `${i}-${j}`);

      container.appendChild(label);
      container.appendChild(input);
      fragment.appendChild(container);
    }
  }

  edgeInputs.appendChild(fragment);
  drawGraph(nodeCount, []);
}
