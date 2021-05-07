# Biodiversity
## Overview of the project
I had a dataset of the belly button survey which shows what kind of bacteria found in person's navel as well as their values.
The goal of the project was to create a webpage where volunteers can see the result of their test.

Dataset is stored in .json file. I used Bootstrap to create a webpage and JavaScript to fetch data, filter it and build plots using Plotly library. 

## Results
I've created 4 functions:
- ```init()``` that gets data from .json file and builds a selector with options to choose;
- ```buildMetadata()``` which builds table "Demographic Info" with metadata of the person (id, gender, age, location and etc.)
- ```buildCharts()``` that builds charts: 
     - horizontal bar chart for top 10 bacteria found
     - bubble chart to show types and values of bacterias found
     - gauge chart for belly button washing frequency
- ```optionChanged()``` which tracks the option change and call ```buildMetadata()``` and ```buildCharts()``` functions

The most challenging part was to customize charts to make them attractive:

![](https://github.com/angkohtenko/Biodiversity/blob/main/images/Screenshot_webpage.png?raw=true)

Now, volunteers can select their id in the left upper field "Test Subject ID No", and all information related to the selected id will be displayed as well as all charts will be updated. Additional information about type of bacteria can be seen by hovering over the charts.

Test the webpage by [link](http://localhost:52330/GitHub/Biodiversity/index.html).
