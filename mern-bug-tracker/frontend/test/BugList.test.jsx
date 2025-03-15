import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; // Ensure this is imported
import BugList from "../src/components/BugList";
import { describe, test, expect } from "vitest";

describe("BugList Component", () => {
  test("renders list of bugs", () => {
    const bugs = [{ _id: "1", title: "Test Bug", description: "Bug description" }];
    render(<BugList bugs={bugs} />);

    expect(screen.getByText("Test Bug")).toBeInTheDocument(); // Now this should work
  });
});
