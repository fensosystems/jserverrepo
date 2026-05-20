pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo '🚚 Pulling code from remote GitHub...'
                checkout scm
            }
        }
        stage('Docker Build Image') {
            steps {
                sh 'docker build -t pipeline-node-app .'
            }
        }
        stage('Deploy Container') {
            steps {
                sh 'docker stop running-pipeline-app || true'
                sh 'docker rm running-pipeline-app || true'
                sh 'docker run -d -p 8081:3000 --name running-pipeline-app pipeline-node-app'
            }
        }
    }
}
