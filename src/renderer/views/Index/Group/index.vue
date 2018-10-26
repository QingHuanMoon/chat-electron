<template>
    <div>
        <!--<p>Group Page</p>-->
        <Contact :contactList="groupList"
                 :currentItemId="currentGroup"/>
    </div>
</template>

<script>
    import Contact from '@/components/Contact'
    import {mapState} from 'vuex'
    export default {
        name: 'GroupPage',
        data () {
            return {

            }
        },
        methods: {

        },
        computed: {
            ...mapState({
                'groupList': state => state.user.groupList,
                'currentGroup': state => state.user.userInfo.statusId.currentGroup
            })
        },
        components: {
            Contact
        }
    }
</script>
