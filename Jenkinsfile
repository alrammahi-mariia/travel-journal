// pipeline {
//    agent any

//    tools {
//     nodejs 'node'
//     }

//    stages {
//       stage('Checkout') {
//         steps {
//           git branch: 'main', url: 'https://github.com/alrammahi-mariia/travel-journal/'
//         }
//       }

//       stage('Build') {
//         steps {
//           sh 'npm install'

//           sh 'npm run build'
//         }

//       }

//     }
// }

pipeline {
    agent any

    tools {
      nodejs 'node'
    }


    environment {
        NETLIFY_SITE_ID = 'cce76f82-8201-49d8-8568-bfbf975bdead' // Replace with your Netlify Site ID
        NETLIFY_AUTH_TOKEN = credentials('nfp_8fvPFR3VrysxymzSKzApTRMHbnxFacCp511f') // Replace with your Jenkins Credential ID for Netlify token
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout the source code from your Git repository
                git branch: 'main', url: 'https://github.com/alrammahi-mariia/travel-journal/' // Replace with your repository URL
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Build React App') {
            steps {
                // Build the React app
                sh 'npm run build'
            }
        }

        stage('Deploy to Netlify') {
            steps {
                // Deploy to Netlify using Netlify CLI
                sh '''
                npm install -g netlify-cli
                netlify deploy --site $NETLIFY_SITE_ID --auth $NETLIFY_AUTH_TOKEN --prod --dir=build
                '''
            }
        }
    }

    post {
        always {
            // Clean workspace after build
            cleanWs()
        }
        success {
            echo 'Deployment to Netlify successful!'
        }
        failure {
            echo 'Deployment to Netlify failed.'
        }
    }
}
