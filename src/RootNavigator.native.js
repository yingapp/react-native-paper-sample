/* @flow */

import * as React from 'react';
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation';
import {Appbar} from 'react-native-paper';
import ExampleList, {examples} from './ExampleList';

const routes = Object.keys(examples)
    .map(id => ({id, item: examples[id]}))
    .reduce((acc, {id, item}) => {
        const Comp = item;
        const Screen = props => <Comp {...props} />;

        Screen.navigationOptions = props => ({
            header: (
                <Appbar.Header>
                    <Appbar.BackAction onPress={() => props.navigation.goBack()}/>
                    <Appbar.Content title={(Comp: any).title}/>
                </Appbar.Header>
            ),
            /* $FlowFixMe */
            ...(typeof Comp.navigationOptions === 'function'
                ? Comp.navigationOptions(props)
                : Comp.navigationOptions),
        });

        return {
            ...acc,
            [id]: Screen,
        };
    }, {});

const RootStack = createStackNavigator(
    {
        home: ExampleList,
        ...routes,
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            gestureResponseDistance: {
                horizontal: 45,
            },
            header: (
                <Appbar.Header>
                    <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()}/>
                    <Appbar.Content title="样例"/>
                </Appbar.Header>
            ),
        }),
    }
);

export default createAppContainer(RootStack)
