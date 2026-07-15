import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Página de inicio", () => {
  it("se renderiza sin errores", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});
