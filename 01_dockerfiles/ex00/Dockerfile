FROM alpine

RUN apk update && \
	apk upgrade && \
	apk add vim

ENTRYPOINT vim

# docker build -t dfalpine .
# docker run --rm --name myalpine -it dfalpine