const bind = (id, target) => {
  document.getElementById(id).oninput = e =>
    document.getElementById(target).textContent = e.target.value;
};

bind("name","pName");
bind("role","pRole");
bind("summary","pSummary");
bind("experience","pExperience");

skills.oninput = e => {
  pSkills.innerHTML="";
  e.target.value.split(",").forEach(s=>{
    const li=document.createElement("li");
    li.textContent=s.trim();
    pSkills.appendChild(li);
  });
};

photo.onchange = () => {
  const f=photo.files[0];
  if(f) pPhoto.src=URL.createObjectURL(f);
};

templateSelect.onchange = e => {
  cv.className = "cv " + e.target.value;
};

function downloadPDF() {
  window.print();
}

/* AI SUMMARY (LOCAL, NO API) */
function generateSummary() {
  const role = roleInput.value || "professional";
  summary.value =
    `Motivated ${role} with strong problem-solving skills, hands-on experience, and a passion for delivering high-quality results in fast-paced environments.`;
  pSummary.textContent = summary.value;
}
