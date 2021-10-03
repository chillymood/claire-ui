const loaderFn = () => {
  return [
    "../src/welcome.stories.tsx",
    // "../src/components/Carousel/carousel.stories.tsx",
    "../src/components/Upload/upload.stories.tsx",
    "../src/components/AutoComplete/autoComplete.stories.tsx",
    "../src/components/Select/select.stories.tsx",
    "../src/components/Menu/menu.stories.tsx",
    "../src/components/Tabs/tabs.stories.tsx",
    "../src/components/Alert/alert.stories.tsx",
    "../src/components/Input/input.stories.tsx",
    "../src/components/Icon/icon.stories.tsx",
    "../src/components/Button/button.stories.tsx",
  ];
};

module.exports = {
  stories: loaderFn(),
  addons: [
    "@storybook/addon-actions/register",
    "@storybook/addon-links/register",
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
  ],
};
