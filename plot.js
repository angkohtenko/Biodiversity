// five largest cities by growth
// var sortedCities = cityGrowths.sort((a, b) => b.Increase_from_2016 - a.Increase_from_2016);
// var topFiveCities = sortedCities.slice(0,5);
// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));

// var trace ={
//     x: topFiveCityNames,
//     y: topFiveCityGrowths,
//     type: "bar"
// };

// var data = [trace];

// var layout ={
//     title: "Most Rapidly Growing Cities",
//     xaxis: {title: "City"},
//     yaxis: {title: "Population Growth, 2016-2017"}
// };

// Plotly.newPlot("bar-plot", data, layout);




// seven largest cities by population
var sortedCities = cityGrowths.sort((a, b) => b.population - a.population);
var topSevenCities = sortedCities.slice(0,7);
var topSevenCityNames = topSevenCities.map(city => city.City);
var topSevenCityPopulation = topSevenCities.map(city => parseInt(city.population));

var trace ={
    x: topSevenCityNames,
    y: topSevenCityPopulation,
    type: "bar"
};

var data = [trace];

var layout ={
    title: "The biggest cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population"}
};

Plotly.newPlot("bar-plot", data, layout);