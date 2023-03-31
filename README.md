# Belly Button Biodiversity

The purpose of this project was to demonstrate the abundance of biodiversity existant in the human navel. The study consisted of samples taken from 153 individuals. Cultures were grown from each individual's navel and the amount of bacteria as well as the identification of the bacteria were documented. Metadata about each individual, such as demographic information and navel wash frequency were also documented. These data were put into iteractive bar and bubble charts on a webpage, allowing the user to select which test subject to view from a dropdown menu. The demographic data for each test subject is also displayed along with the charts.

## Methods

- Inspect json data from the [data source](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json)
- Create an init function to populate the dropdown menu and isolate the first sample
- Create functions to build the bar chart, bubble chart, and to populate the demographic info box
- Create an optionChanged function that will be called in the HTML and will call the functions to build all of the visualization for each sample when the dropdown menu selection is changed
- Add the build functions to the init
- Call the init

## Results

The above methods produced the following results:

- A functional dropdown menu, showing each test subject as an option

![image](https://user-images.githubusercontent.com/118322354/229213642-334f65fd-34cb-4301-8252-866fc70349a0.png)

- A box displaying the metadata for the selected individual

![image](https://user-images.githubusercontent.com/118322354/229214013-6e7ae283-8272-4718-9d68-680866b25273.png)

- A bar chart displaying the top ten most numerous bacteria and their IDs for the individual

![image](https://user-images.githubusercontent.com/118322354/229214219-50c1aadf-e05a-4647-a664-2e683b54632a.png)

- A bubble chart displaying the number of each bacteria on the y-axis and the ID of the bacteria on the x-axis, with the bubbles sized by the number of bacteria, and colored by the bacteria ID number

![image](https://user-images.githubusercontent.com/118322354/229215932-e0dccff6-8ad5-4f68-b31a-52ff39761936.png)
