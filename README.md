# Machine Learning Model Serving with TypeScript and TensorFlow.js

## Project Description

This project serves a machine learning model using TensorFlow.js with TypeScript. It offers a REST API for real-time predictions on uploaded images. The application is containerized using Docker for easy deployment and scaling.

## Features

- **Model Serving**: Serves a pre-trained TensorFlow model for image classification.
- **REST API**: Provides endpoints to upload images and get real-time predictions.
- **Dockerized**: The entire application is containerized, making it easy to deploy.
- **Asynchronous Processing**: TypeScript's async/await handles inference jobs.

## Setup Instructions

### Prerequisites
- **Docker**: To run the application in containers.
- **Node.js**: Version 14 or later.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/the-real-jerry-tan/typescript-ml-model-serving.git
   cd typescript-ml-model-serving
   ```

2. Build and run the Docker container:
   ```bash
   cd docker
   docker build -t ts-ml-serving .
   docker run -p 3000:3000 ts-ml-serving
   ```

3. The REST API will be available at [http://localhost:3000/predict](http://localhost:3000/predict).

## Future Enhancements

- **Model Retraining**: Add support for retraining the model with new data.
- **Additional Models**: Extend to support multiple types of machine learning models.
- **Monitoring & Analytics**: Add real-time monitoring and logging for requests and predictions.

## Author

This project is maintained by [Jerry Tan](https://github.com/the-real-jerry-tan).

## License

© 2024 Jerry Tan. All Rights Reserved. Unauthorized use or distribution is prohibited.
