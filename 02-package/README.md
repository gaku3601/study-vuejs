# 02-package
packageのお勉強。  
環境構築は01-environmentで行なっているので、まだやっていない人はそっちから初めてみてね。  

## 今回やること
css frameworkのVuetify.jsをpackageとして組み込み、使えるようにする。  

## 実装
Vuetify.jsをインストールしてみる。  

    npm install vuetify --save

package.jsonを確認すると下記のようにvuetifyが追加されていることが確認できる。  

    "dependencies": {
      "vue": "^2.5.2",
      "vue-router": "^3.0.1",
      "vuetify": "^0.16.9"
    },
  
vuetifyのコンポーネントを配置するための前準備を行う。  
webpackのエントリーポイントとなっている/src/main.jsを下記のように編集する。  

    // The Vue build version to load with the `import` command
    // (runtime-only or standalone) has been set in webpack.base.conf with an alias.
    import Vue from 'vue'
    import App from './App'
    import router from './router'
    import Vuetify from 'vuetify'                          // 追加
    import '../node_modules/vuetify/dist/vuetify.min.css'  // 追加

    Vue.use(Vuetify)                                       // 追加
    Vue.config.productionTip = false

    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      router,
      template: '<App/>',
      components: { App }
    })

Iconを使えるようにするため、index.htmlにリンクを追加します。  

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>02-package</title>
        <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"> <!-- 追加 -->
      </head>
      <body>
        <div id="app"></div>
        <!-- built files will be auto injected -->
      </body>
    </html>

これで準備は完了です。  
vuetifyのDocumentにしたがって、/src/components/HelloWorld.vueを下記のように編集してみます。  
https://vuetifyjs.com/vuetify/quick-start  


    <template>
      <v-app id="inspire">
        <v-navigation-drawer
          persistent
          v-model="drawer"
          enable-resize-watcher
          app
        >
          <v-list dense>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>home</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Home</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile @click="">
              <v-list-tile-action>
                <v-icon>contact_mail</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>Contact</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-navigation-drawer>
        <v-toolbar color="indigo" dark fixed app>
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <v-toolbar-title>Application</v-toolbar-title>
        </v-toolbar>
        <main>
          <v-content>
            <v-container fluid fill-height>
              <v-layout
                justify-center
                align-center
              >
                <v-tooltip right>
                  <v-btn icon large :href="source" target="_blank" slot="activator">
                    <v-icon large>code</v-icon>
                  </v-btn>
                  <span>Source</span>
                </v-tooltip>
              </v-layout>
            </v-container>
          </v-content>
        </main>
        <v-footer color="indigo" app>
          <span class="white--text">&copy; 2017</span>
        </v-footer>
      </v-app>
    </template>

    <script>
    export default {
      name: 'HelloWorld',
      data: () => ({
        drawer: true
      }),
      props: {
        source: String
      }
    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    </style>

完全コピペですが、これでvue.jsアプリケーションを起動してあげれば美麗なレイアウトが表示されると思います。  
良さそうなpackageを見つけたらnpm installをすれば簡単に組み込むことができます。  
  
※また、上の例ではv-appで囲っていますが、これを行うといい感じのデザインになるため、忘れずつけておきましょう。
