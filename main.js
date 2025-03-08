document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }
    
    alert("Login Successful! (This is a placeholder action)");
    this.reset();
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let message = document.getElementById("message").value;
    
    if (name === "" || email === "" || number === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }
    
    alert("Thank you, " + name + "! We will contact you soon. Your message: " + message);
    this.reset();
});

document.querySelectorAll(".like-btn").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        this.classList.toggle("liked");
        if (this.classList.contains("liked")) {
            alert("Added to favorites!");
        } else {
            alert("Removed from favorites!");
        }
    });
});

document.querySelectorAll(".cart-btn").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Product added to cart!");
    });
});

document.querySelectorAll(".user-btn").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        alert("User options coming soon!");
    });
});