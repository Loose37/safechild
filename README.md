# safechild

Safechild
A peace of mind app

The aim of this app is twofold
For parents to feel less worried about their children after they send them to school 
For schools to provide them with a tool that will help them avoid tragic mistakes due to the human factor by providing a safety net effect. 

You can find a live demo here https://safechild.onrender.com


If you want to tinker with it after forking and cloning you will need to:


For development
1.npm i at top level
2.cd client && npm i 
3. npm run dev at top level for your server. should run on port 4000
4. cd client npm start to start the react client

For deployment
1.declare environmental variable "production"
1.declare your database key as DB_URL_PROD: your database url


The app needs a lot of work. Take your pick and start fixing

BUGS:
-login button needs to be clicked twice to redirect to the correct page.
-in the staff page, when there is no child selected it shows "undefined".

Features to be added:
-Currently it has 0 styling 😨
-Protected routing based on roles is not implemented. Currently the roles are "parent" or "staff".
-Add role "admin", page "Adminpage" and the functions to create new parents, staff or students. for students it needs to also allow for photo upload.
-Modify the database to include emergency contact details and make them available on request in staffPage.
-LOTS more features, calendars, WEBSOCKETS for liveupdates, auto msgs when child didn't make it to destination within timeframe.


