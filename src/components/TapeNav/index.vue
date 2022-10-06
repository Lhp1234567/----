<template>
  <div class="type-nav">
    <!-- <h1>{{categoryList}}</h1> -->
            <div class="container">
                <div @mouseleave="leaveIndex">
                    <h2 class="all">全部商品分类</h2>
                    <div class="sort">
                    <div class="all-sort-list2" @click="goSearch">
                        <div class="item" v-for="(c1,index) in categoryList.data" :key="c1.categoryId" :class="{cur:currentIndex==index}">
                            <h3 @mouseenter="changindex(index)">
                                <a :data-categoryname="c1.categoryName" :data-categoryId1="c1.categoryId">{{c1.categoryName}}</a>
                            </h3>
                            <div class="item-list clearfix" :style="{display:currentIndex==index ?'block':'none'}">
                                <div class="subitem" v-for="(c2,index) in c1.categoryChild" :key="c2.categoryId"> 
                                    <dl class="fore">
                                        <dt>
                                            <a :data-categoryname="c2.categoryName" :data-categoryId2="c2.categoryId">{{c2.categoryName}}</a>
                                        </dt>
                                        <dd>
                                            <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                                <a :data-categoryname="c3.categoryName" :data-categoryId3="c3.categoryId">{{c3.categoryName}}</a>
                                            </em>
                                           
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </div>
                </div>
               
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
              
            </div>
        </div>
</template>

<script>
import { mapState } from 'vuex';
import throttle from "lodash/throttle"
export default {
name:'TapeNav',
data() {
    return {
        currentIndex:-1
    }
},
mounted(){
// 通知vuex发请求，获取数据，存储仓库当中
this.$store.dispatch('categoryList')
},
computed:{
    ...mapState({
        // 右侧需要的是一个函数，当时用计算属性的时候，右侧会立即执行一次
        // 注入一个参数state,实则为大仓库的数据
        categoryList:(state)=>{
            // console.log(state)
            return state.home.categoryList
        }
    })
},
methods:{
    // changindex(index){
    //     this.currentIndex=index
    // },
    // 节流：利用throttle，会等用户停留50毫秒才会触发 this.currentIndex=index，
    // 节约浏览器资源消耗，也避免因用户刷新过快，造成的卡段
    changindex:throttle(function(index){
        this.currentIndex=index
    },5),
    // 鼠标离开三级联动是，
    leaveIndex(index){
        this.currentIndex=-1
    },
    goSearch(event){
        let elements=event.target
        let {categoryname,categoryid1,categoryid2,categoryid3}=elements.dataset
        if(categoryname){
        //    let location={name:"search"}
              let location={path:"/search"}
            console.log(location)
            let query={categoryName:categoryname}
            if(categoryid1){
                query.categoryId1=categoryid1
            }else if(categoryId2){
                query.categoryId2=categoryid2
            }else{
                query.categoryId3=categoryid3
            }
            location.query=query
            console.log(query)
            this.$router.push(location)
        }

    }

}
}
</script>

<style scoped lang="less">
    .type-nav {
        border-bottom: 2px solid #e1251b;

        .container {
            width: 1200px;
            margin: 0 auto;
            display: flex;
            position: relative;

            .all {
                width: 210px;
                height: 45px;
                background-color: #e1251b;
                line-height: 45px;
                text-align: center;
                color: #fff;
                font-size: 14px;
                font-weight: bold;
            }

            .nav {
                a {
                    height: 45px;
                    margin: 0 22px;
                    line-height: 45px;
                    font-size: 16px;
                    color: #333;
                }
            }

            .sort {
                position: absolute;
                left: 0;
                top: 45px;
                width: 210px;
                height: 461px;
                position: absolute;
                background: #fafafa;
                z-index: 999;

                .all-sort-list2 {
                    .item {
                        h3 {
                            line-height: 30px;
                            font-size: 14px;
                            font-weight: 400;
                            overflow: hidden;
                            padding: 0 20px;
                            margin: 0;

                            a {
                                color: #333;
                            }
                        
                        }

                        .item-list {
                            display: none;
                            position: absolute;
                            width: 734px;
                            min-height: 460px;
                            background: #f7f7f7;
                            left: 210px;
                            border: 1px solid #ddd;
                            top: 0;
                            z-index: 9999 !important;

                            .subitem {
                                float: left;
                                width: 650px;
                                padding: 0 4px 0 8px;

                                dl {
                                    border-top: 1px solid #eee;
                                    padding: 6px 0;
                                    overflow: hidden;
                                    zoom: 1;

                                    &.fore {
                                        border-top: 0;
                                    }

                                    dt {
                                        float: left;
                                        width: 54px;
                                        line-height: 22px;
                                        text-align: right;
                                        padding: 3px 6px 0 0;
                                        font-weight: 700;
                                    }

                                    dd {
                                        float: left;
                                        width: 415px;
                                        padding: 3px 0 0;
                                        overflow: hidden;

                                        em {
                                            float: left;
                                            height: 14px;
                                            line-height: 14px;
                                            padding: 0 8px;
                                            margin-top: 5px;
                                            border-left: 1px solid #ccc;
                                        }
                                    }
                                }
                            }
                        }

                      
                    }
                    .cur{
                        background: skyblue;
                    }

                  
                }
            }
        }
    }

</style>