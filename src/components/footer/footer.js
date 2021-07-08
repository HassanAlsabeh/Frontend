import React, { Component } from "react";
import "./footer.scss";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer class="flex-rw">
          <ul class="footer-list-top">
            <div className="logo">
              <span>SJ</span>
              <i className="fab fa-connectdevelop"></i>{" "}
            </div>
          </ul>

          <ul class="footer-list-top">
            <li>
              <h4 class="footer-list-header">The Gift Selection</h4>
            </li>

            <li>
              <a
                href="/Angels/cat/id/70"
                class="generic-anchor footer-list-anchor"
              >
                ANGEL FIGURINES
              </a>
            </li>
            <li>
              <a
                href="/Home-Decor/cat/id/64"
                class="generic-anchor footer-list-anchor"
              >
                HOME DECOR
              </a>
            </li>
            <li>
              <a
                href="/Mugs/cat/id/32"
                class="generic-anchor footer-list-anchor"
              >
                MUGS
              </a>
            </li>
            <li>
              <a
                href="/Pet-Lover/cat/id/108"
                class="generic-anchor footer-list-anchor"
              >
                PET LOVER
              </a>
            </li>
            <li>
              <a
                href="/Ladies-Accessories/cat/id/117"
                class="generic-anchor footer-list-anchor"
                target="_blank"
              >
                HANDBAGS & JEWELRY
              </a>
            </li>
          </ul>
          <ul class="footer-list-top">
            <li id="help">
              <h4 class="footer-list-header">Please Help Me</h4>
            </li>
            <li>
              <a
                href="/shop/about-contact"
                class="generic-anchor footer-list-anchor"
                itemprop="significantLink"
              >
                CONTACT
              </a>
            </li>
            <li>
              <a
                href="/faq.html"
                class="generic-anchor footer-list-anchor"
                itemprop="significantLink"
              >
                FAQ
              </a>
            </li>
            <li id="find-a-store">
              <a
                href="/shop/store-locator"
                class="generic-anchor footer-list-anchor"
                itemprop="significantLink"
              >
                STORE LOCATOR
              </a>
            </li>
            <li id="user-registration">
              <a
                href="/shop/user-registration?URL="
                class="generic-anchor footer-list-anchor"
                itemprop="significantLink"
              >
                NEW USERS
              </a>
            </li>
            <li id="order-tracking">
              <a
                href="/shop/order-status"
                itemprop="significantLink"
                class="generic-anchor footer-list-anchor"
              >
                ORDER STATUS
              </a>
            </li>
          </ul>
          <section class="footer-social-section flex-rw">
            <span class="footer-social-overlap footer-social-connect">
              CONNECT <span class="footer-social-small">with</span> US
            </span>
            <span class="footer-social-overlap footer-social-icons-wrapper">
              <a
                href="https://www.pinterest.com/paviliongift/"
                class="generic-anchor"
                target="_blank"
                title="Pinterest"
                itemprop="significantLink"
              >
                <i class="fa fa-pinterest"></i>
              </a>
              <a
                href="https://www.facebook.com/sjurdy"
                class="generic-anchor"
                target="_blank"
                title="Facebook"
                itemprop="significantLink"
              >
                <i class="fa fa-facebook"></i>
              </a>
              <a
                href="https://twitter.com/PavilionGiftCo"
                class="generic-anchor"
                target="_blank"
                title="Twitter"
                itemprop="significantLink"
              >
                <i class="fa fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com/jurdi.saeed?utm_medium=copy_link"
                class="generic-anchor"
                target="_blank"
                title="Instagram"
                itemprop="significantLink"
              >
                <i class="fa fa-instagram"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg"
                class="generic-anchor"
                target="_blank"
                title="Youtube"
                itemprop="significantLink"
              >
                <i class="fa fa-youtube"></i>
              </a>
              <a
                href="https://plus.google.com/+Paviliongift/posts"
                class="generic-anchor"
                target="_blank"
                title="Google Plus"
                itemprop="significantLink"
              >
                <i class="fa fa-google-plus"></i>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B96171916674&text&app_absent=0"
                class="generic-anchor"
                target="_blank"
                title="Whats app"
                itemprop="significantLink"
              >
                <i class="fa fa-whatsapp"></i>
              </a>
            </span>
          </section>
          <section class="footer-bottom-section flex-rw">
            <div class="footer-bottom-wrapper">
              <i class="fa fa-copyright" role="copyright"></i> 2019 Pavilion in{" "}
              <address class="footer-address" role="company address">
                Bergen, NY
              </address>
              <span class="footer-bottom-rights">
                {" "}
                - All Rights Reserved -{" "}
              </span>
            </div>
            <div class="footer-bottom-wrapper">
              <a
                href="/terms-of-use.html"
                class="generic-anchor"
                rel="nofollow"
              >
                Terms
              </a>{" "}
              |{" "}
              <a
                href="/privacy-policy.html"
                class="generic-anchor"
                rel="nofollow"
              >
                Privacy
              </a>
            </div>
          </section>
        </footer>
      </div>
    );
  }
}
