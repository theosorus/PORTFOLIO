


window.onload = function() {
    const words = ["Artificial Intelligence", "Deep Learning", "Machine Learning"]; 
    initTypingEffect('word', words);
    
};

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.hidden');
    elements.forEach(element => {
        observer.observe(element);
    });
});





function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

let theme = "dark";
function toggleTheme() {
    const fontColor = theme === "dark" ? "rgb(41,41,85)" : "rgb(240, 240, 240)";
    const backgroundColor = theme === "dark" ? "rgb(240, 240, 240)" : "rgb(41,41,85)";
    document.documentElement.style.setProperty("--font-color", fontColor);
    document.documentElement.style.setProperty("--background", backgroundColor);
    theme = theme === "dark" ? "light" : "dark";
}




function handleDownload() {
    const pdfUrl = 'assets/cv.pdf'; 
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = 'Theo_Castillo_CV.pdf'; 
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}


function initTypingEffect(wordElementId, words, typingDelay = 100, erasingDelay = 100, newTextDelay = 300) {
    const wordElement = document.getElementById(wordElementId);
    let wordIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < words[wordIndex].length) {
            wordElement.textContent += words[wordIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            wordElement.textContent = words[wordIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(type, typingDelay + 1100);
        }
    }

    setTimeout(type, newTextDelay + 250);
}


document.addEventListener('DOMContentLoaded', () => {
    const image = document.getElementById('parallax-image');
    if (image) {
        new simpleParallax(image, {
            delay: 0.6,
            transition: 'cubic-bezier(0,0,0,1)',
            scale: 1.5
        });
    }
});

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}



