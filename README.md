# Take Home Project

## Dependencies

To run the project it is necessary to have docker installed.

## Running

```sh
$ > git clone https://github.com/nicolaseguez/jobs-app.git
$ > cd jobs-app
$ > docker-compose up
```

When finished go to `http://localhost:8000`.

## Notes

* There is an adminer image to verify that the requests are being properly saved.
* Uses nodemon in docker just as a convenience.
* Uses a default **nginx** setup to serve the frontend.
* Git api has a form of pagination, but it wasn't required in this project.