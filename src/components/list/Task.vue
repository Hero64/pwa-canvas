<template>
  <div class="task-container">
    <div class="task-date">
      {{ task.date }}
    </div>
    <div class="task-description">
      {{ task.description }}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'task',
    props: ['task']
  }
</script>
