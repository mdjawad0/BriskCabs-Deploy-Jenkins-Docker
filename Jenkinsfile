pipeline {

    agent any

    stages {
       stage("build") {
            steps {
                  sh 'docker-compose up -d --no-color --wait'
                  sh 'docker-compose ps'
                }
            }
       stage("test") {
            steps {
                   echo 'testing....'
            }
        }
    }
    post{
        always{
          sh 'docker-compose down --remove-orphans -v'
          sh 'docker-compose ps'
        }
    }
}
