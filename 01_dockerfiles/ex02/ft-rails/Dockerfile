FROM			ruby

RUN				apt-get update -y && apt-get upgrade -y \
				&& apt-get install build-essential sqlite3 nodejs -y \
				&& gem install rails bundler activerecord-jdbcsqlite3-adapter

ONBUILD COPY	app /opt/app

ONBUILD WORKDIR	/opt/app

ONBUILD RUN     bundle update && bundle install

ONBUILD RUN     rake db:migrate

ONBUILD RUN     rake db:seed

# docker build -t ft-rails:on-build .