import InboxScreen from "../components/InboxScreen";
import store from '../lib/store';

import { rest } from 'msw';
import { MockedState } from './TaskList.stories';


import { Provider } from 'react-redux';

import {
    fireEvent,
    within,
    waitFor,
    waitForElementToBeRemoved
} from '@storybook/testing-library';

export default {
    component: InboxScreen,
    title: 'App/InboxScreen',
    decorators: [(story) => <Provider store={store}>{story()}</Provider>],
    tags: ['autodocs'],
};

export const Default = {
    parameters: {
        msw: {
            handlers: [
                rest.get(
                    'https://jsonplaceholder.typicode.com/todos?userId=1',
                    (req, res, ctx) => {
                        return res(ctx.json(MockedState.tasks));
                    }
                ),
            ],
        },
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Wait for the component to transition from the loading state
        await waitForElementToBeRemoved(await canvas.findByTestId('loading'));

        // Wait for the component to be updated based on the store
        await waitFor(async() => {
            // Simulate pinning the first task
            await fireEvent.click(canvas.getByLabelText('pintask-1'));

            // Simulate pinning the third task
            await fireEvent.click(canvas.getByLabelText('pintask-3'));
        });
    }
};

export const Error = {
    parameters: {
        msw: {
            handlers: [
                rest.get(
                    'https://jsonplaceholder.typicode.com/todos?userId=1',
                    (req, res, ctx) => {
                        return res(ctx.status(403));
                    }
                ),
            ],
        },
    },
};