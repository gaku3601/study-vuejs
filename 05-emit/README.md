# 05-emit

## 今回の目標
・子コンポーネントから親コンポーネントへデータを渡すEmitについて習得します。  

## 実装
第3回で親コンポーネントから子コンポーネントへデータを渡すpropsについては習得した。  
今回は子コンポーネントから親コンポーネントへデータを渡すEmitについて勉強する。  
/src/components/ChildComponent.vueを作成し、以下のように編集する。  

    <template>
      <div class="child">
        <h1>これは子コンポーネントです。</h1>
        <button v-on:click="change">子Change!</button>
      </div>
    </template>

    <script>
    export default {
      name: 'ChildComponent',
      data () {
        return {
          childData: 'これは子コンポーネントで設定したデータです。'
        }
      },
      methods: {
        change: function () {
          this.$emit('send-child-data', this.childData)
        }
      }
    }
    </script>

「this.$emit('send-child-data', this.childData)」の部分で親コンポーネントへ渡す設定をしています。  
send-child-dataというカスタムイベントを作成し、this.childDataというデータを渡すよ！という処理を記述しています。  
  
次に親コンポーネントを編集していきます。  
/src/components/HelloWorld.vueを以下のように編集します。  


    <template>
      <div class="hello">
        <h1>{{msg}}</h1>
        <h2>{{childSendData}}</h2>
        <ChildComponent @send-child-data="getChildData" />
      </div>
    </template>

    <script>
    import ChildComponent from './ChildComponent'
    export default {
      name: 'HelloWorld',
      data () {
        return {
          msg: 'Emitの勉強',
          childSendData: ''
        }
      },
      methods: {
        getChildData: function (text) {
          this.childSendData = text
        }
      },
      components: {
        ChildComponent
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

template部分の「ChildComponent @send-child-data="getChildData"」で、  
子コンポーネントからsend-child-dataイベントが発火されたら、getChildData関数を  
実行するよ！という処理を記述しています。  
簡単ですね。あとはいつもどおり処理を記述すればこんな感じの動作になります。  
![https://www.gakusmemo.com/wp-content/uploads/2017/11/emit.gif](https://www.gakusmemo.com/wp-content/uploads/2017/11/emit.gif)
