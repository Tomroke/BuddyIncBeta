/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Header, HeaderProps } from '@buddy-inc-beta/shared-components';

export default {
  title: 'Example/Header',
  component: Header,
} as Meta;

type StoryType = Story<HeaderProps>
const Template: StoryType = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({}) as StoryType;
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({}) as StoryType;
LoggedOut.args = {};
