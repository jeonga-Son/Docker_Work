```
# docker의 이미지를 기반으로, 컨테이너를 생성하는 명령어
# docker create + docker start가 합쳐진 것
$ docker run 

# 다운로드 받은 이미지를 확인
$ docker images

# ls : 이미지가 가지고 있는 목록 파일 확인 가능
$ docker run alpine ls 

# 컨테이너 중지
$ docker stop {컨테이너 아이디}

# 컨테이너 kill
$ docker kill {컨테이너 아이디}

# 컨테이너 삭제
$ docker rm {컨테이너 아이디}

# 컨테이너 강제로 삭제
$ docker rm {컨테이너 아이디} -f

# 모든 docker 컨테이너 한번에 삭제하기
$ For /F %i IN ('docker ps -f "status=exited" -q') do docker rm %i 

# 특정 이미지 삭제
$ docker rmi {컨테이너 아이디}

# 모든 이미지 삭제
$ docker image prune -a

# 사용하지 않는 도커 이미지 및 컨테이너, 볼륨 네트워크 등 모든 도커 리소스를 일괄적으로 삭제
$ docker system prune

# 생성된 컨테이너에 새로운 키워드를 전달
$ docker exec {컨테이너 아이디} {명령어}

# shell 환경으로 접속하기
$ docker exec -it {컨테이너 아이디} sh

# 서버 내리는 명령어
$ docker-compose down
```