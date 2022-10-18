<template>
    <nav class="flex-container">
        <img class="logo" alt="coffee shop logo" src="../assets/coffeelogo.svg">
        <div>
            <router-link class="navigation" to="/about">About us</router-link>
            <router-link class="navigation" to="/">Our product</router-link>
            <router-link class="navigation" to="/AWPDrinksMenu">Menu</router-link>
        </div>
        <div>
            <img src="../assets/icons_cart.png" alt="add to cart icon"/>
            <input class="searchbar" type="text" placeholder="Cappucino">
        </div>
    </nav>
</template>

<script>
export default {
    name: "headerMenu",
}
</script>

<style scoped>
nav {
    padding: 0px;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
}

.flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;

}


.logo {
    height: 40px;
}

.searchbar {
    float: right;
    background-image: url('../assets/searchicon.png');
    background-position: 2% 50%;
    height: 20px;
    margin-right: 50px;
    margin-left: 50px;

    background-size: 15px;
    background-repeat: no-repeat;
    padding-left: 30px;
    border-radius: 20px;
}

.navigation {
    color: #2F2105;
    margin: 10px;
    text-align: left;
    text-decoration: none;
    font-family: Poppins;
}

.navigation:hover {
    text-decoration: underline;
}
</style>