<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    :mini-variant.sync="mini"
    permanent
    class="navigation-container"
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-title>John Leider</v-list-item-title>

      <v-btn icon @click.stop="mini = !mini">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            <NuxtLink :to="item.link" class="navigation-link">{{
              item.title
            }}</NuxtLink>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Доска отчётов', icon: 'mdi-view-dashboard', link: '' },
        { title: 'Аккаунт', icon: 'mdi-face', link: '' },
        { title: 'Все отчёты', icon: 'mdi-clipboard-check-multiple', link: '' },
        { title: 'Избранное', icon: 'mdi-star', link: '' },
      ],
      mini: true,
    }
  },
}
</script>
<style lang="sass" scoped>
@import "~@/assets/media.sass"
@import "~@/assets/variables.sass"

.navigation-container
  background-color: $form-color
  .v-divider
    display: none
.v-navigation-drawer__border
  display: none
.navigation-link
  color: white
  text-decoration: none
  & :hover, :active
    color: white
    text-decoration: none
</style>
