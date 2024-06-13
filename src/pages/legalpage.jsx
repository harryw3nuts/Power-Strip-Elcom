
import { THEME_SETTINGS } from "@/queries/graphql_queries";
import { sendGraphQLQuery } from "@/utils/utils";
import Head from "next/head";
const LegalPage = () => {
    return(

    <>
    <div className="legalWrap">
        <div className="container">
            <div className="legalText">
                <div className="legalTitle">
                    <h1>Privacy policy</h1>
                </div>
                <div class="legalNotice">
                    <h3>Information we collect</h3>
                    <p>Contact information. We might collect your name, email, mobile number, your place of work, designation at current job & other information that is deemed fit to be collected for the activity in question.</p>
                    <p>Information you post. We collect information you post in a public space on our website or on a third-party social media site belonging to Elcom International. Your interaction on any social / digitally activated channel of the organisation would indicate to us your willingness to engage with the brand at a level we may deem fit.</p>
                    <p>Demographic information. We may collect demographic information about you through the registered IP address of the system used for accessing the website or any other digital channel of Elcom</p>
                    <p>Other information. If you use our website, we may collect information about your IP address and the browser you’re using. We might look at what site you came from, duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.</p>

                    <h3>We collect information in different ways</h3>
                    <p>We collect information directly from you. We collect information directly from you when you register for an event or buy tickets. We also collect information if you post a comment on our websites or ask us a question through phone or email.</p>
                    <p>We collect information from you passively. We use tracking tools like Google Analytics, Google Webmaster, browser cookies and web beacons for collecting information about your usage of our website.</p>
                    <p>We get information about you from third parties. For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.</p>


                    <h3>Use of your personal information</h3>
                    <p>We use information to contact you: We might use the information you provide to contact you for confirmation of a purchase on our website or for other promotional purposes.</p>
                    <p>We use information to respond to your requests or questions. We might use your information to confirm your registration for an event or contest.</p>
                    <p>We use information to improve our products and services. We might use your information to customize your experience with us. This could include displaying content based upon your preferences.</p>
                    <p>We use information to look at site trends and customer interests. We may use your information to make our website and products better. We may combine information we get from you with information about you we get from third parties.</p>
                    <p>We use information for security purposes. We may use information to protect our company, our customers, or our websites.</p>
                    <p>We use information for marketing purposes. We might send you information about special promotions or offers, meetings, events & conferences. We might also tell you about new features or products. These might be our own offers or products, or third-party offers or products we think you might find interesting. Or, for example, if you contact any of our departments, we might send you an email newsletter or you might be subject to any online advertising campaigns we engage in the future.</p>
                    <p>We use information as otherwise permitted by law.</p>


                    <h3>Sharing of information with third parties</h3>
                    <p>We will share information with the event organizers. We share your information with event organizers and other parties responsible for fulfilling their obligation at any stage we consider it appropriate. The event organizers and other parties may use the information we give them as described in their privacy policies.</p>
                    <p>We will share information with our business partners. This includes a third party who provide or sponsor an event, or who operates a venue where we hold events. Our partners use the information we give them as described in their privacy policies.</p>
                    <p>We may share information if we think we have to in order to comply with the law or to protect ourselves. We will share information to respond to a court order or subpoena. We may also share it if a government agency or investigatory body requests. Or, we might also share information when we are investigating potential fraud.</p>
                    <p>We may share information with any successor to all or part of our business. For example, if part of our business is sold we may give our customer list as part of that transaction.</p>
                    <p>We may share your information for reasons not described in this policy. We will tell you before we do this.</p>

                    <h3>Email opt-out</h3>
                    <p>You can opt out of receiving our marketing emails. To stop receiving our promotional emails, please email sales@elcom-in.com It may take about ten days to process your request. Even if you opt out of getting marketing messages, we will still be sending you transactional messages through email and SMS about your purchases.</p>

                    <h3>Third party sites</h3>
                    <p>If you click on one of the links to third party websites, you may be taken to websites we do not control. This policy does not apply to the privacy practices of those websites. Read the privacy policy of other websites carefully. We are not responsible for these third party sites.</p>

                    <h3>Website admin</h3>
                    <p>In accordance with Information Technology Act 2000 and rules made there under, the name and contact details of the Admin Officer are provided below:
                    Email: ym.kapare@elcom-in.com</p>
                    <p>If you have any questions about this Policy or other privacy concerns, you can also email us at ym.kapare@elcom-in.com</p>

                    <h3>Update to this policy</h3>
                    <p>This Privacy Policy was last updated on 1.4.2017. From time to time we may change our privacy practices. We will notify you of any material changes to this policy as required by law. We will also post an updated copy on our website. Please check our site periodically for updates.</p>

                    <h3>Jurisdiction</h3>
                    <p>If you choose to visit the website, your visit and any dispute over privacy is subject to this Policy and the website’s terms of use. In addition to the foregoing, any disputes arising under this Policy shall be governed by the laws of India.</p>

                </div>
            </div>
        </div>
    </div>
    </>
    
)

}

export default LegalPage;

export async function getStaticProps() {
    try {
      const data = await sendGraphQLQuery(THEME_SETTINGS);
      return {
        props: {
          data,
        },
        revalidate: 10
      }
    } catch (error) {
      return {
        props: {
          error
        }
      }
    }
  }