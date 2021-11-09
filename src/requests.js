const API_KEY = "6a7c39f875322e12549e43b81e1d527d";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRated:`/movies/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`discover/movies?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`discover/movies?api_key=${API_KEY}&with_genres=35`,
    fetchHorroMovies:`discover/movies?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`discover/movies?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:`discover/movies?api_key=${API_KEY}&with_genres=28`
}

export default requests;