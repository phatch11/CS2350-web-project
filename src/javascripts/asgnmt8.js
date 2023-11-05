import "bootstrap"

// Define gallery array with 12 images
const gallery = [
    {
        id: 1,
        title: "Image 1",
        url: "https://images.unsplash.com/photo-1665695503038-a5c3127f3da3?auto=format&fit=crop&q=80&w=2865&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Street Car"
    },
    {
        id: 2,
        title: "Image 2",
        url: "https://images.unsplash.com/photo-1698889146913-a1f616a906ff?auto=format&fit=crop&q=80&w=3024&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "City Clouds"
    },
    {
        id: 3,
        title: "Image 3",
        url: "https://images.unsplash.com/photo-1698180733432-c81473da4ecd?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Alley"
    },
    {
        id: 4,
        title: "Image 4",
        url: "https://images.unsplash.com/photo-1697441642191-9be6641590bd?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Overhead City"
    },
    {
        id: 5,
        title: "Image 5",
        url: "https://images.unsplash.com/photo-1694501898583-7caca30dde01?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Night Market"
    },
    {
        id: 6,
        title: "Image 6",
        url: "https://images.unsplash.com/photo-1677577439625-8bf10bcc3b18?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Signs"
    },
    {
        id: 7,
        title: "Image 7",
        url: "https://images.unsplash.com/photo-1683450393696-e6f9e8bd785f?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Night River"
    },
    {
        id: 8,
        title: "Image 8",
        url: "https://images.unsplash.com/photo-1685053361005-17fee61b704e?auto=format&fit=crop&q=80&w=2799&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Tower"
    },
    {
        id: 9,
        title: "Image 9",
        url: "https://images.unsplash.com/photo-1695088555288-95235e4a0820?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Fair Day"
    },
    {
        id: 10,
        title: "Image 10",
        url: "https://images.unsplash.com/photo-1695078071178-521b9ca3289d?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Rain"
    },
    {
        id: 11,
        title: "Image 11",
        url: "https://images.unsplash.com/photo-1692919574654-8a6a9ff7c543?auto=format&fit=crop&q=80&w=3087&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Shadows"
    },
    {
        id: 12,
        title: "Image 12",
        url: "https://images.unsplash.com/photo-1694537745992-8dacd72a98d7?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Town"
    }
];

// Create a function to generate thumbnails
function generateThumbnails() {
    const galleryContainer = document.querySelector(".gallery");
    gallery.forEach(image => {
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        imageContainer.setAttribute("data-description", image.description);
        
        const imageElement = document.createElement("img");
        imageElement.src = image.url;
        imageElement.alt = image.title;
        imageElement.addEventListener("click", () => displayImage(image));
        
        imageContainer.appendChild(imageElement);
        galleryContainer.appendChild(imageContainer);
    });
}

// Create a function to display the selected image in the big image area
function displayImage(selectedImage) {
    const bigImage = document.getElementById("bigImage");
    const imageDescription = document.getElementById("imageDescription");

    bigImage.src = selectedImage.url;
    bigImage.alt = selectedImage.title;
    imageDescription.textContent = selectedImage.description;
}

// Call the generateThumbnails function to populate the gallery
generateThumbnails();