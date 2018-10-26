<template>
    <div>
        <mu-list-item avatar button :ripple="true" @click="changeCurrent">
            <mu-list-item-action>
                <mu-avatar>
                    <img :src="listItem.avatar || 'http://pgvpclvck.bkt.clouddn.com/avatar.jpg'">
                </mu-avatar>
            </mu-list-item-action>
            <mu-list-item-title>{{ listItem.name }}</mu-list-item-title>
            <mu-list-item-action>
                <mu-flex>
                    <mu-badge style="margin-right: 2px; top: 2px;" :content="listItem.content" v-show="parseInt(listItem.content) !== 0 && currentItemId !== listItem.id" color="primary"></mu-badge>
                    <mu-icon value="chat_bubble" :color="currentItemId === listItem.id ? 'primary' : ''"></mu-icon>
                </mu-flex>
            </mu-list-item-action>
        </mu-list-item>
    </div>
</template>

<script>
    export default {
        name: 'ContactListItem',
        data () {
            return {

            }
        },
        methods: {
            changeCurrent () {
                this.$store.dispatch('AchangeCurrentContact', {item: this.listItem})
            }
        },
        props: {
            listItem: {
                type: Object,
                required: true
            },
            currentItemId: {
                type: Number,
                required: true
            }
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
