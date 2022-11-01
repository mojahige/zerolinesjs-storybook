import template from "./tab.html?raw";
import "./tab.css";

export default {
  title: "Example/Tab",
};

const Template = () => template;

export const Foo = Template.bind({});
