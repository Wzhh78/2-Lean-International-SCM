// 注意：为了演示目的，这里的 HTML 字符串是清晰可读的。
// 在实际应用中，您应该对这个字符串进行混淆、压缩，甚至使用 Base64 编码。

// ===================================================================
// 1. ABOUT US 部分的 HTML 字符串
// ===================================================================
const aboutContent = `
    <section id="about">
        <img src="about-dock.jpg" alt="Harbor Cranes" title="Image of Harbor Cranes">
        <div id="about-text">
            <h2>ABOUT US</h2>
            <p>Lean International SCM GmbH, based in Bremen, Germany, is committed to providing high-quality products and professional supply chain services for clients across Europe and the Asia-Pacific region. Our mission is to help our partners build efficient, resilient, and sustainable supply chains.<br>
            By designing lean and customized end-to-end supply chain solutions and organizing experienced professional teams, we combine higher efficiency with lower cost to deliver real value. We strive to be your trusted business partner — understanding your products deeply and executing the best solutions from manufacturers to end customers.<br>
            Leveraging our integrated EU–Asia Pacific network and flexible coordination mechanisms,our expertise covers trade, logistics, SCM consulting, ensuring tailored solutions and reliable execution for every client.<br>
            We sincerely welcome opportunities for prosperous cooperation with outstanding business partners around the world.
            </p>
            <p><strong>Trade, Logistics, SCM Consulting</strong></p>
            <a href="#contact" class="read-more-btn">Read More</a>
        </div>
    </section>
`;

// ===================================================================
// 2. SERVICES 部分的 HTML 字符串
// ===================================================================
const servicesContent = `
    <section id="services" class="container">
        <h2>SERVICES</h2>
        <p>Let us choose the right comprehensive logistics and trading area service to meet your specific needs.</p>
        
        <div class="service-list">
            <div class="service-card">
                <i class="fa-solid fa-ship"></i>
                <h3>International Trade</h3>
                <p>We are dedicated to the import and export of industrial products, building a strong trade bridge between Europe and Asia. <br>Our mission is to connect high-quality products with the right markets more efficiently and effectively.</p>
                               
            </div>
            <div class="service-card">
                <i class="fa-solid fa-earth-americas"></i>
                <h3>Customized Logistics</h3>
                <p>By integrating international sea, air, land, and rail transportation resources, we provide tailor-made, efficient, and cost-effective door-to-door multimodal logistics solutions that meet our clients’ specific needs.</p>
                <p>
                    <strong>Main Freight Tracking Links:</strong><br>
                    MSK BL/Container tracking: 
                    <a href="https://www.maersk.com/tracking/" target="_blank">Click here for Maersk Official Tracking Page</a><br>
                    MSC BL/Container tracking: 
                    <a href="https://www.msc.com/en/track-a-shipment" target="_blank">Click here for MSC Official Tracking Page</a><br>
                    COSCO BL/Container tracking: 
                    <a href="https://elines.coscoshipping.com/ebusiness/" target="_blank">Click here for COSCO Official Tracking Page</a><br>
                    Airfreight waybill tracking: 
                    <a href="https://www.track-trace.com/aircargo" target="_blank">Click here for Airfreight Waybill Tracking</a><br>
                    RORO vessel tracking: 
                    <a href="https://ivssuk.com/vessel-cargo-tracking/" target="_blank">Click here for RORO Vessel Tracking</a>
                </p>
            </div>
            <div class="service-card">
                <i class="fa-solid fa-gears"></i>
                <h3>Supply Chain Management Consulting</h3>
                <p>We collaborate with our clients on supply chain management research and strategy development, helping enterprises, regions, and organizations optimize their supply chains and enhance long-term competitiveness.</p>
                <p>
                    <strong>EU Electronic Products Compliance Checklist:</strong><br>
                    <a href="EU_Compliance_Checklist_Protected_Bilingual.pdf" target="_blank" download>Download EU Electronic Products Compliance Checklist (PDF)</a>
                </p>
            </div>
        </div>
    </section>
`;

// ===================================================================
// 3. CONTACT 部分的 HTML 字符串 (新增)
// ===================================================================
const contactContent = `
    <section id="contact">
        <div class="container">
            <h2>CONTACT</h2>
            <p>Get in touch with any questions or inquiries, we are happy to assist you.</p>

            <div class="contact-details">
                <div class="contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <p><strong>Phone:</strong> +49-421 67364055</p>
                </div>
                <div class="contact-item">
                    <i class="fa-solid fa-envelope"></i>
                    <p><strong>Email:</strong> info@leanintl.de</p>
                </div>
                <div class="contact-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <p><strong>Address:</strong> Elsasser Str. 27 <br>28211,Bremen,Germany</p>
                </div>
            </div>
        </div>
    </section>
`;

// ===================================================================
// 4. 内容加载逻辑 (更新)
// ===================================================================
document.addEventListener('DOMContentLoaded', function() {
    // 加载 About Us 内容
    const aboutContainer = document.getElementById('about-container');
    if (aboutContainer) {
        aboutContainer.innerHTML = aboutContent;
    }

    // 加载 Services 内容
    const servicesContainer = document.getElementById('services-container');
    if (servicesContainer) {
        servicesContainer.innerHTML = servicesContent;
    }

    // 加载 Contact 内容
    const contactContainer = document.getElementById('contact-container');
    if (contactContainer) {
        contactContainer.innerHTML = contactContent;
    }

});


