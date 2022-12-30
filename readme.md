# Interview helper
Initially this project was created to fresh up my programming skills. So far I don't know where it can land.

## Idea
Create web application that allows you to create set of questions, specify interview date and help you to track your progress throughout the preparation.

Based on interview date and number of complete questions application is going to calculate desired amount of questions you need to learn every day.

The app also has a progress bar which allows you to have an idea of your progress in a visual shape.

### Used tools
- React.JS
- Webpack
- Node.JS (in progress)
- MaterialUI (in progress)

## Flow

### 1. Create your interview (todo)
Questions requirements:
 - must be categorized
 - should not contain answers (may be implemented in future though)

In first implementation I'm going to use a text file to create questions data JSON. Requirements to the file is up to go.

### 2. Pick topic and question to record your progress
After your questions are submitted to the app, you will land on main page with the list of topics in the middle and opportunity to pick the topic to start with.

After you picked a topic, corresponding grid of questions are displayed on the center of a screen.

After you can pick a question and save the state of completeness of this question.

![prototype of design](./design/Question%20View.jpg)

## Ideas to implement/consider
- Quiz mode - get number of random questions and ensure your knowledge
- random button - add random button at the end of questions grid view

## Material UI components that I will need
- [Tabs](https://mui.com/material-ui/react-tabs/) for displaying topics navigation
- [Menu](https://mui.com/material-ui/react-menu/) for accessing actions on question card
- [Date Picker](https://mui.com/x/react-date-pickers/getting-started/) for picking a target date
- [Progress](https://mui.com/joy-ui/react-linear-progress/#main-content) for showing the progress at right top corner
- [Card](https://mui.com/joy-ui/react-card/) for question card