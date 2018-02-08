# Curso Node

### Criar volumes
docker volume create mysqldbdata

### Run container
docker container run --detach --name mysqldb -p 27017:27017 -v mysqldbdata:/var/lib/mysql mysql:latest

### Inspecionar configuração do container iniciado
docker inspect mysqldb

### Inspecionando log do container
docker container logs mysqldb

### Inspecionando processo no container
docker container top mysqldb

### Acessando o container
docker exec -it mysqldb /bin/sh