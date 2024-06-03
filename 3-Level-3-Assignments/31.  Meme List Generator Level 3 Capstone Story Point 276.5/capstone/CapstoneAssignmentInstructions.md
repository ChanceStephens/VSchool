# Assignment   (8 Story Points Total)

Your group will make an app that satisfies the following user stories. It will be similar to what was completed in Scrimba, but will be done in VS Code and in a group using git:

- A user will see a meme image on page load
- A user can click "refresh meme image" to load a new one

## ( 2 Story Points:  Report as Progress Point 270.5)

- A user will see a form with two inputs and a submit button
- Inputs will be:
    - top text
    - bottom text
- A user will be able to see a preview of their meme

## ( 2 Story Points:  Report as Progress Point 272.5)

- A user will be able to add created memes to a list
- A user will be able to delete memes from the list

## ( 2 Story Points:  Report as Progress Point 274.5)

- A user will be able to edit an existing meme

## ( 2 Story Points:  Report as Progress Point 276.5)

Warning: The project will be maintained on github. It is suggested you read and watch everything in Resources before starting the project.

**Additional Tips:** 

1. Do not set the ID from the meme image as the ID for each created meme. This will cause issues if 2 or more memes use the same image. You can either use the index number from the meme list as the ID or use a [UUID generator package](https://www.npmjs.com/package/uuid)

Preform an HTTP request to "https://api.imgflip.com/get_memes" to get a list of memes.