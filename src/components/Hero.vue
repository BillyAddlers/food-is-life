<template>
    <div id="hero">
        <section class="jumbotron-bg">
            <div class="hero-text"> 
                <h1>Food is Life!</h1>
                <hr class="border-my-4">
                <h4>Your culinary adventure starts here</h4>
            </div>
        </section>
    </div>
</template>

<style lang="scss">
    #hero {
        .hero-text {
            margin-left: 100px;
            margin-right: 100px;
        }
        .jumbotron-bg {
            background: linear-gradient(
          rgba(82, 73, 73, 0.7), 
          rgba(0, 0, 0, 0.7)
        ), url("../assets/foods/jakarta-food-hd.png") center center no-repeat;
            background-size: cover;
            padding: 200px 0px;
        }
        .jumbotron-bg .container {
            position: relative;
        }
    }
</style>