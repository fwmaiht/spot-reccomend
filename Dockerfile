FROM node:20

# アプリケーションディレクトリを作成する
WORKDIR /usr/src

# 開放するport番号を記載
EXPOSE 3000