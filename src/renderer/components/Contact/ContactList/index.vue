<template>
    <div class="contact-list-box">
        <mu-list class="contact-list-all">
            <ContactListItem  v-for="(listItem, index) in contactList" :key="index" :listItem="listItem" :currentItemId="currentItemId" />
        </mu-list>
    </div>
</template>

<script>
    import ContactListItem from './ContactListItem'
    export default {
        name: 'ContactList',
        data () {
            return {

            }
        },
        methods: {

        },
        components: {
            ContactListItem
        },
        props: {
            contactList: {
                type: Array,
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
