# SCA-Cloud-School-Application

# SCA-Cloud-School-Application
  Creating a Dockerfile with Nodejs

### Running the project locally
- Fork this repository
- Clone to your local machine and navigate into the repository.
- Checkout to the branch `Start` from `main` branch

### Testing the Node Application
- Navigate into the docker folder
- Run `npm install && npm start` 
- Go to http://localhost:3000 to view welcome message


### Run Docker Image Start Branch
- Navigate into the root folder
- To build Docker image - Type  `docker build -t dockerstart .` 
- To run the Docker image - `docker run -p 3000:3000 -d dockerstart`
- On Docker desktop, click "view in browser" to view the welcome message.

### Run Docker Image Start Branch
- Checkout to start branch.
- Build Docker image - Type  `docker build -t docker-start .` 
- Run the Docker image - `docker run -p 3000:3000 -d docker-start`
- Click "view in browser" in Docker desktop, you should have the welcome message. "Welcome to SCA Cloud School Application , this is my first assessment"

### View Docker images and id
- Run `docker images`

### Push to docker repo
- Create a repo in docker hub, my repo 
- Run `docker tag image-id:yourhubusername/reponame:tag` 
- Run `docker push yourhubusername/reponame:tag`
- Did same for feature branch in the same repo


### Docker Hub Repo
hthttps://hub.docker.com/repository/docker/andra13/she-code-start1-image
 
