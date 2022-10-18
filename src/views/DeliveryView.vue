<template>
  <headerMenu />
  <h1>All drinks</h1>
  <AWPDrinksMenu drinkTypes=""></AWPDrinksMenu>

  <h1>Hot drinks</h1>
  <AWPDrinksMenu drinkTypes="hot"></AWPDrinksMenu>

  <h1>Best drinks</h1>
  <AWPDrinksMenu drinkTypes="best"></AWPDrinksMenu>

  <h1>Popular drinks</h1>
  <AWPDrinksMenu drinkTypes="popular"></AWPDrinksMenu>
</template>

<script>
import headerMenu from "@/components/headerMenu.vue";
import AWPDrinksMenu from "../components/AWPDrinksMenu.vue";
export default {
  components: {
    headerMenu,
    AWPDrinksMenu
}
}
</script>

<style>

</style>