<template>
    <div class="transparent">
        <div class="mainCard" :style="{backgroundColor : currentColor}">
            <div class="cardImage">
                <div class="grade">
                    <p class="rating">{{grade}} </p>
                    <img id="star" alt="star" src="../assets/iconstar.png" />
                </div>
                <img id="product" alt="product image" :src="require(`@/assets/${file}`)" />
            </div>
            <div class="cardDesc">

                <div class="firstLine">
                    <ul id="firstLine">
                        <li>{{title}}</li>
                        <li>{{orders}}</li>
                    </ul>
                </div>

                <ul id="bottom-line">
                    <li>
                        <p @click="changeColorRed" v-show="is_hot" id="hot">Hot</p>
                    </li>
                    <li >
                        <p @click="changeColorBlue" v-show="!is_hot" id="cold">Cold</p>
                    </li>
                    <li id="buy">
                        <img @dblclick="changeColorBuy" alt="shopping cart icon" src="../assets/buyLogo.png" />
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "coffeeCard",
    props: {
        title: String,
        grade: Number,
        orders: String,
        file: String,
        color: String,
        is_hot: Boolean,
    },
    data() {
        return {
            currentColorBuy: '#2F2105',
            currentColor: 'white'
        }
    },
    methods: {
        changeColorRed() {
            if (this.currentColor == 'red') {
                this.currentColor = 'white';
            } else {
                this.currentColor = 'red';
            }
        },
        changeColorBlue() {
            if (this.currentColor == 'lightblue') {
                this.currentColor = 'white';
            } else {
                this.currentColor = 'lightblue';
            }
        },
        changeColorBuy() {
            if (this.currentColorBuy == '#2F2105') {
                this.$emit('changeColor', 'red');
                this.currentColorBuy = 'red'
            } else {
                this.$emit('changeColor', '#2F2105');
                this.currentColorBuy = '#2F2105'
            }

        }
    }
}

</script>

<style scoped>
.right {
    float: right
}

.left {
    float: left;
}


.transparent {
    transition: all .2s ease-in-out;
    width: 255px;
    height: 265px;
    border-radius: 10px;
    margin: 20px;
    padding: 0px;
    background-color: rgb(184, 189, 219, 0.5);
    transition: all .2s ease-in-out;
}

.transparent:hover {
    transform: scale(1.1)
}


.mainCard {
    width: 245px;
    height: 255px;
    border-radius: 10px;
    margin: 5px;
    position: absolute;

    background-color: white;
}


#product {
    height: 146px;

    border-radius: 15px;
    padding-top: 10px;
    position: relative;
}

.grade {
    margin: 0px auto;
    position: absolute;
    z-index: 1;
    left: 30px;

    border: 2px solid rgba(150, 189, 219, 0.5);
    background: white;
    padding: 3px;
    border-radius: 8px;
    top: 15px;
    font-family: Poppins;
}


.star {
    display: inline;
    margin: 0 5px 0;
    border-radius: 5px;
    border-style: solid;
    border-width: 2px;
    border-color: #fff;
}

.rating {
    display: inline;
    font-family: Poppins;

}


#firstLine {
    display: flex;
    justify-content: space-between;


    list-style: none;
    padding-right: 24px;
    padding-left: 24px;
    margin: 0px;

    font-family: Poppins;
    font-weight: bold;
    font-size: 19px;
}

#bottom-line {
    padding-right: 24px;
    padding-left: 24px;
    margin-top: 10px;

    width: 94%;
    position: absolute;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

#hot {
    padding-right: 6px;
    padding-left: 6px;
}

#cold {
    margin-right: 70px;
}

#buy {
    margin-right: 30px;
    transition: all .2s ease-in-out;
}

#buy:hover {
    transform: scale(1.2);
}

ul p {
    border: solid 2px #FF902A;
    border-radius: 5px;
    color: #FF902A;
    opacity: 0.5;
    padding: 2px;
}

ul p:hover {
    border: solid 2px #FF902A;
    border-radius: 5px;
    color: #FF902A;
    opacity: 1;
    padding: 2px;
}
</style>