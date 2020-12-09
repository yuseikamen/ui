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
		sh 'mkdir tmp && cd tmp && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && pwd && ls -l && ./aws/install && aws --version'
		sh 'aws sts get-caller-identity'
            }
        }
    }
}
