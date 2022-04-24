<template>
    <div class="card">
        <img v-if="image" :src="getImage(`${image.src}`) " :class="[horizontal ? 'card-img-left' : 'card-img-top']" :alt="image.alt">

        <div :class="['card-body', horizontal ? 'shifted' : '']">
            <h5 class="card-title" v-if="hasSlot('title')">
                <slot name="title"></slot>
            </h5>
            <h6 class="card-subtitle" v-if="hasSlot('subtitle')" >
                <slot name="subtitle"></slot>
            </h6>
            <div class="card-text"  v-if="hasSlot('body')">
                <slot name="body"></slot>
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
        horizontal: {
            type: Boolean,
            default: false
        }
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
.card {
    box-shadow: 1px 2px 5px #7f94b9;
}

.card-img-top {
    height: 15rem;
    object-fit: cover;
    object-position: 50% 0%;
}

.card-img-left {
    height: 6rem;
    width: 6rem;
    object-fit: contain;
    border-radius: 50%;
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