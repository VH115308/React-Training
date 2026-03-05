function debounce(fn, delay){
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(()=> fn(args), delay);
    }
}

function fn(text){
    console.log("Fn called...");
    document.getElementById("result").textContent = text;
}

const debouncedFn = debounce(fn, 500);

document.getElementById("search").addEventListener("input", (e)=>{
    debouncedFn(e.target.value);
});

