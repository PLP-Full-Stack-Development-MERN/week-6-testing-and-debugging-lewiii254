import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import BugForm from "../src/components/BugForm";
import { describe, test, expect, vi } from "vitest";
import axios from "axios";

// Mock axios
vi.mock("axios");

test("renders BugForm and submits data", async () => {
  const mockAddBug = vi.fn();
  axios.post.mockResolvedValueOnce({ data: { title: "Test Bug", description: "This is a bug." } });

  render(<BugForm onBugAdded={mockAddBug} />);

  fireEvent.change(screen.getByPlaceholderText("Bug title"), {
    target: { value: "Test Bug" },
  });
  fireEvent.change(screen.getByPlaceholderText("Bug description"), {
    target: { value: "This is a bug." },
  });

  fireEvent.click(screen.getByText("Add Bug"));

  // Wait for the mock function to be called
  await waitFor(() => {
    expect(mockAddBug).toHaveBeenCalledWith({
      title: "Test Bug",
      description: "This is a bug.",
    });
  });
});
