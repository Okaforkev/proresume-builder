const nameInput = document.getElementById("name");
const jobInput = document.getElementById("job");
const summaryInput = document.getElementById("summary");

const preview = document.getElementById("preview");
const downloadBtn = document.getElementById("downloadBtn");

const pName = document.getElementById("pName");
const pJob = document.getElementById("pJob");
const pSummary = document.getElementById("pSummary");

let started = false;

function startResume() {
  if (!started) {
    preview.style.display = "block";
    downloadBtn.style.display = "block";
    started = true;
  }

  pName.textContent = nameInput.value;
  pJob.textContent = jobInput.value;
  pSummary.textContent = summaryInput.value;
}

nameInput.addEventListener("input", startResume);
jobInput.addEventListener("input", startResume);
summaryInput.addEventListener("input", startResume);

downloadBtn.addEventListener("click", () => {
  html2pdf()
    .set({
      margin: 0.5,
      filename: "ProResume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    })
    .from(preview)
    .save();
});
