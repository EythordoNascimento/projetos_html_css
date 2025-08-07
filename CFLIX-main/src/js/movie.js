
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
   if (window.scrollY >= 1) {
       nav.classList.add('nav_black');
   } else {
       nav.classList.remove('nav_black');
   }
});
function changeImage() {
   var likeImage = document.querySelector('.facebook-like');
   var currentSrc = likeImage.src;

   if (currentSrc.includes('facebook-like')) {
       likeImage.src = 'img/like.png';
   } else {
       likeImage.src = 'img/facebook-like.png';
   }
}

function changehd() {
   var hdImage = document.querySelector('.HD');
   var current = hdImage.src;

   if (current.includes('hd')) {
       hdImage.src = 'img/720.png';
   } else {
       hdImage.src = 'img/hd.png';
   }
}

// Extract the movie title from the URL
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');

// Set the movie title on the page
document.getElementById('movieTitle').innerText = title;

// Fetch data from OMDB API
fetch(`https://www.omdbapi.com/?apikey=2aaa3017&t=${encodeURIComponent(title)}`)
   .then(response => response.json())
   .then(data => {
       // Display movie details
       const detailsDiv = document.getElementById('movieDetails');
       const posterImg = document.getElementById('moviePoster');

       // Set poster image
       posterImg.src = data.Poster;

       // Separate IMDb ID
       const imdbID = data.imdbID;
       const keysToShow = ['Year', 'Released', 'Runtime', 'Genre', 'Director', 'Writer', 'Actors', 'Plot', 'Language'];

       keysToShow.forEach(key => {
           if (data[key] && data[key] !== 'N/A') {
               const detail = document.createElement('p');
               detail.innerHTML = `<strong>${key}:</strong> ${data[key]}`;
               detailsDiv.appendChild(detail);
           }
       });
       
       const iframeSrc = `https://www.2embed.cc/embed/${imdbID}`;

       // Open the video popup
       const openPopupBtn = document.getElementById('openPopupBtn');
       const videoPopup = document.getElementById('videoPopup');
       const closeBtn = document.getElementsByClassName('close')[0];
       const videoFrame = document.getElementById('video-frame');

       openPopupBtn.onclick = function() {
           videoFrame.setAttribute('src', iframeSrc);
           videoPopup.style.display = 'block';
       }

       closeBtn.onclick = function() {
           videoPopup.style.display = 'none';
           videoFrame.setAttribute('src', '');
       }

       window.onclick = function(event) {
           if (event.target == videoPopup) {
               videoPopup.style.display = 'none';
               videoFrame.setAttribute('src', '');
           }
       }
   })
   .catch(error => {
       console.error('Error fetching data from OMDB:', error);
   });

   //search
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

