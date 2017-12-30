export default {
  bind: (el) => {
    el.addEventListener('click', click, false)
  }
}

const click = () => {
  console.log('拡張したディレクティブを起動したぜ。')
}
