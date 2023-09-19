FROM ubuntu:latest
RUN mkdir /app
WORKDIR /app
COPY . /app
RUN apt-get update -y
RUN apt-get -y install curl gcc g++ make
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install nodejs -y
RUN npm -v
RUN node -v
RUN npm install -g create-react-app
RUN create-react-app -V
EXPOSE 3000
CMD npm start