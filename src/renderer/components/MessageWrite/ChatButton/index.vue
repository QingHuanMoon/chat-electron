<template>
    <div>
        <mu-flex z-depth="0" class="chat-btn-bar">
            <mu-button icon slot="left">
                <mu-icon value="menu" color="primary"></mu-icon>
            </mu-button>
            <mu-button icon slot="left">
                <mu-icon value="attachment" color="primary"></mu-icon>
            </mu-button>
            <mu-button icon slot="left">
                <mu-icon value="picture_in_picture" color="primary"></mu-icon>
            </mu-button>
            <mu-button icon slot="left">
                <mu-icon value="mic_none" color="primary"></mu-icon>
            </mu-button>
        </mu-flex>
    </div>
</template>

<script>
    export default {
        name: 'ChatButton',
        data () {
            return {

            }
        },
        methods: {

        },

    }
</script>

<style lang="less">
    @import "index";
</style>
