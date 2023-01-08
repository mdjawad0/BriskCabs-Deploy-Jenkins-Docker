pipeline {

    agent any

    stages {
       stage("Prune Docker data") {
            steps {
                   sh 'docker system prune -a --volumes -f'
                  }
            }
       stage("Deploy") {
            steps {
                  sh 'docker-compose up -d --no-color --wait'
                  sh 'docker-compose ps'
                }
            }
    }
}
