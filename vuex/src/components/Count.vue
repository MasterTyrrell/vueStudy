<template>
  <div>
  <h1>{{msg}}</h1>
  <hr>
  <p>{{$store.state.a.count}}--{{count}}</p>
  <p><button @click="$store.commit('add',10)">+</button><button @click="reduce">-</button></p>
  <p><button @click="addAction">+</button><button @click="reduceAction">-</button></p>
  </div>
</template>
<script>
import store from '@/vuex/store';
import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return {
      msg:'Hello msg',
    }
  },
  // // 第一种
  // // computed:{
  // //   count(){
  // //     return this.$store.state.count;
  // //   }
  // // },
  // // 第二种
  // computed:mapState({
  //   count:state=>state.count
  // }),
  // // computed:mapState({
  // //   count:function(state){
  // //     return state.count;
  // //   }
  // // }),
  // //第三种
  // // computed:mapState(['count']),
  computed:{
    ...mapState(['count']),
    // 第一种
    // count(){
    //   return this.$store.getters.count;
    // }
    // 第二种
    ...mapGetters(['count']),
  },
  methods:{
    ...mapMutations(['reduce']),
    ...mapActions(['addAction','reduceAction'])
  },
  store
}
</script>
