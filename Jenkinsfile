pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Run') {
            steps {
                sh 'npm install'
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
              sh 'npm test'
              }
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }