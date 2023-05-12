pipeline {
  agent any
  stages {
    stage('start') {
      steps {
        git(url: 'https://github.com/DUMBANIKET/sarree', branch: 'master')
      }
    }

    stage('log') {
      steps {
        sh 'ls -la'
      }
    }

  }
}