<script>
import BaseDoc from '../components/BaseDoc'

export default {
    extends: BaseDoc,
    data() {
        return {
            feed: 'https://raw.githubusercontent.com/SimpleSoftwareIO/simple-sms/develop/docs/:language/README.md',
        }
    },
}
</script>
