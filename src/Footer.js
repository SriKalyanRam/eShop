import React from "react";

function Footer() {
  return (
    <div>
      <section class="">
        <footer
          class="text-center text-white"
          style={{ backgroundColor: " #0a4275" }}
        >
          <div class="container p-4 pb-0">
            <section class="">
              <p class="d-flex justify-content-center align-items-center">
                <span class="me-3">Register for free</span>
                <button
                  data-mdb-ripple-init
                  type="button"
                  class="btn btn-outline-light btn-rounded"
                >
                  Sign up!
                </button>
              </p>
            </section>
          </div>

          <div
            class="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2023 Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">
              Kalyan
            </a>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default Footer;
