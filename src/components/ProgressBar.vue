<template>
    <div class="progress">
        <div class="progress-bar progress-bar-striped" role="progressbar" :style="`width: ${progress}%`" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100">
            {{progress}}%
        </div>
    </div>
</template>

<script>
export default {
    props: {
        progress: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    setup() {
        return { }
    },
}
</script>