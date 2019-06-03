FROM gcc:4.9

COPY myprog /usr/src/myprog

WORKDIR /usr/src/myprog

RUN gcc -o myprog main.c

CMD ["./myprog"]

# docker build -t dfccompiler .
# docker run --rm --name myccompiler -it dfccompiler
