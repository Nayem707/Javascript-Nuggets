// JavaScript Nuggets - Interactive Practice Platform
console.log('🚀 JavaScript Nuggets - Practice Platform Loaded');

// Interactive code runner
function runCode() {
  const codeInput = document.getElementById('code-input');
  const output = document.getElementById('output');

  if (!codeInput || !output) return;

  const code = codeInput.value;

  // Clear previous output
  output.innerHTML = '';

  // Create a console.log capture
  const originalLog = console.log;
  const logMessages = [];

  console.log = function (...args) {
    logMessages.push(
      args
        .map((arg) =>
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        )
        .join(' ')
    );
  };

  try {
    // Execute the code
    eval(code);

    // Display results
    if (logMessages.length > 0) {
      output.innerHTML = `<pre>${logMessages.join('\n')}</pre>`;
    } else {
      output.innerHTML =
        '<p class="info">Code executed successfully (no console output)</p>';
    }
  } catch (error) {
    output.innerHTML = `<pre class="error">Error: ${error.message}</pre>`;
  } finally {
    // Restore original console.log
    console.log = originalLog;
  }
}

// Load specific category
function loadCategory(categoryName) {
  const categoryMap = {
    '01-map': 'Array Mapping Problems',
    '02-object': 'Object Manipulation Problems',
  };

  const categoryTitle = categoryMap[categoryName] || categoryName;

  // Create a modal or navigation to the category
  alert(
    `Loading ${categoryTitle}...\n\nIn a full implementation, this would navigate to the specific problem category.`
  );

  // For now, we'll just log the category
  console.log(`Loading category: ${categoryName}`);
}

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function () {
  // Add smooth scrolling to all links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Add typing effect to hero section
  const heroTitle = document.querySelector('.hero h2');
  if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';

    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroTitle.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };

    setTimeout(typeWriter, 500);
  }

  // Add animation to skill cards
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe skill cards and category cards
  const cards = document.querySelectorAll(
    '.skill-card, .category-card, .resource-card'
  );
  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Problem tracking system
class ProblemTracker {
  constructor() {
    this.completedProblems =
      JSON.parse(localStorage.getItem('completedProblems')) || [];
    this.currentStreak = parseInt(localStorage.getItem('currentStreak')) || 0;
    this.totalProblems = parseInt(localStorage.getItem('totalProblems')) || 0;
  }

  markComplete(problemId) {
    if (!this.completedProblems.includes(problemId)) {
      this.completedProblems.push(problemId);
      this.currentStreak++;
      this.totalProblems++;
      this.saveProgress();
    }
  }

  isComplete(problemId) {
    return this.completedProblems.includes(problemId);
  }

  getProgress() {
    return {
      completed: this.completedProblems.length,
      streak: this.currentStreak,
      total: this.totalProblems,
    };
  }

  saveProgress() {
    localStorage.setItem(
      'completedProblems',
      JSON.stringify(this.completedProblems)
    );
    localStorage.setItem('currentStreak', this.currentStreak.toString());
    localStorage.setItem('totalProblems', this.totalProblems.toString());
  }

  resetProgress() {
    this.completedProblems = [];
    this.currentStreak = 0;
    this.totalProblems = 0;
    localStorage.removeItem('completedProblems');
    localStorage.removeItem('currentStreak');
    localStorage.removeItem('totalProblems');
  }
}

// Initialize problem tracker
const problemTracker = new ProblemTracker();

// Update stats display
function updateStats() {
  const progress = problemTracker.getProgress();
  const statsElements = document.querySelectorAll('.stat-number');

  if (statsElements.length >= 3) {
    statsElements[1].textContent = `${progress.completed}+`;
  }
}

// Call updateStats when page loads
document.addEventListener('DOMContentLoaded', updateStats);

// Export for use in other files
window.ProblemTracker = ProblemTracker;
window.problemTracker = problemTracker;
window.runCode = runCode;
window.loadCategory = loadCategory;
