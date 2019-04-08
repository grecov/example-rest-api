pipeline {
  agent any

  tools { 
    nodejs "node11" 
    jdk "java"
  }

  stages {
    stage('Install deps') {
      steps {
        sh 'yarn'
      }
    }

    stage('Run tests') {
      steps {
        sh 'yarn test'
      }

      post {
        always {
          junit "junit.xml"
        }
      }      
    }

    stage('Acceptance tests') {
      steps {
        sh 'java -jar karate.jar tests/movie.feature'
      }
    }
  }
}