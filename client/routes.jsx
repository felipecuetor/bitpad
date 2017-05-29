import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layouts/MainLayout';
import NotasWrapper from '../imports/notes/NotasWrapper';

FlowRouter.route('/',{
	action()
	{
		mount(MainLayout,{
			content: (<NotasWrapper />)
		})
	}
});


