<template>
    <div id="headsearch">
      <img src="/static/img/logo.png" alt="">
      <div class="choosecity">北京 <i class="fa fa-angle-down fa-lg"></i></div>
      <div class="citydetail">
        <div class="triangle"></div>
        <div class="thiscity">
          <span>当前城市: </span>
          <a class="active" href="#">全国</a>
        </div>
        <div class="hotcity">
          <span>热门城市: </span>
          <a href="#">全国</a>
          <a href="#">北京</a>
          <a href="#">北京</a>
          <a href="#">北京</a>
          <a href="#">北京</a>
          <a href="#">北京</a>
          <a href="#">北京</a>
          <a href="#">北京</a>
          <a href="#">北京</a>
          <a href="#">北京</a>
        </div>
        <div class="others">
          <span>其他城市: </span>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
          <a href="#">上海</a>
        </div>
      </div>
      <div class="inputwrap">
        <input type="search" placeholder="请输入演出、艺人、场馆名称...">
        <button>搜索</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Headsearch'
}
</script>

<style lang="less" scoped>
#headsearch{
  padding: 0 74px;
  height: 92px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  position: relative;
  img{
    width: 167px;
    height: 60px;
    cursor: pointer;
  }
  .choosecity{
    cursor: pointer;
    font-size: 16px;
    margin: -40px 0 0 28px;
    i{
      vertical-align: 0;
    }
  }
  .choosecity:hover + .citydetail,.citydetail:hover{
    display: block;
  }
  .citydetail{
    position: absolute;
    display: none;
    width: 500px;
    height: 300px;
    padding: 0 20px;
    border-radius: 5px;
    background: #fff;
    top: 44px;
    left: 200px;
    z-index: 1;
    .triangle{
      position: absolute;
      left: 80px;
      top: -10px;
      border-left: 14px solid transparent;
      border-right: 14px solid transparent;
      border-bottom: 14px solid #fff;
    }
    .thiscity{
      height: 40px;
      line-height: 40px;
      span{
        display: inline-block;
        font-size: 14px;
      }
      a{
        margin-left: 20px;
        display: inline-block;
        width: 50px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
      }
      a.active{
        background: pink;
        color: deeppink;
      }
    }
    .hotcity{
      height: 40px;
      line-height: 40px;
      border-bottom: 1px dashed #ccc;
      span{
        font-size: 14px;
      }
      a{
        color: #000;
        margin-left: 10px;
        font-size: 14px;
      }
      a:hover{
        color: pink;
      }
    }
    .others{
      margin-top: 10px;
      span{
        display: inline-block;
        font-size: 14px;
      }
      a:hover{
        color: pink;
      }
      a{
        font-size: 14px;
        display: inline-block;
        color: #000;
        margin-left: 10px;
        margin-top: 20px;
      }
    }
  }
  .inputwrap{
    width: 574px;
    height: 40px;
    background: #ff3c1b;
    display: flex;
    align-items: center;
    margin: -20px 0 0 216px;
    input{
      width: 480px;
      height: 34px;
      border: none;
      margin-left: 2px;
      text-indent: 10px;
      font-size: 12px;
    }
    button{
      width: 90px;
      background: #ff3c1b;
      color: #fff;
      border: none;
      height: 34px;
      cursor: pointer;
    }
  }
}
</style>
