import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PrivacyPolicy = () => {
    return (
        <>

            <section style={styles.section}>
                <Container fluid style={styles.container}>
                    <Row className="justify-content-center">
                        <Col xs={12} md={10} lg={10} xl={10}>
                            <div style={styles.content}>
                                <h2 style={styles.title}>Real Roadies Privacy Policy</h2>

                                <p style={styles.text}>
                                    Stipe Solutions Private Limited built the RealRoadies app as a Freemium app. This SERVICE is provided by Stipe Solutions Private Limited at no cost and is intended for use as is.<br /><br />

                                    This page is used to inform visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.<br /><br />

                                    If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.<br /><br />

                                    The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which are accessible at RealRoadies unless otherwise defined in this Privacy Policy.
                                </p>

                                <h2 style={styles.subheading}>Information Collection and Use</h2>
                                <p style={styles.text}>
                                    For a better experience, while using our Service, we may require you to provide us with certain personally identifiable information. The information that we request will be retained by us and used as described in this privacy policy.<br /><br />

                                    The app does use third-party services that may collect information used to identify you.<br /><br />

                                    Link to the privacy policy of third-party service providers used by the app<br />
                                    <strong style={styles.strongText}>Google Play Services<br />
                                        Mapbox</strong><br /><br />
                                </p>

                                <h2 style={styles.subheading}>Log Data</h2>
                                <p style={styles.text}>
                                    We want to inform you that whenever you use our Service, in a case of an error in the app we collect data and information (through third-party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
                                </p>

                                <h2 style={styles.subheading}>Cookies</h2>
                                <p style={styles.text}>
                                    Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.<br /><br />

                                    This Service does not use these "cookies" explicitly. However, the app may use third-party code and libraries that use "cookies" to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
                                </p>

                                <h2 style={styles.subheading}>Service Providers</h2>
                                <div style={styles.text}>
                                    <p>We may employ third-party companies and individuals due to the following reasons:</p>
                                    <ul style={styles.list}>
                                        <li style={styles.listItem}>To facilitate our Service;</li>
                                        <li style={styles.listItem}>To provide the Service on our behalf;</li>
                                        <li style={styles.listItem}>To perform Service-related services; or</li>
                                        <li style={styles.listItem}>To assist us in analyzing how our Service is used.</li>
                                    </ul>

                                    <p>We want to inform users of this Service that these third parties have access to their Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.</p>
                                </div>
                                <h2 style={styles.subheading}>Personal Information</h2>
                                <p style={styles.text}>
                                    We collect personal information, including your name, email address, phone number, and profile details, to create your account and provide personalized services.
                                </p>

                                <h2 style={styles.subheading}>Location</h2>
                                <p style={styles.text}>
                                    The Real Roadies app collects location data to provide navigation services and real-time group ride tracking. This data is collected in the foreground and background to ensure a seamless user experience. The app does not store location data permanently or use it for any other purpose. Background location is utilized exclusively for enabling ride route tracking and navigation purposes, ensuring an optimized user experience during active rides.
                                </p>

                                <h2 style={styles.subheading}>Data Security</h2>
                                <p style={styles.text}>
                                    We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
                                </p>

                                <h2 style={styles.subheading}>Media Access Permissions</h2>
                                <p style={styles.text}>
                                    We request media access to allow users to upload images or videos, such as a post or bike image, within the app. This access is solely for the purpose of facilitating media uploads and is not used for any other purpose.
                                </p>

                                <h2 style={styles.subheading}>Links to Other Sites</h2>
                                <p style={styles.text}>
                                    This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                                </p>

                                <h2 style={styles.subheading}>Children's Privacy</h2>
                                <p style={styles.text}>
                                    These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13 years of age. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions.
                                </p>

                                <h2 style={styles.subheading}>Changes to This Privacy Policy</h2>
                                <p style={styles.text}>
                                    We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.<br /><br />
                                    <strong style={styles.strongText}>This policy is effective as of 2025-01-22</strong>
                                </p>

                                <h2 style={styles.subheading}>Contact Us</h2>
                                <p style={styles.text}>
                                    If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:realroadies.club@gmail.com" style={styles.link}>realroadies.club@gmail.com</a>.<br /><br />

                                    This privacy policy page was created at <a href="https://privacypolicytemplate.net" target="_blank" rel="noopener noreferrer" style={styles.link}>privacypolicytemplate.net</a> and modified/generated by <a href="https://app-privacy-policy-generator.com" target="_blank" rel="noopener noreferrer" style={styles.link}>App Privacy Policy Generator</a>
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
    },
    list: {
        marginTop: '1rem',
        marginBottom: '1rem',
        paddingLeft: '2rem',
    },
    listItem: {
        marginBottom: '0.75rem',
        color: '#ffffff',
    },
    link: {
        color: '#FFDD00',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
        '&:hover': {
            color: '#e6c700',
            textDecoration: 'underline',
        }
    }
};

export default PrivacyPolicy;
