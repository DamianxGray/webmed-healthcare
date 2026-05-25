const calendar = document.getElementById("calendar");
const monthTitle = document.getElementById("monthTitle");

const today = new Date();

const options = {
    month: 'long',
    year: 'numeric'
};

monthTitle.innerText =
today.toLocaleDateString('es-ES', options);

for(let i = 0; i < 15; i++){

    const date = new Date();

    date.setDate(today.getDate() + i);

    const day = document.createElement("div");

    day.classList.add("day");

    day.innerHTML = `
        <strong>${date.getDate()}</strong>
        <br>
        ${date.toLocaleDateString('es-ES',{
            weekday:'short'
        })}
    `;

    day.addEventListener("click",()=>{

        document
        .querySelectorAll(".day")
        .forEach(d=>d.classList.remove("selected"));

        day.classList.add("selected");

    });

    calendar.appendChild(day);
}

/* SELECCIÓN DE HORAS */

const hours =
document.querySelectorAll(".hour");

hours.forEach(hour=>{

    hour.addEventListener("click",()=>{

        hours.forEach(h=>
            h.classList.remove("selected")
        );

        hour.classList.add("selected");

    });

});