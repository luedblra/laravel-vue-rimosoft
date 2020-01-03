new Vue({
    el: '#crud',
    created: function(){
        this.getKeeps();  
    },
    data: {
        keeps: [],
        newkeep: '',
        errors: []
    },
    methods: {
        getKeeps: function(){
            var urlKeeps = '/Task/Task';
            axios.get(urlKeeps).then(response => {
                this.keeps = response.data
            });
        },
        deleteKeep: function(keep){
            var url = '/Task/Task/' + keep.id;
            axios.delete(url).then(response => {
                this.getKeeps();
                toastr.success('Eliminado correctamente');
            });
        },
        createKeep: function(){
            url = '/Task/Task';
            axios.post(url, {
                keep: this.newkeep
            }).then(response => {
                this.getKeeps();
                this.newkeep = '';
                this.errors = [];
                $('#create').modal('hide');
                toastr.success('tarea guardada con exito '+ response.data.success);
				console.log(response);
            }).catch(error => {
                this.errors = error.response.data;
            });
        }
    }

});