/**
 * LaunchAdsFast — Interactive Landing Page Script
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const navLinks = document.getElementById('navLinks');

  if (hamburgerBtn && navLinks) {
    hamburgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 2. Navigation Active State on Scroll (ScrollSpy)
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-item');

  function updateActiveNav() {
    const scrollY = window.pageYOffset + 120;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navItems.forEach((item) => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav);

  // 3. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-row-item');

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector('.faq-row-question');
    if (questionBtn) {
      questionBtn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close other items
        faqItems.forEach((other) => other.classList.remove('active'));

        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });

  // 4. Interactive Comparison Sidebar Category Tabs
  const compTabs = document.querySelectorAll('.comp-badge-tab');
  const compItems = document.querySelectorAll('.comp-item-row');

  compTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const index = tab.getAttribute('data-index');

      // Update active tag button
      compTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      // Highlight matching item in both lists
      compItems.forEach((item) => {
        if (item.getAttribute('data-index') === index) {
          item.classList.add('active-highlight');
        } else {
          item.classList.remove('active-highlight');
        }
      });
    });
  });

  // 5. Modals (Book a Call & Contact Us)
  const bookModal = document.getElementById('bookCallModal');
  const closeBookBtn = document.getElementById('closeBookModal');
  const contactModal = document.getElementById('contactModal');
  const closeContactBtn = document.getElementById('closeContactModal');
  const bookButtons = document.querySelectorAll('.open-book-modal');
  const contactButtons = document.querySelectorAll('.open-contact-modal');
  const bookForm = document.getElementById('bookCallForm');
  const contactForm = document.getElementById('contactForm');
  const toast = document.getElementById('toast');

  function showToast(message) {
    if (!toast) return;
    toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: #24d240;"></i> <span>${message}</span>`;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 4500);
  }

  // Open Book Call Modal
  bookButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (bookModal) bookModal.classList.add('active');
    });
  });

  // Close Book Call Modal
  if (closeBookBtn) {
    closeBookBtn.addEventListener('click', () => {
      if (bookModal) bookModal.classList.remove('active');
    });
  }

  // Open Contact Modal
  contactButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (contactModal) contactModal.classList.add('active');
    });
  });

  // Close Contact Modal
  if (closeContactBtn) {
    closeContactBtn.addEventListener('click', () => {
      if (contactModal) contactModal.classList.remove('active');
    });
  }

  // Close when clicking outside modal card
  [bookModal, contactModal].forEach((modal) => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });

  // Handle Book Call Submission
  if (bookForm) {
    bookForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('bookName').value;
      if (bookModal) bookModal.classList.remove('active');
      bookForm.reset();
      showToast(`Thank you, ${name}! Your strategy call is scheduled.`);
    });
  }

  // Handle Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value;
      if (contactModal) contactModal.classList.remove('active');
      contactForm.reset();
      showToast(`Thank you, ${name}! Message received. We'll be in touch.`);
    });
  }

  // Privacy Policy Link
  const privacyLink = document.getElementById('privacyLink');
  if (privacyLink) {
    privacyLink.addEventListener('click', (e) => {
      e.preventDefault();
      showToast('Privacy Policy: All customer data is fully protected and confidential.');
    });
  }
});
