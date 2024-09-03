import './styles/style.css';

import { Provider } from 'react-redux';

import { store } from './store';

import { UsersPage } from '@/pages/users';

import { MuiTheme } from '@/shared';

import { Layout } from '@/widgets';

function App() {
    return (
        <Provider store={store}>
            <MuiTheme>
                <Layout>
                    <UsersPage />
                </Layout>
            </MuiTheme>
        </Provider>
    );
}

export default App;
