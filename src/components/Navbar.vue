<template>
    <div class="food-navbar">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Food is Life</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link"><nuxt-link to="/#!">Home</nuxt-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><nuxt-link to="/#foods">Foods</nuxt-link></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"><nuxt-link to="/#footer">About</nuxt-link></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<style lang="scss">
    .food-navbar {
        position: fixed;
        top: 0rem;
        width: 100%;
        z-index: 999;
    }
</style>
