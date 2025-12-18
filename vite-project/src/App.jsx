import React from "react"
import { useState } from "react"
import StudentCard from "./components/StudentCard"
import Counter from "./components/Counter"
import UserDetails from "./components/UserDetails"
import Pagination from "./components/Pagination"
import Footer from "./components/Footer"
import { GlobalProvider } from "./contexts/GlobalContext"
import LoginForm from "./components/LoginForm"
import ProductList from "./components/ProductList"
import ProductForm from "./components/ProductForm"
import Header from "./components/Header"

const App = () => {

  // let firstName = 'John'
  // let lastName = 'Smith'

  return (
    <>
      {/*<h1 className="text-4xl mb-2 ">Student Details</h1>
      <StudentCard firstName={firstName} lastName={lastName} age={40}/>
      {/*StudentCard({firstName:firstName,lastName:lastName})
      <Counter/>*/}
      <GlobalProvider>
        <UserDetails />
        <Footer />
      </GlobalProvider>
    </>
  )
}

export default App;