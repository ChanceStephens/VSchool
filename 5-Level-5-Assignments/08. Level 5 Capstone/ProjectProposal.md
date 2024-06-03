[Proposal] 
### IDEA PARAGRAPH ###
This app will cater to VSchool students. One of my biggest struggles with online school is staying on task. I couldn't see "the light at the end of the tunnel." Once I reached level 3 in VSchool, I became overwhelmed by the number of story points I had to work through, which is discouraging when you can't see the end. By the time I reached Level 4, I set a deadline for myself to finish Stage 1. I used a spreadsheet, set my end date, counted the days until then, and created formulas to determine whether I was ahead or behind on points. Then, I used those calculations to figure out my progress relative to the schedule.

Breaking down the story points into smaller, more manageable portions helped me achieve a better work-life balance. If I was ahead, I could take a "me" day or spend time with family to reward myself for my hard work. If I fell behind, I reached out for help more often to ensure I stayed on track. Essentially, by creating this spreadsheet, I've managed to stay on track to finish by my end date through levels 4 and 5.

Simply put, this app will be a straightforward calculator allowing students to enter their preferred end date. It will then calculate the days remaining until the end date and break down each day into the number of story points needed to stay on track.

### MVP ###

For the minimal viable product (MVP) of the app, I'll focus on essential features to keep it simple yet functional. This is a breakdown:

User Interface (UI):
A fun interface with few design elements.
Input fields for users to enter their preferred end date.
Display area to show the calculated days remaining and the number of story points needed each day to stay on track.

Functionality:
Input validation to ensure the user enters a valid date format.
Calculation of days remaining until the end date and the corresponding number of story points needed each day to stay on track.
Ability to store user data using an API for rendering on the page and keeping track of their status.

Architecture:
Utilize High Order Components (HOC) for reusable logic.
Implement Context for managing global state, such as user data and settings.
Pass props to child components for rendering data and handling user interactions.

API Integration:
Set up endpoints for storing and retrieving user data.
Implement CRUD (Create, Read, Update, Delete) operations for managing user information.

Testing and Debugging:
Implement unit tests for critical functions and components.
Conduct thorough debugging to catch and fix any errors or issues.

By focusing on these core elements, I can create a minimal yet functional MVP for the app. As the app evolves, additional features and enhancements can be added.

### USER STORY ###

As a VSchool student, I want to track my progress and stay on schedule with completing my coursework, so that I can manage my time effectively and achieve my academic goals.

1. As a user, I can access the app's interface.

2. Upon opening the app, I am prompted to input my preferred end date for completing my current level of coursework.

3. The app validates the entered date format to ensure accuracy.

4. After submitting my end date, the app calculates the number of days remaining until that date.

5. The app then breaks down the remaining days into the number of story points I need to complete each day to stay on track.

6. I can view this information displayed clearly on the app's interface.

7. The app securely stores my inputted end date and progress data using an API.

8. If I need to adjust my end date or update my progress, I can do so within the app, and the changes are reflected in real-time.

The app provides a seamless user experience, with fun design elements and intuitive navigation.

### MIND MAP ###

# Frontend:
- Clean and intuitive design for easy navigation.

* Input End Date:
- Prompt users to input their preferred end date for completing their current level of coursework.
- Validate the entered date format for accuracy.

* Calculate Remaining Days:
- Calculate the number of days remaining until the inputted end date.
- Display the remaining days prominently on the interface.

* Breakdown of Story Points:
- Divide the remaining days into the number of story points needed to complete each day to stay on track.
- Clearly display this breakdown on the interface for easy reference.

# Backend
* Data Storage and Management:
- Store user inputted end date and progress data using an API.
- Enable users to adjust their end date or update their progress within the app.
- Ensure real-time updates reflect changes made by the user.

* Component Structure 
- will have approx 2 to 3 levels to reduce redundancy.
- Routers to navigate the minimal pages the App will contain making access easily navagatible.

* APIs 
- I will implement my own API to store user's data
- I will add 2 to 3 third party API's that contain "Quotes of the day" and other data for inspiration

* MODEL
- There will be 1 Model for 1 database (unless I see it neccessary to have more than 1)
- Data model will consist of data such as Start Date, End Date, etc.

* SERVER
- Will integrate Express, Mongoose, and Morgan
- Create routes to connect to Mongo DB




