import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex"
export default class ToDo {
  text: string = ''
  public update(t: string): void{
    this.text = t;
  }
}
