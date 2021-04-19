# Get Started

* Install Docker and Docker-Compose.
* Run `docker-compose up` anywhere inside the project.
* Changing code inside the src directory will restart the `nodemon` service and your code will be ready to run.

# Configuration

* The docker-compose file references the relevant `.env` files you'll need to pass environment variables in to the applications.

# Components

* The SAML-CLIENT project exists as a test harness for developing the SAML integration tier.
* The Redis (local) installation is here so we can build our workflows to accomodate auth flows across different deployments of the application behind load balancing.
* The `src` directory contains the nodeJS SAML client base code.
