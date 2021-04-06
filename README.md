# jace-demo-program
Demo vulnerable web application, demostrating Jace's capabilites

### Dependencies
To run locally with the start script, `./start.sh` you must have `node` installed

### Preparing to send to Jace
The start script must include installing all dependencies on the `ubunutu` base docker image. You can test it works from the provided test command. It recreates the enviroment in Jace. Once tested, package the entire directory by running `./tar_directory.sh`
