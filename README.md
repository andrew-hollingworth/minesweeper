# Project Pitch
Our project is designed to be the start of an online arcade. Users can login, earn high scores by playing their games, and view their own high scores, and view global high scores across the site. 

## Project Links

- [github repo]()
- [deployment]()

## Project Description
Our project is intended to be a proof of concept for a full suite of arcade games, but we will be building out a Minesweeper clone to start with. 

## Wireframes

![Wireframe]()

### MVP/PostMVP 

#### MVP
- A playable minesweeper clone that tracks high scores.
- A viewable high score table that displays the user's scores and global scores.
- Successful user login/authentication. 

#### PostMVP
- Add additional games
- 

## React Component Hierarchy

## Components 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the Header. It will hold the Login component and the Nav component| 
| Footer | This will render the footer, and include some contact info.| 
| Minesweeper | This will hold the game, and the individual Box components |
| Box | This will render out each individual box for the game. |
| HighScore Viewer | This will be a page to view the high scores on. This component will render side by side on desktop and on a separate page on mobile. |
| Table | This will render out the high score data. |
| About | This will be a simple about page. |




| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Initial File Structure | H | 2hrs|  |  |
| Setting up API Retrieval | H | 2hrs |  |  |
| Formatting API Data | H | 4hrs |  |  |
| Search Function | H | 3hrs | | |
| Basic Layout | H | 4 hrs | | |
| Formatting/tweaking Monster Data | H | 4 hrs | | |
| Getting Styling/Layout to a moderate level | H | 4 hrs | | |
| Alphabet Scrolling | M | 3 hrs | | |
| Random Monster on Load | M | 2 hrs | | |
| RNG Stats | L | 3 hrs | | |
| Favorite/Encounter builder | L | 4 hrs | | |
| Google Image Result | L| 4 hrs | | |
| Increased Searchability | L| 4 hrs | | |
| Total | H | 43hrs| |  |

## Additional Libraries
React
Express
Bcrypt
Nodemon

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
