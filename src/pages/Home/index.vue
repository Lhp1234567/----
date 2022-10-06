<template>
<div>
<TapeNav></TapeNav>
<ListContainer></ListContainer>
<Rank></Rank>
<like></like>
<Floor></Floor>
<Floor></Floor>
<Brand></Brand>

</div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer"
import Recommend from '@/pages/Home/Recommend'
import Rank from '@/pages/Home/Rank'
import Like from '@/pages/Home/Like'
import Floor from '@/pages/Home/floor'
import Brand from '@/pages/Home/Brand'
import {mapState} from "vuex"
export default {
    name: "Home",
    components: { ListContainer, Recommend, Rank, Like, Floor, Brand},
   
}
</script>

<style>

</style>