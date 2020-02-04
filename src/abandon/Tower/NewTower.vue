<template>
  <div>
    <div>
      <svg width="400" height="100" class="title">
        <defs>
          <linearGradient id="geekColor" gradientTransform="rotate(90)">
            <stop offset="0%" stop-color="#f5222d">
              <!-- 渐变动画 -->
              <animate
                attributeName="stop-color"
                values="#f5222d;#fa8c16;#f5222d"
                dur="10s"
                begin="3s"
                repeatCount="indefinite"
              ></animate>
            </stop>

            <stop offset="100%" stop-color="#fa8c16">
              <animate
                attributeName="stop-color"
                values="#fa8c16;#f5222d;#fa8c16"
                dur="10s"
                begin="3s"
                repeatCount="indefinite"
              ></animate>
            </stop>
          </linearGradient>
        </defs>
        <text x="70" y="50" class="logo_text">欢迎来到{{ name }}之塔</text>
      </svg>
    </div>
    <!--    <div style="padding-left:10px;font-size:30px;font-weight:900">
      欢迎来到{{ name }}之塔
    </div> -->
    <!-- <div
      style="width:100px;height:300px;background-color:white;position:fixed;right:20px;"
    >
      <el-button>增加层</el-button>
      <el-button>增加砖块</el-button>
      <el-button>增加层</el-button>
    </div>-->

    <div v-for="(item, index) in bricksCollection" :key="item">
      <div style="width:100%;">
        <div
          style="text-align:left;padding-left:10px;font-size:30px;font-weight:900;margin-top:30px"
        >
          第{{ index + 1 }}层
        </div>
      </div>
      <div style="width:100%;display:flex;" class="towerbox">
        <div v-for="i in item.bricks" :key="i">
          <div class="bricks">
            <div
              style="margin:5px 20px 0 20px;color:white;font-size:20px"
              class="zi"
            >
              {{ i }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "数学",
      floor: 1,
      bricksCollection: [
        { bricks: ["高等数学", "语文"] },
        { bricks: ["hahha", "语文"] }
      ]
    };
  }
};
</script>

<style>
.towerbox {
  flex-flow: row wrap;
  border-radius: 7px;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
  background-color: white;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  animation: 1s linear 1s show forwards;
}

.bricks {
  background-color: black;
  padding: 10px;
  margin: 20px;
  border-radius: 5px;
  font-weight: 500;
  animation: all 0.5s linear;
}
.bricks:hover {
  background-color: black;
  font-weight: 900;
  cursor: pointer;
}

.zi {
  position: relative;
  bottom: 4px;
}

.ceng {
  background-color: white;
}
@keyframes show {
  from {
    visibility: hidden;
  }
  to {
    visibility: visible;
  }
}

.logo_text {
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
  font-size: 40px;
  fill: none;
  stroke: url("#geekColor");
  stroke-width: 1;
  stroke-dasharray: 10 800;
  stroke-dashoffset: 10;

  animation: 6s linear 0s drawing forwards;
}

/* 绘画动画 */
@keyframes drawing {
  to {
    stroke-dasharray: 800;
    stroke-dashoffset: 0;
  }
}
</style>
