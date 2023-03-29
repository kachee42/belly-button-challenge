// Read in json data
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(url).then(function(data) {
    
    console.log(data);
    init();
})

function init() {
    // get css selector for the dropdown menu
    let dropdown = d3.select("#selDataset");

    // get data
    d3.json(url).then(function(data) {
        names = data.names;
        
        // iterating over names and adding to dropdown menu
        for (let i = 0; i < names.length; i++) {
            dropdown
                .append("option")
                .text(names[i])
                .property("value", names[i])
        };

        // set default to first sample
        let firstSample = names[0];
        
        buildBarchart(firstSample);
        buildBubblechart(firstSample);
        buildMetadata(firstSample);
    })
};

function buildBarchart(sample) {
    // get data
    d3.json(url).then(function(data) {
        let samples = data.samples;

        // filter for the first id
        let resultArray = samples.filter(sampleObject => sampleObject.id == sample);
        
        // pull data out of the array
        let result = resultArray[0];

        // Get chart variables
        let otu_ids = result.otu_ids.slice(0, 10).reverse();
        let otu_labels = result.otu_labels.slice(0, 10).reverse();
        let sample_values = result.sample_values.slice(0, 10).reverse();

        // Create trace for chart
        let trace1 = {
            x: sample_values.map(object => object),
            y: otu_ids.map(object => `OTU ${object}`),
            text: otu_labels.map(object => object),
            type: "bar",
            orientation: "h"
        };

        // Create layout to change margins
        let layout = {
            margin: {
                t: 20
            }
        }

        // put data object into array
        let traceData = [trace1];

        // Plot the bar chart
        Plotly.newPlot("bar", traceData, layout);
})}

function buildBubblechart(sample) {
    // Get data
    d3.json(url).then(function(data) {
        
        // Create a variable to hold the sample data
        let samples = data.samples;

        // Filter the samples data to match the passed in parameter
        let resultArray = samples.filter(sampleObject => sampleObject.id == sample);

        // Pull data our of the array
        let result = resultArray[0];

        // Get chart variables
        let otu_ids = result.otu_ids;
        let sample_values = result.sample_values;
        let otu_labels = result.otu_labels;

        // Conditional to set colors


        // Create trace for chart
        let trace1 = {
            x: otu_ids.map(object => object),
            y: sample_values.map(object => object),
            mode: "markers",
            marker: {
                size: sample_values.map(object => object/1.5)
            },
            color: otu_ids.map(object => object),
            text: otu_labels.map(object => object)
        };
        
        // Create layout to hold 
        // put data object into an array
        let traceData = [trace1];

        // plot the bubble chart
        Plotly.newPlot("bubble", traceData);

    })
}

function buildMetadata(id) {
    // Get Data
    d3.json(url).then(function(data) {

        // Create variable to hold all metadata
        let metadata = data.metadata;

        // Filter metadata for the first id
        let resultMetadata = metadata.filter(sampleObject => sampleObject.id == id);

        // Pull data out of array
        let result = resultMetadata[0];

        // Put keys into array
        let labels = Object.keys(result);
        
        // Put values into array
        let values = Object.values(result)

        // Get CSS selector for the metadata section
        let dataBox = d3.select("#sample-metadata");
        
        // iterate over metadata and add to HTML
        for (let i = 0; i < result.length; i++) {
            dataBox
                .appendChild("h5")
                .text(labels[i], values[i]);
        }
    })
}

function optionChanged(newSample) {
    buildBarchart(newSample);
    buildBubblechart(newSample);
    buildMetadata(newSample);
}
init();