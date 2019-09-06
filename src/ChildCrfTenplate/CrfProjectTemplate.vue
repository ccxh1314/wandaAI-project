<template>
    <div class="main-footer" v-loading="loading" style="height: 645px" >
        <div class="footer-con" >
            <div class="footer-con-1">
                <div class="con-1-1" v-for="item in templatelist"   style="margin-bottom: 30px">
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
                        <div v-if="templatelist.length>0" style="display: block;clear: both;text-align: center">
                            <ul>
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[6,12, 18, 24,30]"
                                        :page-size="100"
                                        layout="total, sizes, prev, pager, next, jumper"
                                        :total="templatelist.length">
                                </el-pagination>
                            </ul>
                        </div>
    </div>
</template>

<script>

    export default {
        name: "CrfProjectTemplate",
        data(){
            return{
                // 分页
                currentPage4: 0,
                total:'',
                loading:false,
                templatelist:[]
            }
        },
        created() {
            let para={
                type:0
            }
            this.fistgetAllCollects(para)
        },
        methods:{
            // 分页
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            fistgetAllCollects(para){
          
                axios({
                    url:'http://10.1.192.118:9901/template/getAllCollects',
                    method:'get',
                    params:para
                    
                }).then(res=>{
                     this.templatelist=res.data
                    this.total=this.templatelist.length
             
                }).catch(err=>{
                })
            },
            // 收藏
            ChildItemClickBtn:async function(item){
                let para={
                    templateId:await item.templateId
                }
                axios({
                    url:'http://10.1.192.118:9901/template/addCollectTemplate',
                    method:'get',
                    params:para
                }).then(res=>{
               this.$message({
                        message: '恭喜您，收藏模板成功',
                        type: 'success'
                    });
                    this.$router.push({path:'/CrfTemplateMain'})
                }).catch(err=>{

                })


            }
        }
    }
</script>

<style scoped>
    @import "../assets/css/crf_css/mould.css";
</style>