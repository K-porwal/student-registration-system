## Scripts to Run

This is the frontend repo for the application Student Registration System .The corresponding backend repo is- \
https://github.com/K-porwal/registrationApi
In the project directory, you can run:

### `npm i`
Use this for installing dependencies

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

Please ensure you are running the backend on port 3001. You can do this using command- 
### `rails server -p 3001`

The entire application is hosted on Heroku platform.

Note:
1. Navigation is designed keeping in core the Home or the Main Page.
2. Retrieving a student information by id will open the Edit Student Information Page. One can choose to edit it or leave it aside.
3. For seeing changes, please check the Display all Students link present on Home page
4. Customized validation messages are added everywhere where possible.
5. Id field is auto-generated bt PostgreSQL which is the database used for this application.
6. Sort button sorts the records on the basis of Id field. On clicking Sort button once, it will sort according to ascending order of id and on clicking again, it will sort the records in descending order and so on.
