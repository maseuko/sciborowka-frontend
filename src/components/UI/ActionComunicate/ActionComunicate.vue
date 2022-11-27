<script>
import { useQuasar } from 'quasar'
    export default {
        data(){
            return {
                post_added: {
                    message: "Dodano post",
                    color: 'gray-7',
                    icon: 'done',
                    actions: [
                        {
                            label: "Przejdź", color: 'green-7' , handler: () => {this.$store.commit("comunicate/goTo")}
                        },
                        {
                            icon: 'close', color: 'red-7', handler: () => {}
                        }
                    ],
                    timeout: 10000,
                    position: 'top',
                    multiLine: false
                },
                error:{
                    message: "Coś poszło nie tak",
                    color: 'red-7',
                    icon: 'warning',
                    actions: [{
                        icon: 'close', color: 'white' , handler: () => {}
                    }],
                    timeout: 10000,
                    position: "top"
                },
                post_modified: {
                    message: "Zmodyfikowano post",
                    color: 'gray-7',
                    icon: 'done',
                    actions: [
                        {
                            label: "Przejdź", color: 'green-7' , handler: () => {}
                        },
                        {
                            icon: 'close', color: 'red-7', handler: () => {}
                        }
                    ],
                    timeout: 10000,
                    position: 'top',
                    multiLine: false
                },
                post_deleted: {
                    message: "Usunięto post",
                    color: 'gray-7',
                    icon: 'done',
                    actions: [
                        {
                            icon: 'close', color: 'red-7', handler: () => {}
                        }
                    ],
                    timeout: 10000,
                    position: 'top',
                    multiLine: false
                },
                main_page_modified:{
                    message: "Strona główna została zaktualizowana",
                    color: 'gray-7',
                    icon: 'done',
                    actions: [
                        {
                            icon: 'close', color: 'red-7', handler: () => {}
                        }
                    ],
                    timeout: 10000,
                    position: 'top',
                    multiLine: false
                },
                image_deleted: {
                    message: "Usunięto zdjęcie",
                    color: 'gray-7',
                    icon: 'done',
                    actions: [
                        {
                            icon: 'close', color: 'red-7', handler: () => {}
                        }
                    ],
                    timeout: 10000,
                    position: 'top',
                    multiLine: false
                },
                closeWatcher: null
            }
        },
        computed:{
            isOpened(){
                return this.$store.getters["comunicate/opened"];
            }
        },
        setup(){
            const $q = useQuasar();
            return {
                showNotify(){
                    $q.notify(this[this.$store.getters["comunicate/mode"]]);
                }
            }
        },
        created(){
            if(this.isOpened) this.showNotify();
            if(this.closeWatcher){
                clearTimeout(this.closeWatcher);
                this.closeWatcher = null;
            }
            this.closeWatcher = setTimeout(()=> this.$store.commit("comunicate/closeWindow"), 10000);
        }
    }
</script>