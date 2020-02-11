const store = {
  state: {
    bricks: [
      {
        name: "小学数学",
        introduce: "工科学习的基石",
        content: {
          courses: [
            {
              name: "张宇高数",
              introduce:
                "这是一段乱七八糟没有意义的介绍，至于为什么要有这一段介绍，就是为了当事人可以很方便地了解到 这个教程是否适合他",
              jiesuo: "2E6Y",
              url: "https://baidu.com",
              updateTime: "2019-10-19",
              great: 431,
              label: {
                title: "简单",
                introduce: "课程偏简单",
                color: "blue"
              }
            }
          ],
          realDone: [
            {
              name: "realDone",
              introduce:
                "这是一段乱七八糟没有意义的介绍，至于为什么要有这一段介绍，就是为了当事人可以很方便地了解到 这个教程是否适合他",
              jiesuo: "2E6Y",
              url: "https://baidu.com",
              updateTime: "2019-10-19",
              great: 431,
              label: {
                title: "理科",
                introduce: "内容偏向于理科",
                color: "blue"
              }
            }
          ],
          characters: [],
          forums: [],
          tools: [],
          books: []
        },
        label: {
          title:"理科",
          introduce:"内容偏向于传统理科",
          color:"blue"
  },
        front: ["高中数学"],
        behind: ["线性代数"]
      },
      {
        name: "初中数学",
        introduce: "工科学习的基石",
        content: {
          courses: [
            {
              name: "张宇高数",
              introduce:
                "这是一段乱七八糟没有意义的介绍，至于为什么要有这一段介绍，就是为了当事人可以很方便地了解到 这个教程是否适合他",
              jiesuo: "2E6Y",
              url: "https://baidu.com",
              updateTime: "2019-10-19",
              great: 431,
              label: {
                title: "简单",
                introduce: "课程偏简单",
                color: "blue"
              }
            }
          ],
          realDone: [
            {
              name: "realDone",
              introduce:
                "这是一段乱七八糟没有意义的介绍，至于为什么要有这一段介绍，就是为了当事人可以很方便地了解到 这个教程是否适合他",
              jiesuo: "2E6Y",
              url: "https://baidu.com",
              updateTime: "2019-10-19",
              great: 431,
              label: {
                title: "理科",
                introduce: "内容偏向于理科",
                color: "blue"
              }
            }
          ],
          characters: [],
          forums: [],
          tools: [],
          books: []
        },
        label: {
            title:"理科",
            introduce:"内容偏向于传统理科",
            color:"blue"
    },
        front: ["高中数学"],
        behind: ["线性代数"]
      },
      {
        name: "高中数学",
        introduce: "工科学习的基石",
        content: {
          courses: [
            {
              name: "张宇高数",
              introduce:
                "这是一段乱七八糟没有意义的介绍，至于为什么要有这一段介绍，就是为了当事人可以很方便地了解到 这个教程是否适合他",
              jiesuo: "2E6Y",
              url: "https://baidu.com",
              updateTime: "2019-10-19",
              great: 431,
              label: {
                title: "简单",
                introduce: "课程偏简单",
                color: "blue"
              }
            }
          ],
          realDone: [
            {
              name: "realDone",
              introduce:
                "这是一段乱七八糟没有意义的介绍，至于为什么要有这一段介绍，就是为了当事人可以很方便地了解到 这个教程是否适合他",
              jiesuo: "2E6Y",
              url: "https://baidu.com",
              updateTime: "2019-10-19",
              great: 431,
              label: {
                title: "理科",
                introduce: "内容偏向于理科",
                color: "blue"
              }
            }
          ],
          characters: [],
          forums: [],
          tools: [],
          books: []
        },
        label: {
            title:"理科",
            introduce:"内容偏向于传统理科",
            color:"blue"
    },
        front: ["高中数学"],
        behind: ["线性代数"]
      },
      {
        name: "大学数学",
        introduce: "工科学习的基石",
        content: {
          courses: [
            {
              name: "张宇高数",
              introduce:
                "这是一段乱七八糟没有意义的介绍，至于为什么要有这一段介绍，就是为了当事人可以很方便地了解到 这个教程是否适合他",
              jiesuo: "2E6Y",
              url: "https://baidu.com",
              updateTime: "2019-10-19",
              great: 431,
              label: {
                title: "简单",
                introduce: "课程偏简单",
                color: "blue"
              }
            }
          ],
          realDone: [
            {
              name: "realDone",
              introduce:
                "这是一段乱七八糟没有意义的介绍，至于为什么要有这一段介绍，就是为了当事人可以很方便地了解到 这个教程是否适合他",
              jiesuo: "2E6Y",
              url: "https://baidu.com",
              updateTime: "2019-10-19",
              great: 431,
              label: {
                title: "理科",
                introduce: "内容偏向于理科",
                color: "blue"
              }
            }
          ],
          characters: [],
          forums: [],
          tools: [],
          books: []
        },
        label: {
            title:"理科",
            introduce:"内容偏向于传统理科",
            color:"blue"
    },
        front: ["高中数学"],
        behind: ["线性代数"]
      }
      
    ],
    towers: [{
      "name": "数学",
      "introduce": "数学是通向世界真理的必经之路。",
      "updatetime": "2020-1-31",
      "see": 31,
      "brickList": [{
          "items":["小学数学","大学数学"],
          "introduce":"第一层通常是一些非常基础的学科，有些学科甚至看似与本塔无关，但实则非常重要。"
      },{
          "items":["初中数学","初中物理"],
          "introduce":"第二层通常是一些非常基础的学科，有些学科甚至看似与本塔无关，但实则非常重要。"
      }]
      
  }],
    selectBrick: {
      name: "高等数学",
      introduce: "工科学习的基石",
      content: {
        courses: [
          {
            name: "张宇高数",
            introduce:
              "这是一段乱七八糟没有意义的介绍，至于为什么要有这一段介绍，就是为了当事人可以很方便地了解到 这个教程是否适合他",
            jiesuo: "2E6Y",
            url: "https://baidu.com",
            updateTime: "2019-10-19",
            great: 431,
            label: {
              title: "简单",
              introduce: "课程偏简单",
              color: "blue"
            }
          }
        ],
        realDone: [
          {
            name: "realDone",
            introduce:
              "这是一段乱七八糟没有意义的介绍，至于为什么要有这一段介绍，就是为了当事人可以很方便地了解到 这个教程是否适合他",
            jiesuo: "2E6Y",
            url: "https://baidu.com",
            updateTime: "2019-10-19",
            great: 431,
            label: {
              title: "理科",
              introduce: "内容偏向于理科",
              color: "blue"
            }
          }
        ],
        characters: [],
        forums: [],
        tools: [],
        books: []
      },
      label: {
        title:"理科",
        introduce:"内容偏向于传统理科",
        color:"blue"
},
      front: ["高中数学","线性代数"],
      behind: ["线性代数"]
    },
    selectTower: {
      "name": "数学",
      "introduce": "数学是通向世界真理的必经之路。",
      "updatetime": "2020-1-31",
      "see": 31,
      "brickList": [{
          "items":["小学数学","大学数学"],
          "introduce": "数学是通向世界真理的必经之路。"
      },{
          "items":["初中数学","初中物理"],
          "introduce": "数学是通向世界真理的必经之路。"
      }]
      
  }
  },
  mutations: {
    //切换砖石的状态
    changeBrickState(state, name) {
      for(let item of state.bricks){
        if(item.name == name){
          state.selectBrick=item
        }else{
          console.log('在切换砖石状态的时候出现意外')
        }
      }
    },
    //切换选择塔的状态
    changeTowerState(state, name) {
      for(let item of state.towers){
        if(item.name == name){
          state.selectTower=item
        }else{
          console.log('在切换塔状态的时候出现意外')
        }
      }
    },
    //添加砖石
    addBrick(state,form){
      let brick ={
        name: form.name,
        introduce: form.introduce,
        content: {
          courses: [
          ],
          realDone: [
          ],
          characters: [],
          forums: [],
          tools: [],
          books: []
        },
        label: {
          title: form.label.title,
          introduce: form.label.introduce
        },
        front: [],
        behind: []
      }
      state.bricks.push(brick)
    },




    //向塔中添加砖石
    //默认塔中没有重复砖石
    addBrickToTower(state,poly){
      for(let tower of state.towers){
        if (tower.name == poly.name){
          tower.brickList[poly.index-1].items.push(poly.brickname)
        }else{console.log('在addBrickToTower中没找到塔的存在')}
      }
    },





    //向塔中添加一层
    addFloor(state,data){
      let name = data.name
      let floor={
        "items":[],
        "introduce":"第一层通常是一些非常基础的学科，有些学科甚至看似与本塔无关，但实则非常重要。"
    }
      for(let tower of state.towers){
        if(tower.name == name){
          tower.brickList.push(floor)
          break
        }
      }
      this.commit('changeTowerState',name)
    },

    //向现在选择的塔中添加砖石
    addBrickToselectTower(state,poly){
      if(state.selectTower.name == poly.name){
        state.selectTower.brickList[poly.index-1].items.push(poly.brickname)
      }else{
        console.log('在添加给现有塔内容时发生了错误，名字没对上')
      }
    },
    //修改塔中砖石的层数和名称并刷新现有塔的状态
    changeTowerItemName(state,data){
      //原name
      let name = data.name
      //修改砖石的index
      let reindex = data.index-1
      //要修改的name
      let rename = data.rename

      if(rename==''){rename=name}

      for(let tower of state.towers){
        if(tower.name == state.selectTower.name){
          for(let ceng=0;ceng<tower.brickList.length;ceng++){
            for(let i=0;i<tower.brickList[ceng].items.length;i++){
              if(tower.brickList[ceng].items[i] == name){
                tower.brickList[ceng].items.splice(i,1)
              }
            }
            if(ceng==reindex){
              tower.brickList[ceng].items.push(rename)
            }

          }          
        
          break

        }
      }
      //刷新现选塔的状态
      this.commit('changeTowerState',state.selectTower.name)
    },
    //修改砖石名字，介绍和标签
    changeBrick(state,data){
      //原来砖石的名字
      let name = data.name
      //修改砖石的名字
      let rename = data.rename
      //修改砖石的介绍
      let introduce = data.introduce
      //修改砖石的标签
      let label = data.label
      //找到砖石，修改其名称和标签
      for(let i=0;i<state.bricks.length;i++){
        //检查砖石是否已存在，存在则修改无效
        if(state.bricks[i].name == rename){
          break
        }else if(state.bricks[i].name == name){
          if(rename==''){rename=name}
          state.bricks[i].name = rename
          state.bricks[i].introduce = introduce
          state.bricks[i].label = label
          break
        }
      }

    }
    
  },
  getters: {
    indexBricks: state => {
      return state.bricks.map(item => {
        return { name: item.name };
      });
    },
    indexTower: state => {
      return state.towers.map(item => {
        return { name: item.name };
      });
    }
  }
};

export default store;
