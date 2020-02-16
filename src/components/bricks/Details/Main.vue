<template>
  <div>
    <div class="header">
      <div class="title-header">{{ selectBrick.name }}</div>
      <div class="decorate"></div>
      <el-button class="construction" @click="pushToconstruction">结构</el-button>
      <el-button class="rule" @click="openRule">规则</el-button>
      <el-button class="feedback" @click="openFeedback">问题反馈</el-button>
    </div>
    <div class="main">
      <div class="nav">
        <el-button
          type="text"
          class="item"
          @click="contentState = item.label"
          v-for="item in navItems"
          :key="item.name"
          :class="{ active: contentState == item.label }"
          >{{ item.name }}</el-button
        >
      </div>
      <div class="add">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <i class="el-icon-more"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="addCard">添加一个卡片</el-dropdown-item>
            <el-dropdown-item command="changeCard"
              >修改一个卡片</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="content">
        <div
          class="card"
          v-for="item in selectBrick.content[contentState]"
          :key="item.name"
        >
          <div class="title">
            <a :href="item.url" target="_blank">{{ item.name }}</a>
          </div>
          <div class="introduce">
            <p>{{ item.introduce }}</p>
          </div>
          <div class="jiesuo">{{ item.jiesuo }}</div>
          <div class="time">{{ item.updateTime }}</div>
          <div class="zan">
            <el-button type="text" class="button-zan" v-on:click="dianzan(item)"
              ><img class="dianzan" src="../../../assets/zan.png" alt="点赞按钮"
            /></el-button>
            <div class="number">{{ item.great }}</div>
          </div>
          <el-popover
            placement="right-end"
            :title="item.label.title"
            trigger="hover"
            :content="item.label.introduce"
            ><el-button
              slot="reference"
              :class="[state, item.label.color]"
            ></el-button>
          </el-popover>
        </div>
      </div>
    </div>
    <div class="footer"></div>

    <el-dialog title="增加一个卡片" :visible.sync="addFormVisible">
      <el-form :model="addform" :rules="rules" ref="addform">
        <el-form-item prop="name" label="简称" :label-width="formLabelWidth">
          <el-input v-model="addform.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="introduce"
          label="简介"
          :label-width="formLabelWidth"
        >
          <el-input v-model="addform.introduce" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="url_form"
          label="链接"
          :label-width="formLabelWidth"
        >
          <el-input v-model="addform.url_form" autocomplete="off"></el-input>
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
        <el-button type="primary" @click="addCard('addform')">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="修改一个卡片" :visible.sync="changeFormVisible">
      <el-form :model="changeform" :rules="rulesofchange" ref="changeform">
        <el-form-item prop="name" label="名称" :label-width="formLabelWidth">
          <el-input v-model="changeform.name" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
          prop="rename"
          label="修改为"
          :label-width="formLabelWidth"
        >
          <el-input v-model="changeform.rename" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item
          prop="introduce"
          label="简介"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="changeform.introduce"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item prop="url_form" label="链接" :label-width="formLabelWidth">
          <el-input v-model="changeform.url_form" autocomplete="off"></el-input>
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
        <el-button type="primary" @click="changeCard('changeform')"
          >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import htmlRules from "../../component_common/rulesforBrick";
import Labels from "../../component_common/label";

