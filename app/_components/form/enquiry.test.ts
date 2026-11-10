import { expect, test } from "vitest";
import { validate, validateField } from "./enquiry";

const valid = {
    need: "Not sure yet",
    situation: "We're stuck on a release",
    name: "Jo",
    email: "jo@company.com"
};

test("accepts a complete enquiry", () => {
    expect(validate(valid)).toEqual({});
});

test("requires every field", () => {
    expect(Object.keys(validate({}))).toEqual(["need", "situation", "name", "email"]);
});

test("rejects an email without a domain", () => {
    expect(validateField("email", "jo@company")).toBe("Enter an email like name@example.com");
});

test("rejects a need that isn't an option", () => {
    expect(validateField("need", "Website redesign")).toBe("Choose what you’re looking for");
});

test("ignores surrounding spaces", () => {
    expect(validateField("name", "   ")).toBe("Enter your name");
    expect(validateField("email", " jo@company.com ")).toBeUndefined();
});
