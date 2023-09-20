# Solar UI

## Features I chose to implement:

1. Display a graph of Energy produced during the month.
2. Present the current month as a bar chart and the previous month as a line chart.
3. Navigation of calendar months with previous and next buttons.
4. Displaying Total energy produced during the current and previous month.
5. Hover over a data point on a bar graph.

## Bootstrap/setup: (20 min)

- React with Vite.
- Typescript.
- Tailwind CSS.
- Material UI.
- Recharts for the graph.

## Folder structure:

Pretty straightforward with what I was thinking and would adapt as the application grows.

## Approach

### Generating and formatting: (20 min)

Data was the key as it defined the performance of the application. So, my first step was to generate the data and store it in a way that can be used in different components. For this, I created a custom React hook `useGetData` (not necessary to generate the data, a utility function would have worked, but I just wanted to create a custom hook mimicking a real-world scenario where we fetch data from an API).

### Application structure: (30 min)

With data in place, I switched to an Application structure with a basic layout with a header component creating pages followed by placeholder components.

### The main component for the coding challenge - is `pages/MonthEnergyProduced` (30 min)

The main business logic for this test is handled by this component.

1. Fetching data from the `useGetData` hook.
2. Initialize child components with data and current time (day, month, year).
3. Uses states to keep track of the change in a month and transmit that information of child components. For a bigger application, I would use Redux and/or Context API to keep track of changes in application states and distribute them to child components.

### The first feature displaying the graph (40 min)

1. I chose Recharts.js since it is written with React and simple enough to use and implement.
2. I utilized the `ComposedChart` component where I could display both bar and line charts at the same time.
3. First generated a Bar chart for current month energy produced.
4. Customized the `ComposedChart` to fit the requirement as closely as possible with the help of online documentation.

### Displaying the previous month's data as a line chart (20 min)

1. Added a switch component to toggle the display of data in the graph of current and previous months.
2. Since there are no other interactions involved by another component, I separated this component along with the graph. So only the graph gets re-rendered when the switch changes.

### Implemented a sticky component at the top to Navigate between calendar months with previous and next buttons (30 min)

1. When you click the previous or next arrow `IconButton`, the state is maintained in `MonthEnergyProduced` to reflect changes in the data for the graph and other components.
2. Change in the month also means a change in the year at the edge cases, so I have handled that as well.
3. Buttons are disabled in edge cases when there is no more precious data ('<' button) and for the current month ('>' button).

### Displaying the total energy produced for the current and previous month (20 min)

1. Implemented `CompareTotal` to display current and previous total values.
2. The key point was the unit conversion after adding all the data points, and I handled it with a utility function.

### Hovering over data points on the bar graph updates the calendar navigation component with a day of the month. (10 min)

## Left out feature

1. Hovering over the data point on the bar graph updates `CompareTotal` component with the data of a specific date of the month. I will have to implement a callback handle from the graph `onMouseEnter` and `onMouseLeave` and filter both current and previous for the date the user hovered and display the value. A simpler approach would be to use the payload data from the graph.
2. Expand the button to a bigger view of the graph. Based on the requirement if we need to display it as a modal or should it be of screen width? In my opinion, a modal with a bigger width would be good for a month of data.

Overall, I took about 4 hours and 30 minutes, including setup, reference lookup and implementation. This time would be less as I work on other features in the same application, since a lot goes into the initial bootstrap and structuring of the application.
