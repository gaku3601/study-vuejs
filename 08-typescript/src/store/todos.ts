import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex"

export interface State {
    todos: string[]
    idx: number
}

const state: State = {
  todos: [],
  idx: 0
}

const mutations = <MutationTree<State>> {
  add(state: State, text: string) {
    console.log(text)
    console.log(state)
    state.todos.push(text)
  }
};

export const todos = {
  namespaced: true,
  state: state,
  mutations: mutations,
};
