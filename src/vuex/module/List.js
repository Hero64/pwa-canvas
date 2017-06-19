/**
 * @param object state
 */
const state = {
  lists: []
}
/**
 * @param object getters
 */
const getters = {
  /**
   * Get all list
   */
  allList: (state) => state.lists
}
/**
 * @param object action
 */
const actions = {
  /**
   * Add and element to list
   */
  saveList: ({commit}, list) => {
    const data = {
      name: list,
      tasks: []
    }
    commit('ADDLIST', data)
  },
  /**
   * Add a task to list
   */
  saveTask: ({commit}, task) => {
    const data = {
      list_id: task.list_id,
      description: task.comment,
      date: 'hace 15min.'
    }
    commit('ADDTASK', data)
  }
}
/**
 * @param object mutations
 */
const mutations = {
  ADDLIST: (state, list) => {
    state.lists.push(list)
  },
  ADDTASK: (state, task) => {
    state.lists[task.list_id].tasks.push(task)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
