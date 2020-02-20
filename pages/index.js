import Head from 'next/head'
import Link from 'next/link'

const Home = () => (
  <div className="container">
    Welcome to the Api
    <ul>
      <li>Routes</li>
    </ul>
      <Link href="/api/profiles">/api/profiles</Link>
  </div>
)

export default Home
