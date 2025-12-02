// document.addEventListener("DOMContentLoaded", function () {

//     // 1. Smooth scrolling for navigation links
//     document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//       anchor.addEventListener("click", function (e) {
//         const href = this.getAttribute("href")
//         if (href.length > 1) {
//           e.preventDefault()
//           const target = document.querySelector(href)
//           if (target) {
//             target.scrollIntoView({ behavior: "smooth", block: "start" })
//           }
//         }
//       })
//     })
  
    // // 2. ⭐ FIXED: Navbar background and style change on scroll using Class Toggling
    // const navbar = document.querySelector(".navbar")
    // if (navbar) {
    //   window.addEventListener("scroll", () => {
    //     if (window.scrollY > 50) {
    //       // Add 'scrolled' class when scrolling down
    //       navbar.classList.add("scrolled")
    //       // Apply direct styles for box-shadow and background
    //       // (You should define background/box-shadow in CSS's .navbar.scrolled for better practice)
    //       navbar.style.boxShadow = "0 4px 20px rgba(26, 115, 232, 0.3)"
    //       navbar.style.background = "white" // Change background to white
    //     } else {
    //       // Remove 'scrolled' class when back at the top
    //       navbar.classList.remove("scrolled")
    //       navbar.style.boxShadow = "none"
    //       // Revert to transparent/original background (defined in your CSS)
    //       // Note: Your CSS already has a linear gradient, so removing the inline 'white' background is key
    //       navbar.style.background = "" // Clear inline style to let CSS take over (gradient)
    //     }
    //   })
    // }
  
    // 3. Add animation on scroll
    // const observerOptions = {
    //   threshold: 0.1,
    //   rootMargin: "0px 0px -50px 0px",
    // }
  
    // const animatedElements = document.querySelectorAll(".service-card, .testimonial-card, .why-card")
  
    // if ("IntersectionObserver" in window) {
    //   const observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //       if (entry.isIntersecting) {
    //         entry.target.style.animation = "fadeInUp 0.8s ease forwards"
    //         observer.unobserve(entry.target)
    //       }
    //     })
    //   }, observerOptions)
  
    //   animatedElements.forEach((el) => observer.observe(el))
    // }
  
    // 4. Contact form submission
    const contactForm = document.querySelector(".contact-form")
    if (contactForm) {
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault()
        const name = this.querySelector('input[type="text"]').value
        const email = this.querySelector('input[type="email"]').value
        alert(`Thank you ${name}! Your inquiry has been received. We'll contact you at ${email}.`)
        this.reset()
      })
    }
  
    // 5. Lazy load images (SAFE — excluding navbar/logo images)
    const images = document.querySelectorAll("img:not(.navbar-brand img)")
  
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1"
            obs.unobserve(entry.target)
          }
        })
      })
  
      images.forEach((img) => {
        img.style.opacity = "0"
        img.style.transition = "opacity 0.8s ease"
        imageObserver.observe(img)
      })
    }
  
    // 6. Active nav link highlight
//     const navLinks = document.querySelectorAll(".navbar-nav .nav-link")
//     navLinks.forEach((link) => {
//       link.addEventListener("click", function () {
//         navLinks.forEach((l) => l.classList.remove("active"))
//         this.classList.add("active")
//       })
//     })
  
//     console.log("Website loaded successfully 🎉")
  
//   })