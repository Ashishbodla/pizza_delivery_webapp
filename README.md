# pizza_delivery_webapp
Online Pizza ordering and delivery website using Node.js, Express.js, Bootstrap and MongoDB

Steps to install the code and to run the code


Step 1: Install Visual Basics

Step 2: Install Git Hub 

Step 3: Clone the repository from the GitHub 
(git pull  to pull the code) 
(git push  to push the code)

Step 4: Create necessary branches to commit the code 
(git branch -b branch name)

Step 5: Create development branch apart from the master branch to update the code on daily basis to update the issues or fixes

Step 6: Install MongoDB Compass to define the databases

Step 7: Open the terminal and type in the commands to install necessary libraries 

Step 8: Enter  npm init and then click enter until the terminal asks for entry point 

Step 9: Enter server.js when asked for entry point and then click enter until asked is this ok?

Step 10: Enter yes command when asked for Is this ok?  Yes

Step 11: package.json file is created in the IDE 

Step 12: In order to save these dependencies inside the json file  Enter npm - -s

Step 13: Enter npm i express@4.16.4  Enter

Step 14: Enter npm i mongoose@5.3.4  Enter

Step 15: Enter npm i express-handlebars@3.0.0   Enter

Step 16: Enter npm i body-parser@1.18.3  Enter and npm i multer  Enter

Step 17: Now check in the pacakage. json whether all the dependencies are updated

Step 18:  Now to start the server enter  ‘mongo’ command in terminal

Step 19: Now open the MongoDB Compass that is installed previously 


Step 20: Click on the database that needs to be connected

Step 21: And then go to the directory in the visual studio terminal and enter  nodemon server.js

Step 22: Now use the localhost/port to display the website 

Step 23: Enter the required details and check the database in MongoDB  Details are stored


Environment’s used  IDE – Atom, Visual Basics, Terminal.

Steps to Deploy the web app in Docker

Step 1: Install docker application from the official website

Step 2: Run the docker application

Step 3: Go to the visual studio terminal and check if the docker is installed by checking the version. Run ‘docker version’ in visual basic terminal

Step 4: Enter the command ‘docker build -t <your username>/node-web-app .’   Enter

Step 5: check if the image is built by running ‘docker images’. Check for ‘node-web-app’  and ‘node’ in the list of images

Step 6: Run that image in the container using ‘docker run -p 8080:7500 -d <your username>/node-web-app’ . This will deploy the image in container. To check run ‘docker ps’ and find the image in container

Step 7: Now check if the web app is running on the container by using the URL ‘localhost:8080/employee’ in the chrome browser

For more information : https://nodejs.org/en/docs/guides/nodejs-docker-webapp/, https://docs.docker.com/language/nodejs/build-images/ 
