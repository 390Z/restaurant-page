const loadContact = () => {
    const contact = document.createElement('div');

    const title = document.createElement('h1');
    title.innerHTML = 'Contact Info';
    contact.appendChild(title);

    const info = [
        'Phone: 123-456-7890',
        'E-mail: manager@mssushi.com'
    ];
    info.forEach(item => {
        const p = document.createElement('p');
        p.innerHTML = item;
        contact.appendChild(p);
    })

    return contact;
}

export default loadContact;