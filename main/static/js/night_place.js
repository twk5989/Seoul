          function loadData(구이름) {
                const url = 구이름 === "전체" ? '/api/night_table/' : `/api/night_table/?자치구=${구이름}`;
                
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        const container = document.getElementById('night_table-data-list');
                        container.innerHTML = '';
    
                        const countSpan = document.querySelector('.result-count span');
                        countSpan.textContent = data.length;

                        data.forEach(item => {
                        const div = document.createElement('div');
                        div.className = 'card';
                        div.innerHTML = `
                            <img src="${item.대표이미지}" class="thumb" />
                            <div class = "card-info">
                                <h3><a href ="/night/${item.id}/">${item.장소명}</a></h3>
                                <p>${item.분류}</p>
                                <p>${item.자치구}</p>
                            </div>
                            `;
                        container.appendChild(div);
                    });
                });
            }
            loadData("전체")