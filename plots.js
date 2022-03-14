// initial data
Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

// bar chart example
var trace = {
    x:["burrito","pizza","chicken"],
    y:[10,18,5],
    type:"bar"
};

var layout = {
    title:"Luncheon Survey",
    xaxis: {title:"Food Options"},
    yaxis: {title:"Number of Respondents"}
};
Plotly.newPlot("chartA",[trace],layout);

// popular beverages example
var trace = {
    x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
   };

   var data = [trace];

   var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
   };

   Plotly.newPlot("popularbev", data, layout);

//piechart example
var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
    };

   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
    };
Plotly.newPlot("piebevs", data, layout);