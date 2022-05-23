<template>
    <div>
        <Typenav/>
        <ListContainer/>
        <Recommend/>
        <Rank/>
        <Like/>
        <Floor v-for="floor in floorsList" :key="floor.id" :list="floor"/>
        <Brand/>
    </div>
</template>

<script>
import ListContainer from '@/pages/Home/ListContainer';
import Recommend from '@/pages/Home/Recommend';
import Rank from '@/pages/Home/Rank';
import Like from '@/pages/Home/Like' ;
import Floor from '@/pages/Home/Floor';
import Brand from '@/pages/Home/Brand';
import {mapState} from "vuex"
    export default {
        name:'',
        components:{
            ListContainer,
            Recommend,
            Rank,
            Like,
            Floor,
            Brand
        },
        mounted(){
            this.$store.dispatch("getFloorsList")
            this.$store.dispatch("userInfo")
        },
        computed:{
            ...mapState({
                floorsList:state=>state.home.floorsList
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>