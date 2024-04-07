# Ruffinweb Backend

Solo code review for deploying in a production AWS environment. 
There are still many features that need to be added, I'll add those when I have CI/CD set up with Github actions.
In each section I'll explain each of the changes I make and why each is needed.

## Table of Contents

- [Settings](#settings)
- [URLs](#URLs)
- [Views](#views)
- [Models](#models)
- [Serializers](#serializers)
- [Tests](#tests)
- [Authentication and Authorization](#authc-authz)
- [Third-Party Libraries](#third-party-libraries)
- [Documentation](#documentation)

## Settings

- Debug was set to false for production. This disables debug messages that reveal sensitive information about my project.
- Added my S3 bucket and ruffinweb.com which on my EC2 server to the allowed hosts.
- Added my S3 bucket and ruffinweb.com which on my EC2 server to the allowed CORS origins.
- Replaced the file based SQLite database with PostgresSQL.
- SMTP with gmail is used with an app password and SSL.
- I haven't set up robust logging or error handling mechanisms yet.

### Additional Changes

- Which settings need to be updated for the backend to work with whatever AWS service will be used for hosting? EC2?
- Add logging and error handling.
- Replace SQLite with PostgresSQL.

## URLs

- Add a landing page to direct special users to the appropriate API endpoint.
This is for cases where a user wants to integrate the backend with an external system or test the API.
- Added 404 and 505 error pages.
- Added an empty url pattern and index view to make selecting a specific API endpoint easier.

## Views

- Added basic error handling for any error. Replace the general Exception with exceptions for each specific error that may occur.
- Moved the email send_html_email to a utilities file.
- Added a views file to the main projects app for the error and index pages. 
- Revised the comments for the CreateMessageAPIView and SenderViewSet to better explain their function.

## Models

- No changes to be made. I decided to make my models simple and views more complex.
- I'm still researching the recommend way to protect user emails in the database. My application and the database itself
will be secure so encrypting the email addresses for example may not be necessary. 

### Serializers

- The frontend form needs a captcha to prevent misuse from bots.
- Edited the comment 

### Tests

- I'm an avid supporter of test driven development however this project has only been tested manually. 
After deployment, I'll add unit testing with Pytest and include it in my CI/CD process. 

## Middleware

- Test logging, error handling, and rate limiting could be useful additions. 
- I have cross-origin resource sharing (CORS) enabled with Django's built-in middleware.
- 

## Authc-Authz

- Authentication or Authorization could be used for the backend endpoints. 
This will discourage malicious and ensures each user uses only the resources I want. 
I use the ALLOWED_HOSTS setting to limit the hosts/domains names that the application and serve. This helps prevent HTTP host header attacks. 
The ALLOWED_ORIGINS and C settings 
- 

## Third-Party Libraries


## Documentation
