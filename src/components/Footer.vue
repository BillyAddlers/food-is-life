<template>
    <div id="footer">
        <footer>
            <div class="jumbotron">
                <div class="row">
                    <div class="col-sm-6">
                        Created with ❤️ by <a href="https://github.com/BillyAddlers">Riichi Rusdiana</a>.
                    </div>
                    <div class="col-sm-3">
                        <ul>
                            <li><a></a><nuxt-link to="/">Home</nuxt-link></li>
                            <li><a href="https://github.com/BillyAddlers/food-is-life">GitHub</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-3">

                    </div>
                </div>
                <span title="Made by github/BillyAddlers. Click over (C) to see my profile!">
                    <a class="no-padding"><a class="no-padding" href="https://github.com/BillyAddlers">©</a> 2021-{{yearNow}} Riichi Rusdiana | Food is Life. All right reserved.</a>
                </span>
            </div>
        </footer>
    </div>
</template>

<script>
    const date = new Date();
    export default {
        name: "Footer",
        data: function () {
            return {
                yearNow: date.getFullYear()
            }
        },
    }
</script>

<style lang="scss">
    #footer {
        margin: 5%
    }
</style>
