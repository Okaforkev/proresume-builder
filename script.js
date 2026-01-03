const $ = id => document.getElementById(id);

/* BASIC BINDINGS */
$("name").oninput = e => $("pName").textContent = e.target.value;
$("role").oninput = e => $("pRole").textContent = e.target.value;
$("location").oninput = e => $("pLocation").textContent = e.target.value;
$("email").oninput = e => $("pEmail").textContent = e.target.value;
$("phone").oninput = e => $("pPhone").textContent = e.target.value;

/* EDUCATION */
$("education").oninput = e =>
  $("pEducation").innerHTML = e.target.value.replace(/\n/g,"<br>");

/* EXPERIENCE (OPTIONAL) */
$("experience").oninput = e => {
  if (!e.target.value.trim()) {
    $("experienceSection").style.display = "none";
  } else {
    $("experienceSection").style.display = "block";
    $("pExperience").innerHTML = e.target.value.replace(/\n/g,"<br>");
  }
};

/* SKILLS */
$("skills").oninput = e => {
  $("pSkills").innerHTML = "";
  e.target.value.split(",").forEach(skill => {
    $("pSkills").innerHTML += `
      <div class="bar"><span style="width:80%"></span></div>`;
  });
};

/* PHOTO UPLOAD (FIXED & BUG-FREE) */
$("photo").onchange = e => {
  const file = e.target.files[0];
  if (!file) return;

  const url = URL.createObjectURL(file);

  /* Upload circle (cropped via CSS background) */
  $("avatar").style.backgroundImage = `url(${url})`;
  $("avatar").classList.add("has-image");

  /* Resume preview photo */
  $("pPhoto").src = url;
};


/* TEMPLATE SWITCH */
$("templateSelect").onchange = e =>
  $("cv").className = "cv " + e.target.value;

/* PRINT */
function downloadPDF() { window.print(); }

/* JOB-SPECIFIC AI SUMMARY */
$("aiBtn").onclick = () => {
  const role = $("role").value.toLowerCase();
  let summary = "";

  if (role.includes("engineer")) {
    summary = "Results-driven software engineer with strong problem-solving skills, hands-on experience building scalable applications, and a passion for clean, efficient code.";
  } else if (role.includes("designer")) {
    summary = "Creative designer with a strong eye for detail, experience crafting user-centered designs, and the ability to translate ideas into visually compelling solutions.";
  } else if (role.includes("manager")) {
    summary = "Strategic manager with proven leadership skills, experience driving team performance, and a track record of delivering results in fast-paced environments.";
  } else {
    summary = "Motivated professional with strong communication skills, adaptability, and a results-oriented mindset focused on delivering high-quality outcomes.";
  }

  $("summary").value = summary;
  $("pSummary").textContent = summary;
};

