function addEntry() {
  const study = document.getElementById("study").value;
  const sleep = document.getElementById("sleep").value;

  const li = document.createElement("li");
  li.innerText = `Study: ${study}h | Sleep: ${sleep}h`;

  document.getElementById("list").appendChild(li);
}
