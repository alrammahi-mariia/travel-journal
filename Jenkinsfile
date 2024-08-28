pipeline {
   agent any

   tools {
    nodejs 'node'
    }

   stages {
      stage('Checkout') {
        steps {
          git branch: 'main', url: 'https://github.com/alrammahi-mariia/travel-journal/'
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


