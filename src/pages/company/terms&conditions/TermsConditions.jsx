import React from 'react';
import { Container, Row, Col, Overlay } from 'react-bootstrap';


const TermsConditions = () => {
  return (
    <>
      
      <section style={styles.section}>
        <Container fluid style={styles.container}>
          <Row className="justify-content-center">
            <Col xs={12} md={10} lg={10} xl={8}>
              <div style={styles.content}>
                <h2 style={styles.title}>RealRoadies Terms of Use</h2>
                <p style={styles.text}>By using our website, web/desktop/mobile apps and services, you agree to the following terms.</p>

                <h2 style={styles.subheading}>Welcome to RealRoadies</h2>
                <p style={styles.text}>
                  By downloading or using the app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app. You're not allowed to copy or modify the app, any part of the app, or our trademarks in any way. You're not allowed to attempt to extract the source code of the app, and you also shouldn't try to translate the app into other languages or make derivative versions. The app itself, and all the trademarks, copyright, database rights, and other intellectual property rights related to it, still belong to Stipe Solutions Private Limited.<br/><br/>

                  Stipe Solutions Private Limited is committed to ensuring that the app is as useful and efficient as possible. For that reason, we reserve the right to make changes to the app or to charge for its services, at any time and for any reason. We will never charge you for the app or its services without making it very clear to you exactly what you're paying for.<br/><br/>

                  The Real Roadies app stores and processes personal data that you have provided to us, to provide our Service. It's your responsibility to keep your phone and access to the app secure. We therefore recommend that you do not jailbreak or root your phone, which is the process of removing software restrictions and limitations imposed by the official operating system of your device. It could make your phone vulnerable to malware/viruses/malicious programs, compromise your phone's security features and it could mean that the Real Roadies app won't work properly or at all.<br/><br/>

                  Link to Terms and Conditions of third-party service providers used by the app<br/><br/>

                  <strong style={styles.strongText}>
                    Google Play Services<br/>
                    Sentry<br/>
                    Mapbox<br/><br/>
                  </strong>

                  You should be aware that there are certain things that Stipe Solutions Private Limited will not take responsibility for. Certain functions of the app will require the app to have an active internet connection. The connection can be Wi-Fi or provided by your mobile network provider, but Stipe Solutions Private Limited cannot take responsibility for the app not working at full functionality if you don't have access to Wi-Fi, and you don't have any of your data allowance left.<br/><br/>

                  If you're using the app outside of an area with Wi-Fi, you should remember that the terms of the agreement with your mobile network provider will still apply. As a result, you may be charged by your mobile provider for the cost of data for the duration of the connection while accessing the app, or other third-party charges. In using the app, you're accepting responsibility for any such charges, including roaming data charges if you use the app outside of your home territory (i.e. region or country) without turning off data roaming. If you are not the bill payer for the device on which you're using the app, please be aware that we assume that you have received permission from the bill payer for using the app.<br/><br/>

                  Along the same lines, Stipe Solutions Private Limited cannot always take responsibility for the way you use the app i.e. You need to make sure that your device stays charged – if it runs out of battery and you can't turn it on to avail the Service, Stipe Solutions Private Limited cannot accept responsibility.<br/><br/>

                  With respect to Stipe Solutions Private Limited's responsibility for your use of the app, when you're using the app, it's important to bear in mind that although we endeavor to ensure that it is updated and correct at all times, we do rely on third parties to provide information to us so that we can make it available to you. Stipe Solutions Private Limited accepts no liability for any loss, direct or indirect, you experience as a result of relying wholly on this functionality of the app.<br/><br/>

                  At some point, we may wish to update the app. The app is currently available on Android & iOS – the requirements for the both systems(and for any additional systems we decide to extend the availability of the app to) may change, and you'll need to download the updates if you want to keep using the app. Stipe Solutions Private Limited does not promise that it will always update the app so that it is relevant to you and/or works with the Android & iOS version that you have installed on your device. However, you promise to always accept updates to the application when offered to you, We may also wish to stop providing the app, and may terminate use of it at any time without giving notice of termination to you. Unless we tell you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must stop using the app, and (if needed) delete it from your device.
                </p>

                <h2 style={styles.subheading}>Changes to This Terms and Conditions</h2>
                <p style={styles.text}>
                  We may update our Terms and Conditions from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms and Conditions on this page.<br/><br/>

                  These terms and conditions are effective as of 2023-02-07
                </p>

                <h2 style={styles.subheading}>Contact Us</h2>
                <p style={styles.text}>
                  If you have any questions or suggestions about our Terms and Conditions, do not hesitate to contact us at
                  <a href="mailto:realroadies.club@gmail.com" style={styles.link}> realroadies.club@gmail.com.</a><br/><br/>

                  This Terms and Conditions page was generated by <a href="https://app-privacy-policy-generator.com/" target="_blank" rel="noopener noreferrer" style={styles.link}> App Privacy Policy Generator</a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

const styles = {
  section: {
    backgroundColor: '#000000',
    minHeight: '100vh',
    paddingTop: '40px',
    paddingBottom: '40px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    zIndex: 1000,
    
  },
  container: {
    padding: 0,
    overflowX: 'hidden',
  },
  content: {
    padding: '30px',
    backgroundColor: '#000000',
    borderRadius: '0px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '500',
    marginBottom: '1.5rem',
    color: '#ffffff',
    borderBottom: '1px solid #333',
    paddingBottom: '10px',
  },
  subheading: {
    fontSize: '1.25rem',
    fontWeight: '500',
    marginBottom: '1rem',
    marginTop: '2rem',
    color: '#ffffff',
    borderLeft: '3px solid #FFDD00',
    paddingLeft: '10px',
  },
  text: {
    fontSize: '1rem',
    lineHeight: '1.8',
    color: '#ffffff',
    marginBottom: '1.5rem',
  },
  strongText: {
    fontWeight: '700',
    color: '#FFDD00',
    marginRight: '1rem',
    display: 'block'
  },
  link: {
    color: '#FFDD00',
    textDecoration: 'none',
    transition: 'color 0.3s ease',
  }
};

export default TermsConditions;
