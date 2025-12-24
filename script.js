const bind = (i,o)=>document.getElementById(i).oninput=e=>document.getElementById(o).textContent=e.target.value;

bind("name","pName");
bind("role","pRole");
bind("summary","pSummary");
bind("experience","pExperience");
bind("education","pEducation");
bind("email","pEmail");
bind("phone","pPhone");

skills.oninput = e => {
  pSkills.innerHTML="";
  e.target.value.split(",").forEach(s=>{
    pSkills.innerHTML += `<div class="bar"><span style="width:80%"></span></div>`;
  });
};

languages.oninput = e => {
  pLanguages.innerHTML="";
  e.target.value.split(",").forEach(l=>{
    const [name,level]=l.split(":");
    pLanguages.innerHTML += `
      <small>${name}</small>
      <div class="bar"><span style="width:${level}%"></span></div>`;
  });
};

photo.onchange=()=>pPhoto.src=URL.createObjectURL(photo.files[0]);

templateSelect.onchange=e=>cv.className="cv "+e.target.value;

function downloadPDF(){ window.print(); }

function generateSummary(){
  summary.value = "Motivated professional with strong communication skills, hands-on experience, and a results-driven mindset.";
  pSummary.textContent = summary.value;
}
