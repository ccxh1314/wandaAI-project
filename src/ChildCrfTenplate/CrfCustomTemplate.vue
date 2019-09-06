<template>
<div class="main-footer" style="height: 645px" >
    <div class="footer-con" >
        <div class="footer-con-1">
            <div class="con-1-1" v-for="item in 5"   style="margin-bottom: 30px">
                <div>
                    <p class="con-sty-1">
                        <label>{{item.templateName}}</label>
                        <span>创建时间：<i>{{new Date(item.createTime).getFullYear()+'.'+new Date(item.createTime).getMonth() + 1+'.'+new Date(item.createTime).getDate()}}</i></span>
                    </p>
                    <p class="con-sty-2">{{item.templateDescirbe}}</p>
                    <p class="con-sty-3" >
                        <span><img src="../assets/images/crf-images/icon-7.png"/><label>预览</label></span>　　|　
                        <span @click="ChildItemClickBtn(item)"><img src="../assets/images/crf-images/icon-6.png"/><label>添加收藏</label></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div style="display: block;clear: both;text-align: center">
        <ul>
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[6,12, 18, 24,30]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="100">
            </el-pagination>
        </ul>
    </div>
</div>
</template>

<script>
    export default {
        name: "CrfCustomTemplate"
    }
</script>

<style scoped>

</style>