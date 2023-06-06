import { Routes, Route } from 'react-router-dom'
import { publicRoutes } from './routes'
import Layout from './components/Layout/Layout'
import Missing from './page/Missing'

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {publicRoutes.map((route, index) => {
                    const Page = route.component
                    return <Route key={index} path={route.path} element={<Page />} />
                })}
                <Route path="/notfound" element={<Missing />} />
            </Route>
        </Routes>
    )
}

export default App
