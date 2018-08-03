<template>
<div class="bg">
    <div class="title">Step1</div>
    <div class="go" @click="go">点击到Step2</div>
</div>
</template>

<script>
export default {
    methods: {
        go: function() {
            this.$router.push({ name: 'step2'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .bg {
        height: 100%;
        background: green;
        color: #ffffff;
        text-align: center;

        .title {
            font-size: 0.5rem;
            padding: 2rem;
        }

        .go {
            font-size: 0.37rem;
            border: 1px solid #eeeeee;
            display: inline-block;
            padding: 0.3rem;
            border-radius: 4px;
        }
    }
</style>

