import Container from './container'

const Footer = () => (
  <footer className="bg-neutral-50 border-t border-neutral-200">
    <Container>
      <div className="py-10 flex flex-col items-center w-full">
        <h3 className="text-4xl lg:text-[2.5rem] font-bold
          tracking-tighter leading-tight text-center mb-10
          lg:mb-0 lg:pr-4 lg:w-1/2"
        >
          By Lucas Padilha
        </h3>
      </div>
    </Container>
  </footer>
)

export default Footer
