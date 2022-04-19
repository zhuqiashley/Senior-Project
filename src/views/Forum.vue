<template>
    <custom-header :title="titleValue"></custom-header>
    <div class="container">
		<div class="row">
			<div class="col-lg-12 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1">
				<h1>Discussion Forum</h1>
			</div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <forum class= "mt-4" :image="this.$route.query.forumSrc" >
                    <template #question>
                        {{this.$route.query.question}}
                    </template>
                     <template #user>
                        <br/>
                        <strong>Posted By: </strong> {{this.$route.query.user}}  &emsp; <strong>On: </strong> {{this.$route.query.postedOn}}

                    </template>
                    
                    <template #comment>
                        <br/>
                        {{this.$route.query.comments}}
                    </template>
                    <template #end>
                        <div class="d-grid gap-2 d-md-flex justify-content-md-right">
                            <strong>Like Count: </strong> <p> {{this.$route.query.likeCount}}</p> &emsp;
                            <strong>View Count: </strong> <p> {{this.$route.query.viewCount}}</p> &emsp;
                            <strong>Comments: </strong> <p> {{this.$route.query.commentCount}}</p> &emsp;
                        </div>
                    </template>
                </forum>
            </div>
		</div>
	</div>
</template>

<!-- ======= SCRIPT ======= -->
<script>
import CustomHeader from '../components/Header.vue'
import Forum from '../components/Forum.vue'

export default{
    components:
    {
        CustomHeader,
        Forum
    },
    computed: {
		titleValue() {
			return  this.$route.query.title
		}
	},
    setup() {
        
    },
}
</script>

<!-- ======= STYLE ======= -->
<style scoped>

</style>