import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Page, PageProps } from './page';
import * as Shared from '../header/header.stories'
export default {
  title: 'Example/Page',
  component: Page,
} as Meta;

type StoryType = Story<PageProps>
const Template: StoryType = (args) => <Page {...args} />;

export const LoggedIn = Template.bind({}) as StoryType;
LoggedIn.args = {
  ...Shared.LoggedIn.args,
};

export const LoggedOut = Template.bind({}) as StoryType;
LoggedOut.args = {
  ...Shared.LoggedOut.args,
};
