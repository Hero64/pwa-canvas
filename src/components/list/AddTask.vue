<template>
  <div class="add-task-container">
    <form action="" @submit.prevent="save()" novalidate>
      <div>
      <input type="text" id="comment" required="required" v-model="comment" autocomplete="off">
      <label for="comment">Nueva tarea</label>
      </div>
      <button>+</button>
    </form>
  </div>
</template>
<script>
  import {
    mapActions
  } from 'vuex'
  export default {
    name: 'AddTask',
    data () {
      return {
        comment: ''
      }
    },
    props: ['list_id'],
    methods: {
      ...mapActions('list', [
        'saveTask'
      ]),
      save () {
        if (this.comment !== '') {
          const data = {
            comment: this.comment,
            list_id: this.list_id
          }
          this.saveTask(data)
          this.comment = ''
        }
      }
    }
  }
</script>
