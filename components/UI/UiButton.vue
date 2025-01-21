<template>
    <div class="ui-button">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
.ui-button {
    min-width: 200px;
    height: 55px;
    background-color: $accent-color;
    color: $button-text-color;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-transform: capitalize;
    transition-property: background-color;
    transition-duration: 250ms;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
        background-color: $accent-hover-color;
    }
}
</style>