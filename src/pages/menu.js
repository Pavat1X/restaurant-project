const menuPage = document.createElement('div');

menuPage.setAttribute('id', 'menu-page')

menuPage.innerHTML = `            <h3>menu</h3>
            <div id="menu-item">
                <p>Char Siu Bao</p>
                <p>$5</p>
            </div>
            <div id="menu-item">
                <p>Three Meats Rice</p>
                <p>$12</p>
            </div>
            <div id="menu-item">
                <p>Dim Sum Set</p>
                <p>$7</p>
            </div>`

export { menuPage };