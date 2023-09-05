export default function Index({ test }: { test: any }) {
  return (
    <div>
      <h1>{test}</h1>
    </div>
  )
}

export const getStaticProps = async () => {
  return { props: { test: '' } }
}
