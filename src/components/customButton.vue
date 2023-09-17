<template>
    <span class="btn" style="--bor:4px">
        <slot></slot>
    </span>
</template>

<style>
.btn{
    position: relative;
    border-radius: var(--bor);
    /* background: rgb(255, 211, 52); */
    padding: 0.5rem 1rem;
    font-weight: bold;
    font-weight: 1rem;
    cursor: pointer;
    /* transition: 0.3s; */
    background: transparent;
    user-select: none;
    overflow: hidden;
    isolation: isolate;
}

.btn::before{
    content: "";
    position: absolute;
    inset: 0;
    background: rgb(203, 203, 203);
    border-radius: var(--bor);
    z-index: -1;
}

.btn::after{
    content: "";
    position: absolute;
    inset: 0;
    background: rgb(255, 210, 50);
    border-radius: var(--bor);
    z-index: -1;
    transition: scale 0.3s;
    transform-origin: right;
    scale: 0 1;
}

.btn:hover::after{
    transform-origin: left;
    scale: 1 1;

}

</style>