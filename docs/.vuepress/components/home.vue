<template>
    <div class="home backgrounds">
        <div class="bg ">
            <div class="main">
                <div class="left">
                    <div class="words">Hello, my name is </div>
                    <div class="words">lanting 🧑🏻‍💻</div>
                    <div class="gray">「十年饮冰，难凉热血。」</div>
                    
                    <div class="nav">
                        <div class="createTaskItem">
                            <a href="/article/xunkdas4/">个人简介</a></div>
                        <div class="createTaskItem">
                            <a href="/blog">前端笔记</a></div>
                        <div class="createTaskItem">
                        <a href="https://github.com/lantingBoy">GitHub</a> </div>

                    </div>
                </div>
                <div class="right"></div>
               
            </div>
           
            <Skill/>
        </div>
    </div>
</template>
<script setup>
    import Skill from "./skill.vue"
</script>
<style scoped>

    .home{
        width: 100%;
        height: 100%;
    }
    .main{
        width: 60%;
        margin: 40px auto 120px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .words{
        font-size: 65px;
        font-weight: bold;
        line-height: 85px;
    }
    .bg{
        height: 100vh;
        padding-top: 40px;
        background: url("../public/bg.svg") no-repeat left center;
        background-size: 100% 100%;
    }
    .right{
        width: 450px;
        height: 549px;
        background: url("../public/assets/backgrounds//me.png")no-repeat left center;
        margin-left: 110px;

    }
    .gray{
        color: #999;
        margin-top: 16px;
    }
    .nav{
        display: flex;
        margin-top: 20px;
    }
    .nav a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    .btn{
        cursor: pointer;
        display: flex;
            padding: 0.5rem 1rem;
            gap: 0.5rem;
            color: #fff;
            border: 1px solid #7611a6;
            background-color: #7611a6;
            border-radius: 999rem;
            font-size: 16px;
            line-height: 1.35;
            white-space: nowrap;
            margin-left: 10px;
    }
    .btn:hover{
        opacity: .8;
    }

    .createTaskItem {
        margin-top: 20px;
        cursor: pointer;
    width: 120px;
    height: 50px;
    border-radius: 16px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    position: relative;
    transition: all 0.3s ease;
    overflow: hidden;
    z-index: 10;
  }
  @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
  .createTaskItem:not(:last-child) {
      margin-right: 20px;
    }
    .createTaskItem:nth-child(1) {
      background: linear-gradient(315deg, #7f15db 0%, #a708d6 100%);
    }
    .createTaskItem:nth-child(2) {
      background: linear-gradient(135deg, #7f15db 0%, #503be0 100%);
    }
    .createTaskItem:nth-child(3) {
      background: linear-gradient(135deg, #503be0 0%, #195dd1 100%);
    }
    .createTaskItem:nth-child(4) {
      background: linear-gradient(315deg, #15bde5 0%, #195dd1 100%);
    }
    .createTaskItem::before {
      content: "";
      width: 200%;
      height: 500%;
      background-color: rgba(255, 255, 255, 0.4);
      position: absolute;
      top: -200%;
      left: -50%;
      z-index: -2;
    }
    .createTaskItem::after {
      content: "";
      position: absolute;
      inset: 2px;
      z-index: -1;
      border-radius: 14px;
    }
    .createTaskItem:nth-child(1)::after {
      background: linear-gradient(315deg, #7f15db 0%, #a708d6 100%);
    }
    .createTaskItem:nth-child(2)::after {
      background: linear-gradient(135deg, #7f15db 0%, #503be0 100%);
    }
    .createTaskItem:nth-child(3)::after {
      background: linear-gradient(135deg, #503be0 0%, #195dd1 100%);
    }
    .createTaskItem:nth-child(4)::after {
      background: linear-gradient(315deg, #15bde5 0%, #195dd1 100%);
    }
    .createTaskItem:hover {
      box-shadow: 0px 2px 16px rgba(8, 6, 64, 0.25);
      transform: translateY(-8px);
      &::before {
        background-image: conic-gradient(transparent, #fff, transparent 30%);
        z-index: -2;
        animation: rotate 5s linear infinite;
      }
    }
</style>