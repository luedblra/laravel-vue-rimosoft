new Vue({
    el: '#crud',
    created: function(){
      this.getKeeps();  
    },
    data: {
        keeps: []
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
            })
        }
    }

});