let don = document.getElementById('don')
let submit = document.getElementById('envoyer')
var input = document.getElementsByTagName('input')
let select= document.getElementsByTagName('select')

don.addEventListener('change', (event)=>{

       if(event.target.value == ""){
        prompt(`Saisissez votre montant`)
       }
    
})

submit.addEventListener('click', () =>{
    alert(`Validez\-vous le formulaire \? `)
    
    for (var i = 0; i < input.length; i++) {
        if (input[i].value == "") {
          alert("Tous les champs doivent être remplis");
          return false;
        }
      }
      return true;
    })

    submit.addEventListener('click', () =>{
        for (let y = 0; y<select.length; y++){
            if(select[y].value == ""){
                alert("Veuillez choisir au moins une cause");
                return false;
            }
        }
        return true;
    })

    

    
    


  