// IIFE --> Immediately invoked function expression
(function(){
    function Start()
    {
        console.log("App Started");
        let deleteButtons = document.querySelectorAll('.btn-danger');
        for(buttons of deleteButtons)
        (
            buttons.addEventListener('click',(event)=>{
                if(!confirm("Are you sure?"))
                {
                    event.preventDefault();
                    window.location.assign('/foodtracker');
                }
            })
            
        )
        
    }    

    window.addEventListener("load",Start);

})();