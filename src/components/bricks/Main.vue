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
      <Search></Search>
      <el-button class="feedback">问题反馈</el-button>
    </div>
    <el-divider></el-divider>
    <div class="main">
      <Brick v-bind:item="Bricks[0]"></Brick>
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
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('addform')"
          >确 定</el-button
        >
      </div>
    </el-dialog>



    <el-dialog title="修改一块砖石" :visible.sync="changeFormVisible">
      <el-form :model="changeform">
        <el-form-item label="原名称" :label-width="formLabelWidth">
          <el-input v-model="changeform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="changeform.rename" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="砖石简介" :label-width="formLabelWidth">
          <el-input
            v-model="changeform.introduce"
            autocomplete="off"
            maxlength="20"
            type="text"
            show-word-limit
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="changeFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm('addform')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Brick from "../component_common/brick";
import Search from "../component_common/search";

export default {
  data() {
    return {
      formLabelWidth: "120px",
      changeFormVisible: false,
      addFormVisible: false,
      rules: {
        name: [
          { required: true, message: "请输入砖石名称", trigger: "blur" },
          { min: 2, max: 6, message: "长度在2到6个字符", trigger: "blur" }
        ],
        introduce: [
          { required: true, message: "请输入砖石介绍", trigger: "blur" },
          { min: 3, max: 20, message: "长度在3到20个字符", trigger: "blur" }
        ]
      },
      addform: {
        name: "",
        introduce: ""
      },
      changeform: {
        name: "",
        rename: "",
        introduce: ""
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
    addNewBrick() {},
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
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
}
</style>
