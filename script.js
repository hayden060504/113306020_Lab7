let recordCount = 0; // Counter for record numbering

document.getElementById('submitBtn').addEventListener('click', () => {
    const mathGrade = parseFloat(document.getElementById('mathGrade').value);
    const englishGrade = parseFloat(document.getElementById('englishGrade').value);

    if (!isNaN(mathGrade) && !isNaN(englishGrade)) {
        recordCount++; // Increment the record counter
        const average = ((mathGrade + englishGrade) / 2).toFixed(2);

        // Add new row to the table
        const tableBody = document.querySelector('#gradesTable tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${recordCount}</td>
            <td>${mathGrade}</td>
            <td>${englishGrade}</td>
            <td>${average}</td>
        `;
        tableBody.appendChild(newRow);

        updateFooter();
    } else {
        alert('Please enter valid numeric grades!');
    }

    // Clear input fields
    document.getElementById('mathGrade').value = '';
    document.getElementById('englishGrade').value = '';
});

function updateFooter() {
    const tableRows = document.querySelectorAll('#gradesTable tbody tr');
    let mathTotal = 0;
    let englishTotal = 0;
    let overallTotal = 0;

    tableRows.forEach(row => {
        const cells = row.querySelectorAll('td');
        mathTotal += parseFloat(cells[1].textContent);
        englishTotal += parseFloat(cells[2].textContent);
        overallTotal += parseFloat(cells[3].textContent);
    });

    const rowCount = tableRows.length;
    document.getElementById('mathAvg').textContent = (mathTotal / rowCount).toFixed(2);
    document.getElementById('englishAvg').textContent = (englishTotal / rowCount).toFixed(2);
    document.getElementById('overallAvg').textContent = (overallTotal / rowCount).toFixed(2);
}
