<!-- Code adapted from followed tutorial from: https://vueschool.io/articles/vuejs-tutorials/building-a-tag-input-component-with-the-vue-3-composition-api/ -->
<template>
    <div class="tag-input">
        <input v-model="newTag" type="text" class="form-control" :style="{ 'padding-left': `${paddingLeft}px` }" @keydown.enter="addTag(newTag)" @keydown.prevent.tab="addTag(newTag)" @blur="addTag(newTag)" @keydown.delete="newTag.length === 0 ? removeTag(tags.length - 1) : null"/>
        <ul class="tags" ref="tagsUl">
            <li v-for="(tag, index) in tags" :key="tag" class="tag">
                {{ tag }}
                <button class="delete" @click="removeTag(index)">x</button>
            </li>
        </ul>
    </div>
</template>

<script>


import { ref, watch, nextTick } from 'vue'

export default {
    props: {
        givenTags: {
            type: Array,
            default: () => []
        },
    },
    setup(props){
        const tags = ref([]);
        const newTag = ref('');
        const paddingLeft = ref(10);
        const tagsUl = ref(null);

        function addTag(){
            if(!newTag.value) return;

            if(tags.value.includes(newTag.value)) {
                newTag.value = '';
                return;
            }

            if(newTag.value.trim()){
                tags.value.push(newTag.value);
                newTag.value = '';
            }
        }

        function removeTag(index){
            tags.value.splice(index, 1);
        }

        function setLeftPadding() {
            const extraCushion = 15
            paddingLeft.value = tagsUl.value.clientWidth + extraCushion;
        }

        watch(() => props.givenTags, (newValues) => {
            tags.value = newValues.map(tag => tag.Tag);

            // Padding not updating immediately, so this is a hacky method of doing it
            setTimeout(() => {
                setLeftPadding();
            }, 500);

        });

        watch(tags, () => nextTick(setLeftPadding), {deep: true});

        return { tags, newTag, paddingLeft, tagsUl, addTag, removeTag, setLeftPadding }
    }
}
</script>

<style scoped>
    .tag-input {
        position: relative;
    }
    ul {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 7px;
        margin: 0;
        padding: 0;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 10px;
        max-width: 75%;
        overflow-x: auto;
    }
    .tag {
        background: rgb(104, 179, 250);
        padding: 5px;
        border-radius: 4px;
        color: white;
        white-space: nowrap;
        transition: 0.1s ease background;
    }
    .delete {
        color: white;
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
    }
</style>