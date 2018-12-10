const loadAbout = () => {
    const about = document.createElement('div');
    
    const title = document.createElement('h1');
    title.innerHTML = 'About Us';
    about.appendChild(title);

    const text = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Dictum varius duis at consectetur lorem donec massa sapien faucibus. Nibh nisl condimentum id venenatis a condimentum vitae. Vitae tempus quam pellentesque nec. Orci sagittis eu volutpat odio facilisis mauris sit amet. At imperdiet dui accumsan sit amet. Ut pharetra sit amet aliquam. Diam vulputate ut pharetra sit amet. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Phasellus faucibus scelerisque eleifend donec pretium vulputate sapien nec. Nullam ac tortor vitae purus faucibus ornare suspendisse sed. Integer quis auctor elit sed vulputate mi sit amet mauris. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Pellentesque habitant morbi tristique senectus et netus et malesuada. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce. Malesuada proin libero nunc consequat. Adipiscing diam donec adipiscing tristique. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum.',
        'Ac tortor dignissim convallis aenean et tortor at. Interdum velit euismod in pellentesque massa. Quis viverra nibh cras pulvinar mattis nunc. Aliquet risus feugiat in ante metus dictum at tempor commodo. Volutpat sed cras ornare arcu dui vivamus arcu. Laoreet sit amet cursus sit amet dictum sit amet. Mi proin sed libero enim sed faucibus. Vulputate odio ut enim blandit volutpat maecenas volutpat. Quam pellentesque nec nam aliquam sem et tortor consequat id. Mattis molestie a iaculis at erat. Consequat nisl vel pretium lectus quam. Aliquet enim tortor at auctor urna. Et ultrices neque ornare aenean euismod elementum nisi quis eleifend. Diam volutpat commodo sed egestas egestas fringilla. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Non enim praesent elementum facilisis. Quis imperdiet massa tincidunt nunc. Ullamcorper dignissim cras tincidunt lobortis feugiat.'
    ];
    text.forEach(item => {
        const p = document.createElement('p');
        p.innerHTML = item;
        about.appendChild(p);
    })

    return about;
}

export default loadAbout;