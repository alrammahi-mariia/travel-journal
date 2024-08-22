pipeline {
   agent any

   tools {
    nodejs 'node'
    }

   stages {
      stage('Checkout') {
        steps {
          url: 'https://github.com/alrammahi-mariia/travel-journal.git', branch: 'main'
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