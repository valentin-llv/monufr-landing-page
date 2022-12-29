<template>
    <div class="w-full p-10 flex flex-row gap-10">
        <RouterLink to="/" class="flex-1">
            <div class="flex flex-row items-center duration-300">
                <img src="@/assets/favicon/favicon.png" class="h-14 sm:h-20" />
                <Header1 class="ml-5">MonUFR</Header1>
            </div>
        </RouterLink>

        <div class="flex flex-row items-center gap-10">
            <RouterLink to="/about">
                <div class="duration-200 hover:-translate-y-1.5">
                    <Header3>A propos</Header3>
                </div>
            </RouterLink>

            <a href="https://app.ufr-planning.com/">
                <AccentButton class="hidden sm:block hover:-translate-y-1.5">
                    <Header3>Télécharger</Header3>
                </AccentButton>
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
    import AccentButton from '@/ui/buttons/AccentButton.vue';
    
    import Header1 from '@/ui/header/Header1.vue';
    import Header3 from '@/ui/header/Header3.vue';

    import { RouterLink } from 'vue-router';
</script>

<style scoped>

</style>