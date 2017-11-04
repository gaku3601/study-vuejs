# 04-databinding

## 今回の目標
・vue.jsの双方向データバインディングを習得します。

### 双方向データバインディング
/src/components/HelloWorld.vueを以下のように編集しました。

    <template>
      <div class="hello">
        <h1>{{ msg }}</h1>

        <h2>message:{{ bindingMsg }}</h2>
        <input v-model="bindingMsg"></input>

        <h2>counter:{{ counter }}</h2>
        <button v-on:click='addCounter'>+</button>

        <h2>値渡し:{{value}}</h2>
        <button v-on:click="passByValue('引数を渡す')">引数で渡す方法</button>
      </div>
    </template>

    <script>
    export default {
      name: 'HelloWorld',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          bindingMsg: '',
          counter: 0,
          value: ''
        }
      },
      methods: {
        addCounter: function () {
          this.counter += 1
        },
        passByValue: function (message) {
          this.value = message
        }
      }
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

v-modelを使用することでscriptタグ内のデータで定義したものと紐づけることができます。  
inputに文字列を入力すると、瞬時にメッセージが表示されることがわかります。  
v-on:clickでメソッド名を入力するとscriptタグ内のmethodsで定義した関数を呼び出すことができ、  
処理を記述することができます。  
この際、ES6のアロー関数で「addCounter: () => {}」のような書き方をすると、dataで定義した変数を  
参照できないので注意が必要です。  

![https://www.gakusmemo.com/wp-content/uploads/2017/11/Untitled.gif](https://www.gakusmemo.com/wp-content/uploads/2017/11/Untitled.gif)

