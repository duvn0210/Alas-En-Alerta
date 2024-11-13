import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TemplateHome from "./TemplateHome";
import { act } from "react-dom/test-utils";

jest.mock("../../components/MapSection", () => () => <div>MapSection</div>);
jest.mock("../../components/sideMenu", () => ({ setShowCreation, addPost }) => (
  <div>
    <button onClick={() => setShowCreation(true)}>Show Creation</button>
    <button
      onClick={() =>
        addPost({
          id: 3,
          user: "@new.user",
          role: "User",
          avatar: "new-avatar.png",
          postImage: "new-image.png",
          description: "New Post",
          location: "New Location",
          date: "21/11/2024",
        })
      }
    >
      Add Post
    </button>
  </div>
));
jest.mock("../../components/BottomMenu", () => ({ setShowCreation }) => (
  <div>
    <button onClick={() => setShowCreation(true)}>Show Creation</button>
  </div>
));

describe("TemplateHome", () => {
  test("renders existing posts correctly", () => {
    render(<TemplateHome />);

    // Verificar que los posts iniciales están presentes
    expect(screen.getByText("@ana.g_seg")).toBeInTheDocument();
    expect(screen.getByText("Colibrí rufo")).toBeInTheDocument();
    expect(screen.getByText("Biblioteca UNAC")).toBeInTheDocument();
    expect(screen.getByText("19/08/2024")).toBeInTheDocument();

    expect(screen.getByText("@mayerly.s")).toBeInTheDocument();
    expect(screen.getByText("Ave desconocida")).toBeInTheDocument();
    expect(screen.getByText("09/08/2024")).toBeInTheDocument();
  });

  test("shows creation form when 'Show Creation' button is clicked", () => {
    render(<TemplateHome />);

    // Verificar que la creación no se está mostrando inicialmente
    expect(screen.queryByText("Add Post")).toBeNull();

    // Simular click en el botón de "Show Creation"
    fireEvent.click(screen.getByText("Show Creation"));

    // Verificar que la creación se muestra después del click
    expect(screen.getByText("Add Post")).toBeInTheDocument();
  });

  test("adds a new post when 'Add Post' is clicked", async () => {
    render(<TemplateHome />);

    // Simular click en el botón para agregar un nuevo post
    fireEvent.click(screen.getByText("Add Post"));

    // Esperar a que el post nuevo aparezca
    await waitFor(() => {
      expect(screen.getByText("New Post")).toBeInTheDocument();
      expect(screen.getByText("New Location")).toBeInTheDocument();
      expect(screen.getByText("21/11/2024")).toBeInTheDocument();
    });
  });

  test("displays MapSection and BottomMenu components", () => {
    render(<TemplateHome />);

    // Verificar que los componentes MapSection y BottomMenu están presentes
    expect(screen.getByText("MapSection")).toBeInTheDocument();
    expect(screen.getByText("Show Creation")).toBeInTheDocument();  // BottomMenu button
  });
});
