import globalAssets from './globalAssets'
import globalAssets2 from './globalAssets2'
import globalComponent from './globalComponent'

export default {
  install: function (Vue, options) {
    Vue.directive('directive', globalAssets)
    Vue.directive('directive2', globalAssets2)
    Vue.component('glc', globalComponent)
  }
}
