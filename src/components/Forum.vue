<template>
    <div class="forum">
        <img v-if="image" :src="getImage(`${image}`) " class='card-img-left' :alt="forum">

        <div :class="['card-body', horizontal ? 'shifted' : '']">
            <h4 class="card-title" v-if="hasSlot('question')">
                <slot name="question"></slot>
            </h4>

            <p class="card-subtitle" v-if="hasSlot('user')">
                <slot name="user"></slot>
            </p>
            <div class="card-text"  v-if="hasSlot('comment')">
                <slot name="comment"></slot>
            </div>
            <div class="text-end mt-4" v-if="hasSlot('end')">
                <slot name="end"></slot>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: {
        image: {
            type: Object,
            default: null
        },
    },
    setup(props, { slots }) {
        function hasSlot(name) {
            return !!slots[name]
        }
        function getImage(image) {
            if (image) {
                return require(`@/assets/${image}`)
            }
        }

        return {
            hasSlot,
            getImage
        }
    },
}
</script>


<style scoped>
.forum {
    box-shadow: 1px 2px 5px #7f94b9;
    width:100%;
    background-color:white;
    overflow:auto;
}

.card-img-top {
    height: 15rem;
    object-fit: cover;
    object-position: 50% 0%;
}

.card-img-left {
        height: 15rem;
    width: 20rem;
    float: left;
    display: block;
    margin: 1rem;
}

.card-body.shifted {
    margin-left: 7rem;
    position: absolute;
}

.locked img {
    -webkit-filter: grayscale(100%);
        -moz-filter: grayscale(100%);
            -o-filter: grayscale(100%);
        -ms-filter: grayscale(100%);
            filter: grayscale(100%); 
}
</style>