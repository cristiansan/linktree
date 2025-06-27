// Design System - Robin Ebers Style
export const design = {
  // Colores principales
  colors: {
    primary: {
      background: '#0a0a0a',
      dark: '#000000',
      surface: '#1a1a1a'
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
      muted: '#888888'
    },
    brand: {
      green: '#00ff41',
      greenDark: '#00cc33',
      terminal: '#00ff00'
    },
    interactive: {
      hover: '#2a2a2a',
      border: '#333333',
      borderHover: '#00ff41'
    }
  },

  // Tipografías
  typography: {
    fonts: {
      primary: "'Courier New', 'Monaco', 'Menlo', monospace",
      secondary: "'JetBrains Mono', 'Fira Code', 'Consolas', monospace"
    },
    sizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem'
    },
    weights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700'
    }
  },

  // Espaciado
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem'
  },

  // Componentes específicos
  components: {
    // Perfil
    profile: {
      imageSize: '120px',
      borderWidth: '4px',
      borderColor: '#ffffff',
      shadowColor: 'rgba(255, 255, 255, 0.2)'
    },

    // Cards/Botones
    card: {
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid #333333',
      borderRadius: '8px',
      padding: '1rem 1.5rem',
      hoverBackground: 'rgba(255, 255, 255, 0.1)'
    },

    // Comentarios tipo terminal
    comment: {
      color: '#00ff41',
      fontSize: '1.125rem',
      fontWeight: '600',
      prefix: '// '
    },

    // Input
    input: {
      background: '#1a1a1a',
      border: '1px solid #333333',
      borderRadius: '4px',
      padding: '0.75rem 1rem',
      color: '#ffffff'
    },

    // Botón de suscripción
    button: {
      primary: {
        background: '#00ff41',
        color: '#000000',
        padding: '0.75rem 2rem',
        borderRadius: '4px',
        fontWeight: '600'
      }
    }
  },

  // Animaciones
  animations: {
    transition: '0.3s ease',
    hover: {
      transform: 'translateY(-2px)',
      scale: 'scale(1.02)'
    }
  },

  // Layout
  layout: {
    maxWidth: '600px',
    containerPadding: '2rem',
    sectionSpacing: '3rem'
  }
};

// Utilidades CSS
export const cssUtils = {
  // Clase para texto tipo terminal
  terminalText: `
    font-family: ${design.typography.fonts.primary};
    color: ${design.colors.brand.green};
    text-shadow: 0 0 5px rgba(0, 255, 65, 0.3);
  `,
  
  // Clase para comentarios
  comment: `
    color: ${design.colors.brand.green};
    font-weight: ${design.typography.weights.semibold};
    font-size: ${design.typography.sizes.lg};
    margin-bottom: ${design.spacing.md};
  `,

  // Efectos hover para cards
  cardHover: `
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 255, 65, 0.1);
    border-color: ${design.colors.interactive.borderHover};
  `
};

