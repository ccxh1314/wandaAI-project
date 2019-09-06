<template>
    <div class="main-footer">
    <div class="footer-con form-con">
        <div class="form-cloud">
            <div>
                <ul>
                    <li>
                        <span class="form-det1"><i></i><label>知情同意书模版</label></span>
                        <span class="form-det2">
                                    <i></i>
                                    <a href=""><img src="../assets/images/crf-images/icon-7.png"/><label>预览</label></a>
                                    <span><img src="../assets/images/crf-images/icon-10.png"/><label>复制到自定义表单</label></span>
                                </span>
                    </li>
                    <li>
                        <span class="form-det1"><i></i><label>现病史</label></span>
                        <span class="form-det2">
                                    <i></i>
                                    <a href=""><img src="../assets/images/crf-images/icon-7.png"/><label>预览</label></a>
                                    <span><img src="../assets/images/crf-images/icon-10.png"/><label>复制到自定义表单</label></span>
                                </span>
                    </li>
                    <li>
                        <span class="form-det1"><i></i><label>伴随疾病及用药史</label></span>
                        <span class="form-det2">
                                    <i></i>
                                    <a href=""><img src="../assets/images/crf-images/icon-7.png"/><label>预览</label></a>
                                    <span><img src="../assets/images/crf-images/icon-10.png"/><label>复制到自定义表单</label></span>
                                </span>
                    </li>
                    <li>
                        <span class="form-det1"><i></i><label>体格检查</label></span>
                        <span class="form-det2">
                                    <i></i>
                                    <a href=""><img src="../assets/images/crf-images/icon-7.png"/><label>预览</label></a>
                                    <span><img src="../assets/images/crf-images/icon-10.png"/><label>复制到自定义表单</label></span>
                                </span>
                    </li>
                    <li>
                        <span class="form-det1"><i></i><label>影像检查</label></span>
                        <span class="form-det2">
                                    <i></i>
                                    <a href=""><img src="../assets/images/crf-images/icon-7.png"/><label>预览</label></a>
                                    <span><img src="../assets/images/crf-images/icon-10.png"/><label>复制到自定义表单</label></span>
                                </span>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <span class="form-det1"><i></i><label>人口学信息</label></span>
                        <span class="form-det2">
                                        <i></i>
                                        <a href=""><img src="../assets/images/crf-images/icon-7.png"/><label>预览</label></a>
                                        <span><img src="../assets/images/crf-images/icon-10.png"/><label>复制到自定义表单</label></span>
                                    </span>
                    </li>
                    <li>
                        <span class="form-det1"><i></i><label>既往史</label></span>
                        <span class="form-det2">
                                        <i></i>
                                        <a href=""><img src="../assets/images/crf-images/icon-7.png"/><label>预览</label></a>
                                        <span><img src="../assets/images/crf-images/icon-10.png"/><label>复制到自定义表单</label></span>
                                    </span>
                    </li>
                    <li>
                        <span class="form-det1"><i></i><label>手术记录</label></span>
                        <span class="form-det2">
                                        <i></i>
                                        <a href=""><img src="../assets/images/crf-images/icon-7.png"/><label>预览</label></a>
                                        <span><img src="../assets/images/crf-images/icon-10.png"/><label>复制到自定义表单</label></span>
                                    </span>
                    </li>
                    <li>
                        <span class="form-det1"><i></i><label>实验室检查</label></span>
                        <span class="form-det2">
                                        <i></i>
                                        <a href=""><img src="../assets/images/crf-images/icon-7.png"/><label>预览</label></a>
                                        <span><img src="../assets/images/crf-images/icon-10.png"/><label>复制到自定义表单</label></span>
                                    </span>
                    </li>
                    <li>
                        <span class="form-det1"><i></i><label>影像检查</label></span>
                        <span class="form-det2">
                                        <i></i>
                                        <a href=""><img src="../assets/images/crf-images/icon-7.png"/><label>预览</label></a>
                                        <span><img src="../assets/images/crf-images/icon-10.png"/><label>复制到自定义表单</label></span>
                                    </span>
                    </li>
                </ul>
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
        name: "CrfFormTemplate"
    }
</script>

<style scoped>
    @import "../assets/css/crf_css/mould.css";
</style>