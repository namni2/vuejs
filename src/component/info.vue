<template>
    <div v-if="$store.state.dispYn">
        <today/>
        <forcast/>
    </div> 
</template>
<script>
import today from './today';
import forcast from './forcast';

export default {
    name:'info',
    components:{today,forcast} 
}
</script>
