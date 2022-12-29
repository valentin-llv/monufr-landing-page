<template>
    <router-view v-slot="{ Component, route }">
        <transition name="page-fade">
            <component class="absolute w-full h-full overflow-x-hidden" :is=Component :key=route.path />
        </transition>
    </router-view>
</template>

<script setup lang="ts">
    import { RouterView } from "vue-router";
</script>

<style scoped>
    .page-fade-enter-active, .page-fade-leave-active {
        transition: 0.3s;
    }

    .page-fade-enter-from {
        opacity: 0;
    }

    .page-fade-enter-to {
        transition-delay: 0.3s;
        opacity: 1;
    }

    .page-fade-leave-to {
        opacity: 0;
    }

    .page-fade-leave-from {
        opacity: 1;
    }
</style>