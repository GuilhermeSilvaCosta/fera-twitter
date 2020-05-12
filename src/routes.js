import EditProfile from 'pages/EditProfile';
import Main from 'pages/Main';
import Profile from 'pages/Profile';

const Routes = [
    {
        path: '/',
        exact: true,
        component: Main
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/edit-profile',
        component: EditProfile
    }
]

export default Routes;