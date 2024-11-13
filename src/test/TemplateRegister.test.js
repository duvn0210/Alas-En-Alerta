import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TemplateRegister from '../TemplateRegister'; // Ruta de tu componente
import axios from 'axios';
import Swal from 'sweetalert2';

// Mock de axios
jest.mock('axios');
jest.mock('sweetalert2');

// Test de renderización de los elementos
describe('TemplateRegister', () => {
  it('debería renderizar los elementos correctamente', () => {
    render(<TemplateRegister />);

    // Verificar si los campos de entrada están en el documento
    expect(screen.getByPlaceholderText('Nombre de usuario')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Correo electronico')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tipo de usuario')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Registrate/i })).toBeInTheDocument();
  });

  it('debería cambiar la visibilidad de la contraseña', () => {
    render(<TemplateRegister />);

    const passwordInput = screen.getByPlaceholderText('Contraseña');
    const togglePasswordButton = screen.getByRole('button', { name: /toggle password visibility/i });

    // Verificar que la contraseña está oculta por defecto
    expect(passwordInput.type).toBe('password');

    // Simular el clic para mostrar la contraseña
    fireEvent.click(togglePasswordButton);
    expect(passwordInput.type).toBe('text');

    // Simular otro clic para ocultar la contraseña
    fireEvent.click(togglePasswordButton);
    expect(passwordInput.type).toBe('password');
  });

  it('debería enviar los datos correctamente y mostrar un mensaje de éxito', async () => {
    render(<TemplateRegister />);

    // Llenar el formulario con datos
    fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Correo electronico'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Tipo de usuario'), { target: { value: 'usuario' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'password123' } });

    // Mock de la respuesta de axios
    axios.post.mockResolvedValueOnce({ status: 200 });

    // Hacer clic en el botón de registro
    fireEvent.click(screen.getByRole('button', { name: /Registrate/i }));

    // Esperar que el mensaje de éxito aparezca
    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith({
        title: '¡Bienvenido!',
        text: 'Registro exitoso',
        icon: 'success',
        confirmButtonText: 'Entendido'
      });
    });
  });

  it('debería mostrar un mensaje de error si la solicitud de registro falla', async () => {
    render(<TemplateRegister />);

    // Llenar el formulario con datos
    fireEvent.change(screen.getByPlaceholderText('Nombre de usuario'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByPlaceholderText('Correo electronico'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Tipo de usuario'), { target: { value: 'usuario' } });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), { target: { value: 'password123' } });

    // Mock de la respuesta de axios con error
    axios.post.mockRejectedValueOnce(new Error('Error al registrarse'));

    // Hacer clic en el botón de registro
    fireEvent.click(screen.getByRole('button', { name: /Registrate/i }));

    // Esperar que el mensaje de error aparezca
    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith({
        title: 'Error',
        text: 'Hubo un problema al registrarse. Por favor, verifica tus credenciales e intenta nuevamente.',
        icon: 'error',
        confirmButtonText: 'Entendido'
      });
    });
  });
});
