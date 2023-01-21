//1.1. Doubling of number
const numbers = [1, 2, 3, 4];

checkNumber = i => {
  return i % 2 !== 0
}
const filteredNumbers = numbers.filter(checkNumber);
doubleNumber = i => {
  return i * 2;
}
let newNumbers = filteredNumbers.map(doubleNumber);

//1.2. Working with movies

//-shortest movie names

const filtered = movies.filter( movie =>  movie.title.length < 2);
console.log(filtered[0].title, filtered[1].title, filtered[2].title);

const filteredTitles = "''" + filtered[0].title + "''" + "," + "''" + filtered[1].title + "''" + "," + "''" + filtered[2].title + "''";
document.getElementById("shortest").innerHTML = filteredTitles;

//-longest movie names
const filteredLong = movies.filter( movie =>  movie.title.length > 70);
const filteredLongTitles = "''" + filteredLong[0].title + "''" + "," + "''" + filteredLong[1].title + "''" + "," + "''" + filteredLong[2].title + "''";
document.getElementById("longest").innerHTML = filteredLongTitles;

//made between 1980-1989
const years = movies.filter( movie =>  movie.year >= 1980 && movie.year <= 1989);
//console.log(years);
const filteredYears = "''" + years[0].title + "''" + "," + "''" + years[1].title + "''" + "," + "''" + years[2].title + "''" + "''" + years[3].title + "''" + "," + "''" + years[4].title + "''" + "," + "''" + years[5].title +"''" + +"''" + years[6].title + "''" + "," + "''" + years[7].title + "''" + "," + "''" + years[8].title + "''" + "''" + years[9].title + "''" + "," + "''" + years[10].title + "''" + "," + "''" + years[11].title + "''" + years[12].title + "''" + "," + "''" + years[13].title + "''" + "," + "''" + years[14].title + "''" + "''" + years[15].title + "''" + "," + "''" + years[16].title + "''";
document.getElementById("years").innerHTML = filteredYears;


//4.Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

const taggedMovies = movies.map((movie) => {
  if (movie.rating >= 7) {
    movie.tag = "Good";
  }
  else if (movie.rating >= 4 && movie.rating < 7){
    movie.tag = "Average";
  }
  else {
    movie.tag = "Bad";
  }
});
console.log(taggedMovies);
document.getElementById("newTags").innerHTML = `
  <ol>
    ${taggedMovies}
  </ol>
`;

//5.Using chaining, first filter the movies array to only contain the movies rated higher than 6.
//Now map the movies array to only the rating of the movies.

let ratedMovies = movies.filter((movie) => movie.rating > 6).map(movie => movie.rating);
console.log(ratedMovies);
document.getElementById("ratedSix").innerHTML = `
  <ol>
    ${ratedMovies}
  </ol>
`;

//6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6.
//Can you make sure the search is case insensitive?

const totalMovies = movies.filter((movie) => {
  let title = movie["title"].toLowerCase()
  if (title.includes("surfer") || title.includes("alien") || title.includes("benjamin")) {
  return true
  }
}).length;
console.log(totalMovies);

//7. Create an array of movies where a word in the title is duplicated.
//Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
function duplicated(array) {
  const titleWithDuplicated = array.filter((movie) => {
    if (new Set(movie.title.toLowerCase().split(' ')).size !== (movie.title.toLowerCase().split(' ')).length) {
      return movie;
    }
  });
console.log(titleWithDuplicated);
}
duplicated(movies);
document.getElementById("duplicatedMovies").innerHTML = `
  <ol>
    ${titleWithDuplicated}
  </ol>
`;

//8. Calculate the average rating of all the movies using reduce. Optional

let totalMovieRating = movies.reduce((accumulator, movie) => accumulator + movie.rating, 0);
let averageRating = totalMovieRating / movies.length;
let toFixedRating = averageRating.toFixed(1);
console.log(averageRating.toFixed(1));
document.getElementById("averageRatingMovies").innerHTML = `
  <ol>
    ${toFixedRating}
  </ol>
`;

//9. Count the total number of Good, Average and Bad movies using reduce. A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123} Optional


let tags = movies.reduce((accumulator, movie) => {
  if (movie.tag === "Good") {
    accumulator.goodMovies++;
  } else if (movie.tag === "Average") {
    accumulato.averageMovies++;
  } else {
    accumulator.badMovies++;
  }
  return accumulator;
}, {goodMovies: 0, averageMovies: 0, badMovies: 0});
console.log(tags);
document.getElementById("totalNumber").innerHTML = `
  <ol>
    ${tags}
  </ol>
`;