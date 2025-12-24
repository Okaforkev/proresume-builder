const qs = id => document.getElementById(id);

startBtn.onclick = () => builder.classList.remove("hidden");

["name","title","summary","email","phone","experience"].forEach(id => {
  qs(id).oninput = e => qs("p"+id.charAt(0).toUpperCase()+id.slice(1)).textContent = e.target.value;
});

skills.oninput = e => {
  pSkills.innerHTML = "";
  e.target.value.split(",").forEach(s => {
    const li = document.createElement("li");
    li.textContent = s.trim();
    pSkills.appendChild(li);
  });
};

photo.onchange = () => {
  const file = photo.files[0];
  if (file) pPhoto.src = URL.createObjectURL(file);
};

function toggleTheme() {
  document.body.classList.toggle("dark");
}

function downloadPDF() {
  html2pdf().set({
    margin: 0,
    filename: "ProResume.pdf",
    html2canvas: { scale: 2 }
  }).from(cv).save();
}
