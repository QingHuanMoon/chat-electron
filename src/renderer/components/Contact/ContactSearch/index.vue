<template>
    <div>
        <mu-auto-complete :data="searchValue" color="primary" placeholder="搜索联系人..." full-width :max-search-results="5" v-model="searchResult" avatar class="auto-search">
            <template slot-scope="scope">
                <mu-list-item-action>
                    <mu-avatar color="primary">
                        {{scope.item.substring(0, 1)}}
                    </mu-avatar>
                </mu-list-item-action>
                <mu-list-item-content v-html="scope.highlight"></mu-list-item-content>
            </template>
        </mu-auto-complete>
    </div>
</template>

<script>
    export default {
        name: 'ContactSearch',
        data () {
            return {
                searchResult: ''
            }
        },
        methods: {

        },
        props: {
            searchValue: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
