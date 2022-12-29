<template>
    <div>
        <TopMenu class="z-20" />

        <!-- First block start -->
        <Block class="home-block-height">
            <Blob1 class="hidden md:block absolute w-[700px] lg:w-[850px] top-full left-full -translate-x-full -translate-y-full mt-[350px] ml-[350px] aspect-square" />

            <ScreenFlex class="flex-col-reverse">
                <div class="relative z-20 flex-1 flex items-center -mt-80 md:mt-0">
                    <TransitionShadow />

                    <div class="p-6 pb-20 pt-0 md:p-10 mt-28 md:mt-0 bg-900 md:bg-transparent">
                        <Transition name="fade">
                            <h1 v-if=onloadAnim class="text-4xl md:text-6xl font-medium" :style="{ 'transition-delay': (transitionDelays ? '200ms' : '0ms') }">
                                Votre emploi du temps et vos mails dans votre poche&nbsp;!
                            </h1>
                        </Transition>
                        
                        <Transition name="fade">
                            <Text2 v-if=onloadAnim class="mt-7 md:mt-14" :style="{ 'transition-delay': (transitionDelays ? '200ms' : '0ms') }">
                                Retrouvez votre emploi, vos mails, votre liste des tâches et bien plus dans l'application MonUFR.
                                <br/><br />
                                Plus rapide, plus simple et même hors ligne.
                            </Text2>
                        </Transition>
                        
                        <Transition name="fade">
                            <a href="https://app.ufr-planning.com/">
                                <AccentButton v-if=onloadAnim class="mt-8 md:mt-20 w-min m-auto glow-accent hover:scale-105 hover:-translate-y-2" :style="{ 'transition-delay': (transitionDelays ? '1200ms' : '0ms') }">
                                    <Text2>Télécharger&nbsp;maintenant</Text2>
                                </AccentButton>
                            </a>
                        </Transition>
                    </div>
                </div>

                <div class="relative z-10 flex-1 flex items-center justify-center">
                    <div class="flex flex-row justify-center gap-6 md:gap-10">
                        <Transition name="fade">
                            <img v-if=onloadAnim class="max-h-[400px] md:max-h-[500px] lg:max-h-[600px]" src="@/assets/images/phone1.webp" :style="{ 'transition-delay': (transitionDelays ? '400ms' : '0ms') }" />
                        </Transition>

                        <div class="flex flex-col md:justify-center mt-8 md:mt-0 gap-10">
                            <TransitionGroup name="fade-left">
                                <router-link to="#block2" key=1 @click="tileSelected = 1" v-if="onloadAnim" :style="{ 'transition-delay': (transitionDelays ? '600ms' : '0ms') }">
                                    <div class="flex flex-row items-center select-none duration-200 hover:translate-x-2">
                                        <Planning class="h-12 md:h-14 stroke-100 glow" />
                                        <Header3 class="text-2xl ml-4">EDT</Header3>
                                        <RightArrow class="h-12 w-12 stroke-100 hidden sm:block glow" />
                                    </div>
                                </router-link>

                                <router-link to="#block2" key=2 @click="tileSelected = 2" v-if=onloadAnim :style="{ 'transition-delay': (transitionDelays ? '700ms' : '0ms') }">
                                    <div class="flex flex-row items-center select-none duration-200 hover:translate-x-2">
                                        <Mails class="h-12 md:h-14 stroke-100 glow" />
                                        <Header3 class="text-2xl ml-4">Mails</Header3>
                                        <RightArrow class="h-12 w-12 stroke-100 hidden sm:block glow" />
                                    </div>
                                </router-link>

                                <router-link to="#block2" key=3 @click="tileSelected = 3" v-if=onloadAnim :style="{ 'transition-delay': (transitionDelays ? '800ms' : '0ms') }">
                                    <div class="flex flex-row items-center select-none duration-200 hover:translate-x-2">
                                        <Todo class="h-12 md:h-14 stroke-100 glow" />
                                        <Header3 class="text-2xl ml-4">Todo</Header3>
                                        <RightArrow class="h-12 w-12 stroke-100 hidden sm:block glow" />
                                    </div>
                                </router-link>

                                <div v-if=onloadAnim class="flex flex-row items-center select-none -mt-9 md:-mt-4" :style="{ 'transition-delay': (transitionDelays ? '800ms' : '0ms') }" :key=4>
                                    <Header3 class="text-3xl ml-4">...</Header3>
                                </div>
                            </TransitionGroup>
                        </div>
                    </div>
                </div>
            </ScreenFlex>
        </Block>
        <!-- First block start -->

        <!-- Second block start-->
        <Transition name="fade">
            <Block v-if=onloadAnim id="block2" :style="{ 'transition-delay': '1000ms' }" class="md:h-full">
                <Blob1 class="hidden md:block absolute w-[700px] lg:w-[850px] left-0 top-full -translate-y-full -ml-[400px] mt-[300px] aspect-square" />

                <ScreenFlex class="flex-col">
                    <div class="relative z-10 flex-1 flex items-center justify-center">
                        <div class="over-grid">
                            <TransitionGroup name="fade">
                                <img v-if="tileSelected == 1" class="max-h-[400px] md:max-h-[500px] lg:max-h-[600px]" src="@/assets/images/phone2.webp" />
                                <img v-if="tileSelected == 2" class="max-h-[400px] md:max-h-[500px] lg:max-h-[600px]" src="@/assets/images/phone3.webp" />
                                <img v-if="tileSelected == 3" class="max-h-[400px] md:max-h-[500px] lg:max-h-[600px]" src="@/assets/images/phone4.webp" />
                            </TransitionGroup>
                        </div>
                    </div>

                    <div class="relative z-20 flex-2 flex flex-col justify-center -mt-80 md:mt-0">
                        <TransitionShadow />

                        <div class="p-6 pb-20 pt-0 md:p-10 mt-28 md:mt-0 bg-900 md:bg-transparent">
                            <h2 v-if=onloadAnim class="text-4xl md:text-6xl font-medium" :style="{ 'transition-delay': (transitionDelays ? '200ms' : '0ms') }">
                                Tous les services au même endroit
                            </h2>

                            <Text2 class="mt-5">
                                Tout ce qui compte pour vous et bien plus. Regrouper les services de votre UFR en un seul endroit.
                            </Text2>

                            <div class="flex flex-col mt-14 gap-10">
                                <div class="flex flex-row w-full" @click="tileSelected = 1">
                                    <div>
                                        <div class="p-3 rounded-xl duration-300" :class="{ 'bg-accent': tileSelected == 1 }">
                                            <Planning class="h-14 stroke-accent duration-300" :class="{ 'stroke-100': tileSelected == 1 }" />
                                        </div>
                                    </div>

                                    <div class="flex-1 ml-8">
                                        <Header2>Votre emploi du temps toujours avec vous.</Header2>

                                        <Text2 class="mt-2">
                                            Ajoutez votre emploi du temps dans l'application et consultez le hors ligne. Vous pouvez même en ajouter 
                                            plusieurs si vous avez plusieurs matières.
                                        </Text2>
                                    </div>
                                </div>

                                <div class="flex flex-row w-full" @click="tileSelected = 2">
                                    <div>
                                        <div class="p-3 rounded-xl duration-300" :class="{ 'bg-accent': tileSelected == 2 }">
                                            <Mails class="h-14 stroke-accent duration-300" :class="{ 'stroke-100': tileSelected == 2 }" />
                                        </div>
                                    </div>

                                    <div class="flex-1 ml-8">
                                        <Header2>Gardez un oeil sur les informations importantes</Header2>

                                        <Text2 class="mt-2">
                                            Consulter votre messagerie à tout moment et conserver vos mails les plus important pour les consulter même hors ligne.
                                        </Text2>
                                    </div>
                                </div>

                                <div class="flex flex-row w-full" @click="tileSelected = 3">
                                    <div>
                                        <div class="p-3 rounded-xl duration-300" :class="{ 'bg-accent': tileSelected == 3 }">
                                            <Todo class="h-14 stroke-accent duration-300" :class="{ 'stroke-100': tileSelected == 3 }" />
                                        </div>
                                    </div>

                                    <div class="flex-1 ml-8">
                                        <Header2>Une journée bien organisée</Header2>

                                        <Text2 class="mt-2">
                                            Avec la liste des tâches intégrée directement dans l'application restez organiser dans votre travail et dites 
                                            stop aux distraction.
                                        </Text2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScreenFlex>
            </Block>
        </Transition>
        <!-- Second block end-->

        <!-- End block start -->
        <Block v-if=onloadAnim id="block2" :style="{ 'transition-delay': '1000ms' }" class="overflow-hidden pt-20 pb-32">
            <div class="flex-1 flex flex-col items-center">
                <h2 class="text-4xl md:text-6xl font-medium">Alors qu'attendez vous&nbsp;?</h2>

                <a href="https://app.ufr-planning.com/">
                    <AccentButton v-if=onloadAnim class="mt-8 md:mt-20 w-min glow-accent hover:scale-105 hover:-translate-y-2" :style="{ 'transition-delay': (transitionDelays ? '1200ms' : '0ms') }">
                        <Text2>Télécharger&nbsp;maintenant</Text2>
                    </AccentButton>
                </a>
            </div>
        </Block>
        <!-- End block end -->

        <Transition name="fade">
            <BottomMenu v-if=onloadAnim :style="{ 'transition-delay': '1000ms' }" />
        </Transition>
    </div>
