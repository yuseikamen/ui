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
		sh 'apt-get install -y curl unzip less'
		sh 'cd /tmp && rm -f *.zip && curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && unzip awscliv2.zip && pwd && ls -l && ./aws/install && aws --version'
		sh 'aws sts get-caller-identity'
		sh 'mkdir /root/.aws/ && cp aws.config /root/.aws/'
		sh 'aws --profile dev sts get-caller-identity'
		sh 'aws --profile dev s3 ls s3://cennznet-ui.centrality.me/'
            }
        }
    }
}
