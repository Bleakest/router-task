import { Route, Routes } from 'react-router-dom'
import { Characters, EpisodeInfo, Episodes, HeroInfo, LocationInfo, Locations, Main, PageNotFound } from '../pages'
import { Layout } from '../layouts/Layout'

export function AppRouter() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Main />} />
                <Route path='/characters' element={<Characters />} />
                <Route path='/character/:id' element={<HeroInfo />} />
                <Route path='/locations' element={<Locations />} />
                <Route path='/location/:id' element={<LocationInfo />} />
                <Route path='/episodes' element={<Episodes />} />
                <Route path='/episode/:id' element={<EpisodeInfo />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}
