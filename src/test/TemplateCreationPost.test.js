import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TemplateCreation from "../modules/CreationPost/TemplateCreation";

// Mock para la función addPost
const mockAddPost = jest.fn();

describe("TemplateCreation", () => {
  test("renders the TemplateCreation form correctly", () => {
    render(<TemplateCreation addPost={mockAddPost} />);

    // Verificar que los elementos del formulario están presentes
    expect(screen.getByText("Crear Nuevo Post")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Añadir una descripción...")).toBeInTheDocument();
    expect(screen.getByText("Previsualización de la imagen")).toBeInTheDocument();
  });

  test("uploads an image and shows preview", () => {
    render(<TemplateCreation addPost={mockAddPost} />);

    // Crear un archivo de prueba
    const file = new Blob(["image content"], { type: "image/png" });
    const fileInput = screen.getByLabelText(/imagen/i);
    Object.defineProperty(fileInput, "files", {
      value: [file],
    });

    // Simular la carga del archivo
    fireEvent.change(fileInput);

    // Verificar que la imagen de previsualización aparece
    const previewImage = screen.getByAltText("Preview");
    expect(previewImage).toBeInTheDocument();
    expect(previewImage).toHaveAttribute("src");
  });

  test("shows alert when no image or description is provided", () => {
    render(<TemplateCreation addPost={mockAddPost} />);

    // Simular clic en el botón sin agregar una descripción ni una imagen
    global.alert = jest.fn();
    fireEvent.click(screen.getByText("Publicar"));

    // Verificar que se muestra el mensaje de advertencia
    expect(global.alert).toHaveBeenCalledWith("Por favor, añade una imagen y descripción");
  });

  test("creates a new post when description and image are provided", async () => {
    render(<TemplateCreation addPost={mockAddPost} />);

    // Cargar una imagen
    const file = new Blob(["image content"], { type: "image/png" });
    const fileInput = screen.getByLabelText(/imagen/i);
    Object.defineProperty(fileInput, "files", {
      value: [file],
    });
    fireEvent.change(fileInput);

    // Escribir una descripción
    const descriptionInput = screen.getByPlaceholderText("Añadir una descripción...");
    fireEvent.change(descriptionInput, { target: { value: "Nueva descripción de post" } });

    // Hacer clic en el botón de publicar
    fireEvent.click(screen.getByText("Publicar"));

    // Verificar que la función addPost fue llamada con los parámetros correctos
    await waitFor(() => {
      expect(mockAddPost).toHaveBeenCalledWith(
        expect.objectContaining({
          user: "@Ana_g_seg",
          role: "Estudiante",
          postImage: expect.any(String), // Verificar que la URL de la imagen está presente
          description: "Nueva descripción de post",
          location: "Biblioteca UNAC",
        })
      );
    });

    // Verificar que los campos de texto se han limpiado
    expect(descriptionInput.value).toBe("");
    const fileInputValue = fileInput.files.length;
    expect(fileInputValue).toBe(0);
  });

  test("does not create a post if image or description is missing", () => {
    render(<TemplateCreation addPost={mockAddPost} />);

    // No cargar imagen ni descripción
    fireEvent.click(screen.getByText("Publicar"));

    // Verificar que addPost no ha sido llamado
    expect(mockAddPost).not.toHaveBeenCalled();
  });
});
