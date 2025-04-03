// Initialize components
document.addEventListener("DOMContentLoaded", function () {
  // Initialize navigation
  initializeNavigation();

  // Initialize form
  initializeForm();
});

// Initialize the mobile navigation
function initializeNavigation() {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      const expanded = this.getAttribute("aria-expanded") === "true";
      this.setAttribute("aria-expanded", !expanded);
      mobileMenu.classList.toggle("hidden");
    });

    // Close mobile menu when pressing escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !mobileMenu.classList.contains("hidden")) {
        mobileMenuButton.setAttribute("aria-expanded", "false");
        mobileMenu.classList.add("hidden");
      }
    });
  }
}

// Form validation and accessibility
function initializeForm() {
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get all form elements for validation
      const requiredFields = form.querySelectorAll('[aria-required="true"]');
      const errorSummary = document.getElementById("error-summary");
      const errorList = document.getElementById("error-list");

      // Clear previous errors
      errorList.innerHTML = "";
      document.querySelectorAll(".error-message").forEach((el) => el.remove());
      document
        .querySelectorAll(".input-error")
        .forEach((el) => el.classList.remove("input-error"));

      let errors = [];

      // Validate each required field
      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          const fieldId = field.id;
          const fieldLabel = document.querySelector(
            `label[for="${fieldId}"]`
          ).textContent;

          // Add to error list
          errors.push({
            id: fieldId,
            message: `${fieldLabel} is required`,
          });

          // Mark field as invalid
          field.classList.add("input-error");
          field.setAttribute("aria-invalid", "true");

          // Add error message after the field
          const errorMessage = document.createElement("p");
          errorMessage.className = "text-red-600 text-sm mt-1 error-message";
          errorMessage.id = `${fieldId}-error`;
          errorMessage.textContent = `${fieldLabel} is required`;
          field.parentNode.insertBefore(errorMessage, field.nextSibling);

          // Connect the error message to the input
          field.setAttribute("aria-describedby", `${fieldId}-error`);
        }
      });

      // If there are errors, show the error summary and focus on it
      if (errors.length > 0) {
        errorSummary.classList.remove("hidden");

        errors.forEach((error) => {
          const li = document.createElement("li");
          const link = document.createElement("a");
          link.href = `#${error.id}`;
          link.textContent = error.message;
          link.addEventListener("click", function (e) {
            document.getElementById(error.id).focus();
          });
          li.appendChild(link);
          errorList.appendChild(li);
        });

        errorSummary.focus();
      } else {
        // Submit the form or show success message
        const successMessage = document.getElementById("success-message");
        form.classList.add("hidden");
        successMessage.classList.remove("hidden");
        successMessage.focus();
      }
    });
  }
}
