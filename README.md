<br />
<p align="center">

  <h3 align="center">PeWorld Hirejob</h3>
  <p align="center">
    <image align="center" width="200" src='./public/hirejob_logo.png' />
  </p>
  <p align="center">
    <a href="https://hirejob-rhefrz.vercel.app">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Project Structure](#project-structure)
  * [Screenshots](#screenshots)
  * [Package Modules](#package-modules)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Contributing](#contributing)
* [Related Project](#related-project)



<!-- ABOUT THE PROJECT -->
## About The Project


Hirejob is an application for job seekers and post their professional background such as job experience and portfolio. There are 2 types of users: Workers and Recruiters. Workers are able to post their job Experience and Portfolio on their profile, and Recruiters may contact any Workers for further hiring information.


### Project Structure
```
|── HirejobAPP
   |── components          # Application components
   |── HOC                 # Higher Order Components
   |── pages               # Pages source code
   |── public              # Public assets
   |── screenshot          # Screenshots of the application
   |── styles              # CSS source code
   |── .env                # Environment variables
   |── .gitignore          # Files that should be ignored
   |── next.config.js      # Next configuration file
   |── README.md           # Readme
```

### Screenshots
<details>
  <summary>
    Login Page
  </summary>
<img src="/screenshot/login.png" alt="login" />
</details>

<details>
  <summary>
    User Login Page
  </summary>
<img src="/screenshot/login_pekerja.png" alt="login user" />
</details>

<details>
  <summary>
    Worker Register Page
  </summary>
<img src="/screenshot/register_pekerja.png" alt="worker register" />
</details>

<details>
  <summary>
    Recruiter Register Page
  </summary>
<img src="/screenshot/register_perekrut.png" alt="recruiter register" />
</details>

<details>
  <summary>
    Landing Page
  </summary>
<img src="/screenshot/landing.png" alt="landing" />
</details>

<details>
  <summary>
    Worker Search Page
  </summary>
<img src="/screenshot/search_pekerja.png" alt="search worker" />
</details>

<details>
  <summary>
    Worker Portfolio
  </summary>
<img src="/screenshot/portofolio.png" alt="portfolio" />
</details>

<details>
  <summary>
    Worker Job Experience
  </summary>
<img src="/screenshot/pengalaman.png" alt="job experience" />
</details>

<details>
  <summary>
    Hiring Page
  </summary>
<img src="/screenshot/hiring.png" alt="hiring" />
</details>

<details>
  <summary>
    Worker Profile
  </summary>
<img src="/screenshot/profil_pekerja.png" alt="worker profile" />
</details>

<details>
  <summary>
    Recruiter Profile
  </summary>
<img src="/screenshot/profil_perekrut.png" alt="recruiter profile" />
</details>

### Package Modules

Below are lists of modules used in this application:

* [Next JS](https://nextjs.org/)
* [React JS](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com/)
* [Axios](https://axios-http.com/)
* [Reactstrap](https://reactstrap.github.io)
* [FontAwesome](https://fontawesome.com)


<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

This is an example of things you need to use the application and how to install them.

* [node.js](https://nodejs.org/en/download/)

### Installation

1. Clone the repo
```sh
git clone https://github.com/reijiren/HirejobAPP.git
```
2. Install NPM packages
```sh
npm install
```
3. Add .env file at your root folder project, and add the following
```sh
NEXT_PUBLIC_API_URL = your_api_url

```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b your/branch`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/yourbranch`)
5. Open a Pull Request


<!-- RELATED PROJECT -->
## Related Project
[Hirejob RESTful API](https://hirejob-rhefrz.up.railway.app) is used in this application.
* [View API Documentation](https://github.com/reijiren/HirejobAPI)
