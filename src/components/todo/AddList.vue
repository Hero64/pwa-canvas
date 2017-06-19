<template>
  <div class="add-list">
    <button class="add-button" :class="{ active }" @click="showForm()">
      <i class="material-icons">add</i>
    </button>
    <div class="add-list-form-container" :class="{ active }">
      <form action="#" @submit.prevent="send()">
        <div>
          <input type="text" class="add-list-input" placeholder="Nombre de la Lista..." autofocus v-model="listName">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import {
    mapActions
  } from 'vuex'
  export default {
    name: 'AddList',
    data () {
      return {
        active: false,
        listName: ''
      }
    },
    methods: {
      ...mapActions('list', [
        'saveList'
      ]),
      send () {
        // validate the list
        this.saveList(this.listName)
        this.active = false
        this.listName = ''
      },
      showForm () {
        this.active = !this.active
        if (this.active) {
          document.querySelector('.add-list-input').focus()
        } else {
          document.querySelector('body').focus()
        }
      }
    }
  }
</script>
