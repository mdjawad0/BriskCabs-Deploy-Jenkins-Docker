pipeline {

    agent any

    stages {
       stage("Run") {
            steps {
                  sh 'docker-compose up -d --no-color --wait'
                  sh 'docker-compose ps'
                }
            }
    }
}
