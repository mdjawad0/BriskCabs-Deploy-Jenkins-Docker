pipeline {

    agent any

    stages {
       stage(‘Build’) {
                steps {
                    echo 'building....'
                }
            }
        stage(‘Build Docker’) {
            steps {
                sh '/usr/local/bin/docker-compose up --build'
            }
        }
    }
}
