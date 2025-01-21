<template>
    <div class="ui-container">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.ui-container {
    width: 100%;
    padding: 0 15px;
    margin: auto;

    @media screen and (min-width: 1440px) {
        width: 1440px;
        padding: 0 65px;
    }
}
</style>