pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'ls -l /var/www'
		sh 'id'
            }
        }
    }
}