describe('sample test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders the Netlify logo image', () => {
    cy.get('img')
    .should('be.visible')
    .and(($img) => {
      expect($img[0].naturalWidth).to.be.greaterThan(0);
    })
  })
})

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
