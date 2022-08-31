import { useState, useEffect } from 'react';

const useTabSwitch = (tabs, defaultTab) => {
  const [currentTab, setCurrentTab] = useState(defaultTab);

  // every time the  default tab changes, we do want to set our current one to the default
  useEffect(() => {
    setCurrentTab(defaultTab);
  }, [defaultTab]);

  const handleTabSwitch = (tab) => {
    setCurrentTab(tab);
  };

  return [currentTab, handleTabSwitch];

  // const [activeTab, setActiveTab] = useState(initialTab);
  // const [activeTabIndex, setActiveTabIndex] = useState(0);
  // const tabs = ["Summary", "Delivery", "Payment"];
  // const onTabSwitch = (newActiveTab) => {
  //     setActiveTab(newActiveTab);
  //     let categories = products.products.map((product) => {
  //     return product.name.name;
  //     });
  //     let index = categories.findIndex((category) => newActiveTab === category);
  //     console.log(index);
  //     if (index > -1) {
  //     setActiveTabIndex(index);
  //     } else {
  //     setActiveTabIndex(0);
  //     }
  // };
  // return { activeTab, activeTabIndex, tabs, onTabSwitch };
};

export default useTabSwitch;
