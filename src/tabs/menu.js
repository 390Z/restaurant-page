const loadMenu = () => {
    const menu = document.createElement('div');
    
    const menuItems = [{
        name: 'Rainbow Roll',
        desc: 'california roll topped with fresh fish & avocado',
        price: 10.95
    }, {
        name: 'Dragon Roll',
        desc: 'eel avocado roll topped with avocado',
        price: 12.95
    }, {
        name: 'Kamikaze Roll',
        desc: 'shrimp tempura avocado roll topped with crunch & spicy tuna'
    }, {
        name: 'Lady in Red Roll',
        desc: 'spicy tuna Roll topped with tuna',
        price: 10.95
    }, {
        name: 'Spicy Crispy Crunch',
        desc: 'deep fried spicy tuna avocado roll topped with crab & masago',
        price: 11.95
    }, {
        name: 'Rose Garden Roll',
        desc: 'tuna roll topped with spicy tuna, mango, avocado, crunch & masago',
        price: 14.95
    }]
    
    for (let i = 0, x = menuItems.length; i < x; i++) {
        let obj = menuItems[i];
        const ul = document.createElement('ul');

        for (let property in obj) {
            const li = document.createElement('li');
            li.innerHTML = obj[property];
            ul.appendChild(li);
        }
        
        const menuItem = document.createElement('div');
        menuItem.appendChild(ul);
        menu.appendChild(menuItem);
    }

    return menu;
}

export default loadMenu;