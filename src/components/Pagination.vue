<template>
    <nav aria-label="Pagination">
        <ul class="pagination justify-content-center">
            <li :class="['page-item']" :disabled="currentPage == 1 ? true : null">
                <a class="page-link" href="#" @click="onPageChange(currentPage - 1)">Previous</a>
            </li>
            <li v-for="index in pageRange(1)" v-bind:key="index" class="page-item">
                <a :class="['page-link', currentPage == index ? 'active' : '']" href="#" @click="onPageChange(index)">{{index}}</a>
            </li>
            <li :class="['page-item']" :disabled="currentPage == totalPages ? true : null">
                <a class="page-link" href="#" @click="onPageChange(currentPage + 1)">Next</a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            currentPage: {
                type: Number,
                default: 1
            },
            totalPages: {
                type: Number,
            },
            pageSize: {
                type: Number,
                default: 10
            },
        },
        setup(props, { emit }) {
            function onPageChange(page) {
                if (page < 1 || page > props.totalPages || page === '...') {
                    return;
                }
                
                emit('page-change', page);
            }
            function pageRange(pagesToShow) {
                const startPage = 1;
                const endPage = props.totalPages;
                const range = [startPage];
                if (pagesToShow < 1) {
                    pagesToShow = 1;
                }
                if (pagesToShow > endPage) {
                    pagesToShow = endPage;
                }
                for(let i = startPage + 1; i < endPage; i++) {
                    if (i > props.currentPage + pagesToShow || i < props.currentPage - pagesToShow) {
                        if(range && range[range.length - 1] !== '...') {
                            range.push('...');
                        }
                    } else {
                        range.push(i);
                    }
                }
                if (range[range.length - 1] !== endPage) {
                    range.push(endPage);
                }
                return range;
            }
            return {
                onPageChange, pageRange
            }
        },
    }
</script>


<style scoped>
    .page-link {
        color: #000;
    }
    .page-link.active {
        color: #47b2e4;
    }
    .page-item[disabled] .page-link {
        color:var(--tertiary);
        background-color: #f1f1f1;
        cursor: not-allowed;
    }
    .page-item[disabled] .page-link:focus {
        box-shadow: none;
    }
</style>