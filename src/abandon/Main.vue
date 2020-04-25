<template>
  <div>
    <div class="header">
      <div class="zhuanshi">砖石</div>
      <div class="more">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="addBrick">添加一块砖石</el-dropdown-item>
            <el-dropdown-item command="changeBrick"
              >修改一块砖石</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <Search :state="'bricks'"></Search>
      <el-button class="feedback">问题反馈</el-button>
    </div>
    <el-divider></el-divider>
    <div class="main">
      <Brick v-bind:item="brick" v-for="brick in this.Bricks" :key="brick.name"></Brick>
    </div>
    <div class="footer"></div>
  <el-dialog title="增加一块砖石" :visible.sync="addFormVisible">
      <el-form :model="addform" :rules="rules" ref="addform">
        <el-form-item prop="name" label="名称" :label-width="formLabelWidth">
          <el-input v-model="addform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="introduce"
          label="砖石简介"
          :label-width="formLabelWidth"
        >
          <el-input v-model="addform.introduce" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="label" label="标签" :label-width="formLabelWidth">
          <el-select
            value-key="title"
            v-model="addform.label"
            placeholder="请选择标签"
          >
            <el-option
              v-for="i in labels"
              :key="i.title"
              :label="i.title"
              :value="i"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addBrick('addform')"
          >确 定</el-button
        >
      </div>
    </el-dialog>



  <el-dialog title="修改一块砖石" :visible.sync="changeFormVisible">
      <el-form :model="changeform" :rules="rulesofchange" ref="changeform">
        <el-form-item prop="name" label="名称" :label-width="formLabelWidth">
          <el-input v-model="changeform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="rename" label="修改为" :label-width="formLabelWidth">
          <el-input v-model="changeform.rename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="introduce"
          label="砖石简介"
          :label-width="formLabelWidth"
        >
          <el-input v-model="changeform.introduce" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="label" label="标签" :label-width="formLabelWidth">
          <el-select
            value-key="title"
            v-model="changeform.label"
            placeholder="请选择标签"
          >
            <el-option
              v-for="i in labels"
              :key="i.title"
              :label="i.title"
              :value="i"
            >
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="changeFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeBrick('changeform')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Brick from "../component_common/brick";
import Search from "../component_common/search";
import Labels from "../component_common/label"
export default {
  data() {
    return {
      labels:Labels,
      formLabelWidth: "120px",
      changeFormVisible: false,
      addFormVisible: false,
      rules: {
        name: [
          { required: true, message: "请输入砖石名称", trigger: "blur" },
          { min: 2, max: 20, message: "长度在2到20个字符", trigger: "blur" }
        ],
        introduce: [
          { required: true, message: "请输入砖石介绍", trigger: "blur" },
          { min: 3, max: 30, message: "长度在3到30个字符", trigger: "blur" }
        ],
        label: [{ required: true, message: "请输入砖石标签", trigger: "blur" }]
      },
      rulesofchange:{
        name: [
          { required: true, message: "请输入砖石名称", trigger: "blur" },
          { min: 2, max: 20, message: "长度在2到20个字符", trigger: "blur" }
        ],
        rename:[
          { min: 2, max: 20, message: "长度在2到20个字符", trigger: "blur" }
        ],
        introduce: [
          { required: true, message: "请输入砖石介绍", trigger: "blur" },
          { min: 3, max: 30, message: "长度在3到30个字符", trigger: "blur" }
        ],
        label: [{ required: true, message: "请输入砖石标签", trigger: "blur" }]
      },
      addform: {
        name: "",
        introduce: "",
        label:{}
      },
      changeform: {
        name: "",
        rename: "",
        introduce: "",
        label:{}
      },
      
    };
  },
  components: {
    Brick,
    Search,
  },
  methods: {
    handleCommand(command) {
      if (command == "addBrick") {
        this.addFormVisible = true;
      } else if (command == "changeBrick") {
        this.changeFormVisible = true;
      }
    },
    checkBrickExit(name) {
      let exit=0
      for(let brick of this.Bricks){
        if(name == brick.name){
          exit=1
        }
      }
      return exit
    },
    getyourbrick(rename, name) {
      let brick = {};
      for (let item of this.Bricks) {
        if (item.name == rename) {
          brick = item;
          break
        }
      }
      brick.name = name;
      brick.rename = rename;
            console.log(brick)
      return brick;
    },
    getyourtower(rename, name) {
      let tower = this.selectTower;
      tower.name = name;
      tower.rename = rename;

      return tower
    },
    addBrick(form) {
      this.$refs[form].validate(valid => {
        if (valid) {
          this.$request.getAll()
          .then((res)=>{
        this.$store.commit('refreshBrick',res.bricks)
        this.$store.commit('refreshTower',res.towers)

        //检查砖石是否已经存在
          let check_1 = this.checkBrickExit()
          if(check_1 ==0){
            this.$store.commit('addBrick',this.addform)
            let brick ={
                    name: this.addform.name,
                    introduce: this.addform.introduce,
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
                    title: this.addform.label.title,
                    introduce: this.addform.label.introduce,
                    color: this.addform.label.color
                  },
                      front: [],
                      behind: []
                    }
            this.$request.addbrick(brick)

            
            
            this.addFormVisible = false
          }else{
            this.$notify.error({
              title:"错误",
              message:"你想添加的砖石已经存在啦"
            })
          }
      })
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    changeBrick(form){
      this.$refs[form].validate(valid => {
        if (valid) {

          this.$request.getAll()
          .then((res)=>{
        this.$store.commit('refreshBrick',res.bricks)
        this.$store.commit('refreshTower',res.towers)

        //检查砖石是否存在
          let check_1 = this.checkBrickExit(this.changeform.name)
          let check_2 = this.changeform.rename==''?1:0
          let check_3 = this.checkBrickExit(this.changeform.rename)
          if(check_1==0){
            this.$notify.error({
              title:"错误",
              message:"你要修改的砖石不存在"
            })
          }else if(check_2==1){         
            this.changeform.rename = this.changeform.name
            this.$store.commit('changeBrick',this.changeform)
            let brick = this.getyourbrick(this.changeform.rename,this.changeform.name)
            this.$store.commit('mergebrick',brick)
            this.$request.changebrick(brick)
            this.changeFormVisible = false
          }else if(check_3==1){
            this.$notify.error({
              title:"错误",
              message:"你要修改的砖石与已有砖石重复啦"
            })
          }else{
            this.$store.commit('changeBrick',this.changeform)
            let brick = this.getyourbrick(this.changeform.rename,this.changeform.name)
            this.$request.changebrick(brick)
            this.changeFormVisible = false
          }
      })
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  computed:{
    Bricks(){
      return this.$store.state.bricks
    }
  }
};
</script>

<style scoped>
.zhuanshi {
  font-size: 48px;
  font-weight: bold;
  color: rgba(250, 140, 22, 100);
  position: absolute;
  top: 0px;
  left: 20px;
}
.more {
  position: absolute;
  left: 200px;
  top: 40px;
  font-size: 20px;
}
.feedback {
  background-color: rgba(64, 169, 255, 100);
  color: white;
  position: absolute;
  top: 20px;
  right: 5%;
  border-radius: 10px;
  width: 120px;
}
.header {
  margin-top: 20px;
  position: relative;
  height: 60px;
  width: 100%;
}
.main {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  width: 100%;
  align-items: flex-start;
}
</style>
