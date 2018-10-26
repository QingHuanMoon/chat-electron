<template>
    <div class="contact-tab-wrapper">
        <mu-bottom-nav :value.sync="shift" shift color="primary" @change="changeTab">
            <mu-bottom-nav-item :class="item.path" v-for="(item, index) in list" :key="index" :value="item.path" :title="item.title" :icon="item.icon"></mu-bottom-nav-item>
        </mu-bottom-nav>
    </div>
</template>

<script>
    export default {
        name: 'ContactTabs',
        data: () => ({
            shift: 'MessagePage',
            list: [
                {
                    path: 'MessagePage',
                    title: '消息',
                    icon: 'message',
                    isActive: true,
                    content: '10'
                },
                {
                    path: 'ContactPage',
                    title: '联系人',
                    icon: 'perm_contact_calendar',
                    isActive: false,
                    content: '10'
                },
                {
                    path: 'GroupPage',
                    title: '群组',
                    icon: 'group_work',
                    isActive: false,
                    content: '10'
                },
                {
                    path: 'MusicPage',
                    title: '音乐',
                    icon: 'music_note',
                    isActive: false,
                    content: '10'
                }
            ]
        }),
        methods: {
            changeTab () {
                this.list.find((item, index) => {
                    if (item.path === this.shift) {
                        this.$store.dispatch('AchangeTab', index)
                    }
                })
                this.$router.push({name: this.shift})
            }
        },
    }
</script>

<style lang="less">
    @import "index";
</style>
