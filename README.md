# Face Recognition

An SPA that uses AI ([Clarafai's Face Detect Model](https://www.clarifai.com/models/ai-face-detection)) to predict faces in pictures that are submitted by users. Data is persisted by the [API server](https://github.com/Diogo-P-Carvalho/face-recognition-api) using a database that was created with postgreSQL.
<br>
<a href="https://github.com/Diogo-P-Carvalho/face-recognition-spa/blob/master/README.md"><strong>Explore the docs »</strong></a>

<a href="https://smartfacedetectionapp.herokuapp.com/">View Demo</a>
·
<a href="https://github.com/Diogo-P-Carvalho/face-recognition-spa/issues">Report Bug</a>
·
<a href="https://github.com/Diogo-P-Carvalho/face-recognition-spa/issues">Request Feature</a>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>    
    <li>
      <a href="#getting-started">Getting Started</a>      
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

#### Frontend

App created with [Clarifai API Face Detection Model](https://www.clarifai.com/models/ai-face-detection)

-   [React](https://reactjs.org/)
-   [Tachyons](https://tachyons.io/)
-   App hosted on [Heroku](https://www.heroku.com)

#### Backend

-   [Node.js](https://nodejs.org)
-   [Express](https://www.expressjs.com)
-   [PostgreSQL](https://www.postgresql.org)
-   Server, database hosted on [Heroku](https://www.heroku.com)

<!-- GETTING STARTED -->

## Getting Started

You must also clone the [API](https://github.com/Diogo-P-Carvalho/face-recognition-api) for this project and create an API key.
Run the server and this project on different localhost ports, and link them to communicate with each other.

1. Clone this repo, and the API
    ```sh
    git clone https://github.com/Diogo-P-Carvalho/face-recognition-spa.git
    ```
2. Get API key from [Clarifai](https://www.clarifai.com)
3. Install NPM packages
    ```sh
    npm install
    ```
4. Run npm start
    ```sh
    npm start
    ```

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/Diogo-P-Carvalho/face-recognition-spa/issues) for a list of proposed features (and known issues)

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!--CONTACT -->

## Contact

Diogo Carvalho - [Portfolio](https://diogo-p-carvalho.github.io/portfolio/) - [Linkedin](www.linkedin.com/in/diogo-carvalho-83a96a14a) - [@diogoOak](https://twitter.com/diogoOak)

<!-- ACKNOWLEDGMENTS -->

## Acknowledgements

-   [React](https://reactjs.org/)
-   [Tachyons](https://tachyons.io/)
-   [Heroku](https://www.heroku.com)
-   [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
