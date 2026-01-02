const PDFDocument = require('pdfkit');
const fs = require('fs');

async function createPDF() {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('random_demo.pdf'));
    doc.end();
}

createPDF();
