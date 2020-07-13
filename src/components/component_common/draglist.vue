<template>
  
</template>
<script>


export default {
  name: "nestedDraggable",
  data() {
    return {
      
    };
  },

  components: {
    draggable
  },
  methods: {
    
  },
  computed: {
    selected() {
      return this.selectNodeId;
    }
  },
  created() {},
  mounted(){
        document.body.ondrop = function (event) {
            event.preventDefault();
            event.stopPropagation();
        }
  }
};
</script>
<style scoped lang="less">

</style>
