<template>
    <div class="markdown-body" v-html="renderedHtml"></div>
</template>

<script>
import Axios from 'axios'
import Showdown from 'showdown'

export default {
    data() {
        return {
            content: null,
            language: this.$route.params.language ?? 'en',
        }
    },
    created() {
        if (this.feed === undefined) {
            throw 'Feed is required to be defined in order to extend the BaseDoc'
        }
    },
    mounted() {
        const url = this.feed.replace(':language', this.language)
        Axios.get(url).then((response) => {
            this.content = response.data
        })
    },
    computed: {
        renderedHtml() {
            const showdown = new Showdown.Converter()
            showdown.setFlavor('github')
            return showdown.makeHtml(this.content)
        }
    }
}
</script>
