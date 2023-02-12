import { Outlet, Route, Routes } from "react-router-dom"
import { AppHeader } from "./cmps/AppHeader"
import SideMenu from "./cmps/SideMenu"


export function App() {
  return (
    <div className="app main-layout">
      <AppHeader />
      <SideMenu />
      <main className={'page'}>
        <Outlet />
      </main>
    </div>
  )
}


