# Assignment:

## Problem Statement

1. Run the Sockshop project on your local machine using docker.
2. Write down 2-3 Integration tests for the sock shop project.
3. Run integration tests on docker-compose up

## Understanding I get from the Project:

1. It's an e-commerce platform which executes the order below $100.
2. `http://localhost:8080/catalogue` is an openapi uses mysql db for storing catalogue details
3. The user regestering to the e-commerce website has their details stored in mongo db.
4. The testing library to be used for Integration testing is `dredd`.

## Approches & Challanges

1. The setup of SockShop project has been done sucessfully.
   ![localmachine-setup]('imgs/localmachine-setup.png')
2. Setting Up a integration testing environment using dredd out of the system.
3. Build a docker compose
4. Challange:
   - Building the environment using command
     `sudo docker run -it -v $PWD:/api -w /api apiaryio/dredd dredd init --network host`
   - Connecting the integration testing evironment
