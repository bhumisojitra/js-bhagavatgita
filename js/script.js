let gitalist = document.getElementById('gitalist');
let chapt = document.getElementById('chapt');
let hindi = document.getElementById('hindi');
let listItems = document.getElementById('listItems');

const gita = () => {

    fetch('https://vedicscriptures.github.io/chapters').then((rec) => {
        
        return rec.json();
    }).then((data) => {

        console.log("data : ", data);
        
        for (const gitadata of data) {
            console.log(gitadata.name);

            listItems = "";

            for (let i = 1; i <= gitadata.verses_count; i++) {
                listItems += `<li class="p-2" style="font-weight: 500;" onclick="return slok(${gitadata.chapter_number}, ${i});">slok - ${i}</li>`;
            }

            const uniqueId = `${gitadata.chapter_number}`;

            gitalist.innerHTML += `<div class="accordion-item">
                <h2 class="accordion-header">
                    <button class="accordion-button collapsed p-4 mt-4 " type="button" data-bs-toggle="collapse" data-bs-target="#${uniqueId}" aria-expanded="false" aria-controls="${uniqueId}" style="border: 1px solid black; background-color: white; font-weight: 600;" onclick="return chapter(${gitadata.chapter_number})">
                        chapter - ${gitadata.chapter_number}&nbsp;&nbsp;&nbsp;${gitadata.translation}
                    </button>
                </h2>
                <div id="${uniqueId}" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul>
                            ${listItems}
                        </ul>
                    </div>
                </div>
            </div>`;
        }

    }).catch((err) => {
        console.log("err : ", err);
    })
}

gita();

const chapter = (chap) => {
    fetch(`https://vedicscriptures.github.io/chapter/${chap}`).then((rec) => {
        
        return rec.json();
    }).then((data) => { 

        console.log("data : ", data.summary);

        chapt.innerHTML = `<div><h1 class="p-3 text-center" style="text-shadow: 0px 0px 10px orange; color: orange">CHAPTER SUMMARY</h1><h2>${data.chapter_number} . ${data.translation}</h2><p>${data.summary.en}</p></div>`;

        hindi.innerHTML = `<div class="mt-5"><h2>${data.name}</h2><p>${data.summary.hi}</p><div style="margin-left: 30%;"><img src="img/1.jpg" class="my-5"></div></div>`;

    }).catch((err) => {
        console.log("err : ", err);
    })
}

const slok = (chap, slock) => {

    fetch(`https://vedicscriptures.github.io/slok/${chap}/${slock}`).then((rec) => {
        
        return rec.json();
    }).then((data) => {

        console.log("data for slok : ", data.slok);

        chapt.innerHTML = `<div><h1 class="p-3 text-center" style="text-shadow: 0px 0px 10px orange; color: orange">SLOK</h1><h2>${data.verse} . ${data.slok}</h2></div>`
        hindi.innerHTML = `<div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.tej.author}</h3><h4 class="mt-3 ms-3">${data.tej.ht}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.siva.author}</h3><h4 class="mt-3 ms-3">${data.siva.et}</h4><h4 class="mt-3 ms-3">${data.siva.ec}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.purohit.author}</h3><h4 class="mt-3 ms-3">${data.purohit.et}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.chinmay.author}</h3><h4 class="mt-3 ms-3">${data.chinmay.hc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.san.author}</h3><h4 class="mt-3 ms-3">${data.san.et}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.adi.author}</h3><h4 class="mt-3 ms-3">${data.adi.et}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.gambir.author}</h3><h4 class="mt-3 ms-3">${data.gambir.et}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.madhav.author}</h3><h4 class="mt-3 ms-3">${data.madhav.sc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.anand.author}</h3><h4 class="mt-3 ms-3">${data.anand.sc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.rams.author}</h3><h4 class="mt-3 ms-3">${data.rams.ht}</h4><h4 class="mt-3 ms-3">${data.rams.hc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.raman.author}</h3><h4 class="mt-3 ms-3">${data.raman.sc}</h4><h4 class="mt-3 ms-3">${data.raman.et}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.abhinav.author}</h3><h4 class="mt-3 ms-3">${data.abhinav.sc}</h4><h4 class="mt-3 ms-3">${data.abhinav.et}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.sankar.author}</h3><h4 class="mt-3 ms-3">${data.sankar.ht}</h4><h4 class="mt-3 ms-3">${data.sankar.sc}</h4><h4 class="mt-3 ms-3">${data.sankar.et}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.jaya.author}</h3><h4 class="mt-3 ms-3">${data.jaya.sc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.vallabh.author}</h3><h4 class="mt-3 ms-3">${data.vallabh.sc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.ms.author}</h3><h4 class="mt-3 ms-3">${data.ms.sc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.srid.author}</h3><h4 class="mt-3 ms-3">${data.srid.sc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.dhan.author}</h3><h4 class="mt-3 ms-3">${data.dhan.sc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.venkat.author}</h3><h4 class="mt-3 ms-3">${data.venkat.sc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.puru.author}</h3><h4 class="mt-3 ms-3">${data.puru.sc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.neel.author}</h3><h4 class="mt-3 ms-3">${data.neel.sc}</h4></div>
        <div class="mt-5"><h3 style="color: orange;">AUTHOR - ${data.prabhu.author}</h3><h4 class="mt-3 ms-3">${data.prabhu.et}</h4><h4 class="mt-3 ms-3">${data.prabhu.ec}</h4></div>
        `

    }).catch((err) => {
        console.log("err : ", err);
    })
}