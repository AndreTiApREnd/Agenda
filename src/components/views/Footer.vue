<!-- <template>
    <footer>
<a class="socialLink" v-for="(socialLink,index) in sociallinks" :key="index" 
:href="socialLink.link">
<img alt="socialLink.label" tittle="socialLink.label" src="socialLink.icon">

</a>
    </footer>
</template>
<script> 

import '../../services/api';

export default{
    name: 'footer',
    data() {
        return {
            sociallinks:[]
        }
    },
mounted() {
    api.get('/social-links.json').then(response => {
thhis.sociallinks = response.data;
    });
},

}
</script>

<style scpped>
footer{
    width: 100%;
    height: 60px;
background-color: var(--color-background-nav);
display: flex;
justify-content: center;
align-items: center;
}

</style> -->