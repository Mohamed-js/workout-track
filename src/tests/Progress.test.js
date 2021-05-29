import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Progress from '../containers/Progress';

const mockStore = configureStore([thunk]);
let store;
beforeEach(() => {
  store = mockStore({
    user: {
      records: [
        {
          id: 162,
          user_id: 77,
          movement_id: 8,
          movement_count: 13,
          created_at: '2021-05-21T01:40:52.944Z',
          updated_at: '2021-05-21T01:40:52.944Z',
          movement: {
            id: 8,
            name: 'kick back',
            category: 'abs',
            image:
              'https://i.pinimg.com/originals/b8/b1/f7/b8b1f74f5ff905d0878e2c605515f347.gif',
            created_at: '2021-05-21T01:34:50.625Z',
            updated_at: '2021-05-21T01:34:50.625Z',
          },
        },
        {
          id: 161,
          user_id: 77,
          movement_id: 8,
          movement_count: 79,
          created_at: '2021-05-21T01:40:46.449Z',
          updated_at: '2021-05-21T01:40:46.449Z',
          movement: {
            id: 8,
            name: 'kick back',
            category: 'abs',
            image:
              'https://i.pinimg.com/originals/b8/b1/f7/b8b1f74f5ff905d0878e2c605515f347.gif',
            created_at: '2021-05-21T01:34:50.625Z',
            updated_at: '2021-05-21T01:34:50.625Z',
          },
        },
      ],
      trackedMovements: [
        {
          id: 7,
          name: 'cat cow pose',
          category: 'back',
          image:
            'https://www.spotebi.com/wp-content/uploads/2014/10/cat-back-stretch-exercise-illustration.gif',
          created_at: '2021-05-21T01:30:26.401Z',
          updated_at: '2021-05-21T01:30:26.401Z',
        },
        {
          id: 8,
          name: 'kick back',
          category: 'abs',
          image:
            'https://i.pinimg.com/originals/b8/b1/f7/b8b1f74f5ff905d0878e2c605515f347.gif',
          created_at: '2021-05-21T01:34:50.625Z',
          updated_at: '2021-05-21T01:34:50.625Z',
        },
      ],
      untrackedMovements: {
        movements: [
          {
            id: 1,
            name: 'push-ups',
            category: 'chest',
            image:
              'https://cdnb.artstation.com/p/assets/images/images/027/557/839/original/ryan-edwards-pushups.gif?1591877044',
            created_at: '2021-05-16T18:06:56.275Z',
            updated_at: '2021-05-17T13:34:31.728Z',
          },
          {
            id: 2,
            name: 'crunches',
            category: 'abdomin',
            image:
              ' https://i.pinimg.com/originals/30/04/1d/30041df56a924326c7194762a17f52a5.gif',
            created_at: '2021-05-16T18:06:56.286Z',
            updated_at: '2021-05-17T13:35:09.754Z',
          },
        ],
      },
    },
  });
  sessionStorage.setItem(
    'current_user',
    JSON.stringify({
      id: 77,
      name: 'samysamy',
      birth_date: '2021-05-05',
      password: 'samysamy',
      created_at: '2021-05-21T01:06:57.478Z',
      updated_at: '2021-05-21T01:42:36.306Z',
      current_weight: 88,
      last_weight: 78,
      height: 178,
    }),
  );
});

const componentWrap = (component) => (
  <Provider store={store}>
    <Router id={1}>{component}</Router>
  </Provider>
);

// Testing Progress commponent
test('Render body mass index', () => {
  const { getByText } = render(componentWrap(<Progress />));
  const headerText = getByText(/27.77%/i);
  expect(headerText).toBeInTheDocument();
});

test('Render body built weight', () => {
  const { getByText } = render(componentWrap(<Progress />));
  const headerText = getByText(/Built weight/i);
  expect(headerText).toBeInTheDocument();
});

test('Render body weight to lose', () => {
  const { getByText } = render(componentWrap(<Progress />));
  const headerText = getByText(/Weight to lose/i);
  expect(headerText).toBeInTheDocument();
});

test('Render body mass index list', () => {
  const { getByText } = render(componentWrap(<Progress />));
  const headerText = getByText(/Underweight/i);
  expect(headerText).toBeInTheDocument();
});

test('Render tracked movements progress', () => {
  const { getByText } = render(componentWrap(<Progress />));
  const headerText = getByText(/your tracked movements progress/i);
  expect(headerText).toBeInTheDocument();
});
