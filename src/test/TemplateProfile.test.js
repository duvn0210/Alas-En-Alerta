import { render, screen } from '@testing-library/react';
import TemplateProfile from './TemplateProfile';
import avatar1 from '../../assets/avatar1.png';
import pajaro1 from '../../assets/pajaro1.png';
import pajaro2 from '../../assets/pajaro2.png';

// Mock de los componentes SideMenu y BottomMenu
jest.mock('../../components/sideMenu', () => () => <div>SideMenu Mock</div>);
jest.mock('../../components/BottomMenu', () => () => <div>BottomMenu Mock</div>);

describe('TemplateProfile', () => {

  test('debe renderizar correctamente el componente TemplateProfile', () => {
    render(<TemplateProfile />);
    
    // Verificar que la imagen de perfil se muestra correctamente
    const avatarImage = screen.getByAltText('Avatar');
    expect(avatarImage).toHaveAttribute('src', avatar1);

    // Verificar que el nombre de usuario se muestra correctamente
    const username = screen.getByText('@Ana_g_seg');
    expect(username).toBeInTheDocument();

    // Verificar que la información del perfil se muestra correctamente
    const description = screen.getByText('Apasionado por las aves 🌱');
    expect(description).toBeInTheDocument();
    const location = screen.getByText('Ecatepec de Morelos, Estado de México');
    expect(location).toBeInTheDocument();

    // Verificar que los botones y estadísticas se muestran correctamente
    const editProfileButton = screen.getByText('Editar perfil');
    expect(editProfileButton).toBeInTheDocument();

    // Verificar las estadísticas
    expect(screen.getByText('12')).toBeInTheDocument(); // Publicaciones
    expect(screen.getByText('22')).toBeInTheDocument(); // Seguidores
    expect(screen.getByText('20')).toBeInTheDocument(); // Seguidos

    // Verificar que las publicaciones se muestran correctamente
    const post1Image = screen.getByAltText('Publicación');
    expect(post1Image).toHaveAttribute('src', pajaro1);
    const post1Title = screen.getByText('Cárabo rufo');
    expect(post1Title).toBeInTheDocument();

    const post2Image = screen.getByAltText('Publicación');
    expect(post2Image).toHaveAttribute('src', pajaro2);
    const post2Title = screen.getByText('Pájaro carpintero');
    expect(post2Title).toBeInTheDocument();

    // Verificar que los componentes mockeados se renderizan
    expect(screen.getByText('SideMenu Mock')).toBeInTheDocument();
    expect(screen.getByText('BottomMenu Mock')).toBeInTheDocument();
  });

});
