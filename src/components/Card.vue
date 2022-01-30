<template>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title" v-if="hasSlot('title')">
            <slot name="title"></slot>
        </h5>
        <h6 class="card-subtitle" v-if="hasSlot('subtitle')" >
            <slot name="subtitle"></slot>
        </h6>
        <div class="card-text"  v-if="hasSlot('body')">
            <slot name="body"></slot>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    setup(props, { slots }) {
        function hasSlot(name) {
            return !!slots[name]
        }

        return {
            hasSlot
        }
    },
}
</script>


<style scoped>

</style>
