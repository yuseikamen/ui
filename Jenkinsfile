pipeline {
    agent {
	dockerfile true
	args '-u root --privileged'
    }
    stages {
        stage('Test') {
            steps {
                sh 'ls -l /var/www/html'
		sh 'id'
		sh 'ls /root'
            }
        }
    }
}
