const loadNav = () => {
    const nav = document.createElement('nav');
    const navBar = document.createElement('ul');

    nav.classList.add('topnav');

    const navItems = ['HOME', 'ABOUT', 'MENU', 'GALLERY', 'CONTACT']
    
    for (let i = 0, n = navItems.length; i < n; i++) {
        const navItem = document.createElement('li');
        const navAnchor = document.createElement('a')

        navAnchor.setAttribute('href', `#${navItems[i]}`)
        navAnchor.innerHTML = navItems[i];
        navAnchor.id = navItems[i].toLowerCase();
        navItem.appendChild(navAnchor);
        navBar.appendChild(navItem);
    }

    nav.appendChild(navBar);

    return nav;
}

export default loadNav;