function loadData(구이름) {
    const url = 구이름 === "전체" ? '/api/tourist_street_table/' : `/api/tourist_street_table/?행정구=${구이름}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('tourist_street_table-data-list');
            container.innerHTML = '';

            const countSpan = document.querySelector('.result-count span');
            countSpan.textContent = data.length;

            data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'card';
            div.innerHTML = `
                <img src="img/sungnyemun.jpg" class="thumb" />
                <div class = "card-info">
                    <h3><a href ="/place/${item.id}/">${item.최종표기명}</a></h3>
                    <p>${item.행정구}</p>
                    <p>${item.행정동}</p>
                </div>
                `;
            container.appendChild(div);
        });
    });
}
loadData("전체");