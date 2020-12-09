pipeline {
    agent {
	dockerfile {
	    args '-u root --privileged'
	    filename 'Dockerfile'
	}
	
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
