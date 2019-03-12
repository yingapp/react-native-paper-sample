/* @flow */

import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Caption,
  Headline,
  Paragraph,
  Subheading,
  Title,
  withTheme,
  type Theme, Drawer,
} from 'react-native-paper';
import {WebView} from 'react-native-webview';

type Props = {
  theme: Theme,
};

class WebViewExample extends React.Component<Props> {
  static title = 'WebView';

  render() {
    const {
      theme: {
        colors: { background },
      },
    } = this.props;
    return (
      <View style={[styles.container, { backgroundColor: background }]}>
        <WebView
        originWhitelist={['*']}
        source={{ uri: "https://yingapp.herokuapp.com/xun" }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
});

export default withTheme(WebViewExample);
