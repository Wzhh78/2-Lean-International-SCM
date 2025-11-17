// ===================================================================
// 1. ÜBER UNS (ABOUT US) 部分的 HTML 字符串 (德语)
// ===================================================================
const aboutContentDE = `
    <section id="about">
        <img src="about-dock.jpg" alt="Hafenkräne" title="Bild von Hafenkränen">
        <div id="about-text">
            <h2>ÜBER UNS</h2>
            <p>Lean International SCM GmbH mit Sitz in Bremen, Deutschland, hat sich der Bereitstellung qualitativ hochwertiger Produkte und professioneller Supply-Chain-Dienstleistungen für Kunden in Europa und im asiatisch-pazifischen Raum verschrieben. Unsere Mission ist es, unsere Partner beim Aufbau effizienter, widerstandsfähiger und nachhaltiger Lieferketten zu unterstützen. Durch die Entwicklung schlanker und maßgeschneiderter End-to-End-Supply-Chain-Lösungen und die Organisation erfahrener professioneller Teams, verbinden wir höhere Effizienz mit geringeren Kosten, um echten Mehrwert zu schaffen. Wir freuen uns auf eine erfolgreiche Zusammenarbeit mit herausragenden Geschäftspartnern auf der ganzen Welt.
            </p>
            <p><strong>Handel, Logistik, SCM-Beratung</strong></p>
            <a href="#contact" class="read-more-btn">Mehr erfahren</a>
        </div>
    </section>
`;

// ===================================================================
// 2. DIENSTLEISTUNGEN (SERVICES) 部分的 HTML 字符串 (德语)
// ===================================================================
const servicesContentDE = `
    <section id="services">
        <h2>DIENSTLEISTUNGEN</h2>
        <p>Lassen Sie uns den richtigen umfassenden Logistik- und Handelsbereichs-Service auswählen, der Ihren spezifischen Anforderungen entspricht。</p>
        
        <div class="service-list">
            <div class="service-card">
                <i class="fa-solid fa-ship"></i>
                <h3>Internationaler Handel</h3>
                <p>Wir widmen uns dem Import und Export von Caravans, Wohnmobilen, Autos und Industrieprodukten und bauen eine starke Handelsbrücke zwischen Europa und Asien auf。</p>
              
               
            </div>
            <div class="service-card">
                <i class="fa-solid fa-earth-americas"></i>
                <h3>Kundenspezifische Logistik</h3>
                <p>Durch die Integration internationaler See-, Luft-, Land- und Schienentransportressourcen bieten wir maßgeschneiderte, effiziente und kostengünstige multimodale Door-to-Door-Logistiklösungen。</p>
                <p>
                    <strong>Wichtige Sendungsverfolgungs-Links:</strong><br>
                    
                    MSK BL/Container tracking: 
                    <a href="https://www.maersk.com/tracking/" target="_blank">Klicken Sie hier für die offizielle Maersk Tracking-Seite</a><br>
                    
                    MSC BL/Container tracking: 
                    <a href="https://www.msc.com/en/track-a-shipment" target="_blank">Klicken Sie hier für die offizielle MSC Tracking-Seite</a><br>

                    COSCO BL/Container tracking: 
                    <a href="https://elines.coscoshipping.com/ebusiness/" target="_blank">Klicken Sie hier für die offizielle COSCO Tracking-Seite</a><br>
                    
                    Airfreight waybill tracking: 
                    <a href="https://www.track-trace.com/aircargo" target="_blank">Klicken Sie hier zur Verfolgung von Luftfracht-Frachtbriefen</a><br>
                    
                    RORO vessel tracking: 
                    <a href="https://ivssuk.com/vessel-cargo-tracking/" target="_blank">Klicken Sie hier zur Verfolgung von RORO-Schiffen</a>
                </p>
            </div>
            <div class="service-card">
                <i class="fa-solid fa-gears"></i>
                <h3>SCM-Beratung</h3>
                <p>Wir arbeiten mit unseren Kunden an der Strategieentwicklung im Bereich Supply Chain Management zusammen und helfen, Lieferketten zu optimieren und die langfristige Wettbewerbsfähigkeit zu steigern。</p>
                <p>
                    <strong>EU Checkliste für die Einhaltung elektronischer Produkte:</strong><br>
                    <a href="EU_Compliance_Checklist_Protected_Bilingual.pdf" target="_blank" download>EU Checkliste für die Einhaltung elektronischer Produkte herunterladen (PDF)</a>
                </p>
            </div>
        </div>
    </section>
`;

// ===================================================================
// 3. KONTAKT (CONTACT) 部分的 HTML 字符串 (德语)
// ===================================================================
const contactContentDE = `
    <section id="contact">
        <div class="container">
            <h2>KONTAKT</h2>
            <p>Kontaktieren Sie uns bei Fragen oder Anliegen, wir helfen Ihnen gerne weiter。</p>

            <div class="contact-details">
                <div class="contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <p><strong>Telefon:</strong> +49-421 67364055</p>
                </div>
                <div class="contact-item">
                    <i class="fa-solid fa-envelope"></i>
                    <p><strong>E-Mail:</strong> info@leanintl.de</p>
                </div>
                <div class="contact-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <p><strong>Adresse:</strong> Elsasser Str. 27 <br>28211,Bremen,Deutschland</p>
                </div>
            </div>
        </div>
    </section>
`;

// ===================================================================
// 4. 内容加载逻辑
// ===================================================================
document.addEventListener('DOMContentLoaded', function() {
    // 加载 Über uns 内容
    const aboutContainer = document.getElementById('about-container');
    if (aboutContainer) {
        aboutContainer.innerHTML = aboutContentDE;
    }

    // 加载 Dienstleistungen 内容
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer) {
        servicesContainer.innerHTML = servicesContentDE;
    }

    // 加载 Kontakt 内容
    const contactContainer = document.getElementById('contact-container');
    if (contactContainer) {
        contactContainer.innerHTML = contactContentDE;
    }

});
