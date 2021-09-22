import React from "react";
import { Story, Meta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  AutoComplete,
  DataSourceType,
  AutoCompleteProps,
} from "./autoComplete";
import Input from "../Input";
interface SeatNumberTableProps {
  value: string;
  number: number;
}
interface GithubUserProps {
  login: string;
  url: string;
  avatar_url: string;
}
// const SeatNumberTable = [
//   { value: "Claire", number: 11 },
//   { value: "Jack", number: 1 },
//   { value: "Angela", number: 4 },
//   { value: "Iris", number: 2 },
//   { value: "John", number: 15 },
//   { value: "James", number: 23 },
//   { value: "Teddy", number: 3 },
//   { value: "Baby", number: 14 },
//   { value: "Marry", number: 39 },
//   { value: "Jenny", number: 0 },
// ];
// const handleFetch = (query: string) => {
//   return SeatNumberTable.filter((item) => item.value.includes(query));
// };

// const renderOption = (item: DataSourceType) => {
//   const itemWithNumber = item as DataSourceType<SeatNumberTableProps>;
//   return (
//     <>
//       <b>名字: {itemWithNumber.value}</b>
//       <span>github網址: {itemWithNumber.number}</span>
//     </>
//   );
// };

// const textComplete = `
//   ~~~javascript
//   const lakers = ['bradley', 'pope', 'caruso', 'cook', 'cousins',
//   'james', 'AD', 'green', 'howard', 'kuzma', 'McGee', 'rando']
//   const handleFetch = (query: string) => {
//     return lakers.filter(name => name.includes(query)).map(name => ({value: name}))
//   }
//   return (
//     <AutoComplete
//       fetchSuggestions={handleFetch}
//       onSelect={action('selected')}
//       placeholder="輸入湖人隊球員英文名試試"
//     />
//   )
//   ~~~
// `;
// const customComplete = () => {
//   const lakersWithNumber = [
//     { value: "bradley", number: 11 },
//     { value: "pope", number: 1 },
//     { value: "caruso", number: 4 },
//     { value: "cook", number: 2 },
//     { value: "cousins", number: 15 },
//     { value: "james", number: 23 },
//     { value: "AD", number: 3 },
//     { value: "green", number: 14 },
//     { value: "howard", number: 39 },
//     { value: "kuzma", number: 0 },
//   ];
//   const handleFetch = (query: string) => {
//     return lakersWithNumber.filter((player) => player.value.includes(query));
//   };
//   const renderOption = (item: DataSourceType) => {
//     const itemWithNumber = item as DataSourceType<LakerPlayerProps>;
//     return (
//       <>
//         <b>名字: {itemWithNumber.value}</b>
//         <span>球衣號碼: {itemWithNumber.number}</span>
//       </>
//     );
//   };
//   return (
//     <AutoComplete
//       fetchSuggestions={handleFetch}
//       onSelect={action("selected")}
//       placeholder="輸入湖人隊球員英文,自定義下拉模版"
//       renderOption={renderOption}
//     />
//   );
// };

// const textCustom = `
// ### 範例程式碼
// ~~~javascript
// const lakersWithNumber = [
//   {value: 'bradley', number: 11},
//   {value: 'pope', number: 1},
//   {value: 'caruso', number: 4},
//   {value: 'cook', number: 2},
//   {value: 'cousins', number: 15},
//   {value: 'james', number: 23},
//   {value: 'AD', number: 3},
//   {value: 'green', number: 14},
//   {value: 'howard', number: 39},
//   {value: 'kuzma', number: 0},
// ]
// const handleFetch = (query: string) => {
//   return lakersWithNumber.filter(player => player.value.includes(query))
// }
// const renderOption = (item: DataSourceType) => {
//   const itemWithNumber = item as DataSourceType<LakerPlayerProps>
//   return (
//     <>
//       <b>名字: {itemWithNumber.value}</b>
//       <span>球衣號碼: {itemWithNumber.number}</span>
//     </>
//   )
// }
// return (
//   <AutoComplete
//     fetchSuggestions={handleFetch}
//     onSelect={action('selected')}
//     placeholder="輸入湖人隊球員英文,自定義下拉模版"
//     renderOption={renderOption}
//   />
// )
// ~~~
// `;
// const ajaxComplete = () => {

