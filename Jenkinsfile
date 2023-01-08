pipeline {

    agent any

    stages {
       stage("build") {
            steps {
                  sh '/usr/local/bin/docker-compose up --build'
                }
            }
       stage("test") {
            steps {
                   echo 'testing....'
            }
        }
    }
}
