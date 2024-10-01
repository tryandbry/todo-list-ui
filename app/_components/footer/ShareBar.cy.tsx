import Sharebar from './ShareBar'
import { ListIdContextProvider } from '@/app/_components/lists/ListIdContext'

describe('<Sharebar />', () => {
  context('with listId context', () => {
    const listId = "hello"
    const mockListId = {
        listId,
        setListId: () => {},
    };

    context('show=false', () => {
      const show = false
      it('renders', () => {
        cy.mount(
            <ListIdContextProvider value={mockListId}>
              <Sharebar show={show} />
            </ListIdContextProvider>
        )
      })

      it('is collapsed', () => {
        cy.mount(
            <ListIdContextProvider value={mockListId}>
              <Sharebar show={show} />
            </ListIdContextProvider>
        )
        .then(() => {
          cy.get('#share-bar').should('have.class', 'collapse')
        })
      })
    })
    context('show=true', () => {
      const show = true
      it('is visible', () => {
        cy.mount(
            <ListIdContextProvider value={mockListId}>
              <Sharebar show={show} />
            </ListIdContextProvider>
        )
        .then(() => {
          cy.get('#share-bar').should('not.have.class', 'collapse')
        })
      })
      it('shows share link', () => {
        cy.mount(
            <ListIdContextProvider value={mockListId}>
              <Sharebar show={show} />
            </ListIdContextProvider>
        )
        .then(() => {
          const link = `${window.location.origin}/list/${listId}`
          cy.get('#share-bar').find('#list-link').should('have.text', link)
        })
      })
    })
  })
})