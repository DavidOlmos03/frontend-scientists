describe('Pruebas del Router', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Debe cargar la página Home correctamente', () => {
    cy.url().should('include', '/')
    cy.get('[data-test="home-page"]').should('be.visible')
  })
})

describe('Rutas de la Biblioteca', () => {
  it('Debe cargar la página principal de la biblioteca', () => {
    cy.visit('/library')
    cy.get('[data-test="library-page"]').should('be.visible')
  })

  it('Debe navegar a Mathematics correctamente', () => {
    cy.visit('/library/mathematics')
    cy.get('[data-test="mathematics-page"]').should('be.visible')
  })

  it('Debe navegar a Physics correctamente', () => {
    cy.visit('/library/physics')
    cy.get('[data-test="physics-page"]').should('be.visible')
  })

  it('Debe mostrar la página de un científico específico', () => {
    // Puedes mockear la data del científico si es necesario
    cy.visit('/library/scientist/1')
    cy.get('[data-test="scientist-page"]').should('be.visible')
    cy.get('[data-test="scientist-name"]').should('exist')
  })
})


describe('Manejo de rutas no existentes', () => {
  it('Debe redirigir a Home cuando la ruta no existe', () => {
    // Visitar una ruta que no está definida en el router
    cy.visit('/ruta-inexistente', {
      failOnStatusCode: false // Para evitar que Cypress falle por el 404
    })

    // Verificar que fue redirigido a Home
    cy.url().should('eq', Cypress.config().baseUrl + '/')
    cy.get('[data-test="home-page"]').should('be.visible')
  })
 })
