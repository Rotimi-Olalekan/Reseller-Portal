<template>
  <v-app>
    <v-toolbar 
    class="green lighten-4">
        
        <v-toolbar-side-icon 
        @click="sideNavM=!sideNavM"
        class="hidden-sm-and-up"
        ></v-toolbar-side-icon>

        <v-spacer class="hidden-xs-only"></v-spacer>
        <v-toolbar-title>
          <router-link to='/' tag='span' style='cursor:pointer' ><img src="@/assets/sub-log-trans.png" alt=""></router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- top nav -->
        <v-toolbar-item
        class="hidden-xs-only"
        >
          <v-btn 
          flat
          v-for="item in tabItem"
          :key="item.title"
          router
          :to='item.link'
          >
          {{item.title}}
          </v-btn>
        
        </v-toolbar-item>

          
            <v-btn icon>
              <v-icon>notifications</v-icon>
            </v-btn>
          
            <v-list-tile-content class="hidden-sm-and-down">
              <v-list-tile-title><router-link to='/' tag='span' style='cursor:pointer' >Aboubakar Hauwa</router-link></v-list-tile-title>
              </v-list-tile-content>
            <v-list-tile-avatar class="hidden-sm-and-down">
              <img src="@/assets/connection-pic-circle.png" alt="">
            </v-list-tile-avatar>

            <v-menu bottom left 
            v-model="dropDown">
            <v-btn 
              slot="activator"
              dark
              icon
              
            >
              <v-icon>caret_down</v-icon>
            </v-btn>

            <v-list>
              <v-list-tile
                v-for="(item, i) in profileDrop"
                :key="i"
                @click=""
                
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          
         
        
      
    </v-toolbar>

    <!-- mobile sidemenu -->
    <v-navigation-drawer
    v-model="sideNavM"
    absolute
    dark
    temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="@/assets/connection-pic-circle.png" alt="">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>Aboubakar Hauwa</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in slider"
          :key="item.title"
          router
          :to="item.link"
          
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
 
  <!-- desktop sidemenu -->
  <v-navigation-drawer
    :mini-variant.sync="mini"
    absolute
    v-model="drawer"
    hide-overlay
    stateless
    class="light-green darken-3 hidden-sm-and-down"
  >
  <!-- chevron button to open and min and max sidemenu -->
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

    <!--desktop side--menu items -->
    <v-list class="pt-0 light-green darken-3" dense>
      <v-divider></v-divider>

      <v-list-tile
        v-for="item in items"
        :key="item.title"
        router
        :to="item.link"
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

  <!-- body -->
  <main>
    <router-view></router-view>
  </main>
   </v-app>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        sideNav: false,
        sideNavM: false,
        dropDown: false,
        items: [
          { title: 'Home', icon: 'home', link:'/'},
          { title: 'Sales', icon: 'poll', link:'/sales'},
          { title: 'Account', icon: 'account_balance_wallet', link:'/account'},
          { title: 'Customers', icon: 'group', link:'/customers'},
          { title: 'Map', icon: 'place', link:'/map'},
          { title: 'Help Center', icon: 'question_answer', link:'/helpcenter'},
          { title: 'Settings', icon: 'settings', link:'/settings'}
        ],
        tabItem:[
          {title: 'Products', link:'/products'},
          {title: 'Transaction Center', link:'/transactioncenter'},
          {title: 'The Program', link:'/theprogram'},
          {title: 'Terms and Condition', link:'/termsandcondition'},
          
        ],
        slider:[
          { title: 'Home', icon: 'home', link:'/'},
          { title: 'Sales', icon: 'poll', link:'/sales'},
          { title: 'Account', icon: 'account_balance_wallet', link:'/account'},
          { title: 'Customers', icon: 'group', link:'/customers'},
          { title: 'Map', icon: 'place', link:'/map'},
          { title: 'Help Center', icon: 'question_answer', link:'/helpcenter'},
          { title: 'Settings', icon: 'settings', link:'/settings'},
          {title: 'Products', link:'/products'},
          {title: 'Transaction Center', link:'/transactioncenter'},
          {title: 'The Program', link:'/theprogram'},
          {title: 'Terms and Condition', link:'/termsandcondition'}

        ],
        profileDrop:[
          { title: 'Edit Profile' },
          { title: 'Logout' },
          
        ],
        mini: true,
        right: null
      }
    }
  }
</script>