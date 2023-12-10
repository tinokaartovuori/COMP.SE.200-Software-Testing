# COMP.SE.200-Software-Testing

## Quick Setup Guide

This guide will help you get started with the project using Docker and a Git submodule. Here are the steps:

1. **Clone the Repository:**

    - Clone this repository to your local machine with the following command:

        ```bash
        git clone git@github.com:tinokaartovuori/COMP.SE.200-Software-Testing.git
        ```

1. **Set Up Docker:**

    - Ensure Docker is installed on your machine. If not, install it from [Docker's official website](https://www.docker.com/get-started).
    - Build the Docker container for the project. This will set up the environment with the correct version of Node.js and other dependencies.

        ```bash
        npm run build
        ```

        This needs to be run in the project root, not in Docker. Note that this command needs to be executed if new dependencies are installed.

    - After building run the Docker container:

        ```bash
        npm run start
        ```

        This will execute the tests automatically and shut down the container.

Remember, using Docker ensures that your development environment matches that of the project, regardless of your local machine setup.
