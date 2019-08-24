<template>
        <v-app>
       <v-app-bar app>
                SavingMoney
               {{profile.name}}
               <a href="/logout">Exit</a>
        </v-app-bar app>
        <v-content>
               <div v-if="!profile">Need to auth with <a href="/login">Google</a>
               </div>
               <div>
                     <message-list :messages="messages"/>
               </div>
        </v-content>

        </v-app>
</template>

<script>
   import MessageList from 'components/messages/MessageList.vue'
   import { addHandler } from '../util/ws'
   import { getIndex } from '../util/collections'
export default {
         components:{
         MessageList
         },
         data() {
             return{
                messages: frontendData.messages,
                profile: frontendData.profile
             }
        },
        created(){
            addHandler(data=>{
                let index = getIndex(this.messages,data.id)
                if(index > -1){
                    this.messages.splice(index,1,data)
                }else{
                    this.messages.push(data)
                }
            })
        }
 }
</script>

<style>

</style>