const handleFetch = (query: string) => {
  return fetch(`https://api.github.com/search/users?q=${query}`)
    .then((res) => res.json())
    .then(({ items }) => {
      return items
        .slice(0, 10)
        .map((item: any) => ({ value: item.login, url: item.url }));
    });
};

const renderOption = (item: DataSourceType) => {
  const itemWithNumber = item as DataSourceType<GithubUserProps>;
  return (
    <>
      <b>name: {itemWithNumber.value}</b>&emsp;
      <span>github: {itemWithNumber.url}</span>
    </>
  );
};

const item = [
  {
    login: "chillymood",
    id: 55542250,
    node_id: "MDQ6VXNlcjU1NTQyMjUw",
    avatar_url: "https://avatars.githubusercontent.com/u/55542250?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/chillymood",
    html_url: "https://github.com/chillymood",
    followers_url: "https://api.github.com/users/chillymood/followers",
    following_url:
      "https://api.github.com/users/chillymood/following{/other_user}",
    gists_url: "https://api.github.com/users/chillymood/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/chillymood/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/chillymood/subscriptions",
    organizations_url: "https://api.github.com/users/chillymood/orgs",
    repos_url: "https://api.github.com/users/chillymood/repos",
    events_url: "https://api.github.com/users/chillymood/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/chillymood/received_events",
    type: "User",
    site_admin: false,
    score: 1.0,
  },
];

//   const renderOption = (item: DataSourceType) => {
//     const itemWithGithub = item as DataSourceType<GithubUserProps>;
//     return (
//       <>
//         <b>Name: {itemWithGithub.value}</b>
//         <span>url: {itemWithGithub.url}</span>
//       </>
//     );
//   };
//   return (
//     <AutoComplete
//       fetchSuggestions={handleFetch}
//       placeholder="輸入 Github 用戶名試試"
//       onSelect={action("selected")}
//       renderOption={renderOption}
//     />
//   );
// };

// const textAjax = `
// ### 範例程式碼
// ~~~javascript
// const handleFetch = (query: string) => {
//   return fetch('https://api.github.com/search/users?q='+ query)
//     .then(res => res.json())
//     .then(({ items }) => {
//       return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item}))
//     })
// }

// const renderOption = (item: DataSourceType) => {
//   const itemWithGithub = item as DataSourceType<GithubUserProps>
//   return (
//     <>
//       <b>Name: {itemWithGithub.value}</b>
//       <span>url: {itemWithGithub.url}</span>
//     </>
//   )
// }
// return (
//   <AutoComplete
//     fetchSuggestions={handleFetch}
//     placeholder="輸入 Github 用户名試試"
//     onSelect={action('selected')}
//     renderOption={renderOption}
//   />
// )
// ~~~
// `;
// storiesOf("AutoComplete", module)
//   .add("AutoComplete", simpleComplete, {
//     info: { source: false, text: textComplete },
//   })
//   .add("自定義下拉選項", customComplete, {
//     info: { source: false, text: textCustom },
//   })
//   .add("異步請求Github用戶名", ajaxComplete, {
//     info: { source: false, text: textAjax },
//   });

export default {
  title: "Components/AutoComplete",
  component: AutoComplete,
  subcomponents: { Input },
  args: {
    placeholder: "輸入Github用戶名試試看",
    fetchSuggestions: handleFetch,
    renderOption,
  },
} as Meta;

const Template: Story<AutoCompleteProps> = (args) => <AutoComplete {...args} />;

export const Primary = Template.bind({});
