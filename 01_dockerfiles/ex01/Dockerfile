FROM debian

RUN apt-get update -y \
	&& apt-get upgrade -y \
	&& apt-get install wget -y \
	&& apt-get install bzip2 -y

WORKDIR /home/teamspeak

RUN	wget http://dl.4players.de/ts/releases/3.7.1/teamspeak3-server_linux_amd64-3.7.1.tar.bz2 \
	&& tar xvf teamspeak3-server_linux_amd64-3.7.1.tar.bz2 \
	&& rm -rf teamspeak3-server_linux_amd64-3.7.1.tar.bz2

ENV TS3SERVER_LICENSE accept

ENTRYPOINT sh teamspeak3-server_linux_amd64/ts3server_minimal_runscript.sh

# docker build -t dfteamspeak .
# docker run --rm -p 9987:9987/udp -p 10011:10011 -p 30033:30033 --name myteamspeak -dit dfteamspeak
