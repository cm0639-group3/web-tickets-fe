# Airflight ticket buying system FE
This FED repository is a workspace for building out the front-end of Airflight ticket buying system.

# Technical Stack
1. Frontend Framework - React 18.2.0
2. Local Development Server - Vite 5.0.0 
3. Typescript 5.2.2 
4. Software For Automation Of Deployment - Docker

# Getting Started
1. Install `nvm` if you haven't already (make sure to uninstall any instances of node first). 
This is a CLI wrapper over node that manages node versions installed on your machine.
   - run `nvm install 20.10.0`
   - run `nvm use 20.10.0`
2. Install globally `serve` package
    - run `npm install serve -g`
3. In the route folder run `npm install`
4. For development in the route folder run `npm run dev`
5. To build and run production version of project run scripts `build` and `serve`
   - run `npm run build`
   - run `npm run serve`

# Docker
1. There is a Dockerfile in the root folder, which is used to build the image and up the container. 
Install Docker if you haven't already.
2. To build an image, you need to run `docker build` in the root of the project.
   - run `docker build -t sa/web.tickets-fe:latest .` to create the image 
   - run `docker run -p 5173:5173 sa/web.tickets-fe:latest` to up the container
   
