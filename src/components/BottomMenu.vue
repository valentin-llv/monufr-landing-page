<template>
    <div class="relative w-full">
        <div class="flex flex-row items-center bg-700 w-full h-10 pl-5 pr-5">
            <hr class="flex-1 opacity-20" />
        </div>

        <div class="p-8 sm:p-14 sm:pl-32 sm:pr-32">
            <div class="flex flex-row items-center gap-10">
                <div class="flex-1 flex flex-col">
                    <RouterLink to="/">
                        <div class="flex flex-row items-center">
                            <img src="/favicon/favicon.png" class="h-14 sm:h-20" />
                            <Header1 class="ml-5">MonUFR</Header1>
                        </div>
                    </RouterLink>

                    <div class="mt-5">
                        <Text>Accéder à tous les services de votre UFR en un seul endroit.</Text>
                    </div>

                    <RouterLink to="/about">
                        <div class="flex flex-row items-center gap-10 mt-10">
                            <Header3>A propos</Header3>
                        </div>
                    </RouterLink>
                </div>

                <div>
                    <a href="https://app.monufr.fr/">
                        <AccentButton class="hover:-translate-y-1.5">
                            <Header3>Télécharger</Header3>
                        </AccentButton>
                    </a>
                </div>
            </div>

            <div class="mt-20">
                <hr class="opacity-90" />

                <Text class="color-200 mt-5">©2022 MonUFR . All rights reserved . <a target="_blank" href="https://valentin-lelievre.com">Valentin Le Lièvre</a></Text>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import AccentButton from '@/ui/buttons/AccentButton.vue';

    import Header1 from '@/ui/header/Header1.vue';
    import Header3 from '@/ui/header/Header3.vue';

    import Text from '@/ui/text/Text.vue';

    import { RouterLink } from 'vue-router';
</script>