<template>
    <div>
        <TopMenu class="z-20" />

        <Block class="home-block-height">
            <div class="flex-1 flex flex-col items-center max-w-[1400px] p-20 pt-0 md:pt-20">
                <Header2>A propos du developpeur</Header2>

                <Text2 class="mt-10">
                    Cette application a été crée par <span class="text-medium"> Valentin Le Lièvre </span>, étudiant à Polytech Tours en deuxième année.
                    MonUFR est une application indépendant réalisé pendant du temps libre et n'est donc toutefois pas une application officielle.
                    <br /> <br />
                    Mon portfolio est disponible à cette adresse: <a target="_blank" class="color-accent underline" href="https://valentin-lelievre.com">https://valentin-lelievre.com</a>.
                    Vous pouvez aussi me contacter: <a target="_blank" href="mailto:lelievre.valentin17@gmail.com" class="color-accent underline">lelievre.valentin17@gmail.com</a>
                </Text2>
            </div>
        </Block>

        <BottomMenu />
    </div>
</template>

<script setup lang="ts">
    import TopMenu from "@/components/TopMenu.vue";
    import BottomMenu from "@/components/BottomMenu.vue";
    import Header2 from "@/ui/header/Header2.vue";
    import Block from "@/ui/containers/Block.vue";
    import Text2 from "@/ui/text/Text2.vue";
</script>

<style scoped>
    .home-block-height {
        min-height: calc(100% - 112px - 346px);
    }
</style>