</template>

<script setup lang="ts">
    import TopMenu from "@/components/TopMenu.vue";
    import BottomMenu from "@/components/BottomMenu.vue";
    import AccentButton from "@/ui/buttons/AccentButton.vue";
    import Header3 from "@/ui/header/Header3.vue";
    import Blob1 from "@/ui/blobs/Blob1.vue";
    import RightArrow from "@/icons/RightArrow.vue";
    import Planning from "@/icons/Planning.vue";
    import Mails from "@/icons/Mails.vue";
    import Todo from "@/icons/Todo.vue";
    import { onMounted, ref } from "vue";
    import Header2 from "@/ui/header/Header2.vue";
    import Block from "@/ui/containers/Block.vue";
    import ScreenFlex from "@/ui/containers/ScreenFlex.vue";
    import TransitionShadow from "@/ui/decorations/TransitionShadow.vue";
    import Text2 from "@/ui/text/Text2.vue";
    import { isFirstLoad } from "@/router/router";

    const onloadAnim = ref(isFirstLoad() ? false : true);
    const transitionDelays = ref(true);

    const tileSelected = ref(1);

    onMounted(() => {
        onloadAnim.value = true;

        setTimeout(() => {
            transitionDelays.value = false;
        }, 2000);
    });
</script>

<style scoped>
    .fade-left-enter-active {
        transition: 1s;
    }

    .fade-left-enter-from {
        opacity: 0;
        transform: translate(20px, 0px);
    }

    .fade-left-enter-to {
        opacity: 1;
        transform: translate(0px, 0px);
    }

    .fade-enter-active, .fade-leave-active {
        transition: 1s;
    }

    .fade-enter-from, .fade-leave-to {
        opacity: 0;
    }

    .fade-enter-to, .fade-leave-from {
        opacity: 1;
    }

    @media screen and (min-width: 768px ) {
        .home-block-height {
            height: calc(100% - 112px);
        }
    }
</style>