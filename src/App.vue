<template>
  <div id="app" :style="widthSize">
    <empty v-if="lists.length === 0"></empty>
    <add-list></add-list>
    <div class="lists">
      <list v-for="(list, index) in lists" :list="list" :id="index" key="index"></list>
    </div>
  </div>
</template>

<script>
import Empty from './components/todo/Empty'
import AddList from './components/todo/AddList'
import List from './components/list/List'
import {
  mapGetters
} from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      style: {
        width: 'auto'
      }
    }
  },
  components: {
    Empty,
    AddList,
    List
  },
  computed: {
    ...mapGetters('list', {
      lists: 'allList'
    }),
    widthSize () {
      const listCount = this.lists.length
      const size = (listCount * 300 + 30)
      return {
        width: listCount > 0 ? `${size}.px` : '100%'
      }
    }
  }
}
</script>
