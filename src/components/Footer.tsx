import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-center">
      <hr/>
      <ul className="mb-4 p-0">
        <li className="inline-block mr-4">
          <a href="https://next-auth.js.org">Documentation</a>
        </li>
        <li className="inline-block mr-4">
          <a href="https://www.npmjs.com/package/next-auth">NPM</a>
        </li>
        <li className="inline-block mr-4">
          <a href="https://github.com/nextauthjs/next-auth-example">GitHub</a>
        </li>
        <li className="inline-block mr-4">
          <Link href="/policy">Policy</Link>
        </li>
      </ul>
    </footer>
  )
}
