<template>
  <button :style="{backgroundColor : color}" class="flex-container">
    <p>Order now</p><img src="../assets/buyLogo.png" />
  </button>
</template>

<script>
export default {
  name: "orderButton",
  props: {
    color: String
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  transition: all .2s ease-in-out;
}

.flex-container:hover {
  display: flex;
  transform: scale(1.2)
}


button {
  background-color: #2F2105;
  border-radius: 30px;
  height: 50px;
  width: 150px;

}

p {
  line-height: 20px;
  color: white;
  margin: auto;
  font-family: Poppins;
}

img {
  height: 25px;
  margin: auto;
}
</style>