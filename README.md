# Ruffinweb

This project serves as the portfolio for Elijah Ruffin, showcasing his work as a full-stack developer. The backend consists of simple Message and Sender models for storing information submitted by users.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project is for displaying information about me as a full-stack developer. The current backend is very simple with Message and Sender models for storing information submitted by users. 

## Features

- Contact form
- Automatic email replies

## Technologies Used

- Django
- Django REST Framework (DRF)
- PostgreSQL

## Getting Started

To get started with this project locally, follow these steps:

### Prerequisites

Make sure you have the following prerequisites installed on your machine:

- Python 3.x
- pip (Python package installer)
- PostgreSQL

### Installation

BLOCK
1. Clone the repository to your local machine:

   ```bash
   git clone [<repository-url>](https://github.com/ruffinweb/Ruffinweb-Portfolio-Backend.git)
   ```
   
2. Navigate to the project directory:
   ```bash
   cd RuffinwebProject
   ```
   
3. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```
 
4. Install the project dependencies:
   ```bash
   pip install -r requirements.txt
   ```
   
5. Set up the PostgreSQL database:
   - Create a new PostgreSQL database for the project.
   - Update the database settings in `settings.py` with your PostgreSQL credentials.
   
6. Run database migrations:
   ```bash
   python manage.py migrate
   ```

7. Start the development server:
   ```bash
   python manage.py runserver
   ```

8. Open your web browser and navigate to [http://localhost:8000](http://localhost:8000) to access the application.

## Usage

Visit https://ruffinweb.com to view/use my website!

## API Documentation

API documentation will be available soon.

## Contributing

Feel free to submit a pull request or clone this repository for your own non-commercial application.

## License

This project is licensed under the Creative Commons Attribution-NonCommercial 4.0 International License. To view a copy of this license, visit http://creativecommons.org/licenses/by-nc/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.

Thank you for visiting my portfolio's repository. If you have any questions, feel free to contact me.
