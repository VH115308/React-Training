loadData();

setInterval(loadData, 10000);

let listData = [];

async function loadData() {
    const res = await fetch("http://localhost:3000/data");
    listData = await res.json();
    console.log(listData);
    document.getElementById("list-data").innerHTML = listData.map(item => {
        return `
            <li id=${item.id} class="list-item">
                <div class="question">
                    <span class="material-symbols-outlined arrow" data-id=${item.id}>arrow_right</span>
                    <span>${item.question}</span>
                </div>
                <div class="answer" id="answer-${item.id}">
                    <span>${item.answer}</span>
                </div>
            </li>
        `
    }).join("");
    
    document.querySelectorAll(".arrow").forEach((arrow) => {
        arrow.addEventListener("click", () => {
            const answerDiv = document.getElementById("answer-" + arrow.dataset.id);
            if(arrow.classList.contains('down')){
                arrow.classList.remove('down');
                answerDiv.classList.remove('show');
                return;
            }

            document.querySelectorAll('.answer').forEach((ans) => {
                ans.classList.remove('show');
            });
            document.querySelectorAll('.arrow').forEach(a => {
                a.classList.remove('down');
            });

            arrow.classList.add('down');
            answerDiv.classList.add('show');
        });
    });

}





















// document.querySelectorAll(".arrow").forEach(arrow => {
//     arrow.addEventListener("click", () => {
//         const answerDiv = arrow.parentElement.nextElementSibling;
//         answerDiv.style.display =
//             answerDiv.style.display === "none" ? "block" : "none";
//     });
// });
