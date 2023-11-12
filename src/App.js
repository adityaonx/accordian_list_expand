import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordian">
      <ol>
        <li>
          {faqs.map((item, i) => {
            return <Item item={item} num={i} />;
          })}
        </li>
      </ol>
    </div>
  );
}
function Item({ item, num }) {
  const [open, setOpen] = useState(false);
  function expandItem() {
    setOpen(!open);
  }
  return (
    <div className={open ? "item open" : "item"} onClick={expandItem}>
      <p className="number">{"0" + (Number(num) + 1)}</p>
      <p className="title">{item.title} </p>
      <span className={open ? "number" : ""}>{open ? "-" : "+"}</span>
      <p className="content-box">{open ? item.text : ""}</p>
    </div>
  );
}
