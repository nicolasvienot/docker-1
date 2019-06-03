FROM debian

RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y curl openssh-server ca-certificates postfix
RUN curl -Ss https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.deb.sh | bash
RUN apt-get install gitlab-ce

ENTRYPOINT (/opt/gitlab/embedded/bin/runsvdir-start &) && gitlab-ctl reconfigure && /bin/bash

# docker build -t dfgitlab .
# docker run --rm -p 8080:80 -p 8022:22 -p 8443:443 --privileged --name mygitlab -it dfgitlab