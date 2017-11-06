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
  it('足し算', () => {
    expect(HelloWorld.methods.add(1, 2))
      .to.be.eql(3)
  })
})
