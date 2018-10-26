<template>
    <div>
        <mu-paper :z-depth="1" class="contact-list-wrapper">
            <ContactSearch :searchValue="searchList" />
            <ContactList :contactList="contactList"
                         :currentItemId="currentItemId"/>
        </mu-paper>
    </div>
</template>

<script>
    import ContactList from './ContactList'
    import ContactSearch from './ContactSearch'
    export default {
        name: 'Contact',
        data () {
            return {

            }
        },
        methods: {

        },
        components: {
            ContactSearch,
            ContactList,
        },
        computed: {
            searchList () {
                let temp = []
                this.contactList.forEach(item => {
                    temp.push(item.name)
                })
                return temp
            }
        },
        props: {
            contactList: {
                type: Array,
                required: true
            },
            currentItemId: {
                type: Number,
                default: 0,
            }
        }
    }
</script>

<style lang="less">
    @import "index";
</style>
