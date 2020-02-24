<template>
  <div id="hello">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: ''
    }
  },
  
  data: function () {
    return {
    }
  }
}
</script>
