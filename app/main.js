const movies = [
    { title: 'Inception', rating: 5, year: 2010, director: 'Christopher Nolan' },
    { title: 'The Shawshank Redemption', rating: 9.3, year: 1994, director: 'Frank Darabont' },
    { title: 'The Dark Knight', rating: 9.0, year: 2008, director: 'Christopher Nolan' },
    { title: 'Pulp Fiction', rating: 8.9, year: 1994, director: 'Quentin Tarantino' },
];

const movieTableBody = document.getElementById('movieTableBody');
const modal = document.getElementById('myModal');
const confirmBtn = document.getElementById('confirmBtn');
const cancelBtn = document.getElementById('cancelBtn');

function renderMovies() {
    movieTableBody.innerHTML = '';
    movies.forEach(movie => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.year}</td>
                <td>${movie.rating}</td>
                <td>${movie.director}</td>
                <td><button class="buyBtn">Купить</button></td>
            `;
        movieTableBody.appendChild(tr);
    });
}

function showModal() {
    modal.style.display = 'block';
}

function hideModal() {
    modal.style.display = 'none';
}

function buyTicket(event) {
    const button = event.target;
    const row = button.parentNode.parentNode;
    const index = row.rowIndex - 1; // Subtract 1 because of the header row
    const cell = row.cells[4];

    showModal();

    confirmBtn.onclick = function() {
        cell.classList.add('bought');
        button.style.display = 'none';
        hideModal();
    };

    cancelBtn.onclick = function() {
        hideModal();
    };
}

document.addEventListener('DOMContentLoaded', function() {
    renderMovies();

    const buyButtons = document.querySelectorAll('.buyBtn');
    buyButtons.forEach(button => {
        button.addEventListener('click', buyTicket);
    });
});