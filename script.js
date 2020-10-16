$(document).ready(function(){
    $('#donacija').click(function(){
        var rand = numberWithCommas(getRandomInt(5000,10000))
        $('#modal').html(`
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body text-center">
              <img src="dollar.jpg" style="width:5em;">
              <p><h4>Hvala na donaciji!</h4> <br> Sa vašeg računa je upravo skinuto <h4>${rand},00 dinara</h4> Suma koju donirate se automatski određuje u sistemu i obrnuto je proporcionalna količini smeha u toku čitanja ovih bisera.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Zatvori</button>
            </div>
          </div>
        </div>
      </div>`);
      $('#exampleModal').modal('show');
    });

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    
    
    



});
