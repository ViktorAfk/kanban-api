Back-end API implementation for github-kanban-test-task Developed with using REST standards of creating API.

Server is running onto https://kanban-api-mfy5.onrender.com/

Link on Client site: https://viktorafk.github.io/kanban-front-end/

Technologies I've used
Here I've used several technologies on my way to create & deploy simple API server:

Node.js;
TypeScript;
Express.js;
MongoDB;
Mongoose;
CORS lib for Express in case of denying default CORS policy of web browser;
ESLint, Husky on way to improve my own code style;
Nodemon, dotenv libs for simplify development process.
API instructions & endpoints
There are 7 different endpoints which used to serve data from DB to front-end App:

GET /todos/:boardID - returning all Todos from board with selected ID (integer value, bigger than 0);
POST /todos - creating a new Todo, write down all specified data onto DB and returning a new Todo instance (as well as REST API standards implementation);
DELETE /todos/:id - removing a Todo with selected ID;
PATCH /todos/:id - updating information about current Todo. 
How to use App
In dev mode:

npm start will run build command & use dist/server.js in Nodemon as well.
As usual practice of using back-end API servers, there is no need to run server manually. It deployed onto Render web-service and running in automatically mode.