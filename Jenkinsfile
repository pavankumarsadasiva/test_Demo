

pipeline {
    agent any
    environment {
        NODE_ENV = 'production'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/pavankumarsadasiva/test_Demo.git'
            }
        }
        stage('Install Dependencies') {
            steps { 
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        // stage('Build Project') {
        //     steps {
        //         bat 'npm run build'
        //     }
        // }
        stage('Deploy') {
            steps {
                bat 'npm run start'
            }
        }
    }
}
   