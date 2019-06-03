FROM debian

RUN		apt-get update -y && apt-get upgrade -y
RUN		apt-get install zsh wget vim default-jre -y

WORKDIR	minecraft_server

RUN wget https://launcher.mojang.com/v1/objects/808be3869e2ca6b62378f9f4b33c946621620019/server.jar
RUN echo 'eula=true' > eula.txt

ENTRYPOINT java -Xmx1024M -Xms1024M -jar server.jar

# docker build -t dfminecraft .
# docker run --rm -p 1234:25565 --name myminecraft -d dfminecraft