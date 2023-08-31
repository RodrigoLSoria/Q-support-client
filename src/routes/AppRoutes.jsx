import { Routes, Route } from 'react-router-dom'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import NotFoundPage from '../pages/NotFoundPage'
import NewEventForm from '../components/NewEventForm/NewEventForm'
import PrivateRoute from './PrivateRoute'
import SubscriptionForm from '../components/SubscriptionForm/SubscriptionForm'
import Homepage from '../pages/Homepage/Homepage'
import EventPage from '../pages/EventPage/EventPage'
import SubscriptionsPage from '../pages/SubscriptionsPage/SubscriptionsPage'
import CreativeProfile from '../pages/CreativeProfile/CreativeProfile'
import EventDetailsPage from '../pages/EventDetailsPage/EventDetailsPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Homepage />} />
            <Route path={'/signup'} element={<SignupPage />} />
            <Route path={'/login'} element={<LoginPage />} />
            <Route path={'/saveEvent'} element={<NewEventForm />} />
            <Route path={'/creative/:user_id'} element={<CreativeProfile />} />
            <Route path={'/creative/:_id/subscriptions'} element={<SubscriptionsPage />} />
            <Route path={'/newsubscription'} element={<SubscriptionForm />} />
            <Route path={'/events'} element={<EventPage />} />
            <Route path={'/getOneEvent/:event_id'} element={<EventDetailsPage />} />

            {/* <Route element={<PrivateRoute />}>
                
            </Route> */}

            <Route path={'*'} element={<NotFoundPage />} />

        </Routes>
    )
}

export default AppRoutes