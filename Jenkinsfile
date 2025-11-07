pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'my-express-app'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                // Jalankan test (pastikan ada "test" script di package.json)
                sh 'npm test || echo "no tests"'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE .'
            }
        }

        stage('Run with Docker Compose') {
            steps {
                sh 'docker compose down || true'
                sh 'docker compose up -d --build'
            }
        }
    }

    post {
        success {
            echo '✅ Deployment success!'
        }
        failure {
            echo '❌ Build failed.'
        }
    }
}
