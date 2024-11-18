const limitInput = document.getElementById('limit-input');
const startButton = document.getElementById('start-btn');
const evenNumbersDiv = document.getElementById('even-numbers');
const oddNumbersDiv = document.getElementById('odd-numbers') 

startButton.addEventListener('click', () => {
    const limit = parseInt(limitInput.value);

    // pastikan input adalah positif
    if (isNaN(limit) || limit <= 0) {
        alert('Please enter a positive number.');
        return;
    }

    // kosongkan tampilan sebelumnya
    evenNumbersDiv.textContent = 'even number: ';
    oddNumbersDiv.textContent ='odd numbers: ';

    for (let i = 1; i <= limit; i++){
        if (i % 2 === 0) {
            evenNumbersDiv.textContent += i + '';
        } else {
            oddNumbersDiv.textContent += i + '';
    }
}
})

function performSearch() {
    const query = document.getElementById('search-input').value;
    alert('Searching for: ' + query);
 
}

document.querySelector('.dropbtn').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        const dropdownContent = document.querySelector('.dropdown-content');
        if (dropdownContent.style.display === 'block') {
            dropdownContent.style.display = 'none';
        }
    }
}
