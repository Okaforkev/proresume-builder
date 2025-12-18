// ===== Live Preview =====
const fields = ['name', 'email', 'phone', 'education', 'experience', 'skills'];
fields.forEach(field => {
  document.getElementById(field).addEventListener('input', function() {
    if(field === 'skills') {
      const skillsList = this.value.split(',').map(s => s.trim()).filter(s => s);
      const ul = document.getElementById('previewSkills');
      ul.innerHTML = '';
      skillsList.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        ul.appendChild(li);
      });
    } else {
      document.getElementById('preview' + field.charAt(0).toUpperCase() + field.slice(1))
              .innerText = this.value || this.placeholder;

      // Update left column contact for Modern template
      if(field === 'email') document.getElementById('previewEmailLeft').innerText = this.value || this.placeholder;
      if(field === 'phone') document.getElementById('previewPhoneLeft').innerText = this.value || this.placeholder;
    }
  });
});

// ===== Start Building Button =====
document.getElementById('startBtn').addEventListener('click', function() {
  document.getElementById('builderSection').style.display = 'flex';
  this.style.display = 'none';
});

// ===== Dark Mode Toggle =====
const darkBtn = document.getElementById('darkModeToggle');
darkBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  darkBtn.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// ===== Template Switch =====
const templateSelect = document.getElementById('templateSelect');
const preview = document.getElementById('preview');
templateSelect.addEventListener('change', function() {
  preview.classList.remove('template1', 'template2', 'template3');
  preview.classList.add(this.value);
});

// ===== PDF Download =====
document.getElementById('downloadPDF').addEventListener('click', function() {
  html2canvas(preview).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'pt', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('resume.pdf');
  });
});