export default {
  data() {
    return {
      navItems: [
        {
          name: "教程",
          label: "courses"
        },
        {
          name: "实践",
          label: "realDone"
        },
        {
          name: "人物",
          label: "characters"
        },
        {
          name: "社区",
          label: "forums"
        },
        {
          name: "工具",
          label: "tools"
        },
        {
          name: "书",
          label: "books"
        }
      ],
      labels: Labels,
      formLabelWidth: "120px",
      addFormVisible: false,
      changeFormVisible: false,
      addform: {
        name: "",
        introduce: "",
        label: {},
        jiesuo: "",
        updateTime: "",
        url_form: "",
        url: ""
      },
      changeform: {
        name: "",
        rename: "",
        introduce: "",
        label: {},
        jiesuo: "",
        updateTime: "",
        url_form: "",
        url: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入卡片名称", trigger: "blur" },
          { min: 1, max: 20, message: "长度在1到20个字符", trigger: "blur" }
        ],
        introduce: [
          { required: true, message: "请输入砖石介绍", trigger: "blur" },
          { min: 3, max: 30, message: "长度在3到30个字符", trigger: "blur" }
        ],
        label: [{ required: true, message: "请输入砖石标签", trigger: "blur" }],
        url_form:[{ required: true, message: "请输入链接", trigger: "blur" }]
      },
      rulesofchange: {
        name: [
          { required: true, message: "请输入砖石名称", trigger: "blur" },
          { min: 1, max: 20, message: "长度在1到20个字符", trigger: "blur" }
        ],
        rename: [
          { min: 1, max: 20, message: "长度在1到20个字符", trigger: "blur" }
        ],
        introduce: [
          { required: true, message: "请输入砖石介绍", trigger: "blur" },
          { min: 3, max: 30, message: "长度在3到30个字符", trigger: "blur" }
        ],
        label: [{ required: true, message: "请输入砖石标签", trigger: "blur" }],
        url_form:[{ required: true, message: "请输入链接", trigger: "blur" }]
      },
      feedback:
        "<ul><li>因为我懒得做自己的反馈页面了，所以你即将跳转到市面上最常见的问卷调查中。</li><li>顺便一提，私人QQ1610156666</li></ul>",
      state: "state",
      contentState: "courses"
    };
  },
  methods: {
    async dianzan(item) {
      let brick = {};
      try {
        brick = await this.$request.getSelectBrick(this.selectBrick.name);
        this.$store.commit("refreshSelectBrick", brick.brick);
        this.$store.commit("mergebrick");
        
        if (brick.ok == 1) {
          for (let i of brick.brick.content[this.contentState]) {
            if (i.name == item.name) {
              i.great++;
            }
          }

          
          brick.brick.rename = brick.brick.name;
          this.$request.changebrick(brick.brick);
        } else {
          console.log("获取的砖石不存在");
            this.$request.getAll().then(res => {
            this.$store.commit("refreshBrick", res.bricks);
            this.$store.commit("refreshTower", res.towers);
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
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
    openFeedback() {
      window.open("https://www.wenjuan.com/s/InAZBb2/");
    },
    addCard(add) {
      this.$refs[add].validate(valid => {
        if (valid) {
          this.$request.getSelectBrick(this.selectBrick.name).then(brick => {
            this.$store.commit("refreshSelectBrick", brick.brick);
            let check_1 = this.checkCardExit(this.addform.name);
            let check_2 = this.checkUrlExit(this.addform.url_form);
            if (check_1 == 0 && check_2 == 1) {
              let re_url = /(?:(?:(?:[a-z]+:)?\/\/)|www\.)(?:\S+(?::\S*)?@)?(?:localhost|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3})|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#][^\s"]*)?/;
              let re_jiesuo = /提取码：.{4}/;
              this.addform.url = '';
              this.addform.jiesuo ='' ;
              if(this.addform.url_form.match(re_jiesuo)!=null){
                this.addform.jiesuo=this.addform.url_form.match(re_jiesuo)[0]
              }
              if(this.addform.url_form.match(re_url)!=null){
                this.addform.url=this.addform.url_form.match(re_url)[0]
              }


              this.addform.contentState = this.contentState;
              //生成时间
              let mydate = new Date();
              this.addform.updateTime = mydate.toLocaleString();

              this.$store.commit("addCardToBrick", this.addform);
              this.$store.commit("mergebrick");
              this.addFormVisible = false;
              brick = this.selectBrick;
              brick.rename = brick.name;
              this.$request.changebrick(brick);
            } else if (check_2 == 0) {
              this.$notify.error({
                title: "错误",
                message: "你似乎没放链接"
              });
            } else {
              this.$notify.error({
                title: "错误",
                message: "你要添加的卡片似乎已经存在了"
              });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async changeCard(change) {
      this.$refs[change].validate(valid => {
        if (valid) {
         this.$request.getSelectBrick(this.selectBrick.name).then(brick=>{
          this.$store.commit("refreshSelectBrick", brick.brick);
          this.$store.commit("mergebrick");
          let check_1 = this.checkCardExit(this.changeform.name);
          let check_2 = this.checkUrlExit(this.changeform.url_form);
          if (check_1 == 1 && check_2 == 1) {
            let re_url = /(?:(?:(?:[a-z]+:)?\/\/)|www\.)(?:\S+(?::\S*)?@)?(?:localhost|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3})|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#][^\s"]*)?/;
            let re_jiesuo = /提取码：.{4}$/;
            if(this.changeform.url_form.match(re_jiesuo)!=null){
                this.changeform.jiesuo=this.changeform.url_form.match(re_jiesuo)[0]
              }
              if(this.changeform.url_form.match(re_url)!=null){
                this.changeform.url=this.changeform.url_form.match(re_url)[0]
              }
            this.changeform.contentState = this.contentState;
            //生成时间
            let mydate = new Date();
            this.changeform.updateTime = mydate.toLocaleString();
            if(this.changeform.rename==''){this.changeform.rename=this.changeform.name}
           /*  let brickNew = this.selectBrick
            brickNew.content[this.changeform.contentState].name = this.changeform.rename
            brickNew.content[this.changeform.contentState].url = this.changeform.url
            brickNew.content[this.changeform.contentState].updateTime = this.changeform.updateTime
            brickNew.content[this.changeform.contentState].introduce = this.changeform.introduce */

            this.$store.commit("changeCard", this.changeform);
            brick = this.selectBrick;
            brick.rename=brick.name
            this.$request.changebrick(brick);

            this.changeFormVisible = false;
          } else if (check_2 == 0) {
            this.$notify.error({
              title: "错误",
              message: "你似乎没放链接"
            });
          } else {
            this.$notify.error({
              title: "错误",
              message: "你要添加的卡片似乎不存在了"
            });
          }
         })
          
          
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    checkCardExit(name) {
      let exit = 0;
        for (let card of this.selectBrick.content[this.contentState]) {
          if (card.name == name) {
            exit = 1;
            break;
          }
        }
      
      return exit;
    },
    checkUrlExit(url) {
      let exit = 0;
      let re = /(?:(?:(?:[a-z]+:)?\/\/)|www\.)(?:\S+(?::\S*)?@)?(?:localhost|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]\d|\d)){3})|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#][^\s"]*)?/;
      if (url.match(re) != null) {
        exit = 1;
      }
      return exit;
    },
    handleCommand(command) {
      if (command == "addCard") {
        this.addFormVisible = true;
      } else if (command == "changeCard") {
        this.changeFormVisible = true;
      }
    },
    pushToconstruction(){
      this.$router.push('construction')
    }
  },
  computed: {
    selectBrick() {
      return this.$store.state.selectBrick;
    },
    Bricks(){
      return this.$store.state.bricks;
    }
  }
};
</script>

<style scoped>
.button-zan {
  padding: 1px 4px 1px 1px;
  position: relative;
  bottom: 3px;
  z-index: 3;
}
.state {
  width: 14px;
  height: 14px;
  border-radius: 7px;
  position: absolute;
  right: 15px;
  top: 15px;
  padding: 0px;
}

.zan img {
  width: 20px;
  z-index: 1;
  cursor: pointer;
}

.zan {
  position: absolute;
  right: 30px;
  bottom: 15px;
  font-size: 12px;
  display: flex;
  color: rgba(0, 0, 0, 0.5);
  font-family: -apple-system, BlinkMacSystemFont, Helvetica Neue, PingFang SC,
    Microsoft YaHei, Source Han Sans SC, Noto Sans CJK SC, WenQuanYi Micro Hei,
    sans-serif;
  font-weight: bold;
}
.time {
  position: absolute;
  color: rgba(0, 0, 0, 0.5);
  left: 30px;
  bottom: 27px;
  font-size: 12px;
}
.jiesuo {
  position: absolute;
  color: #f759ab;
  left: 30px;
  top: 57px;
  font-size: 12px;
  font-weight: bold;
}

.introduce {
  font-size: 16px;
  color: rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 65px;
  left: 30px;
  width: 265px;
  height: 270px;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: pre-wrap;
}

.dianzan:hover {
  opacity: 0.5;
}
.title a:hover {
  color: rgba(255, 77, 79, 100);
}
.title > a {
  color: black;
}

.title {
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  left: 30px;
}

.card {
  width: 320px;
  height: 400px;
  border-radius: 7px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  position: relative;
  margin: 20px 20px 20px 20px;
}

.content {
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  margin: 0 auto;
  width: 90%;
  justify-content: space-around;
}

.nav .item {
  margin-left: 25px;
  font-size: 20px;
}

.nav {
  width: 90%;
  margin: 0 auto;
  height: 50px;
  background-color: rgba(64, 169, 255, 0.12);
  box-shadow: 0 2px 6px 0 rgba(64, 169, 255, 0.12);
  display: flex;
  align-items: center;
}
.feedback {
  background-color: rgba(64, 169, 255, 100);
  width: 100px;
  height: 42px;
  border-radius: 14px;
  position: absolute;
  top: 20px;
  right: 80px;
  color: white;
}
.rule {
  background-color: rgba(255, 77, 79, 100);
  width: 80px;
  height: 42px;
  border-radius: 14px;
  position: absolute;
  top: 20px;
  right: 200px;
  color: white;
}
.construction {
  background-color: #fa8c16;
  width: 80px;
  height: 42px;
  border-radius: 14px;
  position: absolute;
  top: 20px;
  right: 300px;
  color: white;
}

.decorate {
  width: 100px;
  background-color: rgba(64, 169, 255, 100);
  border-width: 0px;
  height: 5px;
  border-radius: 2px;
  margin: 0 auto;
}
.title-header {
  font-size: 40px;
  font-weight: bold;
}

.header {
  position: relative;
  margin-top: 30px;
  width: 100%;
  margin-bottom: 40px;
}
.introduce a:visited {
  color: #40a9ff;
}
a {
  text-decoration: none;
}
.add {
  position: absolute;
  top: 150px;
  left: 60px;
}
.el-icon-more {
  font-size: 20px;
}
.active {
  color: red;
}
.el-button{
  border-width: 0px;
  font-weight: bold;
}

</style>
