<template>
    <div class="is-login-wrapper">
        <mu-menu>
            <mu-button flat>
                <mu-icon value="color_lens"></mu-icon>
            </mu-button>
            <mu-list slot="content">
                <mu-list-item button>
                    <mu-list-item-content>
                        <mu-list-item-title>自定义颜色</mu-list-item-title>
                    </mu-list-item-content>
                </mu-list-item>
            </mu-list>
        </mu-menu>
        <mu-menu>
            <mu-button flat>
                <mu-avatar :size="28">
                    <img src="../../../assets/images/avatar1.jpg">
                </mu-avatar>
            </mu-button>
            <Modal
                    v-model="createGroupMask"
                    title="创建群组"
                    @on-ok="createOk"
                    @on-cancel="createCancel">
                <p>请输入房间名称:</p>
                 <i-input type="text" v-model="createRoomTitle"></i-input>
            </Modal>
            <mu-list slot="content">
                <mu-list-item button @click="toggleUserSettingMask">
                    <mu-list-item-content>
                        <mu-list-item-title>个人设置</mu-list-item-title>
                    </mu-list-item-content>
                </mu-list-item>
                <mu-list-item button @click="toggleCreateGroup">
                    <mu-list-item-content>
                        <mu-list-item-title>创建群组</mu-list-item-title>
                    </mu-list-item-content>
                </mu-list-item>
                <mu-list-item button @click="logout">
                    <mu-list-item-content>
                        <mu-list-item-title>退出登录</mu-list-item-title>
                    </mu-list-item-content>
                </mu-list-item>
            </mu-list>
        </mu-menu>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default  {
        name: 'isLogin',
        data () {
            return {
                addFriendMask: false,
                createGroupMask: false,
                userSettingMask: false,
                createRoomTitle: ''
            }
        },
        methods: {
            createOk () {
                let data = {
                    id: this.userInfo.id,
                    title: this.createRoomTitle
                }
                this.$store.dispatch('AcreateRoom', data)
            },
            createCancel () {
                console.log('cancel')
            },
            logout () {
                this.$Modal.confirm({
                    title: '您正在退出应用',
                    content: '<p>您确定要退出本程序吗?</p><p>退出后需要重新登录!</p>',
                    onOk: () => {
                        this.$store.dispatch('Alogout')
                    },
                    onCancel: () => {
                        return false
                    }
                })
            },
            toggleCreateGroup () {
                this.createGroupMask = !this.createGroupMask
            },
            toggleUserSettingMask () {
                this.userSettingMask = !this.userSettingMask
            }
        },
        computed: {
            ...mapState({
                'userInfo': state => state.auth.userInfo
            })
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
