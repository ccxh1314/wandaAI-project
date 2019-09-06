<template>
    <div>
        <div class="header-box">
            <div class="header-title"></div>
            <div class="header-name">
                <a>王医生，欢迎您！</a>
                <span></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HeaderCrf"
    }
</script>
<style>
    @import "../assets/css/top.css";
    @import "../assets/css/reset.css";
</style>
<style scoped lang="scss">
    @media screen and (max-width: 1023px) {
        .header-box {
            min-width: 1270px !important;
        }
    }
</style>