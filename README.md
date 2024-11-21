# potential-spoon

# Introduction

This centralized application will allow us to capture, filter and search a comprehensive list of innovative project Ideas.  It will help employees research and verify unique ideas before creating new submissions to alleviate duplicate effort.  

#Benefits
The Innovation Station will provide value to several different user journeys and will allow us to cross utilize the same list across different teams.

- Our Project Managers will be able to use a dashboard to view details, progress and possibly add sponsorships to active projects.  
- Our Sales Managers will be able to cross reference current client interests which may allow them to fund partnership projects.  
- Our Hardline Managers will have access to see contributions made by their employees that can be used for utilization and end of year reporting.
- Our Employees will be able to use the tool to submit new ideas and also search for active internal projects that they can provide value while inbetween client engagements. Once they gain access to a project and complete an onboarding session, they will be able to pick up work from that project.    

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


## Run the project locally

```bash

# Make sure nodejs and npm are installed
npm install
npm run build
npm run preview

# Open http://localhost:4173 in your browser

```

## Run in Docker

```bash

cd source

TAG=0.1.0
IMAGE=inhouse

# single arch build
docker build --platform linux/amd64  --no-cache -t ${IMAGE}:${TAG} .

# multi arch build
docker buildx build --platform linux/arm64  --no-cache -t ${IMAGE}:${TAG} --load .
```

### Run app in docker
Run the below command to start the app in docker container

```bash
TAG=0.1.0
IMAGE=inhouse
docker run -d -p 3000:80 --name ${IMAGE} ${IMAGE}:${TAG}

```

Check docker container status by using

```bash 
docker ps
```