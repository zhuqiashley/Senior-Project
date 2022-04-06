<template>
    <button class="custombutton" @click="foo()" >{{title}}</button>
</template>

<script>

export default {
    props: {
        title: {
            type: String,
            required: false, 
            default: 'Test'
        },
    },
    setup() {
        function foo() {
            console.log('foo');
        }
        return {
            foo
        }
    },
}
</script>

<style scoped>
.custombutton, .custombutton:focus {
    background-color: transparent;
    padding: 8px 20px;
    border-radius: 50px;
    color: #fff;
    font-size: 14px;
    border: 2px solid #47b2e4;
    font-weight: 600;
}
.custombutton:hover, .custombutton:focus:hover {
    color: #fff;
    background: #31a9e1;
}
</style>