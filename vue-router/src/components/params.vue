<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{$route.params.id}}</p>
    <p>{{$route.params.title}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'params page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
