let count = 0;
let totalStudy = 0;

function addEntry() {
  const study = Number(document.getElementById("study").value);
  const sleep = Number(document.getElementById("sleep").value);

  if (!study || !sleep) {
    alert("Enter valid values!");
    return;
  }

  const today = new Date().toLocaleDateString();

  const li = document.createElement("li");
  li.innerHTML = `📅 ${today} | 📚 ${study}h | 😴 ${sleep}h`;

  document.getElementById("list").appendChild(li);

  count++;
  totalStudy += study;

  document.getElementById("total").innerText =
    "Total Entries: " + count;

  document.getElementById("avg").innerText =
    "Avg Study: " + (totalStudy / count).toFixed(1) + "h";

  document.getElementById("study").value = "";
  document.getElementById("sleep").value = "";
}
let count = 0;
let totalStudy = 0;

function addEntry() {
  const studyInput = document.getElementById("study");
  const sleepInput = document.getElementById("sleep");

  const study = Number(studyInput.value);
  const sleep = Number(sleepInput.value);

  // validation
  if (!study || !sleep) {
    alert("Enter valid values!");
    return;
  }

  // create entry
  const li = document.createElement("li");

  const today = new Date().toLocaleDateString();

  li.innerHTML = `📅 ${today} | 📚 ${study}h | 😴 ${sleep}h`;

  document.getElementById("list").appendChild(li);

  // update stats
  count++;
  totalStudy += study;

  document.getElementById("total").innerText = count;

  document.getElementById("avg").innerText =
    (totalStudy / count).toFixed(1) + "h";

  // clear inputs
  studyInput.value = "";
  sleepInput.value = "";
}
