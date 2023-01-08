pipeline {

    agent any

    stages {
       stage("build") {
            steps {
                  sh 'docker-compose up --build -d'
                }
            }
       stage("test") {
            steps {
                   echo 'testing....'
            }
        }
    }
}
