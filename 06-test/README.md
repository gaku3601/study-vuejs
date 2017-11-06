# 06-test

## 今回の目標
・vue.jsのunit-test方法を習得する。  

## 実装
### 環境構築
今回は単体テストの自動化を目的としているため、環境構築時「E2Eテスト」の項目をはずしておく。  
(※これを入れておくと、npm run test実行時、javaランタイムが入っていない場合こけます。)  

    $ vue init webpack 06-test

    ? Project name 06-test
    ? Project description A Vue.js project
    ? Author gaku0601 <pro.gaku@gmail.com>
    ? Vue build standalone
    ? Install vue-router? Yes
    ? Use ESLint to lint your code? Yes
    ? Pick an ESLint preset Standard
    ? Setup unit tests with Karma + Mocha? Yes
    ? Setup e2e tests with Nightwatch? No

       vue-cli · Generated "06-test".

       To get started:

         cd 06-test
         npm install
         npm run dev

       Documentation can be found at https://vuejs-templates.github.io/webpack

ひとまず、環境構築を完了した段階で「npm run test」コマンドでtestが通るかやってみます。  

    $ npm run test

    > 06-test@1.0.0 test /Users/gaku/src/github.com/gaku3601/study-vuejs/06-test
    > npm run unit


    > 06-test@1.0.0 unit /Users/gaku/src/github.com/gaku3601/study-vuejs/06-test
    > cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run

    06 11 2017 07:46:02.559:INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9876/
    06 11 2017 07:46:02.563:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
    06 11 2017 07:46:02.572:INFO [launcher]: Starting browser PhantomJS
    06 11 2017 07:46:04.342:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket fIDbhYsi5b8fJXumAAAA with id 86479778

      HelloWorld.vue
        ✓ should render correct contents

    PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 1 of 1 SUCCESS (0.025 secs / 0.016 secs)
    TOTAL: 1 SUCCESS


    =============================== Coverage summary ===============================
    Statements   : 100% ( 2/2 )
    Branches     : 100% ( 0/0 )
    Functions    : 100% ( 0/0 )
    Lines        : 100% ( 2/2 )
    ================================================================================

大丈夫そうです。  
  
### templateのテスト
cliで生成されるHelloWorld.vueについてテストコードを書いて行きます。  
/test/unit/specsを開くと、Hello.speck.jsというファイルが存在しており、これを編集します。  
helloクラスのh3タグで「こんにちわ」と出力するコードのテストコードを書いてみます。  

    import Vue from 'vue'
    import HelloWorld from '@/components/HelloWorld'

    describe('HelloWorld.vue', () => {
      it('should render correct contents', () => {
        const Constructor = Vue.extend(HelloWorld)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.hello h1').textContent)
          .to.equal('Welcome to Your Vue.js App')
      })
      it('h3タグでこんにちわが出力されているか', () => {
        const Constructor = Vue.extend(HelloWorld)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.hello h3').textContent)
          .to.equal('こんにちわ')
      })
    })

これでテストを実行してみます。  

    $npm run test

    > 06-test@1.0.0 test /Users/gaku/src/github.com/gaku3601/study-vuejs/06-test
    > npm run unit


    > 06-test@1.0.0 unit /Users/gaku/src/github.com/gaku3601/study-vuejs/06-test
    > cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run

    06 11 2017 08:04:25.278:INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9876/
    06 11 2017 08:04:25.281:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
    06 11 2017 08:04:25.292:INFO [launcher]: Starting browser PhantomJS
    06 11 2017 08:04:26.519:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket Cj2_WB_n29UtH6gFAAAA with id 46549810

      HelloWorld.vue
        ✓ should render correct contents
        ✗ h3タグでこんにちわが出力されているか
      null is not an object (evaluating 'vm.$el.querySelector('.hello h3').textContent')
      webpack:///test/unit/specs/Hello.spec.js:14:45 <- index.js:11839:45


    PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 2 of 2 (1 FAILED) (0.061 secs / 0.01 secs)
    TOTAL: 1 FAILED, 1 SUCCESS


    1) h3タグでこんにちわが出力されているか
         HelloWorld.vue
         null is not an object (evaluating 'vm.$el.querySelector('.hello h3').textContent')
    webpack:///test/unit/specs/Hello.spec.js:14:45 <- index.js:11839:45



    =============================== Coverage summary ===============================
    Statements   : 100% ( 2/2 )
    Branches     : 100% ( 0/0 )
    Functions    : 100% ( 0/0 )
    Lines        : 100% ( 2/2 )
    ================================================================================
    npm ERR! code ELIFECYCLE
    npm ERR! errno 1
    npm ERR! 06-test@1.0.0 unit: `cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run`
    npm ERR! Exit status 1
    npm ERR!
    npm ERR! Failed at the 06-test@1.0.0 unit script.
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

    npm ERR! A complete log of this run can be found in:
    npm ERR!     /Users/gaku/.npm/_logs/2017-11-05T23_04_26_929Z-debug.log
    npm ERR! code ELIFECYCLE
    npm ERR! errno 1
    npm ERR! 06-test@1.0.0 test: `npm run unit`
    npm ERR! Exit status 1
    npm ERR!
    npm ERR! Failed at the 06-test@1.0.0 test script.
    npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

    npm ERR! A complete log of this run can be found in:
    npm ERR!     /Users/gaku/.npm/_logs/2017-11-05T23_04_26_961Z-debug.log

実際コードを記述していないので、すごくエラーがでます。  
では、HelloWorld.vueのtemplateにh3タグで「こんにちわ」を記述します。  


    <template>
      <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>こんにちわ</h3>
        <h2>Essential Links</h2>
        <ul>
          <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
    ・・・・

