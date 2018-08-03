<template>
<div class="bg">
    <div class="title">Step2</div>
    <div class="input"><input type="text"/></div>
    <div class="go" @click="go">点击到Step3</div>
</div>
</template>

<script>
export default {
    methods: {
        go: function() {
            this.$router.push({ name: 'step3'})
        }
    }
}
</script>

<style lang="scss" scoped>
    .bg {
        height: 100%;
        background: red;
        color: #ffffff;
        text-align: center;

        .title {
            font-size: 0.5rem;
            padding: 2rem;
        }

        .input {
            padding: 0.5rem;

            input {
                font-size: 0.4rem;
            }
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

