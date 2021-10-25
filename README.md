# API - Backend (NLW - Heat)

<p align="center">
  <a href="#-Technology">Technology</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Project">Documentation</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-Note">Note</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 🚀 Technology
<p align="center"> This project was developed with the following technologies </p>
<div align="center">
  <img style="margin: 10px" src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" alt="TypeScript" height="30" />  
  <img style="margin: 10px" src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" alt="NodeJS" height="30" />  
  <img style="margin: 10px" src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg" alt="express" height="30" />  
  <img style="margin: 10px" src="https://github.com/devicons/devicon/blob/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgres" height="30" />
  <img style="margin: 10px" src="https://github.com/devicons/devicon/blob/master/icons/docker/docker-original-wordmark.svg" alt="docker" height="30" />
</div>

## 💻 Project

This project was developed to serve as a REST API, consolidating application rules and validations.
The application aims to create users, authenticate them, and then enable them to send messages with their expectations about the DOWhile 2021 event.<br>
Your messages should also be recorded and available in real-time through a node library called <a href="https://github.com/socketio/socket.io">Socket.io</a> , bringing a better user experience on the event expectation wall.

For the architecture of the application a very famous concept called <b>DDD (Domain-Driven Design)</b> was used.<br>
Aiming at future scalability and scalability of the application, the rules of each class and each function were fundamentally separated and coupled to only have their domain responsibilities having their relationships with each other being done without hurting their business rules.<br>
Learn more: <a href="https://www.devmedia.com.br/introducao-ao-ddd-em-net/32724">DDD - Info</a> (PT-BR) - <a href="https://khalilstemmler.com/articles/domain-driven-design-intro/">DDD - Info</a> (EN)

The project was done in typescript language that is done at development time and once finished, a build of the application (JavaScript) is done. <br>
Typescript helps us and extends the concepts of scalability of the application, making us also have a clean architecture.


## Documentation

To use this application on your machine you must first check if you have the following technologies and their versions:

<img style="margin: 10px" src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original.svg" alt="NodeJS" height="15" /> Node version 13+ <br>
<img style="margin: 10px" src="https://github.com/devicons/devicon/blob/master/icons/docker/docker-original-wordmark.svg" alt="docker" height="15" /> Docker <br>

The docker is needed because an image of the postgres database has been made inside it. If you want to use another database <a href="https://www.prisma.io/docs/concepts/components/prisma-client/">see the documentation</a>

Well, come on, do a clone of this repository. Then, navigate to the folder where it was cloned (or if you have a code editor with integrated terminal, just open it) and type:

             npm start
                        
or 

             yarn
             
After that, just give the command: <b>yarn dev</b> or <b>npm run dev</b>

Notes:

- If you use yarn, make sure you have yarn installed
- If you want to mirror it and one day take it into production, remember to build the application and run the script pointing to /dist



## Note

- Application subject to future improvements and implementations
- Application was done at the  <a href="https://www.rocketseat.com.br/">Rocketseat</a> event, changing knowledge, and architectures on my
