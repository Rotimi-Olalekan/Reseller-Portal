<template>
  <v-app>
    <v-toolbar 
    class="green lighten-4">
        
        <!-- <v-toolbar-title>Suburban</v-toolbar-title> -->
        <v-toolbar-side-icon @click="sideNav=!sideNav"></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <v-toolbar-item>
          <v-btn flat>Products</v-btn>
          <v-btn flat>Transaction Center</v-btn>
          <v-btn flat>The Program</v-btn>
          <v-btn flat>Terms and Condition</v-btn>
          </v-toolbar-item>

          
            <v-btn icon>
              <v-icon>notifications</v-icon>
            </v-btn>
          
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
              </v-list-tile-content>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>
          
         
        
      
    </v-toolbar>
<!-- <v-navigation-drawer v-model="sideNav"></v-navigation-drawer> -->
 

  <v-navigation-drawer
    :mini-variant.sync="mini"
    v-model="drawer"
    hide-overlay
    stateless
    class="light-green darken-3"
  >
    <v-toolbar flat class="transparent light-green darken-3">
      <v-list class="pa-0">
        <v-list-tile avatar
        class="light-green darken-3"
        >
          <v-list-tile-action>
            <v-btn
              icon
              @click.stop="mini = !mini"
            >
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0 light-green darken-3" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click=""
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
   </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        sideNav: false,
        items: [
          { title: 'Home', icon: 'home' },
          { title: 'Sales', icon: 'poll' },
          { title: 'Account', icon: 'account_balance_wallet' },
          { title: 'Customers', icon: 'group' },
          { title: 'Map', icon: 'place' },
          { title: 'Help Center', icon: 'question_answer' },
          { title: 'Settings', icon: 'settings' }
        ],
        mini: true,
        right: null
      }
    }
  }
</script>