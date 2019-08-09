import TabBar from "react-native-tab-bar-interaction";



import React, { Component } from 'react';


export default class TabbarComponent extends React.Component{


    render() {
        return (
            <TabBar>
              <TabBar.Item
                  icon={require('./tab1.png')}
                  selectedIcon={require('./tab1.png')}
                  title="Tab1"
                  screenBackgroundColor={{ backgroundColor: '#008080' }}
              >
                <View>
                    {/*Page Content*/}
                </View>
              </TabBar.Item>
              <TabBar.Item
                  icon={require('./tab2.png')}
                  selectedIcon={require('./tab1.png')}
                  title="Tab2"
                  screenBackgroundColor={{ backgroundColor: '#F08080' }}
              >
                  <View>
                      {/*Page Content*/}
                  </View>
              </TabBar.Item>
              <TabBar.Item
                  icon={require('./tab3.png')}
                  selectedIcon={require('./tab1.png')}
                  title="Tab3"
                  screenBackgroundColor={{ backgroundColor: '#485d72' }}
              >
                <View>
                    {/*Page Content*/}
                </View>
              </TabBar.Item>
            </TabBar>
        );
      }

}
  