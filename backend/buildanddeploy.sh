docker build -t localhost:5000/260lab6 .
docker push localhost:5000/260lab6
docker service update --image localhost:5000/260lab6 260lab6
