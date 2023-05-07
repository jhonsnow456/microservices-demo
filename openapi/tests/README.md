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
   ![localmachine-setup](https://user-images.githubusercontent.com/54764701/236599510-ba4e3373-747a-413c-844d-23cd694840bd.png)
2. Setting Up a integration testing environment using dredd out of the system. However used jest to test the same.
   ![test-img](https://user-images.githubusercontent.com/54764701/236673680-8d850045-cbe6-47e8-82c5-55e829264d63.png)
3. Build a docker compose
4. Challange:
   - Building the environment using command
     `sudo docker run -it -v $PWD:/api -w /api apiaryio/dredd dredd init --network host`
   - Connecting the integration testing evironment
