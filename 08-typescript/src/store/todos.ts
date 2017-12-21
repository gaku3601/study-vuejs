import {GetterTree, MutationTree, ActionTree, ActionContext} from "vuex"
import todo from './todo' 

export interface State {
    todos: todo[]
}

const state: State = {
  todos: [],
}

const mutations = <MutationTree<State>> {
  add(state: State, text: string) {
    state.todos.push(new todo)
  }
};

export const todos = {
  namespaced: true,
  state: state,
  mutations: mutations,
};
