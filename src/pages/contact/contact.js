import "./contact.css";
import Navbar from "../../components/navbar/navbar";
import emailjs from "emailjs-com";

const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5l7kh0n",
        "template_gx7wc6r",
        e.target,
        "user_MwbDvlvwreTZP8lUuL6jE"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  // export default class Contacts extends Component{
  // render(){
  return (
    <div className="contacts1">
       <Navbar />
      <section id="contact1">
        <h1 class="section1-header">Contact</h1>

        <div class="contact1-wrapper">
          <form
            id="contact1-form"
            class="form1-horizontal"
            role="form1"
            onSubmit={sendEmail}
          >
            <div class="form1-group">
              <div class="col-sm-12">
                <input
                  type="text3"
                  class="form1-control"
                  id="name"
                  placeholder="NAME"
                  name="name"
                  required
                />
              </div>
            </div>

            <div class="form1-group">
              <div class="col-sm-12">
                <input
                  type="email"
                  class="form1-control"
                  id="email"
                  placeholder="EMAIL"
                  name="user_email"
                  required
                />
              </div>
            </div>

            <textarea
              class="form1-control"
              rows="10"
              placeholder="MESSAGE"
              name="message"
              required
            ></textarea>

            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i>
                <span class="send-text3">SEND</span>
              </div>
            </button>
          </form>

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <i class="fa fa-map-marker fa-2x">
                  <span class="contact-text3 place">City, State</span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-phone fa-2x">
                  <span class="contact-text3 phone">
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B96171563884&text3&app_absent=0"
                      title="Give me a call"
                    >
                      +961 71 563 884
                    </a>
                  </span>
                </i>
              </li>

              <li class="list-item">
                <i class="fa fa-envelope fa-2x">
                  <span class="contact-text3 gmail">
                    <a href="# " title="Send me an email">
                      saeed.el.jurdi@gmail.com{" "}
                    </a>
                  </span>
                </i>
              </li>
            </ul>

            <ul class="social-media-list">
              <a href="#" target="_blank" class="contact-icon">
                <i class="fa fa-github" aria-hidden="true"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/saeed-el-jurdi"
                target="_blank"
                class="contact-icon"
              >
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>

              <a
                href="https://www.facebook.com/sjurdy"
                target="_blank"
                class="contact-icon"
              >
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>

              <a
                href="https://instagram.com/jurdi.saeed?utm_medium=copy_link"
                target="_blank"
                class="contact-icon"
              >
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
            </ul>

            <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mailer;
