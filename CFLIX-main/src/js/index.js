
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY >= 1) {
        nav.classList.add('nav_black');
    } else {
        nav.classList.remove('nav_black');
    }
});


// Fetch movie data
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTEwZGZlNDFiYWZiNWNhNTYwYThkMDExMzRiY2Q1YSIsInN1YiI6IjY1ODFhYTg5MjI2YzU2MDgxOTllZjNiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OauOdAuGYhz1Hq2yAzex1yI1qsNErO_yyM6AEavU_Xo'
    }
};

// originalsection
fetch('https://api.themoviedb.org/3/list/8283900?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        const movies = response.items;
        const postersContainer = document.getElementById('netflixOriginalsPosters');

        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('row_poster');

            const posterImg = document.createElement('img');
            posterImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            posterImg.alt = movie.title;
            posterImg.classList.add('large');

            // Add a click event listener to the image
            posterImg.addEventListener('click', function() {
                // Open a new window with the movie title
                //window.open(`movie.html?title=${encodeURIComponent(movie.title)}`, '_blank');
                window.location.href = `movie.html?title=${encodeURIComponent(movie.title)}`;

            });

            movieDiv.appendChild(posterImg);
            postersContainer.appendChild(movieDiv);
        });
    })
    .catch(err => console.error(err));

// Fetch movie data for Gem for you
fetch('https://api.themoviedb.org/3/list/8299189?language=en-US&page=1', options) // Changed the list ID
    .then(response => response.json())
    .then(response => {
        const movies = response.items;
        const postersContainer = document.getElementById('allTimeFavPosters');

        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('row_poster');

            const posterImg = document.createElement('img');
            posterImg.src = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
            posterImg.alt = movie.title;
            posterImg.classList.add('small'); // Added 'row_poster' class here

            movieDiv.appendChild(posterImg);
            postersContainer.appendChild(movieDiv);

            posterImg.addEventListener('click', function() {
                window.location.href = `movie.html?title=${encodeURIComponent(movie.title)}`;
            });
        });
    })
    .catch(err => console.error(err));

// Fetch movie data for New Arrival
fetch('https://api.themoviedb.org/3/list/8299193?language=en-US&page=1', options) // Changed the list ID
    .then(response => response.json())
    .then(response => {
        const movies = response.items;
        const postersContainer = document.getElementById('newArrivals');

        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('row_poster');

            const posterImg = document.createElement('img');
            posterImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            posterImg.alt = movie.title;
            posterImg.classList.add('large'); // Added 'row_poster' class here

            movieDiv.appendChild(posterImg);
            postersContainer.appendChild(movieDiv);

            posterImg.addEventListener('click', function() {
                window.location.href = `movie.html?title=${encodeURIComponent(movie.title)}`;
            });
        });
    })
    .catch(err => console.error(err));

// Fetch movie data for All Time Favorites
fetch('https://api.themoviedb.org/3/list/8283919?language=en-US&page=1', options) // Changed the list ID
    .then(response => response.json())
    .then(response => {
        const movies = response.items;
        const postersContainer = document.getElementById('Popular');

        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('row_poster');

            const posterImg = document.createElement('img');
            posterImg.src = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
            posterImg.alt = movie.title;
            posterImg.classList.add('small'); // Added 'row_poster' class here

            movieDiv.appendChild(posterImg);
            postersContainer.appendChild(movieDiv);

            posterImg.addEventListener('click', function() {
                window.location.href = `movie.html?title=${encodeURIComponent(movie.title)}`;
            });
        });
    })
    .catch(err => console.error(err));

// Fetch movie data for EngDrama
fetch('https://api.themoviedb.org/3/list/8283921?language=en-US&page=1', options) // Changed the list ID
    .then(response => response.json())
    .then(response => {
        const movies = response.items;
        const postersContainer = document.getElementById('EngDrama');

        movies.forEach(movie => {
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('row_poster');

            const posterImg = document.createElement('img');
            posterImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            posterImg.alt = movie.title;
            posterImg.classList.add('large'); // Added 'row_poster' class here

            movieDiv.appendChild(posterImg);
            postersContainer.appendChild(movieDiv);

            posterImg.addEventListener('click', function() {
                window.location.href = `movie.html?title=${encodeURIComponent(movie.title)}`;
            });
        });
    })
    .catch(err => console.error(err));

    function searchMovies() {
    const query = document.getElementById('searchInput').value.trim(); // Trim whitespace
    const encodedQuery = encodeURIComponent(query);


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YTEwZGZlNDFiYWZiNWNhNTYwYThkMDExMzRiY2Q1YSIsInN1YiI6IjY1ODFhYTg5MjI2YzU2MDgxOTllZjNiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.OauOdAuGYhz1Hq2yAzex1yI1qsNErO_yyM6AEavU_Xo' // Replace with your actual token
        }
    };

    if (query.length === 0) {
        // If the search input is empty, clear the results
        document.getElementById('searchResults').innerHTML = '';
        return;
    }

    fetch(`https://api.themoviedb.org/3/search/movie?query=${encodedQuery}&include_adult=false&language=en-US&page=1`, options)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.results);
        })
        .catch(err => console.error(err));
}

function displayMovies(movies) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; 

    movies.forEach(movie => {
        if (movie.poster_path !== null) { // Check if poster_path is not null
            const movieDiv = document.createElement('div');
            movieDiv.classList.add('row_poster');

            const posterImg = document.createElement('img');
            posterImg.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
            posterImg.alt = movie.title;
            posterImg.classList.add('large');

            movieDiv.appendChild(posterImg);
            resultsContainer.appendChild(movieDiv);

            posterImg.addEventListener('click', function() {
                // Open a new window with the movie title
                if (movie.title === "Jigarthanda DoubleX") {
                    movie.title = "Jigarthanda Double X";
                }
                window.location.href = `movie.html?title=${encodeURIComponent(movie.title)}`;
            });
        }
    });
}
