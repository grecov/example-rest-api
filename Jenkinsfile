pipeline {
  agent any

  tools { nodejs "node11" }

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
          step([$class: 'CoberturaPublisher', coberturaReportFile: 'coverage/clover.xml'])
        }
      }      
    }
  }
}