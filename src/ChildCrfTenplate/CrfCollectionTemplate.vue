<template>
    <div class="main-footer" v-loading="loading" style="height: 645px" >
        <div class="footer-con" >
            <div class="footer-btn">
                <button><label>+</label><span>新模版</span></button>
            </div>
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
                            <span @click="ChildItemClicEditkBtn(item)"><img src="../assets/images/crf-images/icon-9.png"/><label>编辑</label></span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div   v-if="templatelist.length>0" style="display: block;clear: both;text-align: center">
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
    import {mapState,mapMutations} from  'vuex'
    export default {
        name: "CrfCollectionTemplate",
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
                type:2
            }
            this.fistgetAllCollects(para)
        },
        methods:{
            ...mapMutations(['CRFTEMPLATEEDITEMS']),
            // 分页
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            fistgetAllCollects(para){
                this.loading=true
                axios({
                    url:'http://10.1.192.118:9901/template/getAllCollects',
                    method:'get',
                    params:para
                }).then(res=>{
                   this.templatelist=res.data

                    this.total=this.templatelist.length
                    this.loading=false
                }).catch(err=>{
                    console.log(err)
                })
            },
            // 点击编辑
            ChildItemClicEditkBtn(item){
                console.log(item)
                this.CRFTEMPLATEEDITEMS(item)
                this.$router.push({path:'/CrfTemplateMain'})
            }
        }
    }
</script>

<style scoped>

</style>