import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Krijoni transportuesin e email-it (për Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail', // ose 'smtp.përdoruesi.com'
    auth: {
        user: process.env.EMAIL_USER, // Adresa e email-it e dërguesit (nga .env)
        pass: process.env.EMAIL_PASS, // Fjalëkalimi i App-it (nga .env)
    },
});

/**
 * Dërgon një email njoftimi kur krijohet një kërkesë e re partneriteti.
 * @param {object} partnershipData - Të dhënat e kërkesës nga formulari
 */
const sendPartnershipNotification = async (partnershipData) => {
    // 1. Krijoni përmbajtjen e email-it
    const output = `
        <h3>Kërkesë e Re Partneriteti Fason</h3>
        <p>Ju ka ardhur një kërkesë e re partneriteti përmes faqes së internetit:</p>
        <hr>
        <ul>
            <li><strong>Kompania:</strong> ${partnershipData.companyName}</li>
            <li><strong>Personi i Kontaktit:</strong> ${partnershipData.contactPerson}</li>
            <li><strong>Emaili:</strong> ${partnershipData.email}</li>
            <li><strong>Telefoni:</strong> ${partnershipData.phone || 'Nuk u dha'}</li>
            <li><strong>Lloji i Kërkesës:</strong> ${partnershipData.requestType}</li>
        </ul>
        <h4>Mesazhi i Klientit:</h4>
        <p style="border: 1px solid #ccc; padding: 10px;">${partnershipData.message}</p>
        <hr>
        <p>Ju lutem hyni në Admin Panel (sapo ta ndërtojmë) për të menaxhuar këtë kërkesë.</p>
    `;

    // 2. Detajet e Email-it
    const mailOptions = {
        from: `Sfidal Notifikime <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO_ADMIN, // Adresa ku dërgohet njoftimi (shih .env)
        subject: `⚠️ Kërkesë e Re Partneriteti nga: ${partnershipData.companyName}`, 
        html: output, // Përmbajtja e formatuar HTML
    };

    // 3. Dërgimi i Email-it
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log(`✅ Email-i i njoftimit u dërgua me sukses! MessageID: ${info.messageId}`);
        return true; // Kthen sukses
    } catch (error) {
        console.error('❌ GABIM EMAILI: Dështoi dërgimi i email-it:', error.message);
        // Këtu, vendosni një log më të detajuar për të siguruar që e shihni
        console.error('Gabimi i plotë:', error); 
        return false; // Kthen dështim
    }
};

export default sendPartnershipNotification;