これでtestを実施!  

    $ npm run test

    > 06-test@1.0.0 test /Users/gaku/src/github.com/gaku3601/study-vuejs/06-test
    > npm run unit


    > 06-test@1.0.0 unit /Users/gaku/src/github.com/gaku3601/study-vuejs/06-test
    > cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run

    06 11 2017 08:09:35.895:INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9876/
    06 11 2017 08:09:35.897:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
    06 11 2017 08:09:35.909:INFO [launcher]: Starting browser PhantomJS
    06 11 2017 08:09:37.050:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket M91l4s-qO5eQNIMvAAAA with id 53126300

      HelloWorld.vue
        ✓ should render correct contents
        ✓ h3タグでこんにちわが出力されているか

    PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 2 of 2 SUCCESS (0.016 secs / 0.01 secs)
    TOTAL: 2 SUCCESS


    =============================== Coverage summary ===============================
    Statements   : 100% ( 2/2 )
    Branches     : 100% ( 0/0 )
    Functions    : 100% ( 0/0 )
    Lines        : 100% ( 2/2 )
    ================================================================================

無事テストが通りました!  
  
### propsを受け取った想定でのテスト
template単体でのテストは上記でできましたが、propsでデータを受け取った後の描画テストについても記述したいところです。  
この場合、testコードに「propsを受け取った後の描画結果を返却するヘルパー」を作成することでテストが可能なようです。  
/test/unit/specs/Hello.spec.jsを以下のように編集します。

    import Vue from 'vue'
    import HelloWorld from '@/components/HelloWorld'

    // コンポーネントをマウントし描画結果を返すヘルパー関数
    function getRenderedText (Component, propsData) {
      const Ctor = Vue.extend(Component)
      const vm = new Ctor({ propsData: propsData }).$mount()
      return vm
    }

    describe('HelloWorld.vue', () => {
      it('should render correct contents', () => {
        const Constructor = Vue.extend(HelloWorld)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.hello h1').textContent)
          .to.equal('Welcome to Your Vue.js App')
      })
      it('h3タグでこんにちわが出力されているか', () => {
        const Constructor = Vue.extend(HelloWorld)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.hello h3').textContent)
          .to.equal('こんにちわ')
      })
      it('propsで「こんにちわprops」を渡し、h4で出力されているか', () => {
        const render = getRenderedText(HelloWorld, {hello: 'こんにちわprops'})
        expect(render.$el.querySelector('.hello h4').textContent)
          .to.equal('こんにちわprops')
      })
    })

このテストに伴って、/src/components/HelloWorld.vueも編集します。

    <template>
      <div class="hello">
        <h1>{{ msg }}</h1>
        <h3>こんにちわ</h3>
        <h4>{{hello}}</h4>
        <h2>Essential Links</h2>
        <ul>
          <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
          <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
          <br>
          <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
          <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
          <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
          <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
      </div>
    </template>

    <script>
    export default {
      name: 'HelloWorld',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      props: [
        'hello'
      ]
    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    h1, h2 {
      font-weight: normal;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }

    a {
      color: #42b983;
    }
    </style>

これでテストを実行すると、以下のように成功するはずです。  

    $ npm run test

    > 06-test@1.0.0 test /Users/gaku/src/github.com/gaku3601/study-vuejs/06-test
    > npm run unit


    > 06-test@1.0.0 unit /Users/gaku/src/github.com/gaku3601/study-vuejs/06-test
    > cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run

    06 11 2017 08:34:23.621:INFO [karma]: Karma v1.7.1 server started at http://0.0.0.0:9876/
    06 11 2017 08:34:23.624:INFO [launcher]: Launching browser PhantomJS with unlimited concurrency
    06 11 2017 08:34:23.636:INFO [launcher]: Starting browser PhantomJS
    06 11 2017 08:34:24.784:INFO [PhantomJS 2.1.1 (Mac OS X 0.0.0)]: Connected on socket QGVl4HGlQbroh_AJAAAA with id 31159704

      HelloWorld.vue
        ✓ should render correct contents
        ✓ h3タグでこんにちわが出力されているか
        ✓ propsで「こんにちわprops」を渡し、h4で出力されているか

    PhantomJS 2.1.1 (Mac OS X 0.0.0): Executed 3 of 3 SUCCESS (0.019 secs / 0.012 secs)
    TOTAL: 3 SUCCESS


    =============================== Coverage summary ===============================
    Statements   : 100% ( 2/2 )
    Branches     : 100% ( 0/0 )
    Functions    : 100% ( 0/0 )
    Lines        : 100% ( 2/2 )
    ================================================================================

いい感じっす。どんどん行きましょう。  

### script内methodsのテスト
上記では描画に伴うテストを行なってきましたが、実際のロジックを書くmethodsのテストを記述したいと思います。  
/test/unit/specs/Hello.spec.jsに以下を追加します。  

    it('足し算', () => {
      expect(HelloWorld.methods.add(1, 2))
        .to.be.eql(3)
    })

簡単な足し算メソッドのテストコードを記述しました。  
/src/components/HelloWorld.vueにも足し算を記述します。  

    <script>
    export default {
      name: 'HelloWorld',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      props: [
        'hello'
      ],
      methods: {
        add: function (x, y) {
          return x + y
        }
      }
    }
    </script>

これでtestを実行すると無事成功します。  

## おわりに
結構簡単にテストを実施できます。  
avoriazというテストライブラリを導入すると、より楽に記述できそうではありますが、ひとまず。  
