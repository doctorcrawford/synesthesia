function Navbar() {
  return (
    <>
      <nav>
        <a href="/">Synesthesia</a>
        <ul>
          <li>Sign In</li>
          <a href="/spotify"><li>Spotify</li></a>
          <a href="/webplayback"><li>Pick a Song</li></a>
        </ul>
      </nav>
    </>
  )
}

export default Navbar;