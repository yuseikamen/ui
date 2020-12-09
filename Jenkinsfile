pipeline {
    agent { dockerfile true }
    stages {
        stage('Test') {
            steps {
                sh 'ls -l /var/www'
		sh 'id'
            }
        }
    }
}
