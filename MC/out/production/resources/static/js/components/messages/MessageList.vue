<template>
        <v-layout align-space-around justify-start column>
            <message-form :messages="messages" :messageAttr="message" />
            <message-row
            v-for="message in sortedMessages"
            :key="message.id" :message="message"
            :editMessage="editMessage"
            :deleteMessage="deleteMessage"
            :messages="messages" />
        </v-layout>
</template>

<script>
import MessageRow from 'components/messages/MessageRow.vue'
import MessageForm from 'components/messages/MessageForm.vue'

export default {
    props: ['messages'],
    components:{
    MessageRow,
    MessageForm
    },
    data() {
        return {
            message: null
        }
    },
    computed:{
        sortedMessages(){
        return this.messages.sort((a,b)=> - (b.id - a.id))
        }
    },

      methods: {
             editMessage(message) {
                 this.message = message
             },
             deleteMessage(message) {
                 this.$resource('/message{/id}').remove({id: message.id}).then(result => {
                     if (result.ok) {
                         this.messages.splice(this.messages.indexOf(message), 1)
                     }
                 })
             }
         }
     }
</script>

<style scoped>

</style>