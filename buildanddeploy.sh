docker build -t localhost:5000/files .
docker push localhost:5000/files
docker service update --image localhost:5000/files files
