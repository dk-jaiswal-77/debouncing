document.querySelector("#entry").addEventListener("input", handleInput);

const debounced = document.querySelector("#debounced");
const normal = document.querySelector("#normal");

function handleInput(e){
    normal.textContent = e.target.value;
    debouncing(e);
}

let timeout_id = null;
function debouncing(e){
    if(timeout_id == null)
    {
        timeout_id = setTimeout(() => {
            debounced.textContent = e.target.value;
        }, 1000);
    }
    else
    {
        clearTimeout(timeout_id);
        timeout_id = setTimeout(() => {
            debounced.textContent = e.target.value;
        }, 1000);
    }
}