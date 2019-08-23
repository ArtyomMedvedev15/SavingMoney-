<template>
        <div>
            <div v-if="!profile">Need to auth with <a href="/login">Google</a></div>
            <div v-else >
                <div>{{profile.name}}&nbsp;<a href="/logout">Exit</a></div>
                <message-list :messages="messages"/>
             </div>
        </div>
</template>

<script>
   import MessageList from 'components/messages/MessageList.vue'

export default {
         components:{
         MessageList
         },
         data() {
             return{
                messages: frontendData.messages,
                profile: frontendData.profile
             }
        }
 }
</script>

<style scoped>

</style>