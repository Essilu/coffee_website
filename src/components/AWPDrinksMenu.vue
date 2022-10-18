<template>
  <div class="flexContainer">
    <coffeeCard
      v-for="drink in drinks"
      :title="drink.name"
      :grade="drink.average_rating"
      :orders="drink.count_orders"
      :file="drink.image"
      :is_hot="drink.is_hot"
      :key="drink.id"
      @changeColor="changeColor($event)"
    />
  </div>
</template>

<script>
import coffeeCard from "../components/coffeeCard.vue";

export default {
  name: "AWPDrinksMenu",
  components: { coffeeCard },
  props: {
    drinkTypes: String,
  },
  data: function () {
    return {
      drinks: {},
    };
  },
  beforeCreate() {
    let components = this;

    if (this.drinkTypes == "hot") {
      fetch("/api/drinks/hot")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          components.drinks = data;
        });
    } else if (this.drinkTypes == "best") {
      fetch("/api/drinks/best")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          components.drinks = data;
        });
    } else if (this.drinkTypes == "popular") {
      fetch("/api/drinks/popular")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          components.drinks = data;
        });
    } else {
      fetch("/api/drinks/")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          components.drinks = data;
        });
    }
  },
};
</script>

<style scoped>
.flexContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
