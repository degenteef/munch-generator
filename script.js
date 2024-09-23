// Meme image elements
const catImage = document.getElementById('cat-image');
const backgroundImage = document.getElementById('background-image');
const hatImage = document.getElementById('hat-image');
const backImage = document.getElementById('back-image');
const frontImage = document.getElementById('front-image');
const faceImage = document.getElementById('face-image');

// Scrollable images
const catImages = document.querySelectorAll('#cat-scroll .select-image');
const backgroundImages = document.querySelectorAll('#background-scroll .select-image');
const hatImages = document.querySelectorAll('#hat-scroll .select-image');
const backImages = document.querySelectorAll('#back-scroll .select-image');
const frontImages = document.querySelectorAll('#front-scroll .select-image');
const faceImages = document.querySelectorAll('#face-scroll .select-image');

// Scroll function to scroll left
function scrollLeftHandler(id) {
    const scrollable = document.getElementById(id);
    scrollable.scrollBy({
        left: -200, // Adjust this value to control the scroll amount
        behavior: 'smooth'
    });
}

// Scroll function to scroll right
function scrollRight(id) {
    const scrollable = document.getElementById(id);
    scrollable.scrollBy({
        left: 200, // Adjust this value to control the scroll amount
        behavior: 'smooth'
    });
}

// Function to remove active class from previous selected items
function removeActiveClass(images) {
    images.forEach(img => {
        img.classList.remove('active');
    });
}

// Add click listeners to all cat images
catImages.forEach(img => {
    img.addEventListener('click', () => {
        removeActiveClass(catImages);
        img.classList.add('active');
        catImage.src = img.dataset.cat;
    });
});

// Add click listeners to all background images
backgroundImages.forEach(img => {
    img.addEventListener('click', () => {
        removeActiveClass(backgroundImages);
        img.classList.add('active');
        backgroundImage.src = img.dataset.background;
    });
});

// Add click listeners to all hat images
hatImages.forEach(img => {
    img.addEventListener('click', () => {
        removeActiveClass(hatImages);
        img.classList.add('active');
        hatImage.src = img.dataset.hat;
    });
});

// Add click listeners to all back images
backImages.forEach(img => {
    img.addEventListener('click', () => {
        removeActiveClass(backImages);
        img.classList.add('active');
        backImage.src = img.dataset.back;
    });
});

// Add click listeners to all front images
frontImages.forEach(img => {
    img.addEventListener('click', () => {
        removeActiveClass(frontImages);
        img.classList.add('active');
        frontImage.src = img.dataset.front;
    });
});

// Add click listeners to all face images
faceImages.forEach(img => {
    img.addEventListener('click', () => {
        removeActiveClass(faceImages);
        img.classList.add('active');
        faceImage.src = img.dataset.face;
    });
});

// Function to select the first image automatically
function selectFirstImages() {
    if (catImages.length > 0) {
        catImages[0].click(); // Simulate click on the first cat image
    }
    if (backgroundImages.length > 0) {
        backgroundImages[0].click(); // Simulate click on the first background image
    }
    if (hatImages.length > 0) {
        hatImages[0].click(); // Simulate click on the first hat image
    }
    if (backImages.length > 0) {
        backImages[0].click(); // Simulate click on the first back image
    }
    if (frontImages.length > 0) {
        frontImages[0].click(); // Simulate click on the first front image
    }
    if (faceImages.length > 0) {
        faceImages[0].click(); // Simulate click on the first face image
    }
}


// Randomize selections
function randomizeMeme() {
    const randomCat = catImages[Math.floor(Math.random() * catImages.length)];
    const randomBackground = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
    const randomHat = hatImages[Math.floor(Math.random() * hatImages.length)];
    const randomBack = backImages[Math.floor(Math.random() * backImages.length)];
    const randomFront = frontImages[Math.floor(Math.random() * frontImages.length)];
    const randomFace = faceImages[Math.floor(Math.random() * faceImages.length)];

    randomCat.click();
    randomBackground.click();
    randomHat.click();
    randomBack.click();
    randomFront.click();
    randomFace.click();
}

// Download meme
function downloadMeme() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to 500x500 pixels
    canvas.width = 500;
    canvas.height = 500;

    const cat = new Image();
    const background = new Image();
    const hat = new Image();
    const back = new Image();
    const front = new Image();
    const face = new Image();

    // Set the source of the images
    cat.src = catImage.src;
    background.src = backgroundImage.src;
    hat.src = hatImage.src;
    back.src = backImage.src;
    front.src = frontImage.src;
    face.src = faceImage.src;

    // Wait for all images to load
    let imagesLoaded = 0;
    const totalImages = 6; // Update total to reflect all images

    function drawImages() {
        if (imagesLoaded === totalImages) {
            // Draw images on the canvas, scaling them to fit
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height); // Draw background first
            ctx.drawImage(cat, 0, 0, canvas.width, canvas.height); // Draw cat on top
            ctx.drawImage(hat, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(back, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(front, 0, 0, canvas.width, canvas.height);
            ctx.drawImage(face, 0, 0, canvas.width, canvas.height);

            const link = document.createElement('a');
            link.download = 'meme.png';
            link.href = canvas.toDataURL();
            link.click();
        }
    }

    // Set onload handlers for each image
    cat.onload = () => { imagesLoaded++; drawImages(); };
    background.onload = () => { imagesLoaded++; drawImages(); };
    hat.onload = () => { imagesLoaded++; drawImages(); };
    back.onload = () => { imagesLoaded++; drawImages(); };
    front.onload = () => { imagesLoaded++; drawImages(); };
    face.onload = () => { imagesLoaded++; drawImages(); };

    // Handle errors (optional)
    cat.onerror = () => console.error('Error loading cat image');
    background.onerror = () => console.error('Error loading background image');
    hat.onerror = () => console.error('Error loading hat image');
    back.onerror = () => console.error('Error loading back image');
    front.onerror = () => console.error('Error loading front image');
    face.onerror = () => console.error('Error loading face image');
}

// Event listeners
document.getElementById('randomize').addEventListener('click', randomizeMeme);
document.getElementById('download').addEventListener('click', downloadMeme);

selectFirstImages();
