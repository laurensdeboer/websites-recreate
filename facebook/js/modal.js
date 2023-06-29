var modal = document.getElementById("id-create-account-modal");

var button = document.getElementById("id-create-acc-button");

button.onclick = function()
{
  modal.style.display = "block";
}

window.onclick = function(event) 
{
  if (event.target == modal) 
  {
    modal.style.display = "none";
  }
}