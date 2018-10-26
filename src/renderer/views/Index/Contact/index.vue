<template>
    <div>
        <Contact :contactList="contactList" />
    </div>
</template>

<script>
    import Contact from '@/components/Contact'
    import {mapState} from 'vuex'
    export default {
        name: 'ContactPage',
        data () {
            return {

            }
        },
        methods: {

        },
        computed: {
            ...mapState({
                'contactList': state => state.user.contactList,
            })
        },
        components: {
            Contact
        }
    }
</script>
