# 01-environment
vue-cliを使用し、環境構築を行なったプロジェクトです。  
vue-cliは以下のコマンドでインストールします。  

    npm install -g vue-cli

vue-cliがインストールできましたら、vueプロジェクトを作成します。  
今回はwebpackを使用したフルパッケージでのインストールを行います。  

    vue init webpack 01-environment

上記コマンドを入力すると、いろいろ聞かれます。  
基本的に環境にこだわりがない場合、EnterとYを押しておけばOKです。  
今回はこんな感じで回答しています。

    ? Project name 01-environment
    ? Project description A Vue.js project
    ? Author gaku0601 <pro.gaku@gmail.com>
    ? Vue build standalone
    ? Install vue-router? Yes
    ? Use ESLint to lint your code? Yes
    ? Pick an ESLint preset Standard
    ? Setup unit tests with Karma + Mocha? Yes
    ? Setup e2e tests with Nightwatch? Yes

コマンドを入力したフォルダにプロジェクトが作成されているので、  
そのフォルダへ遷移し、下記コマンドでパッケージを一括インストールします。  

    npm install

node_moduleというフォルダが新たに作成され、そこにpackage.jsonに記述されている  
パッケージがインストールされました。  
これで準備完了です。  
あとはvue.jsを下記コマンドで立ち上げます。

    npm run dev

http://localhost:8080/  
へアクセスすると、簡単なWelcome画面が表示されているはずです。  
Good luck🍁
