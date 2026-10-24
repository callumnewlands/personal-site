const pages = ["/", "/about", "/portfolio", "/contact", "/portfolio/mathsplanner"];

describe("pages", () => {
    pages.forEach((path) => {
        it(`renders ${path}`, () => {
            cy.visit(path);
            cy.get("main").should("be.visible");
            cy.get("footer").should("be.visible");
            cy.title().should("contain", "Callum Newlands");
            cy.get('meta[name="description"]').should("have.attr", "content").and("not.be.empty");
            cy.get('link[rel="canonical"]')
                .should("have.attr", "href")
                .and("match", /^https:\/\/cnewlands\.dev\//);
            cy.get('meta[property="og:image"]')
                .should("have.attr", "content")
                .and("match", /\/og\/.+\.jpg$/);
        });
    });

    it("loads homepage images", () => {
        cy.visit("/");
        cy.get("main img")
            .first()
            .should("be.visible")
            .and(($img) => {
                expect($img[0].naturalWidth).to.be.greaterThan(0);
            });
    });

    it("has no page for vrl", () => {
        cy.request({ url: "/portfolio/vrl", failOnStatusCode: false }).its("status").should("eq", 404);
    });

    it("footer links use noopener", () => {
        cy.visit("/");
        cy.get("footer a[target=_blank]").each(($a) => {
            expect($a.attr("rel")).to.contain("noopener").and.to.contain("noreferrer");
        });
    });
});

describe("contact form", () => {
    beforeEach(() => {
        cy.visit("/contact");
    });

    it("validates fields", () => {
        cy.contains("button", "Send Message").click();
        cy.contains("Please enter your name.");
        cy.contains("Please enter your email.");
        cy.contains("Please enter your message.");

        cy.get("#contact-email").type("not-an-email");
        cy.contains("button", "Send Message").click();
        cy.contains("Please enter a valid email address.");
    });

    it("shows success", () => {
        cy.intercept("POST", "/__forms.html", { statusCode: 200 }).as("submit");
        cy.get("#contact-name").type("Test User");
        cy.get("#contact-email").type("test@example.com");
        cy.get("#contact-message").type("Hello");
        cy.contains("button", "Send Message").click();
        cy.wait("@submit").its("request.body").should("contain", "form-name=Contact+Form");
        cy.contains("Message Sent Successfully!");
    });

    it("shows an error on failure", () => {
        cy.intercept("POST", "/__forms.html", { statusCode: 500 }).as("submit");
        cy.get("#contact-name").type("Test User");
        cy.get("#contact-email").type("test@example.com");
        cy.get("#contact-message").type("Hello");
        cy.contains("button", "Send Message").click();
        cy.wait("@submit");
        cy.contains("There was an error submitting your form");
    });
});

describe("robots and sitemap", () => {
    it("serves robots.txt", () => {
        cy.request("/robots.txt").its("body").should("contain", "Sitemap: https://cnewlands.dev/sitemap.xml");
    });

    it("serves sitemap.xml", () => {
        cy.request("/sitemap.xml").then(({ body }) => {
            pages.forEach((path) => expect(body).to.contain(`<loc>https://cnewlands.dev${path}</loc>`));
            expect(body).not.to.contain("/portfolio/vrl");
        });
    });
});
