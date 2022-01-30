const printArea = document.getElementById('cv');

const generatePDF = function (element) {
  const opt = {
    margin: 0,
    filename: 'aj-cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 4 },
    jsPDF: { format: 'a4', orientation: 'portrait' },
  };

  html2pdf(element, opt);
};

//generatePDF(printArea);
