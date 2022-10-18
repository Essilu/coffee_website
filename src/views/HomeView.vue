<template>
  <headerMenu />
  <div class="flex-container">
    <div class="welcome">
      <h1 class="welcomeTitle">
        Enjoy your <span class="orange">coffee</span> before your activity
      </h1>
      <p>
        Boost your productivity and build your mood with a glass of coffee in
        the morning
      </p>
      <div class="buttons">
        <OrderButton :color="currentColorBuy" />
        <p class="orangeMenu">More menu</p>
      </div>
    </div>
    <img class="welcomeCoffee" alt="Coffee logo" src="../assets/imageCoffee.png" />
  </div>

  <div class="flex-container card-display">
    <coffeeCard
      v-for="coffee in coffeeList"
      :title="coffee.name"
      :grade="coffee.rating"
      :orders="coffee.sells"
      :file="coffee.file"
      :key="coffee.id"
      @changeColor="changeColor($event)"
    />
  </div>

  <h1>Made by you ! (slotted cards)</h1>

  <div class="flex-container">
    <SlottedCards>
      <template v-slot:top
        ><img
          src="../assets/toothpaste.png"
          style="border-radius: 15px; padding-top: 10px"
          height="146" alt="toothpaste"
      /></template>
      <template v-slot:middle>Toothpaste</template>
      <template v-slot:bottom>"Yummy" -A customer</template>
    </SlottedCards>
    <SlottedCards>
      <template v-slot:top
        ><img
          src="../assets/rocks.png"
          style="border-radius: 15px; padding-top: 10px"
          height="146" alt="rock picture"
      /></template>
      <template v-slot:middle>Rocks</template>
      <template v-slot:bottom>"Crunchy" -A person</template>
    </SlottedCards>
    <SlottedCards>
      <template v-slot:top
        ><img
          src="../assets/tide.png"
          style="border-radius: 15px; padding-top: 10px"
          height="146" alt="tide pods"
      /></template>
      <template v-slot:middle>Forbidden Candy</template>
      <template v-slot:bottom>"Tasty" -A kid probably</template>
    </SlottedCards>
  </div>
</template>

<script>
import headerMenu from "@/components/headerMenu.vue";
import coffeeCard from "../components/coffeeCard.vue";
import OrderButton from "@/components/orderButton.vue";
import SlottedCards from "../components/slottedCards.vue";

export default {
  name: "HomeView",
  components: {
    headerMenu,
    coffeeCard,
    OrderButton,
    SlottedCards,
  },
  data: function () {
    return {
      currentColorBuy: "#2F2105",
    };
  },

  methods: {
    changeColor(newColor) {
      this.currentColorBuy = newColor;
    },
  },
  beforeMount() {
    let db = localStorage.getItem("menu");
    if (db) {
      this.coffeeList = JSON.parse(db);
    } else {
      let data = [
        {
          id: 1,
          name: "Vanilla Latte",
          sells: "21K",
          rating: "4.8",
          file: "vanilla_latte.png",
        },
        {
          id: 2,
          name: "Espresso",
          sells: "12K",
          rating: "4.6",
          file: "espresso.png",
        },
        {
          id: 3,
          name: "Hazelnut Latte",
          sells: "23K",
          rating: "4.9",
          file: "hazlenut_latte.png",
        },
      ];
      localStorage.setItem("menu", JSON.stringify(data));
      this.coffeeList = data;
    }
  },
  beforeUnmount() {
    //alert("You will exit the page")
  },
};
</script>

<style scopped>
@font-face {
  font-family: Poppins;
  src: url(../assets/Poppins.ttf);
}

.orange {
  color: #ff902a;
}

.orangeMenu {
  color: #ff902a;
  font-weight: bold;
}

.card-display {
  margin-top: 30px;
}

.orangeMenu:hover {
  color: #ff902a;
  text-decoration: underline;
}

.welcome {
  margin-top: 100px;
  width: 30%;
  text-align: left;
}

.welcomeTitle {
  font-size: 300%;
  font-family: Poppins;
}

.welcomeCoffee {
  height: 416px;
}

.flex-container {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
}

.buttons {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
}

body {
  background-color: #f9d9aa;
  font-family: Poppins;
}
</style>
