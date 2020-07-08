import createVuexAlong from 'vuex-along'

const store = {
  state: {
  dragOpen:false,
  selectNodeId:"",
  },
  mutations: {
    openDrag(state){
      state.dragOpen=true
    },
    closeDrag(state){
      state.dragOpen=false
    },
    selectNode(state,id){
      state.selectNodeId=id
    },
    syncContext(){
      console.log('sync')
    }


  },
  plugins:[createVuexAlong()]
  /* plugins:[createVuexAlong()] */
};

export default store;