// Estilos CSS globales como string
export const globalStyles = `
  :root {
    --bg-primary: ${design.colors.primary.background};
    --bg-surface: ${design.colors.primary.surface};
    --text-primary: ${design.colors.text.primary};
    --text-secondary: ${design.colors.text.secondary};
    --brand-green: ${design.colors.brand.green};
    --border-color: ${design.colors.interactive.border};
    --font-mono: ${design.typography.fonts.primary};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--bg-primary);
    color: var(--text-primary);
    font-family: var(--font-mono);
    line-height: 1.5;
    min-height: 100vh;
  }

  .container {
    max-width: ${design.layout.maxWidth};
    margin: 0 auto;
    padding: ${design.layout.containerPadding};
    text-align: center;
  }

  .terminal-comment {
    color: var(--brand-green);
    font-weight: ${design.typography.weights.semibold};
    font-size: ${design.typography.sizes.lg};
    margin-bottom: ${design.spacing.md};
  }

  .terminal-comment::before {
    content: "// ";
  }

  .profile-section {
    margin-bottom: ${design.spacing['3xl']};
  }

  .profile-image {
    width: ${design.components.profile.imageSize};
    height: ${design.components.profile.imageSize};
    border-radius: 50%;
    border: ${design.components.profile.borderWidth} solid ${design.components.profile.borderColor};
    box-shadow: 0 0 20px ${design.components.profile.shadowColor};
    margin-bottom: ${design.spacing.xl};
  }

  .name {
    font-size: ${design.typography.sizes['4xl']};
    font-weight: ${design.typography.weights.bold};
    margin-bottom: ${design.spacing.sm};
  }

  .subtitle {
    color: var(--text-secondary);
    font-size: ${design.typography.sizes.lg};
    margin-bottom: ${design.spacing.lg};
  }

  .description {
    font-size: ${design.typography.sizes.lg};
    margin-bottom: ${design.spacing.sm};
  }

  .highlight {
    color: var(--brand-green);
    font-weight: ${design.typography.weights.semibold};
  }

  .section {
    margin-bottom: ${design.spacing['2xl']};
  }

  .card {
    background: ${design.components.card.background};
    border: ${design.components.card.border};
    border-radius: ${design.components.card.borderRadius};
    padding: ${design.components.card.padding};
    margin-bottom: ${design.spacing.md};
    transition: all ${design.animations.transition};
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .card:hover {
    background: ${design.components.card.hoverBackground};
    border-color: var(--brand-green);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(0, 255, 65, 0.1);
  }

  .newsletter {
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid var(--border-color);
    border-radius: ${design.components.card.borderRadius};
    padding: ${design.spacing.xl};
    margin-bottom: ${design.spacing['2xl']};
  }

  .newsletter-text {
    font-size: ${design.typography.sizes.base};
    color: var(--text-secondary);
    margin-bottom: ${design.spacing.lg};
    line-height: 1.6;
  }

  .email-input {
    background: ${design.components.input.background};
    border: ${design.components.input.border};
    border-radius: ${design.components.input.borderRadius};
    padding: ${design.components.input.padding};
    color: ${design.components.input.color};
    font-family: var(--font-mono);
    width: 100%;
    margin-bottom: ${design.spacing.md};
    font-size: ${design.typography.sizes.base};
  }

  .email-input:focus {
    outline: none;
    border-color: var(--brand-green);
    box-shadow: 0 0 10px rgba(0, 255, 65, 0.2);
  }

  .email-input::placeholder {
    color: var(--text-secondary);
    opacity: 0.7;
  }

  .subscribe-btn {
    background: ${design.components.button.primary.background};
    color: ${design.components.button.primary.color};
    padding: ${design.components.button.primary.padding};
    border-radius: ${design.components.button.primary.borderRadius};
    font-weight: ${design.components.button.primary.fontWeight};
    border: none;
    cursor: pointer;
    transition: all ${design.animations.transition};
    font-family: var(--font-mono);
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
    font-size: ${design.typography.sizes.base};
  }

  .subscribe-btn:hover {
    background: ${design.colors.brand.greenDark};
    transform: scale(1.02);
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: ${design.spacing.xl};
    margin-top: ${design.spacing['2xl']};
  }

  .social-link {
    color: var(--text-secondary);
    font-size: ${design.typography.sizes.xl};
    transition: color ${design.animations.transition};
    text-decoration: none;
  }

  .social-link:hover {
    color: var(--text-primary);
  }

  @media (max-width: 768px) {
    .container {
      padding: ${design.spacing.md};
    }
    
    .profile-image {
      width: 80px;
      height: 80px;
    }
    
    .name {
      font-size: ${design.typography.sizes['2xl']};
    }
    
    .card {
      padding: ${design.spacing.md};
    }
    
    .social-links {
      gap: ${design.spacing.lg};
    }
  }
`;

export default design; 