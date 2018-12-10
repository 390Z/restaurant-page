const loadGallery = () => {
    const gallery = document.createElement('div');

    const galleryItems = [{
        img: './images/gallery/sushi-1.jpg',
        desc: 'A tasty roll 1'
    }, {
        img: './images/gallery/sushi-2.jpg',
        desc: 'A tasty roll 2'
    }, {
        img: './images/gallery/sushi-3.jpg',
        desc: 'A tasty roll 3'
    }, {
        img: './images/gallery/sushi-4.jpg',
        desc: 'A tasty roll 4'
    }, {
        img: './images/gallery/sushi-5.jpg',
        desc: 'A tasty roll 5'
    }, {
        img: './images/gallery/sushi-6.jpg',
        desc: 'A tasty roll 6'
    }, {
        img: './images/gallery/sushi-7.jpg',
        desc: 'A tasty roll 7'
    }, {
        img: './images/gallery/sushi-8.jpg',
        desc: 'A tasty roll 8'
    }]

    for (let i = 0, n = galleryItems.length; i < n; i++) {
        const image = document.createElement('img');
        const imgSrc = galleryItems[i].img;
        image.src = imgSrc;

        const description = document.createElement('div');
        const desc = galleryItems[i].desc;
        const descText = document.createTextNode(`${desc}`);       
        description.appendChild(descText);

        const responsive = document.createElement('div');
        const galleryItem = document.createElement('div');
        galleryItem.appendChild(image);
        galleryItem.appendChild(description);
        responsive.appendChild(galleryItem);
        responsive.classList.add('responsive');
        galleryItem.classList.add('gallery');
        gallery.appendChild(responsive);        
    }

    return gallery;
}

export default loadGallery;