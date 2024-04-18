// Testimonials data (you can replace it with your actual testimonials)
const testimonials = [
    {
        text: "I had an amazing experience exploring Italy with this travel agency!",
        author: "John Doe"
    },
    {
        text: "The tour guides in Paris were so knowledgeable, and the Eiffel Tower at night was breathtaking!",
        author: "Jane Smith"
    },
    {
        text: "Dubai exceeded all my expectations. I can't wait to visit again!",
        author: "David Johnson"
    }
];

// Function to display testimonials
function displayTestimonials() {
    const testimonialContainer = document.getElementById('testimonial-container');

    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');
        testimonialDiv.innerHTML = `
            <p>${testimonial.text}</p>
            <p class="author">- ${testimonial.author}</p>
        `;
        testimonialContainer.appendChild(testimonialDiv);
    });
}

// Call the function to display testimonials when the page loads
window.onload = displayTestimonials;
