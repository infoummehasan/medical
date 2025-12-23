//navbar section
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

//hero
// Pause video on small devices (optional)
const video = document.querySelector(".hero-video");

if (window.innerWidth < 600) {
  video.pause();
}
//health
const cards = document.querySelectorAll(".service-card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
//medi
const medicineCards = document.querySelectorAll(".medicine-card");

window.addEventListener("scroll", () => {
  medicineCards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
//doctor
 
const doctorCards = document.querySelectorAll(".doctor-card");

window.addEventListener("scroll", () => {
  doctorCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
//lab
const labCards = document.querySelectorAll(".lab-card");

window.addEventListener("scroll", () => {
  labCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
//emergency
const emergencyCards = document.querySelectorAll(".emergency-card");

window.addEventListener("scroll", () => {
  emergencyCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < window.innerHeight - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
//contact
const contactInfo = document.querySelector(".contact-info");
const qrBox = document.querySelector(".qr-box");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight - 100;

  if (contactInfo.getBoundingClientRect().top < trigger) {
    contactInfo.style.opacity = "1";
    contactInfo.style.transform = "translateX(0)";
  }

  if (qrBox.getBoundingClientRect().top < trigger) {
    qrBox.style.opacity = "1";
    qrBox.style.transform = "translateX(0)";
  }
});
//apor
const form = document.querySelector(".appointment-form");

window.addEventListener("scroll", () => {
  if (form.getBoundingClientRect().top < window.innerHeight - 100) {
    form.style.opacity = "1";
    form.style.transform = "translateY(0)";
  }
});

document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Appointment booked successfully!");
  this.reset();
});
//footer
const footerBoxes = document.querySelectorAll(".footer-box");

window.addEventListener("scroll", () => {
  footerBoxes.forEach(box => {
    if (box.getBoundingClientRect().top < window.innerHeight - 100) {
      box.style.opacity = "1";
      box.style.transform = "translateY(0)";
    }
  });
});
//icons
const icons = document.querySelectorAll(".icon");

icons.forEach((icon, index) => {
  icon.style.animation = `float 3s ease-in-out ${index * 0.3}s infinite`;
});
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
}
`;
document.head.appendChild(style);
 

//form
 
function sendWhatsApp() {

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let department = document.getElementById("department").value;
  let message = document.getElementById("message").value;

  if(name === "" || phone === "" || date === ""){
    alert("Please fill required fields");
    return;
  }

  let whatsappNumber = "919382423855"; // 👉 your WhatsApp number (with country code)

  let text =
    `*New Appointment Booking*%0A%0A` +
    `👤 Name: ${name}%0A` +
    `📞 Phone: ${phone}%0A` +
    `📧 Email: ${email}%0A` +
    `📅 Date: ${date}%0A` +
    `🏥 Department: ${department}%0A` +
    `💬 Message: ${message}`;

  let url = `https://wa.me/${whatsappNumber}?text=${text}`;

  window.open(url, "_blank");
  console.log(text);
}
//STAR
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  let target = +counter.getAttribute("data-target");
  let count = 0;

  let speed = target / 100;

  let updateCount = () => {
    if(count < target){
      count += speed;
      counter.innerText = Math.ceil(count) + (target === 98 ? "%" : "+");
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target + (target === 98 ? "%" : "+");
    }
  };

  updateCount();
});
//review
 const reviews = [
  {
    name:"Rahul Sharma",
    text:"Excellent doctors and friendly staff.",
    stars:"★★★★★",
    img:"https://i.pravatar.cc/150?img=3"
  },
  {
    name:"Ayesha Khan",
    text:"Clean hospital and fast service.",
    stars:"★★★★☆",
    img:"https://i.pravatar.cc/150?img=5"
  }
];

let index = 0;

// DOM elements
const rName = document.getElementById("rName");
const rText = document.getElementById("rText");
const rStars = document.getElementById("rStars");
const rImg = document.getElementById("rImg");

function showReview(){
  rName.innerText = reviews[index].name;
  rText.innerText = reviews[index].text;
  rStars.innerText = reviews[index].stars;
  rImg.src = reviews[index].img;
}

function nextReview(){
  index = (index + 1) % reviews.length;
  showReview();
}

function prevReview(){
  index = (index - 1 + reviews.length) % reviews.length;
  showReview();
}

function addReview(){
  const name = document.getElementById("name").value.trim();
  const text = document.getElementById("text").value.trim();
  const stars = document.getElementById("stars").value;

  if(!name || !text || !stars){
    alert("Please fill all fields");
    return;
  }

  reviews.push({
    name,
    text,
    stars,
    img: "https://i.pravatar.cc/150?u=" + name
  });

  index = reviews.length - 1;
  showReview();

  document.getElementById("name").value = "";
  document.getElementById("text").value = "";
  document.getElementById("stars").value = "";

  alert("Review added successfully!");
}

showReview();
//back to top
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if(window.scrollY > 300){
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
//what
const phone = "919382423855"; // your number
const message = "Hello, I want to book an appointment";

document.getElementById("whatsappBtn").href =
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;