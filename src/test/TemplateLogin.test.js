/* eslint-disable no-undef */
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TemplateLogin from '../modules/Login/TemplateLogin';
import axios from 'axios';
import Swal from 'sweetalert2';
import { BrowserRouter as Router } from 'react-router-dom';
import MockAdapter from 'axios-mock-adapter';

// Crear un mock de axios
const mockAxios = new MockAdapter(axios);

// Simula la redirección (navegación) dentro de React Router
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}));

// Mock de SweetAlert2
jest.mock('sweetalert2', () => ({
  fire: jest.fn(),
}));

describe('TemplateLogin', () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  test('debe renderizar el formulario correctamente', () => {
    render(
      <Router>
        <TemplateLogin />
      </Router>
    );
    expect(screen.getByPlaceholderText('Correo electronico')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
    expect(screen.getByText('Inicia sesión')).toBeInTheDocument();
  });

  test('debe cambiar la visibilidad de la contraseña', () => {
    render(
      <Router>
        <TemplateLogin />
      </Router>
    );

    const passwordInput = screen.getByPlaceholderText('Contraseña');
    const toggleButton = screen.getByRole('button'); // Aquí se asume que el icono de toggle es un botón

    fireEvent.click(toggleButton); // Cambia a texto visible
    expect(passwordInput.type).toBe('text');

    fireEvent.click(toggleButton); // Cambia de nuevo a tipo 'password'
    expect(passwordInput.type).toBe('password');
  });

  test('debe hacer login correctamente con credenciales válidas', async () => {
    mockAxios.onPost('/login').reply(200, { message: 'Success' });

    render(
      <Router>
        <TemplateLogin />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText('Correo electronico');
    const passwordInput = screen.getByPlaceholderText('Contraseña');
    const submitButton = screen.getByText('Inicia sesión');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith({
        title: '¡Bienvenido!',
        text: 'Inicio de sesión exitoso',
        icon: 'success',
        confirmButtonText: 'Entendido',
      });
    });
  });

  test('debe mostrar un error si el login falla con credenciales incorrectas', async () => {
    mockAxios.onPost('/login').reply(404, { message: 'User not found' });

    render(
      <Router>
        <TemplateLogin />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText('Correo electronico');
    const passwordInput = screen.getByPlaceholderText('Contraseña');
    const submitButton = screen.getByText('Inicia sesión');

    fireEvent.change(emailInput, { target: { value: 'incorrect@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith({
        title: 'Error',
        text: 'El usuario no ha sido encontrado, por favor verifica tus credenciales',
        icon: 'question',
        confirmButtonText: 'Entendido',
      });
    });
  });

  test('debe mostrar un error si la API no responde', async () => {
    mockAxios.onPost('/login').networkError();

    render(
      <Router>
        <TemplateLogin />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText('Correo electronico');
    const passwordInput = screen.getByPlaceholderText('Contraseña');
    const submitButton = screen.getByText('Inicia sesión');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(Swal.fire).toHaveBeenCalledWith({
        title: 'Error',
        text: 'No se pudo conectar con el servidor. Por favor, intenta más tarde.',
        icon: 'error',
        confirmButtonText: 'Entendido',
      });
    });
  });
});
