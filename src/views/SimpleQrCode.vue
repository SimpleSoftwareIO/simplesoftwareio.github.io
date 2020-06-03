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
            feed: 'https://raw.githubusercontent.com/SimpleSoftwareIO/simple-qrcode/develop/docs/:language/README.md',
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
