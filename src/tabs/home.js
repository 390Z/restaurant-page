const loadHome = () => {
    const home = document.createElement('div');

    const bgImage = document.createElement('div');
    bgImage.classList.add('bg-image');

    const text = document.createElement('div');
    const title = document.createElement('h2');
    const subtitle = document.createElement('h3');
    title.innerHTML = 'MS Sushi'
    subtitle.innerHTML = 'Japanese Restaurant'
    text.appendChild(title)
    text.appendChild(subtitle);

    home.appendChild(bgImage);
    home.appendChild(text);

    return home;
}

export default loadHome;