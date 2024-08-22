pipeline {
   agent any

   tools {
    nodejs 'nodejs'
    }

   stages {
      stage('Checkout') {
        steps {
          git url: 'https://github.com/alrammahi-mariia/travel-journal.git', branch: 'main'
        }
      }

      stage('Build') {
        steps {
          sh 'npm install'

          sh 'npm run build'
        }

      }

    }
}