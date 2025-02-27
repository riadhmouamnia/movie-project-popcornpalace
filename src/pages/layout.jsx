import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar/index.js"
import { getGenres } from "@/util/API"
import { useEffect, useState } from "react"

export default function Layout({ children }) {
  const [genres, setGenres] = useState([])

  //get all genres
  async function fetchGenres() {
    const genresList = await getGenres()
    setGenres(genresList)
  }
  useEffect(() => {
    fetchGenres()
  }, [])

  return (
    <>
      <Navbar genres={genres} />
      <main className="min-h-[100vh]">{children}</main>
      <Footer />
    </>
  )
}
