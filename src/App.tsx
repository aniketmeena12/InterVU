import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PublicLayout from '@/layouts/public-layout'
import Homepage from '@/routes/home'
import AuthenticationLayout from '@/layouts/authlayout'
import SignInPage from './routes/signin'
import SignUpPage from './routes/signup'
import ProtectedRoutes from '@/layouts/protectedroutes'
import MainLayout from '@/layouts/mainlayout' // Add this import
import Generate from './components/generate'
import { Dashboard } from '@/routes/dashboard'
import CreateEditPage from './routes/createeditpage'
import MockLoadPage from './routes/mockloadpage'
import MockInterviewPage from './routes/mockinterviewpage'
import Feedback from './routes/feedback'
import { ThemeProvider } from './components/themeprovider'
import ResponsiveProfileCards from './routes/contactus'
import AboutUs from './routes/aboutus'
import HowToUse from './routes/howtouse'


const App = () => {
  return (
    <div className=''>
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>
        {/* Make Contact Us public */}
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        >
          <Route element={<Generate />} path="/*generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route path="interview/:interviewId/start" element={<MockInterviewPage />} />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
          <Route path="/*contact" element={<ResponsiveProfileCards />} />
          <Route path="/*about" element={<AboutUs/>}/>
          <Route path='/*howtouse' element={<HowToUse/>}/>
        </Route>
      </Routes>
    </Router>
    </ThemeProvider>
    </div>
  )
}
export default App
