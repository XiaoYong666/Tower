<template>
  <div>
    <div class="header">
      <div class="tower">塔</div>
      <div class="more">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="addTower">添加一个塔</el-dropdown-item>
            <!--             <el-dropdown-item command="changeBrick"
              >修改一块砖石</el-dropdown-item
            > -->
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <Search></Search>
      <el-button class="feedback">问题反馈</el-button>
      <el-button class="rule" @click="openRule">规则</el-button>
    </div>
    <el-divider></el-divider>
    <div class="towerbox">
      <TowerItem 
      v-for="tower in towers"
      :key="tower.name"
      :towerItem="tower" 
      @click.native="routerToTowerDetails(tower.name)"></TowerItem>
    </div>
    <el-dialog title="增加一块塔" :visible.sync="addFormVisible">
      <el-form :model="addform" :rules="rules" ref="addform">
        <el-form-item prop="name" label="塔的名称" :label-width="formLabelWidth">
          <el-input v-model="addform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="introduce"
          label="塔的简介"
          :label-width="formLabelWidth"
        >
          <el-input v-model="addform.introduce" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('addform')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Search from "../component_common/search";
import TowerItem from "../component_common/toweritem"
let htmlRules =
  "<ul><li>默认不能修改塔的内容和简介，只有<strong>管理员</strong>可以修改,<strong>没错只有我一个人</strong>，因为塔的内容和简介关联塔内层级，不方便修改。请谨慎添加。</li><li>当然，可以联系QQ1610156666更改。</li><li>后期开放注册账号了以后就会启用。</li></ul>";
export default {
  data() {
    return {
      formLabelWidth:'120px',
      addFormVisible: false,
      addform:{
        name:"",
        introduce:""
      },
      rules: {
        name: [
          { required: true, message: "请输入塔的名称", trigger: "blur" },
          { min: 2, max: 6, message: "长度在2到6个字符", trigger: "blur" }
        ],
        introduce: [
          { required: true, message: "请输入塔介绍", trigger: "blur" },
          { min: 3, max: 20, message: "长度在3到20个字符", trigger: "blur" }
        ]
      }
    };
  },
  components: {
    Search,
    TowerItem
  },
  methods: {
    openRule() {
      this.$alert(htmlRules, "规则", {
        confirmButtonText: "确定",
        dangerouslyUseHTMLString: true,
        callback: () => {
          this.$message({
            type: "info",
            message: "好好记住哦~"
          });
        }
      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleCommand(command) {
      if (command == "addTower") {
        this.addFormVisible = true;
      }
    },
    routerToTowerDetails(name){
      console.log("点击了")
      for(let item of this.towers){
        if(item.name == name){
          this.$store.commit('changeTowerState',name)
          this.$router.push(
          {path:"towerDetail"}
          )
        }
      }
    }
  },
  computed: {
    selectTower() {
      return this.$store.state.selectTower;
    },
    towers(){
      return this.$store.state.towers
    }
  }
};
</script>

<style scoped>


.towerbox {
  width: 100%;
  display: flex;
  flex-flow: wrap;
}

.header {
  margin-top: 20px;
  position: relative;
  height: 60px;
  width: 100%;
}
.tower {
  font-size: 48px;
  font-weight: bold;
  color: rgba(64, 169, 255, 100);
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


.rule {
  position: absolute;
  top: 40px;
  left: 90px;
  padding: 0;
  border-width: 0px;
  padding: 2px;
  font-weight: bold;
  color: red;
}</style
>>
