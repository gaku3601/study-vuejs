# 03-component
vue.jsのcomponent思想を勉強していきます。  

## 今回の目標
・子コンポーネントを作成し、親コンポーネントから呼び出す方法を理解します。  
・親コンポーネントから子コンポーネントへの値渡しの方法を理解します。  

## 実装
### 子コンポーネントの呼び出し
子コンポーネントとして、/src/components/OtherComponent.vueを作成し、  
以下のように編集します。  

    <template>
      <div class="other">
        <p>子供コンポーネント1だよ！</p>
      </div>
    </template>

    <script>
    export default {
      name: 'OtherComponent'
    }
    </script>

「子供コンポーネント1だよ!」と表示する簡単な作りです。  
これを親コンポーネントから呼び出す場合、/src/components/HelloWorld.vueを以下のように編集します。  

    <template>
      <div class="hello">
        <h1>{{ msg }}</h1>
        <OtherComponent />
      </div>
    </template>

    <script>
    import OtherComponent from './OtherComponent'
    export default {
      name: 'HelloWorld',
      data () {
        return {
          msg: '子供コンポーネントの読み込みテスト'
        }
      },
      components: {
        OtherComponent
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

scriptタグ内でOtherComponentを呼び出し、componentsを定義することで使用することが可能です。  
![https://www.gakusmemo.com/wp-content/uploads/2017/11/スクリーンショット-2017-11-03-17.19.14.png](https://www.gakusmemo.com/wp-content/uploads/2017/11/スクリーンショット-2017-11-03-17.19.14.png)  

### 親コンポーネントから子コンポーネントへの値渡し
親コンポーネントに子コンポーネントを渡すためのデータを用意します。(msg2というデータ)  
また、template内で「:value="msg2"」とし子コンポーネントへ値を渡します。  

    <template>
      <div class="hello">
        <h1>{{ msg }}</h1>
        <OtherComponent :value="msg2" />
      </div>
    </template>

    <script>
    import OtherComponent from './OtherComponent'
    export default {
      name: 'HelloWorld',
      data () {
        return {
          msg: '子供コンポーネントの読み込みテスト',
          msg2: '子供コンポーネントへ渡す値です!'
        }
      },
      components: {
        OtherComponent
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

ここで気をつけないといけないところが「:value="msg2"」という部分で、  
「value="msg2"」とコロン無しで書いてしまうと"msg2"という文字列が渡されてしまうので注意が必要です。  
  
子コンポーネントのOtherComponent.vueで値を受け取る準備をします。  
script内でprops定義を行うことで、親から渡された値を使用することが可能です。  

    <template>
      <div class="other">
        <p>子供コンポーネント1だよ！</p>
        <p>{{ value }}</p>
      </div>
    </template>

    <script>
    export default {
      name: 'OtherComponent',
      props: [
        'value'
      ]
    }
    </script>

OK！これでブラウザを表示すると「子供コンポーネントへ渡す値です！」と表示されます。

![https://www.gakusmemo.com/wp-content/uploads/2017/11/スクリーンショット-2017-11-03-17.30.25.png](https://www.gakusmemo.com/wp-content/uploads/2017/11/スクリーンショット-2017-11-03-17.30.25.png)
