const bind = (id, callback) =>
  document.getElementById(id).addEventListener("input", callback);

bind("name", e => pName.textContent = e.target.value);
bind("title", e => pTitle.textContent = e.target.value);
bind("summary", e => pSummary.textContent = e.target.value);
bind("email", e => pEmail.textContent = e.target.value);
bind("phone", e => pPhone.textContent = e.target.value);
bind("experience", e => pExperience.textContent = e.target.value);

bind("skills", e => {
  pSkills.innerHTML = "";
  e.target.value.split(",").forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill.trim();
    pSkills.appendChild(li);
  });
});

photo.addEventListener("change", () => {
  const file = photo.files[0];
  if (file) previewPhoto.src = URL.createObjectURL(file);
});
