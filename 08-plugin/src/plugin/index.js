import globalAssets from './globalAssets'
import globalAssets2 from './globalAssets2'
import globalComponent from './globalComponent'
import myMixin from './myMixin'
import myGlobalMethod from './myGlobalMethod'
import myInstanceMethod from './myInstanceMethod'

export default {
  install: function (Vue, options) {
    Vue.directive('directive', globalAssets)
    Vue.directive('directive2', globalAssets2)
    Vue.component('glc', globalComponent)
    Vue.mixin(myMixin)
    Vue.myGMethod = myGlobalMethod
    Vue.prototype.$myMethod = myInstanceMethod
  }
}
