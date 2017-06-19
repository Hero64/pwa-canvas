<template>
  <div class="list-container">
    <div class="list-title">
      {{ list.name }}
      <button class="remove-list"></button>
    </div>
    <div class="list-task">
      <draggable :list="list.tasks" :move="move" :options="{group: 'todo'}">
        <transition-group>
          <task v-for="(task, index) in list.tasks" :task="task" key="index"></task>
        </transition-group>
      </draggable>
      <div class="task-empty" v-if="list.tasks.length === 0">
        <i class="material-icons">done_all</i>
        <p>No tienes tareas por hacer</p>
      </div>
    </div>

    <!--Add task-->
    <add-task :list_id="id"></add-task>
  </div>
</template>

<script>
  import draggable from 'vuedraggable'
  import AddTask from './AddTask'
  import Task from './Task'
  export default {
    name: 'List',
    props: ['list', 'id'],
    components: {
      AddTask,
      Task,
      draggable
    },
    methods: {
      move (evt) {
        console.log('moviendo', evt)
      }
    }
  }
</script>
